<template>
    <div class="f__right">
        <button type="button" class="glyphicon glyphicon-plus" @click="newItem"></button>
        <button type="button" class="glyphicon glyphicon-cog" @click="edit"></button>
    </div>
</template>

<script>
export default {
    name: 'BtnGroupEdit',
    methods: {
        newItem() {
            this.$emit('newItem')
        },

        edit() {
            this.$dialog.alert('준비중입니다!', {
                okText: '확인'
            })
            // this.$emit('edit')
        }
    }
}
</script>
