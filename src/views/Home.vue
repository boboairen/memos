<template>
    <main class="app_content">
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
import MemoList from "../components/MomoList";

export default {
    name: 'home',
    components: {
        MemoList,
        ToDoList
    }
}
</script>
