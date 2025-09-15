import React, { useState } from 'react';
import AccountClosureNotification from './AccountClosureNotification';
import BalanceWidget from './BalanceWidget';
import BoostWidget from './BoostWidget';
import CardsWidget from './CardsWidget';
import CustomizeActions from './CustomizeActions';
import MainWalletDetails from './MainWalletDetails';
import TransactionsWidget from './TransactionsWidget';

const Dashboard = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletClick = (wallet) => {
    if (wallet.id === 'main') {
      setSelectedWallet(wallet);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedWallet(null);
  };

  return (
    <div style={{
      maxWidth: '1440px', // 基于设计稿宽度
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative'
    }}>
      {/* 响应式布局容器 */}
      <div style={{
        display: 'flex',
        gap: '30px',
        minHeight: '100vh',
        alignItems: 'flex-start'
      }}>
        {/* 左列 - 侧边栏组件，与导航栏对齐 */}
        <div style={{
          width: 'calc(520px * 100vw / 1440px)', // 基于设计稿比例
          minWidth: '300px', // 最小宽度
          maxWidth: '520px', // 最大宽度
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '0' // 确保与导航栏左对齐
        }}>
          <CustomizeActions />
          <BalanceWidget onWalletClick={handleWalletClick} />
          <BoostWidget />
          <CardsWidget />
        </div>

        {/* 右列 - 根据状态显示不同内容 */}
        <div style={{
          width: 'calc(835px * 100vw / 1440px)', // 基于设计稿比例
          minWidth: '400px', // 最小宽度
          maxWidth: '835px', // 最大宽度
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {selectedWallet ? (
            // 显示主钱包详情页面
            <MainWalletDetails
              wallet={selectedWallet}
              onBack={handleBackToDashboard}
            />
          ) : (
            // 显示默认的右列内容
            <>
              <AccountClosureNotification />
              <TransactionsWidget />
            </>
          )}
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '5%',
          width: '50px',
          height: '50px',
          backgroundColor: '#e91e63',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(233, 30, 99, 0.3)',
          cursor: 'pointer',
          zIndex: 1000
        }}
        title="Chat Support"
      >
        <img
          src={require('../assets/images/Group 1321319738.png')}
          alt="custom"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
