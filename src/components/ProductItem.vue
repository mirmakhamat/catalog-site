<template>
    <div class="product">
        <router-link :to="`/product/${product._id}`" class="product__img" @mouseenter="i++" @mouseleave="i--">
            <img v-if="product?.photos" :src="`${url}/${product.photos[i%product.photos.length]}`" alt="">
        </router-link>
        <div class="product__bottom">
            <router-link :to="`/product/${product._id}`" class="product__title" v-if="product?.title">
                {{product.title}}
            </router-link>
            <div class="product__price" v-if="product?.price">
                {{product.price.toLocaleString()}}
            </div>
            <div class="product__by" v-if="product?.brend">
                by <router-link :to="`/brand/${product.brend._id}`">{{product.brend.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            i:0
        }
    },
    props: ['product'],
    computed: {
        url(){
            return this.$store.getters.url
        }
    }
}
</script>

<style>

</style>