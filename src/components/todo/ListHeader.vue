<template>
    <div class="panel-heading">
        <h3 class="panel-title">
            <slot>title</slot>
            <btn-group-edit @newItem="newItem" @edit="edit" />
        </h3>

        <datepicker
            v-if="mode==='deadline'"
            :class="{open: isDatepicker}"
            :bootstrap-styling="true"
            @selected="selectedDeadline"
            format="yyyymmdd"
            input-class="datepicker"
            ref="datepicker"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import BtnGroupEdit from '../common/BtnGroupEdit'

export default {
    name: 'ToDoListHeader',
    props: ['mode'],
    components: {
        Datepicker,
        BtnGroupEdit
    },
    computed: {
        ...mapState(['todo'])
    },
    data() {
        return {
            deadline: '',
            isDatepicker: false
        }
    },
    methods: {
        ...mapMutations(['setDeadlineToDo']),
        newItem() {
            switch (this.mode){
                case 'deadline':
                    this.$refs.datepicker.showCalendar()
                    this.isDatepicker = true
                    break
                case 'noneDeadline':
                    this.$dialog.alert('준비중입니다!', {
                        okText: '확인'
                    })
                    break
            }
        },

        selectedDeadline(aa) {
            const date = new Date(aa)
            const yyyy = date.getFullYear()
            const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
            const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            const dateStr = `${yyyy}년 ${mm}월 ${dd}일`

            this.isDatepicker = false
            this.$dialog
                .prompt({
                    title: dateStr,
                    body: '무엇을 할 것인가요?',
                }, {
                    promptHelp: '확인 버튼을 눌러 저장하세요!',
                    okText: '확인',
                    cancelText: '닫기'
                })
                .then(dialog => {
                    if(dialog.data !== null) {
                        this.setDeadlineToDo({
                            date: dateStr,
                            what: dialog.data
                        })
                    }
                })
        },

        edit() {
            // console.log('todo edit')
        }
    }
}
</script>
