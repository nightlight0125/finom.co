import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Card, Input, Space, Tabs, Typography } from 'antd';
import React, { useState } from 'react';
import ReconciliationChart from './ReconciliationChart';
import WalletActionButtons from './WalletActionButtons';

const { TabPane } = Tabs;
const { Text, Title } = Typography;

const MainWalletDetails = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [showReconciliationPopup, setShowReconciliationPopup] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // 可以添加成功提示
  };

  const handleDownloadRIB = () => {
  };

  const handleTransferFunds = () => {
  };

  const handleRecharge = () => {
  };

  const handleBetweenWallets = () => {
  };

  const handleStatementData = () => {
  };

  // 模拟交易数据
  const transactions = [
    {
      id: 1,
      name: 'MORENO MORENO CELESTE',
      amount: -15025.00,
      date: '8 juil.',
      status: 'completed',
      currency: '€'
    },
    {
      id: 2,
      name: 'MORENO MORENO CELESTE',
      amount: -10721.00,
      date: '7 juil.',
      status: 'rejected',
      currency: '€'
    },
    {
      id: 3,
      name: 'Andreas Peters',
      amount: 3003.00,
      date: '7 juil.',
      status: 'completed',
      currency: '€'
    },
    {
      id: 4,
      name: 'Steffen Porath',
      amount: 3003.00,
      date: '7 juil.',
      status: 'completed',
      currency: '€'
    },
    {
      id: 5,
      name: 'Torsten Mueller',
      amount: 1004.00,
      date: '7 juil.',
      status: 'completed',
      currency: '€'
    }
  ];

  const renderDetailsTab = () => (
    <div style={{ padding: '16px 0' }}>
      <div style={{ marginBottom: '16px', width: '183px', height: '26px' }}>
        <Text style={{ color: '#000000', fontSize: '16px', fontWeight: '600', lineHeight: '100%' }}>
          For SEPA transfers only
        </Text>
      </div>

      <Space style={{ marginBottom: '24px' }}>
        <Button
          icon={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 13.8333C13.5101 13.8333 13.6797 13.9036 13.8047 14.0286C13.9298 14.1536 14 14.3232 14 14.5C14 14.6768 13.9298 14.8464 13.8047 14.9714C13.6797 15.0964 13.5101 15.1667 13.3333 15.1667H2.66667C2.48986 15.1667 2.32029 15.0964 2.19526 14.9714C2.07024 14.8464 2 14.6768 2 14.5C2 14.3232 2.07024 14.1536 2.19526 14.0286C2.32029 13.9036 2.48986 13.8333 2.66667 13.8333H13.3333ZM8 1.836C8.17681 1.836 8.34638 1.90624 8.4714 2.03126C8.59643 2.15628 8.66667 2.32585 8.66667 2.50267V10.5553L11.86 7.362C11.9799 7.24221 12.1408 7.17256 12.3102 7.16721C12.4796 7.16186 12.6446 7.22121 12.7718 7.33319C12.899 7.44518 12.9788 7.60139 12.9949 7.77008C13.011 7.93877 12.9623 8.10727 12.8587 8.24133L12.8027 8.304L8.46867 12.6407C8.35396 12.7555 8.20127 12.8246 8.03925 12.8349C7.87723 12.8452 7.71701 12.7961 7.58867 12.6967L7.526 12.6413L3.196 8.31867C3.07598 8.19892 3.0061 8.03794 3.00056 7.86849C2.99503 7.69904 3.05426 7.53385 3.16621 7.40652C3.27816 7.2792 3.43442 7.19931 3.60318 7.18311C3.77195 7.16692 3.94054 7.21563 4.07467 7.31933L4.13733 7.37467L7.33333 10.564V2.50267C7.33333 2.32585 7.40357 2.15628 7.5286 2.03126C7.65362 1.90624 7.82319 1.836 8 1.836Z" fill="#666666" />
          </svg>
          }
          style={{
            color: '#666666',
            backgroundColor: '#F3F1F5',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '100%',
            borderRadius: '11px',
            height: '34px',
            width: '183px',
          }}
        >
          Download RIB
        </Button>
        <Button
          icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6484 13.4993H13.033C12.651 13.4993 12.3414 13.1899 12.3414 12.8077C12.3414 12.4256 12.6512 12.1162 13.033 12.1162H14.6484C14.8034 12.1162 14.9293 11.99 14.9293 11.8353V3.40661C14.9293 3.25193 14.8033 3.12572 14.6484 3.12572H6.21985C6.06481 3.12572 5.93895 3.25193 5.93895 3.40661V5.00376C5.93895 5.38609 5.62923 5.69529 5.24743 5.69529C4.86563 5.69529 4.55591 5.38591 4.55591 5.00376V3.40661C4.55591 2.48886 5.30245 1.74249 6.22003 1.74249H14.6486C15.566 1.74249 16.3127 2.48868 16.3127 3.40661V11.8351C16.3125 12.7529 15.5658 13.4993 14.6484 13.4993Z" fill="#666666" />
            <path d="M11.8822 16.2656H3.45367C2.53627 16.2656 1.78955 15.5194 1.78955 14.6014V6.17291C1.78955 5.25516 2.53609 4.50879 3.45367 4.50879H11.8822C12.7996 4.50879 13.5463 5.25498 13.5463 6.17291V14.6014C13.5462 15.5194 12.7996 16.2656 11.8822 16.2656ZM3.45367 5.89201C3.29863 5.89201 3.17277 6.01822 3.17277 6.17291V14.6014C3.17277 14.7561 3.29881 14.8823 3.45367 14.8823H11.8822C12.0372 14.8823 12.1631 14.7561 12.1631 14.6014V6.17291C12.1631 6.01822 12.0371 5.89201 11.8822 5.89201H3.45367Z" fill="#666666" />
          </svg>
          }
          style={{
            color: '#666666',
            backgroundColor: '#F3F1F5',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '100%',
            borderRadius: '11px',
            height: '34px',
            width: '183px',
          }}
        >
          Copy details
        </Button>
      </Space>

      {/* 银行详情 - 左右布局，右侧值左对齐 */}
      <div style={{
        backgroundColor: 'white',
        padding: '0',
        borderRadius: '0',
        marginBottom: '16px'
      }}>
        {/* IBAN */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
        }}>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            width: '170px',
            flexShrink: 0
          }}>
            IBAN
          </Text>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flex: 1
          }}>
            <Text style={{
              color: '#6C6A75',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              FR76 3083 3830 0006 4789 3299 393 6
            </Text>
            <Button
              type="text"
              icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6484 13.4993H13.033C12.651 13.4993 12.3414 13.1899 12.3414 12.8077C12.3414 12.4256 12.6512 12.1162 13.033 12.1162H14.6484C14.8034 12.1162 14.9293 11.99 14.9293 11.8353V3.40661C14.9293 3.25193 14.8033 3.12572 14.6484 3.12572H6.21985C6.06481 3.12572 5.93895 3.25193 5.93895 3.40661V5.00376C5.93895 5.38609 5.62923 5.69529 5.24743 5.69529C4.86563 5.69529 4.55591 5.38591 4.55591 5.00376V3.40661C4.55591 2.48886 5.30245 1.74249 6.22003 1.74249H14.6486C15.566 1.74249 16.3127 2.48868 16.3127 3.40661V11.8351C16.3125 12.7529 15.5658 13.4993 14.6484 13.4993Z" fill="#666666" />
                <path d="M11.8822 16.2656H3.45367C2.53627 16.2656 1.78955 15.5194 1.78955 14.6014V6.17291C1.78955 5.25516 2.53609 4.50879 3.45367 4.50879H11.8822C12.7996 4.50879 13.5463 5.25498 13.5463 6.17291V14.6014C13.5462 15.5194 12.7996 16.2656 11.8822 16.2656ZM3.45367 5.89201C3.29863 5.89201 3.17277 6.01822 3.17277 6.17291V14.6014C3.17277 14.7561 3.29881 14.8823 3.45367 14.8823H11.8822C12.0372 14.8823 12.1631 14.7561 12.1631 14.6014V6.17291C12.1631 6.01822 12.0371 5.89201 11.8822 5.89201H3.45367Z" fill="#666666" />
              </svg>
              }
              size="small"
              onClick={() => handleCopy('FR76 3083 3830 0006 4789 3299 393 6')}
              style={{ color: '#999999' }}
            />
          </div>
        </div>

        {/* BIC */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
        }}>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            width: '170px',
            flexShrink: 0
          }}>
            BIC
          </Text>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flex: 1
          }}>
            <Text style={{
              color: '#6C6A75',
              fontSize: '16px',
              fontWeight: '600',
            }}>
              FNOMFRP2
            </Text>
            <Button
              type="text"
              icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6484 13.4993H13.033C12.651 13.4993 12.3414 13.1899 12.3414 12.8077C12.3414 12.4256 12.6512 12.1162 13.033 12.1162H14.6484C14.8034 12.1162 14.9293 11.99 14.9293 11.8353V3.40661C14.9293 3.25193 14.8033 3.12572 14.6484 3.12572H6.21985C6.06481 3.12572 5.93895 3.25193 5.93895 3.40661V5.00376C5.93895 5.38609 5.62923 5.69529 5.24743 5.69529C4.86563 5.69529 4.55591 5.38591 4.55591 5.00376V3.40661C4.55591 2.48886 5.30245 1.74249 6.22003 1.74249H14.6486C15.566 1.74249 16.3127 2.48868 16.3127 3.40661V11.8351C16.3125 12.7529 15.5658 13.4993 14.6484 13.4993Z" fill="#666666" />
                <path d="M11.8822 16.2656H3.45367C2.53627 16.2656 1.78955 15.5194 1.78955 14.6014V6.17291C1.78955 5.25516 2.53609 4.50879 3.45367 4.50879H11.8822C12.7996 4.50879 13.5463 5.25498 13.5463 6.17291V14.6014C13.5462 15.5194 12.7996 16.2656 11.8822 16.2656ZM3.45367 5.89201C3.29863 5.89201 3.17277 6.01822 3.17277 6.17291V14.6014C3.17277 14.7561 3.29881 14.8823 3.45367 14.8823H11.8822C12.0372 14.8823 12.1631 14.7561 12.1631 14.6014V6.17291C12.1631 6.01822 12.0371 5.89201 11.8822 5.89201H3.45367Z" fill="#666666" />
              </svg>
              }
              size="small"
              onClick={() => handleCopy('FNOMFRP2')}
              style={{ color: '#999999' }}
            />
          </div>
        </div>

        {/* Recipient */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
        }}>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            width: '170px',
            flexShrink: 0
          }}>
            Recipient
          </Text>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            flex: 1
          }}>
            IVANOVAJANA
          </Text>
        </div>

        {/* Adresse */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
        }}>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            width: '170px',
            flexShrink: 0
          }}>
            Adresse
          </Text>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            flex: 1
          }}>
            10 PLACE DE LA CONCORDE, PARIS, 75008, FRANCE
          </Text>
        </div>

        {/* Bank */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0'
        }}>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            width: '170px',
            flexShrink: 0
          }}>
            Bank
          </Text>
          <Text style={{
            color: '#6C6A75',
            fontSize: '16px',
            fontWeight: '600',
            flex: 1
          }}>
            FINOM PAYMENTS
          </Text>
        </div>
      </div>

      {/* 说明文字 */}
      <div style={{ fontSize: '14px', color: '#666666', lineHeight: '1.4' }}>
        <p style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7.5" stroke="#333333" />
            <path d="M11 8V11.5214L14 13" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ paddingLeft: '8px' }}>
            SEPA Instant transfers arrive in seconds, SEPA Standard transfers may take up to 3 business days.
          </span>

        </p>
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.36816 4.06641C10.306 3.25829 11.694 3.25829 12.6318 4.06641L16.6318 7.51367C17.1829 7.98858 17.5 8.67975 17.5 9.40723V16C17.5 17.3807 16.3807 18.5 15 18.5H7C5.61929 18.5 4.5 17.3807 4.5 16V9.40723C4.50001 8.67975 4.81708 7.98858 5.36816 7.51367L9.36816 4.06641Z" stroke="#333333" />
            <path d="M11 14.5C11.8284 14.5 12.5 15.1716 12.5 16V18.5H9.5V16C9.5 15.1716 10.1716 14.5 11 14.5Z" stroke="#333333" />
          </svg>
          <span style={{ paddingLeft: '8px' }}>
            These wallet details apply only to SEPA transfers. For transfers from outside the EU/EEA area, please use <a href="#" style={{ color: '#7273CA', textDecoration: 'underline', fontSize: '14px', fontWeight: '600' }}>international details</a>.
          </span>
        </p>
      </div>
    </div>
  );

  const renderHistoriqueTab = () => (
    <div style={{ padding: '16px 0 0 0' }}>
      <Input
        placeholder="Recherche par nom et référence"
        prefix={<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_569)">
            <path d="M10.6294 18.4637C6.30415 18.4637 2.78839 14.9498 2.78839 10.6302C2.78839 6.30994 6.30415 2.79679 10.6294 2.79679C14.9532 2.79679 18.4704 6.30994 18.4704 10.6302C18.4704 14.9499 14.9532 18.4637 10.6294 18.4637ZM21.7002 20.4608L17.9925 16.7553C19.4295 15.038 20.2158 12.8694 20.2134 10.6302C20.2134 5.34226 15.9217 1.05548 10.6293 1.05548C5.33627 1.05559 1.04541 5.34237 1.04541 10.6303C1.04541 15.9176 5.33627 20.205 10.6294 20.205C12.9623 20.205 15.0981 19.3702 16.7604 17.9863L20.4695 21.6903C20.633 21.8531 20.8542 21.9445 21.0849 21.9445C21.3155 21.9445 21.5368 21.8531 21.7002 21.6903C21.8631 21.5272 21.9545 21.3061 21.9545 21.0756C21.9545 20.8451 21.8631 20.624 21.7002 20.4608Z" fill="#797778" />
          </g>
          <defs>
            <clipPath id="clip0_1_569">
              <rect width="20.9091" height="20.9091" fill="white" transform="translate(1.04541 1.04547)" />
            </clipPath>
          </defs>
        </svg>
        }
        style={{
          marginBottom: '16px',
          height: '40px',
          borderRadius: '8px',
          border: '1px solid #ECECEF',
        }}
      />

      {/* 筛选按钮 */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px',
        flexWrap: 'wrap'
      }}>
        <Button style={{
          color: '#666666',
          backgroundColor: '#F3F1F5',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '100%',
          borderRadius: '11px',
        }}>Période</Button>
        <Button style={{
          color: '#666666',
          backgroundColor: '#F3F1F5',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '100%',
          borderRadius: '11px',
        }}>Entrée/sortie</Button>
        <Button
          style={{
            color: '#666666',
            backgroundColor: '#F3F1F5',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '100%',
            borderRadius: '11px',
          }}
          onClick={() => setShowReconciliationPopup(!showReconciliationPopup)}
        >
          Statut du paiement
        </Button>
        <Button
          style={{
            color: '#666666',
            backgroundColor: '#F3F1F5',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '100%',
            borderRadius: '11px',
          }}
          onClick={() => setShowReconciliationPopup(!showReconciliationPopup)}
        >
          Réconciliation
        </Button>
        <Button style={{
          color: '#666666',
          backgroundColor: '#F3F1F5',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '100%',
          borderRadius: '11px',
        }}>Plus de filtres...</Button>
      </div>

      {/* 对账说明弹窗 */}
      {showReconciliationPopup && (
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '200px',
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: '11px',
          padding: '16px',
          zIndex: 1000,
          minWidth: '300px'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <Text strong>Reconciled:</Text>
            <Text style={{ marginLeft: '8px', fontSize: '12px' }}>
              Amounts are fully matched with invoices or receipts
            </Text>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <Text strong>Unreconciled:</Text>
            <Text style={{ marginLeft: '8px', fontSize: '12px' }}>
              Amounts are unmatched or not fully matched
            </Text>
          </div>
          <div>
            <Text strong>Not required:</Text>
            <Text style={{ marginLeft: '8px', fontSize: '12px' }}>
              Documents are not required
            </Text>
          </div>
          <Button
            type="text"
            icon={<CloseOutlined />}
            size="small"
            style={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={() => setShowReconciliationPopup(false)}
          />
        </div>
      )}

      {/* 使用新的对账图表组件 */}
      <div style={{ marginBottom: '16px' }}>
        <ReconciliationChart />
      </div>

      {/* 月度汇总 - 按照图片样式 */}
      <div style={{
        padding: '12px 16px',
        borderRadius: '8px',
        marginBottom: '16px',
      }}>
        <Text style={{
          fontSize: '27px',
          fontWeight: '600',
          lineHeight: '100%',
          color: '#02000A',
          height: '50px',
          lineHeight: '50px',
          marginBottom: '8px'
        }}>
          Historique
        </Text>
        <div style={{
          display: 'flex',
          width: '340px',
          paddingTop: '15px',
          gap: '16px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#000000'
        }}>
          <span style={{ fontWeight: '600', color: '#6C6A75', fontSize: '16px' }}>Ce mois-ci</span>
          <span style={{ color: '#9896A2', fontSize: '16px' }}>15 025.00 €</span>
          <span style={{ color: '#9896A2', fontSize: '16px' }}>15 025,00 €</span>
        </div>
      </div>

      {/* 交易列表 - 按照图片样式 */}
      <div style={{ marginTop: '16px' }}>
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: '16px 0',
            }}
          >
            {/* 左侧图标 - 与姓名中间对齐 */}
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#EFEFF4',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                flexShrink: 0,
                marginRight: '12px',
                marginTop: '2px', // 微调位置，让图标与姓名文字中间对齐
              }}
            >
              {transaction.amount > 0 ? (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="11" fill="#EFEFF4" />
                  <path d="M24 17L16 25M16 25V17M16 25H24" stroke="#2A2424" stroke-width="1.5" />
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="11" fill="#EFEFF4" />
                  <path d="M16 25L24 17M24 17V25M24 17H16" stroke="#2A2424" stroke-width="1.5" />
                </svg>

              )}

              {/* 拒绝状态标识 */}
              {transaction.status === 'rejected' && (
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#e91e63',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CloseOutlined style={{ color: 'white', fontSize: '10px' }} />
                </div>
              )}
            </div>

            {/* 右侧内容区域 - 包含分隔线，不包含图标 */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center', // 保持内容区域居中对齐
                borderBottom: index < transactions.length - 1 ? '1px solid #ECECEF' : 'none',
                paddingBottom: index < transactions.length - 1 ? '16px' : '0',
                marginBottom: index < transactions.length - 1 ? '16px' : '0'
              }}
            >
              {/* 中间信息 */}
              <div style={{ flex: 1, marginRight: '12px' }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#6C6A75',
                  marginBottom: '2px',
                  lineHeight: '100%'
                }}>
                  {transaction.name}
                </div>
              </div>

              {/* 右侧金额 */}
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '1.2', // 增加行高
                  color: transaction.amount > 0 ? '#4F4F6B' : '#0B9155',
                  marginBottom: '4px', // 增加与状态的间距
                }}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('fr-FR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })} {transaction.currency}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: transaction.status === 'rejected' ? '#FF4C5C' : '#8E8EA0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: '6px',
                }}>
                  {transaction.status === 'rejected' && (
                    <span>Refusé</span>
                  )}
                  {transaction.status !== 'rejected' && (
                    <span>{transaction.date}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Card
        style={{
          borderRadius: '11px',
          marginBottom: '24px'
        }}
      >
        {/* 返回按钮和标题 */}
        <div style={{ marginBottom: '24px' }}>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={onBack}
            style={{
              color: '#01010C',
              fontSize: '16px',
              fontWeight: '600',
              padding: '4px 0',
              marginBottom: '8px',
            }}
          >
            RETOURNER À LA SECTION ARGENT
          </Button>
          <Title level={2} style={{ margin: 0, color: '#01010C', fontSize: '48px', fontWeight: '600' }}>
            Main • 0 €
          </Title>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '8px'
          }}>
            <Text style={{ color: '#666666' }}>
              IBAN: FR76 3083 3830 0006 4789 3299 393
            </Text>
            <Button
              type="text"
              icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6484 13.4993H13.033C12.651 13.4993 12.3414 13.1899 12.3414 12.8078C12.3414 12.4256 12.6512 12.1163 13.033 12.1163H14.6484C14.8034 12.1163 14.9293 11.99 14.9293 11.8354V3.40664C14.9293 3.25196 14.8033 3.12575 14.6484 3.12575H6.21985C6.06481 3.12575 5.93895 3.25196 5.93895 3.40664V5.00379C5.93895 5.38612 5.62923 5.69532 5.24743 5.69532C4.86563 5.69532 4.55591 5.38594 4.55591 5.00379V3.40664C4.55591 2.48889 5.30245 1.74252 6.22003 1.74252H14.6486C15.566 1.74252 16.3127 2.48871 16.3127 3.40664V11.8352C16.3125 12.7529 15.5658 13.4993 14.6484 13.4993Z" fill="#333333" />
                <path d="M11.8822 16.2656H3.45367C2.53627 16.2656 1.78955 15.5194 1.78955 14.6014V6.17291C1.78955 5.25516 2.53609 4.50879 3.45367 4.50879H11.8822C12.7996 4.50879 13.5463 5.25498 13.5463 6.17291V14.6014C13.5462 15.5194 12.7996 16.2656 11.8822 16.2656ZM3.45367 5.89201C3.29863 5.89201 3.17277 6.01822 3.17277 6.17291V14.6014C3.17277 14.7561 3.29881 14.8823 3.45367 14.8823H11.8822C12.0372 14.8823 12.1631 14.7561 12.1631 14.6014V6.17291C12.1631 6.01822 12.0371 5.89201 11.8822 5.89201H3.45367Z" fill="#333333" />
              </svg>
              }
              size="small"
              onClick={() => handleCopy('FR76 3083 3830 0006 4789 3299 393')}
            />
          </div>
        </div>

        {/* 操作按钮 */}
        <WalletActionButtons
          onTransferFunds={handleTransferFunds}
          onRecharge={handleRecharge}
          onBetweenWallets={handleBetweenWallets}
          onStatementData={handleStatementData}
        />
      </Card>

      {/* 第二个 Card：详细信息标签页 */}
      <Card
        style={{
          borderRadius: '12px',
        }}
      >
        {/* 标签页 */}
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
        >
          <TabPane tab="Détails" key="details">
            {renderDetailsTab()}
          </TabPane>

          <TabPane tab="Historique" key="history">
            {renderHistoriqueTab()}
          </TabPane>

          <TabPane tab="Cartes" key="cards">
          </TabPane>

          <TabPane tab="Paramètres" key="settings">
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default MainWalletDetails;
