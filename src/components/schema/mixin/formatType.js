export default {
  methods: {
    isBlockImg (format) {
      return format === 'block-image'
    },

    isSelect (format) {
      return format === 'select'
    },

    isColor (format) {
      return format === 'color'
    },

    isImage  (format) {
      return format === 'image'
    },

    isArray (type) {
      return type === 'array'
    },

    isHidden (format) {
      return format === 'hidden'
    },

    isDefault (type) {
      return type === 'string'
    }
  }
}
