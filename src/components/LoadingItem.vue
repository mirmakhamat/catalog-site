<template>
    <div class="loading" v-if="loading">
        <img src="@/assets/icons/loading.gif" alt="">
    </div>
</template>

<script>
export default {
    props: ['loading']
}
</script>

<style lang="scss">
.loading {
    position: fixed;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    img {
        width: 300px;
    }
}
</style>