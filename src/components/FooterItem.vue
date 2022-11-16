<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-3 col-md-6 col-xs-12">
                    <div class="footer__title">
                        Contact
                    </div>
                    <ul class="footer__menu">
                        <li>
                            <span>ftribe Co., Ltd</span>
                        </li>
                        <li>
                            <a href="#" class="hover-img"><img src="@/assets/icons/location.svg" alt="">1658  Rosewood Lane New York city, NY</a>
                        </li>
                        <li>
                            <a href="tel:+2129299953" class="green hover-img"><img src="@/assets/icons/_phone.svg" alt="">212 929 9953</a>
                        </li>
                        <li>
                            <a href="mailto:admin@ftribe.com" class="green hover-img"><img src="@/assets/icons/fmail.svg" alt="">admin@ftribe.com</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 col-xs-12">
                    <div class="footer__title">
                        Cooperation - Association
                    </div>
                    <ul class="footer__menu">
                        <li>
                            <router-link to="/">Operation Regulation of EC-Exchange</router-link>
                        </li>
                        <li>
                            <router-link to="/">Return Policy</router-link>
                        </li>
                        <li>
                            <router-link to="/">Privacy Policy</router-link>
                        </li>
                        <li>
                            <router-link to="/">Selling With ftribe</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 col-xs-12">
                    <div class="footer__title">
                        Customer Support
                    </div>
                    <ul class="footer__menu">
                        <li>
                            <router-link to="/">Hotline Customer Service</router-link>
                        </li>
                        <li>
                            <router-link to="/">Frequently asked Questions</router-link>
                        </li>
                        <li>
                            <router-link to="/">Submit Support Request</router-link>
                        </li>
                        <li>
                            <router-link to="/">Ordering Guide</router-link>
                        </li>
                        <li>
                            <router-link to="/">Shipping Methods</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-3 col-md-6 col-xs-12">
                    <div class="footer__title">
                        Customer Support
                    </div>
                    <ul class="footer__menu">
                        <li>
                            <router-link to="/">Installment Purchase Guide</router-link>
                        </li>
                        <li>
                            <router-link to="/">Import Policy</router-link>
                        </li>
                        <li>
                            <router-link to="/">Customer Support:</router-link>
                        </li>
                        <li>
                            <router-link to="/">Ordering Guide</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer__bottom">
        <div class="container d-flex align-items-center">
            <div class="footer__copy">
                Copyright 2020 © ftribe
            </div>
            <ul class="footer__link">
                <li>
                    <router-link to="/">Introduce</router-link>
                </li>
                <li>
                    <router-link to="/">Partner Incentives</router-link>
                </li>
                <li>
                    <router-link to="/">Promotion</router-link>
                </li>
                <li>
                    <router-link to="/">Contact</router-link>
                </li>
                <li>
                    <router-link to="/">Frequently asked Questions</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/styles/lib/color.scss';
.footer {
    background-color: $black;
    padding: 50px 0;
    font-size: 14px;
    line-height: 24px;
    color: $gray-2;
    &__title {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: $gray-2;
        margin-bottom: 40px;
    }
    &__menu {
        li {
            margin-bottom: 24px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        a {
            font-size: 14px;
            line-height: 24px;
            color: $gray-2;
            display: flex;
            align-items: center;
            img {
                margin-right: 16px;
            }
            &:hover {
                color: $green;
            }
        }
        .green {
            color: $green;
        }
    }
    &__bottom {
        padding: 15px 0;
    }
    &__link {
        display: flex;
        align-items: center;
        gap: 16px;
        a {
            font-size: 12px;
            line-height: 18px;
            color: $black;
            &:hover {
                color: $green;
            }
        }
    }
    &__copy {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        margin-right: 70px;
    }
}

@media(max-width: 600px){
    .footer{
        &__bottom {
            .container {
                display: block;
            }
        }
        &__link {
            flex-wrap: wrap;
        }
    }
}

</style>