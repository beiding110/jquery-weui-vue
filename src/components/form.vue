<template>
    <form class="wv-form weui-cells_form">
        <slot></slot>

        <slot name="btn" :submit="submit"></slot>
    </form>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => ({})
        },
        labelWidth: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

        }
    },
    computed: {
        app: function() {
            return window.app || window;
        }
    },
    methods:{
        chainItem(obj) {
            var type = obj.type,
            reg = obj.reg,
            target = obj.target,
            next = obj.next;

            if(this.app.inAttr(target.$attrs[type])){
                if(!reg.test(this.model[target.prop])){
                    target.error = target.label + '格式错误';
                    return false;
                };
            }
            next();
        },
        validate(callback) {
            var that = this;

            var res = true;

            this.$children.forEach(function(item){
                if(/form-item/.test(item.$vnode.componentOptions.tag)){
                    new that.app.Chain().link(function(obj,next) {
                        obj.error = null;
                        next();
                    }).link(function(obj, next) {
                        if(that.app.inAttr(obj.$attrs.required)) {
                            if(!that.model[obj.prop]){
                                obj.error = obj.label + '必填';
                                res = false;
                            }
                        };
                        next();
                    }).link(function(obj, next){
                        if(that.chainItem({
                            type: 'mobile',
                            reg: /^[1][0-9]{10}$/,
                            target: obj,
                            next: next,
                        }) === false) res=false;
                    }).link(function(obj, next){
                        if(that.chainItem({
                            type: 'mail',
                            reg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                            target: obj,
                            next: next,
                        }) === false) res=false;
                    }).link(function(obj, next){
                        if(that.chainItem({
                            type: 'mobile',
                            reg: /^1\d{10}$/,
                            target: obj,
                            next: next,
                        }) === false) res=false;
                    }).run(item);
                }
            })

            callback(res);
        },
        submit() {
            this.validate((res) => {
                if(res) {
                    this.$emit('submit')
                }
            })
        },
        setChildrenLabelWidth() {
            if(!!this.labelWidth) {
                this.$children.forEach(item => {
                    item.labelWidth = this.labelWidth;
                });
            }
        }
    },
    created() {

    },
    mounted:function(){
        this.setChildrenLabelWidth();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .wv-form{
        .weui-cells{margin-top:0; padding:1em 0;}
        .weui-cells+.weui-cells{margin-top:1.17647059em;}
    }
</style>
