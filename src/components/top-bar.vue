<template>
    <div class="wv-top-bar">
        <slot name="left">
            <i class="iconfont left" @click="$router.go(-1)">&#xe610;</i>
        </slot>
        <slot name="title">
            {{title}}
        </slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // title: ''
        }
    },
    methods:{
        setTitle: function(str){
            this.title = (str != null && str != undefined) ? str : document.title;
        }
    },
    watch: {

    },
    computed: {
        title() {
            return this.$store.state.docTitle
        }
    },
    mounted:function(){
        // this.setTitle();
    },
    activated: function(){
        // this.setTitle();
    },
    deactivated: function(){
        // this.setTitle('');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .wv-top-bar{background:linear-gradient(129deg, #B05ED6, #545BDF); height:44px; color:white; text-align:center; line-height:44px; font-size:16px; position: relative; z-index:1000;
        .iconfont{width:44px; height: 44px; position: absolute; z-index: 1000; top:0; font-size:20px;}
        .iconfont.left{left:0;}
        .iconfont.right{right:0;}
    }
</style>
