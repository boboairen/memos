<template>
    <main class="app_content home">
        <div class="todo_wrap">
            <to-do-list />
        </div>
        <div class="memo_wrap">
            <memo-list />
        </div>
    </main>
</template>

<script>
import ToDoList from '@/components/ToDoList'
import MemoList from '@/components/MemoList'

export default {
    name: 'home',
    components: {
        ToDoList,
        MemoList
    }
}
</script>
