(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[34441],{787410:(e,i,t)=>{t.d(i,{Z:()=>u});var n=t(667294),o=t(973935),s=t(785893);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const l=new Map;let a=null;const d=e=>{e.forEach((e=>{const i=l.get(e.target);i&&i(e)}))},u=e=>{class i extends n.Component{constructor(...e){super(...e),r(this,"seen",!1),r(this,"enter",(e=>{const i=e.intersectionRatio>0||e.isIntersecting;this.seen=i,this.seen&&this.props.onVisibilityChanged(!0)})),r(this,"leave",(()=>{const e=this._node;e&&(e=>l.has(e))(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)})),r(this,"observe",(e=>{try{this._node=o.findDOMNode(this)}catch(n){return}if(!this._node)return;const{inAdsDesktopVideoExperiment:i}=this.props,t=this._node;((e,i="-64px 0px 0px 0px",t)=>{const n={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};a=a||new window.IntersectionObserver(d,n),l.set(e,t),a.observe(e)})(t,e,(e=>{if(!l.has(t))return;const n=i?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,o=this.props.trackFullVisible?e.intersectionRatio>=1:n,s=this.props.trackFullVisible?0===e.intersectionRatio:!o;!this.seen&&o?this.enter(e):this.seen&&s&&this.leave()}))}))}componentDidMount(){const{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){const e=this._node;e&&(this.leave(),(e=>{a.unobserve(e),l.delete(e)})(e))}render(){return(0,s.jsx)(e,{...this.props})}}return r(i,"displayName",`DeprecatedWithVisibilityChanged(${e.displayName||e.name})`),i}},991773:(e,i,t)=>{t.d(i,{Z:()=>l});var n=t(667294);const o=new Map;let s=null;const r=e=>{e.forEach((e=>{const i=o.get(e.target);i&&i(e)}))};function l({onVisibilityChanged:e,inAdsDesktopVideoExperiment:i,trackFullVisible:t,rootMargin:l}){const a=(0,n.useRef)(null);let d=!1;const u=()=>{var i;a.current instanceof HTMLElement&&(i=a.current,o.has(i))&&(d&&(e(!1),d=!1))},c=(0,n.useCallback)((n=>{a.current instanceof HTMLElement&&((e,i="-64px 0px 0px 0px",t)=>{const n={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:i,threshold:[0,.5,1]};s=s||new window.IntersectionObserver(r,n),o.set(e,t),s.observe(e)})(a.current,n,(n=>{if(!o.has(a.current))return;const s=i?n.intersectionRatio>=.5:n.intersectionRatio>0||n.isIntersecting,r=t?n.intersectionRatio>=1:s,l=t?0===n.intersectionRatio:!r;!d&&r?(i=>{const t=i.intersectionRatio>0||i.isIntersecting;d=t,d&&e(!0)})(n):d&&l&&u()}))}),[a.current]);return(0,n.useEffect)((()=>(c(l),()=>{var e;a.current instanceof HTMLElement&&(u(),e=a.current,s.unobserve(e),o.delete(e))})),[c]),a}},832654:(e,i,t)=>{t.d(i,{Z:()=>o});var n=t(349700);function o(e,i){const{alt_text:t,auto_alt_text:o}=e;return t?(0,n.nk)(i._('This contains: {{ altText }}', 'web.altText', 'Alt text input by a human'),{altText:t}).join(""):o?(0,n.nk)(i._('This may contain: {{ autoAltText }}', 'web.altText', 'Alt text generated by a computer'),{autoAltText:o}).join(""):null}},312955:(e,i,t)=>{t.d(i,{Z:()=>g});var n=t(294184),o=t.n(n),s=t(814115),r=t(832654);const l={debugPinImpressions:999,max:9999,pinActionWrapper:101,saved:102,storyPinImage:-1};var a=t(883119),d=t(785893);function u({onError:e,onLoad:i,pin:t}){var n,o,s,r;const{title:u="",dominant_color:c,images:h={}}=t,p="number"==typeof(null===(n=h["474x"])||void 0===n?void 0:n.width)&&"number"==typeof h["474x"].height&&h["474x"].width>h["474x"].height?h["736x"]:h["474x"];return(0,d.jsx)(a.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"177.77777777777777%"}},children:(0,d.jsx)(a.xu,{position:"absolute",top:!0,left:!0,width:"100%",height:"100%",dangerouslySetInlineStyle:{__style:{zIndex:l.storyPinImage}},children:(0,d.jsx)(a.Ee,{alt:u,color:c,naturalHeight:null!==(o=null==p?void 0:p.height)&&void 0!==o?o:1,naturalWidth:null!==(s=null==p?void 0:p.width)&&void 0!==s?s:1,onError:e,onLoad:i,src:null!==(r=null==p?void 0:p.url)&&void 0!==r?r:"",fit:"cover"})})})}var c=t(898781),h=t(349700),p=t(310227);const g=({cropHeight:e,cropWidth:i,fallbackColor:t,highResOnly:n,imageFit:l,lowResOnly:g,mediumResOnly:_,onError:m,onLoad:x,pin:v,saved:f=!1,animateGif:y})=>{var b,w,P;const A=(0,c.ZP)(),{carousel_data:T,description:C="",dominant_color:j,grid_title:V,id:z,images:E,title:I}=v,S=(0,h.nk)(A._('This contains an image of: {{ pinTitle }}', 'web.altText', 'Alt text input for PinImage by a human'),{pinTitle:I||V}).join(""),W=(0,r.Z)(v,A)||C.trim().length>0&&C||S;if(T)return(0,d.jsx)(s.Z,{onError:m,onLoad:x,highResOnly:n,lowResOnly:g,pinId:z});let M,O="",L=0,R=0;if(E){var H,B,Z;let e=E["236x"];var k,D,$,F,G;if(n?e=E["736x"]||E.orig||E["474x"]||E["236x"]:_&&(e=E["474x"]||E.orig||E["236x"]),L=null===(H=e)||void 0===H?void 0:H.height,R=null===(B=e)||void 0===B?void 0:B.width,O=null===(Z=e)||void 0===Z?void 0:Z.url,g||_||n)M=null!==(k=e)&&void 0!==k&&k.url?`${e.url} 1x`:"";else M=[(null===(D=E["236x"])||void 0===D?void 0:D.url)&&`${E["236x"].url} 1x`,(null===($=E["474x"])||void 0===$?void 0:$.url)&&`${E["474x"].url} 2x`,(null===(F=E["736x"])||void 0===F?void 0:F.url)&&`${E["736x"].url} 3x`,(null===(G=E.orig)||void 0===G?void 0:G.url)&&`${E.orig.url} 4x`].filter(Boolean).join(", ")}if(y){const e=Math.max(v.embed&&v.embed.width||0,236),i=Math.max(v.embed&&v.embed.height||0,236),t=v.embed?v.embed.src:"";t&&(L=i,R=e,O=t,M="")}return(0,d.jsx)(a.kC,{alignItems:"center",justifyContent:"start",minHeight:p.Ml,children:(0,d.jsx)(a.xu,{flex:"grow",children:(0,d.jsx)("div",{className:o()({savedGradient:f}),children:v.story_pin_data_id?(0,d.jsx)(u,{pin:v,onError:m,onLoad:x}):(0,d.jsx)(a.xu,{height:i?e:void 0,width:i||void 0,"data-test-id":"non-story-pin-image",children:(0,d.jsx)(a.Ee,{alt:W,color:"dominant"===t?j:t,fit:l,naturalHeight:null!==(b=L)&&void 0!==b?b:1,naturalWidth:null!==(w=R)&&void 0!==w?w:1,onError:m,onLoad:x,src:null!==(P=O)&&void 0!==P?P:"",srcSet:M})})})})})}},657472:(e,i,t)=>{t.d(i,{Z:()=>C});var n=t(667294);var o=t(983722),s=t(787410),r=t(36971),l=t(463045),a=t(494349),d=t(554779),u=t(312955),c=t(898781),h=t(883119),p=t(785893);const g={__path:"M12 18.5A6.508 6.508 0 0 1 5.5 12c0-1.706.689-3.307 1.835-4.5H6.5a1 1 0 1 1 0-2h4.185v4.474a1 1 0 0 1-2 0V8.972A4.505 4.505 0 0 0 7.5 12c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5a4.49 4.49 0 0 0-3.112-4.283 1 1 0 1 1 .615-1.902A6.482 6.482 0 0 1 18.5 12c0 3.584-2.916 6.5-6.5 6.5M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"},_={__path:"M17.496 14.572a1 1 0 0 1-1 1h-.001a1.001 1.001 0 0 1-.999-1.001l.002-4.652-7.29 7.288a.995.995 0 0 1-.707.293.999.999 0 0 1-.707-1.707l7.293-7.29L9.428 8.5a1 1 0 0 1 .001-2h.001l8.071.005-.005 8.067zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"},m={overlay:{__style:{backgroundColor:"#000"}}};function x({backgroundImage:e,naturalHeight:i,naturalWidth:t,onRestartVideo:n,pinTitle:o,pin:s}){const r=(0,c.ZP)(),{id:l}=s;return(0,p.jsxs)(h.Ee,{alt:o||r._('pin image', 'image of a pin', 'image of a pin'),naturalHeight:i,naturalWidth:t,src:e,children:[(0,p.jsx)(h.xu,{position:"absolute",top:!0,bottom:!0,left:!0,right:!0,opacity:.8,dangerouslySetInlineStyle:m.overlay}),(0,p.jsxs)(h.xu,{justifyContent:"center",direction:"column",display:"flex",position:"absolute",height:"100%",width:"100%","data-test-id":`video-end-card-${l}`,children:[(0,p.jsx)(h.iP,{rounding:2,children:(0,p.jsxs)(h.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,p.jsx)(h.JO,{accessibilityLabel:r._('Visit site', 'Button when pressed goes to pin\'s website', 'Button when pressed goes to pin\'s website'),color:"light",dangerouslySetSvgPath:_,size:25}),(0,p.jsx)(h.xu,{margin:1}),(0,p.jsx)(h.xv,{color:"light",lineClamp:1,weight:"bold",children:r._('Visit site', 'Button when pressed goes to pin\'s website', 'Button when pressed goes to pin\'s website')})]})}),(0,p.jsx)(h.xu,{margin:3}),(0,p.jsx)(h.iP,{onTap:n,rounding:2,children:(0,p.jsxs)(h.xu,{display:"flex",justifyContent:"center",padding:2,children:[(0,p.jsx)(h.JO,{accessibilityLabel:r._('Watch again', 'Button when pressed restarts the video', 'Button when pressed restarts the video'),color:"light",dangerouslySetSvgPath:g,size:25}),(0,p.jsx)(h.xu,{margin:1}),(0,p.jsx)(h.xv,{color:"light",lineClamp:1,weight:"bold",children:r._('Watch again', 'Button when pressed restarts the video', 'Button when pressed restarts the video')})]})})]})]})}var v=t(991773),f=t(572260),y=t(623568);const b=new Set(["ConversationView","TodayTabFeed"]);function w({inAdsDesktopVideoExperiment:e,isAutoplay:i,cropHeight:t,currentTime:o,lowResOnly:s,highResOnly:r,onLoad:l,onError:g,saved:_,onTimeChange:m,isExperimentalPinRep:w,pin:P,surface:A,playing:T,rootMargin:C,viewType:j,viewParameter:V,onVisibilityChanged:z,trackFullVisible:E,inVisibilityChangedHookExperiment:I,imageHeightModifier:S,cropWidth:W}){var M,O;const L=(0,c.ZP)(),[R,H]=(0,n.useState)(!1),[B,Z]=(0,n.useState)(!0),k=(0,y.jL)(P),D=k&&!P.is_eligible_for_web_closeup,$=w&&k&&P.is_eligible_for_web_closeup&&!b.has(A),{setCurrentVideo:F}=(0,a.I)(),G=D||!w||!k,U=(0,v.Z)({onVisibilityChanged:z,inAdsDesktopVideoExperiment:e,trackFullVisible:E,rootMargin:C});let N=!T;e&&(N=B,i&&T&&B&&Z(!1));const{url:q}=(null===(M=P.images)||void 0===M?void 0:M["236x"])||{},{id:J,is_promoted:K}=P,Q=(0,n.useCallback)((({event:e})=>{e.preventDefault(),e.stopPropagation(),F({pinId:J,isPromoted:Boolean(K),currentTime:0}),H(!1)}),[K,J,F]),X=(0,n.useCallback)((()=>{K&&H($)}),[$,K]);if(!P.videos||null===(O=P.videos.video_list)||void 0===O||!O.V_HLSV4)return null;const{height:Y,thumbnail:ee,width:ie,url:te}=P.videos.video_list.V_HLSV4||{},ne=P.videos.id,oe=[{type:"video/m3u8",src:te}];let se,re=(null!=ie?ie:1)/(null!=Y?Y:1);const le=e&&A&&(0,d.Z)(A);if(le&&(re=1,se="transparent",S&&(re-=S-1)),R&&k)return(0,p.jsx)(h.xu,{ref:I?U:null,children:(0,p.jsx)(x,{backgroundImage:null!=q?q:"",naturalHeight:null!=Y?Y:1,naturalWidth:null!=ie?ie:1,pin:P,onRestartVideo:Q})});if(N){let e={highResOnly:r,lowResOnly:s,onError:g,onLoad:l,pin:P,saved:_};return le&&(e={...e,cropHeight:t,cropWidth:W,imageFit:"contain"}),(0,p.jsx)(h.xu,{ref:I?U:null,children:(0,p.jsx)(u.Z,{...e})})}return(0,p.jsx)(h.xu,{ref:I?U:null,children:(0,p.jsx)(f.ZP,{isAutoPlay:!!i,cropHeight:t,rootMargin:C,surface:A,inAdsDesktopVideoExperiment:e,contextLogData:{viewParameter:V,component:0,objectId:P.id,video_id:ne,view:j},accessibilityMaximizeLabel:L._('Maximize', 'Maximize button on video', 'Maximize button on video'),accessibilityMinimizeLabel:L._('Minimize', 'Minimize button on video', 'Minimize button on video'),accessibilityMuteLabel:L._('Mute', 'Mute button on video', 'Mute button on video'),accessibilityPauseLabel:L._('Pause', 'Pause button on video', 'Pause button on video'),accessibilityPlayLabel:L._('Play', 'Play button on video', 'Play button on video'),accessibilityProgressBarLabel:L._('Progress bar', 'PinVideo.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:L._('Unmute', 'Unmute button on video', 'Unmute button on video'),aspectRatio:re,backgroundColor:se,captions:"",hlsConfig:{capLevelToPlayerSize:!0,startPosition:o||-1},loop:G,onTimeChange:m,playing:T,onPlay:()=>{},onPlayError:()=>{},poster:q||ee,src:null!=oe?oe:[],videoStartTime:o,volume:0,onEnded:X})})}function P(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}const A=(0,s.Z)(w);class T extends n.Component{constructor(...e){super(...e),P(this,"calculateCurrentVideoTime",(()=>{const{currentTimeFromPinRep:e,pin:i,videosAutoplaying:t}=this.props,{id:n}=i,o=(0,r.Z)(n,t);return this.currentVideoCurrentTime||o||e})),P(this,"handleVisibilityChanged",(e=>{const{currentTimeFromPinRep:i,pin:t,setCurrentVideo:n,pauseAutoplay:s,videosAutoplaying:r}=this.props,{id:a,is_promoted:d}=t,u=(0,l.Z)(a,r),c=function(e,i){const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};for(const s in o){const{paused:i}=o[s];if(s!==e&&!i)return!1}return!0}(a,r);if(e){if(d)n({pinId:a,isPromoted:d,currentTime:this.calculateCurrentVideoTime()});else if(c){const e=(0,o.Z)(),{anyEnabled:i}=(null==e?void 0:e.experimentsClient.checkExperiment("hfp_web_video_autoplay_in_grid"))||{};n({pinId:a,isPromoted:Boolean(d),currentTime:this.calculateCurrentVideoTime(),inVideoGridAutoplayExp:i})}}else!e&&u&&s({pinId:a,isPromoted:Boolean(d),currentTime:i||this.currentVideoCurrentTime})})),P(this,"handleVideoTimeChange",(e=>{const{pin:i,onTimeChange:t,videosAutoplaying:n}=this.props,{id:o}=i;(0,l.Z)(o,n)&&(this.currentVideoCurrentTime=e.time),t&&t(e)}))}componentDidMount(){this.props.onLoad&&this.props.onLoad()}componentDidUpdate(e){const{appInFocus:i}=e,{appInFocus:t,currentTimeFromPinRep:n,pauseAutoplay:o,pin:s,setCurrentVideo:r,videosAutoplaying:a}=this.props,{id:d,is_promoted:u}=s,c=(0,l.Z)(d,a);t!==i&&!t&&c?(this.pausedDueToBrowserOutOfFocus=!0,o({pinId:d,isPromoted:Boolean(u),currentTime:n||this.currentVideoCurrentTime})):this.pausedDueToBrowserOutOfFocus&&t&&(this.pausedDueToBrowserOutOfFocus=!1,r({pinId:d,isPromoted:Boolean(u),currentTime:this.calculateCurrentVideoTime()}))}componentWillUnmount(){const{currentTimeFromPinRep:e,pauseAutoplay:i,pin:t,videosAutoplaying:n}=this.props,{id:o,is_promoted:s}=t;(0,l.Z)(o,n)&&i({pinId:o,isPromoted:Boolean(s),currentTime:e||this.currentVideoCurrentTime})}render(){const{cropHeight:e,isAutoplay:i,pin:t,surface:n,videosAutoplaying:s,viewParameter:a,viewType:d,highResOnly:u,lowResOnly:c,onError:h,onLoad:g,saved:_,inAdsDesktopVideoExperiment:m,isExperimentalPinRep:x,rootMargin:v,cropWidth:f,imageHeightModifier:y}=this.props,{id:b}=t,P=(0,r.Z)(b,s),T=(0,l.Z)(b,s)&&i,C=(0,o.Z)(),{anyEnabled:j}=(null==C?void 0:C.experimentsClient.checkExperiment("web_mqtt_finddomnode_deprecation"))||{};return j?(0,p.jsx)(w,{cropHeight:e,rootMargin:v,currentTime:P,inAdsDesktopVideoExperiment:m,isAutoplay:i,viewParameter:a,viewType:d,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:n,playing:T,trackFullVisible:!1,highResOnly:u,lowResOnly:c,onError:h,onLoad:g,saved:_,isExperimentalPinRep:x,inVisibilityChangedHookExperiment:j,cropWidth:f,imageHeightModifier:y}):(0,p.jsx)(A,{cropHeight:e,rootMargin:v,currentTime:P,inAdsDesktopVideoExperiment:m,isAutoplay:i,viewParameter:a,viewType:d,onTimeChange:this.handleVideoTimeChange,onVisibilityChanged:this.handleVisibilityChanged,pin:t,surface:n,playing:T,trackFullVisible:!1,highResOnly:u,lowResOnly:c,onError:h,onLoad:g,saved:_,isExperimentalPinRep:x,cropWidth:f,imageHeightModifier:y})}}function C(e){const{appUI:{appInFocus:i,isAutoplay:t,videosAutoplaying:n},pauseAutoplay:o,setCurrentVideo:s}=(0,a.I)();return(0,p.jsx)(T,{...e,appInFocus:i,isAutoplay:t,pauseAutoplay:o,setCurrentVideo:s,videosAutoplaying:n})}},310227:(e,i,t)=>{t.d(i,{Dv:()=>s,Ml:()=>r,Oc:()=>n,mv:()=>o});const n=16,o=4,s={SAVED:"rgba(0, 0, 0, 0.33)",VISUAL:"rgba(0, 0, 0, 0.1)",LEGO_WASH:"rgba(0, 0, 0, 0.4)"},r=120},737022:(e,i,t)=>{function n(e){return e?e["564x"]&&e["564x"].url?e["564x"]:e["736x"]&&e["736x"].url?e["736x"]:e["474x"]&&e["474x"].url?e["474x"]:e["236x"]&&e["236x"].url?e["236x"]:null:null}t.d(i,{Z:()=>n})},687551:(e,i,t)=>{function n(e){return!!(e&&e.carousel_data&&e.carousel_data.id)}t.d(i,{Z:()=>n})},81226:(e,i,t)=>{function n(e){const i=Math.round(e/1e3),t=i%60;return Math.floor(i/60)+":"+(t<10?"0":"")+t}t.d(i,{Z:()=>n})},64446:(e,i,t)=>{t.d(i,{Z:()=>p});var n=t(605028);var o=t(341732),s=t(81226),r=t(898781),l=t(773285),a=t(883119),d=t(785893);const u={borderRadius:"18px",fontSize:"10px",fontWeight:"600",height:"24px",lineHeight:"24px",padding:"0 6px"},c={borderRadius:"18px",fontSize:"10px",fontWeight:"600",lineHeight:"24px",padding:"4px 8px"};function h({backgroundColor:e,identifier:i,size:t="sm"}){const n="pine"===e?"#0FA573":"#fff",o="sm"===t?u:c;return(0,d.jsx)(a.xu,{display:"inlineBlock",dangerouslySetInlineStyle:{__style:{...o,backgroundColor:e?n:"rgba(255, 255, 255, 0.8)",color:"pine"===e?"#fff":"#111"}},"data-test-id":"PinTypeIdentifier",children:i})}function p({pin:e,size:i="sm",allowProductCarousel:t,allowShoppingPriceIndicator:u,shoppingLabelColor:c}){const p=(0,r.ZP)(),{checkExperiment:g}=(0,l.F)(),_=(0,n.Z)(e),{group:m,anyEnabled:x}=g("hfp_idea_pin_identifer_web");if(_.isGif)return h({identifier:"GIF",size:i});if(_.isStoryPin){const{page_count:t=0,total_video_duration:n=0}=e.story_pin_data||{},o=x?m:"default";let r="idea-pin",l=t.toString();if("default"!==o&&n)if(l=(0,s.Z)(n),o.includes("play"))r="play";else{if(!o.includes("icon_time"))return h({identifier:l,size:i});r="idea-pin"}return h({identifier:(0,d.jsxs)(a.kC,{alignItems:"center",justifyContent:"between",children:[(0,d.jsx)(a.xu,{marginEnd:1,display:"flex",alignItems:"center",children:(0,d.jsx)(a.JO,{accessibilityLabel:p._('Idea Pin', 'pin.pinTypeIdentifier.ideaPinIconAccessibilityLabel', 'identifier that shows the pin type'),inline:!0,icon:r,color:"default",size:"sm"===i?12:16})}),(0,d.jsx)(a.xv,{inline:!0,size:"100",weight:"bold",children:l})]}),size:i})}if(_.isVideo){const t=e.videos,{duration:n=0}=t&&t.video_list&&t.video_list[Object.keys(t.video_list)[0]]||{};return h({identifier:(0,s.Z)(n),size:i})}if(_.isProduct){const t=e.rich_summary&&e.rich_summary.products&&e.rich_summary.products[0]&&e.rich_summary.products[0].offer_summary;if(u){const e=t&&(t.price||t.max_price);return e?h({identifier:e,size:i}):null}if(c){const n=null==t?void 0:t.percentage_off;let o=!1;n&&(o=g("web_pdp_pur_optim").anyEnabled);const s=o&&n||function(e){var i;return((((null===(i=e.rich_summary)||void 0===i?void 0:i.products)||[])[0]||{}).label_info||{}).labels||[]}(e)[0];return s?h({identifier:s,backgroundColor:c,size:i}):null}return null}if(t){const t=e.product_pin_data&&e.product_pin_data.items&&e.product_pin_data.items[0],n=t&&(0,o.Z)(e.images,t.additional_images,e.carousel_data&&e.carousel_data.index)||{},{carousel_slots:s=[],index:r=0}=n;return h({identifier:`${r+1}/${s.length}`,size:i})}if(_.isCarousel){const t=e.carousel_data||{},{carousel_slots:n=[],index:o=0}=t;return h({identifier:`${o+1}/${n.length}`,size:i})}return null}},605028:(e,i,t)=>{t.d(i,{Z:()=>s});var n=t(687551),o=t(623568);function s(e){const{access:i,attribution:t,embed:s,is_eligible_for_web_closeup:r,rich_summary:l,sponsorship:a,story_pin_data_id:d,videos:u}=e,c={isLeadPin:!1,isCarousel:!1,isGif:!1,isOneTap:!1,isOwnPin:!1,isProduct:!1,isPromoted:!1,isRecipe:!1,isSponsored:!1,isStoryPin:!1,isVideo:!1};(0,o._Q)(e)&&(c.isLeadPin=!0),(0,n.Z)(e)&&(c.isCarousel=!0),r&&(c.isOneTap=!0),(0,o.iR)(u)&&(c.isVideo=!0);const h=s||t&&t.embed||null;return h&&"gif"===h.type&&(c.isGif=!0),l&&"product"===l.type_name&&(c.isProduct=!0),l&&"recipe"===l.type_name&&(c.isRecipe=!0),e.promoter&&!e.is_downstream_promotion&&(c.isPromoted=!0),(i||[]).includes("write")&&(c.isOwnPin=!0),d&&(c.isStoryPin=!0),a&&(c.isSponsored=!0),c}},36971:(e,i,t)=>{function n(e,i){const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};return o[e]&&o[e].currentTime}t.d(i,{Z:()=>n})},463045:(e,i,t)=>{function n(e,i){const{organicVideosAutoplaying:t,promotedVideosAutoplaying:n}=i,o={...t,...n};return!!o[e]&&!o[e].paused}t.d(i,{Z:()=>n})},554779:(e,i,t)=>{t.d(i,{Z:()=>o});var n=t(307640);function o(e){return n.zI.includes(e)}},814115:(e,i,t)=>{t.d(i,{Z:()=>m});var n=t(667294),o=t(564194),s=t(834911),r=t(737022),l=t(310227),a=t(802201),d=t(898781),u=t(718482),c=t(883119),h=t(444445),p=t(785893);function g(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}class _ extends n.Component{constructor(...e){super(...e),g(this,"state",{showBadge:!0}),g(this,"renderBadge",(()=>{const{carouselData:e,isCloseup:i,showCarouselBadge:t}=this.props;if(!e)return null;const{showBadge:n}=this.state,{carousel_slots:o,index:s}=e,r=n?.8:0;return!i&&t?(0,p.jsx)(c.xu,{alignItems:"center",color:"selected",display:"flex",height:35,justifyContent:"center",marginEnd:5,marginTop:5,position:"absolute",right:!0,rounding:2,width:35,zIndex:new c.Ry(1),dangerouslySetInlineStyle:{__style:{opacity:r,transition:"opacity .3s"}},children:(0,p.jsx)(c.xv,{color:"inverse",children:`${(null!=s?s:0)+1}/${(null!=o?o:[]).length}`})}):null}))}componentDidMount(){this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)}componentDidUpdate(e){const{showBadge:i}=this.state,{carouselData:t}=e,{carouselData:n}=this.props;if(!t||!n)return;const{index:o}=t,{index:s}=n;i&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.hideBadgeTimeout=setTimeout((()=>this.setState({showBadge:!1})),3e3)),o!==s&&(this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout),this.setState({showBadge:!0}))}componentWillUnmount(){this.hideBadgeTimeout&&clearTimeout(this.hideBadgeTimeout)}render(){const{isCloseup:e,carouselIndex:i,closeupHeight:t,closeupWidth:n=0,widthRatio:s=1,cropHeight:a,cropWidth:d,carouselData:g,disableTransition:_,highResOnly:m,lowResOnly:x,onError:v,onLoad:f,pinId:y,isEditMode:b,isDenseView:w,pin:P}=this.props;if(!g)return null;if(s>1||s<0)throw new Error("widthRatio should be between 0 and 1 inclusive");const{carousel_slots:A=[],index:T=0}=g,C=void 0!==i?i:T,j=!e&&d,{images:V}=A[C];let z;z=e?n:j||(m?474:w?h.Lo:h.yF);const E=Math.floor(z*s),I=(null==V?void 0:V["236x"])||{},S=a||I.height||0,W=d||I.width||236,M=t||S/W*E,O=(e=>{const i=e.reduce(((e,i)=>{var t;const{images:n}=i,{height:o=1,width:s=1}=(null==n?void 0:n["736x"])||(null==n?void 0:n["236x"])||{},r=`${s}x${o}`,l=(null===(t=e[r])||void 0===t?void 0:t.times)||0;return{...e,[r]:{imageHeight:o,imageWidth:s,times:l+1}}}),{}),t=Object.keys(i).reduce(((e,t)=>i[t].times>e.times?i[t]:e),{times:-1,imageHeight:-1,imageWidth:-1});return Object.keys(i).length>1?{imageHeight:t.imageHeight,imageWidth:t.imageWidth}:null})(A);return(0,p.jsxs)(c.xu,{height:M,display:"flex",alignItems:"center",overflow:"hidden","data-test-id":"carousel-pin",minHeight:l.Ml,"data-test-image-signature":null==P?void 0:P.image_signature,children:[!b&&this.renderBadge(),(0,p.jsx)(o.Z,{trackCarousel:!0,impressionType:"Pin",loggingId:y,slotIndex:T,viewParameter:72,viewType:1,children:(0,p.jsx)(c.xu,{position:"absolute",height:M,width:E,overflow:"hidden"})},`carousel-impression-key-${C}`),(0,p.jsx)(c.xu,{width:E*A.length,dangerouslySetInlineStyle:{__style:{transition:_?"":"left .3s",left:(0,u.vF)(A.length,E,z,C)}},left:!0,height:"100%",display:"flex",direction:"row",position:"relative",children:A.map(((i,t)=>{if(e){const e=t===A.length-1;return(({pinId:e,slot:i,slotIndex:t,onError:n,onLoad:o,widthToUse:s,gap:l},a)=>{const{url:d,width:h,height:g}=(0,r.Z)(i.images)||{},{details:_=""}=i,m=(0,u.GH)(_,a,t);return(0,p.jsx)(c.xu,{"data-test-id":"carousel-slot-container",width:s,height:"100%",marginEnd:l,children:(0,p.jsx)(c.zd,{height:"100%",wash:!0,children:(0,p.jsx)(c.Ee,{alt:m,fit:"contain",naturalHeight:null!=g?g:1,naturalWidth:null!=h?h:1,onError:n,onLoad:o,src:null!=d?d:""})})},`carousel-slot-${e}-${t}`)})({pinId:y,slot:i,slotIndex:t,onError:v,onLoad:f,widthToUse:E,gap:E<z&&!e?1:0},this.props.i18n)}return((e,i,t,n,o,s,r,l,a,d,h,g,_,m,x)=>{var v,f,y;const{images:b,details:w=""}=i;let P,A=236,T=236,C="";var j,V,z,E,I,S,W,M;if(o?(A=474,T=b&&Math.min(A/.8,A/((null!==(j=null===(V=b["564x"])||void 0===V?void 0:V.width)&&void 0!==j?j:1)/(null!==(z=null===(E=b["564x"])||void 0===E?void 0:E.height)&&void 0!==z?z:1))),C=b&&(null===(I=b["564x"])||void 0===I?void 0:I.url)):b&&b["736x"]?(T=b&&b["736x"]&&b["736x"].height,A=b&&b["736x"]&&b["736x"].width,C=b&&b["736x"]&&b["736x"].url):b&&b["236x"]&&(T=b&&b["236x"]&&b["236x"].height,A=b&&b["236x"]&&b["236x"].width,C=b&&b["236x"]&&b["236x"].url),_&&m&&(T=Math.min(_*m,null!==(S=T)&&void 0!==S?S:1)),s)P=`${null!==(W=null==b||null===(M=b["236x"])||void 0===M?void 0:M.url)&&void 0!==W?W:""} 1x`;else if(o){var O,L;P=`${null!==(O=null==b||null===(L=b["564x"])||void 0===L?void 0:L.url)&&void 0!==O?O:""} 1x`}else{var R,H,B;P=[(null==b?void 0:b["474x"])&&`${null!==(R=b["474x"].url)&&void 0!==R?R:""} 2x`,(null==b?void 0:b["736x"])&&`${null!==(H=b["736x"].url)&&void 0!==H?H:""} 3x`,(null==b?void 0:b.orig)&&`${null!==(B=b.orig.url)&&void 0!==B?B:""} 4x`].filter(Boolean).join(", ")}const Z=(0,u.GH)(w,e,n),k=g?void 0:T,D=g?void 0:A,$=!!x,{boxHeight:F,boxWidth:G}=$?{boxHeight:null==x?void 0:x.imageHeight,boxWidth:null==x?void 0:x.imageWidth}:{boxHeight:k,boxWidth:D};return(0,p.jsx)(c.xu,{"data-test-id":"carousel-slot-container",height:F,width:G,children:(0,p.jsx)(c.xu,{height:g?h:void 0,width:g||void 0,"data-test-id":`carousel-img-${n}`,children:(0,p.jsx)(c.Ee,{alt:Z,fit:g?"cover":"none",naturalHeight:null!==(v=T)&&void 0!==v?v:1,naturalWidth:null!==(f=A)&&void 0!==f?f:1,onError:r,onLoad:l,src:null!==(y=C)&&void 0!==y?y:"",srcSet:P})})},`carousel-slot-${t}-${n}`)})(this.props.i18n,i,y,t,m,x,v,f,0,0,a,d,M,E,O)}))})]})}}function m(e){const i=(0,d.ZP)(),t=(0,a.S6)()(e.pinId)||e.pin,n=(0,s.Z)({carouselData:null==t?void 0:t.carousel_data,images:null==t?void 0:t.images,richMetadata:null==t?void 0:t.rich_metadata,richSummary:null==t?void 0:t.rich_summary,shouldUnifyImageSizes:!0});return(0,p.jsx)(_,{...e,carouselData:n,i18n:i})}g(_,"defaultProps",{showCarouselBadge:!0})},718482:(e,i,t)=>{t.d(i,{CU:()=>s,GH:()=>a,Iw:()=>l,gA:()=>d,tD:()=>r,vF:()=>u});const n=({containerWidth:e,contentWidth:i,index:t,slotAndGapWidth:o})=>{const s=t-1,r=s*o;return i-r>=e?r:n({index:s,slotAndGapWidth:o,containerWidth:e,contentWidth:i})},o=({containerWidth:e,contentWidth:i,gap:t,index:o,slidesShownPerPosition:s,slotAndGapWidth:r})=>n({containerWidth:e,contentWidth:i,index:o,slotAndGapWidth:r})+(({slidesShownPerPosition:e,slotAndGapWidth:i})=>i-(e-parseInt(e,10))*i)({slidesShownPerPosition:s,slotAndGapWidth:r})-t,s=({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:s})=>{const r=s+i,l=r*n;if(l<=e)return 0;const a=e/r,d=(({index:e,numberOfSlides:i,slidesShownPerPosition:t})=>i-e-Math.floor(t)<1)({index:t,numberOfSlides:n,slidesShownPerPosition:a})?o({containerWidth:e,contentWidth:l,gap:i,index:t,slidesShownPerPosition:a,slotAndGapWidth:r}):t*r;return d?Math.round(-d):0},r=({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:o})=>{const r=(o+i)*n;if(r<=e||0===e)return!0;const l=s({containerWidth:e,gap:i,index:t,numberOfSlides:n,slotWidth:o}),a=r-e;return Math.abs(l)+i>=a},l=({containerWidth:e,currentIndex:i,gap:t,index:n,numberOfSlides:o,slotWidth:r})=>{const l=r+t;if(l*o<=e||0===e)return!0;return s({containerWidth:e,gap:t,index:i,numberOfSlides:o,slotWidth:r})+l*n<e+l},a=(e,i,t)=>e||`${i._('carousel image', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed', 'Alternate text for a carousel image that indicates it is a carousel pin, with carousel index followed')} ${t}`,d=({highResOnly:e,lowResOnly:i,slot:t})=>{var n,o,s;const{images:r}=t;var l,a,d,u;return i?`${null!==(l=null==r||null===(a=r["236x"])||void 0===a?void 0:a.url)&&void 0!==l?l:""} 1x`:e?`${null!==(d=null==r||null===(u=r["564x"])||void 0===u?void 0:u.url)&&void 0!==d?d:""} 1x`:[(null==r?void 0:r["474x"])&&`${null!==(n=r["474x"].url)&&void 0!==n?n:""} 2x`,(null==r?void 0:r["736x"])&&`${null!==(o=r["736x"].url)&&void 0!==o?o:""} 3x`,(null==r?void 0:r.orig)&&`${null!==(s=r.orig.url)&&void 0!==s?s:""} 4x`].filter(Boolean).join(", ")},u=(e,i,t,n,o=0)=>{if(t===i)return n*i*-1;const s=Math.floor(t-i),r=i+o;return n===e-1?-1*n*r+s:-1*n*r}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/34441-410acdc933572516.mjs.map