import {clpp} from "./cl.core.esm.js";let g={};var _ = clpp._;var f=function(window){var ex="An unknown error occured while trying to get volume",fx="Cannot get loading rendition due to platform limitations",gx="SecurityError",hx="The require privilege is: http://tizen.org/privilege/tv.audio",ix="|STARTBITRATE\x3d",jx=function(a,b){var c={},d=null!==a.parentElement?window.getComputedStyle(a,null):a.style;if(!b||0===b.length){b||(b=[]);for(var e in d)b.push(e)}b.forEach(function(f){c[f]=d[f]});return c},kx=function(a,b,c){function d(e){c.call(a,e);a.removeEventListener(b,d)}a.addEventListener(b,
d)},lx=function(a){_.Wi.call(this);this.f=a;this.a=new _.H("clpp.tizen.Middleware");this.j=1;this.l=["LOCALE","DISPLAY"];this.i=!1;this.h=null;this.m=0;this.g=!0;this.c=!1;this.b=null},mx=function(a){var b=a.l;if(0===b.length)return!0;b.forEach(function(c){tizen.systeminfo.getPropertyValue(c,function(){a.l.splice(a.l.indexOf(c),1)},function(d){a.a.debug(c+": err: ",d)})});return 0===a.l.length},ox=function(a){try{webapis.avplay.setListener({onbufferingstart:a.ph.bind(a),onbufferingprogress:a.oh.bind(a),
onbufferingcomplete:a.nh.bind(a),onstreamcompleted:a.sh.bind(a),oncurrentplaytime:function(b){a.trigger(new _.O(nx,{currentTime:b}))},onevent:a.rh.bind(a),onsubtitlechange:a.th.bind(a),ondrmevent:a.qh.bind(a),onerror:a.dc.bind(a)})}catch(b){a.a.error(b)}},px=function(a,b){a.a.debug("Applying drm",b.drm);var c=_.hm[b.drm.env]||null;if(c){var d=b.drm.customData||{};if((c=_.gm(c)[_.Ek])&&c.licenseUrl){var e={DeleteLicenseAfterUse:!0};e.CustomData=btoa(JSON.stringify(d));e.licenseServer=c.licenseUrl;
try{webapis.avplay.setDrm("PLAYREADY","SetProperties",JSON.stringify(e))}catch(f){d=f,a.a.error(d),a.dc(JSON.stringify(d))}}}else a.a.debug("Could not find configured DRM environment.","Please make sure "+b.drm.env+" is registered.")},qx=function(a){var b=!!a.f.getTrackManager().ja();try{webapis.avplay.setSilentSubtitle(!b)}catch(c){a.a.debug("Could not set AVPlay subtitle config",c)}a.a.debug("AVPlay is prepared")},rx=function(a,b){try{var c=b.estimatedBandwidth||0,d=b.currentBandwidth||0;a.a.debug({estimatedBandwidth:c,
Tj:d});0!==c&&0!==d&&c>=1.15*d&&webapis.avplay.setStreamingProperty("ADAPTIVE_INFO",ix+d)}catch(e){a.a.debug(e)}},sx=function(a,b){try{webapis.avplay.setStreamingProperty("ADAPTIVE_INFO","|BITRATES\x3d"+b+ix+b)}catch(c){throw a.a.debug("Could not set fixed bandwdth",c),c;}},wx=function(a){return{position:a.getPosition(),state:a.f.getState(),ze:a.getState(),playbackRate:a.getPlaybackRate(),isLive:a.isLive(),duration:a.getDuration(),isMuted:tx(a),volume:a.getVolume(),Bj:ux(a),Ih:vx(a)}},yx=function(a){var b,
c,d,e;return _.A(function(f){if(1==f.a)return _.x(f,xx(),2);if(3!=f.a)return b=new Promise(function(g){(new _.Hf(g)).R(5)}),d=new Promise(function(g){c=new _.Hf(function(){mx(a)&&g()});c.Ga(.01)}),_.x(f,Promise.race([d.then(function(){return!0}),b.then(function(){return!1})]),3);e=f.b;c&&(c.stop(),c=null);if(!e)return a.a.debug("Took to long for the SDK to be ready"),f["return"](Promise.reject("SDK Timeout"));_.y(f)})},Ex=function(a,b,c){a.h=_.yl(b);var d=a.m,e=c||{estimatedBandwidth:0,currentBandwidth:0,
nextBandwidth:null,currentPosition:0};return new Promise(function(f,g){a.a.debug("Loading manifest URL: "+a.h[d].url);var h=b.startTime||void 0;a.c&&(a.trigger(new _.O(zx)),h=c.currentPosition);try{webapis.avplay.open(a.h[d].url),e.nextBandwidth?(sx(a,e.nextBandwidth),a.g=!1):(a.g||rx(a,e),a.g=!0)}catch(l){return g(l)}ox(a);b.drm&&b.drm.env?px(a,b):a.a.debug("No DRM configuration was provided. Assuming clear content");try{a.c||a.trigger(new _.O(Ax)),a.a.debug("avplay.prepare()"),webapis.avplay.prepareAsync(function(){a.a.debug("AVPlay is ready!");
a.c||a.trigger(new _.O(Bx));h&&typeof h===_.Zc&&0<h&&a.seek(h)["catch"](function(l){a.a.debug("Couldn't set start position",l)});qx(a);a.c||(b.volume&&a.setVolume(b.volume),b.muted&&Cx(a,b.muted),b.autoplay&&a.play()["catch"](function(l){a.a.debug("Autoplay failed",l)}));return f(a)},function(l){a.a.debug("prepareAsync failed",l);a.trigger(new _.O(Dx));return g(l)})}catch(l){return a.a.debug("prepareAsync didnt even run correctly",l),g(l)}})},Gx=function(a,b,c){a.a.debug("switchVideoTrack()");try{var d=
{estimatedBandwidth:parseInt(webapis.avplay.getStreamingProperty("CURRENT_BANDWITH"),10),currentBandwidth:b,nextBandwidth:c,currentPosition:a.getPosition()};a.b=wx(a);a.c=!0;webapis.avplay.stop();webapis.avplay.close();return a.load(a.f.getConfiguration(),d).then(function(){var e=a.b.ze;a.c=!1;a.b=null;return e===Fx?a.pause():a.play()})}catch(e){return Promise.reject(e)}},ux=function(a){return a.c&&a.b?a.b.Bj:webapis.avplay.getTotalTrackInfo()},vx=function(a){return a.c&&a.b?a.b.Ih:webapis.avplay.getCurrentStreamInfo()},
Hx=function(a,b){var c=a.f.getTextDisplayer();c&&c.setTextVisibility(b);c=a.f.f;try{c||webapis.avplay.setSilentSubtitle(!b)}catch(d){a.a.debug("Could not set text track visibility",d)}},Cx=function(a,b){try{tizen.tvaudiocontrol.setMute(b)}catch(c){switch(c.name){case gx:a.a.warn("The application does not have the privilege to set mute.",hx);break;default:a.a.warn(ex,c)}}},tx=function(a){var b=null;try{b=tizen.tvaudiocontrol.isMute()}catch(c){switch(c.name){case gx:a.a.warn("The application doesn't have the privilege to get the mute state.",
hx);break;default:a.a.warn(ex,c)}}return!!b},xx=function(){return new Promise(function(a,b){if(window.hasOwnProperty("webapis"))a();else{var c=document.createElement("script");kx(c,"load",function(d){return a(d)});kx(c,_.Ac,function(d){return b(d)});c.src="$WEBAPIS/webapis/webapis.js";document.querySelector("head").appendChild(c)}})},Ix=function(){this.f=this.a=this.c=null;this.g={};this.b=new _.H("clpp.tizen.TrackManager");this.l=this.i=this.h=null;this.j=1},Jx=function(a,b){a.c.trigger(new _.O(_.ae,
{details:{width:b.width,height:b.height,bandwidth:b.bandwidth,track:b.track,abrSelection:a.a.g}}))},Kx=function(a){var b=a.Z();b&&a.c.trigger(new _.O(_.Tb,{detail:{width:b.width,height:b.height,bandwidth:b.bandwidth,rendition:b}}))},Lx=function(a,b){if(b){var c=b.track.type.toUpperCase(),d=a.a,e=Number(b.id);"TEXT"===c.toUpperCase()&&Hx(d,!0);try{webapis.avplay.setSelectTrack(c.toUpperCase(),e)}catch(f){d.a.error(f)}"AUDIO"===c&&(a.h=b,a.c.trigger(new _.O(_.Oi)));"TEXT"===c&&(a.i=b,a.c.trigger(new _.O(_.Pi)))}else a.b.debug("Must provide valid rendition")},
Mx=function(a,b,c){c.language=b.language||null;c.channelsCount=b.channels?Number(b.channels):null;c.mimeType=_.Pb;a=new _.xi(String(a),c);a.track=c;a.codec=b.fourCC||null;a.bandwidth=b.bit_rate||null;return a},Nx=function(a,b,c){c.mimeType=_.Zd;a=new _.xi(String(a),c);a.track=c;a.width=b.Width||null;a.height=b.Height||null;a.bandwidth=b.Bit_rate?Number(b.Bit_rate):null;a.codec=b.fourCC||null;return a},Ox=function(a,b,c){c.mimeType="text/ttml";c.language=b.track_lang||null;c.kind=_.Id;return new _.xi(String(a),
c)},Px=function(a,b){var c=null;try{c=JSON.parse(b)}catch(d){a.b.warn("Couldn't retrieve extra infos from stream."),c=null}return c},Sx=function(a,b){function c(n,p){for(var q=0;q<n.length;q++)if(n[q].language===p)return n[q];return null}var d={};if(0>=b.length)return d;for(var e=b.filter(function(n){return"VIDEO"===n.type}),f=b.filter(function(n){return"AUDIO"===n.type}),g=[],h=0;h<f.length;h++){var l=Px(a,f[h].extra_info);if(l){var m=c(g,l.language);m||(m=new _.wi(String(a.j++),_.Q),g.push(m));
m.renditions.push(Mx(f[h].index,l,m))}else a.b.warn("Skipping audio stream with no extra info")}f=new _.wi(String(a.j++),_.zi);for(h=0;h<e.length;h++)(l=Px(a,e[h].extra_info))?f.renditions.push(Nx(e[h].index,l,f)):a.b.warn("Skipping video stream with no extra info");e=[];e=a.f?Qx(a.f):Rx(a,b);d[_.zi]=[f];d[_.Q]=g;d[_.P]=e;return d},Rx=function(a,b){for(var c=b.filter(function(h){return"TEXT"===h.type}),d=[],e=0;e<c.length;e++){var f=Px(a,c[e].extra_info);if(f){var g=new _.wi(String(a.j++),_.P);g.renditions.push(Ox(c[e].index,
f,g));d.push(g)}else a.b.warn("Skipping text stream with no extra info")}return d},Tx=function(a,b){for(var c=a.g[_.zi]||[],d=[],e=0;e<c.length;e++)for(var f=0;f<c[e].renditions.length;f++)_.C.ya(c[e].renditions[f],b,Object.keys(b))&&d.push(c[e].renditions[f]);return d[0]||null},Vx=function(a,b){if(b===_.P&&a.f)return Ux(a.f);var c=(vx(a.a)||[]).filter(function(e){return e.type===b.toUpperCase()})[0],d=null;b===_.zi&&(d=Px(a,c.extra_info),d=Tx(a,{width:d.Width,height:d.Height}));b===_.Q&&(c?a.h=d:
d=a.h);b===_.P&&(c?a.i=d:d=a.i);return d},Wx=function(){this.j=this.m=this.c=this.f=this.o=this.a=this.i=this.h=null;this.l=!0;this.g=null;this.b=new _.H("clpp.tizen.TextStreamer")},Xx=function(a){var b,c;return _.A(function(d){if(1==d.a)return b=a.a.getConfiguration(),_.x(d,_.Do.create(a.o.url,a.a.getNetworkEngine(),b.manifest.attemptParameters,a.o.type),2);c=d.b;c.configure(b.manifest);return d["return"](c)})},Yx=function(a){var b=document.createElement(_.Xd),c=new _.Bt,d=new _.Ps(function(){return null});
a=a.a.getTextDisplayer();return new _.It(b,c,a,d)},Zx=function(a){var b={Ya:function(){return a.a.getPosition()},N:a.f,Pb:a.a.getNetworkEngine(),ee:a.vh.bind(a),de:a.uh.bind(a),onError:a.wh.bind(a),xf:function(){},onEvent:function(){},Cf:a.xh.bind(a),kd:function(){},Od:function(){return new _.Eu}};return new _.sv(a.h,b)},$x=function(a){var b=a.a.getPosition(),c=null;a=_.u(a.h.periods);for(var d=a.next();!d.done;d=a.next())d=d.value,d.startTime<=b&&(c=d);return c},Qx=function(a){a.b.info("getTextStreams()",
a.h);if(a.h){var b=[],c=a.h.periods;a.b.info("getting text streams");for(var d=0;d<c.length;d++)if(a.b.info(c[d].startTime,a.a.getPosition()),c[d].startTime<=a.a.getPosition()){b=c[d].textStreams;break}a=b}else a=[];b=[];for(d=c=0;d<a.length;d++){var e=new _.wi(String(c++),_.P);e.mimeType=a[d].mimeType;e.language=a[d].language;e.roles=a[d].roles;e.kind=a[d].kind||_.Id;var f=new _.xi(String(a[d].id),e);f.bandwidth=a[d].bandwidth||null;e.renditions.push(f);b.push(e)}return b},Ux=function(a){if(a.f&&
!a.f.getTextDisplayer().isTextVisible())return null;if(a.c){var b=_.vv(a.c,_.k),c=null;if(b){a=Qx(a);for(var d=0;d<a.length;d++)if(a[d].renditions[0].id===String(b.id)){c=a[d].renditions[0];break}}return c}return null},by=function(a,b){a.b.debug("Set active track",b);if(b&&(a.j=b.language,a.m=b.roles[0]||"",a.h&&a.c)){ay(a);var c=$x(a),d=b.renditions[0];(c=c.textStreams.find(function(e){return String(e.id)==d.id}))?(a.l?(a.b.debug("Switching period defer text selection"),a.g=c):(_.Dv(a.c,c,!0,0),
a.a.trigger(new _.O(_.Pi))),a.j=c.language):a.b.error(_.as,d.id)}},ay=function(a){a.b.debug("Set text visibility",!0);a.f&&a.f.getTextDisplayer().setTextVisibility(!0)},dy=function(){_.Wi.call(this);this.a=new lx(this);this.c=new cy(this);this.configuration=this.l=_.Ij();this.i=null;this.b=new _.H("clpp.tizen.Player");this.h=null;this.g=new Ix;this.m=new _.Fj;this.j=this.f=null},ey=function(a){if("NONE"!==a.a.getState()){var b=jx(a.i.c,[_.je,_.Ec]);a.b.debug("Got dimensions",b);var c=Math.min(1920,
parseInt(b.width,10)||0);b=Math.min(1080,parseInt(b.height,10)||0);a.b.debug("Applying dimensions: ",c,b);a=c;c=b;var d=b=0;b=void 0===b?0:b;d=void 0===d?0:d;a=void 0===a?1920:a;c=void 0===c?1080:c;var e=webapis.avplay;e.setDisplayRect(b,d,a,c);0===b&&0===d&&1920===a&&1080===c&&e.setDisplayMethod("PLAYER_DISPLAY_MODE_LETTER_BOX")}else a.b.debug("Could not apply dimension. Player state "+a.a.getState())},gy=function(){this.name=fy},cy=function(a){this.f=a;this.a=this.f.a;this.b=_.yn;this.g=_.zn;this.j=
(new Date).getTime();this.i=-1;this.h=2;this.c=new _.H("clpp.tizen.StateManager")},iy=function(a,b){if(a.b!==b)if(a.b===_.dl&&b!==_.yn)a.c.debug(_.ds+hy(b));else{var c=(new Date).getTime();a.g=a.b;a.b=b;a.b===_.Cn?(a.i=(new Date).getTime(),a.f.trigger(new _.O(_.Wb,{detail:{bufferedTimeMS:-1,reason:a.h}}))):a.g===_.Cn&&a.f.trigger(new _.O(_.Vb,{detail:{bufferedTimeMS:c-a.i,reason:a.h}}));var d={currentState:a.b,previousState:a.g,timeSinceLastStateChangeMS:c-a.j};a.j=c;a.f.trigger(new _.O(_.Dd,{detail:d}));
a.c.debug("State changed:",hy(a.g),"-\x3e",hy(a.b))}},hy=function(a){return Object.keys(_.Gn)[a]},ky=function(a){var b=a.a.getState(),c=a.b;switch(b){case jy:c=_.ln;break;case Fx:c=_.Kn;break;default:a.f.isEnded()?c=_.En:a.c.debug("Inconsistent AVPlay plackback state:",b)}iy(a,c)},ly=function(){this.a=null};_.w(lx,_.Wi);_.r=lx.prototype;_.r.ph=function(){this.c||this.trigger(new _.O(zx))};_.r.oh=function(a){this.trigger(new _.O(my,{percent:a}))};_.r.nh=function(){this.trigger(new _.O(ny))};
_.r.sh=function(){this.trigger(new _.O(oy))};_.r.rh=function(a,b){this.trigger(new _.O(py,{eventid:a,data:b}))};_.r.th=function(a,b,c,d,e){this.trigger(new _.O(qy,{duration:a,text:b,subtitleType:c,attriCount:d,attributes:e}))};_.r.qh=function(a,b){this.trigger(new _.O(ry,{drmType:a,drmData:b}))};_.r.dc=function(a){this.trigger(new _.O(Dx,{eventType:a}))};
_.r.play=function(){function a(){return new Promise(function(d,e){function f(){d();clearTimeout(g)}var g=null;b.one(nx,f,b);g=setTimeout(function(){b.off(nx,f);e("Timeout")},3E4)})}var b=this,c=this.getState();if(c===sy)return(new Promise(function(d,e){webapis.avplay.prepareAsync(function(){qx(b);d(webapis.avplay.play())},function(f){b.trigger(new _.O(Dx));e(f)})})).then(function(){return a()});if(c===Fx||c===ty)try{return webapis.avplay.play(),a()}catch(d){return Promise.reject(d)}return c===jy?
Promise.resolve():Promise.reject("Player is in invalid state")};_.r.pause=function(){try{webapis.avplay.pause()}catch(a){Promise.reject(a)}return this.getState()===Fx?Promise.resolve():Promise.reject()};
_.r.setPlaybackRate=function(a){var b=this.getState();if(b===ty||b===jy||b===Fx){try{webapis.avplay.setSpeed(a),this.j=a}catch(c){return this.a.debug("Error while trying to set playback rate",c),this.setPlaybackRate(this.j)}return!0}this.a.debug("Cannot set playback rate; AVPlay is in inconsistent state: "+b);return!1};_.r.getPlaybackRate=function(){return this.j};
_.r.load=function(a,b){var c=this;return _.A(function(d){return 1==d.a?(c.a.debug("configure()",b||""),_.x(d,yx(c),2)):_.x(d,Ex(c,a,b),0)})};_.r.getState=function(){if(this.c&&this.b)return this.b.ze;try{return webapis.avplay.getState()}catch(a){this.dc(JSON.stringify(a))}};_.r.seek=function(a){var b=this,c=1E3*a;return new Promise(function(d,e){b.i=!0;b.f.trigger(new _.O(_.Td));webapis.avplay.seekTo(c,function(){b.i=!1;b.f.trigger(new _.O(_.Sd));d()},function(){b.i=!1;e()})})};
_.r.getPosition=function(){if(this.c&&this.b)return this.b.position;try{return webapis.avplay.getCurrentTime()/1E3}catch(a){this.dc(JSON.stringify(a))}};_.r.getDuration=function(){if(this.c&&this.b)return this.b.duration;try{return webapis.avplay.getDuration()/1E3}catch(a){this.dc(JSON.stringify(a))}};_.r.release=function(){var a=this;return new Promise(function(b,c){try{return webapis.avplay.stop(),webapis.avplay.close(),a.j=1,a.i=!1,a.h=null,a.b=null,b()}catch(d){return c(d)}})};
_.r.getVolume=function(){var a=null;try{a=tizen.tvaudiocontrol.getVolume()}catch(b){switch(b.name){case gx:this.a.debug("The application does not have the privilege to get the volume.",hx);break;default:this.a.debug(ex,b)}}return a};
_.r.setVolume=function(a){try{tizen.tvaudiocontrol.setVolume(Math.max(0,Math.min(100*a,100)))}catch(b){switch(b.name){case "InvalidValueError":this.a.warn("Invalid value passed for setVolume.","The passed value value should be in the range of 0 to 1.");break;case gx:this.a.warn("The application does not have the privilege to set the volume.",hx);break;default:this.a.warn("An unknown error occured while trying to set volume",b)}}};
_.r.isLive=function(){if(this.c&&this.b)return this.b.isLive;try{return"1"===webapis.avplay.getStreamingProperty("IS_LIVE")}catch(a){this.dc(JSON.stringify(a))}};_.r.stop=function(){try{webapis.avplay.stop()}catch(a){this.a.debug(a)}};_.r.setSourceIndex=function(a){this.m=a};_.r.getSourceIndex=function(){return this.m};_.r.getLoadedSource=function(){return this.h&&this.h[this.getSourceIndex()]};var sy="IDLE",ty="READY",jy="PLAYING",Fx="PAUSED";_.w(Ix,_.S);_.r=Ix.prototype;_.r.vf=function(a){var b=a.eventid;a=a.data;switch(b){case "PLAYER_MSG_BITRATE_CHANGE":0<Object.keys(this.g).length||(this.b.debug("Loading track manager!"),this.load());b=+Px(this,webapis.avplay.getCurrentStreamInfo()[0].extra_info).Bit_rate;if(b=Tx(this,{bandwidth:b}))this.l=b,Jx(this,b);break;case "PLAYER_MSG_RESOLUTION_CHANGED":Kx(this);break;default:this.b.debug("Event type: "+b+" data: "+a)}};_.r.ge=function(a){a.detail.currentState===_.ln&&this.c.off(_.Dd,this.ge)};
_.r.mb=function(a){this.c=a;this.a=this.c.a;this.a.on(py,this.vf,this)};_.r.release=function(){this.g={};this.f=this.l=this.i=this.h=null;this.j=1};_.r.load=function(){if(this.a&&!(0<Object.keys(this.g).length)){this.f=this.c.f;this.c.off(_.Dd,this.ge);this.c.on(_.Dd,this.ge,this);var a=ux(this.a);this.g=Sx(this,a);if(a=this.g[_.Q])this.h=a[0].renditions[0]||null;Kx(this)}};_.r.destroy=function(){this.a.off(py,this.vf);this.a=this.c=null};_.r.getVideoTracks=function(){return this.g[_.zi]||[]};
_.r.getAudioTracks=function(){return this.g[_.Q]||[]};_.r.Y=function(){return this.g[_.P]||[]};_.r.Z=function(){return Vx(this,_.zi)};_.r.sa=function(){return Vx(this,_.Q)};_.r.ja=function(){return Vx(this,_.P)};_.r.za=function(){return this.l};_.r.Ha=function(){this.b.info(fx);return null};_.r.Ia=function(){this.b.info(fx);return null};_.r.ka=function(){var a=this.Z();return a?a.track:null};_.r.fa=function(){var a=this.sa();return a?a.track:null};
_.r.ca=function(){var a=this.ja();return a?a.track:null};_.r.Fa=function(a){var b=this;null===a?(a=this.Z(),Gx(this.a,a.bandwidth,null).then(function(){Kx(b)})):0<a.renditions.length&&this.Ea(a.renditions[0])};_.r.na=function(a){a?Lx(this,a.renditions[0]):this.b.warn("Cannot disable audio tracks on this platform.","Consider muting audio instead...")};_.r.oa=function(a){a?(a=a.renditions[0],this.f?by(this.f,a.track):Lx(this,a)):(this.b.debug("Disabling text tracks"),this.i=null,Hx(this.a,!1),this.c.trigger(new _.O(_.Pi)))};
_.r.Ea=function(a){var b=this,c=this.Z();this.a.g||a.width!==c.width||a.height!==c.height||a.bandwidth!==c.bandwidth?(this.l=a,Jx(this,a),Gx(this.a,c.bandwidth,a.bandwidth).then(function(){Kx(b)})["catch"](function(d){var e=new _.J(_.K,7,7200,{tizenerror:d});b.b.debug("Error while switching video track",d);b.c.onError(e)})):this.b.debug("Trying to switch to already active rendition. Doing nothing...")};_.r.La=function(a){Lx(this,a)};_.r.Ma=function(a){this.f?by(this.f,a.track):Lx(this,a)};
_.r.addTextTrack=function(){};_.r.la=function(){return this.a.g};Ix.prototype.isAbrEnabled=Ix.prototype.la;Ix.prototype.addTextTrack=Ix.prototype.addTextTrack;Ix.prototype.setTextRendition=Ix.prototype.Ma;Ix.prototype.setAudioRendition=Ix.prototype.La;Ix.prototype.setVideoRendition=Ix.prototype.Ea;Ix.prototype.setTextTrack=Ix.prototype.oa;Ix.prototype.setAudioTrack=Ix.prototype.na;Ix.prototype.setVideoTrack=Ix.prototype.Fa;Ix.prototype.getTextTrack=Ix.prototype.ca;Ix.prototype.getAudioTrack=Ix.prototype.fa;
Ix.prototype.getVideoTrack=Ix.prototype.ka;Ix.prototype.getLoadingTextRendition=Ix.prototype.Ia;Ix.prototype.getLoadingAudioRendition=Ix.prototype.Ha;Ix.prototype.getLoadingVideoRendition=Ix.prototype.za;Ix.prototype.getTextRendition=Ix.prototype.ja;Ix.prototype.getAudioRendition=Ix.prototype.sa;Ix.prototype.getVideoRendition=Ix.prototype.Z;Ix.prototype.getTextTracks=Ix.prototype.Y;Ix.prototype.getAudioTracks=Ix.prototype.getAudioTracks;Ix.prototype.getVideoTracks=Ix.prototype.getVideoTracks;var zx="onbufferingstart",my="onbufferingprogress",ny="onbufferingcomplete",oy="onstreamcompleted",nx="oncurrentplaytime",py="onevent",qy="onsubtitlechange",ry="ondrmevent",Dx="onerror",Ax="preparingstart",Bx="preparingend";_.r=Wx.prototype;
_.r.load=function(a){var b=this,c,d,e,f,g,h;return _.A(function(l){switch(l.a){case 1:if(!b.a)return l["return"]();b.o=a;c=b;return _.x(l,Xx(b),2);case 2:return c.i=l.b,d={networkingEngine:b.a.getNetworkEngine(),filterNewPeriod:function(){},filterAllPeriods:function(){},onTimelineCueAdded:function(){},onEvent:function(){},onError:function(){}},_.Ce(l,3),e=b,_.x(l,b.i.start(a.url,d),5);case 5:e.h=l.b;_.De(l,4);break;case 3:return f=_.Ee(l),b.b.error(f),g=b,_.x(l,b.i.start(a.url.replace("https://","http://"),
d),6);case 6:g.h=l.b;case 4:return b.f=Yx(b),_.x(l,b.f.w,7);case 7:b.c=Zx(b),h=b.a.getConfiguration(),b.c.h=h.streaming,b.j=h.preferredTextLanguage,b.m=h.preferredTextRole,_.y(l)}})};_.r.vh=function(a){this.b.debug(_.ls,a);this.l=!0;var b=_.fu(a.textStreams,this.j||"",this.m||"")[0]||null;this.g&&(a.textStreams.includes(this.g)&&(b=this.g),this.g=null);return{variant:null,text:b}};_.r.uh=function(){this.b.debug("canSwitch_");this.l=!1;this.g&&(_.Dv(this.c,this.g,!0,0),this.g=null)};_.r.wh=function(){this.b.debug("onError_")};
_.r.xh=function(){this.i&&this.i.update&&this.i.update()};_.r.start=function(){var a=this;return _.A(function(b){try{a.c.start()}catch(c){a.b.error("Error while starting streaming engine",c)}_.y(b)})};_.r.release=function(){var a=this;return _.A(function(b){a.a=null;a.h=null;a.o=null;a.m=null;a.j=null;a.l=!0;a.g=null;_.y(b)})};
_.r.destroy=function(){var a=this;return _.A(function(b){switch(b.a){case 1:if(!a.i){b.C(2);break}return _.x(b,a.i.stop(),3);case 3:a.i=null;case 2:if(!a.c){b.C(4);break}return _.x(b,a.c.destroy(),5);case 5:a.c=null,a.l=!0;case 4:if(!a.f){b.C(0);break}return _.x(b,a.f.destroy(),7);case 7:a.f=null,_.y(b)}})};_.w(dy,_.Wi);_.r=dy.prototype;_.r.Oe=function(){var a=this;this.b.debug("On Stream completed. Current time: ",this.getPosition());this.trigger(new _.O(_.zc));this.configuration.loop?this.seek(this.configuration.startTime||0)["catch"](function(){a.b.debug("Could not loop playback")}):this.a.stop()};_.r.Le=function(a){this.trigger(new _.O(_.Nd,{currentTime:a.currentTime/1E3}))};
_.r.Pe=function(a){var b=/&lt;.?br&gt;/g,c=this.a.getPosition(),d=c+a.duration/1E3;a=a.text||"";this.b.debug("Got subtitles: ",a);a&&(b=new _.eg(c,d,a.replace(b,"")),this.j.append([b]))};_.r.Me=function(a){this.b.debug("DRM event: "+a.drmType+", data: "+a.drmData)};_.r.Ne=function(a){this.b.debug("Error: TYPE: "+a.eventType);iy(this.c,_.dl);a=new _.J(_.K,7,7200,{tizenerror:a.eventType});this.a.release();this.trigger(new _.O(_.Ac,{detail:a}))};
_.r.init=function(a,b){this.configuration=this.l=b;this.i=a;this.a.on(oy,this.Oe,this);this.a.on(nx,this.Le,this);this.a.on(qy,this.Pe,this);this.a.on(ry,this.Me,this);this.a.on(Dx,this.Ne,this);var c=this.c;c.a.on(zx,c.Se,c);c.a.on(my,c.Re,c);c.a.on(ny,c.Qe,c);c.a.on(Ax,c.Ff,c);c.a.on(Bx,c.Ef,c);c.a.on(oy,c.Te,c);c.a.on(nx,c.Ue,c);this.g.mb(this);this.b.debug("Initializing player surface");_.rl(this.i);this.h=_.wf(_.$c,{id:"TizenPlayer",type:"application/avplayer"});this.i.uc(this.h,!0);var d=this.i.H();
d&&(c=this.h,d=jx(d,[_.je,_.Ec,"position"]),_.Af(c,d),ey(this))};_.r.getSurface=function(){return this.i};_.r.getConfiguration=function(){return this.configuration};
_.r.destroy=function(){var a=this;return _.A(function(b){switch(b.a){case 1:return _.x(b,a.release(),2);case 2:a.a.off(oy,a.Oe);a.a.off(nx,a.Le);a.a.off(qy,a.Pe);a.a.off(ry,a.Me);a.a.off(Dx,a.Ne);if(!a.f){b.C(3);break}return _.x(b,a.f.destroy(),4);case 4:a.f=null;case 3:a.h&&(a.h.parentElement.removeChild(a.h),a.h=null),a.g.destroy(),a.c.destroy(),a.g=null,a.c=null,_.y(b)}})};_.r.namespace=function(){return fy};_.r.getPlaybackRate=function(){return this.a.getPlaybackRate()};_.r.setPlaybackRate=function(a){this.a.setPlaybackRate(a)};
_.r.getPosition=function(){return this.c.getState()===_.En?this.getDuration():this.a.getPosition()||0};_.r.seek=function(a){return typeof a===_.Zc&&0<=a?(this.isLive()||(a=Math.min(a,this.getDuration())),this.a.seek(a)):Promise.reject()};_.r.getPresentationStartTime=function(){return 0};_.r.getSeekRange=function(){return{start:0,end:0}};_.r.getVolume=function(){var a=this.a.getVolume();return typeof a===_.Zc?a/100:null};_.r.setVolume=function(a){this.a.setVolume(a)};_.r.getDuration=function(){return this.a.getDuration()};
_.r.getBufferInfo=function(){this.b.warn(_.ja);return new _.Vi};_.r.getTrackManager=function(){return this.g};_.r.unload=function(){var a=this;return this.a.release().then(function(){a.g.release()})};_.r.release=function(){var a=this;return _.A(function(b){switch(b.a){case 1:if(!a.f){b.C(2);break}return _.x(b,a.f.release(),2);case 2:if(!a.j){b.C(4);break}return _.x(b,a.j.destroy(),5);case 5:a.j=null;case 4:return _.x(b,a.a.release(),6);case 6:a.g.release(),a.c.release(),_.y(b)}})};
_.r.load=function(a){var b=this,c,d,e,f;return _.A(function(g){switch(g.a){case 1:_.Mj(a)&&(b.configuration=_.Lj(b.l,a));c=_.Sf(b.configuration,["html",_.Yc]);b.j=c.create(b);d=_.yl(b.configuration)[0];e=!!b.configuration.tizen&&b.configuration.tizen.sideStreamText;if(!e){g.C(2);break}b.f=new Wx;b.f.a=b;_.Ce(g,3);return _.x(g,b.f.load(d),5);case 5:_.De(g,4);break;case 3:f=_.Ee(g),b.b.error(f);case 4:b.f.start();case 2:return _.x(g,b.a.load(b.configuration),6);case 6:b.g.load(),_.y(g)}})};
_.r.play=function(){var a=this;this.trigger(new _.O(_.jd));ey(this);return this.a.play().then(function(){ky(a.c)})};_.r.pause=function(){var a=this;return this.a.pause().then(function(){ky(a.c)})};_.r.getState=function(){return this.c.getState()};_.r.getThumbnailStreams=function(){return[]};_.r.onError=function(a){var b=new _.O(_.Ac,{detail:a});a.a===_.K&&iy(this.c,_.dl);this.trigger(b)};_.r.getDrmInfo=function(){return null};_.r.isEnded=function(){return this.c.getState()===_.En};
_.r.isPaused=function(){return this.a.getState()===Fx};_.r.isMuted=function(){return tx(this.a)};_.r.setMuted=function(a){Cx(this.a,a)};_.r.getNetworkEngine=function(){return this.m};_.r.setNetworkEngine=function(a){this.m=a};_.r.isLive=function(){return this.a.isLive()};_.r.getStats=function(){return null};_.r.setSourceIndex=function(a){this.a.setSourceIndex(a)};_.r.getSourceIndex=function(){return this.a.getSourceIndex()};_.r.getLoadedSource=function(){return this.a.getLoadedSource()};
_.r.canPlay=function(a){return(new gy).canPlay(a)};_.r.getTimelineCues=function(){return[]};_.r.getTextDisplayer=function(){return this.j};_.r.resetAbr=function(){};dy.prototype.getTextDisplayer=dy.prototype.getTextDisplayer;dy.prototype.setNetworkEngine=dy.prototype.setNetworkEngine;dy.prototype.getNetworkEngine=dy.prototype.getNetworkEngine;var fy="clpp.tizen";gy.prototype.canPlay=function(a){a=a.type;a=a===_.tl||a===_.ul||a===_.vl;var b=window.hasOwnProperty("webapis");return _.Eh()&&a&&b};
gy.prototype.create=function(){return new dy};gy.prototype.create=gy.prototype.create;gy.prototype.canPlay=gy.prototype.canPlay;_.r=cy.prototype;_.r.release=function(){iy(this,_.yn)};_.r.destroy=function(){this.release();this.a.off(zx,this.Se);this.a.off(my,this.Re);this.a.off(ny,this.Qe);this.a.off(Ax,this.Ff);this.a.off(Bx,this.Ef);this.a.off(oy,this.Te);this.a.off(nx,this.Ue);this.f=this.a=null};_.r.Se=function(){this.c.debug("Buffering start. Player state: ",this.a.getState());this.h=this.a.i?1:2;iy(this,_.Cn)};_.r.Re=function(a){this.c.debug("Buffering progress: "+a.percent+" %. Player state: ",hy(this.b))};
_.r.Qe=function(){this.c.debug("Buffering complete. Player state: ",this.a.getState());var a;if(a=this.b!==_.Jn)a=this.a.getState(),a=a===jy||a===Fx;a&&ky(this)};_.r.Ff=function(){this.c.debug("Preparing starts. AVPlay State: ",this.a.getState());this.a.getState()===sy?iy(this,_.Jn):this.c.error("AVPlay prepares while state is not IDLE")};_.r.Ef=function(){this.c.debug("Preparing ends: AVPlay state:",this.a.getState())};
_.r.Ue=function(){this.b===_.ln||this.b!==_.Kn&&this.b!==_.En&&this.b!==_.Cn||iy(this,_.ln)};_.r.Te=function(){iy(this,_.En)};_.r.getState=function(){return this.b};_.w(ly,_.nl);ly.prototype.rb=function(){this.a=new gy;_.ei(this.a)};ly.prototype.ib=function(){if(this.a){var a=this.a.name;a&&_.ci[a]&&(delete _.ci[a],_.di.info("Removed Player factory: '"+a+"'"));this.a=null}};ly.prototype.id=function(){return"clpp.component.tizen"};_.B("clpp.tizen.TizenComponent",ly);};f.call(g, window);