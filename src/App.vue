<template>
    <fragment>
        <div id="app" class="container-fluid">
            <div class="page-header">
                <h1>To-Do List + Memo</h1>
            </div>
            <router-view/>
        </div>

        <footer class="footer">
            <div class="container">
                <p class="text-muted">Place sticky footer content here.</p>
            </div>
        </footer>
    </fragment>
</template>

<style lang="scss">
    @import 'assets/scss/reset';
    @import 'assets/scss/global';

    @import 'assets/scss/bootstrap';
    @import 'assets/scss/custom_bootstrap';

    @import 'assets/scss/todo';
</style>
