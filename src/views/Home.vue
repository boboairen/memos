<template>
    <main class="app_content">
        <div class="todo_wrap">
            <to-do-list />
        </div>
        <div class="memo_wrap">
        </div>
    </main>
</template>

<script>
import ToDoList from '@/components/ToDoList'

export default {
    name: 'home',
    components: {
        ToDoList
    }
}
</script>
