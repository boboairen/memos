<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                Memo
                <btn-group-edit @newItem="newItem" @edit="edit" />
            </h3>
        </div>

        <ul v-if="memo.length > 0" class="list-group">
            <memo />
        </ul>

        <div v-else class="panel-body">
            메모를 추가해 보세요
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Memo from './memo/Memo'
import BtnGroupEdit from './common/BtnGroupEdit'

export default {
    name: 'MemoList',
    components: {
        Memo,
        BtnGroupEdit
    },
    computed: mapState(['memo']),
    methods: {
        newItem() {
            console.log('memo newItem')
        },

        edit() {
            console.log('memo edit')
        }
    }
}
</script>

<style>
</style>
