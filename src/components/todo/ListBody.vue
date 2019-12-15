<template>
    <fragment>
        <div v-if="JSON.stringify(todoList) !== '{}'">
            <fragment v-for="(subList, date, idx) in todoList" :key="idx">
                <div class="panel-footer">
                    {{ date }}
                    <!-- <btn-delete /> -->
                </div>

                <ul class="todo-list">
                    <li v-for="(item, idx) in subList" class="todo-list-item" :key="idx">
                        <button
                            class="f__left glyphicon"
                            :class="item.isGole ? 'glyphicon-ok' : 'glyphicon-circle'"
                            @click="handleCheck(date, idx)"
                        ></button>
                        <p class="todo_what">{{ item.what }}</p>
                        <btn-delete />
                    </li>
                </ul>
            </fragment>
        </div>
        <div v-else class="panel-body">
            할 일을 추가해 보세요
        </div>
    </fragment>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BtnDelete from "../common/BtnDelete";

export default {
    name: 'ToDoListBody',
    props: ['mode'],
    data () {
        return {
            // todoData: ''
        }
    },
    components: {
        BtnDelete,
    },
    computed: {
        ...mapState({
            todoList (state) {
                const todo = state.todo
                const mode = this.mode

                return todo[mode]
            }
        })
    },
    methods: {
        ...mapMutations(['updateToDo']),
        handleCheck(date, idx) {
            this.todoList[date][idx]['isGole'] = !this.todoList[date][idx]['isGole']
            this.updateToDo({
                mode: this.mode,
                data: this.todoList
            })
        }
    },
    created() {
    }
}
</script>