(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76532],{42238:function(s,i,e){var o;!function(r,t){var a="function",n="undefined",d="object",l="string",w="model",u="name",c="type",b="vendor",m="version",p="architecture",h="console",f="mobile",g="tablet",v="smarttv",x="wearable",k="embedded",y={extend:function(s,i){var e={};for(var o in s)i[o]&&i[o].length%2==0?e[o]=i[o].concat(s[o]):e[o]=s[o];return e},has:function(s,i){return typeof s===l&&-1!==i.toLowerCase().indexOf(s.toLowerCase())},lowerize:function(s){return s.toLowerCase()},major:function(s){return typeof s===l?s.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(s,i){return s=s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===n?s:s.substring(0,255)}},E={rgx:function(s,i){for(var e,o,r,n,l,w,u=0;u<i.length&&!l;){var c=i[u],b=i[u+1];for(e=o=0;e<c.length&&!l;)if(l=c[e++].exec(s))for(r=0;r<b.length;r++)w=l[++o],typeof(n=b[r])===d&&n.length>0?2==n.length?typeof n[1]==a?this[n[0]]=n[1].call(this,w):this[n[0]]=n[1]:3==n.length?typeof n[1]!==a||n[1].exec&&n[1].test?this[n[0]]=w?w.replace(n[1],n[2]):t:this[n[0]]=w?n[1].call(this,w,n[2]):t:4==n.length&&(this[n[0]]=w?n[3].call(this,w.replace(n[1],n[2])):t):this[n]=w||t;u+=2}},str:function(s,i){for(var e in i)if(typeof i[e]===d&&i[e].length>0){for(var o=0;o<i[e].length;o++)if(y.has(i[e][o],s))return"?"===e?t:e}else if(y.has(i[e],s))return"?"===e?t:e;return s}},T={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},S={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[u,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[u,m],[/opios[\/\s]+([\w\.]+)/i],[m,[u,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[m,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,m],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[m,[u,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[m,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[u,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[m,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],m],[/focus\/([\w\.]+)/i],[m,[u,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[m,[u,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[m,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[u,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[m,[u,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[u,m],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[u],[/;fbav\/([\w\.]+);/i],[m,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[u,m],[/\bgsa\/([\w\.]+)\s.*safari\//i],[m,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],m],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[m,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,m],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[m,E.str,T.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],m],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[m,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,y.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[w,[b,"Samsung"],[c,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[w,[b,"Samsung"],[c,f]],[/\((ip(?:hone|od)[\s\w]*);/i],[w,[b,"Apple"],[c,f]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[b,"Apple"],[c,g]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[w,[b,"Huawei"],[c,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[w,[b,"Huawei"],[c,f]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[w,/_/g," "],[b,"Xiaomi"],[c,f]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[w,/_/g," "],[b,"Xiaomi"],[c,g]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[w,[b,"OPPO"],[c,f]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[w,[b,"Vivo"],[c,f]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[w,[b,"Realme"],[c,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[w,[b,"Motorola"],[c,f]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[b,"Motorola"],[c,g]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[w,[b,"LG"],[c,g]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[w,[b,"LG"],[c,f]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[w,[b,"Lenovo"],[c,g]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[w,/_/g," "],[b,"Nokia"],[c,f]],[/droid.+;\s(pixel\sc)[\s)]/i],[w,[b,"Google"],[c,g]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[w,[b,"Google"],[c,f]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[b,"Sony"],[c,f]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[w,"Xperia Tablet"],[b,"Sony"],[c,g]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[w,[b,"OnePlus"],[c,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[w,[b,"Amazon"],[c,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[w,"Fire Phone"],[b,"Amazon"],[c,f]],[/\((playbook);[\w\s\),;-]+(rim)/i],[w,b,[c,g]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[w,[b,"BlackBerry"],[c,f]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[w,[b,"ASUS"],[c,g]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[w,[b,"ASUS"],[c,f]],[/(nexus\s9)/i],[w,[b,"HTC"],[c,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[w,/_/g," "],[c,f]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[w,[b,"Acer"],[c,g]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[w,[b,"Meizu"],[c,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,w,[c,f]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[b,w,[c,g]],[/\s(surface\sduo)\s/i],[w,[b,"Microsoft"],[c,g]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[w,[b,"Fairphone"],[c,f]],[/\s(u304aa)\sbuild/i],[w,[b,"AT&T"],[c,f]],[/sie-(\w*)/i],[w,[b,"Siemens"],[c,f]],[/[;\/]\s?(rct\w+)\sbuild/i],[w,[b,"RCA"],[c,g]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[w,[b,"Dell"],[c,g]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[w,[b,"Verizon"],[c,g]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[w,[b,"Barnes & Noble"],[c,g]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[w,[b,"NuVision"],[c,g]],[/;\s(k88)\sbuild/i],[w,[b,"ZTE"],[c,g]],[/;\s(nx\d{3}j)\sbuild/i],[w,[b,"ZTE"],[c,f]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[w,[b,"Swiss"],[c,f]],[/[;\/]\s?(zur\d{3})\sbuild/i],[w,[b,"Swiss"],[c,g]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[w,[b,"Zeki"],[c,g]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[b,"Dragon Touch"],w,[c,g]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[w,[b,"Insignia"],[c,g]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[w,[b,"NextBook"],[c,g]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[b,"Voice"],w,[c,f]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[b,"LvTel"],w,[c,f]],[/;\s(ph-1)\s/i],[w,[b,"Essential"],[c,f]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[w,[b,"Envizen"],[c,g]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[w,[b,"MachSpeed"],[c,g]],[/[;\/]\s?tu_(1491)\sbuild/i],[w,[b,"Rotor"],[c,g]],[/(shield[\w\s]+)\sbuild/i],[w,[b,"Nvidia"],[c,g]],[/(sprint)\s(\w+)/i],[b,w,[c,f]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[b,"Microsoft"],[c,f]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[b,"Zebra"],[c,g]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[b,"Zebra"],[c,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[b,w,[c,h]],[/droid.+;\s(shield)\sbuild/i],[w,[b,"Nvidia"],[c,h]],[/(playstation\s[345portablevi]+)/i],[w,[b,"Sony"],[c,h]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[w,[b,"Microsoft"],[c,h]],[/smart-tv.+(samsung)/i],[b,[c,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[b,"Samsung"],[c,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[b,"LG"],[c,v]],[/(apple)\s?tv/i],[b,[w,"Apple TV"],[c,v]],[/crkey/i],[[w,"Chromecast"],[b,"Google"],[c,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[w,[b,"Amazon"],[c,v]],[/\(dtv[\);].+(aquos)/i],[w,[b,"Sharp"],[c,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,y.trim],[w,y.trim],[c,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[c,v]],[/((pebble))app\/[\d\.]+\s/i],[b,w,[c,x]],[/droid.+;\s(glass)\s\d/i],[w,[b,"Google"],[c,x]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[w,[b,"Zebra"],[c,x]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[b,[c,k]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[w,[c,f]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[w,[c,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[b,"Generic"]],[/(phone)/i],[[c,f]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[u,[m,E.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[m,E.str,T.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[u,m],[/\(bb(10);/i],[m,[u,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[m,[u,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[u,m],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],m],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,m]]},_=function(s,i){if("object"==typeof s&&(i=s,s=t),!(this instanceof _))return new _(s,i).getResult();var e=s||(void 0!==r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=i?y.extend(S,i):S;return this.getBrowser=function(){var s={name:t,version:t};return E.rgx.call(s,e,o.browser),s.major=y.major(s.version),s},this.getCPU=function(){var s={architecture:t};return E.rgx.call(s,e,o.cpu),s},this.getDevice=function(){var s={vendor:t,model:t,type:t};return E.rgx.call(s,e,o.device),s},this.getEngine=function(){var s={name:t,version:t};return E.rgx.call(s,e,o.engine),s},this.getOS=function(){var s={name:t,version:t};return E.rgx.call(s,e,o.os),s},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(s){return e=typeof s===l&&s.length>255?y.trim(s,255):s,this},this.setUA(e),this};_.VERSION="0.7.28",_.BROWSER={NAME:u,MAJOR:"major",VERSION:m},_.CPU={ARCHITECTURE:p},_.DEVICE={MODEL:w,VENDOR:b,TYPE:c,CONSOLE:h,MOBILE:f,SMARTTV:v,TABLET:g,WEARABLE:x,EMBEDDED:k},_.ENGINE={NAME:u,VERSION:m},_.OS={NAME:u,VERSION:m},typeof i!==n?(s.exports&&(i=s.exports=_),i.UAParser=_):(o=function(){return _}.call(i,e,i,s))===t||(s.exports=o);var A=void 0!==r&&(r.jQuery||r.Zepto);if(A&&!A.ua){var N=new _;A.ua=N.getResult(),A.ua.get=function(){return N.getUA()},A.ua.set=function(s){N.setUA(s);var i=N.getResult();for(var e in i)A.ua[e]=i[e]}}}("object"==typeof window?window:this)},176532:(s,i,e)=>{function o({async:s,data:i,headers:e,timeout:o,type:r,updateProgress:t,url:a}){let n=!1;return{promise:new Promise(((t,d)=>{const l=o?setTimeout((()=>{n="timeout",d({type:"timeout"})}),o):void 0;fetch(a,{method:r,credentials:"include",mode:"same-origin",keepalive:!s,headers:e,...i?{body:i}:{}}).then((s=>{l&&clearTimeout(l),n?"timeout"!==n&&d({type:"abort"}):t({status:s.status,statusText:s.statusText,ok:s.status>=200&&s.status<300||304===s.status,headers:{get:i=>s.headers.get(i),_logString:()=>{const i=[];for(const[e,o]of s.headers.entries())i.push(`${e}: ${o}\r\n`);return i.join("")}},json:()=>s.json().then((s=>s instanceof Object?s:Promise.reject(new Error("JSON.parse did not return an object"))))})})).catch((()=>Promise.reject({type:"timeout"})))})),abort:()=>{n="manual"}}}e.d(i,{Z:()=>c});var r=e(635240);const t=(...s)=>{};function a({async:s,data:i,headers:e,timeout:o,type:r,updateProgress:a,url:n}){const d=new XMLHttpRequest;return{promise:new Promise(((l,w)=>{const u=o?setTimeout((()=>{d.onreadystatechange=t,d.abort(),w({type:"timeout"})}),o):void 0;d.onreadystatechange=()=>{if(4===d.readyState){d.onreadystatechange=t,clearTimeout(u);const s=d.status,i=d.statusText,e=d.responseText;if(!s)return void w({type:"abort"});l({status:s,statusText:i,ok:s>=200&&s<300||304===s,headers:{get:s=>d.getResponseHeader(s),_logString:()=>d.getAllResponseHeaders()},json:()=>new Promise(((s,i)=>{try{const o=JSON.parse(e);o instanceof Object?s(o):i(new Error("JSON.parse did not return an object"))}catch(o){i(o)}})),responseText:e})}},a&&d.upload.addEventListener("progress",(s=>{let i=null;s.lengthComputable&&(i=s.loaded/s.total*100),a(i)})),d.open(r,n,s),Object.keys(e).forEach((s=>{d.setRequestHeader(s,e[s])})),d.send(i||null)})),abort:()=>{d&&d.abort()}}}var n=e(42238),d=e.n(n);const l=s=>{if((s=>{const i=s.match(/\s+chrome\/(\d+)\./i);return!!i&&parseInt(i[1],10)>=79})(s))return!0;const{name:i="",version:e=""}=d()(s).browser,o=parseInt(e.replace(/\..*/,""),10)||0;return"chrome"===i.toLowerCase()&&o>=79};var w=e(826067),u=e(628551);function c(s){const i={async:!0,cache:!1,data:void 0,headers:{},query:{},timeout:0,type:"GET",...s};let{url:e,data:t}=i;const n=i.type;t&&"object"==typeof t&&("GET"===n?(e=(0,w.ru)(e,t),t=void 0):t instanceof FormData||(t=(0,w.XP)(t))),!1===i.cache&&"GET"===n&&(e=(0,w.ru)(e,{_:Date.now()}));const d=(0,u.needsCsrfToken)(n,e);if(d&&!(0,u.getCsrfToken)())return{promise:Promise.reject({type:"csrferror",message:"No csrf token found"}),abort:()=>{}};return(!i.async&&"keepalive"in new Request("")&&l(window.navigator.userAgent||"")?o:a)({...i,url:e,data:t,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json, text/javascript, */*, q=0.01","X-APP-VERSION":(0,r.Z)(),..."GET"===n||!t||t instanceof FormData?{}:{"Content-Type":"application/x-www-form-urlencoded"},...d?{"X-CSRFToken":(0,u.getCsrfToken)()||""}:{},...i.headers}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76532-b355d52d50b0718b.mjs.map