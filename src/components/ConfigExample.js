import React, { useEffect } from 'react';
import { useFirstConfig, useConfigList } from '../hooks/useConfigService';

const ConfigExample = () => {
  const { data: firstConfig, loading: firstLoading, fetchFirstConfig } = useFirstConfig();
  const { data: configList, loading: listLoading, fetchConfigs } = useConfigList();

  useEffect(() => {
    // 组件挂载时获取数据
    fetchFirstConfig();
    fetchConfigs();
  }, [fetchFirstConfig, fetchConfigs]);

  return (
    <div style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', margin: '16px 0' }}>
      <h3>Config Service Example</h3>
      
      {/* 显示第一个配置 */}
      <div style={{ marginBottom: '16px' }}>
        <h4>First Config:</h4>
        {firstLoading ? (
          <p>Loading first config...</p>
        ) : firstConfig ? (
          <div>
            <p><strong>Type:</strong> {firstConfig.type}</p>
            <p><strong>Bank:</strong> {firstConfig.bank}</p>
            <p><strong>Amount:</strong> {firstConfig.amount}</p>
            <button onClick={fetchFirstConfig}>Refresh First Config</button>
          </div>
        ) : (
          <p>No first config available</p>
        )}
      </div>

      {/* 显示配置列表 */}
      <div>
        <h4>Config List:</h4>
        {listLoading ? (
          <p>Loading config list...</p>
        ) : configList.length > 0 ? (
          <div>
            <p>Total configs: {configList.length}</p>
            <ul>
              {configList.slice(0, 3).map((config, index) => (
                <li key={config.id || index}>
                  {config.type} - {config.bank} - {config.amount}
                </li>
              ))}
            </ul>
            <button onClick={() => fetchConfigs()}>Refresh Config List</button>
          </div>
        ) : (
          <p>No config list available</p>
        )}
      </div>
    </div>
  );
};

export default ConfigExample;
