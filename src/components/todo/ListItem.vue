<template>
    <li class="todo-list-item">
        <span class="glyphicon glyphicon-ok"></span>
        test !!
        <btn-delete />
    </li>
</template>

<script>
import BtnDelete from "../common/BtnDelete";
export default {
    name: 'ToDoListItem',
    components: {BtnDelete},
}
</script>

<style>
</style>
