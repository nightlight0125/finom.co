import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined, SearchOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Popconfirm, Space, Table, message, Select, Row, Col, Tooltip } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const { Option } = Select;
const { RangePicker } = DatePicker;

const BasicConfig = ({ onConfigChange }) => {
    const [form] = Form.useForm();
    const [searchForm] = Form.useForm();
    const [configs, setConfigs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingKey, setEditingKey] = useState('');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingData, setEditingData] = useState({});
    const [newConfig, setNewConfig] = useState({
        type: '',
        notification: '',
        iban: '',
        bic: '',
        recipient: '',
        adresse: '',
        bank: '',
        amount: ''
    });
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 0
    });
    const [searchParams, setSearchParams] = useState({});
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);


    useEffect(() => {
        loadConfigs();
    }, [pagination.current, pagination.pageSize, searchParams]);

    const loadConfigs = async () => {
        try {
            setLoading(true);
            const params = {
                pageNo: pagination.current,
                pageSize: pagination.pageSize,
                ...searchParams
            };
            
            const { code, data, msg } = await ApiService.get('/system/demo-config/page', { params });
            if (code === 0) {
                setConfigs(data.list || []);
                setPagination(prev => ({
                    ...prev,
                    total: data.total || 0
                }));
            } else {
                message.error(msg || 'Failed to load configurations');
            }
        } catch (error) {
            message.error('Failed to load configurations');
        } finally {
            setLoading(false);
        }
    };

    const isEditing = (record) => record.id === editingKey;

    const edit = (record) => {
        setEditingKey(record.id);
        setEditingData({ ...record });
    };

    const cancel = () => {
        setEditingKey('');
        setIsAdding(false);
        setEditingData({});
        setNewConfig({
            type: '',
            notification: '',
            iban: '',
            bic: '',
            recipient: '',
            adresse: '',
            bank: '',
            amount: ''
        });
    };

    const save = async (id) => {
        if (!editingData || Object.keys(editingData).length === 0) {
            message.error('No changes to save');
            return;
        }

        const { code, data, msg } = await ApiService.put('/system/demo-config/update', editingData);
        if (code === 0) {
            const updatedConfigs = configs.map(item => {
                if (item.id === id) {
                    return editingData;
                }
                return item;
            });
            setConfigs(updatedConfigs);
            setEditingKey('');
            setEditingData({});
            message.success('Configuration updated successfully');
            // 通知父组件配置已更新
            if (onConfigChange) {
                onConfigChange();
            }
        } else {
            message.error(msg || 'Update failed');
        }
    };

    const handleAdd = async () => {
        if (!newConfig.type || !newConfig.notification || !newConfig.iban || !newConfig.bic || 
            !newConfig.recipient || !newConfig.adresse || !newConfig.bank || !newConfig.amount) {
            message.error('Please fill in all required fields');
            return;
        }

        const { code, data, msg } = await ApiService.post('/system/demo-config/create', newConfig);
        if (code === 0) {
            setNewConfig({
                type: '',
                notification: '',
                iban: '',
                bic: '',
                recipient: '',
                adresse: '',
                bank: '',
                amount: ''
            });
            setIsAdding(false);
            message.success('Configuration added successfully');
            loadConfigs();
            // 通知父组件配置已更新
            if (onConfigChange) {
                onConfigChange();
            }
        } else {
            message.error(msg || 'Failed to add configuration');
        }
    };

    const handleDelete = async (id) => {
        const { code, data, msg } = await ApiService.delete(`/system/demo-config/delete?id=${id}`);
        if (code === 0) {
            setConfigs(configs.filter(item => item.id !== id));
            message.success('Configuration deleted successfully');
            // 通知父组件配置已更新
            if (onConfigChange) {
                onConfigChange();
            }
        } else {
            message.error(msg || 'Failed to delete configuration');
        }
    };

    const handleBatchDelete = async () => {
        const { code, data, msg } = await ApiService.delete(`/system/demo-config/delete-list?ids=${selectedRowKeys.join(',')}`);
        if (code === 0) {
            setConfigs(configs.filter(item => !selectedRowKeys.includes(item.id)));
            setSelectedRowKeys([]);
            message.success(`${selectedRowKeys.length} configurations deleted successfully`);
            // 通知父组件配置已更新
            if (onConfigChange) {
                onConfigChange();
            }
        } else {
            message.error(msg || 'Failed to delete configurations');
        }
    };

    const handleSearch = (values) => {
        const searchData = { ...values };
        if (searchData.createTime && searchData.createTime.length === 2) {
            searchData.createTime = [
                searchData.createTime[0].format('YYYY-MM-DD HH:mm:ss'),
                searchData.createTime[1].format('YYYY-MM-DD HH:mm:ss')
            ];
        }
        setSearchParams(searchData);
        setPagination(prev => ({ ...prev, current: 1 }));
    };

    const handleTableChange = (pagination) => {
        setPagination(pagination);
    };

    const handleViewDetail = async (id) => {
        try {
            setDetailLoading(true);
            const { code, data, msg } = await ApiService.get(`/system/demo-config/get?id=${id}`);
            if (code === 0) {
                setDetailData(data);
                setDetailModalVisible(true);
            } else {
                message.error(msg || 'Failed to load detail');
            }
        } catch (error) {
            message.error('Failed to load detail');
        } finally {
            setDetailLoading(false);
        }
    };

    const handleCloseDetail = () => {
        setDetailModalVisible(false);
        setDetailData(null);
    };

    const columns = [
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: 80,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.type || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, type: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return text;
            }
        },
        {
            title: 'Notification',
            dataIndex: 'notification',
            key: 'notification',
            width: 200,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.notification || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, notification: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '200px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'IBAN',
            dataIndex: 'iban',
            key: 'iban',
            width: 100,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.iban || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, iban: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '100px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'BIC',
            dataIndex: 'bic',
            key: 'bic',
            width: 80,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.bic || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, bic: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '80px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Recipient',
            dataIndex: 'recipient',
            key: 'recipient',
            width: 100,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.recipient || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, recipient: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '100px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Address',
            dataIndex: 'adresse',
            key: 'adresse',
            width: 120,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.adresse || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, adresse: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '120px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Bank',
            dataIndex: 'bank',
            key: 'bank',
            width: 100,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.bank || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, bank: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '100px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: 80,
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.amount || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, amount: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return (
                    <Tooltip title={text}>
                        <div style={{ 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis', 
                            whiteSpace: 'nowrap',
                            maxWidth: '80px'
                        }}>
                            {text}
                        </div>
                    </Tooltip>
                );
            }
        },
        {
            title: 'Create Time',
            dataIndex: 'createTime',
            key: 'createTime',
            width: 150,
            render: (text) => (
                <div style={{ 
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {text ? dayjs(text).format('YYYY-MM-DD HH:mm:ss') : '-'}
                </div>
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            width: 180,
            fixed: 'right',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <Space size="small">
                        <Button
                            type="link"
                            onClick={() => save(record.id)}
                            style={{ color: '#52c41a', padding: '4px 8px' }}
                            size="small"
                        >
                            Save
                        </Button>
                        <Button 
                            type="link" 
                            onClick={cancel}
                            style={{ padding: '4px 8px' }}
                            size="small"
                        >
                            Cancel
                        </Button>
                    </Space>
                ) : (
                    <Space size="small">
                        <Button
                            type="link"
                            icon={<EyeOutlined />}
                            onClick={() => handleViewDetail(record.id)}
                            style={{ color: '#52c41a', padding: '4px 8px' }}
                            size="small"
                        >
                            View
                        </Button>
                        <Button
                            type="link"
                            icon={<EditOutlined />}
                            onClick={() => edit(record)}
                            style={{ color: '#1890ff', padding: '4px 8px' }}
                            size="small"
                        >
                            Edit
                        </Button>
                        <Popconfirm
                            title="Are you sure you want to delete this configuration?"
                            icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
                            onConfirm={() => handleDelete(record.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                type="link"
                                icon={<DeleteOutlined />}
                                style={{ color: '#ff4d4f', padding: '4px 8px' }}
                                size="small"
                            >
                                Delete
                            </Button>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRowKeys,
    };

    return (
        <div>
            {/* 搜索表单 */}
            {/* <Card title="Search Configuration" style={{ marginBottom: 16 }}>
                <Form
                    form={searchForm}
                    layout="inline"
                    onFinish={handleSearch}
                    style={{ marginBottom: 16 }}
                >
                    <Row gutter={16} style={{ width: '100%' }}>
                        <Col span={6}>
                            <Form.Item name="type">
                                <Input placeholder="Type" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="notification">
                                <Input placeholder="Notification" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="iban">
                                <Input placeholder="IBAN" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="recipient">
                                <Input placeholder="Recipient" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="bank">
                                <Input placeholder="Bank" />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name="createTime">
                                <RangePicker placeholder={['Start Date', 'End Date']} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Space>
                                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                                    Search
                                </Button>
                                <Button onClick={() => {
                                    searchForm.resetFields();
                                    setSearchParams({});
                                }}>
                                    Reset
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Card> */}

            {/* 操作按钮 */}
            <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setIsAdding(true)}
                        style={{
                            backgroundColor: '#7273CA',
                            borderColor: '#7273CA',
                            borderRadius: '8px'
                        }}
                    >
                        Add Configuration
                    </Button>
                    {selectedRowKeys.length > 0 && (
                        <Popconfirm
                            title={`Are you sure you want to delete ${selectedRowKeys.length} configurations?`}
                            icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
                            onConfirm={handleBatchDelete}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                danger
                                style={{ marginLeft: 8, borderRadius: '8px' }}
                            >
                                Delete Selected ({selectedRowKeys.length})
                            </Button>
                        </Popconfirm>
                    )}
                </div>
            </div>

            {/* 添加新配置表单 */}
            {isAdding && (
                <Card
                    title="Add New Configuration"
                    style={{ marginBottom: 16, backgroundColor: '#fafafa' }}
                    extra={
                        <Space>
                            <Button onClick={handleAdd} type="primary" style={{ backgroundColor: '#7273CA', borderColor: '#7273CA' }}>
                                Save
                            </Button>
                            <Button onClick={cancel}>Cancel</Button>
                        </Space>
                    }
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label>Type *</label>
                            <Input
                                value={newConfig.type}
                                onChange={e => setNewConfig({ ...newConfig, type: e.target.value })}
                                placeholder="Enter type"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>Notification *</label>
                            <Input
                                value={newConfig.notification}
                                onChange={e => setNewConfig({ ...newConfig, notification: e.target.value })}
                                placeholder="Enter notification"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>IBAN *</label>
                            <Input
                                value={newConfig.iban}
                                onChange={e => setNewConfig({ ...newConfig, iban: e.target.value })}
                                placeholder="Enter IBAN"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>BIC *</label>
                            <Input
                                value={newConfig.bic}
                                onChange={e => setNewConfig({ ...newConfig, bic: e.target.value })}
                                placeholder="Enter BIC"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>Recipient *</label>
                            <Input
                                value={newConfig.recipient}
                                onChange={e => setNewConfig({ ...newConfig, recipient: e.target.value })}
                                placeholder="Enter recipient"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>Address *</label>
                            <Input
                                value={newConfig.adresse}
                                onChange={e => setNewConfig({ ...newConfig, adresse: e.target.value })}
                                placeholder="Enter address"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>Bank *</label>
                            <Input
                                value={newConfig.bank}
                                onChange={e => setNewConfig({ ...newConfig, bank: e.target.value })}
                                placeholder="Enter bank"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                        <div>
                            <label>Amount *</label>
                            <Input
                                value={newConfig.amount}
                                onChange={e => setNewConfig({ ...newConfig, amount: e.target.value })}
                                placeholder="Enter amount"
                                style={{ marginTop: 4 }}
                            />
                        </div>
                    </div>
                </Card>
            )}

            {/* 配置列表表格 */}
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={configs}
                rowKey="id"
                loading={loading}
                scroll={{ x: 1200, y: 400 }}
                pagination={{
                    ...pagination,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
                onChange={handleTableChange}
                size="small"
            />

            {/* 详情弹窗 */}
            <Modal
                title="Configuration Details"
                open={detailModalVisible}
                onCancel={handleCloseDetail}
                footer={[
                    <Button key="close" onClick={handleCloseDetail}>
                        Close
                    </Button>
                ]}
                width={600}
            >
                {detailData && (
                    <div style={{ padding: '16px 0' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <strong>ID:</strong> {detailData.id}
                            </div>
                            <div>
                                <strong>Type:</strong> {detailData.type}
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <strong>Notification:</strong> {detailData.notification}
                            </div>
                            <div>
                                <strong>IBAN:</strong> {detailData.iban}
                            </div>
                            <div>
                                <strong>BIC:</strong> {detailData.bic}
                            </div>
                            <div>
                                <strong>Recipient:</strong> {detailData.recipient}
                            </div>
                            <div>
                                <strong>Bank:</strong> {detailData.bank}
                            </div>
                            <div>
                                <strong>Amount:</strong> {detailData.amount}
                            </div>
                            <div>
                                <strong>Address:</strong> {detailData.adresse}
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <strong>Create Time:</strong> {detailData.createTime ? dayjs(detailData.createTime).format('YYYY-MM-DD HH:mm:ss') : '-'}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default BasicConfig;
