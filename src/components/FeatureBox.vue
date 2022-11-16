<template>
    <div class="feature__box">
        <img :src="require(`@/assets/icons/${feature.img}`)" alt="" class="feature__icon">
        <div class="feature__title">{{feature.title}}</div>
        <div class="feature__info">
            {{feature.info}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['feature']
}
</script>

<style>

</style>