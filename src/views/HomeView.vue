<template>
  <CategoriesList :categories="categories"/>
  <ProductsList :products="lastproducts" title="Последные товары"/>
  <RandomBrands :brands="randombrands"/>
  <FeatureList/>
</template>

<script>
import CategoriesList from '@/components/CategoriesList.vue'
import ProductsList from '@/components/ProductsList.vue'
import FeatureList from '@/components/FeatureList.vue'
import RandomBrands from '@/components/RandomBrands.vue'

export default {
  name: 'HomeView',
  components: {
    CategoriesList,
    ProductsList,
    FeatureList,
    RandomBrands
  },
  computed: {
    lastproducts(){
      return this.$store.getters.lastproducts
    },
    categories(){
      return this.$store.getters.categories
    },
    randombrands(){
      return this.$store.getters.randombrands
    }
  }
}
</script>

<style>
</style>
