<template>
  <div class="home">
    <schema
      :schema="mock"
      :get-async-data="getData"
    />
  </div>
</template>

<script>
// import mock from '../assets/mock'
import mock from '../assets/btn'
// import mock from '../assets/text'
import Schema from '../components/schema/Index'

export default {
  name: 'Home',
  components: {
    Schema
  },
  data () {
    return {
      mock
    }
  },
  methods: {
    getData (key) {
      // console.log(key)
      return Promise.resolve([
        { label: '首页', value: '/' },
        { label: '页面二', value: '/aaa' }
      ])
    }
  }
}
</script>
