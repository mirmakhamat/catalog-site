<template>
    <nav>
        <div class="header__top">
            <div class="container d-flex align-items-center justify-content-between">
                <ul class="header__social">
                    <li><a href="#" class="hover-img"><img src="@/assets/icons/facebook.svg" alt=""></a></li>
                    <li><a href="#" class="hover-img"><img src="@/assets/icons/linkedin.svg" alt=""></a></li>
                    <li><a href="#" class="hover-img"><img src="@/assets/icons/twitter.svg" alt=""></a></li>
                    <li><a href="#" class="hover-img"><img src="@/assets/icons/mail.svg" alt=""></a></li>
                </ul>
                <ul class="header__menu">
                    <li><router-link to="/">Introduce</router-link></li>
                    <li><router-link to="/">Partner Incentives</router-link></li>
                    <li><router-link to="/">Promotion</router-link></li>
                    <li><router-link to="/">Contact</router-link></li>
                    <li><router-link to="/">Frequently asked questions</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="header sticky">
        <div class="container d-flex align-items-center">
            <router-link to="/" class="header__logo"><img src="@/assets/icons/logo.png" alt=""></router-link>
            <div v-click-outside="hideCat">
                <button
                    @click="catToggle = !catToggle"
                    class="header__category btn primary big d-flex align-items-center"
                    >
                    <img src="@/assets/icons/list-category.svg" alt="">
                    <span class="mr-30 ml-10">Категория</span>
                    <img src="@/assets/icons/arrow-down.svg" alt="">
                </button>
                <CategoryItem :toggle="catToggle"/>
            </div>
            <div class="header__search" v-click-outside="hideInput">
                <input
                    type="text" 
                    :class="{'active': inpActive}"
                    placeholder="Что Вы ищете?"
                    @input="search($event.target.value)"
                    >
                <div :class="`searchbox ${searchToggle?'open':''}`" v-click-outside="hideSearch">
                    <CardBox :product="item" v-for="item of products" :key="item._id"/>
                </div>
                <button class="btn primary" @click="inpActive = !inpActive"><img src="@/assets/icons/search.svg"></button>
            </div>
            <div class="header__right" v-click-outside="hideFav">
                <button class="hover-img" @click="favToggle = !favToggle">
                    <img src="@/assets/icons/favorite.svg" alt="">
                    <span class="badge" v-show="favourites.length">{{favourites.length}}</span>
                </button>
                <div :class="`searchbox fav ${favToggle?'open':''}`">
                    <CardBox :product="item" v-for="item of favourites" :key="item._id" :fav="true"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
import CardBox from './CardBox.vue'
export default {
    props: ['favourites'],
    components: { CategoryItem, CardBox },
    data() {
        return {
            catToggle: false,
            searchToggle: false,
            inpActive: false,
            favToggle: false
        }
    },
    methods: {
        hideFav(){
            this.favToggle = false
        },
        hideCat(){
            this.catToggle = false
        },
        hideSearch(){
            this.searchToggle = false
        },
        hideInput(){
            this.inpActive = false
        },
        search(t){
            if(t.length > 0){
                this.$store.dispatch('searchProducts', t)
                this.searchToggle = true
            }else {
                this.searchToggle = false
            }
        }
    },
    computed: {
        products(){
            return this.$store.getters.searchproducts
        }
    },
    watch: {
        $route(){
            this.catToggle = false
            this.searchToggle = false
            this.inpActive = false
            this.favToggle = false
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';
.header {
    background-color: $black;
    padding: 12px 0;
    &__top{
        background-color: $black;
        padding: 8px 0;
    }
    &__social {
        display: flex;
        align-items: center;
        gap: 16px;
    }
    &__menu {
        display: flex;
        align-items: center;
        a {
            padding: 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #fff;
            &:hover {
                color: $green;
            }
        }
    }
    &__logo {
        display: block;
    }
    &__search {
        margin-left: auto;
        display: flex;
        margin-right: 20px;
        flex: 1;
        margin-left: 20px;
        input {
            width: 500px;
            background-color: #fff;
            border-radius: 8px;
            padding: 12px 16px;
            font-size: 14px;
            line-height: 24px;
            color: $gray-3;
            margin-right: 8px;
            margin-left: auto;
            transition: 0.5s;
            &:focus {
                outline: 1px solid $green;
            }
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    &__right {
        display: flex;
        gap: 40px;
        margin-right: 17px;
        position: relative;
        button {
            position: relative;
            span {
                position: absolute;
                top: -13px;
                right: -17px;
            }
        }
    }
    &__bottom {
        padding: 8px 0;
        background-color: #fff;
    }
    &__category {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        padding: 8px 16px;
        color: $black;
        margin-left: 50px;
        &:hover {
            color: $green;
        }
    }
}
.searchbox {
    position: absolute;
    top: 72px;
    left: 50%;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    z-index: 4;
    filter: drop-shadow(4px 8px 16px rgba(69, 79, 89, 0.04));
    max-height: 420px;
    overflow: auto;
    display: none;
    &.fav{
        right: 0;
        top: 40px;
        left: unset;
    }
    &.open {
        display: block;
    }
    &::-webkit-scrollbar{
        display: none;
    }
    
}

@media (max-width: 1024px) {
    .header{
        &__search {
            input {
                width: 150px;
                &:focus {
                    width: 100%;
                }
            }
            button {
                display: none;
            }
        }
    }
}

@media (max-width: 768px){
    .header {
        &__top {
            display: none;
        }
        &__category {
            max-width: 55px;
            overflow: hidden;
            
            margin-right: 30px;
            margin-left: 0;
        }
        &__logo {
            order: 2;
        }
        &__search {
            order: 3
        }
        &__right {
            order: 4;
        }
    }
    .searchbox{
        left: unset;
        right: 10%;
    }
}

@media (max-width: 425px){
    .header {
        height: 56px;
        padding: 8px 0;
        &__search{
            button {
                display: flex;
                &.btn{
                    background: unset;
                    margin-left: auto;
                    padding: 0;

                }
            }
            input {
                position: absolute;
                top: 110%;
                left: -500px;
                width: calc(100% - 20px);
                border: 1px solid $green;
                &:focus {
                    width: calc(100% - 20px);
                }
                &.active {
                    left: 10px;
                }
            }
        }
        &__logo {
            height: 40px;
            img {
                height: 100%;
            }
        }
        &__category {
            height: 40px;
        }
    }
    .searchbox{
        width: auto;
        left: 0;
        right: 0;
        margin: auto;
        top: 120px;
        &.fav{
            right: -20px;
        }
        .card {
            margin-left: auto;
            margin-right: auto;
        }
    }
}
</style>