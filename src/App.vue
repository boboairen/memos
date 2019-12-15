<template>
    <div class="app_wrap">
        <header class="app_header">
            <div class="page-header">
                <h1>To-Do List + Memo</h1>
            </div>
        </header>

        <router-view/>

        <footer class="footer">
            <div class="container">
                <p class="text-muted">&copy; 2019 Sunny10</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'App',
    methods: {
        ...mapMutations(['setToDo'])
    },
    created() {
        const todoData = JSON.parse(localStorage.getItem('todo'))
        this.setToDo(todoData)
        console.log(todoData)
    }
}
</script>

<style lang="scss">
    @import "assets/scss/mixins/breakpoints";

    @import 'assets/scss/reset';
    @import 'assets/scss/global';
    @import 'assets/scss/layout';

    @import 'assets/scss/bootstrap';
    @import 'assets/scss/custom_bootstrap';
    @import 'assets/scss/custom_dialog';
    @import 'assets/scss/custom_datepicker';

    @import 'assets/scss/components/todo';
</style>
