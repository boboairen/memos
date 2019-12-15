import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todo: {
            deadline: {},
            noneDeadline: {}
        },
        memo: {}
    },
    mutations: {
        setToDo(state, payload) {
            state.todo = { ...state.todo, ...payload }
        },

        updateToDo(state, payload) {
            state.todo[payload.mode] = payload.data
            localStorage.setItem('todo', JSON.stringify(state.todo))
        },

        setDeadlineToDo(state, payload) {
            const date = payload.date,
                what = payload.what,
                targetObj = state.todo.deadline

            if(Object.keys(targetObj).indexOf(date) < 0) {
                targetObj[date] = [{
                    what: what,
                    isGole: false
                }]
            } else {
                targetObj[date].push({
                    what: what,
                    isGole: false
                })
            }

            state.todo.deadline = Object.assign({}, state.todo.deadline, targetObj)
            localStorage.setItem('todo', JSON.stringify(state.todo))
        }
    },
    actions: {
    },
    modules: {
    }
})
