import { Card } from 'antd';
import React, { useState } from 'react';

const BoostWidget = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: 'Fastest invoicing', checked: true },
    { id: 2, name: 'Free virtual cards with cashback', checked: true },
    { id: 3, name: 'Secure payments anytime', checked: false }
  ]);

  const toggleFeature = (id) => {
    setFeatures(features.map(feature =>
      feature.id === id ? { ...feature, checked: !feature.checked } : feature
    ));
  };

  const progress = (features.filter(f => f.checked).length / features.length) * 100;

  return (
    <Card
      style={{
        marginTop: '20px',
        paddingLeft: '20px',
      }}
    >
      <div style={{ fontSize: '22px', fontWeight: '600', }}>Boost your FINOMenality</div>
      {/* 功能列表 */}
      <div style={{ margin: '16px 0' }}>
        {features.map(feature => (
          <div key={feature.id} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            padding: '2px 0'
          }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #0A0810',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                cursor: 'pointer'
              }}
            >
              {feature.checked && <span style={{ color: '#0A0810' }}>✓</span>}
            </div>
            <span style={{
              fontSize: '14px',
              color: '#262626',
              fontWeight: '500'
            }}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      {/* 进度条 */}
      <div style={{ marginTop: '24px', width: '100%' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          color: '#666666'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px', fontWeight: '800', color: '#0A0810', fontSize: '18px' }}>60%</span>
          </div>
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#FF4C5C'
              }} />
            </div>
          </div>
          <div style={{ paddingLeft: '8px' }}></div>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7851 5.78865H18.1466C18.4704 5.23967 18.6125 4.71604 18.5671 4.23033C18.5294 3.82383 18.3367 3.24244 17.6307 2.77909C17.0454 2.39403 16.2927 2.29959 15.4576 2.50822C14.1034 2.84823 12.5006 4.01715 11.4468 5.42979C10.3924 4.01717 8.79092 2.84823 7.43672 2.50822C6.60094 2.29824 5.84758 2.39335 5.26233 2.77909C4.55696 3.24244 4.36426 3.82383 4.32661 4.23033C4.28121 4.71604 4.42199 5.23967 4.74708 5.78865H4.10858C3.14178 5.78865 2.35498 6.57605 2.35498 7.54358V9.80396C2.35498 10.5693 2.85979 11.2457 3.59014 11.4729C3.52073 11.665 3.48439 11.8635 3.48439 12.0647V18.8462C3.48439 19.813 4.27209 20.6007 5.23897 20.6007H17.6567C18.6235 20.6007 19.41 19.8131 19.41 18.8462V12.0647C19.41 11.8622 19.375 11.663 19.3055 11.4722C20.0348 11.2438 20.5384 10.5674 20.5384 9.80393V7.54415C20.5384 6.57669 19.7519 5.78865 18.7851 5.78865ZM17.6567 19.351H12.0711V11.5592H17.6567C17.9351 11.5592 18.1608 11.7863 18.1608 12.0647V18.8461C18.1608 19.1246 17.9351 19.351 17.6567 19.351ZM12.7589 5.78865C13.6472 4.764 14.8132 3.95879 15.76 3.72127C16.2518 3.598 16.6541 3.63175 16.9455 3.82383C17.255 4.02722 17.3101 4.20856 17.3225 4.34553C17.3718 4.84774 16.8332 5.52483 16.5789 5.78865H12.7589ZM19.2886 7.54418V9.80396C19.2886 10.0823 19.0635 10.3087 18.7851 10.3087H12.0711V7.03902H18.7851C19.0635 7.03902 19.2886 7.26584 19.2886 7.54418ZM10.822 11.5592V19.351H5.23895C4.9599 19.351 4.73407 19.1245 4.73407 18.8461V12.0647C4.73407 11.7863 4.9599 11.5592 5.23895 11.5592H10.822ZM5.57119 4.34553C5.58349 4.20856 5.63932 4.02719 5.94756 3.82383C6.23691 3.63175 6.63923 3.59635 7.13372 3.72127C8.07523 3.95746 9.23996 4.76274 10.1302 5.78865H6.3135C6.08574 5.55798 5.5212 4.85978 5.57119 4.34553ZM3.60375 7.54418C3.60375 7.26586 3.82957 7.03902 4.10855 7.03902H10.8219V10.3087H4.10855C3.82957 10.3087 3.60375 10.0823 3.60375 9.80396V7.54418Z" fill="#9A98AB" />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default BoostWidget;
