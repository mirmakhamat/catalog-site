<template>
    <div class="card">
        <button class="card__del" v-if="fav" @click="del">
            <img src="@/assets/icons/close.svg">
        </button>
        <router-link :to="`/product/${product._id}`" class="card__img">
            <img :src="`${url}/${product.photos[0]}`" alt="">
        </router-link>
        <div class="card__body">
            <router-link :to="`/product/${product._id}`" class="card__title">
                {{product.title}}
            </router-link>
            <div class="card__price">
                {{product.price.toLocaleString()}}
            </div>
            <router-link :to="`/brand/${product.brend._id?product.brend?._id:product.brend}`" class="card__brend">
                {{getBrand(product.brend._id?product.brend?._id:product.brend)}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product', 'fav'],
    computed: {
        url(){
            return this.$store.getters.url
        }
    },
    methods: {
        del(){
            let all = JSON.parse(this.$cookies.get('favourites'))
            all = all.filter(el => el._id != this.product._id)
            this.$cookies.set('favourites', JSON.stringify(all))
            this.$store.commit('delproduct', this.product._id)
        },
        getBrand(id){
            return this.$store.getters.brands.find(el => el._id == id).title
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/lib/color.scss';
.card {
    display: flex;
    padding: 18px;
    width:368px;
    border-bottom: 1px solid $gray-2;
    position: relative;
    &__del {
        position: absolute;
        top: 5px;
        right: 5px;
    }
    &__img {
        width: 124px;
        height: 124px;
        border-radius: 8px;
        margin-right: 16px;
        display: inline-block;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    &__body {
        display: flex;
        flex-direction:column;
    }
    &__title {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 4px;
        color: $black;
        max-width: 212px;
    }
    &__price {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
    }
    &__brend {
        margin-top: auto;
        font-size: 14px;
        line-height: 18px;  
        color: $blue;
        text-align: left;
        display: inline-block;
    }
}
</style>