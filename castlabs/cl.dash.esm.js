import {clpp} from "./cl.core.esm.js";let g={};var _ = clpp._;var f=function(window){/*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var tA="Channel parsing failure! Ignoring scheme and value",uA="ContentProtection",vA="EssentialProperty",wA="SegmentBase does not contain sufficient segment information:",xA="SegmentList does not contain sufficient segment information:",yA="SegmentTemplate does not contain sufficient segment information:",zA="SegmentTimeline",AA='The last "S" element cannot have a negative repeat',BA="duration",CA='ignoring the remaining "S" elements.',DA="presentationTimeOffset",EA="schemeIdUri",FA="static",GA=
"timescale",HA="urn:microsoft:playready",IA="urn:mpeg:cenc:2013",JA="urn:mpeg:dash:utc:http-head:2014",KA="urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95",LA="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",MA=function(a){return new _.fl(Promise.reject(a),function(){return Promise.resolve()})},NA=function(a){return new _.fl(Promise.all(a.map(function(b){return b.promise})),function(){return Promise.all(a.map(function(b){return b.abort()}))})},PA=function(a,b){return a.find(function(c){return OA.get(c.xb)===
b})},QA=function(a){var b=_.M.dd(a.node,HA,"pro");if(!b)return _.G("Missing \x3cms:pro/\x3e node in ContentProtection element",a),null;a=_.Wj(b.textContent);a=_.sm(a);a=_.om(a.a);return{keyId:null,xb:LA,node:document.createElement("null"),init:[{initData:_.lm(a),initDataType:_.ac,keyId:null}]}},RA=function(a){var b=_.M.dd(a.node,IA,"pssh");if(!b)return _.G("Missing \x3ccenc:pssh/\x3e node in ContentProtection element",a),null;a=_.Wj(b.textContent);a=new _.$g(new DataView(a.buffer),!1);a.skip(12);
a.skip(16);a.skip(4);b=_.ch(a);_.ih(a);8===b&&a.skip(2);_.ch(a);b=_.ch(a);for(var c=new Uint8Array(b),d=0;d<b;d++)c[d]=_.ch(a);a=_.Yj(c);a=_.om(a).a;b=_.Xj(a);b=_.qm(b);c=_.pf(b);b=_.ef(_.rf('\x3cWRMHEADER xmlns\x3d"http://schemas.microsoft.com/DRM/2007/03/PlayReadyHeader" version\x3d"4.0.0.0"\x3e\x3cDATA\x3e\x3cPROTECTINFO\x3e\x3cKEYLEN\x3e'+(b.byteLength+"\x3c/KEYLEN\x3e\x3cALGID\x3eAESCTR\x3c/ALGID\x3e\x3c/PROTECTINFO\x3e\x3cKID\x3e")+(c+"\x3c/KID\x3e\x3c/DATA\x3e\x3c/WRMHEADER\x3e"),!0));a=new _.pm(_.rm,
a,null,b);return{keyId:null,xb:KA,node:document.createElement("null"),init:[{initData:_.lm(a),initDataType:_.ac,keyId:null}]}},UA=function(a,b){var c=SA(a),d=null,e=[],f=[],g=PA(c,_.mc),h=PA(c,_.lc);if(h&&!g){var l=QA(h);l&&c.push(l)}g&&!h&&(g=RA(g))&&c.push(g);g=new Set(c.map(function(m){return m.keyId}));g["delete"](null);if(1<g.size)throw new _.J(_.K,4,4010);b||(f=c.filter(function(m){return"urn:mpeg:dash:mp4protection:2011"==m.xb?(d=m.init||d,!1):!0}),f.length&&(e=TA(d,f),0==e.length&&(e=[_.Nk("",
d)])));if(c.length&&(b||!f.length))for(e=[],c=_.u(OA.values()),f=c.next();!f.done;f=c.next())f=f.value,f!=_.cd&&e.push(_.Nk(f,d));if(c=Array.from(g)[0]||null)for(f=_.u(e),g=f.next();!g.done;g=f.next())for(g=_.u(g.value.initData),h=g.next();!h.done;h=g.next())h.value.keyId=c;return{We:c,Vj:d,drmInfos:e,cf:!0}},VA=function(a,b,c){var d=UA(a,c);if(b.cf){a=1==b.drmInfos.length&&!b.drmInfos[0].keySystem;c=0==d.drmInfos.length;if(0==b.drmInfos.length||a&&!c)b.drmInfos=d.drmInfos;b.cf=!1}else if(0<d.drmInfos.length&&
(b.drmInfos=b.drmInfos.filter(function(e){return d.drmInfos.some(function(f){return f.keySystem==e.keySystem})}),0==b.drmInfos.length))throw new _.J(_.K,4,4008);return d.We||b.We},TA=function(a,b){for(var c=[],d=_.u(b),e=d.next();!e.done;e=d.next()){e=e.value;var f=OA.get(e.xb);if(f){var g=_.Nk(f,e.init||a);if(f=WA.get(f))g.licenseServerUri=f(e);c.push(g)}}return c},SA=function(a){var b=[];a=_.u(a);for(var c=a.next();!c.done;c=a.next())(c=XA(c.value))&&b.push(c);return b},XA=function(a){var b=a.getAttribute(EA),
c=_.M.getAttributeNS(a,IA,"default_KID"),d=_.M.bf(a,IA,"pssh").map(_.M.Fb);if(!b)return _.cf("Missing required schemeIdUri attribute on","ContentProtection element",a),null;b=b.toLowerCase();if(c&&(c=c.replace(/-/g,"").toLowerCase(),c.includes(" ")))throw new _.J(_.K,4,4009);var e=[];try{e=d.map(function(f){return{initDataType:_.ac,initData:_.Wj(f),keyId:null}})}catch(f){throw new _.J(_.K,4,4007);}return{node:a,xb:b,keyId:c,init:0<e.length?e:null}},ZA=function(a,b,c,d){var e,f=(new _.jh).X("sidx",
function(g){e=YA(b,d,c,g)});a&&f.parse(a);if(e)return e;_.cf('Invalid box type, expected "sidx".');throw new _.J(_.K,3,3004);},YA=function(a,b,c,d){var e=[];d.v.skip(4);var f=_.eh(d.v);if(0==f)throw _.cf("Invalid timescale."),new _.J(_.K,3,3005);if(0==d.version){var g=_.eh(d.v);var h=_.eh(d.v)}else g=_.gh(d.v),h=_.gh(d.v);d.v.skip(2);var l=_.dh(d.v);a=a+d.size+h;for(h=0;h<l;h++){var m=_.eh(d.v),n=(m&2147483648)>>>31;m&=2147483647;var p=_.eh(d.v);d.v.skip(4);if(1==n)throw _.cf("Heirarchical SIDXs are not supported."),
new _.J(_.K,3,3006);e.push(new _.Nn(e.length,g/f-b,(g+p)/f-b,function(){return c},a,a+m-1));g+=p;a+=m}d.hb.stop();return e},$A=function(a){this.b=a;this.a=new _.$g(a,!1)},dB=function(a){var b=aB(a);if(7<b.length)throw new _.J(_.K,3,3002);for(var c=0,d=0;d<b.length;d++)c=256*c+b[d];b=c;c=aB(a);a:{d=_.u(bB);for(var e=d.next();!e.done;e=d.next())if(_.Zj(c,new Uint8Array(e.value))){d=!0;break a}d=!1}if(d)c=a.b.byteLength-a.a.getPosition();else{if(8==c.length&&c[1]&224)throw new _.J(_.K,3,3001);d=c[0]&
(1<<8-c.length)-1;for(e=1;e<c.length;e++)d=256*d+c[e];c=d}c=a.a.getPosition()+c<=a.b.byteLength?c:a.b.byteLength-a.a.getPosition();d=new DataView(a.b.buffer,a.b.byteOffset+a.a.getPosition(),c);a.a.skip(c);return new cB(b,d)},aB=function(a){var b=_.ch(a.a),c;for(c=1;8>=c&&!(b&1<<8-c);c++);if(8<c)throw new _.J(_.K,3,3002);var d=new Uint8Array(c);d[0]=b;for(b=1;b<c;b++)d[b]=_.ch(a.a);return d},cB=function(a,b){this.id=a;this.a=b},eB=function(a){if(8<a.a.byteLength)throw new _.J(_.K,3,3002);if(8==a.a.byteLength&&
a.a.getUint8(0)&224)throw new _.J(_.K,3,3001);for(var b=0,c=0;c<a.a.byteLength;c++){var d=a.a.getUint8(c);b=256*b+d}return b},fB=function(){},hB=function(a,b,c,d,e,f){function g(){return e}var h=[];a=new $A(a.a);for(var l=null,m=null;_.ah(a.a);){var n=dB(a);if(187==n.id){var p=gB(n);p&&(n=c*p.Dj,p=b+p.oj,null!=l&&h.push(new _.Nn(h.length,l-f,n-f,g,m,p-1)),l=n,m=p)}}null!=l&&h.push(new _.Nn(h.length,l-f,d-f,g,m,null));return h},gB=function(a){var b=new $A(a.a);a=dB(b);if(179!=a.id)throw _.G("Not a CueTime element."),
new _.J(_.K,3,3013);a=eB(a);b=dB(b);if(183!=b.id)throw _.G("Not a CueTrackPositions element."),new _.J(_.K,3,3012);b=new $A(b.a);for(var c=0;_.ah(b.a);){var d=dB(b);if(241==d.id){c=eB(d);break}}return{Dj:a,oj:c}},jB=function(a,b){var c=iB.Vd(a,b,"Initialization");if(!c)return null;var d=a.F.wa,e=c.getAttribute("sourceURL");e&&(d=_.Mk(a.F.wa,[e]));e=0;var f=null;if(c=_.M.P(c,"range",_.M.nd))e=c.start,f=c.end;return new _.Mn(function(){return d},e,f)},mB=function(a,b){var c=Number(iB.Ca(a,kB,DA))||
0,d=iB.Ca(a,kB,GA),e=1;d&&(e=_.M.md(d)||1);c=c/e||0;d=jB(a,kB);e=a.F.mimeType.split("/")[1];if(a.F.contentType!=_.k&&e!=_.Wc&&e!=_.ie)throw _.cf("SegmentBase specifies an unsupported container type.",a.F),new _.J(_.K,4,4006);if(e==_.ie&&!d)throw _.cf(wA,"the SegmentBase uses a WebM container,","but does not contain an Initialization element.",a.F),new _.J(_.K,4,4005);var f=iB.Vd(a,kB,"RepresentationIndex"),g=iB.Ca(a,kB,"indexRange"),h=a.F.wa;g=_.M.nd(g||"");if(f){var l=f.getAttribute("sourceURL");
l&&(h=_.Mk(a.F.wa,[l]));g=_.M.P(f,"range",_.M.nd,g)}if(!g)throw _.cf(wA,"the SegmentBase does not contain @indexRange","or a RepresentationIndex element.",a.F),new _.J(_.K,4,4002);e=lB(a,b,d,h,g.start,g.end,e,c);return{createSegmentIndex:e.createSegmentIndex,findSegmentPosition:e.findSegmentPosition,getSegmentReference:e.getSegmentReference,adjustSegmentDurations:e.adjustSegmentDurations,getDuration:e.getDuration,initSegmentReference:d,ta:c}},lB=function(a,b,c,d,e,f,g,h){var l=a.presentationTimeline,
m=!a.hc||!a.U.Xd,n=a.U.start,p=a.U.duration,q=b,t=null;return{createSegmentIndex:function(){var v,z,F,E,D,L;return _.A(function(R){if(1==R.a)return v=[q(d,e,f),g==_.ie?q(c.Ba(),c.ua,c.ha):null],q=null,_.x(R,Promise.all(v),2);z=R.b;F=z[0];E=z[1]||null;D=null;g==_.Wc?D=ZA(F,e,d,h):(L=new fB,D=L.parse(F,E,d,h));_.Qn(l,D,n);t=new _.Un(D);m&&_.Wn(t,p);return R["return"](z)})},findSegmentPosition:function(v){return t.find(v)},getSegmentReference:function(v){return t.get(v)},adjustSegmentDurations:function(v,
z){return t.bc(v,z)},getDuration:function(){return t.getDuration()}}},kB=function(a){return a.Jc},qB=function(a,b){var c=jB(a,nB);var d=oB(a);var e=iB.Jf(a,nB),f=e.Vb;0==f&&(_.G("SegmentList@startNumber must be \x3e 0"),f=1);var g=0;e.da?g=e.da*(f-1):e.timeline&&0<e.timeline.length&&(g=e.timeline[0].start);d={da:e.da,startTime:g,Vb:f,ta:e.ta,timeline:e.timeline,Ob:d};if(!d.da&&!d.timeline&&1<d.Ob.length)throw _.G(xA,"the SegmentList specifies multiple segments,","but does not specify a segment duration or timeline.",
a.F),new _.J(_.K,4,4002);if(!d.da&&!a.U.duration&&!d.timeline&&1==d.Ob.length)throw _.G(xA,"the SegmentList specifies one segment,","but does not specify a segment duration, period duration,","or timeline.",a.F),new _.J(_.K,4,4002);if(d.timeline&&0==d.timeline.length)throw _.G(xA,"the SegmentList has an empty timeline.",a.F),new _.J(_.K,4,4002);f=e=null;a.ma.id&&a.F.id&&(f=a.ma.id+","+a.F.id,e=b[f]);g=pB(a.U.duration,d.Vb,a.F.wa,d);e?(e.eb(g),f=_.Tn(a.presentationTimeline),_.Vn(e,f-a.U.start)):(_.Qn(a.presentationTimeline,
g,a.U.start),e=new _.Un(g),f&&a.hc&&(b[f]=e));a.hc&&a.U.Xd||_.Wn(e,a.U.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:e.find.bind(e),getSegmentReference:e.get.bind(e),adjustSegmentDurations:e.bc.bind(e),getDuration:e.getDuration.bind(e),initSegmentReference:c,ta:d.ta}},nB=function(a){return a.zb},pB=function(a,b,c,d){var e=d.Ob.length;d.timeline&&d.timeline.length!=d.Ob.length&&(e=Math.min(d.timeline.length,d.Ob.length),_.G("The number of items in the segment timeline and the number of segment",
"URLs do not match, truncating",d.Ob.length,"to",e));for(var f=[],g=d.startTime,h={},l=0;l<e;h={wd:h.wd},l++){var m=d.Ob[l];h.wd=_.Mk(c,[m.ni]);var n=void 0;n=null!=d.da?g+d.da:d.timeline?d.timeline[l].end:g+a;f.push(new _.Nn(l+b,g,n,function(p){return function(){return p.wd}}(h),m.start,m.end));g=n}return f},oB=function(a){return[a.F.zb,a.ba.zb,a.ma.zb].filter(_.Lk.bb).map(function(b){return _.M.M(b,"SegmentURL")}).reduce(function(b,c){return 0<b.length?b:c}).map(function(b){b.getAttribute("indexRange")&&
!a.Ud&&(a.Ud=!0,_.G("We do not support the SegmentURL@indexRange attribute on SegmentList.  We only use the SegmentList@duration attribute or SegmentTimeline, which must be accurate."));var c=b.getAttribute("media");b=_.M.P(b,"mediaRange",_.M.nd,{start:0,end:null});return{ni:c,start:b.start,end:b.end}})},vB=function(a,b,c,d){var e=rB(a);var f=iB.Jf(a,sB);var g=iB.Ca(a,sB,"media"),h=iB.Ca(a,sB,"index");f={da:f.da,timescale:f.timescale,Vb:f.Vb,ta:f.ta,te:f.te,timeline:f.timeline,$d:g,Bc:h,Bd:f.Bd};
g=f.Bc?1:0;g+=f.timeline?1:0;g+=f.da?1:0;if(0==g)throw _.cf("SegmentTemplate does not contain any segment information:","the SegmentTemplate must contain either an index URL template","a SegmentTimeline, or a segment duration.",a.F),new _.J(_.K,4,4002);1!=g&&(_.G("SegmentTemplate containes multiple segment information sources:","the SegmentTemplate should only contain an index URL template,","a SegmentTimeline or a segment duration.",a.F),f.Bc?(_.bf("Using the index URL template by default."),f.timeline=
null):_.bf("Using the SegmentTimeline by default."),f.da=null);if(!f.Bc&&!f.$d)throw _.cf(yA,"the SegmentTemplate's media URL template is missing.",a.F),new _.J(_.K,4,4002);if(f.Bc){c=a.F.mimeType.split("/")[1];if(c!=_.Wc&&c!=_.ie)throw _.cf("SegmentTemplate specifies an unsupported container type.",a.F),new _.J(_.K,4,4006);if(c==_.ie&&!e)throw _.cf(yA,"the SegmentTemplate uses a WebM container,","but does not contain an initialization URL template.",a.F),new _.J(_.K,4,4005);d=iB.cd(f.Bc,a.F.id,null,
a.bandwidth||null,null);d=_.Mk(a.F.wa,[d]);a=lB(a,b,e,d,0,null,c,f.ta)}else f.da?(d||(c=a.presentationTimeline,c.i=Math.max(c.i,f.Bd),c.l.debug("notifyAvailabilityTimeOffset: maxAvailabilityTimeOffset\x3d"+c.i),_.Rn(a.presentationTimeline,f.da),_.Pn(a.presentationTimeline,a.U.start)),a=tB(a,f)):(g=b=null,a.ma.id&&a.F.id&&(g=a.ma.id+","+a.F.id,b=c[g]),h=uB(a,f),d=!a.hc||!a.U.Xd,b?(d&&_.Wn(new _.Un(h),a.U.duration),b.eb(h),c=_.Tn(a.presentationTimeline),_.Vn(b,c-a.U.start)):(_.Qn(a.presentationTimeline,
h,a.U.start),b=new _.Un(h),g&&a.hc&&(c[g]=b)),d&&_.Wn(b,a.U.duration),a={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),adjustSegmentDurations:b.bc.bind(b),getDuration:b.getDuration.bind(b)});return{createSegmentIndex:a.createSegmentIndex,findSegmentPosition:a.findSegmentPosition,getSegmentReference:a.getSegmentReference,adjustSegmentDurations:a.adjustSegmentDurations,getDuration:a.getDuration,initSegmentReference:e,ta:f.ta}},
sB=function(a){return a.Tb},tB=function(a,b){var c=a.U.duration,d=b.da,e=b.Vb,f=b.timescale,g=b.$d,h=a.bandwidth||null,l=a.F.id,m=a.F.wa;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(n){return 0>n||c&&n>=c?null:Math.floor(n/d)},getSegmentReference:function(n){var p=n*d,q=p+d;c&&(q=Math.min(q,c));return 0>q||c&&p>=c?null:new _.Nn(n,p,q,function(){var t=iB.cd(g,l,n+e,h,p*f);return _.Mk(m,[t])},0,null)},adjustSegmentDurations:function(){},getDuration:function(){return c}}},
uB=function(a,b){for(var c=[],d=0;d<b.timeline.length;d++){var e=d+b.Vb;c.push(new _.Nn(e,b.timeline[d].start,b.timeline[d].end,function(f,g,h,l,m,n){f=iB.cd(f,g,m,h,n);return _.Mk(l,[f]).map(function(p){return p.toString()})}.bind(null,b.$d,a.F.id,a.bandwidth||null,a.F.wa,e,b.timeline[d].Cj+b.te),0,null))}return c},rB=function(a){var b=iB.Ca(a,sB,"initialization");if(!b)return null;var c=a.F.id,d=a.bandwidth||null,e=a.F.wa;return new _.Mn(function(){var f=iB.cd(b,c,null,d,null);return _.Mk(e,[f])},
0,null)},xB=function(){var a=this;this.b=this.c=null;this.g=[];this.f=null;this.o=[];this.h=1;this.u={};this.l=0;this.w=new _.hn(5);this.j=new _.Hf(function(){wB(a)});this.i=new _.Ej;this.a=new _.H("clpp.dash.DashParser");this.A=this.m=null},zB=function(a){var b,c,d,e,f,g,h;return _.A(function(l){if(1==l.a)return b=_.Gi(a.g,a.c.attemptParameters),b.type=1,c=a.b.networkingEngine,d=Date.now(),e=c.fetch(b),_.bn(a.i,e),_.x(l,e.promise,2);if(3!=l.a){f=l.b;if(!a.b)return l["return"](0);f.uri&&!a.g.includes(f.uri)&&
a.g.unshift(f.uri);return _.x(l,yB(a,f.data,f.uri),3)}g=Date.now();h=(g-d)/1E3;_.jn(a.w,1,h);return l["return"](h)})},yB=function(a,b,c){var d,e,f,g,h;return _.A(function(l){if(1==l.a){d=iB;e=_.M.Kf(b,"MPD");if(!e)throw new _.J(_.K,4,4001,c);f=a.c.xlinkFailGracefully;g=d.od(e,a.c.attemptParameters,f,c,a.b.networkingEngine);_.bn(a.i,g);return _.x(l,g.promise,2)}h=l.b;return l["return"](AB(a,h,c))})},AB=function(a,b,c){var d,e,f,g,h,l,m,n,p,q,t,v,z,F,E,D,L,R,oa,Da,Ua,Ka,Ob,xb;return _.A(function(La){if(1==
La.a){d=_.Lk;e=_.M;f=[c];g=e.M(b,"Location").map(e.Fb).filter(d.bb);0<g.length&&(h=_.Mk(f,g),f=a.g=h);l=e.M(b,"BaseURL").map(e.Fb);m=_.Mk(f,l);n=e.P(b,"minBufferTime",e.gb,0);a.l=e.P(b,"minimumUpdatePeriod",e.gb,-1);p=e.P(b,"availabilityStartTime",e.jj);q=e.P(b,"timeShiftBufferDepth",e.gb);t=e.P(b,"suggestedPresentationDelay",e.gb);v=e.P(b,"maxSegmentDuration",e.gb);z=b.getAttribute("type")||FA;"dynamic"===z&&(a.m=z,a.A=p);if(F=z===FA&&"dynamic"===a.m)a.a.info("MPD dynamic to static transition."),
z=a.m,p=a.A;a.f?E=a.f.presentationTimeline:(D=3*n,L=null!=t?t:D,E=new _.On(p,L,!!a.c.autoCorrectDrift));R={hc:z!=FA,Nb:F,presentationTimeline:E,ma:null,U:null,ba:null,F:null,bandwidth:0,Ud:!1};var Va=_.M.P(b,"mediaPresentationDuration",_.M.gb);for(var rb=[],Qb=0,hb=_.M.M(b,"Period"),kb=0;kb<hb.length;kb++){var Gb=hb[kb];Qb=_.M.P(Gb,_.Cd,_.M.gb,Qb);var xd=_.M.P(Gb,BA,_.M.gb),Wa=null;if(kb!=hb.length-1){var Ue=_.M.P(hb[kb+1],_.Cd,_.M.gb);null!=Ue&&(Wa=Ue-Qb)}else null!=Va&&(Wa=Va-Qb);Ue=_.Bo;Wa&&xd&&
Math.abs(Wa-xd)>Ue&&a.a.warn("There is a gap/overlap between Periods",Gb);null==Wa&&(Wa=xd);Gb=BB(a,R,m,{start:Qb,duration:Wa,node:Gb,Xd:null==Wa||kb==hb.length-1});rb.push(Gb);xd=R.ma.id;a.o.includes(xd)||(a.o.push(xd),a.f&&(a.b.filterNewPeriod(Gb),a.f.periods.push(Gb)));if(null==Wa){kb!=hb.length-1&&a.a.warn("Skipping Period",kb+1,"and any subsequent Periods:","Period",kb+1,"does not have a valid start time.",rb[kb+1]);Qb=null;break}Qb+=Wa}null==a.f&&a.b.filterAllPeriods(rb);null!=Va?(Qb!=Va&&a.a.warn("@mediaPresentationDuration does not match the total duration of ",
"all Periods."),Va={periods:rb,duration:Va,Xe:!1}):Va={periods:rb,duration:Qb,Xe:!0};oa=Va;Da=oa.duration;Ua=oa.periods;E.b=z==FA;if(F&&!E.Nb())a.b.onEvent(new _.O(_.Xc));E.m=F;z!=FA&&oa.Xe||E.Ab(Da||Infinity);(Ka=E.isLive())&&a.c.availabilityWindowOverride&&!isNaN(a.c.availabilityWindowOverride)&&(q=a.c.availabilityWindowOverride);null==q&&(q=Infinity);E.Sb=q;_.Rn(E,v||1);if(a.f)return La.C(0);a.f={presentationTimeline:E,periods:Ua,offlineSessionIds:[],minBufferTime:n||0};if(null==E.h||null!=E.c)return La.C(0);
Ob=e.M(b,"UTCTiming");return _.x(La,CB(a,m,Ob),4)}xb=La.b;if(!a.b)return La["return"]();E.j=xb;_.y(La)})},BB=function(a,b,c,d){b.ma=DB(a,d.node,null,c);b.U=d;b.ma.id||(a.a.info("No Period ID given for Period with start time "+d.start+",  Assigning a default"),b.ma.id="__clpp_period_"+d.start);c=_.M.M(d.node,"EventStream");c=_.u(c);for(var e=c.next();!e.done;e=c.next())EB(a,d.start,d.duration,e.value);e=_.M.M(d.node,_.fa).map(function(n){return FB(a,b,n)}).filter(_.Lk.bb);if(b.hc){c=[];for(var f=_.u(e),
g=f.next();!g.done;g=f.next()){g=_.u(g.value.sj);for(var h=g.next();!h.done;h=g.next())c.push(h.value)}if(c.length!=(new Set(c)).size)throw new _.J(_.K,4,4018);}c=e.filter(function(n){return!n.se});e=e.filter(function(n){return n.se});e=_.u(e);for(f=e.next();!f.done;f=e.next()){g=f.value;f=g.streams[0];g=g.se;h=_.u(c);for(var l=h.next();!l.done;l=h.next())if(l=l.value,l.id==g){l=_.u(l.streams);for(var m=l.next();!m.done;m=l.next())m.value.trickModeVideo=f}}f=GB(c,_.Xd);g=GB(c,_.Nb);if(!f.length&&
!g.length)throw new _.J(_.K,4,4004);g.length||(g=[null]);f.length||(f=[null]);e=[];g=_.u(g);for(h=g.next();!h.done;h=g.next())for(h=h.value,l=_.u(f),m=l.next();!m.done;m=l.next())HB(a,b.ma.id,h,m.value,e);g=GB(c,_.k);f=[];g=_.u(g);for(h=g.next();!h.done;h=g.next())f.push.apply(f,h.value.streams);g=GB(c,"image");c=[];g=_.u(g);for(h=g.next();!h.done;h=g.next())c.push.apply(c,h.value.streams);return{startTime:d.start,textStreams:f,thumbStreams:c,variants:e}},GB=function(a,b){return a.filter(function(c){return c.contentType==
b})},HB=function(a,b,c,d,e){var f=null!=b?b:a.h++ +"";if(c||d)if(c&&d){if(_.Kk(c.drmInfos,d.drmInfos)){var g=_.Jk(c.drmInfos,d.drmInfos);g.forEach(function(p){p.periodId=f});var h=_.u(c.streams);for(b=h.next();!b.done;b=h.next()){var l=b.value,m=_.u(d.streams);for(b=m.next();!b.done;b=m.next()){var n=b.value;b=(n.bandwidth||0)+(l.bandwidth||0);b={id:a.h++,language:c.language,primary:c.Zd||d.Zd,audio:l,video:n,bandwidth:b,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0};e.push(b)}}}}else for(g=
c||d,h=_.u(g.streams),b=h.next();!b.done;b=h.next())l=b.value,b=l.bandwidth||0,b={id:a.h++,language:g.language||_.Od,primary:g.Zd,audio:c?l:null,video:d?l:null,bandwidth:b,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},e.push(b)},FB=function(a,b,c){b.ba=DB(a,c,b.ma,null);var d=!1,e=_.M.M(c,"Role"),f=e.map(function(L){return L.getAttribute(_.Ud)}).filter(_.Lk.bb),g=null,h=_.M.M(c,"Label").map(function(L){return L.textContent}).filter(_.Lk.bb);h&&0<h.length&&(g=h[h.length-1]);var l=
void 0;(h=b.ba.contentType==_.k)&&(l=_.Hd);e=_.u(e);for(var m=e.next();!m.done;m=e.next()){m=m.value;var n=m.getAttribute(EA);if(null==n||"urn:mpeg:dash:role:2011"===n||"urn:mpeg:dash:role"===n)switch(m=m.getAttribute(_.Ud),m){case "main":d=!0;break;case "caption":case _.Hd:l=m}}n=_.M.M(c,vA);e=null;m=!1;n=_.u(n);for(var p=n.next();!p.done;p=n.next())p=p.value,"http://dashif.org/guidelines/trickmode"==p.getAttribute(EA)?e=p.getAttribute(_.Ud):m=!0;n=_.M.M(c,"Accessibility");var q=new Map;n=_.u(n);
for(p=n.next();!p.done;p=n.next()){var t=p.value;p=t.getAttribute(EA);if("urn:scte:dash:cc:cea-608:2015"==p||"urn:scte:dash:cc:cea-708:2015"==p)if(p=1,t=t.getAttribute(_.Ud),null!=t){t=_.u(t.split(";"));for(var v=t.next();!v.done;v=t.next()){var z=v.value,F=v=void 0;z.includes("\x3d")?(z=z.split("\x3d"),v=z[0].startsWith("CC")?z[0]:"CC"+z[0],F=z[1].split(",")[0].split(":").pop()):(v="CC"+p,p+=2,F=z);q.set(v,_.dn(F))}}else q.set("CC1",_.Od)}if(m)return null;m=_.M.M(c,uA);var E=UA(m,a.c.ignoreDrmInfo),
D=_.dn(c.getAttribute("lang")||_.Od);null==g&&(g=c.getAttribute("label"));m=_.M.M(c,_.Oa);c=m.map(function(L){return IB(a,b,E,l,D,g,d,f,q,L)}).filter(function(L){return!!L});if(0==c.length){if(h)return null;throw new _.J(_.K,4,4003);}if(!b.ba.contentType||b.ba.contentType==_.Cb)for(b.ba.contentType=JB(c[0].mimeType,c[0].codecs),h=_.u(c),n=h.next();!n.done;n=h.next())n.value.type=b.ba.contentType;h=_.u(c);for(n=h.next();!n.done;n=h.next())for(n=n.value,p=_.u(E.drmInfos),t=p.next();!t.done;t=p.next())t=
t.value,n.keyId&&t.keyIds.push(n.keyId);h=m.map(function(L){return L.getAttribute("id")}).filter(_.Lk.bb);return{id:b.ba.id||"__fake__"+a.h++,contentType:b.ba.contentType,language:D,Zd:d,streams:c,drmInfos:E.drmInfos,se:e,sj:h}},IB=function(a,b,c,d,e,f,g,h,l,m){var n=_.M.Qb;b.F=DB(a,m,b.ba,null);if(!KB(a,b.F))return a.a.warn("Skipping Representation",b.F),null;b.bandwidth=_.M.P(m,"bandwidth",_.M.md)||0;var p=b.F.contentType,q=p==_.k||p==_.Cb,t="image"==p;try{if(p=function(E,D,L){return LB(a,E,D,L)},
b.F.Jc)var v=mB(b,p);else if(b.F.zb)v=qB(b,a.u);else if(b.F.Tb)v=vB(b,p,a.u,!!a.f);else{var z=b.F.wa,F=b.U.duration||0;v={createSegmentIndex:function(){return Promise.resolve()},findSegmentPosition:function(E){return 0<=E&&E<F?1:null},getSegmentReference:function(E){return 1!=E?null:new _.Nn(1,0,F,function(){return z},0,null)},adjustSegmentDurations:function(){},getDuration:function(){return F},initSegmentReference:null,ta:0}}}catch(E){if(q&&4002==E.code)return null;throw E;}q=_.M.M(m,uA);q=VA(q,
c,a.c.ignoreDrmInfo);p=void 0;t&&(t=(m=_.M.Ac(m,vA))&&m.getAttribute(EA),iB.ji(t||"")&&(m=(m=m.getAttribute(_.Ud))&&m.split("x").map(function(E){return parseInt(E,10)}))&&2==m.length&&(v.horizontalTiles=m[0],v.verticalTiles=m[1],m=v.horizontalTiles*v.verticalTiles,null!==b.ba.Tb&&(p=(n=_.M.P(b.ba.Tb,BA,n)||0)?n/m:void 0)));return{id:a.h++,originalId:b.F.id,createSegmentIndex:v.createSegmentIndex,findSegmentPosition:v.findSegmentPosition,getSegmentReference:v.getSegmentReference,initSegmentReference:v.initSegmentReference,
adjustSegmentDurations:v.adjustSegmentDurations,getDuration:v.getDuration,presentationTimeOffset:v.ta,mimeType:b.F.mimeType,codecs:b.F.codecs,frameRate:b.F.frameRate,bandwidth:b.bandwidth,width:b.F.width,height:b.F.height,kind:d,encrypted:0<c.drmInfos.length,keyId:q,language:e,label:f,type:b.ba.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.F.emsgSchemeIdUris,roles:h,channelsCount:b.F.be,closedCaptions:l,horizontalTiles:v.horizontalTiles,verticalTiles:v.verticalTiles,durationPerTile:p}},
wB=function(a){var b,c,d;_.A(function(e){switch(e.a){case 1:return a.a.info(_.ab),b=0,_.Ce(e,2),_.x(e,zB(a),4);case 4:b=e.b;_.De(e,3);break;case 2:if(c=_.Ee(e),a.b&&c.b&&(a.b.onError(c),d=c,d.a===_.K))return e["return"]();case 3:if(!a.b)return e["return"]();MB(a,b);_.y(e)}})},MB=function(a,b){0>a.l||a.j.R(Math.max(3,a.l-b,_.kn(a.w)))},DB=function(a,b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,be:null};d=d||c.wa;var e=_.M.Qb,f=_.M.Kh,g=_.M.M(b,"BaseURL").map(_.M.Fb),
h=b.getAttribute("contentType")||c.contentType,l=b.getAttribute(_.Vc)||c.mimeType,m=b.getAttribute(_.ic)||c.codecs;f=_.M.P(b,_.Bc,f)||c.frameRate;var n=_.M.M(b,"InbandEventStream"),p=c.emsgSchemeIdUris.slice();n=_.u(n);for(var q=n.next();!q.done;q=n.next())q=q.value.getAttribute(EA),p.includes(q)||p.push(q);n=_.M.M(b,"AudioChannelConfiguration");a=NB(a,n)||c.be;h||(h=JB(l,m));return{wa:_.Mk(d,g),Jc:_.M.Ac(b,"SegmentBase")||c.Jc,zb:_.M.Ac(b,"SegmentList")||c.zb,Tb:_.M.Ac(b,"SegmentTemplate")||c.Tb,
width:_.M.P(b,_.je,e)||c.width,height:_.M.P(b,_.Ec,e)||c.height,contentType:h,mimeType:l,codecs:m,frameRate:f,emsgSchemeIdUris:p,id:b.getAttribute("id"),be:a}},NB=function(a,b){for(var c=_.u(b),d=c.next();!d.done;d=c.next()){var e=d.value;if(d=e.getAttribute(EA))if(e=e.getAttribute(_.Ud))switch(d){case "urn:mpeg:dash:outputChannelPositionList:2012":return e.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":var f=
parseInt(e,10);if(!f){a.a.warn(tA,d,e);continue}return f;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":f=parseInt(e,16);if(!f){a.a.warn(tA,d,e);continue}for(c=0;f;)f&1&&++c,f>>=1;return c;default:a.a.warn("Unrecognized audio channel scheme:",d,e)}}return null},KB=function(a,b){var c=b.Jc?1:0;c+=b.zb?1:0;c+=b.Tb?1:0;if(0==c){if(b.contentType==_.k||b.contentType==_.Cb)return!0;a.a.warn("Representation does not contain a segment information source:",
"the Representation must contain one of SegmentBase, SegmentList,",'SegmentTemplate, or explicitly indicate that it is "text".',b);return!1}1!=c&&(a.a.warn("Representation contains multiple segment information sources:","the Representation should only contain one of SegmentBase,","SegmentList, or SegmentTemplate.",b),b.Jc?(a.a.info("Using SegmentBase by default."),b.zb=null):a.a.info("Using SegmentList by default."),b.Tb=null);return!0},OB=function(a,b,c,d){var e,f,g,h,l,m;return _.A(function(n){if(1==
n.a)return e=_.Mk(b,[c]),f=_.Gi(e,a.c.attemptParameters),f.type=5,f.method=d,g=a.b.networkingEngine.fetch(f),_.bn(a.i,g),_.x(n,g.promise,2);h=n.b;if("HEAD"==d){if(!h.headers||!h.headers.date)return a.a.warn("UTC timing response is missing","expected date header"),n["return"](0);l=h.headers.date}else l=_.hf(h.data);m=Date.parse(l);return isNaN(m)?(a.a.warn("Unable to parse date from UTC timing response"),n["return"](0)):n["return"](m-Date.now())})},CB=function(a,b,c){c=c.map(function(e){return{scheme:e.getAttribute(EA),
value:e.getAttribute(_.Ud)}});var d=a.c.clockSyncUri;!c.length&&d&&c.push({scheme:JA,value:d});return _.Lk.Gh(c,function(e){var f=e.scheme;e=e.value;switch(f){case JA:case "urn:mpeg:dash:utc:http-head:2012":return OB(a,b,e,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return OB(a,b,e,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return f=Date.parse(e),
Promise.resolve(isNaN(f)?0:f-Date.now());case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return a.a.warn("NTP UTCTiming scheme is not supported"),Promise.reject();default:return a.a.warn("Unrecognized scheme in UTCTiming element",f),Promise.reject()}})["catch"](function(){a.a.warn("A UTCTiming element should always be given in live manifests! This content may not play on clients with bad clocks!");return 0})},EB=function(a,b,c,d){var e=_.M.Qb,
f=d.getAttribute(EA)||"",g=d.getAttribute(_.Ud)||"",h=_.M.P(d,GA,e)||1;d=_.u(_.M.M(d,"Event"));for(var l=d.next();!l.done;l=d.next()){l=l.value;var m=_.M.P(l,"presentationTime",e)||0,n=_.M.P(l,BA,e)||0;m=m/h+b;n=m+n/h;null!=c&&(m=Math.min(m,b+c),n=Math.min(n,b+c));var p=f.startsWith("urn:scte:scte35"),q=_.Co;l={schemeIdUri:f,value:g,startTime:m,endTime:n,id:l.getAttribute("id")||"",type:p?q.Nj:q.UNKNOWN,eventElement:l};a.b.onTimelineCueAdded(l)}},LB=function(a,b,c,d){var e,f,g,h;return _.A(function(l){if(1==
l.a)return e=_.en(b,c,d,a.c.attemptParameters),e.type=_.to,f=a.b.networkingEngine,g=f.fetch(e),_.bn(a.i,g),_.x(l,g.promise,2);h=l.b;return l["return"](h.data)})},JB=function(a,b){return _.lg(_.hg(a,b))?_.k:a.split("/")[0]},PB=function(){},OA=(new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",_.cd).set(LA,_.mc).set(KA,_.lc).set("urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95",_.lc).set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb","com.adobe.primetime"),WA=(new Map).set(_.mc,function(a){return(a=
_.M.dd(a.node,"urn:microsoft","laurl"))?a.getAttribute("licenseUrl")||"":""}).set(_.lc,function(a){a=_.M.dd(a.node,HA,"pro");if(!a)return"";a=_.Wj(a.textContent);return _.sm(a).f||""});var iB={ve:"http://www.w3.org/1999/xlink",Uf:["http://dashif.org/thumbnail_tile","http://dashif.org/guidelines/thumbnail_tile"],ji:function(a){return 0<=iB.Uf.indexOf(a)},cd:function(a,b,c,d,e){var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,function(g,h,l,m){if("$$"==g)return"$";var n=f[h];if(null==n)return _.G("URL template does not have an available substitution for identifier",'"'+h+'":',a),g;"RepresentationID"==
h&&l&&(_.G("URL template should not contain a width specifier for identifier",'"RepresentationID":',a),l=void 0);"Time"==h&&(n=Math.round(n));switch(m){case void 0:case "d":case "i":case "u":g=n.toString();break;case "o":g=n.toString(8);break;case "x":g=n.toString(16);break;case "X":g=n.toString(16).toUpperCase();break;default:g=n.toString()}l=window.parseInt(l,10)||1;return Array(Math.max(0,l-g.length)+1).join("0")+g})},Hh:function(a,b,c,d){a=_.M.M(a,"S");for(var e=[],f=0,g=0;g<a.length;++g){var h=
a[g],l=_.M.P(h,"t",_.M.Qb),m=_.M.P(h,"d",_.M.Qb),n=_.M.P(h,"r",_.M.parseInt);null!=l&&(l-=c);if(!m){_.G('"S" element must have a duration:',CA,h);break}l=null!=l?l:f;n=n||0;if(0>n)if(g+1<a.length){n=_.M.P(a[g+1],"t",_.M.Qb);if(null==n){_.G('An "S" element cannot have a negative repeat','if the next "S" element does not have a valid start time:',CA,h);break}else if(l>=n){_.G('An "S" element cannot have a negative repeatif its start ','time exceeds the next "S" element\'s start time:',CA,h);break}n=
Math.ceil((n-l)/m)-1}else{if(Infinity==d){_.G(AA,"if the Period has an infinite duration:",'ignoring the last "S" element.',h);break}else if(l/b>=d){_.G(AA,"if its start time exceeds the Period's duration:",'igoring the last "S" element.',h);break}n=Math.ceil((d*b-l)/m)-1}0<e.length&&l!=f&&(Math.abs((l-f)/b)>=_.Bo&&_.G("SegmentTimeline contains a large gap/overlap:","the content may have errors in it.",h),e[e.length-1].end=l/b);for(h=0;h<=n;++h)f=l+m,e.push({start:l/b,end:f/b,Cj:l}),l=f}return e},
Jf:function(a,b){var c=iB.Ca(a,b,GA),d=1;c&&(d=_.M.md(c)||1);c=iB.Ca(a,b,BA);(c=_.M.md(c||""))&&(c/=d);var e=iB.Ca(a,b,"startNumber"),f=0;a.Nb||(f=Number(iB.Ca(a,b,DA))||0);var g=_.M.Qb(e||"");if(null==e||null==g)g=1;var h=iB.Vd(a,b,zA);e=null;h&&(e=iB.Hh(h,d,f,a.U.duration||Infinity));h=f/d||0;var l=iB.Ca(a,b,"availabilityTimeOffset"),m=_.M.parseFloat(l||"");if(null==l||null==m)m=0;return{timescale:d,da:c,Vb:g,ta:h,te:f,timeline:e,Bd:m}},Ca:function(a,b,c){return[b(a.F),b(a.ba),b(a.ma)].filter(_.Lk.bb).map(function(d){return d.getAttribute(c)}).reduce(function(d,
e){return d||e})},Vd:function(a,b,c){return[b(a.F),b(a.ba),b(a.ma)].filter(_.Lk.bb).map(function(d){return _.M.Ac(d,c)}).reduce(function(d,e){return d||e})},fi:function(a,b,c,d,e,f){for(var g=iB.ve,h=_.M.getAttributeNS(a,g,"href"),l=_.M.getAttributeNS(a,g,"actuate")||"onRequest",m=0;m<a.attributes.length;m++){var n=a.attributes[m];n.namespaceURI==g&&(a.removeAttributeNS(n.namespaceURI,n.localName),--m)}if(5<=f)return MA(new _.J(_.K,4,4028));if("onLoad"!=l)return MA(new _.J(_.K,4,4027));var p=_.Mk([d],
[h]);d=_.Gi(p,b);d.type=1;return e.fetch(d).Uc(function(q){q=_.M.Kf(q.data,a.tagName);if(!q)return MA(new _.J(_.K,4,4001,{uri:h}));for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);for(;q.childNodes.length;){var t=q.childNodes[0];q.removeChild(t);a.appendChild(t)}for(t=0;t<q.attributes.length;t++){var v=q.attributes[t].nodeName,z=q.getAttribute(v);a.setAttribute(v,z)}return iB.od(a,b,c,p[0],e,f+1)})},od:function(a,b,c,d,e,f){f=void 0===f?0:f;var g=iB.ve;if(_.M.getAttributeNS(a,g,"href"))return g=
iB.fi(a,b,c,d,e,f),c&&(g=g.Uc(void 0,function(){return iB.od(a,b,c,d,e,f)})),g;for(var h=[],l=0;l<a.childNodes.length;l++){var m=a.childNodes[l];m instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==_.M.getAttributeNS(m,g,"href")?(a.removeChild(m),--l):m.tagName!=zA&&h.push(iB.od(m,b,c,d,e,f)))}return NA(h).Uc(function(){return a})}};var bB=[[255],[127,255],[63,255,255],[31,255,255,255],[15,255,255,255,255],[7,255,255,255,255,255],[3,255,255,255,255,255,255],[1,255,255,255,255,255,255,255]];fB.prototype.parse=function(a,b,c,d){b=new $A(new DataView(b));if(440786851!=dB(b).id)throw _.cf("Not an EBML element."),new _.J(_.K,3,3008);var e=dB(b);if(408125543!=e.id)throw _.cf("Not a Segment element."),new _.J(_.K,3,3009);b=e.a.byteOffset;e=new $A(e.a);for(var f=null;_.ah(e.a);){var g=dB(e);if(357149030==g.id){f=g;break}}if(!f)throw _.cf("Not an Info element."),new _.J(_.K,3,3010);f=new $A(f.a);g=1E6;for(e=null;_.ah(f.a);){var h=dB(f);if(2807729==h.id)g=eB(h);else if(17545==h.id)if(4==h.a.byteLength)e=
h.a.getFloat32(0);else if(8==h.a.byteLength)e=h.a.getFloat64(0);else throw new _.J(_.K,3,3003);}if(null==e)throw new _.J(_.K,3,3011);f=g/1E9;e*=f;a=dB(new $A(new DataView(a)));if(475249515!=a.id)throw _.cf("Not a Cues element."),new _.J(_.K,3,3007);return hB(a,b,f,e,c,d)};_.r=xB.prototype;_.r.configure=function(a){this.c=a};_.r.start=function(a,b){var c=this,d;return _.A(function(e){if(1==e.a)return c.g=[a],c.b=b,_.x(e,zB(c),2);d=e.b;c.b&&MB(c,d);if(!c.b)throw new _.J(_.K,7,7001);return e["return"](c.f)})};_.r.stop=function(){this.c=this.b=null;this.g=[];this.f=null;this.o=[];this.u={};null!=this.j&&(this.j.stop(),this.j=null);return this.i.destroy()};_.r.update=function(){var a=this;zB(this)["catch"](function(b){if(a.b&&b)a.b.onError(b)})};
_.r.onExpirationUpdated=function(){};_.w(PB,_.nl);_.r=PB.prototype;_.r.rb=function(){_.Do.pd("mpd",xB);_.Do.Hc(_.tl,xB)};_.r.ib=function(){_.Do.ne("mpd");_.Do.qd(_.tl)};_.r.wc=function(){};_.r.release=function(){};_.r.id=function(){return"clpp.component.dash"};_.B("clpp.dash.DashComponent",PB);};f.call(g, window);