import {clpp} from "./cl.core.esm.js";let g={};var _ = clpp._;var f=function(window){var wx="clpp.ima.AdsManagerFactory",xx=function(a){this.a=a},zx=function(){this.a=new Blob([yx],{type:_.Zd})},Y=function(a,b,c){this.a=a;this.b=a.getAdPodInfo();this.f=b;this.c=c},Bx=function(a){this.b=a;this.g=a.getSurface().D();a=this.b.getConfiguration();this.F=_.J.hb(a.ima||{});this.A=this.b.Vc("ima").b;this.C=this.b.Vc("ima").c;this.f=this.b.Vc("ima").a;this.v=new zx;this.I=new _.E("clpp.ima");this.h=this.a=null;this.c=new _.Of;this.w=!1;this.u=new _.Xe;this.M=new Ax;this.i=null;this.m=this.o=
this.l=!1;this.j=null;a=this.u;var b=google.ima.AdErrorEvent.Type.AD_ERROR;a.one(this.f,google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,this.bi.bind(this));a.on(this.f,b,this.ai.bind(this));a.one(this.g,_.yc,this.ii.bind(this))},Cx=function(a){a=a.F;var b=new google.ima.AdsRenderingSettings;b.restoreCustomPlaybackStateOnAdBreakComplete=!1;typeof a.bitrate===_.Wc&&(b.bitrate=a.bitrate);b.enablePreloading=typeof a.enablePreloading===_.Sb?a.enablePreloading:!0;typeof a.loadVideoTimeout===_.Wc&&
(b.loadVideoTimeout=a.loadVideoTimeout);Array.isArray(a.mimeTypes)&&(b.mimeTypes=a.mimeTypes);typeof a.playAdsAfterTime===_.Wc&&(b.playAdsAfterTime=a.playAdsAfterTime);typeof a.useStyledLinearAds===_.Sb&&(b.useStyledLinearAds=a.useStyledLinearAds);b.uiElements=Array.isArray(a.uiElements)?a.uiElements:[];return b},Ex=function(a){a.i=null;Dx(a,_.rb);var b=a.b.getSurface();_.Sg(a.A,b.b.css.hidden)},Dx=function(a,b,c){c=c&&c.getAd();var d=null;c&&(d={ad:new Y(c,a.l,a.o)});a.b.trigger(new _.I(b,d))},Fx=
function(a,b){var c=b?a.M.create(b.getErrorCode()):null;a.b.onError(new _.K(1,9,10003,{errorType:c},b))},Hx=function(a){var b,c;return _.z(function(d){if(1==d.a)return a.C.initialize(),b=!!a.b.getConfiguration().muted,_.x(d,a.v.canPlay(b),2);c=d.b;if(!c)return Dx(a,_.Qb),a.I.warn(_.ia),d["return"]();Gx(a);_.y(d)})},Ix=function(a,b){return _.z(function(c){if(1==c.a)return a.C.initialize(),_.x(c,b.play(),2);Gx(a);_.y(c)})},Gx=function(a){a.a.init(a.g.offsetWidth,a.g.offsetHeight,google.ima.ViewMode.NORMAL);
a.a.start();a.w=!0},Ax=function(){},Jx=function(){this.a=new _.E(wx)},Kx=function(){this.a=this.c=this.b=null},Lx=function(){return!window.google||!google.ima||!google.ima.AdsLoader},Mx=function(){},Nx=function(a,b){this.g=a;this.f=b;this.a=this.b=this.c=null},Ox=function(a,b){var c=a.g.D();return parseInt(getComputedStyle(c)[b],10)};xx.prototype.getCuePoints=function(){return this.a};xx.prototype.Yb=function(){return 0<=this.a.indexOf(0)||0===this.a.length};xx.prototype.tb=function(){return 0<=this.a.indexOf(-1)};
xx.prototype.hasPostroll=xx.prototype.tb;xx.prototype.hasPreroll=xx.prototype.Yb;xx.prototype.getCuePoints=xx.prototype.getCuePoints;zx.prototype.canPlay=function(a){function b(f){e.stop();d.resolve(f)}var c=document.createElement(_.Xd);c.setAttribute("playsinline","playsinline");a&&(c.muted=!0,c.setAttribute("muted","muted"));c.src=URL.createObjectURL(this.a);var d=new _.Of;a=c.play();var e=(new _.sg(function(){b(!1)})).P(.25);void 0!==a?a.then(function(){return b(!0)})["catch"](function(){return b(!1)}):b(!0);return d};
var yx=new Uint8Array([0,0,0,28,102,116,121,112,105,115,111,109,0,0,2,0,105,115,111,109,105,115,111,50,109,112,52,49,0,0,0,8,102,114,101,101,0,0,2,239,109,100,97,116,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,128,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,0,2,194,109,111,111,118,0,0,0,108,109,118,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,232,0,0,0,47,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,236,116,114,97,107,0,0,0,92,116,107,104,100,0,0,0,3,0,0,0,0,
0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,101,100,116,115,0,0,0,28,101,108,115,116,0,0,0,0,0,0,0,1,0,0,0,47,0,0,0,0,0,1,0,0,0,0,1,100,109,100,105,97,0,0,0,32,109,100,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,68,0,0,8,0,85,196,0,0,0,0,0,45,104,100,108,114,0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0,0,0,1,15,109,105,110,102,
0,0,0,16,115,109,104,100,0,0,0,0,0,0,0,0,0,0,0,36,100,105,110,102,0,0,0,28,100,114,101,102,0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1,0,0,0,211,115,116,98,108,0,0,0,103,115,116,115,100,0,0,0,0,0,0,0,1,0,0,0,87,109,112,52,97,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,16,0,0,0,0,172,68,0,0,0,0,0,51,101,115,100,115,0,0,0,0,3,128,128,128,34,0,2,0,4,128,128,128,20,64,21,0,0,0,0,1,244,0,0,1,243,249,5,128,128,128,2,18,16,6,128,128,128,1,2,0,0,0,24,115,116,116,115,0,0,0,0,0,0,0,1,0,0,0,2,0,0,4,0,0,0,0,28,
115,116,115,99,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,28,115,116,115,122,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,115,0,0,1,116,0,0,0,20,115,116,99,111,0,0,0,0,0,0,0,1,0,0,0,44,0,0,0,98,117,100,116,97,0,0,0,90,109,101,116,97,0,0,0,0,0,0,0,33,104,100,108,114,0,0,0,0,0,0,0,0,109,100,105,114,97,112,112,108,0,0,0,0,0,0,0,0,0,0,0,0,45,105,108,115,116,0,0,0,37,169,116,111,111,0,0,0,29,100,97,116,97,0,0,0,1,0,0,0,0,76,97,118,102,53,54,46,52,48,46,49,48,49]);_.r=Y.prototype;_.r.jb=function(){return"Google IMA SDK"};_.r.kb=function(){return google.ima.VERSION};_.r.sb=function(){return 0};_.r.nb=function(){return this.a.getAdId()};_.r.getCreativeId=function(){return this.a.getCreativeId()};_.r.getApiFramework=function(){return this.a.getApiFramework()};_.r.getAdSystem=function(){return this.a.getAdSystem()};_.r.getAdvertiserName=function(){return this.a.getAdvertiserName()};_.r.getTitle=function(){return this.a.getTitle()};_.r.getDuration=function(){return this.a.getDuration()};
_.r.getSkipTimeOffset=function(){return this.a.getSkipTimeOffset()};_.r.tc=function(){return this.b?this.b.getIsBumper():!1};_.r.Vb=function(){var a=this,b=null,c=this.a,d=Object.keys(c).filter(function(e){return a.a.hasOwnProperty(e)}).find(function(e){return typeof c[e]===_.Xc&&typeof c[e].clickThroughUrl===_.Bd});d&&(b=c[d].clickThroughUrl);return b};_.r.getMediaUrl=function(){return this.a.getMediaUrl()};_.r.pb=function(){return this.a.getVastMediaWidth()};_.r.ob=function(){return this.a.getVastMediaHeight()};
_.r.Ta=function(){return this.a.getVastMediaBitrate()};_.r.qb=function(){return this.c?2:this.f?1:0};_.r.getPodIndex=function(){return this.b?this.b.getPodIndex():0};_.r.Wb=function(){return this.b?this.b.getTimeOffset():0};_.r.Xb=function(){return this.b?this.b.getAdPosition():1};_.r.rb=function(){return this.b?this.b.getTotalAds():1};_.r.getWrapperAdIds=function(){return this.a.getWrapperAdIds()};_.r.getWrapperAdSystems=function(){return this.a.getWrapperAdSystems()};_.r.getWrapperCreativeIds=function(){return this.a.getWrapperCreativeIds()};
Y.prototype.getWrapperCreativeIds=Y.prototype.getWrapperCreativeIds;Y.prototype.getWrapperAdSystems=Y.prototype.getWrapperAdSystems;Y.prototype.getWrapperAdIds=Y.prototype.getWrapperAdIds;Y.prototype.getSequenceLength=Y.prototype.rb;Y.prototype.getPositionInSequence=Y.prototype.Xb;Y.prototype.getPodTimeOffset=Y.prototype.Wb;Y.prototype.getPodIndex=Y.prototype.getPodIndex;Y.prototype.getPodType=Y.prototype.qb;Y.prototype.getMediaBitrate=Y.prototype.Ta;Y.prototype.getMediaHeight=Y.prototype.ob;
Y.prototype.getMediaWidth=Y.prototype.pb;Y.prototype.getMediaUrl=Y.prototype.getMediaUrl;Y.prototype.getClickThroughUrl=Y.prototype.Vb;Y.prototype.isBumper=Y.prototype.tc;Y.prototype.getSkipTimeOffset=Y.prototype.getSkipTimeOffset;Y.prototype.getDuration=Y.prototype.getDuration;Y.prototype.getTitle=Y.prototype.getTitle;Y.prototype.getAdvertiserName=Y.prototype.getAdvertiserName;Y.prototype.getAdSystem=Y.prototype.getAdSystem;Y.prototype.getApiFramework=Y.prototype.getApiFramework;
Y.prototype.getCreativeId=Y.prototype.getCreativeId;Y.prototype.getId=Y.prototype.nb;Y.prototype.getTechnology=Y.prototype.sb;Y.prototype.getAdManagerVersion=Y.prototype.kb;Y.prototype.getAdManagerName=Y.prototype.jb;_.r=Bx.prototype;
_.r.bi=function(a){this.a=a.getAdsManager(this.g,Cx(this));this.h=new Nx(this.b.getSurface(),this.a);a=this.a.getCuePoints();this.j=new xx(a);this.b.trigger(new _.I(_.vb,{adsTimeline:this.j}));a=this.a;var b=this.u,c=google.ima.AdEvent.Type;b.on(a,c.LOADED,this.Cg.bind(this));b.on(a,c.CONTENT_PAUSE_REQUESTED,this.ji.bind(this));b.on(a,c.STARTED,this.Eg.bind(this));b.on(a,c.LOG,this.Vh.bind(this));b.on(a,c.AD_PROGRESS,this.Zh.bind(this));b.on(a,c.AD_BUFFERING,this.Th.bind(this));b.on(a,c.FIRST_QUARTILE,
this.Ag.bind(this));b.on(a,c.MIDPOINT,this.Wh.bind(this));b.on(a,c.THIRD_QUARTILE,this.Fg.bind(this));b.on(a,c.PAUSED,this.Yh.bind(this));b.on(a,c.RESUMED,this.$h.bind(this));b.on(a,c.CLICK,this.zg.bind(this));b.on(a,c.SKIPPED,this.Dg.bind(this));b.on(a,c.IMPRESSION,this.Bg.bind(this));b.on(a,c.COMPLETE,this.Uh.bind(this));b.on(a,c.CONTENT_RESUME_REQUESTED,this.ki.bind(this));this.c.resolve()};_.r.ai=function(a){Fx(this,a.getError());this.c.resolve()};
_.r.ji=function(a){this.m=!0;this.b.pause();_.Ug(this.g,{visibility:_.Ec});Dx(this,_.bb,a);this.h.start()};_.r.Cg=function(a){a.getAd().isLinear()?Dx(this,_.ib,a):(this.a.discardAdBreak(),this.l||(this.l=!0,this.b.play()))};_.r.Eg=function(a){this.i=a.getAd().getDuration();Dx(this,_.qb,a);a=this.b.getSurface();_.Tg(this.A,a.b.css.hidden)};_.r.Vh=function(a){a=a.getAdData();Fx(this,a?a.adError:null);Ex(this)};_.r.Zh=function(a){Dx(this,_.nb,a)};_.r.Th=function(a){Dx(this,_.db,a)};
_.r.Ag=function(a){Dx(this,_.gb,a)};_.r.Wh=function(a){Dx(this,_.jb,a)};_.r.Fg=function(a){Dx(this,_.sb,a)};_.r.Yh=function(a){Dx(this,_.mb,a)};_.r.$h=function(a){Dx(this,_.ob,a)};_.r.zg=function(a){this.pause();Dx(this,_.eb,a)};_.r.Dg=function(a){Dx(this,_.pb,a);Ex(this)};_.r.Bg=function(a){Dx(this,_.hb,a)};_.r.Uh=function(a){Dx(this,_.fb,a);Ex(this)};_.r.ki=function(){this.l=!0;if(!this.m)return this.b.play();this.m=!1;this.h.stop();this.b.isEnded()||this.b.play();Dx(this,_.cb);_.Ug(this.g,{visibility:"visible"})};
_.r.ii=function(){this.o=!0;this.f.contentComplete()};
_.r.load=function(){var a=this,b,c,d,e,f;return _.z(function(g){if(1==g.a){b=a.b;c=a.F;try{if(typeof c.adTagUrl!==_.Bd)throw new _.K(1,9,10001,{missingKeys:"adTagUrl"});}catch(h){return b.onError(h),a.c.resolve(),g["return"](a.c)}return c.adTagUrl?_.x(g,a.v.canPlay(!1),2):(a.c.resolve(),g["return"](a.c))}if(3!=g.a)return d=g.b,_.x(g,a.v.canPlay(!0),3);e=g.b;f=new google.ima.AdsRequest;f.adTagUrl=c.adTagUrl;f.setAdWillAutoPlay(d);f.setAdWillPlayMuted(e);a.f.requestAds(f);return g["return"](a.c)})};
_.r.start=function(a){var b=this;return _.z(function(c){return b.a&&b.j&&!b.w?b.j.Yb()?_.x(c,Hx(b),0):_.x(c,Ix(b,a),0):_.x(c,a.play(),0)})};_.r.resume=function(){this.a&&this.a.resume()};_.r.pause=function(){this.a&&this.a.pause()};_.r.skip=function(){this.a&&this.a.skip()};_.r.getVolume=function(){return this.a?this.a.getVolume():1};_.r.setVolume=function(a){this.a&&this.a.setVolume(a)};
_.r.getPosition=function(){if(!this.a||null===this.i)return-1;var a=this.a.getRemainingTime();return 0>a?0:this.i-a};_.r.dispose=function(){this.u.release();this.h&&(this.h.stop(),this.h=null);this.a&&(this.a.destroy(),this.a=null);this.f&&!this.o&&this.f.contentComplete()};Bx.prototype.getPosition=Bx.prototype.getPosition;Bx.prototype.setVolume=Bx.prototype.setVolume;Bx.prototype.getVolume=Bx.prototype.getVolume;Bx.prototype.skip=Bx.prototype.skip;Bx.prototype.pause=Bx.prototype.pause;
Bx.prototype.resume=Bx.prototype.resume;Ax.prototype.create=function(a){var b=google.ima.AdError.ErrorCode;switch(a){case b.VAST_LOAD_TIMEOUT:case b.VAST_MEDIA_LOAD_TIMEOUT:case b.FAILED_TO_REQUEST_ADS:return 0;case b.VIDEO_PLAY_ERROR:return 1;default:return 2}};Jx.prototype.name=function(){return wx};Jx.prototype.da=function(a,b){return a.namespace()===_.bc?!1:Lx()?(this.a.warn("IMA SDK is not loaded."),!1):!(!b||!b.ima)};Jx.prototype.create=function(a){return new Bx(a)};Jx.prototype.create=Jx.prototype.create;Jx.prototype.isSupported=Jx.prototype.da;Jx.prototype.name=Jx.prototype.name;_.eh(new Jx);_.w(Kx,_.tn);_.r=Kx.prototype;_.r.onPlayerCreated=function(a){if(Lx())return a.onError(new _.K(1,9,1E4));this.b=_.Qg("div",{"class":"clpp-ima clpp-hidden"});a.getSurface().Lc(this.b);this.c=new google.ima.AdDisplayContainer(this.b,a.getSurface().D());this.a=new google.ima.AdsLoader(this.c);this.a.getSettings().setPlayerType(_.la);this.a.getSettings().setPlayerVersion(_.fa);this.a.getSettings().setAutoPlayAdBreaks(!0)};
_.r.onPlayerWillDestroy=function(a){this.a&&(this.a.destroy(),this.a=null);this.c&&(this.c.destroy(),this.c=null);this.b&&(a.getSurface().uf(this.b),this.b=null)};_.r.Bh=function(){return this.a};_.r.Ah=function(){return this.c};_.r.zh=function(){return this.b};_.r.id=function(){return"ima"};_.B("clpp.ima.ImaPlugin",Kx);Kx.prototype.getAdContainer=Kx.prototype.zh;Kx.prototype.getAdDisplayContainer=Kx.prototype.Ah;Kx.prototype.getAdsLoader=Kx.prototype.Bh;Kx.Id="ima";Kx.isSdkMissing=Lx;
Mx.prototype.create=function(){return new Kx};_.hl(new Mx);Nx.prototype.start=function(){this.a=(new _.sg(this.h.bind(this))).za(.25)};Nx.prototype.stop=function(){this.a&&(this.a.stop(),this.a=null)};Nx.prototype.h=function(){var a=Ox(this,_.Dc),b=Ox(this,_.he);if(this.b!==a||this.c!==b)this.b=a,this.c=b,this.f.resize(this.c,this.b,document.fullscreenElement?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)};};f.call(g, window);