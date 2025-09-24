import { Modal, Tabs } from 'antd';
import React, { useState } from 'react';
import TransactionList from './TransactionList';
import BasicConfig from './BasicConfig';

const TransactionManager = ({ visible, onClose, onConfigChange }) => {
    const [activeKey, setActiveKey] = useState('transactions');

    const handleTabChange = (key) => {
        setActiveKey(key);
    };

    const renderContent = () => {
        if (activeKey === 'transactions') {
            return <TransactionList />;
        } else if (activeKey === 'config') {
            return <BasicConfig onConfigChange={onConfigChange} />;
        }
        return null;
    };

    return (
        <Modal
            title="Transaction Manager"
            open={visible}
            onCancel={onClose}
            width={1200}
            footer={null}
            style={{ top: 20 }}
        >
            <Tabs
                activeKey={activeKey}
                onChange={handleTabChange}
                style={{ minHeight: '500px' }}
                items={[
                    {
                        key: 'transactions',
                        label: 'Historique Management',
                        children: renderContent()
                    },
                    {
                        key: 'config',
                        label: 'Basic Configuration',
                        children: renderContent()
                    }
                ]}
            />
        </Modal>
    );
};

export default TransactionManager;
