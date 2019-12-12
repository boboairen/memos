<template>
    <div class="panel-heading">
        <h3 class="panel-title">
            <slot>title</slot>
            <btn-group-edit />
        </h3>
    </div>
</template>

<script>
import BtnGroupEdit from '../common/BtnGroupEdit';

export default {
    name: 'ToDoListHeader',
    components: {
        BtnGroupEdit
    },
}
</script>
