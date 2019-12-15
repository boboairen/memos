<template>
    <div class="f__right">
        <button type="button" class="glyphicon glyphicon-trash" @click="$dialog.alert('준비중입니다!', { okText: '확인' })"></button>
    </div>
</template>

<script>
export default {
    name: 'BtnDelete',
}
</script>