<template>
    <div id="app">
        <img src="./assets/logo.png">

        <w-form v-model="form">
            <wv-form-item v-model="form.name" label="姓名" required></wv-form-item>
        </w-form>

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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
