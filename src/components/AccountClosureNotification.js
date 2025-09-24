import { Button, Card } from 'antd';
import React from 'react';
import Group1321319704 from '../assets/images/red.png';

const AccountClosureNotification = ({ firstConfig }) => {
  const handleTransferFunds = () => {
    console.log('Transfer funds clicked');
  };

  return (
    <Card
      style={{
        width: '835px',
        height: '372px',
        borderRadius: '11px',
        opacity: 1,
        padding: '24px',
        position: 'relative'
      }}

    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }}>
        <div style={{
          color: '#FF4C5C',
          fontWeight: '600',
          margin: 0,
          fontSize: '24px',
          fontFamily: 'EuclidCircularB, -apple-system, BlinkMacSystemFont, sans-serif'
        }}>
          Account Closure Notification
        </div>

        <img
          src={Group1321319704}
          alt="help"
          style={{
            width: '154px',
            height: '144px',
            position: 'absolute',
            top: '35px',
            right: '30px',
            opacity: 1,
            transform: 'rotate(0deg)'
          }}
        />
      </div>

      {/* 内容区域 - 响应式 */}
      <div style={{
        color: '#000000',
        lineHeight: '27px',
        marginBottom: '24px',
        fontWeight: '500',
        flex: 1,
        fontSize: '18px',
        fontFamily: 'EuclidCircularB, -apple-system, BlinkMacSystemFont, sans-serif',
        paddingRight: '180px' // 为右侧图标留出空间
      }}>
        <p style={{ margin: 0 }}>
          {firstConfig?.notification || ''}
        </p>
      </div>

      {/* 按钮 - 响应式 */}
      <Button
        onClick={handleTransferFunds}
        style={{
          backgroundColor: '#FF4C5C',
          color: '#FBE1DF',
          fontWeight: '500',
          borderRadius: '11px',
          alignSelf: 'flex-start',
          height: '40px',
          fontSize: '16px',
        }}
      >
        Transfer of funds
      </Button>
    </Card>
  );
};

export default AccountClosureNotification;
