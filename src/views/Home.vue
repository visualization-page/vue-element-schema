<template>
  <div class="home">
    <schema
      :schema="mock"
    />
  </div>
</template>

<script>
import mock from '../assets/mock'
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
  }
}
</script>
