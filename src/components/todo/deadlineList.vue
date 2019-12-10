<template>
    <div class="panel panel-warning">
        <div class="panel-heading">
            <h3 class="panel-title">
                마감 기한이 있는 할 일
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-cog"></button>
                    <button type="button" class="glyphicon glyphicon-plus"></button>
                </div>
            </h3>
        </div>
        <div class="panel-body">
            Panel content
        </div>
        <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="panel-heading">
            <h3 class="panel-title">마감 기한이 없는 할 일</h3>
        </div>
        <div class="panel-body">
            Panel content
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDoList',
}
</script>

<style>
</style>
