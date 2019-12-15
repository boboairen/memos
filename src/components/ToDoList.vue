<template>
    <div class="panel panel-warning">
        <list-header mode="deadline">마감 기한이 있는 할 일</list-header>
        <list-body mode="deadline" />

        <list-header mode="noneDeadline">마감 기한이 없는 할 일</list-header>
        <list-body mode="noneDeadline" />
    </div>
</template>

<script>
import ListHeader from './todo/ListHeader'
import ListBody from './todo/ListBody'

export default {
    name: 'ToDoList',
    components: {
        ListHeader,
        ListBody
    }
}
</script>
