webpackJsonp([1],{"4ml/":function(e,t){},"93/j":function(e,t){},AEiw:function(e,t){},KMuv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("title",[this._v("爱视频")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("AEiw")},null,null).exports,r=n("p7sN"),o=n("Xxa5"),c=n.n(o),l=n("exGp"),u=n.n(l),d={name:"Home",data:function(){return{newVideoList:[],list:[],loading:!1,finished:!1}},created:function(){this.getVideoList()},methods:{getVideoList:function(){var e=this;return u()(c.a.mark(function t(){var n,a,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.prev=1,a={per_page:1e4,page:1},t.next=5,e.$api.Video.getVideoList(a);case 5:i=t.sent,n.newVideoList=i.data,console.log("返回数据data",i.data),console.log("返回数据",i),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("​catch -> e",t.t0);case 14:case"end":return t.stop()}},t,e,[[1,11]])}))()}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("van-grid",{attrs:{border:!1,"icon-size:49":"","column-num":3}},e._l(e.newVideoList,function(t){return n("van-grid-item",{key:t.id,attrs:{to:"/video/detail/"+t.id}},[n("van-image",{attrs:{Lazyload:"",src:t.img_url}}),e._v(" "),n("span",{staticClass:"video-title"},[e._v(e._s(t.title))])],1)}),1)],1)},staticRenderFns:[]};var v=n("VU/8")(d,p,!1,function(e){n("93/j")},"data-v-e8e9d496",null).exports,f={name:"VideoDetail",data:function(){return{selectVideoIndex:0,videoInfo:[],videoSeriesList:[],parsing_url:"",url:"",play_url:null,lineData:[]}},created:function(){this.getVideoInfo(),this.getAnalysisLine(),this.getSeriesList()},methods:{routerback:function(){this.$router.back(-1)},onSwitch:function(e,t){this.play_url=this.parsing_url+e,this.url=e,this.selectVideoIndex=t},onSwitchLine:function(){this.play_url=this.parsing_url+this.url},getVideoInfo:function(){var e=this;return u()(c.a.mark(function t(){var n,a,i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,a=e.$route.params.id,t.prev=2,i={id:a},t.next=6,e.$api.Video.getVideoInfo(i);case 6:s=t.sent,n.videoInfo=s.data,console.log("返回详情数据data",s.data),console.log("返回数据",s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("​catch -> e",t.t0);case 15:case"end":return t.stop()}},t,e,[[2,12]])}))()},getSeriesList:function(){var e=this;return u()(c.a.mark(function t(){var n,a,i,s;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,a=e.$route.params.id,t.prev=2,i={per_page:1e4,page:1,id:a},t.next=6,e.$api.Video.getSeriesList(i);case 6:s=t.sent,n.videoSeriesList=s.data,console.log("返回数据data",s.data),s.data&&(e.url=s.data[0].url),console.log("返回数据data",s.data[0].url),console.log("返回数据",s),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log("​catch -> e",t.t0);case 17:case"end":return t.stop()}},t,e,[[2,14]])}))()},getAnalysisLine:function(){var e=this;return u()(c.a.mark(function t(){var n,a,i,s,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,a=e.$route.params.id,t.prev=2,i={per_page:1e4,page:1,id:a},t.next=6,e.$api.Video.getAnalysisLineList(i);case 6:s=t.sent,r=[],s.data.forEach(function(e,t){var n=[];n.text=e.name,n.value=e.url,console.log(n),r.push(n)}),n.lineData=r,s.data&&(e.parsing_url=s.data[0].url),console.log("返回数据",s),console.log("返回数据",s),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log("​catch -> e",t.t0);case 18:case"end":return t.stop()}},t,e,[[2,15]])}))()}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-detail"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:e.routerback}}),e._v(" "),n("iframe",{attrs:{id:"iframeContain",name:"iframeContain",seamless:"",scrolling:"yes",src:e.play_url}}),e._v(" "),n("div",{staticClass:"header"},[n("h2",[e._v(e._s(e.videoInfo.title))]),e._v(" "),n("span",[e._v(e._s(e.videoInfo.desc))])]),e._v(" "),n("van-divider"),e._v(" "),n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:e.lineData,click:e.onSwitchLine()},model:{value:e.parsing_url,callback:function(t){e.parsing_url=t},expression:"parsing_url"}})],1),e._v(" "),n("div",{staticClass:"series-content"},[n("p",[e._v("剧集")]),e._v(" "),n("div",{staticClass:"series-list"},e._l(e.videoSeriesList,function(t,a){return n("div",{key:a},[n("van-button",{staticClass:"series-num",class:e.selectVideoIndex===a?"c-glyphicon-albumPlay":"",on:{click:function(n){return e.onSwitch(t.url,a)}}},[e._v(e._s(t.series_id))])],1)}),0)])],1)},staticRenderFns:[]};var h=n("VU/8")(f,g,!1,function(e){n("KMuv")},"data-v-b54dd8f2",null).exports;a.a.use(r.a);var m=new r.a({routes:[{path:"/",name:"Home",component:v},{path:"/video/detail/:id",name:"VideoDetail",component:h}]}),_=n("Fd2+"),L=(n("4ml/"),n("HSQo")),V=n.n(L),w=n("//Fk"),x=n.n(w),y=n("mvHQ"),k=n.n(y),b=n("mtWM"),S=n.n(b).a.create({timeout:6e4});S.defaults.headers.post["Content-Type"]="application/json",S.defaults.headers.put["Content-Type"]="application/json",S.interceptors.request.use(function(e){return"post"!==e.method&&"put"!==e.method||(e.data=k()(e.data)),e},function(e){return x.a.reject(e)}),S.interceptors.response.use(function(e){return e.data},function(e){var t={};console.log(t);var n=e.response,a=n.status,i=n.statusText,s=n.data;t=e.response?{code:a,data:s,msg:i}:{code:5e3,msg:"Network Error"}});var I=S,$=function(e,t,n){var a={};return t&&(a.params=t),n&&(a.headers=n),I.get(e,a)},A="http://admin.zsgtdc.cn/api";console.log("NODE_ENV:production");A="http://admin.zsgtdc.cn/api";var C={getVideoList:A+"/video/list",getSeriesList:A,getAnalysisLineList:A+"/video/analysis/lines/list",getVideoInfo:A+"/video/info"},E={},j={Video:{getVideoList:function(e){return console.log("url:"+C.getVideoList),$(C.getVideoList,e,E)},getSeriesList:function(e){var t=C.getSeriesList+"/video/"+e.id+"/series/list";return $(t,e,E)},getAnalysisLineList:function(e){return $(C.getAnalysisLineList,e,E)},getVideoInfo:function(e){return $(C.getVideoInfo,e,E)}}},D={install:function e(t){e.installed||(e.installed=!0,V()(t.prototype,{$api:{get:function(){return j}}}))}};a.a.use(D),a.a.use(r.a),a.a.use(_.b),a.a.use(_.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:m,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.7615d949a7485b5c8cd3.js.map