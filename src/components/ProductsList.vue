<template>
    <div class="container">
        <div class="products">
            <div class="title">
                {{title}}
            </div>
            <div class="row">
                <div class="col-20 col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="item of products" :key="item._id">
                    <ProductItem :product="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    components: {
        ProductItem
    },
    props: ['products', 'title']
}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';
.product {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 8px;
    &:hover {
        box-shadow: 0 0 10px 0px rgb(104, 210, 55, 0.5);
    }
    &__img {
        width: 100%;
        aspect-ratio: 3/2;
        margin-bottom: 8px;
        border-radius: 8px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    &__title {
        font-size: 14px;
        line-height: 24px;
        color: $black;
        margin-bottom: 4px;
        &:hover {
            color: $green;
        }
    }
    &__price {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    &__by {
        font-size: 12px;
        line-height: 18px;
        color: $gray-4;
        margin-top: auto;
        a {
            color: $blue;
        }
    }
    &__bottom {
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
}
</style>