<template>
  
  <HeaderItem :favourites="favourites"/>

  <router-view/>

  <NotifBox/>
  <LoadingItem :loading="loading"/>
  <FooterItem/>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';
import NotifBox from './components/NotifBox.vue';
import LoadingItem from './components/LoadingItem.vue';
export default {
  components: {
    HeaderItem,
    FooterItem,
    NotifBox,
    LoadingItem
},
  computed: {
    favourites(){
      return this.$store.getters.products
    },
    loading(){
      return this.$store.getters.loading
    }
  },
  mounted() {
    this.$store.dispatch('getLastProducts')
    this.$store.dispatch('getAllCategories')
    this.$store.dispatch('getAllBrands')
    this.$store.dispatch('getRandomBrands')
    if (this.$cookies.isKey('favourites')){
      this.$store.dispatch('getProducts', JSON.parse(this.$cookies.get('favourites')))
    }
  },
  watch: {
    $route(){
      window.scrollTo(0,0)
    }
  }
}

</script>

<style lang="scss">
@import '@/styles/app.scss';
</style>
