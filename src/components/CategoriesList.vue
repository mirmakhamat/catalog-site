<template>
    <div class="container mt-50 mb-50">
        <div class="row">
            <div class="col-2" v-for="item of categories" :key="item._id">
                <router-link :to="`/category/${item._id}`" class="catbox">
                    <img :src="`${url}/${item.icon}`" alt="" class="catbox__icon" v-if="item?.icon">
                    <div class="catbox__title" v-if="item?.title">
                        {{item.title}}
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['categories'],
    computed:{
        url(){
            return this.$store.getters.url
        }
    }
}
</script>

<style lang="scss" scoped>

@media(max-width: 1024px) {
    .row {
        flex-wrap: nowrap;
        overflow: auto;
        .col-2 {
            width: auto;
            max-width: unset;
        }
        a {
            width: 170px;
        }
    }
}
</style>