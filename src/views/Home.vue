<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" :name="name"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  sockets: {
    connect: function () {
      this.$socket.emit('/investment', 'new client connetion')
    }
  },
  mounted () {
    this.sockets.subscribe("/update-investment", function(data) {
      this.$store.commit('update', data[0].name)
    })
  },
  computed: {
    name (){
      return this.$store.state.name
    }
  }
}
</script>
