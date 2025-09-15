import ReactECharts from 'echarts-for-react';
import React from 'react';

const ReconciliationChart = () => {
  // 图表配置
  const getChartOption = () => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function (params) {
          const data = params[0];
          return `${data.seriesName}: ${data.value} €`;
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['juil.'],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#666666',
          fontSize: 12
        }
      },
      yAxis: {
        type: 'value',
        show: true, // 显示Y轴
        min: 0,
        max: 20000,
        interval: 4000, // 每4000一个刻度，产生5条线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false // 隐藏Y轴标签
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#F0F0F0',
            width: 1,
            type: 'solid'
          }
        }
      },
      series: [
        {
          name: 'Reconciled',
          type: 'bar',
          data: [15025],
          itemStyle: {
            color: '#6060FE',
            borderRadius: [2, 2, 0, 0]
          },
          barWidth: 55
        },
        {
          name: 'Unreconciled',
          type: 'bar',
          data: [15025],
          itemStyle: {
            color: '#FF4C5C',
            borderRadius: [2, 2, 0, 0]
          },
          barWidth: 55
        }
      ]
    };
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* 图表容器 */}
      <div style={{
        height: '140px',
        width: '100%'
      }}>
        <ReactECharts
          option={getChartOption()}
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {/* 图例说明 */}
      <div style={{
        position: 'absolute',
        top: '0px',
        right: '25px',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '12px 16px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        lineHeight: '1.4',
        minWidth: '200px',
        zIndex: 10
      }}>
        <div style={{ marginBottom: '8px' }}>
          <div style={{
            fontWeight: '600',
            color: '#333333',
            fontSize: '14px',
            marginBottom: '2px'
          }}>
            Reconciled:
          </div>
          <div style={{ color: '#999999', fontSize: '12px' }}>
            Amounts are fully matched with invoices or receipts
          </div>
        </div>

        <div style={{ marginBottom: '8px' }}>
          <div style={{
            fontWeight: '600',
            color: '#333333',
            fontSize: '14px',
            marginBottom: '2px'
          }}>
            Unreconciled:
          </div>
          <div style={{ color: '#999999', fontSize: '12px' }}>
            Amounts are mismatched or not fully matched
          </div>
        </div>

        <div>
          <div style={{
            fontWeight: '600',
            color: '#333333',
            fontSize: '14px',
            marginBottom: '2px'
          }}>
            Not required:
          </div>
          <div style={{ color: '#999999', fontSize: '12px' }}>
            Documents are not required
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReconciliationChart;
