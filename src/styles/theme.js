// FINOM 主题配置 - 基于原型稿，使用 EuclidCircularB 字体
export const theme = {
  token: {
    // FINOM 主色调（使用更柔和的浅紫）
    colorPrimary: '#7273CA',
    colorPrimaryHover: '#eeeeee',
    colorPrimaryActive: '#6A6BC2',
    // 全局控件聚焦描边（用于 Button / Input 等）
    controlOutline: 'rgba(114, 115, 202, 0.18)',
    controlOutlineWidth: 2,
    // colorPrimary: '#e91e63', // 紫色
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',

    // 文字颜色
    colorText: '#262626',
    colorTextSecondary: '#666666',
    colorTextTertiary: '#999999',

    // 背景色 - 更新为原型稿的浅紫色
    colorBgContainer: '#ffffff',
    colorBgLayout: '#F0EFF5', // 浅紫色背景
    colorBgElevated: '#ffffff',

    // 边框色
    colorBorder: '#f0f0f0',
    colorBorderSecondary: '#e8e8e8',

    // 字体 - 使用 EuclidCircularB
    fontFamily: "'EuclidCircularB', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    fontSize: 16,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,

    // 字重
    fontWeightStrong: 600,
    fontWeight: 400,

    // 圆角
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 4,

    // 间距
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,

    // 阴影
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 1px 4px rgba(0, 0, 0, 0.08)',
  },

  // 自定义组件样式
  components: {
    Card: {
      borderRadiusLG: 12,
      paddingLG: 24,
    },
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      paddingInline: 16,
      paddingBlock: 8,
    },
    Input: {
      borderRadius: 8,
      paddingBlock: 12,
      paddingInline: 16,
    },
    Menu: {
      itemPaddingInline: 16,
      itemHeight: 40,
    },
    Layout: {
      headerBg: '#F0EFF5', // 导航栏背景色
      bodyBg: '#F0EFF5', // 页面背景色
    }
  }
};

// 响应式断点
export const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};

// 间距系统
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64
};

export default theme;
