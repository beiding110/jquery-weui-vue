<template>
    <div id="app">
        <img src="./assets/logo.png">

        <wv-form v-model="form" label-width="120px">
            <wv-form-item v-model="form.name" label="姓名" required></wv-form-item>
            <wv-upload></wv-upload>
        </wv-form>

        <wv-badge>1</wv-badge>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            form: {
                name: ''
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
