import { useState, useCallback } from 'react';
import ConfigService from '../utils/configService';

// 获取第一个配置的Hook
export const useFirstConfig = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFirstConfig = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const result = await ConfigService.getFirstConfig();
    
    if (result.success) {
      setData(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  return {
    data,
    loading,
    error,
    fetchFirstConfig
  };
};

// 获取配置列表的Hook
export const useConfigList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConfigs = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    
    const result = await ConfigService.getConfigs(params);
    
    if (result.success) {
      setData(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  return {
    data,
    loading,
    error,
    fetchConfigs
  };
};

// 获取配置详情的Hook
export const useConfigDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConfigById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    
    const result = await ConfigService.getConfigById(id);
    
    if (result.success) {
      setData(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  return {
    data,
    loading,
    error,
    fetchConfigById
  };
};

export default ConfigService;
