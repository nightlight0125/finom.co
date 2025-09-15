import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './styles/fonts.css'; // 导入字体样式
import './styles/responsive.css'; // 导入响应式样式
import { theme } from './styles/theme';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: '100vh', background: '#F0EFF5' }}>
        <Header />
        <Content style={{ padding: '24px' }}>
          <Dashboard />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;

