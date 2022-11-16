import axios from "axios"

const category = {
    state: ()=>({
        categories: [],
        category: {},
        catProducts: []
    }),
    getters: {
        categories(state){
            return state.categories
        },
        category(state){
            return state.category
        },
        catProducts(state){
            return state.catProducts
        }
    },
    mutations: {
        categories(state, payload){
            state.categories = payload
        },
        category(state, payload){
            state.catProducts = []
            state.category = payload
            payload.subcategory.forEach(item => {
                item.products.forEach(i =>  state.catProducts.push(i))
            })
        },
        catProducts(state, payload){
            payload.forEach(item => {
                item.products.forEach(i =>  state.catProducts.push(i))
            })
        }
    },
    actions: {
        getAllCategories(context){
            context.commit('loading', true)
            axios.get(`${context.getters.url}/header`)
            .then(res => {
                if(res.status === 200) {
                    context.commit('categories', res.data)
                    context.commit('loading', false)
                }
            })
        },
        getCategory(context, payload){
            context.commit('loading', true)
            axios.get(`${context.getters.url}/category/get/${payload}`)
            .then(res => {
                if(res.status === 200) {
                    context.commit('category', res.data)
                    context.commit('catProducts', res.data.subcategory)
                    context.commit('loading', false)
                }
            })
        }
    }
}

export default category