import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, InputNumber, Modal, Popconfirm, Space, Table, message } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ApiService from '../services/api';

const TransactionManager = ({ visible, onClose }) => {
    const [transactions, setTransactions] = useState([]);

    const [editingKey, setEditingKey] = useState('');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingData, setEditingData] = useState({});
    const [newTransaction, setNewTransaction] = useState({
        name: '',
        amount: null,
        status: 'completed',
        currency: '€',
        date: null
    });

    const statusOptions = [
        { value: 'completed', label: 'Completed' },
        { value: 'rejected', label: 'Rejected' }
    ];

    useEffect(() => {
        getTransactions();
    }, [visible]);

    const getTransactions = async () => {
        const { code, data, msg } = await ApiService.get('/system/demo-bill/list');
        if (code === 0) {
            setTransactions(data.details);
        } else {
            message.error("Network error");
        }
    };

    const currencyOptions = [
        { value: '€', label: 'EUR' },
    ];

    const isEditing = (record) => record.id === editingKey;

    const edit = (record) => {
        setEditingKey(record.id);
        const editingRecord = {
            ...record,
            date: typeof record.date === 'number' ? dayjs(record.date) : record.date
        };
        setEditingData(editingRecord);
    };

    const cancel = () => {
        setEditingKey('');
        setIsAdding(false);
        setEditingData({});
        setNewTransaction({
            name: '',
            amount: null,
            status: 'completed',
            currency: '€',
            date: null
        });
    };

    const save = async (id) => {
        if (!editingData || Object.keys(editingData).length === 0) {
            message.error('No changes to save');
            return;
        }

        // 格式化数据
        const updatedRecord = {
            ...editingData,
            amount: editingData.amount, // 直接使用整数（分）
            date: editingData.date ? (dayjs.isDayjs(editingData.date) ? editingData.date.valueOf() : editingData.date) : editingData.date // 转换为时间戳
        };
        console.log(updatedRecord, "this is updatedRecord");

        const { code, data, msg } = await ApiService.put(`/system/demo-bill/update`, updatedRecord);

        if (code === 0) {
            // 更新本地状态
            const updatedTransactions = transactions.map(item => {
                if (item.id === id) {
                    return updatedRecord;
                }
                return item;
            });
            setTransactions(updatedTransactions);
            setEditingKey('');
            setEditingData({});
            message.success('Transaction updated successfully');
            // 通知其他组件（如 MainWalletDetails）刷新
            window.dispatchEvent(new Event('transactions:updated'));
        } else {
            message.error('Update failed');
        }
    };

    const handleAdd = async () => {
        if (!newTransaction.name || newTransaction.amount === null || !newTransaction.date || !newTransaction.status || !newTransaction.currency) {
            message.error('Please fill in all required fields');
            return;
        }

        // 格式化数据
        const formattedTransaction = {
            ...newTransaction,
            amount: newTransaction.amount, // 直接使用整数（分）
            date: dayjs.isDayjs(newTransaction.date) ? newTransaction.date.valueOf() : newTransaction.date // 转换为时间戳
        };

        const { code, data, msg } = await ApiService.post('/system/demo-bill/create', formattedTransaction);
        if (code === 0) {
            const currentTransactions = Array.isArray(transactions) ? transactions : [];
            const newId = currentTransactions.length > 0
                ? Math.max(...currentTransactions.map(t => t.id)) + 1
                : 1;
            setTransactions([...currentTransactions, { ...formattedTransaction, id: newId }]);
            setNewTransaction({
                name: '',
                amount: null,
                status: 'completed',
                currency: '€',
                date: null
            });
            setIsAdding(false);
            message.success('Transaction added successfully');
            window.dispatchEvent(new Event('transactions:updated'));
        } else {
            message.error("Network error");
        }
    };

    const handleDelete = async (id) => {
        const currentTransactions = Array.isArray(transactions) ? transactions : [];
        setTransactions(currentTransactions.filter(item => item.id !== id));
        const { code, data, msg } = await ApiService.delete(`/system/demo-bill/delete?id=${id}`);
        console.log(code, data, msg, "this is code, data, msg");
        if (code === 0) {
            message.success('Transaction deleted successfully');
            window.dispatchEvent(new Event('transactions:updated'));
        } else {
            message.error("Network error");
        }
    };

    const handleBatchDelete = async () => {
        const { code, data, msg } = await ApiService.delete(`/system/demo-bill/delete-list?ids=${selectedRowKeys.join(',')}`);
        console.log(code, data, msg, "this is code, data, msg");
        if (code === 0) {
            const currentTransactions = Array.isArray(transactions) ? transactions : [];
            setTransactions(currentTransactions.filter(item => !selectedRowKeys.includes(item.id)));
            setSelectedRowKeys([]);
            message.success(`${selectedRowKeys.length} transactions deleted successfully`);
            window.dispatchEvent(new Event('transactions:updated'));
        } else {
            message.error("Network error");
        }
    };


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <Input
                            value={editingData.name || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, name: e.target.value }))}
                            style={{ width: '100%' }}
                        />
                    );
                }
                return text;
            }
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <InputNumber
                            value={editingData.amount || 0}
                            onChange={value => setEditingData(prev => ({ ...prev, amount: value }))}
                            style={{ width: '100%' }}
                            min={-999999999}
                            step={1}
                            precision={0}
                        />
                    );
                }
                return `${(text / 100).toFixed(2)} ${record.currency}`;
            }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => {
                if (isEditing(record)) {
                    return (
                        <select
                            value={editingData.status || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, status: e.target.value }))}
                            style={{ width: '100%', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
                        >
                            {statusOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    );
                }
                return (
                    <span style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        backgroundColor: status === 'completed' ? '#f6ffed' : status === 'pending' ? '#fff7e6' : '#fff2f0',
                        color: status === 'completed' ? '#52c41a' : status === 'pending' ? '#faad14' : '#ff4d4f'
                    }}>
                        {status.toUpperCase()}
                    </span>
                );
            }
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <select
                            value={editingData.currency || ''}
                            onChange={e => setEditingData(prev => ({ ...prev, currency: e.target.value }))}
                            style={{ width: '100%', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: '4px' }}
                        >
                            {currencyOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    );
                }
                return text;
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (text, record) => {
                if (isEditing(record)) {
                    return (
                        <DatePicker
                            value={editingData.date ? (typeof editingData.date === 'number' ? dayjs(editingData.date) : editingData.date) : null}
                            onChange={date => setEditingData(prev => ({ ...prev, date: date }))}
                            style={{ width: '100%' }}
                            format="DD MMM"
                        />
                    );
                }
                // 格式化时间戳为 "DD MMM" 格式
                return dayjs(text).format('DD MMM');
            }
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <Space>
                        <Button
                            type="link"
                            onClick={() => save(record.id)}
                            style={{ color: '#52c41a' }}
                        >
                            Save
                        </Button>
                        <Button type="link" onClick={cancel}>
                            Cancel
                        </Button>
                    </Space>
                ) : (
                    <Space>
                        <Button
                            type="link"
                            icon={<EditOutlined />}
                            onClick={() => edit(record)}
                            style={{ color: '#1890ff' }}
                        >
                            Edit
                        </Button>
                        <Popconfirm
                            title="Are you sure you want to delete this transaction?"
                            icon={<ExclamationCircleOutlined style={{ color: 'red' }} />}
                            onConfirm={() => handleDelete(record.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                type="link"
                                icon={<DeleteOutlined />}
                                style={{ color: '#ff4d4f' }}
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
        <Modal
            title="Transaction Manager"
            open={visible}
            onCancel={onClose}
            width={1000}
            footer={null}
            style={{ top: 20 }}
        >
            <Card>
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
                            Add Transaction
                        </Button>
                        {selectedRowKeys.length > 0 && (
                            <Popconfirm
                                title={`Are you sure you want to delete ${selectedRowKeys.length} transactions?`}
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

                {/* Add New Transaction Form */}
                {isAdding && (
                    <Card
                        title="Add New Transaction"
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
                                <label>Name *</label>
                                <Input
                                    value={newTransaction.name}
                                    onChange={e => setNewTransaction({ ...newTransaction, name: e.target.value })}
                                    placeholder="Enter name"
                                    style={{ marginTop: 4 }}
                                />
                            </div>
                            <div>
                                <label>Amount * (in cents)</label>
                                <InputNumber
                                    value={newTransaction.amount}
                                    onChange={value => setNewTransaction({ ...newTransaction, amount: value })}
                                    placeholder="Enter amount in cents"
                                    style={{ width: '100%', marginTop: 4 }}
                                    min={-999999999}
                                    step={1}
                                    precision={0}
                                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                />
                            </div>
                            <div>
                                <label>Status</label>
                                <select
                                    value={newTransaction.status}
                                    onChange={e => setNewTransaction({ ...newTransaction, status: e.target.value })}
                                    style={{ width: '100%', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: '4px', marginTop: 4 }}
                                >
                                    {statusOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Currency</label>
                                <select
                                    value={newTransaction.currency}
                                    onChange={e => setNewTransaction({ ...newTransaction, currency: e.target.value })}
                                    style={{ width: '100%', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: '4px', marginTop: 4 }}
                                >
                                    {currencyOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label>Date *</label>
                                <DatePicker
                                    value={newTransaction.date}
                                    onChange={date => setNewTransaction({ ...newTransaction, date: date })}
                                    placeholder="Select date"
                                    style={{ width: '100%', marginTop: 4 }}
                                    format="DD MMM"
                                />
                            </div>
                        </div>
                    </Card>
                )}

                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={Array.isArray(transactions) ? transactions : []}
                    rowKey="id"
                    pagination={false}
                    style={{ marginTop: 16 }}
                />
            </Card>
        </Modal>
    );
};

export default TransactionManager;
