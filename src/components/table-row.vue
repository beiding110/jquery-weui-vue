<template>
    <tr class="wv-table-row table-row">
        <td :style="labelStyle" class="table-label">
            {{label}}
        </td>
        <td class="table-data">
            <slot :row="$parent.data[prop]">
                <div v-html="contentComput($parent.data[prop])"></div>
            </slot>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['label', 'prop', 'labelWidth'],
    data () {
        return {

        }
    },
    computed: {
        labelStyle: function(){
            return {
                'width': !!this.labelWidth ? this.labelWidth : 'auto'
            }
        }
    },
    methods:{
        contentComput(data) {
            if(data === undefined || data === null || data === '') {
                return '-'
            } else {
                return data;
            };
        }
    },
    mounted:function(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .wv-table-row{
        &.table-row{border: none;}
        &.table-row td{border: 1px solid #F2F6FC; font-size:13px; color:#606266; padding:0.5em;}
        .table-label{text-align: center; background: #F2F6FC;}
        .table-data{text-align: left;}
    }
</style>
