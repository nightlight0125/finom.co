import ApiService from '../services/api';

class ConfigService {
  // 获取配置列表
  static async getConfigs(params = {}) {
    try {
      const { code, data, msg } = await ApiService.get('/system/demo-config/page', {
        params: {
          pageNo: 1,
          pageSize: 10,
          ...params
        }
      });

      if (code === 0) {
        return {
          success: true,
          data: data.list || [],
          total: data.total || 0
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to fetch configs'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 获取第一个配置
  static async getFirstConfig() {
    try {
      const { code, data, msg } = await ApiService.get('/system/demo-config/page', {
        params: {
          pageNo: 1,
          pageSize: 1
        }
      });

      if (code === 0 && data.list && data.list.length > 0) {
        return {
          success: true,
          data: data.list[0]
        };
      } else {
        return {
          success: false,
          error: msg || 'No config data found'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 根据ID获取配置详情
  static async getConfigById(id) {
    try {
      const { code, data, msg } = await ApiService.get(`/system/demo-config/get?id=${id}`);

      if (code === 0) {
        return {
          success: true,
          data: data
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to fetch config'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 创建配置
  static async createConfig(configData) {
    try {
      const { code, data, msg } = await ApiService.post('/system/demo-config/create', configData);

      if (code === 0) {
        return {
          success: true,
          data: data
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to create config'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 更新配置
  static async updateConfig(configData) {
    try {
      const { code, data, msg } = await ApiService.put('/system/demo-config/update', configData);

      if (code === 0) {
        return {
          success: true,
          data: data
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to update config'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 删除配置
  static async deleteConfig(id) {
    try {
      const { code, data, msg } = await ApiService.delete(`/system/demo-config/delete?id=${id}`);

      if (code === 0) {
        return {
          success: true,
          data: data
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to delete config'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }

  // 批量删除配置
  static async deleteConfigs(ids) {
    try {
      const { code, data, msg } = await ApiService.delete(`/system/demo-config/delete-list?ids=${ids.join(',')}`);

      if (code === 0) {
        return {
          success: true,
          data: data
        };
      } else {
        return {
          success: false,
          error: msg || 'Failed to delete configs'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error'
      };
    }
  }
}

export default ConfigService;
