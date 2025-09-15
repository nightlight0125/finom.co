import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined, CloseOutlined, MoreOutlined } from '@ant-design/icons';

const TransactionsList = () => {
  const transactions = [
    {
      id: '1',
      name: 'MORENO MORENO CELESTE',
      amount: -15025.00,
      currency: '€',
      date: '8 juil.',
      type: 'debit',
      status: 'completed',
      hasOptions: true,
    },
    {
      id: '2',
      name: 'MORENO MORENO CELESTE',
      amount: -10721.00,
      currency: '€',
      date: '7 juil.',
      type: 'debit',
      status: 'rejected',
      hasOptions: false,
    },
    {
      id: '3',
      name: 'Andreas Peters',
      amount: 3003.00,
      currency: '€',
      date: '7 juil.',
      type: 'credit',
      status: 'completed',
      hasOptions: false,
    },
    {
      id: '4',
      name: 'Steffen Porath',
      amount: 3003.00,
      currency: '€',
      date: '7 juil.',
      type: 'credit',
      status: 'completed',
      hasOptions: false,
    },
    {
      id: '5',
      name: 'Torsten Mueller',
      amount: 1004.00,
      currency: '€',
      date: '7 juil.',
      type: 'credit',
      status: 'completed',
      hasOptions: false,
    },
  ];

  return (
    <div style={{ padding: '0' }}>
      {transactions.map((transaction, index) => (
        <div
          key={transaction.id}
          style={{
            display: 'flex',
            alignItems: 'flex-start', // 改为 flex-start，让图标与姓名顶部对齐
            padding: '16px 0',
          }}
        >
          {/* 左侧图标 - 与姓名中间对齐 */}
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#EFEFF4',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              flexShrink: 0,
              marginRight: '12px',
              marginTop: '2px', 
            }}
          >
            {transaction.type === 'debit' ? (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="11" fill="#EFEFF4"/>
              <path d="M16 25L24 17M24 17V25M24 17H16" stroke="#2A2424" stroke-width="1.5"/>
              </svg>
              
            ) : (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="11" fill="#EFEFF4"/>
                <path d="M24 17L16 25M16 25V17M16 25H24" stroke="#2A2424" stroke-width="1.5"/>
              </svg>
            )}
            
            {/* 拒绝状态标识 */}
            {transaction.status === 'rejected' && (
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '0px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#FF4C5C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CloseOutlined style={{ fontSize: '10px', color: 'white' }} />
              </div>
            )}
          </div>

          {/* 右侧内容区域 - 包含分隔线，不包含图标 */}
          <div 
            style={{ 
              flex: 1, 
              display: 'flex',
              alignItems: 'center', // 保持内容区域居中对齐
              borderBottom: index < transactions.length - 1 ? '1px solid #ECECEF' : 'none',
              paddingBottom: '16px',
              marginBottom: '16px'
            }}
          >
            {/* 姓名 */}
            <div style={{ flex: 1, marginRight: '12px' }}>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#6C6A75',
                lineHeight: '1.2'
              }}>
                {transaction.name}
              </div>
            </div>

            {/* 金额和日期 */}
            <div style={{ textAlign: 'right', flexShrink: 0, marginRight: transaction.hasOptions ? '8px' : '0' }}>
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: transaction.amount < 0 ? '#6C6A75' : '#0B9155',
                  textDecoration: transaction.status === 'rejected' ? 'line-through' : 'none',
                  marginBottom: '2px',
                  lineHeight: '1.2'
                }}
              >
                {transaction.amount > 0 ? '+' : ''}{Math.abs(transaction.amount).toLocaleString('fr-FR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })} {transaction.currency}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: transaction.status === 'rejected' ? '#FF4C5C' : '#8E8EA0',
                  lineHeight: '2'
                }}
              >
                {transaction.status === 'rejected' ? `Refusé ${transaction.date}` : transaction.date}
              </div>
            </div>

            {/* 选项图标 */}
            {transaction.hasOptions && (
              <MoreOutlined 
                style={{ 
                  fontSize: '16px', 
                  color: '#999999', 
                  cursor: 'pointer',
                  flexShrink: 0
                }} 
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsList;
