import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'https://admin.flysimshop.com/admin-api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log('发送请求:', config);
    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    console.log('响应数据:', response);
    return response.data;
  },
  (error) => {
    console.error('响应错误:', error);

    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 403:
          console.error('没有权限访问该资源');
          break;
        case 404:
          console.error('请求的资源不存在');
          break;
        case 500:
          console.error('服务器内部错误');
          break;
        default:
          console.error('请求失败:', data?.message || '未知错误');
      }
    } else if (error.request) {
      console.error('网络错误，请检查网络连接');
    } else {
      console.error('请求配置错误:', error.message);
    }

    return Promise.reject(error);
  }
);

export default instance;


