<template>
    <div class="wv-badge">
        <slot></slot>
        <div
        :class="'weui-badge badge-item__content is-fixed' + (isDot ? ' is-dot' : '')"
        v-if="!hidden">
            {{isDot ? '' : value}}
        </div>
    </div>

</template>

<script>
export default {
    props: {
        isDot: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            default: 0
        },
        hidden: {
            type: Boolean,
            default: false
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
<style lang="scss">
.wv-badge{position:relative; vertical-align:middle; display:inline-block; max-width:100%;
    .badge-item__content{background-color:#f56c6c; border-radius:10px; color:#fff; display:inline-block; font-size:12px; height:18px; line-height:18px; padding:0 6px; text-align:center; white-space:nowrap; border:1px solid #fff;}

    .badge-item__content.is-fixed{position:absolute; top:0; right:10px; transform:translateY(-50%) translateX(100%);}
    .badge-item__content.is-dot{height:8px; width:8px; padding:0; right:0; border-radius:50%; right:5px;}
}
</style>
