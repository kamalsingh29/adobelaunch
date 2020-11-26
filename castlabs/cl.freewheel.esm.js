import {clpp} from "./cl.core.esm.js";let g={};var _ = clpp._;var f=function(window){var dA="clpp-freewheel",eA="clpp.freewheel.AdsManagerFactory",fA="freewheel",Y=function(a,b,c){this.c=a;this.b=b;this.a=c},gA=function(a){this.a=a},hA=function(){this.b=this.a=null},iA=function(){},jA=function(a){switch(a){case 0:return tv.freewheel.SDK.ADUNIT_PREROLL;case 1:return tv.freewheel.SDK.ADUNIT_MIDROLL;case 2:return tv.freewheel.SDK.ADUNIT_POSTROLL;default:return""}},kA=function(a){this.o=new _.H("clpp.freewheel.AdsManager");this.b=a;this.f=new _.ii;this.j=new tv.freewheel.SDK.AdManager;
this.c=this.a=null;this.m=[];this.i=[];this.l=[];this.h=new _.nj;this.g=null},lA=function(a){var b=[];typeof a.networkId!==_.Zc&&b.push("networkId");typeof a.serverUrl!==_.Fd&&b.push("serverUrl");typeof a.profileId!==_.Fd&&b.push("profileId");typeof a.videoAssetId!==_.Fd&&typeof a.videoAssetId!==_.Zc&&b.push("videoAssetId");if(b.length)throw new _.J(1,9,12001,{missingKeys:b.join(", ")});},mA=function(){var a,b,c,d;return _.A(function(e){if(1==e.a)return a=new _.gn,b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE,
_.x(e,a.canPlay(!1),2);if(3!=e.a)return c=e.b,_.x(e,a.canPlay(!0),3);d=e.b;c?b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED:d&&(b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED);return e["return"](b)})},pA=function(a){return _.A(function(b){if(a.m.length)return nA(a),a.c=a.m.shift(),a.c.play(),b.C(0);oA(a);return _.x(b,a.b.a.play(),0)})},qA=function(a){a.l.length?(nA(a),a.c=a.l.shift(),a.c.play()):oA(a)},nA=function(a){var b=a.b.Hb(fA).ic();if(b){var c=a.b.getSurface();_.zf(b,c.a.css.hidden);
_.rl(a.b.getSurface());a.a.registerVideoDisplayBase(dA);a.b.isMuted()?a.setVolume(0):a.setVolume(a.b.getVolume()||1)}},oA=function(a){var b=a.b.Hb(fA).ic();if(b){var c=a.b.getSurface();_.yf(b,c.a.css.hidden)}_.sl(a.b.getSurface())},rA=function(a,b,c){var d=null;a.a&&c&&(c.adInstance||c.slot)&&(c=(d=c.adInstance||null)?d.getSlot():c.slot,d={ad:new Y(a.a,c,d)});a.b.trigger(new _.O(b,d))},sA=function(){this.a=new _.H(eA)};_.r=Y.prototype;_.r.Ta=function(){return"FreeWheel AdManager SDK"};_.r.Ua=function(){return tv.freewheel.SDK.version};
_.r.$a=function(){return 0};_.r.Va=function(){return this.a?this.a.getAdId():""};_.r.getCreativeId=function(){var a=(this.a||{})._creativeId;return typeof a===_.Fd?a:""};_.r.getApiFramework=function(){return this.a?this.a.getActiveCreativeRendition().getCreativeApi():""};_.r.getAdSystem=function(){return""};_.r.getAdvertiserName=function(){return""};_.r.getTitle=function(){return""};_.r.getDuration=function(){return this.a?this.a.getActiveCreativeRendition().getDuration():0};
_.r.getSkipTimeOffset=function(){return 0};_.r.Lb=function(){return!1};_.r.nb=function(){return this.a&&this.a.getEventCallbackUrls(tv.freewheel.SDK.EVENT_AD_CLICK,tv.freewheel.SDK.EVENT_TYPE_CLICK)[0]||""};_.r.getMediaUrl=function(){return this.a?this.a.getActiveCreativeRendition().getPrimaryCreativeRenditionAsset().getUrl():""};_.r.Xa=function(){return this.a?this.a.getActiveCreativeRendition().getWidth():0};_.r.Wa=function(){return this.a?this.a.getActiveCreativeRendition().getHeight():0};
_.r.Ja=function(){return 0};_.r.Aa=function(){switch(this.b.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:return 0;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:return 2;default:return 1}};_.r.getPodIndex=function(){switch(this.Aa()){case 0:return 0;case 2:return-1}return this.c.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL).indexOf(this.b)+1};_.r.ob=function(){switch(this.Aa()){case 0:return 0;case 2:return-1;default:return this.b.getTimePosition()}};
_.r.pb=function(){return this.a?this.b.getAdInstances().indexOf(this.a)+1:1};_.r.Za=function(){return this.b.getAdCount()};_.r.getWrapperAdIds=function(){return[]};_.r.getWrapperAdSystems=function(){return[]};_.r.getWrapperCreativeIds=function(){return[]};Y.prototype.getWrapperCreativeIds=Y.prototype.getWrapperCreativeIds;Y.prototype.getWrapperAdSystems=Y.prototype.getWrapperAdSystems;Y.prototype.getWrapperAdIds=Y.prototype.getWrapperAdIds;Y.prototype.getSequenceLength=Y.prototype.Za;
Y.prototype.getPositionInSequence=Y.prototype.pb;Y.prototype.getPodTimeOffset=Y.prototype.ob;Y.prototype.getPodIndex=Y.prototype.getPodIndex;Y.prototype.getPodType=Y.prototype.Aa;Y.prototype.getMediaBitrate=Y.prototype.Ja;Y.prototype.getMediaHeight=Y.prototype.Wa;Y.prototype.getMediaWidth=Y.prototype.Xa;Y.prototype.getMediaUrl=Y.prototype.getMediaUrl;Y.prototype.getClickThroughUrl=Y.prototype.nb;Y.prototype.isBumper=Y.prototype.Lb;Y.prototype.getSkipTimeOffset=Y.prototype.getSkipTimeOffset;
Y.prototype.getDuration=Y.prototype.getDuration;Y.prototype.getTitle=Y.prototype.getTitle;Y.prototype.getAdvertiserName=Y.prototype.getAdvertiserName;Y.prototype.getAdSystem=Y.prototype.getAdSystem;Y.prototype.getApiFramework=Y.prototype.getApiFramework;Y.prototype.getCreativeId=Y.prototype.getCreativeId;Y.prototype.getId=Y.prototype.Va;Y.prototype.getTechnology=Y.prototype.$a;Y.prototype.getAdManagerVersion=Y.prototype.Ua;Y.prototype.getAdManagerName=Y.prototype.Ta;gA.prototype.getCuePoints=function(){return this.a.getTemporalSlots().map(function(a){switch(a.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:return 0;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:return-1;default:return a.getTimePosition()}})};gA.prototype.qb=function(){return 0<this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL).length};gA.prototype.ab=function(){return 0<this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL).length};
gA.prototype.hasPostroll=gA.prototype.ab;gA.prototype.hasPreroll=gA.prototype.qb;gA.prototype.getCuePoints=gA.prototype.getCuePoints;_.w(hA,_.fo);_.r=hA.prototype;_.r.onPlayerCreated=function(a){if(window.tv&&tv.freewheel&&tv.freewheel.SDK)this.a=_.wf(_.qc,{id:dA}),this.b=_.wf(_.Xd,{"class":"clpp-fill"}),this.a.appendChild(this.b),a.getSurface().uc(this.a,!0),a=a.getSurface(),_.yf(this.a,a.a.css.hidden);else a.onError(new _.J(1,9,12E3))};_.r.onPlayerWillDestroy=function(a){this.a&&(a.getSurface().me(this.a),this.b=this.a=null)};_.r.id=function(){return fA};_.r.ic=function(){return this.a};_.r.Vh=function(){return this.b};
_.B("clpp.freewheel.FreeWheelPlugin",hA);hA.prototype.getAdVideo=hA.prototype.Vh;hA.prototype.getAdContainer=hA.prototype.ic;hA.Id=fA;hA.AD_CONTAINER_ID=dA;iA.prototype.create=function(){return new hA};_.xn(new iA);_.r=kA.prototype;
_.r.load=function(){var a=this,b,c,d,e,f,g,h,l;return _.A(function(m){if(1==m.a){b=a.b.getConfiguration().freewheel||{};try{lA(b)}catch(n){return a.b.onError(n),a.h.resolve(),m["return"](a.h)}a.j.setNetwork(b.networkId);a.j.setServer(b.serverUrl);a.a=a.j.newContext();a.a.setProfile(b.profileId);typeof b.siteSectionId!==_.Fd&&typeof b.siteSectionId!==_.Zc||a.a.setSiteSection(b.siteSectionId);return _.x(m,mA(),2)}c=m.b;a.a.setVideoAsset(b.videoAssetId,a.b.getDuration(),void 0,void 0,c);if(Array.isArray(b.pods))for(d=
_.u(b.pods),e=d.next();!e.done;e=d.next())f=e.value,a.a.addTemporalSlot(f.id,jA(f.type),f.position,f.slotProfile,f.cuepointSequence,f.maxDuration,f.minDuration,f.acceptContentType);b.keyValues&&typeof b.keyValues===_.$c&&Object.keys(b.keyValues).filter(function(n){return b.keyValues.hasOwnProperty(n)}).forEach(function(n){return a.a.addKeyValue(n,b.keyValues[n])});a.a.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);if(Array.isArray(b.parameters))for(g=
_.u(b.parameters),h=g.next();!h.done;h=g.next())l=h.value,a.a.setParameter(l.name,l.value,l.level);a.f.on(a.a,tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,a.Yi.bind(a));a.f.on(a.a,tv.freewheel.SDK.EVENT_SLOT_STARTED,a.dj.bind(a));a.f.on(a.a,tv.freewheel.SDK.EVENT_SLOT_ENDED,a.cj.bind(a));a.f.on(a.a,tv.freewheel.SDK.EVENT_AD,a.ti.bind(a));a.f.on(a.b,_.Nd,a.Sg.bind(a));a.f.on(a.b,_.Dd,a.fj.bind(a));a.a.submitRequest();return m["return"](a.h)})};
_.r.start=function(){var a=this;return _.A(function(b){return _.x(b,pA(a),0)})};_.r.resume=function(){this.c&&this.c.resume()};_.r.pause=function(){this.c&&this.c.pause()};_.r.skip=function(){this.c&&this.c.skipCurrentAd()};_.r.getVolume=function(){return this.a?this.a.getAdVolume():1};_.r.setVolume=function(a){this.a&&this.a.setAdVolume(a)};_.r.getPosition=function(){return this.c?this.c.getPlayheadTime():-1};
_.r.dispose=function(){this.f.release();this.g&&(this.g.stop(),this.g=null);oA(this);this.a&&(this.a.dispose(),this.a=null)};
_.r.Yi=function(a){var b=this;if(a.success)this.m=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL),this.i=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL),this.l=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL),this.b.trigger(new _.O(_.yb,{adsTimeline:new gA(this.a)})),this.g=new _.an(this.b.getSurface(),function(c,d){return b.a.resize(c,d)},this.b.Hb(fA).b);else this.b.onError(new _.J(1,9,10003,{errorType:0},
void 0));this.h.resolve()};_.r.dj=function(a){rA(this,_.db,a);this.g.start()};_.r.cj=function(a){this.c=null;a=a.slot;rA(this,_.eb);this.g.stop();if(a)switch(a.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:pA(this);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:oA(this);this.b.play();break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:qA(this)}};
_.r.ti=function(a){var b=a.subType;this.o.debug("ad event",b);switch(b){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:rA(this,_.tb,a);rA(this,_.lb,a);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:rA(this,_.ub,a);break;case tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE:rA(this,_.jb,a);break;case tv.freewheel.SDK.EVENT_AD_MIDPOINT:rA(this,_.nb,a);break;case tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE:rA(this,_.vb,a);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:rA(this,_.ib,a);break;case tv.freewheel.SDK.EVENT_AD_CLICK:rA(this,
_.gb,a);break;case tv.freewheel.SDK.EVENT_AD_PAUSE:rA(this,_.ob,a);break;case tv.freewheel.SDK.EVENT_AD_RESUME:rA(this,_.qb,a);break;case tv.freewheel.SDK.EVENT_AD_SKIPPED:rA(this,_.sb,a);break;case tv.freewheel.SDK.EVENT_AD_BUFFERING_START:rA(this,_.fb,a);break;case tv.freewheel.SDK.EVENT_AD_BUFFERING_END:rA(this,_.pb,a);break;case tv.freewheel.SDK.EVENT_ERROR:this.b.onError(new _.J(1,9,10003,{errorType:1},{fwCode:a[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],fwInfo:a[tv.freewheel.SDK.INFO_KEY_ERROR_INFO],
fwModule:a[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}))}};_.r.Sg=function(){var a=this;if(!this.c){var b=this.b.getPosition();if(this.c=this.i.find(function(d){return.5>Math.abs(b-d.getTimePosition())})||null){var c=this.i.findIndex(function(d){return d===a.c});this.i.splice(c,1);this.b.pause();nA(this);this.c.play()}}};
_.r.fj=function(a){if((a=a.detail)&&this.a)switch(a.currentState){case _.ln:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING);break;case _.Kn:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED);break;case _.En:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED);qA(this);break;case _.yn:case _.dl:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED)}};kA.prototype.getPosition=kA.prototype.getPosition;kA.prototype.setVolume=kA.prototype.setVolume;
kA.prototype.getVolume=kA.prototype.getVolume;kA.prototype.skip=kA.prototype.skip;kA.prototype.pause=kA.prototype.pause;kA.prototype.resume=kA.prototype.resume;kA.prototype.start=kA.prototype.start;sA.prototype.name=function(){return eA};sA.prototype.O=function(a,b){return a.namespace()===_.dc?!1:window.tv&&tv.freewheel&&tv.freewheel.SDK?!(!b||!b.freewheel):(this.a.warn("FreeWheel SDK is not loaded."),!1)};sA.prototype.create=function(a){return new kA(a)};sA.prototype.create=sA.prototype.create;sA.prototype.isSupported=sA.prototype.O;sA.prototype.name=sA.prototype.name;_.bo(new sA);};f.call(g, window);