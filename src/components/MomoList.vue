<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                Memo
                <div class="f__right">
                    <button type="button" class="glyphicon glyphicon-plus"></button>
                    <button type="button" class="glyphicon glyphicon-cog"></button>
                </div>
            </h3>
        </div>

        <ul class="list-group">
            <li class="list-group-item">
                <h4>
                    title
                    <div class="f__right">
                        <button type="button" class="glyphicon glyphicon-trash"></button>
                    </div>
                </h4>
                <div class="memo_body">
                    <span class="date">[19.12.10]</span>
                    text texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext texttext text
                </div>
            </li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MemoList',
}
</script>

<style>
</style>
