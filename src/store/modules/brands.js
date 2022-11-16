import axios from "axios"

const brands = {
    state: () => ({
        randombrands: [],
        brands: []
    }),
    getters: {
        randombrands(state){
            return state.randombrands
        },
        brands(state){
            return state.brands
        }
    },
    mutations:{
        randombrands(state, payload){
            state.randombrands = payload
        },
        brands(state, payload){
            state.brands = payload
        }
    },
    actions:{
        getAllBrands(context){
            axios.get(`${context.getters.url}/brend/api/allbrend`)
            .then(res => {
                if(res.status === 200){
                    context.commit('brands',res.data)
                }
            })
        },
        getRandomBrands(context){
            axios.get(`${context.getters.url}/brand/random`)
            .then(res => {
                if(res.status === 200 ){
                    context.commit('randombrands',res.data)
                }
            })
        }
        
    }
}

export default brands