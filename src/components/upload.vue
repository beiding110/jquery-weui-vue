<template>
    <div class="weui-uploader">
        <div class="weui-uploader__hd">
            <p class="weui-uploader__title">{{label}}</p>
            <div class="weui-uploader__info" v-if="max">{{fileList.length}}/{{max}}</div>
        </div>
        <div class="weui-uploader__bd">
            <ul class="weui-uploader__files">
                <li class="weui-uploader__file"
                v-for="(item, index) in fileList"
                :key="item.rowguid"
                :style="{
                    'background-image':'url(' + item.src + ')'
                }"
                @click="showPb(index)"></li>
            </ul>
            <div class="weui-uploader__input-box" v-if="!readonly && (max ? fileList.length < max : true)">
                <input class="weui-uploader__input" type="file" accept="image/*" ref="file" @change="uploadHandler">
            </div>
        </div>
    </div>
</template>

<script>
import 'jquery-weui/dist/js/swiper.js'

export default {
    props: {
        fileguidUrl: {
            type: String,
            default: '/api/Base/GetFileGuid'
        },
        fileListUrl: {
            type: String,
            default: '/api/File/GetFileList'
        },
        fileDelUrl: {
            type: String,
            default: '/api/File/DeleteFile'
        },
        action: {
            type: String,
            default: '/api/File/UploadFile'
        },
        fileguid: {
            type: String,
            default: ''
        },
        max: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: '图片上传'
        },
        fileprops: {
            type: Object,
            default: () => ({
                src: 'src',
                name: 'name',
                rowguid: 'rowguid'
            })
        },
        uploadSuccess: {
            type: Function,
            default(data, callback) {
                var obj = typeof(data)=='string' ? JSON.parse(data) : data;
                try {
                    // $.hideLoading();
                } catch (e) { }

                if(obj.Success){
                    if(/{|}|\[|\]/.test(obj.Data) && typeof obj.Data == 'string'){
                        callback(JSON.parse(obj.Data), obj);
                    }else{
                        callback(obj.Data, obj);
                    }
                }
            }
        },
        readonly: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            fileList: [],
            pb: null
        }
    },
    computed: {
        innerFileGuid: {
            get() {
                return this.fileguid;
            },
            set(val) {
                this.$emit('update:fileguid', val);
            }
        }
    },
    watch: {
        innerFileGuid(n) {
            this.getFileList();
        }
    },
    methods:{
        getFileGuid() {
            this.$get(this.fileguidUrl, data => {
                this.innerFileGuid = data;
            });
        },
        getFileList() {
            this.$get(this.fileListUrl, {
                id: this.innerFileGuid
            }, data => {
                this.fileList = data.map(item => ({
                    src: item[this.fileprops.src],
                    name: item[this.fileprops.name]
                }));

                this.initPb(this.fileList)
            });
        },
        initPb(data) {
            this.pb = $.photoBrowser({
                items: data.map(item => ({
                    image: item.src,
                    caption: item.name
                }))
            });
        },
        uploadHandler() {
            var file = this.$refs.file.files[0];

            var fd = new FormData();
            fd.append('filetype', '');
            fd.append('multiple', this.max !== 1);
            fd.append('fileguid', this.innerFileGuid);
            fd.append('file', file);

            $.ajax({
                type: 'post',
                url: this.action,
                data: fd,
                contentType: false,
                processData: false,
                success: data => {
                    this.uploadSuccess(data, (data, res) => {
                        if(Array.isArray(data)) {
                            this.fileList = data.map(item => ({
                                src: item[this.fileprops.src],
                                name: item[this.fileprops.name],
                                rowguid: item[this.fileprops.rowguid]
                            }));
                        } else {
                            this.fileList.push({
                                src: data[this.fileprops.src],
                                name: data[this.fileprops.name],
                                rowguid: data[this.fileprops.rowguid]
                            });
                        };

                        this.initPb(this.fileList);
                    });
                }
            });
        },
        deleteHandler(item) {
            this.$post(this.fileDelUrl, {
                id: item.rowguid
            }, data => {
                this.fileList = data;
            });
        },
        showPb(index) {
            if(!this.pb) return;
            this.pb.open(index);
        }
    },
    mounted:function(){
        !this.fileguid && this.getFileGuid();
        !!this.fileguid && this.getFileList();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
