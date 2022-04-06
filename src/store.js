import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "finance"
    },
    mutations: {
        update(state, name) {
            state.name = name
        }
    }
});