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

        <div class="panel-footer">
            2019. 12. 10 (화)
            <div class="f__right">
                <button type="button" class="glyphicon glyphicon-trash"></button>
            </div>
        </div>
        <ul class="todo-list">
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-ok"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-circle"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
        </ul>

        <div class="panel-footer">
            2019. 12. 10 (화)
            <div class="f__right">
                <button type="button" class="glyphicon glyphicon-trash"></button>
            </div>
        </div>
        <ul class="todo-list">
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-ok"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-circle"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
        </ul>

        <div class="panel-heading">
            <h3 class="panel-title">마감 기한이 없는 할 일</h3>
        </div>

        <div class="panel-footer">
            바로 할 일
            <div class="f__right">
                <button type="button" class="glyphicon glyphicon-trash"></button>
            </div>
        </div>
        <ul class="todo-list">
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-ok"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
            <li class="todo-list-item">
                <span class="glyphicon glyphicon-circle"></span>
                test !!
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-trash"></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ToDoList',
}
</script>
