<template>
    <span class="wv-switch-con">
        <span v-if="inactiveText" class="wv-switch-text" :class="{'wv-switch-text_active': model}" :style="activeTextStyle">{{inactiveText}}</span>
        <input class="weui-switch wv-switch" :class="sizeClass" type="checkbox" v-model="model">
        <span v-if="activeText" class="wv-switch-text" :class="{'wv-switch-text_active': model}" :style="activeTextStyle">{{activeText}}</span>
    </span>
</template>

<script>
export default {
    props: {
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        size: {
            type: String,
            default: 'large'
        },
        activeText: {
            type: String,
            default: ''
        },
        inactiveText: {
            type: String,
            default: ''
        },
        activeValue: {
            type: [Boolean, String, Number],
            default: true
        },
        inactiveValue: {
            type: [Boolean, String, Number],
            default: false
        },
        activeColor: {
            type: String,
            default: '#409EFF'
        },
        inactiveColor: {
            type: String,
            default: '#DFDFDF'
        },
        beforeChange: {
            type: Function,
            default: null
        }
    },
    data () {
        return {

        }
    },
    computed: {
        model: {
            get() {
                if(this.value === this.activeValue) {
                    return true;
                } else if (this.value === this.inactiveValue) {
                    return false;
                };
            },
            set(n, o) {
                var map = n ? this.activeValue : this.inactiveValue;

                if(this.beforeChange) {
                    this.beforeChange(n, o, function() {
                        this.$emit('input', map);
                    });
                } else {
                    this.$emit('input', map);
                };
            }
        },
        sizeClass() {
            return ('wv-switch_' + this.size)
        },
        activeTextStyle() {
            return this.model ? {
                color: this.activeColor
            } : {
                color: 'inherit'
            };
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
.wv-switch-con{
    .wv-switch{display:inline-block; line-height:100%; vertical-align:middle;}

    .wv-switch_small{height:14px; line-height:14px;}
    .wv-switch_small::before, .wv-switch_small::after{height:12px;}

    .wv-switch_small{width:34px;}
    .wv-switch_small::before{width:32px;}
    .wv-switch_small::after{width:12px;}

    .wv-switch_large{}
}
</style>
