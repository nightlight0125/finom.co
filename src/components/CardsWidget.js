import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import React from 'react';

const CardsWidget = () => {
  return (
    <Card
      style={{
        marginTop: '20px',
        paddingLeft: '20px',
      }}
    >
      {/* 标题区域 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#01010C'
          }}>
            Cards
          </span>
          <RightOutlined style={{ fontSize: '12px', color: '#666666' }} />
        </div>
        <QuestionCircleOutlined style={{ color: '#666666', marginTop: '-30px', fontSize: '19px' }} />
      </div>

      {/* 卡片显示区域 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px',
        padding: '12px 0'
      }}>
        {/* 虚拟卡片图标 */}
        <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="35" height="24" rx="4" fill="#9393F5" />
          <path d="M30.8888 19.8552L30.7481 19.1521H29.1769L28.9269 19.8502L27.6675 19.8527C28.267 18.4109 28.8679 16.9697 29.47 15.5289C29.5725 15.2846 29.7544 15.1602 30.0225 15.1614C30.2275 15.1633 30.5619 15.1633 31.0262 15.1621L32 19.8533L30.8888 19.8552ZM29.5306 18.1889H30.5431L30.165 16.4264L29.5306 18.1889ZM21.4125 15.1608L22.6788 15.1621L20.7213 19.8558L19.4394 19.8546C19.117 18.6148 18.7987 17.3739 18.4844 16.1321C18.4219 15.8846 18.2981 15.7114 18.06 15.6296C17.7083 15.5117 17.3549 15.3988 17 15.2908V15.1627H19.0231C19.3731 15.1627 19.5775 15.3321 19.6431 15.6796C19.7094 16.0277 19.8756 16.9139 20.1431 18.3383L21.4125 15.1608ZM24.4188 15.1621L23.4175 19.8546L22.2125 19.8533L23.2125 15.1608L24.4188 15.1621ZM26.8625 15.0752C27.2231 15.0752 27.6775 15.1877 27.9388 15.2908L27.7275 16.2639C27.4913 16.1689 27.1025 16.0408 26.7756 16.0452C26.3006 16.0533 26.0069 16.2527 26.0069 16.4439C26.0069 16.7552 26.5169 16.9121 27.0419 17.2521C27.6412 17.6396 27.72 17.9877 27.7125 18.3658C27.7044 19.1508 27.0419 19.9252 25.6444 19.9252C25.0069 19.9158 24.7769 19.8621 24.2569 19.6777L24.4769 18.6621C25.0063 18.8839 25.2306 18.9546 25.6831 18.9546C26.0975 18.9546 26.4531 18.7871 26.4563 18.4952C26.4588 18.2877 26.3313 18.1846 25.8663 17.9283C25.4012 17.6714 24.7488 17.3158 24.7575 16.6021C24.7681 15.6883 25.6337 15.0752 26.8631 15.0752H26.8625Z" fill="white" />
        </svg>


        {/* 卡片信息 */}
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '400',
            color: '#262626',
            marginBottom: '2px'
          }}>
            Virtual
          </div>
          <div style={{
            fontSize: '12px',
            color: '#0A0810',
            letterSpacing: '1px'
          }}>
            ...
          </div>
        </div>

        {/* 状态和箭头 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '16px',
            color: '#0A0810',
            fontWeight: '400'
          }}>
            Ready to use
          </span>
          <RightOutlined style={{ fontSize: '12px', marginLeft: '-6px', color: '#000000' }} />
        </div>
      </div>

      {/* 订购新卡按钮 */}
      <Button
        type="default"
        block
        icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0.900391C13.4735 0.900391 17.0996 4.52649 17.0996 9C17.0996 13.4735 13.4735 17.0996 9 17.0996C4.52649 17.0996 0.900391 13.4735 0.900391 9C0.900391 4.52649 4.52649 0.900391 9 0.900391ZM9 2.20312C5.24637 2.20312 2.20312 5.24637 2.20312 9C2.20312 12.7536 5.24637 15.7969 9 15.7969C12.7536 15.7969 15.7969 12.7536 15.7969 9C15.7969 5.24637 12.7536 2.20312 9 2.20312ZM9 4.48633C9.35979 4.48633 9.65137 4.77641 9.65137 5.13867V8.34863H12.8613C13.2212 8.34863 13.5137 8.63761 13.5137 9C13.5137 9.35979 13.2236 9.65137 12.8613 9.65137H9.65137V12.8613C9.65137 13.2212 9.36239 13.5137 9 13.5137C8.64021 13.5137 8.34863 13.2236 8.34863 12.8613V9.65137H5.13867C4.7788 9.65137 4.48633 9.36239 4.48633 9C4.48633 8.64021 4.77641 8.34863 5.13867 8.34863H8.34863V5.13867C8.34863 4.7788 8.63761 4.48633 9 4.48633Z" fill="#0A0810" stroke="black" stroke-width="0.2" />
        </svg>
        }
        style={{
          height: '34px',
          color: '#0A0810',
          fontSize: '16px',
          fontWeight: '500',
          width: '175px',
          backgroundColor: '#F3F1F4',
          borderRadius: '8px'
        }}
      >
        Order new card
      </Button>
    </Card>
  );
};

export default CardsWidget;
