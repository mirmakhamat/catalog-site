<template>
    <div class="container mt-50 mb-50">
        <div class="row">
            <div class="col-4 col-md-6 col-sm-12" v-for="feature, i of features" :key="i">
                <FeatureBox :feature="feature"/>
            </div>
        </div>
    </div>
</template>

<script>
import FeatureBox from './FeatureBox.vue';
export default {
    data() {
        return {
            features: [
                {
                    img: "delivery.svg",
                    title: 'Бесплатная доставка',
                    info: 'Для счетов свыше $1.500'
                },
                {
                    img: "money-back.svg",
                    title: 'Cash Back',
                    info: 'При оплате товаров через Dasun Wallet'
                },
                {
                    img: "support.svg",
                    title: '24/7 Поддерживать',
                    info: 'Когда что-то идет не так'
                }
            ]
        }
    },
    components: {
        FeatureBox
    },
}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';
.feature{
    &__box {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 32px 94px;
        cursor: pointer;
        transition: 0.5s;
        text-align: center;
        height: 100%;
        &:hover {
            background-color: $green-1;
            box-shadow: 0 0 10px 0px rgb(104, 210, 55, 0.5);
            transform: translateY(-10px);
        }
    }
    &__icon {
        margin-bottom: 16px;
    }
    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 16px;
    }
    &__info {
        font-size: 14px;
        line-height: 24px;
        color: $gray;
        max-height: 48px;
        overflow: hidden;
    }
}
</style>