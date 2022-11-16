<template>
    <div class="container mt-30">
        <h3 class="mb-20">{{category.title}}</h3>
        <div class="filter__options">
            <button
                :class="{'active': activeSub == -1}"
                @click="activeSub = -1"
                >Все</button>
            <button 
                v-for="subcategory of category.subcategory" 
                :key="subcategory._id" 
                @click="activeSub = subcategory._id"
                :class="{'active': subcategory._id == activeSub}">
                {{subcategory.title}}
            </button>
        </div>
        <div class="row">
            <div class="col-4 col-md-12">
                <div class="filter">
                    <div class="filter__title">
                        Цена
                    </div>
                    <div class="d-flex">
                        <label class="filter__input mr-10">
                            <span>от</span><input type="number" v-model="from">
                        </label>
                        <label class="filter__input ml-10">
                            <span>до</span><input type="number" v-model="to">
                        </label>
                    </div>
                </div>

                <div class="filter">
                    <div class="filter__title">
                        Бренд
                    </div>
                    <div class="filter__options">
                        <button
                        :class="{'active': activeBrand == -1}"
                        @click="activeBrand = -1"
                        >Все</button>
                        <button
                            v-for="brand of brands"
                            :key="brand._id"
                            :class="{'active': activeBrand == brand._id}"
                            @click="activeBrand = brand._id">
                            {{brand.title}}
                        </button>
                    </div>
                </div>
                
            </div>
            <div class="col-8 col-md-12">
                <div class="row">
                    <div class="col-3 col-lg-4 col-sm-6 col-xs-12" v-for="product of products" :key="product._id">
                        <ProductItem :product="product"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
    data() {
        return {
            activeSub: -1,
            activeBrand: -1,
            from: 0,
            to:100000000
        };
    },
    components: { ProductItem },
    computed: {
        category(){
            return this.$store.getters.category
        },
        products(){
            return this.$store.getters.catProducts.filter(el => {
                if(this.activeSub !== -1 && this.activeBrand === -1)
                    return el.subcategory._id == this.activeSub && el.price <= this.to && el.price >= this.from
                if(this.activeSub === -1 && this.activeBrand !== -1)
                    return el.brend._id == this.activeBrand && el.price <= this.to && el.price >= this.from
                if(this.activeSub !== -1 && this.activeBrand !== -1)
                    return el.brend._id == this.activeBrand && el.subcategory._id == this.activeSub && el.price <= this.to && el.price >= this.from
                return el && el.price <= this.to && el.price >= this.from
            })
        },
        brands(){
            return this.$store.getters.brands
        },
    },
    mounted(){
        this.$store.dispatch('getCategory', this.$route.params.id)
        if(this.$route.query.sub){
            this.activeSub = this.$route.query.sub
        }
    },
    watch: {
        $route(to){
            this.$store.dispatch('getCategory', to.params.id)
            if(to.query.sub){
                this.activeSub = to.query.sub
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';
.filter{
    margin-bottom: 32px;
    &__title {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    &__options {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-left: -8px;
        margin-right: -8px;
        button {
            padding: 4px 16px;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            background-color: $gray-1;
            margin: 8px;
            border-radius: 100px;
            &.active {
                background-color: $green;
                color: #fff;
            }
        }
    }
    &__input {
        border: 1px solid $gray-1;
        display: flex;
        align-items: center;
        border-radius: 8px;
        overflow: hidden;
        max-width: 150px;
        span {
            background-color: $gray-2;
            padding: 10px 10px;
        }
        input {
            height: 100%;
            margin-left: 10px;
            font-size: 16px;
            background-color: #fff;
            &:focus {
                outline: 0;
            }
        }
    }
}
</style>


