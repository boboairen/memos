<template>
    <div>
        <div class="panel-footer">
            2019. 12. 10 (화)
            <btn-delete />
        </div>

        <ul class="todo-list">
            <list-item />
        </ul>
    </div>
</template>

<script>
import ListItem from "./ListItem";
import BtnDelete from "../common/BtnDelete";
export default {
    name: 'ToDoListBody',
    components: {
        BtnDelete,
        ListItem
    },
}
</script>
