<template>
    <div class="container mt-30">
        <h3 class="mb-20">{{brand.title}}</h3>
        <div class="row">
            <div class="col-3 col-lg-4 col-sm-6 col-xs-12" v-for="product of products" :key="product._id">
                <ProductItem :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
    components: { ProductItem },
    computed: {
        products(){
            return this.$store.getters.productsbrand
        },
        brand(){
            return this.$store.getters.brands.find(el => el._id == this.$route.params.id)
        }
    },
    mounted(){
        let id = this.$route.params.id
        this.$store.dispatch('getRandomProducts', id)
    }
}
</script>

<style>

</style>