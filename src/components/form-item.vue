<template>
    <div :class="itemClass" class="wv-form-item">
        <div class="weui-cell__hd">
            <label class="weui-label" :style="{width: labelWidth}">
                <font v-if="$attrs.required || $attrs.required===''" class="required__star">*</font>
                <slot name="label">
                    {{label}}
                </slot>
            </label>
        </div>
        <div class="weui-cell__bd">
            <slot>
                <input class="weui-input" :type="type" :placeholder="placeholder" v-model="model">
            </slot>
        </div>
        <div class="weui-cell__ft" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>

        <label class="error__noti" v-if="!!error">{{error}}</label>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        arrow: {
            type: Boolean,
            default: false
        },
        labelWidth: {
            type: String,
            default: '105px'
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            error: null
        }
    },
    computed: {
        model: {
            get: function(){
                return this.value;
            },
            set: function(val){
                this.$emit('input', val)
            }
        },
        itemClass: function(){
            return this.arrow ? 'weui-cell weui-cell_select weui-cell_select-after' : 'weui-cell'
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
    .wv-form-item{
        .required__star{color:red; position:absolute; left:5px; top:52%; transform:translate(0,-50%);}
        .weui-cell_select{padding:10px 15px;}

        .error__noti{position:absolute; bottom:-0.5em; font-size:10px; color:red;}
    }
</style>
