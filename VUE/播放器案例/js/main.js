var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList:[],
        musicUrl: "",
        musicCover:"",
        hotComments:[],
        isPlaying: false,
        // 遮罩层
        isShow: false,
        // MV地址
        mvUrl: ""
    },
    methods: {
        // 音乐搜索
        searchMusic:function() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(response) {
                that.musicList = response.data.result.songs;
            },function(err){})
        },
        // 音乐播放
        playMusic:function(musicId) {
            var that = this
            // 获取歌曲地址
            axios.get("https://autumnfish.cn/song/url?id="+musicId)
            .then(function(response) {
                that.musicUrl = response.data.data[0].url;
            },function(err) {}),
            // 获取详情
            axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
            .then((response)=> {
                this.musicCover = response.data.songs[0].al.picUrl;
            },function(err) {})
            // 歌曲评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
            .then((response)=> {
                this.hotComments = response.data.hotComments;
            },function(err) {})
        },
        play: function() {
            this.isPlaying = true;
        },
        pause: function() {
            this.isPlaying = false;
        },
        playMV: function(mvid) {
            axios.get("https://autumnfish.cn/mv/url?id="+mvid)
            .then((response)=> {
                this.isShow = true;
                this.mvUrl = response.data.data.url;
                console.log(response.data.data.url)
            },function(err) {})
        },
        hide: function() {
            this.isShow = false
        }
    }
})