<template>
    <div class="row">
        <div class="col-sm-6 todo_wrap">
            <to-do-list />
        </div>
        <div class="col-sm-6 memo_wrap">
            <memo-list />
        </div>
    </div>
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
