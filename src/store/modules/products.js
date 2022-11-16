import axios from "axios"

const products = {
    state: () => ({
        lastproducts: [],
        product: {},
        randomproducts: [],
        searchproducts: [],
        others: [],
        products: []
    }),
    getters: {
        lastproducts(state){
            return state.lastproducts
        },
        randomproducts(state){
            return state.randomproducts.slice(0, 6)
        },
        productsbrand(state){
            return state.randomproducts
        },
        searchproducts(state){
            return state.searchproducts
        },
        product(state){
            return state.product
        },
        others(state){
            return state.others
        },
        products(state){
            return state.products
        }
    },
    mutations: {
        lastproducts(state, payload){
            state.lastproducts = payload
        },
        randomproducts(state, payload){
            state.randomproducts = payload
        },
        searchproducts(state, paylaod){
            state.searchproducts = paylaod
        },
        product(state, payload){
            state.product = payload
        },
        others(state, payload){
            state.others = payload
        },
        products(state, payload){
            state.products = payload
        },
        delproduct(state, payload){
            state.products = state.products.filter(el => el._id != payload)
        }
    },
    actions: {
        getLastProducts(context){
            axios.get(`${context.getters.url}/product/last`)
            .then(res => {
                if(res.status === 200){
                    context.commit('lastproducts', res.data)
                }
            })
        },
        getRandomProducts(context, payload){
            axios.get(`${context.getters.url}/footer/brend/${payload}`)
            .then(res => {
                if(res.status === 200 ){
                    context.commit('randomproducts',res.data)
                }
            })
        },
        searchProducts(context, payload){
            axios.get(`${context.getters.url}/product/search/${payload}`)
            .then(res =>{
                if(res.status === 200){
                    context.commit('searchproducts',res.data)
                }
            })
        },
        getProduct(context, payload){
            axios.get(`${context.getters.url}/product/view/${payload}`)
            .then(res => {
                if(res.status === 200){
                    context.commit('product', res.data.product)
                    context.commit('others', res.data.others)
                }
            })
        },
        getProducts(context, payload){
            axios.post(`${context.getters.url}/product/need`, {favs: payload.map(el => el._id)})
            .then(res => {
                if(res.status === 200 && res.data != 'error') {
                    context.commit('products', res.data)
                }
            })
        }
    }
}

export default products