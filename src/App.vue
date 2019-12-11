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
                <p class="text-muted">Place sticky footer content here.</p>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
    @import "assets/scss/mixins/breakpoints";

    @import 'assets/scss/reset';
    @import 'assets/scss/global';
    @import 'assets/scss/layout';

    @import 'assets/scss/bootstrap';
    @import 'assets/scss/custom_bootstrap';

    @import 'assets/scss/components/todo';
</style>
