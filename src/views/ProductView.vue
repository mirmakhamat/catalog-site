<template>
    <div class="container mb-50">
        <div class="row mb-50">
            <div class="col-6 col-md-12 d-flex justify-content-center">
                <div class="col-8 col-lg-12">
                    <Splide
                        :options="mainOptions"
                        ref="main"
                        class="mb-10"
                        >
                    <SplideSlide v-for="item, index of product.photos" :key="index">
                        <img :src="`${url}/${item}`">
                    </SplideSlide>
                    </Splide>

                    <Splide
                        :options="thumbsOptions"
                        ref="thumbs"
                    >
                    <SplideSlide v-for="item, index of product.photos" :key="index">
                        <img :src="`${url}/${item}`">
                    </SplideSlide>
                    </Splide>
                </div>
            </div>
            <div class="col-5 col-md-12">
                <div class="prd__box">
                    <div class="prd__title" v-if="product?.title">
                        {{product.title}}
                    </div>
                    <div class="prd__price" v-if="product?.price">
                        {{product.price.toLocaleString()}} сум
                    </div>
                    <div class="prd__category" v-if="product?.subcategory?.title">
                        Категория: <router-link :to="`/category/${product.subcategory.category}?sub=${product.subcategory._id}`">{{product.subcategory.title}}</router-link>
                    </div>
                    <div class="prd__category" v-if="product?.brend?.title">
                        Бренд: <router-link :to="`/brand/${product.brend._id}`">{{product.brend.title}}</router-link>
                    </div>
                    <ul class="prd__attr">
                        <li v-for="attr of product.atribut" :key="attr._id">
                            {{attr.atr.title}}: {{attr.spec}}
                        </li>
                    </ul>
                    <div class="prd__amount">Описание</div>
                    <div class="prd__desc">
                        {{product.descriptions}}
                    </div>
                    <div class="prd__amount">Количество:</div>
                    <div class="prd__buy d-flex">
                        <div class="d-flex align-items-center">
                            <button @click="changeCount(-1)"><img src="@/assets/icons/minus.svg" alt=""></button>
                            <span>{{count}}</span>
                            <button @click="changeCount(1)"><img src="@/assets/icons/plus.svg" alt=""></button>
                        </div>
                        <button class="btn primary" @click="buy">Купить</button>
                        <button class="btn black" @click="addFav"><img src="@/assets/icons/favorite.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        <ProductsList :products="others" title="Другие товары"/>
    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import {ref, onMounted} from 'vue'

export default {
    components: {
        Splide,
        SplideSlide,
        ProductsList
    },
    data(){
        return {
            mainOptions: {
                type      : 'loop',
                perPage   : 1,
                perMove   : 1,
                pagination: false,
                cover     : true,
                height    : 368
            },
            thumbsOptions: {
                arrows      : false,
                type        : 'slide',
                rewind      : true,
                gap         : '12px',
                pagination  : false,
                fixedWidth  : 83,
                fixedHeight : 83,
                cover       : true,
                focus       : 'center',
                isNavigation: true,
                updateOnMove: true,
            },
            count: 0,
        }
    },
    setup() {
        const main = ref(),
        thumbs = ref()
        onMounted(()=>{
            const thumbsSplide = thumbs.value?.splide;
            if ( thumbsSplide ) {
                main.value?.sync( thumbsSplide );
            }
        })
        return {main, thumbs}
    },
    methods: {
        buy(){
            this.$store.dispatch('notif', {msg:"Bu joyiga manga dostup yo'q!", class:"danger"})
        },
        changeCount(v){
            if(this.count == 0 && v < 0) return false
            this.count += v
        },
        addFav(){   
            let data = {
                _id: this.$route.params.id,
                count: this.count
            }
            let all = []
            if (this.$cookies.isKey('favourites')){
                all = JSON.parse(this.$cookies.get('favourites'))
            }
            all.push(data)
            this.$cookies.set('favourites', JSON.stringify(all))
            this.$store.dispatch('getProducts', all)
            this.$store.dispatch('notif', {msg:"Добавлено успешно!", class:"success"})
        }
    },
    computed:{
        product(){
            return this.$store.getters.product
        },
        url(){
            return this.$store.getters.url
        },
        others(){
            return this.$store.getters.others
        }
    },
    mounted() {
        this.$store.dispatch('getProduct', this.$route.params.id)
    },
    watch: {
        $route(to){
            let id = to.params.id
            this.$store.dispatch('getProduct', id)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';

.splide__track--nav>.splide__list>.splide__slide{
    border-radius: 8px;
    overflow: hidden;
    &.is-active {
        border-color: $green;
    }
}
.splide__arrow{
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: unset;
    border: 1px solid $gray-1;
    &:hover {
        border-color: $green;
    }
    &--next {
        right: -60px;
    }
    &--prev {
        left: -60px;
    }
}

.prd{
    &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
    }
    &__price {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 24px;
    }
    &__category {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 8px;
        a {
            color: $black;
            &:hover {
                color: $green;
            }
        }
    }
    &__attr {
        list-style-type: disc;
        padding-left: 20px;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 24px;
        li {
            margin-bottom: 8px;
        }
    }
    &__amount {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 16px;
    }
    &__buy{
        gap: 16px;
        .d-flex {
            button, span {
                border-radius: 6px;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            span {
                border: 1px solid $gray-2;
                margin: 0 8px;
                width: 40px;
                height: 40px;
                color: $gray;
                font-size: 14px;
                line-height: 24px;
            }
        }
    }
    &__desc {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 16px;
    }
}

@media(max-width: 1024px){
    .splide__arrow{
        display: none;
    }
}
</style>