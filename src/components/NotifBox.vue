<template>
    <div :class="`notif ${notif.class} ${notif.msg ? 'open':''}`">
        {{notif.msg}}
    </div>
</template>

<script>
export default {
    computed: {
        notif(){
            return this.$store.getters.notif
        }
    }
}
</script>

<style lang="scss" scoped> 
.notif {
    position: fixed;
    top:-120px;
    right: 20px;
    color: #fff;
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
    z-index: 3;
    transition: 0.5s;
    &.open {
        top:120px;
    }
    &.success {
        background-color: rgb(18, 195, 77);
    }
    &.danger {
        background-color: rgb(225, 65, 21);
    }
    &.warning {
        background-color: rgb(225, 243, 24);
    }
}
</style>