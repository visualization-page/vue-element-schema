module.exports = {
  type: 'object',
  title: '图标模块',
  cover: '',
  subTypes: [
    {
      title: '一行2个',
      cover: '',
      type: 'object',
      properties: {
        navName: {
          title: '导航名',
          type: 'string'
        }
      }
    },
    {
      title: '一行3个',
      cover: '',
      type: 'object',
      properties: {
        navLink: {
          title: '链接',
          type: 'string'
        }
      }
    }
  ],
  properties: {
    items: {
      title: 'icon元素',
      type: 'array',
      format: 'block-image',
      enum: [
        {
          icon: '',
          text: '',
          link: ''
        },
        {
          icon: '',
          text: '',
          link: ''
        }
      ],
      properties: {
        icon: {
          title: '图片',
          type: 'string',
          format: 'image'
        },
        text: {
          title: '名称',
          type: 'string'
        },
        link: {
          title: '链接',
          type: 'string',
          format: 'select',
          options: [
            {
              label: '自定义链接',
              value: -1
            }
          ]
        }
      }
    },
    text: {
      title: '文本',
      type: 'string',
      default: '我是按钮'
    },
    color: {
      title: '颜色',
      type: 'string',
      format: 'color'
    },
    fontSize: {
      title: '字体大小',
      type: 'string',
      format: 'select',
      options: [
        {
          label: '12',
          value: 12
        },
        {
          label: '13',
          value: 13
        },
        {
          label: '14',
          value: 14
        }
      ],
      default: 12
    }
  }
}
