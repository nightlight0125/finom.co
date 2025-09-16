import axios from '../utils/axios';

// API 服务类
class ApiService {
  // GET 请求
  static async get(url, params = {}) {
    try {
      const response = await axios.get(url, { params });
      return response;
    } catch (error) {
      throw error;
    }
  }

  // POST 请求
  static async post(url, data = {}) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // PUT 请求
  static async put(url, data = {}) {
    try {
      const response = await axios.put(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // DELETE 请求
  static async delete(url) {
    try {
      const response = await axios.delete(url);
      return response;
    } catch (error) {
      throw error;
    }
  }

  // PATCH 请求
  static async patch(url, data = {}) {
    try {
      const response = await axios.patch(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

}

export default ApiService;
