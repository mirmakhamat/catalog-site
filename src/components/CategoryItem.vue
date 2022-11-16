<template>
    <div :class="`category ${toggle?'open':''}`">
        <div class="container">
            <div class="row no-p">
                <div class="col-3 col-md-4">
                    <ul class="category__menu">
                        <li v-for="item of categories" :key="item._id" @mouseenter="active = item._id">
                            <button :class="{'active': active == item._id}" @click="act = !act">{{item.title}}</button>
                        </li>
                    </ul>
                </div>
                <div class="col-9 col-md-8">
                    <div :class="`category__submenu ${act && toggle?'active':''}`">
                        <div class="row" v-if="active != 0">
                            <div class="col-4 col-md-6" v-for="item, i of subcategories" :key="i">
                                <router-link :to="`/category/${active}?sub=${item._id}`" @click="act = !act">{{item.title}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['toggle'],
    data() {
        return {
            active: 0,
            act: false
        }
    },
    computed: {
        categories(){
            return this.$store.getters.categories
        },
        subcategories(){
            return this.$store.getters.categories.find(el=>el._id == this.active).subcategories
        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/lib/color.scss';
.category {
    position:absolute;
    top: 80px;
    left: 0;
    display: none;
    width: 100%;
    max-height: 100vh;
    overflow: auto;
    z-index: 3;
    &.open {
        display: block;
    }
    &__menu {
        border-radius: 8px;
        background-color :#fff;
        overflow: hidden;
        padding: 8px;
        filter: drop-shadow(12px 20px 24px rgba(69, 79, 89, 0.08));
        li {
            margin-bottom: 8px;
            &:last-child {
                margin-bottom: 0;
            }
            button {
                padding: 8px 16px;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border: 1px solid #fff;
                border-radius: 6px;
                color: $black;
                text-align: left;
                &.active,
                &:hover {
                    border-color: $green;
                }
                &:after {
                    content: '';
                    width: 24px;
                    height: 24px;
                    display: inline-block;
                    background: url('@/assets/icons/arrow-right.svg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: contain;
                }
            }
        }
    }
    &__submenu {
        padding: 24px;
        background-color: #fff;
        overflow: hidden;
        filter: drop-shadow(12px 20px 24px rgba(69, 79, 89, 0.08));
        border-radius: 8px;
        min-height: 100%;
        transition: 0.5s;
        a {
            font-size: 14px;
            line-height: 24px;
            color: $black;
            padding: 8px 16px;
            margin-bottom: 8px;
            &:hover {
                color :$green;
            }
        }
    }
}

@media(max-width: 600px){
    .category {
        .row.no-p {
            flex-wrap: nowrap;
            overflow: hidden;
            &>div{
                max-width: 100%;
                width: 100%;
            }
        }
        &__menu, &__submenu {
            width: calc(100vw - 30px);
        }
        &__submenu.active {
            position: absolute;
            left: 15px;
        }
    }
}
</style>