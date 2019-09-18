<template>
    <span :class="'wv-tag ' + 'wv-tag--' + type">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },
    data () {
        return {

        }
    },
    methods:{

    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wv-tag{font-size: 12px; padding:.1em .5em; border-radius:3px; color:white; line-height:1.5em}

.wv-tag--primary{background:#1F80E6;}
.wv-tag--info{background:#67BEA5;}
.wv-tag--warn{background:#ECA355;}
.wv-tag--danger{background:#FE7270;}

</style>
