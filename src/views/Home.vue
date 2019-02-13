<template>
  <div class="home">
    <schema
      :schema="mock"
    />
  </div>
</template>

<script>
// import mock from '../assets/mock'
// import mock from '../assets/btn'
import mock from '../assets/text'
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
