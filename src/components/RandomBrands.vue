<template>
    <div class="container mt-50">
        <div class="title">
            Случайные продукты по брендам
        </div>
        <div class="row">
            <div class="col-2" v-for="item of brands" :key="item._id">
                <button
                    @click="select(item._id)"
                    :class="`catbox ${active == item._id?'active':''}` " 
                    >
                    <img :src="`${url}/${item.img}`" alt="" class="catbox__icon brand">
                    <div class="catbox__title">
                        {{item.title}}
                    </div>
                </button>
            </div>
        </div>
        <div class="row" v-if="active != 0">
            <div class="col-2" v-for="item of products" :key="item._id">
                <ProductItem :product="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
    data() {
        return {
            active: 0
        };
    },
    components: { ProductItem },
    props: ['brands'],
    computed: {
        url(){
            return this.$store.getters.url
        },
        products(){
            return this.$store.getters.randomproducts
        }
    },
    methods: {
        select(id){
            this.active = id
            this.$store.dispatch('getRandomProducts', id)
        }
    }
}
</script>

<style lang="scss" scoped>
@media(max-width: 768px) {
    .row {
        flex-wrap: nowrap;
        overflow: auto;
        .col-2 {
            width: auto;
            max-width: unset;
        }
        button, .product {
            width: 170px;
        }
    }
}
</style>