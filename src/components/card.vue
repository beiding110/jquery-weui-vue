<template>
    <div class="wv-card">
        <div class="wv-card__header">
            <slot name="header"></slot>
        </div>
        <div class="wv-card__body">
            <slot></slot>
        </div>
        <div class="wv-card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
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
<style>
.wv-card{background:rgba(255,255,255,1); border-radius:3px; padding:1em;}

.wv-card__header{color:#353535; font-size:1.14em; font-weight:bold; display:block; }
.wv-card__header, .wv-card__body, .wv-card__footer{line-height:1.8em;}

</style>
