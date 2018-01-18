(function(window){var svgSprite='<svg><symbol id="icon-shanchulajixiang" viewBox="0 0 1024 1024"><path d="M972.8 209.408c14.336 0 26.112-11.776 26.112-26.112s-11.776-26.624-26.112-26.624l-940.032-1.536c-14.336 0-26.112 11.776-26.112 26.112s11.776 26.624 26.112 26.624l940.032 1.536z m-792.576 782.848v26.624l26.624-0.512 626.176-6.656 26.112-0.512V288.768c0-14.336-11.776-26.624-26.112-26.624s-26.112 11.776-26.112 26.624v696.32l26.112-26.624-626.176 6.656 26.624 26.624V282.624c0-14.336-11.776-26.624-26.112-26.624s-26.112 11.776-26.112 26.624v709.632z m476.16-145.408c0 14.336 11.776 26.624 26.112 26.624s26.112-11.776 26.112-26.624v-475.136c0-14.336-11.776-26.624-26.112-26.624s-26.112 11.776-26.112 26.624v475.136z m-314.88 0c0 14.336 11.776 26.624 26.112 26.624s26.112-11.776 26.112-26.624v-475.136c0-14.336-11.776-26.624-26.112-26.624s-26.112 11.776-26.112 26.624v475.136z m157.184 0c0 14.336 11.776 26.624 26.112 26.624s26.112-11.776 26.112-26.624v-475.136c0-14.336-11.776-26.624-26.112-26.624s-26.112 11.776-26.112 26.624v475.136z m-106.496-730.112c0-14.848 11.776-26.112 26.112-26.112h204.288c14.336 0 26.112 11.776 26.112 26.112v55.296h52.736v-55.296c0-43.52-35.328-78.848-78.848-78.848h-204.288c-43.52 0-78.848 35.328-78.848 79.36v48.64h52.736v-49.152z" fill="" ></path></symbol><symbol id="icon-wujiaoxing-shixin" viewBox="0 0 1077 1024"><path d="M823.349895 656.653474c12.180211 57.236211 22.905263 109.082947 32.229052 155.486315 4.311579 19.509895 8.192 39.127579 11.802948 58.691369 3.557053 19.509895 7.006316 37.295158 10.186105 53.248 3.233684 15.952842 5.928421 29.534316 8.084211 40.798316 2.155789 11.317895 3.557053 18.324211 4.311578 21.180631 2.155789 14.497684-1.077895 24.090947-9.701052 28.833684a59.284211 59.284211 0 0 1-28.941474 7.114106 49.744842 49.744842 0 0 1-15.629474-3.826527 431.319579 431.319579 0 0 1-15.521684-6.03621l-280.414316-165.241263a9220.042105 9220.042105 0 0 1-191.757473 112.047158c-17.569684 10.078316-33.414737 19.509895-47.804632 28.240842-14.336 8.677053-26.731789 15.952842-37.079579 21.773473a223.016421 223.016421 0 0 1-21.018947 10.832843 36.163368 36.163368 0 0 1-21.989053 3.826526 46.295579 46.295579 0 0 1-20.426105-8.084211 40.205474 40.205474 0 0 1-13.419789-15.845052 29.103158 29.103158 0 0 1-2.15579-19.024842l5.389474-21.180632c2.856421-11.210105 6.090105-24.683789 9.701052-40.259368 3.557053-15.575579 7.653053-32.768 12.288-51.631158 4.688842-18.863158 9.539368-38.049684 14.551579-57.667369 10.671158-44.948211 22.905263-95.609263 36.486737-152.198737a20172.368842 20172.368842 0 0 0-156.294737-135.383579 4067.974737 4067.974737 0 0 1-37.618526-32.552421 3946.873263 3946.873263 0 0 0-39.181474-34.223157 133.389474 133.389474 0 0 1-22.096842-26.677895 43.654737 43.654737 0 0 1-6.898526-29.911579 38.103579 38.103579 0 0 1 11.802947-23.875369 43.439158 43.439158 0 0 1 21.557895-10.886736l331.883789-30.450527L489.202526 42.415158c4.311579-11.587368 10.401684-21.557895 18.270316-29.911579C515.341474 4.149895 526.012632 0 539.701895 0c7.168 0 13.419789 1.616842 18.863158 4.904421 5.389474 3.287579 9.808842 7.114105 13.365894 11.425684 3.557053 4.365474 6.629053 8.623158 9.108211 13.042527 2.479158 4.365474 4.473263 7.976421 5.928421 10.886736l120.293053 291.301053 331.991579 31.582316c14.282105 3.610947 24.360421 7.976421 30.073263 13.042526 5.712842 5.066105 8.569263 13.042526 8.569263 23.929263a41.391158 41.391158 0 0 1-9.108211 26.624c-6.090105 7.653053-13.743158 16.869053-23.066947 27.701895l-222.369684 202.213053" fill="#FFC113" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)