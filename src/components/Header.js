import React from 'react';
import { Layout, Menu, Button, Dropdown, Avatar } from 'antd';
import { QuestionCircleOutlined, UserOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../assets/images/Finom.png'; // 保持您的路径
import Group1321319701 from '../assets/images/Group 1321319701.png'; 
import Group1321319702 from '../assets/images/Group 1321319702.png'; 
import Group1321319700 from '../assets/images/Group 1321319700.png'; 
const { Header: AntHeader } = Layout;

const Header = () => {
  const menuItems = [
    { 
      key: 'go', 
      label: (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: '#fce4ec', 
          borderRadius: '22px',
          height: '44px',
          minWidth: '100px',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <img src={Group1321319700} alt="help" style={{ width: '32px', height: '32px'}} />
          <span style={{ 
            color: '#262626', 
            fontWeight: 'bold',
            fontSize: '18px',
            fontWeight: '500',
            color: '#03030E',
            paddingLeft: '8px'
          }}>
            GO
          </span>
        </div>
      )
    },
    { key: 'money', label: 'Money' },
    { key: 'documents', label: 'Documents' },
    { key: 'team', label: 'Team' },
    { key: 'cards', label: 'Cards' },
    { key: 'invite', label: 'Invite friends' },
  ];

  const userMenu = {
    items: [
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
      { key: 'logout', label: 'Logout' },
    ],
  };

  return (
    <AntHeader style={{ 
      background: '#F0EFF5', // 与主题背景色一致
      padding: '0 24px', 
      boxShadow: 'none', // 移除阴影，与主题融为一体
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: 'none' // 移除底部边框
    }}>
      {/* FINOM Logo - 使用您的图片路径 */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        height: '18px'
      }}>
        <img 
          src={logo} 
          alt="logo" 
          style={{ 
            height: '18px',
            width: 'auto',
            maxWidth: '82px'
          }} 
        />
      </div>
      
      {/* 导航菜单 */}
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{ 
          flex: 1, 
          justifyContent: 'center', 
          border: 'none',
          background: 'transparent',
          margin: '0 24px',
          fontSize: '18px',
          fontWeight: '500',
        }}
        defaultSelectedKeys={['go']}
        theme="light"
      />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Button 
          type="text" 
          style={{ 
            color: '#03030E',
            fontSize: '16px',
            height: 'auto',
            padding: '8px 0',
            position: 'relative' 
          }}
        >
          <img 
            src={Group1321319701} 
            alt="help" 
            style={{ 
              width: '22px',
              height: '22px',
              color: '#000000',
            }} 
          />
          Help center
        </Button>
        <Dropdown menu={userMenu} placement="bottomRight">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            cursor: 'pointer',
            color: '#03030E',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1.34447H17C19.2091 1.34447 21 3.13533 21 5.34447V24.0701H1V5.34447C1 3.13533 2.79086 1.34447 5 1.34447Z" stroke="black" stroke-width="2"/>
<path d="M11.5 17.0786C12.8807 17.0786 14 18.1979 14 19.5786V22.9458H9V19.5786C9 18.1979 10.1193 17.0786 11.5 17.0786Z" stroke="black" stroke-width="2"/>
<rect x="5" y="3" width="4" height="2" fill="black"/>
<rect x="5" y="7" width="4" height="2" fill="black"/>
<rect x="13" y="3" width="4" height="2" fill="black"/>
<rect x="13" y="7" width="4" height="2" fill="black"/>
</svg>

            <span>IVANOVAJANA</span>
            <DownOutlined style={{ fontSize: '10px' }} />
          </div>
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default Header;
