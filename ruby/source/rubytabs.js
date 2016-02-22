/**
 * RUBYTABS JQUERY PLUGIN
 * @package         RubyTabs
 * @author          HaiBach
 * @link            http://
 * @version         1.02
 */


;(function($) {
'use strict';


/**
 * KHOI TAO CAC BIEN GLOBAL
 * ========================================================================== */
if( !window.rt01MODULE ) window.rt01MODULE = {};
if( !window.rt01VA ) {

    window.rt01VA = {
        'codeName'  : 'rubytabs',
        'codeData'  : 'tabs',
        'namespace' : 'rt01'
    };

    /**
     * OPTIONS DEFAULTS
     */
    rt01VA.optsDefault = {
        'tagCanvas'     : 'div',
        'nameCanvas'    : 'canvas',
        'nameViewport'  : 'viewport',
        'nameSlide'     : 'slide',
        'nameImageBack' : 'imgback',
        'nameImageLazy' : 'img',
        'nameNav'       : 'nav',
        'namePag'       : 'pag',
        'nameCap'       : 'cap',
        'nameNext'      : 'nav-next',
        'namePrev'      : 'nav-prev',
        'namePlay'      : 'playpause',
        'nameTimer'     : 'timer',
        'nameLayer'     : 'layer',
        'nameOverlay'   : 'overlay',
        'nameDataSlide' : 'slide',
        'nameDataLazy'  : 'src',

        'name'          : null,                         // Use for search DOM outer Code
        'current'       : 'cur',
        'thumbWrap'     : 'thumbitem',
        'actived'       : 'actived',
        'deactived'     : 'deactived',

        // Setting type of elements
        'optionsPlus'   : 'tabs',                       // Options cong vao`, bao gom value ['tabs', 'slider']
        'layout'        : 'line',                       // line, dot, dash, free
        'fx'            : 'line',                       // fade, move, rectMove...
        'fxEasing'      : 'easeOutCubic',               // Easing cho hieu ung chinh
        'cssOne'        : 'roDeal',                     // Hieu ung bang css one bao gom slide out va slide in
        'cssTwoOut'     : 'slideShortDownOut',          // Hieu ung bang css cho slide out
        'cssTwoIn'      : 'pushSoftIn',                 // Hieu ung bang css cho slide in
        'cssThreePrev'  : 'pullIn',
        'cssThreeNext'  : 'pushIn',
        'cssEasing'     : null,
        'imagePosition' : 'center',                     // Vi tri cua Image back : ['center', 'fill', 'fit', 'stretch', 'tile']
        'direction'     : 'hor',                        // Swipe direction, defalut is horizontal, value ['hor', 'ver']

        // Setting with number or mix value
        'width'         : null,
        'height'        : null,
        'speed'         : 400,
        'speedHeight'   : 400,
        'layerSpeed'    : 400,
        'layerStart'    : 400,
        'perspective'   : 800,                          // Support for layer
        'slot'          : 'auto',                       // 'auto' || number
        'stepNav'       : 1,                            // 'visible' || number 1 -> n
        'stepPlay'      : 1,
        'widthRange'    : null,                         // Width cua Code trong khoang [from-to] : [width, wMin, wMax]
        'padding'       : 0,                            // padding default: 0, included padding-left, padding-right, padding range value
        'margin'        : 30,                           // margin default: 0, included margin-left, margin-right, margin range value
        'widthSlide'    : 1,                            // Width value of Slide in direction Horizontal, included range value, unit -> ['width', 'from', 'to']
        'heightSlide'   : 1,                            // Height value of Slide in direction Vertical, include range value
        'idBegin'       : 0,                            // ID cua Slide de hien thi dau tien khi khoi tao xong Code :  ['begin', 'center', 'end', 1234...]
        'showBy'        : 'all',                        // ['all', 'desktop', 'mobile']
        'showInRange'   : 0,
        'offsetBy'      : null,                         // Fullscreen options: offset by container, included offset-top & offset-bottom,
        'wheel'         : 'auto',                       // Event Wheel, gom cac options ['auto', 'both', false]

        // Setting with boolean value
        'isCenter'      : true,
        'isNav'         : false,
        'isPag'         : true,
        'isCap'         : false,
        'isLayerRaUp'   : true,
        'isSlideshow'   : false,
        'isSwipe'       : true,
        'isLoop'        : true,
        'isAnimRebound' : true,
        'isKeyboard'    : false,
        'isOverlay'     : false,
        'isViewGrabStop': false,
        'isFullscreen'  : false,
        'isDeeplinking' : false,
        'isCookie'      : false,

        // Setting with object value
        'load'          : { 'preload'       : 1,                // Number slide preload -> show cs; [type number, 'all']
                            'amountEachLoad': 2,
                            'isLazy'        : true             // Tinh nang lazyload
                          },

        'swipe'         : { 'isBody'        : true,             // Turn off swipe on body
                            'isAutoOnPag'   : true,             // Tu dong dangki hoac loaibo swipe gestures tren pagination
                            'easing'        : 'easeOutQuint'    // Easing cho transition sau khi swipe roi khoi
                          },

        'className'     : { 'grab'          : ['grab', 'grabbing'],
                            'swipe'         : ['', 'swiping'],
                            'stop'          : ['stopLeft', 'stopRight']
                          },

        // Fx to Random Fx Math : 'randomMath'
        'fxMathName'    : ['rectMove', 'rectRun', 'rectSlice',
                           'rubyFade', 'rubyMove', 'rubyRun', 'rubyScale',
                           'zigzagRun'
                          ],

        'pag'           : { 'type'          : 'tabs',           // ['tabs', 'thumbnail', bullet', 'list']
                            'width'         : null,
                            'height'        : null,
                            'minWidth'      : null,
                            'minHeight'     : null,
                            'maxWidth'      : null,
                            'maxHeight'     : null,
                            'direction'     : 'hor',            // ['hor', 'ver']
                            'position'      : 'begin',          // ['begin', 'end']
                            'align'         : 'begin',          // ['begin', 'center', 'end', 'justify']
                            'speed'         : 300,
                            'easing'        : 'easeOutCubic',

                            /**
                             * Support options: 
                             *  + null   --> none setup, width or height pagination depend on css
                             *  + 'full' --> width or height == Code. depend on direction 'hor' or 'ver'
                             *  + 'self' --> width or height == all width/height PagItems
                             */
                            'sizeAuto'      : 'full',
                            'typeSizeItem'  : 'self',           // Setup tat ca item the kich thuoc [max, min, self]
                            /**
                             * Lam cho Pag Item current vi tri chi'nh giua khi tap len item current
                             * Chi ap du.ng cho Tabs Hor, Tabs Ver luon luon co ItemCur o vi tri chi'nh giua
                             */
                            'isItemCurCenterWhenTap' : true,
                            'isJustifyWhenLarge'     : false,   // Kich thuoc tat ca items deu fit lai bang kich thuoc voi pagination
                            'isArrow'       : true,             // Hien thi mui ten dieu khien
                            'isTapOnArrow'  : true,             // Dangki-Huybo event tap tren arrow
                            'isMark'        : false,            // Ki hieu Pag Item Current
                            'sizeMarkTo'    : 'border',         // Loai kich thuoc cua Pag Mark - [self, padding, border, margin]
                            'moreClass'     : null,             // Adding class into pagination
                            'widthMinToHor' : 0,
                            'rangeMinToHor' : 0,                // Tu dong chuyen sang huong 'hor' khi chieu rong cua Document nho hon gia tri
                            'wheel'         : 'auto'            // Event Wheel cho Pagination, bao gom ['auto', 'both', false]
                          },

        'video'         : { 'height'        : 480 },

        'slideshow'     : { 'delay'         : 8000,
                            'timer'         : 'arc',            // [line, arc]
                            'isAutoRun'     : true,             // only actived false when have playpause button
                            'isPlayPause'   : true,
                            'isTimer'       : true,             // Timer only turn on when slideshow on
                            'isLoop'        : true,
                            'isHoverPause'  : false,
                            'isRunInto'     : false,            // Chi slideshow khi Code o tren vu`ng hien thi
                            'isRandom'      : false
                          },

        'timerArc'      : { 'width'         : null,
                            'height'        : null,
                            'fps'           : 30,
                            'rotate'        : 0,

                            'radius'        : 14,
                            'weight'        : 4,
                            'stroke'        : 'hsla(0,0%,0%,.6)',
                            'fill'          : 'transparent',

                            'radiusOuter'   : 14,
                            'weightOuter'   : 2,
                            'strokeOuter'   : 'hsla(0,0%,0%,.1)',
                            'fillOuter'     : 'transparent'
                          },

        'markup'        : { 'loader'        : '<div class="{ns}loader"><svg class="{ns}loader-circular"><circle class="{ns}loader-path" cx="50%" cy="50%" r="20" fill="none" stroke-width="4" stroke-miterlimit="15"/></svg></div>',
                            'nav'           : '<div class="{ns}nav"><div class="{ns}nav-prev">prev</div><div class="{ns}nav-next">next</div></div>',

                            // Options co gia gia tri bao gom ['code', 'viewport', 'nav', 'control']
                            'navInto'       : 'viewport',
                            'pagInto'       : 'code',
                            'controlInto'     : 'code',
                            'timerInto'     : 'control',
                            'playInto'      : 'control'},

        'deeplinking'   : { 'prefixDefault' : ['ruby', 'slide'],
                            'prefix'        : null,             // Prefix custom cho code, ket hop ca prefix-code va prefix-slide
                            'isIDConvert'   : true,             // Tu dong chuyen sang id-dom tren hash thay vi 'codeID_slideID'
                            'isOnlyShowID'  : true
                          },

        'cookie'        : { 'name'          : '',
                            'days'          : 7
                          },

        // Options danh rieng cho thiet bi mobile
        'mobile'        : {
            'speedHeight'   : null,
            'direction'     : 'hor'
        },

        // Options danh rieng cho nhung browser khong ho tro transition
        'fallback'      : {
            'markup'    : { 'loader' : '<div class="{ns}loader {ns}loader-old">loading</div>' }
        },


        // Tool for developer
        'isAutoInit'    : false,
        'isPosReport'   : false,
        'rev'           : ['erp']           // ['omed', 'moc.oidutsyht'], 'eerf'
    };



    /**
     * OPTIONS DEFAULT PLUS
     */
    rt01VA.optsPlus = {
        
        /**
         * OPTIONS PLUS MAC DINH CHO TABS
         */
        'tabs' : {},
        
        /**
         * OPTIONS PLUS MAC DINH CHO SLIDER
         */
        'slider' : {
            'margin'    : 0,
            'load'      : { 'isLazy'    : false },
            'pag'       : { 'type'      : 'thumbnail',
                            'position'  : 'end',
                            'align'     : 'center' },

            'coverflow' : { 'perspective' : 800,
                            'space'       : 50,
                            'rotate'      : 75 },

            'scale'     : { 'intensity' : 50 }
        },

        /**
         * OPTIONS PLUS MAC DINH CHO CAROUSEL
         */
        'carousel' : {
            'fx'         : 'line',
            'speed'      : 600,
            'widthSlide' : 300,
            'margin'     : 15,

            'isCenter'   : false,
            'isLoop'     : false,
            'isPag'      : false,
            'isNav'      : true,

            'load'       : { 'isLazy': false }
        }
    };
}
    


/* CODE MAIN SETUP
 * ========================================================================== */
$[rt01VA.codeName] = function($code, OptsJS) {

    /**
     * VARIBLES GLOBAL
     */
    var cs  = {},
        va  = { 
            $self   : $code,                                // Luu tru code
            codekey : Math.ceil( Math.random()*1e9 ),       // Codekey for codetab --> tranh xung dot multi code
            ns      : rt01VA.namespace
        },
        is  = {},
        ti  = {},
        
        $w = $(window), $doc = $(document),
        $canvas, $viewport, $control, $thumbItem,

        num, cssTf, cssTs, cssT, cssAT, i, j,
        divdiv = '<div/>';


    var o   = {},       // Bien o : merge tat ca cac options Data, JS, Defaults
        oo  = {},       // Bien oo : luu tru cac options luc ban dau

        // Bien one : dung de ho tro module
        one = { 'cs': cs, 'o': o, 'oo': oo, 'va': va, 'is': is, 'ti': ti };

    
    /**
     * INIT METHODS
     */
    var INIT = {

        check : function() {
            
            M.browser();                            // Browser detect --> nam o tren phuc vu cho proto.ajax
            M.cssName();                            // CSS: get prefixed css style
            M.setupBegin();                         // Setup bien dau tien ki init Code

            cs.ev.trigger('init');                  // Callback event begin init

            // Kiem tra phien ban
            if( NOISREV.check() ) {

                // // Kiem tra ajax image load
                // if( o.flickr.photosetID ) flickr.photoset();

                // // Kiem tra Code co doi tuong con hay khong
                // else INIT.pre();


                /**
                 * KIEM TRA TIEP THEO
                 *  + Kiem tra ben trong Code co' noi dung hay khong
                 */
                if( $code.children().length ) {
                    if( is.SHOW ){
                        SHOW.setupInit();
                    }
                    else {

                        // Setup bien de Code luon hien thi khi khong co Module
                        is.showInRange = is.wake = true;
                        INIT.ready();
                    }
                }
            }
            else $code.remove();
        },


        ready : function() {
            cs.ev.trigger('ready');                             // Event trigger 'ready'
            RENDER.structure();                                 // Code: create Canvas
            PROP.code();                                        // Code: get properties
                                                                // --> o tren PAG.renderSelf vi can thuoc tinh is.pag truoc
            is.playpause && !va.$playpause
            && SLIDESHOW.renderPlayPause();                     // Code: render playpause
            is.TIMER && TIMER.render();                         // Code: render Timer

            is.pag && PAG.renderSelf();                         // Code: render Pagnation
            is.nav && NAV.render();                             // Code: render Navigation
            is.cap && CAPTION.render();                         // Code: render Caption

            PROP.slides();                                      // Slide: properties, below PAG.renderSelf() --> can $pagItem dinh nghia truoc
            RENDER.other();                                     // Code: render other elements

            PROP.deepLinkCookie();                              // Ho tro doc deeplinking va cookie luc dau --> can co va.IDsOnDom truoc

            LOAD.way();                                         // Setup thu tu ID de load truoc sau, o duoi 'PROP.slide' de kiem load ajax
            LOAD.next();                                        // Loading slide dau tien
        },


        load : function() {
            is.initLoaded = true;                               // Bien luu gia tri Code da show
            cs.ev.trigger('loaded');                            // Event trigger 'loaded'

            is.pag && !is.pagList && PAG.typeSizeItem();        // Ho tro cho fn ben duoi 'UPDATE.general()' va vi tri tabs-vertical luc dau

            is.res && is.fullscreen && FULLSCREEN.varible();    // Fullscreen: re calculation padding & va.rate, nead
            UPDATE.general();                                   // Slide: Setup other elements (can` height Code neu huong la 'vertical')

            // cs.idCur == 0 && cs.ev.trigger('start');            // Event start
            // M.toggleSlide();                                    // First-item: add Actived

            EVENTS.setup();                                     // Sap xep va setup cac Events trong Code

            // Them timer cho Slideshow -> Fixed IE luc bat dau : lay duoc gia tri scrollTop khong chinh xac.
            setTimeout(function() {
                is.slideshow && SLIDESHOW.init();
            }, 400);

            M.setupEnd();                                       // Setup nhung thu con lai sau init end
            is.initEnd = true;                                  // Thong bao da~ khoi tao ket thuc

            // Setup khi da~ loaded tat ca hinh anh
            EVENTS.loadAll();
        }
    },







    /**
     * SMALL MEDTHODS
     */
    M = {
 
        /**
         * SETUP DAU TIEN CAC BIEN TRONG CODE
         */
        setupBegin : function() {

            /**
             * MERGE TAT CAT MODULES VOI NHAU
             */
            PROP.mergeAllModules();


            /**
             * MERGE CAC OPTIONS LAI VOI NHAU
             */
            PROP.mergeAllOpts();


            /**
             * MERGE CAC FUNCTION VAO BIEN TOAN CUC
             *  + Gop chung APIBASE va API vao 'cs'
             *  + Luu tru bien 'cs' tren doi tuong Code
             */
            cs.one = one;
            cs = $.extend(true, cs, API, APIMORE);
            $.data($code[0], rt01VA.codeName, cs);



            /**
             * SETUP ID CUA CODE
             *  + Ho tro nhan biet nhieu` code trong page
             *  + va.codeID: chi so id cua Code rieng biet
             *  + rt01VA.one[num]: luu tru tat ca bien trong Code rieng biet
             */
            var
            codeID = rt01VA.num;
            codeID = (codeID === undefined) ? 0 : codeID + 1;

            va.codeID = rt01VA.num = codeID;
            rt01VA['one'+ codeID] = one;



            /**
             * SETUP CAC GIA TRI BAN DAU
             */
            va.ns = rt01VA.namespace;

            // id timer cua tat ca layer --> loai bo 1 luc tat ca de dang
            ti.layer = [];

            // Su dung cho slideshow co video va map --> tat ca video phai dong thi slideshow tiep tuc duoc
            va.nVideoOpen = va.nMapOpen = 0;

            // Mac dinh mo khoa event Tap
            is.tapEnable = true;

            // Ten hieu ung --> ho tro toggle class hieu ung
            va.fxLast = va.fxCur = 'none';

            // Them class khac nhau vao Code tuy theo moi slide
            va.classAdd = [];

            // Bien actived va deactived
            va.actived   = va.ns + o.actived;
            va.deactived = va.ns + o.deactived;

            // Bien ho tro Update Toan bo Code - bo sung them thong tin
            // Bien se~ reset null khi de'n phan cuoi API.prop()
            va.addInfo = null;



            /**
             * HO TRO FUNCTION MA BROWSER CU~ KHONG CO
             */
            if( !!rt01MODULE.OLD ) {
                !Array.prototype.indexOf && OLD.arrayIndex();
                !String.prototype.replaceAt && OLD.replaceAt();
            }
        },

        /**
         * SETUP CAC THUOC TINH CON LAI KHI KET THUC INIT
         */
        setupEnd : function() {

            // Fixed cho IE7 khong tinh toan chinh xac' kich thuoc pagination
            !is.ts && setTimeout(UPDATE.resize, 50);
        },




        /**
         * BROWSER DETECT VA KIEM TRA CAC THUOC TINH HO TRO HTML5 + CSS3
         */
        browser : function() {

            // Bien shortcut va khoi tao ban dau
            var navAgent = navigator.userAgent;
                navAgentAll = navAgent || navigator.vender || window

            is.ie = /*@cc_on!@*/false || document.documentMode;     // At least IE6
            is.safari = /Constructor/i.test(Object.prototype.toString.call(window.HTMLElement));
            is.opera = !!window.opera || /\sOPR\//i.test(navAgent);
            is.chrome = !!window.chrome && !is.opera;               // Chrome 1+
            is.firefox = window.InstallTrigger !== undefined;

            // Kiem tra ie11 --> ie11 khong ho tro 'conditional compilation' nua
            is.ie11 = !!(is.ie && !new Function('/*@cc_on return @_jscript_version; @*/')());
            is.ie7  = !!(is.ie && /MSIE\s7\./i.test(navAgent));

            
            // Ten cua browser - neu khong tim dc tra ve undefined
            var browser = ['ie', 'safari', 'opera', 'chrome', 'firefox'];
            for( i = browser.length; i >= 0; i-- ) {
                if( !!is[browser[i]] ) { is.browser = browser[i]; break; }
            }

            // Kiem tra browser ho tro 'console'
            is.console = typeof console === 'object';

            // Kiem tra browser co ho tro html5.canvas
            is.canvas2d = (function() {
                var el = document.createElement('canvas');
                return !!(el.getContext && el.getContext('2d'));
            }());

            // Kiem tra browser co ho tro touch event
            // Loai bo 'is.msGesture' --> khong chinh xac va khong can thiet, thay the bang 'is.evPoinerAll'
            // is.msGesture = !!(window.navigator && window.navigator.msPointerEnabled) || !!window.MSGesture;
            is.evPointer = !!window.PointerEvent;
            is.evMSPointer = !!window.MSPointerEvent;
            is.evPointerAll = is.evPointer || is.evMSPointer;
            is.evSwipe = !!(("ontouchstart" in window) || (window.DocumentTouch && document instanceof DocumentTouch));
            is.swipeSupport = is.evSwipe || is.evPointer || is.evMSPointer;

            // Kiem tra co phai mobile, dua tren 3 yeu to:
            // + Ho tro touch/pointer events
            // + Ho tro huong xoay "orientation" --> tren mobile simular khong ho tro
            // + UserAgent thuoc cac loai trinh duyen thong dung hien nay "Android|webOS|iPhone|iPad ...."
            // + Su dung ma~ kiem tra dua tren trang "detectmobilebrowsers.com"
            var navAgentAll = navAgent || navigator.vender || window.opera;
            is.mobile = is.swipeSupport &&
            ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navAgentAll) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navAgentAll.substr(0, 4)) );

            // Kiem tra co phai Android native browser(khac Chrome) va version < 4.4
            is.androidNative = is.mobile && /Mozilla\/5\.0/i.test(navAgent) && /Android/i.test(navAgent)
                                         && /AppleWebKit/i.test(navAgent) && !(/Chrome/i.test(navAgent))
                                         && !(/Android\s+4\.4/i.test(navAgent));
            // Kiem tra iOS
            // is.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


            // Setup ten cua tat ca loai event
            var suffix    = '.'+ va.ns + va.codekey,
                swipeName = ['', '', ''];
            
            if     ( is.evSwipe )     swipeName = ['touchstart', 'touchmove', 'touchend'];
            else if( is.evPointer )   swipeName = ['pointerdown', 'pointermove', 'pointerup'];
            else if( is.evMSPointer ) swipeName = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];

            va.ev = {
                click   : 'click'     + suffix,
                drag    : 'dragstart' + suffix +' selectstart'+ suffix,         // 'selectstart' --> ho tro IE7-8
                resize  : 'resize'    + suffix,
                scroll  : 'scroll'    + suffix,
                key     : 'keyup'     + suffix,
                hash    : 'hashchange'+ suffix,

                swipe   : {
                    start : swipeName[0] + suffix,
                    move  : swipeName[1] + suffix,
                    end   : swipeName[2] + suffix,
                    type  : 'swipe' },

                mouse   : {
                    start : 'mousedown'+ suffix,
                    move  : 'mousemove'+ suffix,
                    end   : 'mouseup'  + suffix,
                    type  : 'mouse' }
            };

            // Neu khong co event Touch thi reset doi tuong ev.touch
            // --> khong xung dot khi dang ky chuoi voi chuoi '.code12345'
            if( swipeName[0] == '' ) va.ev.swipe = { start: '', move: '', end: '', type: 'swipe' };
            // Loai bo Mouse event trong cac thiet bi iOS
            // if( is.iOS ) va.ev.mouse = { start: '', move: '', end: '', type: 'mouse' };

            // Kiem tra co ho tro Event Wheel Native hay khong
            is.wheelNative = !!('onwheel' in document.createElement('div')); 
        },

        /**
         * LAY PREFIX CUA CSS3 + TEN CUA CSS
         */
        cssName : function() {

            // KIEM TRA PREFIX VERDER CUA BROWSER
            // Loai bo dau '-' --> vi du 'abc-def' tra lai ket qua 'abcDef'
            var fnTest = {
                camelCase : function(prop) {
                    return prop.replace(/-([a-z])/gi, function(m, prop) {
                        return prop.toUpperCase();
                    });
                },

                // MAIN TEST CSS
                css : function(prop, isPrefix) {
                    // Bien khoi tao va shortcut ban dau
                    var style  = document.createElement('p').style,
                        vender = 'Webkit Moz ms O'.split(' '),
                        prefix = '-webkit- -moz- -ms- -o-'.split(' ');

                    // Truoc tien kiem tra style khong co' vender
                    var styleCase = this.camelCase(prop);
                    if( style[styleCase] != undefined ) return (isPrefix ? '' : true);


                    // Tiep tuc kiem tra neu co' vender
                    // Dau tien chuyen doi style thanh Upper --> vi du 'flex-wrap' thanh 'FlexWrap'
                    var preStyle = M.properCase(styleCase);
                    // Kiem tra tung vender
                    for( var i = 0, len = vender.length; i < len; i++ ) {
                        if( style[vender[i] + preStyle] != undefined ) return (isPrefix ? prefix[i] : true);
                    }

                    // Tra lai ket qua false neu khong ho tro
                    return false;
                },

                // PREFIX CUA STYLE CSS
                prefix : function(prop) { return this.css(prop, true) }
            };
                


            /* Kiem tra prefix va bien transfrom co ban */
            var tf = 'transform', ts = 'transition';

            // CSS check
            is.ts = fnTest.css(ts);
            // is.ts = false;
            is.opacity = fnTest.css('opacity');


            // Store prefix support transition
            if( is.ts ) {
                var prefix = va.prefix = fnTest.prefix(tf),
                    timing = '-timing-function';
                
                va.cssTf = cssTf = prefix + tf;
                va.cssTs = cssTs = fnTest.prefix(ts) + ts;
                va.cssD  = cssTs +'-duration';
                va.cssAD = prefix +'animation-duration';
                cssT     = cssTs + timing;
                cssAT    = prefix +'animation'+ timing;
            }



            // Translate type: fix in safari mobile and ie
            // Shortcut translate begin/end
            var tl3D   = 'translate3d(',
                isTf3D = fnTest.css('perspective');

            va.tl0   = isTf3D ? tl3D        : 'translate(';
            va.tl1   = isTf3D ? ',0)'       : ')';
            va.tlx0  = isTf3D ? tl3D        : 'translateX(';
            va.tlx1  = isTf3D ? ',0,0)'     : ')';
            va.tly0  = isTf3D ? tl3D +'0,'  : 'translateY(';
            va.tly1  = isTf3D ? ',0)'       : ')';
        },

        /**
         * CHUYEN DOI TEN EASING SANG 'CUBIC-BEZIER' CSS3
         */
        easeName : function(name) {

            // Easing linear
            if( name == 'linear' ) return 'linear';

            // Modern browser ho tro css3
            if( is.ts ) {

                // Easing swing
                if( name == 'swing' ) return 'ease';

                // Easing others
                var easeDefault = '.25,.1,.25,1',
                    easeList    = {
                        'InSine'     : '.47,0,.745,.715',
                        'OutSine'    : '.39,.575,.565,1',
                        'InOutSine'  : '.445,.05,.55,.95',

                        'InQuad'     : '.55,.085,.68,.53',
                        'OutQuad'    : '.25,.46,.45,.94',
                        'InOutQuad'  : '.455,.03,.515,.955',

                        'InCubic'    : '.55,.055,.675,.19',
                        'OutCubic'   : '.215,.61,.355,1',
                        'InOutCubic' : '.645,.045,.355,1',

                        'InQuart'    : '.895,.03,.685,.22',
                        'OutQuart'   : '.165,.84,.44,1',
                        'InOutQuart' : '.77,0,.175,1',

                        'InQuint'    : '.755,.05,.855,.06',
                        'OutQuint'   : '.23,1,.32,1',
                        'InOutQuint' : '.86,0,.07,1',

                        'InExpo'     : '.95,.05,.795,.035',
                        'OutExpo'    : '.19,1,.22,1',
                        'InOutExpo'  : '1,0,0,1',

                        'InCirc'     : '.6,.04,.98,.335',
                        'OutCirc'    : '.075,.82,.165,1',
                        'InOutCirc'  : '.785,.135,.15,.86',

                        'InBack'     : '.6,-.28,.735,.045',
                        'OutBack'    : '.175,.885,.32,1.275',
                        'InOutBack'  : '.68,-.55,.265,1.55'
                    };

                name = name.replace('ease', '');
                return 'cubic-bezier('+ (!!easeList[name] ? easeList[name] : easeDefault) +')';
            }

            // Old browser: ho tro jQuery easing
            // Kiem tra plugin easing va ten easing co ho add vao chua --> neu khong su dung easing mac dinh 'swing'
            else {
                return (!!$.easing && !!$.easing[name]) ? name : 'swing';
            }
        },




        /**
         * TOGGLE CLASS 'CURRENT' GIUA CAC SLIDES
         */
        toggleSlide : function() {
            var idCur   = cs.idCur,
                idLast  = cs.idLast,
                $slCur  = va.$s.eq(idCur),
                $slLast = va.$s.eq(idLast),
                current = va.ns + o.current,
                deactived = va.deactived;

            
            // Slide: toggle class actived
            va.$s.not($slCur).removeClass(current).addClass(deactived);
            $slCur.addClass(current).removeClass(deactived);

            // Callback event toggle
            idLast != undefined && cs.ev.trigger('deselectID', idLast);
            cs.ev.trigger('selectID', idCur);

            
            // Pag: toggle class actived
            // Su dung phuong phap cu, tuong tu o tren!
            if( is.pag ) {
                va.$pagItem.eq(idLast).removeClass(current);
                va.$pagItem.eq(idCur).addClass(current);
                o.pag.isMark && PAG.sizePosOfMark();
            }

            // Nav: toggle class inactive
            is.nav && NAV.toggle();

            // Cap: toggle Content
            is.cap && CAPTION.toggle($slCur, $slLast);

            // Load slide hien tai dang xem, mac du chua toi luot phai load
            !is.apiRemove && LOAD.add($slCur);

            // Toggle classAdd tren Code
            is.CLASSADD && CLASSADD.toggle();

            // Toggle Deeplink & Cookie
            // Them dieu kien: idLast != undefined --> ngan can luc dau fire function
            if( idLast != undefined ) {
                o.isDeeplinking && is.DEEPLINKING && DEEPLINKING.write();
                o.isCookie && is.COOKIE && COOKIE.write();
            }

            // Kiem tra va setup Iframe lazy
            is.IFRAME && IFRAME.convertTag($slCur);

            // Update lai Code Nested trong Slide hien tai
            is.NESTED && NESTED.refreshInSlide($slCur);

            // Toggle swipe gestures tren Slide hien tai
            is.SWIPE && SWIPE.toggleEvent();
        },

        /**
         *  Cac truong hop:
         *  + is = -1: loai bo het class
         *  + is = 0: toggle sang class[0]
         *  + is = 1: toggle sang class[1]
         */
        toggleClass : function(type, value, $obj) {

            /**
             * DIEU KIEN TIEP TUC FUNTION
             *  -> Toi uu tren mobile --> khong can toggle class 'grabbing'
             */
            if( is.mobile && type == 'grab' ) return;


            /**
             * TIEP TUC FUNCTION
             */
            var classes  = o.className[type],
                class0   = va.ns + classes[0],
                class1   = va.ns + classes[1],
                classAdd = value ? class1 : class0,
                classDel = value ? class0 : class1;

            // Setup doi tuo.ng toggle class mac dinh
            if( $obj === undefined ) $obj = $viewport;


            // value = -1 --> REMOVE ALL
            if( value == -1 ) $obj.removeClass(class0 +' '+ class1);

            // value = 0 --> chuyen sang class[0]
            // value = 1 --> chuyen sang class[1]
            else $obj.addClass(classAdd).removeClass(classDel);
        },




        /**
         * LAY GIA TRI VALUE TRONG CHUOI
         */
        valueX : function(str) {

            // Array: get value
            var a = str.substr(7, str.length - 8).split(', ');

            // Array: return value 5
            return M.pInt(a[4]);
        },




        /**
         * SETUP CAC BIEN KHI SCROLL BROWSER
         */
        scroll : {
            setup : function() {

                // Truong hop options slideshow chi run khi o trong vung nhin thay
                if( is.ssRunInto ) {
                    is.into = false;
                    M.scroll.check();

                    var t = 200;
                    $w.off(va.ev.scroll);
                    $w.on(va.ev.scroll, function() {
                        clearTimeout(ti.scroll);
                        ti.scroll = setTimeout(function() { !is.ssPauseAbsolute && M.scroll.check() }, t);
                    });
                }
                
                // Truong hop slideshow run khong can trong vung nhin thay
                else {
                    is.into = true;
                }
            },

            check : function(isNoGo) {
                M.scroll.position();

                // Kiem tra Code o? trong vung xem cua browser
                var isInto = !(va.topW > va.botCode || va.botW < va.topCode),
                    isGoSlideshow = !isNoGo && is.slideshow && is.ssRunInto;

                if( isInto ) {
                    if( !is.into ) {
                        is.into = true;
                        isGoSlideshow && SLIDESHOW.go('scrollInto');
                    }
                }
                else {
                    if( is.into ) {
                        is.into = false;
                        isGoSlideshow && SLIDESHOW.go('scrollOut');
                    }
                }
            },

            position : function() {

                // Lay Vi tri top/bottom cua Window
                va.hWin = $w.height();
                va.topW = $w.scrollTop();
                va.botW = va.hWin + va.topW;

                // Code offset
                va.topCode = $code.offset().top;
                va.botCode = va.topCode + $code.outerHeight();
            }
        },




        /**
         * METHOD LIEN QUAN TOI MATH
         */
        a     : function(v)         { return Math.abs(v) },
        r     : function(v)         { return Math.round(v) },
        c     : function(v)         { return Math.ceil(v) },
        ra    : function()          { return Math.random() },
        rm    : function(m ,n)      { return M.ra() * (n - m) + m },
        sum : function(a, to) {
            var total = 0;
            if( to < 0 ) return total;
            if( to === undefined ) to = a.length;

            for( var i = 0; i < to; i++ ) {
                total += a[i];
            }
            return total;
        },



        /**
         * METHOD LIEN QUAN TOI CHUYEN DOI NUMBER
         */
        pFloat : function(n) {
            /**
             * Kiem tra va convert thanh so float
             * Voi dieu kien < 9007199254740992 --> lon hon ket qua khong dung
             */
            if( /^\-?\d*\.?\d+$/g.test(n) ) {
                var n1 = parseFloat(n);
                if (n1 < 9007199254740992 ) return n1;
            }

            // + them kiem tra co phai boolean hay khong
            else if( /^(false|off)$/g.test(n) ) n = false;
            return n;
        },

        // Chuyen doi gia tri thuoc tinh lay boi css() sang so nguyen
        pInt : function(v) { return /^\-?\d+/g.test(v) ? parseInt(v, 10) : 0; },

        // Chuyen doi gia tri theo ti le %
        pPercent : function(v, source) {
            if( v > 0 && v < 1 ) v *= source;
            return M.r(v);
        },

        // Kiem tra: Doi tuo.ng la Ma?ng + So luong cua Ma?ng + Tat ca gia tri cua Ma?ng la Number
        elesIsNumber : function(v, lenCheck) {
            var len   = v.length,
                isNum = $.isArray(v) && len == lenCheck;
            
            if( isNum ) {
                for( i = 0; i < len; i++ ) {
                    isNum = isNum && $.isNumeric(v[i]);
                }
            }
            return isNum;
        },



        /**
         * METHOD LIEN QUAN TOI TRANSITON
         */
        cssD1 : function()          { va.cssD1[va.cssD] = va.speed[cs.idCur] +'ms'; },
        tl    : function(x,y,u)     { var u = u ? u : 'px'; return va.tl0 + x + u +', '+ y + u + va.tl1; },

        // Translate x/y , ho tro fallback transition
        tlx   : function(x,u)       { var u = u ? u : 'px'; return is.ts ? (va.tlx0 + x + u + va.tlx1) : (x + u); },
        tly   : function(y,u)       { var u = u ? u : 'px'; return is.ts ? (va.tly0 + y + u + va.tly1) : (y + u); },

        // Add hay remove transition tren doi tuong co dinh
        tsAdd : function($obj, sp, es)   {
            var ts = {};
            if(!es) es = va.ease;

            ts[cssTs] = cssTf +' '+ sp +'ms '+ es;
            $obj.css(ts);
        },
        tsRemove : function($obj, isTimer) {

            // Truoc tien setup cssTs == none : de loai bo chuyen dong, co hieu qua tren firefox va IE
            var ts = {}; ts[cssTs] = 'none'; ts[va.cssD] = 0;
            $obj.css(ts);

            // Sau do setup timer de loai transition khoi DOM
            ts[cssTs] = ''; ts[va.cssD] = '';
            !!isTimer ? setTimeout(function() { $obj.css(ts) }, 0) : $obj.css(ts);
        },
        tfRemove : function($obj) { var tf = {}; tf[cssTf] = ''; $obj.css(tf); },
        ts : function(p, s, a, d) {
            a = a ? ' '+ a : '';
            d = d ? ' '+ d +'ms' : '';
            var t = {}; t[cssTs] = p +' '+ s +'ms'+ a + d;
            return t;
        },


        
        /**
         * METHOD LIEN QUAN TOI ARRAY
         */
        shift : function($obj, isShift) { isShift ? $obj.shift() : $obj.pop() },
        push  : function($obj, v, isPush) { isPush ? $obj.push(v) : $obj.unshift(v) },

        /**
         * LUA CHON HIEU U'NG NGAU NHIEN TRONG MA?NG HIEU U'NG
         */
        randomInArray : function(arr, except) {

            // Neu la hieu u'ng hien tai la ma?ng
            if( $.isArray(arr) ) {
                var itemCur = $.extend(true, [], arr),
                    indexItemLast = itemCur.indexOf(except);

                // Loai bo hieu u'ng moi vua thuc hien
                // Neu khong tim thay trong ma?ng hieu u'ng -> tang them 1 de fixed lua cho.n
                if( indexItemLast == -1 ) indexItemLast = itemCur.length + 1;
                itemCur.splice(indexItemLast, 1);

                // Luu chon hua u'ng ngau~ nhien trong ma?ng vua loai bo? hieu u'ng cu~
                return itemCur[ M.r(M.rm(0, itemCur.length - 1)) ];
            }
            return arr;
        },

        randomInArray2 : function(arrSource, arrCopy, except) {
            if( $.isArray(arrSource) ) {

                // Reset lai Mang Copy neu Mang? ro~ng
                // Reset lai Mang Copy neu con lai 1 doi tuong gio'ng Except
                if( !arrCopy.length || (arrCopy.length == 1 && arrCopy[0] == except) ) {
                    arrCopy = $.extend(true, arrCopy, arrSource);
                }

                // Loai bo doi tuong Except truong tien
                if( except != undefined ) {
                    var indexExcept = arrCopy.indexOf(except);
                    if( indexExcept != -1 ) arrCopy.splice(indexExcept, 1);
                }


                // Doi tuong trong Mang? Copy
                var idCur   = M.r(M.rm(0, arrCopy.length - 1)),
                    itemCur = arrCopy[idCur];

                // Loai bo Item trong Mang
                arrCopy.splice(idCur, 1);

                // Tra lai ID lay dc trong mang
                return itemCur;
            }
            return arrSource;
        },




        /**
         * METHOD OTHERS
         */
        // Swipe swap varible
        swapVaOnSwipe : function() { return va.$swipeCur.is($canvas.add(va.$s)) ? va.can : va.pag; },

        // Hien thi thong bao loi
        message : function(message, detail) {
            if( is.console ) {
                var str = '['+ rt01VA.codeName +': '+ message +']';
                if( !!detail ) str += ' -> '+ detail;
                console.warn(str);
            }
        },

        // Toggle add/removeClass tren doi tuong
        xClass : function($obj, isAdd, str) { $obj[(isAdd ? 'add' : 'remove') +'Class'](str); },

        // Viet hoa chu cai dau tien cua chuoi
        properCase : function(str) { return str.charAt(0).toUpperCase() + str.slice(1); },

        // Chuyen doi 'string' thanh 'object'
        stringToObject : function(str) {

            if( typeof str == 'string' ) {
                // Thay the dau phay ke'p thanh dau' pha?y don - neu co
                str = str.replace(/\u0027/g, '\u0022');
                str = $.parseJSON(str);
            }
            return $.isPlainObject(str) ? str : {};
        },

        /**
         * KIEM TRA GIA TRI WIDTH WINDOW/CODE TRONG RANGE - MEDIA CSS
         */
        matchMedia : function(min, max, isWidthOfCode) {

            /**
             * TRUONG HOP LAY WIDTH CUA CODE
             */
            if( !!isWidthOfCode ) {
                var wCode = $code.outerWidth();
                if( min <= wCode && wCode <= max ) return true;
            }


            /**
             * TRUONG HOP LAY WIDTH CUA WINDOW BROWSER
             */
            else {
                // Truong hop Browser ho tro matchMedia
                if( !!window.matchMedia ) {
                    var str = '(min-width: WMINpx) and (max-width: WMAXpx)'.replace('WMIN', min).replace('WMAX', max);
                    if( window.matchMedia(str).matches ) return true;
                }

                // Truong hop binh thuong : khong hop tro matchMedia
                else {
                    var wWin = $(window).width();
                    if( min <= wWin && wWin <= max ) return true;
                }
            }

            return false;
        },

        /**
         * TIM KIEM GIA TRI CAN THIET TRONG MA?NG
         * @return int Gia tri Width cua Code
         */
        getValueInRange : function(value, valueName) {
            var name = !!valueName ? valueName : 'value';

            // Bo sung: cho phep gia tri mac dinh, va` lay value gia tri nho nhat
            var wMin = 1e5, id = -1;
            for( i = value.num - 1; i >= 0; i-- ) {

                // From & To so sanh voi Width Window
                if( M.matchMedia(value[i].from, value[i].to ) ) {
                    
                    if( wMin >= value[i].to ) {
                        wMin = value[i].to;
                        id = i;
                    }
                }
            }

            // Value tra ve
            return (id > -1 ? value[id][name] : null);
        }
    },







    /**
     * VALUE OF PROPERTIES
     */
    PROP = {

        /**
         * GOI TAT CAC MODULE VAO BIEN TOAN CUC
         */
        mergeAllModules : function() {

            // Chuyen cac Module co sa~n trong Code sang bien 'one'
            one.INIT     = INIT;
            one.M        = M;
            one.PROP     = PROP;
            one.RENDER   = RENDER;
            one.LOAD     = LOAD;
            one.EVENTS   = EVENTS;
            one.POSITION = POSITION;
            one.SIZE     = SIZE;
            one.TOSLIDE  = TOSLIDE;
            one.FX       = FX;
            one.VIEW     = VIEW;


            // Nhu'nh bien 'one' vao` cac Module o ngoai`
            SWIPE       = $.extend({}, rt01MODULE.SWIPE, one);
            RESPONSIVE  = $.extend({}, rt01MODULE.RESPONSIVE, one);
            NAV         = $.extend({}, rt01MODULE.NAV, one);
            PAG         = $.extend({}, rt01MODULE.PAG, one);
            CAPTION     = $.extend({}, rt01MODULE.CAPTION, one);
            IMAGE       = $.extend({}, rt01MODULE.IMAGE, one);
            VIDEO       = $.extend({}, rt01MODULE.VIDEO, one);
            IFRAME      = $.extend({}, rt01MODULE.IFRAME, one);
            VIEW        = $.extend(VIEW, rt01MODULE.VIEW, one);
            FXMATH      = $.extend({}, rt01MODULE.FXMATH, one);
            FXCSS       = $.extend({}, rt01MODULE.FXCSS, one);
            SLIDESHOW   = $.extend({}, rt01MODULE.SLIDESHOW, one);
            TIMER       = $.extend({}, rt01MODULE.TIMER, one);
            SHOW        = $.extend({}, rt01MODULE.SHOW, one);
            DEEPLINKING = $.extend({}, rt01MODULE.DEEPLINKING, one);
            COOKIE      = $.extend({}, rt01MODULE.COOKIE, one);
            AJAX        = $.extend({}, rt01MODULE.AJAX, one);
            APIMORE     = $.extend({}, rt01MODULE.APIMORE);
            FULLSCREEN  = $.extend({}, rt01MODULE.FULLSCREEN, one);
            NESTED      = $.extend({}, rt01MODULE.NESTED, one);
            CLASSADD    = $.extend({}, rt01MODULE.CLASSADD, one);
            OLD         = $.extend({}, rt01MODULE.OLD, one);


            // Kiem tra cac Module o ngoai` co ton tai hay khong
            is.SWIPE       = !!rt01MODULE.SWIPE;
            is.RESPONSIVE  = !!rt01MODULE.RESPONSIVE;
            is.NAV         = !!rt01MODULE.NAV;
            is.PAG         = !!rt01MODULE.PAG;
            is.IMAGE       = !!rt01MODULE.IMAGE;
            is.VIDEO       = !!rt01MODULE.VIDEO;
            is.IFRAME      = !!rt01MODULE.IFRAME;
            is.VIEW        = !!rt01MODULE.VIEW;
            is.FXMATH      = !!rt01MODULE.FXMATH;
            is.FXCSS       = !!rt01MODULE.FXCSS;
            is.SLIDESHOW   = !!rt01MODULE.SLIDESHOW;
            is.TIMER       = !!rt01MODULE.TIMER;
            is.SHOW        = !!rt01MODULE.SHOW;
            is.DEEPLINKING = !!rt01MODULE.DEEPLINKING;
            is.COOKIE      = !!rt01MODULE.COOKIE;
            is.AJAX        = !!rt01MODULE.AJAX;
            is.APIMORE     = !!rt01MODULE.APIMORE;
            is.NESTED      = !!rt01MODULE.NESTED;
            is.CLASSADD    = !!rt01MODULE.CLASSADD;
        },

        /**
         * GOP TAT CA NHUNG OPTIONS LAI VOI NHAU
         */
        mergeAllOpts : function() {
            var optsDefault = rt01VA.optsDefault;
            
            /**
             * LAY DATA TREN HTML5
             *  + Kiem tra option tren data co phai json
             *  + Dam bao chuyen doi ra JSON neu co cau truc object
             */
            var optsData = $code.data(rt01VA.codeData);
            optsData = M.stringToObject(optsData);


            /**
             * MERGE OPTIONS :
             *  + Go.p tat da~ option tren data main va data js vao` option default cua Code
             *  + Thu' tu. uu tien: [optsData] > [OptsJS] > [options TypeCode] > [options Default]
             *  + Uu tien options danh rieng cho browser khong ho tro transtion
             *  + Uu tien options danh rieng cho mobile
             */
            var nameOptsPlus = null;
            if( !!optsData.optionsPlus )                nameOptsPlus = optsData.optionsPlus;
            if( !nameOptsPlus && !!OptsJS.optionsPlus ) nameOptsPlus = OptsJS.optionsPlus;
            if( !nameOptsPlus )                         nameOptsPlus = optsDefault.optionsPlus;

            var optsPlus = rt01VA.optsPlus[nameOptsPlus];
            o = $.extend(true, o, optsDefault, optsPlus, OptsJS, optsData);

            if( !is.ts && !$.isEmptyObject(o.fallback) )  o = $.extend(true, o, o.fallback);
            if( is.mobile && !$.isEmptyObject(o.mobile) ) o = $.extend(true, o, o.mobile);
        },




        /**
         * TACH VA LUU TRU MANG CO 3 THANH PHAN
         *  + Value bao gom Mang lo'n chua tung Mang co 3 thanh phan
         */
        chain3 : function(val, nameValue) {

            // Kiem tra value Name, mac dinh la 'value'
            if( !nameValue ) nameValue = 'value';


            /**
             * CHUYEN DOI THANH MA?NG LAN NUA
             *  + TH 1: number
             *  + TH 2: mang co 3 gia tri va moi gia tri la number
             */
            if     ( $.isNumeric(val) )       val = [[val, 0, 100000]];
            else if( M.elesIsNumber(val, 3) ) val = [val];


            // DIEU KIEN DE TIEP TUC FUNCTION
            if( !$.isArray(val) ) return false;


            // TIEP TUC FUNCTION
            var chain = { num : val.length },
                wMax  = 0;      // Gia tri cao nhat trong mang

            for( i = chain.num-1; i >= 0; i-- ) {
                var a = val[i];

                // Bo sung: tu dong bo sung var con thieu
                if( $.isNumeric(a) ) a = [a, 0, 100000];

                // Bien doi chuoi thanh cac thanh phan khac
                a[1] = M.pInt(a[1]);
                a[2] = M.pInt(a[2]);

                chain[i] = {
                    'from' : a[1],
                    'to'   : a[2]
                };
                
                chain[i][nameValue] = parseFloat(a[0]);      // included float number

                // Tim kiem gia tri lo'n nhat trong Ma?ng
                wMax = (wMax < a[2]) ? a[2] : wMax;
            }

            chain.wMax = M.pInt(wMax);
            return chain;
        },

        /**
         * TACH VA LUU TRU MANG CO 4 THANH PHAN
         * Tuong tu nhu chane3
         *  + Truong hop co 2 gia tri --> Bo dung gia tri thu 3 va 4
         */
        chain4 : function(val) {

            // Chuyen doi thanh ma?ng du'ng quy tac
            if     ( $.isNumeric(val) )       val = [[val, val, 0, 100000]];
            else if( M.elesIsNumber(val, 2) ) val = [[val[0], val[1], 0, 100000]];
            else if( M.elesIsNumber(val, 4) ) val = [val];

            // DIEU KIEN DE TIEP TUC FUNCTION
            if( !$.isArray(val) ) return false;


            // TIEP TUC FUNCTION
            var chain = { num : val.length },
                wMax  = 0;

            for( i = chain.num-1; i >= 0; i-- ) {
                var a = val[i];

                // Bo sung: tu dong bo sung var con thieu
                if( $.isNumeric(a) ) a = [a, a, 0, 100000];

                // Case: auto set from/to
                if( a.length == 2 ) { a[2] = 0; a[3] = 1e5; }

                // Case: double first value -> value left = value right
                else if( a.length == 3 ) { a.unshift(a[0]) }


                // Array: set chain
                chain[i] = {
                    'left'  : parseFloat(a[0]),
                    'right' : parseFloat(a[1]),
                    'from'  : M.pInt(a[2]),
                    'to'    : M.pInt(a[3])
                };

                // wMax: width-to maximum
                wMax = (wMax < M.pInt(a[3])) ? a[3] : wMax;
            }

            chain.wMax = M.pInt(wMax);
            return chain;
        },




        /**
         * SETUP THUOC TINH DEEPLINKING + COOKIE LUC DAU
         */
        deepLinkCookie : function() {

            // Tiep tuc update idCur va idBegin khi 'deeplink' va 'cookie' turn-on
            // Neu co 'deeplink' va 'cookie' cung luc --> uu tien cho 'deeplink'
            if( o.isDeeplinking ) is.DEEPLINKING && DEEPLINKING.read();
            else if( o.isCookie ) is.COOKIE && COOKIE.read();
        },




        /**
         * SETUP CAC THUOC TINH LUC BAT DAU
         */
        setupBegin : function() {

            /**
             * SETUP CAC GIA TRI CHI THUC HIEN 1 LAN DUY NHAT
             */
            if( !va.stepSetupInit ) {
                is.loop = o.isLoop;

                // Khoi tao mang luc ban dau
                va.ssIDRandom   = [];
                va.fxMathRandom = [];

                // Doi tuong swipe mac dinh la Canvas
                va.$swipeCur = $canvas;

                // Cac bien vi tri mac dinh
                va.xBuffer = 0;

                // Thuoc tinh cua Canvas va pagination --> su dung cho swipe
                va.can = { 'viewport' : $viewport };
                // Chua setup vi chua check isPag va $pag
                va.pag = {};
                is.swipeLimit = false;

                // Add class ten browser firefox vao Code --> ho tro fix transform bang css
                var ns      = ' '+ va.ns,
                    classes = '';
                if( is.browser == 'firefox' ) classes += ns +'firefox';
                if( is.ie7 )                  classes += ns +'ie7';
                if( is.mobile )               classes += ns +'mobile';
                if( is.androidNative )        classes += ns +'androidNative';
                $code.addClass(classes);
            }



            /**
             * SETUP CAC GIA TRI LUC BAT DAU CO THE UPDATE
             */
            // Range chieu width cua slide
            va.sSlideRange = PROP.chain3(o.widthSlide, 'width');

            // Setup typeHeight cua Code
            is.heightFixed = $.isNumeric(o.height);
            // Type Height chuyen sang 'Fixed' neu Fullscreen
            if( o.isFullscreen ) is.heightFixed = true;

            // Neu hieu u'ng la 'line' -> su dung translate bang 'left' -> nhanh hon
            // Dat o day vi` no' lien quan ca'c function phia duoi
            // if( o.fx == 'line' && !is.mobile ) is.ts = false;
        },

        /**
         * SETUP CAC THUOC TINH THANH TUNG MUC RIENG BIET
         */
        idNum : function() {

            // So luo.ng slide trong Code
            num = cs.num = va.$s.length;

            // ID slide current setup
            // Tu dong chuyen doi vi tri 'begin', 'center', 'end' sang gia tri number
            // Tu dong chuyen doi id dau neu gia tri la '<= 0'
            // Tu dong chuyen doi id cuoi neu '>= num'
            if( !va.stepSetupInit ) {
                var idBegin = o.idBegin;

                if     ( idBegin == 'begin' )       idBegin = 0;
                else if( idBegin == 'center' )      idBegin = ~~((num/2) - .5);
                else if( idBegin == 'centerRight' ) idBegin = ~~( num/2 );
                else if( idBegin == 'end' )         idBegin = num-1;

                else if (idBegin == -1 || idBegin >= num ) idBegin = num-1;
                else if( idBegin <= 0 )                    idBegin = 0;

                if( cs.idCur === undefined ) cs.idCur = va.idBegin = idBegin;
            }



            // Slide: only 1
            // Khoa cac thuoc tinh Code
            is.nav    = o.isNav && is.NAV;
            is.pag    = o.isPag && is.PAG;
            is.cap    = o.isCap && !!rt01MODULE.CAPTION;
            is.fullscreen = o.isFullscreen && !!rt01MODULE.FULLSCREEN;
            is.center = o.isCenter;

            if( num == 1 ) {
                is.nav = is.center = false;
                if( !is.pagTabs ) is.pag = false;
            }
        },

        transform : function() {

            // CSS duration options
            va.cssD0     = {};
            va.cssD1     = {};
            va.cssDEmpty = {};
            va.cssD0[va.cssD]     = '0s';   // Before: '0s'
            va.cssDEmpty[va.cssD] = '';
            va.xTimer = 100;


            // Canvas: set Transition timing function
            // Bien va.ease da ho tro browser fallback
            va.ease = M.easeName(o.swipe.easing);
            va.moveBy = va.moveLastBy = 'swipe';
        },

        direction : function() {

            // Swipe direction
            // Do o.direction duoc dam bao co 2 gia tri 'hor' va 'ver' --> short setup
            // Kiem tra va.addInfo --> Ho tro update VER TO HOR
            va.can.dirs = (o.direction == 'ver' && !is.mobile) ? 'ver' : 'hor';
            if( !(va.addInfo && va.addInfo.pagDirs) ) va.pag.dirs = o.pag.direction;

            // Bien thong bao huo'ng Vertical
            is.dirsHor = (va.can.dirs == 'hor');

            // Bien cssTf fallback thay doi theo huong swipe --> xem xet loai bo
            // Chi su dung tren Canvas
            if( !is.ts ) cssTf = va.cssTf = (!is.dirsVer ? 'left' : 'top');


            // Cac thuoc tinh Canvas va pagination giong nhau
            var fnSameValue = function(name) {
                    var isHor = va[name].dirs == 'hor';

                    // Ten transform, ho tro fallback
                    va[name].cssTf = is.ts ? cssTf
                                           : (isHor ? 'left' : 'top');

                    // Ten bien pageX thay doi theo huong trong Canvas va pagination
                    va[name].pageX = isHor ? 'pageX' : 'pageY';
                };
            fnSameValue('can');
            fnSameValue('pag');
        },

        fx : function() {

            /**
             * SETUP PHAN LOAI HIEU UNG
             */
            var fxType  = 'math',
                aFxType = ['cssOne', 'cssTwo', 'cssThree', 'line', 'fade', 'none'],

                fnFxType = function() {
                    for( i = 0; i < aFxType.length; i++ ) {
                        if( o.fx == aFxType[i] ) {

                            // Mac dinh
                            fxType = aFxType[i];

                            // Truong hop khong ho tro Css Transition cho Hieu u'ng Css
                            if( !is.ts && /css/g.test(aFxType[i]) ) fxType = 'fadeBack';
                            break;
                        }
                    }
                };

            fnFxType();
            va.fxType = fxType;

            
            // Ten hieu u'ng tu dong chuyen doi thanh Layout Dot
            var a = ['randomMath'];
            a = $.merge(a, aFxType);
            a = $.merge(a, o.fxMathName);
            va.fxInLayoutDot = a;
        },

        layout : function() {

            /**
             * SETUP HUONG VIEW
             */
            var viewList = ['fade', 'mask', 'coverflow', 'scale', 'zoom'];

            // Setup option 'view' luc ban dau
            va.view = 'basic';
            if( viewList.indexOf(o.fx) != -1 ) va.view = o.fx;

            // Tu dong chuyen doi option 'view' neu khong co' module VIEW hoac. huo'ng Vertical
            if( !is.VIEW || !is.dirsHor ) va.view = 'basic';

            // Doi ten chu~ thuo`ng thanh viet hoa chu~ cai dau tien cua option 'view'
            va.View = M.properCase(va.view);



            /**
             * SETUP LAYOUT
             */
            va.layout = o.layout;
            o.stepNav = o.stepPlay = 1;



            /**
             * CHUYEN DOI SANG LAYOUT KHAC
             * @param string va.layout
             */
            if( o.fx == 'line') va.layout = 'line';

            // Neu 'o.fx' la ten trong danh sach 'o.fxMathName' hoac la Array -> Layout Dot
            else if( va.fxInLayoutDot.indexOf(o.fx) != -1 || $.isArray(o.fx) ) va.layout = 'dot';

            // Chuyen doi sang layout khac tuy thuoc vao opts 'view'
            var viewListToLine = ['mask', 'coverflow', 'scale'];
            if( viewListToLine.indexOf(o.fx) != -1 ) va.layout = 'line';
        },

        center : function() {

            // Chuyen doi is.center dua Num slides & va.layout
            if( num == 2 && va.layout == 'line' ) is.center = false;

            // Tao bien moi de so sanh cho de dang --> vua center vua loop (mac dinh)
            // Truong hop pagination la 'tabs' --> load theo kieu binh thuong
            is.centerLoop = is.center && is.loop;



            /**
             * SETUP CHO LAYOUT CENTER
             */
            if( is.centerLoop ) {

                // Slidee clone duoc reset -> chu yeu' phuc vu. fillHole
                !!va.$slClone && va.$slClone.remove();
                va.$slClone = $('');


                // Khoi tao bien 'va.center'
                // Check number slide is odd or even
                var center = va.center = {
                    'isNum' : (M.c(num/2) > num/2) ? 'odd' : 'even'
                };

                // So luong slide left/right --> luu vao namespace va.center
                var nLeft  = ~~((num - 1) / 2),
                    nRight = (center.isNum == 'odd') ? nLeft : nLeft + 1;

                center.nLeft  = nLeft;
                center.nRight = nRight;
            }


            /**
             * SETUP CHO LAYOUT KHONG CENTER
             */
            else {
                va.center = null;
                is.loop = false;
            }
        },

        swipeEvent : function() {

            // Nhung option luc ban dau
            if( !va.stepSetupInit ) {
                va.swipeTypeCur = null;
            }
        },

        responsive : function() {

            /**
             * SETUP CAC BIEN LIEN QUAN RESPONSIVE
             */
            // Width: setup
            if( !!o.widthRange ) va.sizeRange = PROP.chain3(o.widthRange);
            else                 va.sizeRange = null;    // Func update: reset value

            // Padding: setup
            va.pa = { 'left': o.padding, 'top': 0 };    // va.pa always != undefined
            if( o.padding != 0 ) va.paRange = PROP.chain3(o.padding);
            else                 va.paRange = null;     // Func update: reset value

            // Margin: setup
            if( o.margin != 0 ) va.maRange = PROP.chain4(o.margin);
            else                va.maRange = null;      // Func update: reset value



            /**
             * SETUP TRUONG HOP CO REPSONSIVE
             */
            is.res = $.isNumeric(o.width) && is.RESPONSIVE;
            if( is.res ) {

                va.wRes = o.width;
                va.hRes = is.heightFixed ? o.height : 0;

                // Fullscreen: setup
                if( o.isFullscreen ) {

                    // Height responsive : auto add value when not setup --> used for fullscreen 
                    if( va.hRes == 0 ) va.hRes = va.wRes;

                    // Ratio responsive
                    va.rRes = va.wRes / va.hRes;
                }
            }



            /**
             * SETUP CAC BIEN BAN DAU
             */
            if( !va.stepSetupInit ) {
                va.rate = 1;
            }
        },

        grab : function() {

            // Grab stop
            if( o.isViewGrabStop ) $viewport.addClass(va.ns +'grabstop');
            else                   $viewport.removeClass(va.ns +'grabstop');
        },

        pagination : function() {
            var op = o.pag;

            // Ho tro cho phien ba?n cu~
            if( op.type == 'tab' ) op.type = 'tabs';

            // Setup cho pagination type free --> chi render khong co event
            is.pagList  = op.type == 'list';
            is.pagTabs  = op.type == 'tabs';
            is.pagThumb = op.type == 'thumbnail';
            is.alignJustify = op.align == 'justify';
            if( is.pagList ) is.swipeOnPag = false;


            // Kiem tra TAB VERTICAL
            var fnIsPagVer = function(opt, pag) {
                return !is.outsidePag
                    && !is.pagList
                    && (opt.isPag && pag.direction == 'ver');
            };


            // Kiem tra loai Pagination TAB VERTICAL
            va.pagVer = fnIsPagVer(o, o.pag) && va.pag.dirs == 'ver' ? (o.pag.position == 'begin' ? 'begin' : 'end')
                                                                     : null;

            // Reset Margins tren Viewport neu truoc kia la TAB VERTICAL
            if( !!va.stepSetupInit && fnIsPagVer(oo, oo.pag) ) {
                $viewport.css({ 'margin-left': '', 'margin-right': '' });
            }

            // Kiem tra kich thuoc cua Pag Item = kich thuoc moi Item
            // Neu co kich thuoc fixed thi kich thuoc Pag Item Self = false
            is.pagItemSizeSelf = (op.typeSizeItem == 'self' && !is.alignJustify);
            if( $.isNumeric(op.width) || $.isNumeric(op.height) ) is.pagItemSizeSelf = false;
        },

        slideshow : function() {

            // Timer
            var auto = o.slideshow;
            is.slideshow = o.isSlideshow && is.SLIDESHOW;
            is.timer = is.slideshow && auto.isTimer && auto.timer != 'none' && is.TIMER;
            va.timer = (auto.timer == 'arc' && !is.canvas2d) ? 'line' : auto.timer;

            // Button PlayPause
            is.playpause = is.slideshow && auto.isPlayPause;

            // Setup autoRun --> autoRun cho false khi dong thoi co playpause va isAutoRun false
            is.autoRun = !(auto.isPlayPause && !auto.isAutoRun);
            is.ssPauseAbsolute = !is.autoRun;

            // Setup other
            is.ssRunInto = auto.isRunInto;
        },

        setupEnd : function() {

            // Update gia tri khi refresh lai Code
            if( va.stepSetupInit ) {

                // Update fixed: remove Viewport-height inline
                is.heightFixed && $viewport.css('height', '');
            }

            // Loai bo cac options trong version free
            o.rev[0] == 'eerf' && NOISREV.eerf();
        },

        /**
         * SETUP CAC THUOC TINH CUA CODE THANH TUNG MANG RIENG BIET
         */
        code : function() {

            /**
             * SETUP CAC THUOC TINH LUC BAN DAU -> UU TIEN THEO THU TU
             */
            PROP.setupBegin();
            PROP.idNum();
            PROP.transform();
            PROP.direction();           // Co anh huo'ng toi view()

            PROP.fx();
            PROP.layout();
            PROP.center();
            PROP.swipeEvent();          // Co anh huo?ng tu` fx va layout
            PROP.responsive();

            PROP.grab();
            PROP.pagination();          // Nam duoi swipe event
            PROP.slideshow();
            PROP.setupEnd();



            /**
             * SETUP PHAN CON LAI
             */
            // Code: clear datas after first setup Code
            !va.stepSetupInit && $code.removeAttr('data-'+ rt01VA.codeData).removeData(rt01VA.codeData);

            // Varible to recognize call PROP.setup() run first
            if( va.stepSetupInit === undefined ) va.stepSetupInit = 1;

            // Add class khi setup xong properties
            UPDATE.addClass();
        },



        /**
         * THUOC TINH VA OPTIONS CUA TUNG SLIDE
         */
        slides : function() {

            /**
             * SETUP CAC BIEN LUC BAN DAU
             */
            if( va.fx === undefined ) {
                va.fx        = [];
                va.cssEasing = [];
                va.slot      = [];
                va.speed     = [];
                va.delay     = [];
                va.imgPos    = [];
                va.fxNum     = o.fxMathName.length;

                // Mang luu tru cac ID Dom tren tung Slide
                va.IDsOnDom  = [];
            }

            // Reset vi tri cua Slide luc dau o che do fallback
            if( !is.ts ) va.$s.css({ 'left': '', 'top': '' });



            /**
             * SETUP TUNG PHAN SLIDE
             */
            var fxType = va.fxType;
            va.$s.each(function(i) {

                var $ele    = $(this),
                    optsCur = $ele.data('optsSlide') || {};


                /**
                 * SETUP PHAN BAT BUOC
                 *  + Luu tru ID cho tung Slide
                 *  + Luu tru ID cho tung Pag Item
                 */
                $ele.data({ 'id' : i });
                is.pag && va.$pagItem.eq(i).data('id', i);



                /**
                 * SETUP OPTION CURRENT CUA TUNG SLIDE
                 *  + Truong hop luc bat dau setup slide khi Code Init
                 *  + Truong hop update thuoc tinh cua Code
                 *  + Truong hop update thuoc tinh cua tung Slide
                 */
                if( va.fx[i] === undefined ) {
                    var
                    optsData = $ele.attr('data-'+ o.nameDataSlide);
                    optsData = M.stringToObject(optsData);
                    optsCur  = $.extend(true, optsCur, o, optsData);

                    // Loai bo thuoc tinh data-slide tren tung Slide
                    $ele.removeAttr('data-'+ o.nameDataSlide);
                }
                else if( $.isPlainObject(va.oUpdate) && !$.isEmptyObject(va.oUpdate) ) {
                    optsCur = $.extend(true, optsCur, va.oUpdate);
                }
                else if( $.isPlainObject(va.oSlides) && $.isPlainObject(va.oSlides[i]) ) {
                    optsCur = $.extend(true, optsCur, va.oSlides[i]);
                }
                // Khong co optsCur --> khong tiep tuc setup nua~
                else return;



                /**
                 * SETUP CAC THUOC TINH CUA HIEU UNG
                 */
                // Setup Fx name
                if     ( fxType == 'cssOne' )   va.fx[i] = optsCur.cssOne;
                else if( fxType == 'cssTwo' )   va.fx[i] = [optsCur.cssTwoIn, optsCur.cssTwoOut];
                else if( fxType == 'cssThree' ) va.fx[i] = [optsCur.cssThreeNext, optsCur.cssThreePrev];
                else if( fxType == 'none' )     va.fx[i] = 'none';
                else                            va.fx[i] = (va.layout == 'line') ? null : optsCur.fx;

                // Setup Fx Easing ---> only cho css
                var cssEasing = optsCur.cssEasing;
                va.cssEasing[i] = !!cssEasing ? M.easeName(cssEasing) : cssEasing;

                // Setup Others options
                va.slot[i]   = optsCur.slot;
                va.speed[i]  = optsCur.speed;
                va.delay[i]  = optsCur.slideshow.delay;
                va.imgPos[i] = optsCur.imagePosition;

                // Kiem tra gia tri toi thieu cua Speed va Delay
                if( va.speed[i] < 200 ) va.speed[i] = 200;
                if( va.delay[i] < 500 ) va.delay[i] = 500;




                /**
                 * SETUP CAC THUOC TINH KHAC
                 */
                // Luu tru classAdd cua tung slide
                if( is.CLASSADD ) va.classAdd[i] = CLASSADD.filter(optsCur);

                // Kiem tra co id-text va luu tru tat ca id-text cua slide vao mang
                va.IDsOnDom[i] = $ele.attr('id');

                // Kiem tra co phai load ajax hay khong
                is.AJAX && AJAX.check(optsCur, $ele);

                // Kiem tra va luu tru Iframe lazy
                is.IFRAME && IFRAME.checkExist($ele);

                // Luu tru thanh phan 'control'
                // Luu tru toan bo options hien tai tren moi Slide
                $ele.data({ 'optsSlide': optsCur, 'control': optsCur.control });
            });
            
            

            /**
             * SETUP CAC BIEN SAU CUNG
             */
            va.tDelay = va.delay[cs.idCur];

            // value 1: for init Code; value 2: for init slide
            if( va.stepSetupInit == 1 ) va.stepSetupInit = 2;

            // Toggle 'first' & 'last' Class cho Pag Items
            is.pag && PAG.firstLastClass();
        }
    },







    /**
     * UPDATE VALUE PROPERTIES
     */
    UPDATE = {

        /**
         * CAN NHAT TONG HOP CAC KICH THUOC - VI TRI LUC BAN DAU
         */
        general : function() {

            /**
             * CSS WIDTH CHO CANVAS
             */
            if( va.layout == 'line' || va.layout == 'dot' ) {

                // Setup chieu rong cua Canvas theo huong swipe
                va.sCanvas = is.dirsHor ? va.wSlide : va.wCode;
                $canvas.css('width', va.sCanvas);
            }

            // TranslateW: get
            SIZE.sTranslate();



            /**
             * SETUP CAC BIEN KHAC TRONG LAYOUT LINE
             */
            if( va.layout == 'line' ) {

                /**
                 * XAC DINH SO LUO.NG SLIDE BEN CANH NHI`N THAY DUOC SO VOI SLIDE CHINH GIUA
                 * @param int va.center.nEdge
                 */
                if( is.centerLoop ) {

                    var wAll = 0, i = 0;
                    while (wAll < va.wCode) {
                        wAll = (va.wSlide + va.ma[0] + va.ma[1]) * (i * 2 + 1);       // So 1: cho slide giua, so 2 cho 2 slide ben canh
                        i++;
                    }
                    var nEdge = i-1;
                    if( nEdge * 2 >= num ) nEdge = ~~((num-1)/2);

                    // Luu ket qua vao namespace va.center
                    va.center.nEdge = nEdge;
                }


                /**
                 * OTHER SETUP
                 */
                // Setup lai vi tri sap xep cau tung Slide
                var sizeName = 'size'+ va.View;
                !!VIEW[sizeName] && VIEW[sizeName]();
            }



            /**
             * CAP NHAT VI TRI CUA CANVAS LUC BAT DAU
             */
            POSITION.canvasBegin();



            /**
             * PAGINATION : UPDATE LAI CAC GIA TRI
             */
            if( is.pag && !is.pagList ) {
                PAG.propAndStyle();
                PAG.posAndSizeOfItems();
                PAG.updateThumbnail();
                o.pag.isMark && PAG.sizePosOfMark();

                // Setup vi tri chinh giua cho Pag Item Current - Nhung khong co Animation
                PAG.posCenterForItemCur(true, true);
                


                /**
                 * KIEM TRA CHUYEN TABS VERTICAL SANG HORIZONTAL
                 * + Setup timer > 30ms : can phai lay Height cua Code SIZE.animHeightForCode() run truoc
                 * + verToHor() phai bo? vao function() {} --> fixed IE7
                 */
                setTimeout(function() { PAG.verToHor() }, 40);
            }
        },


        // Loai bo class hien co tren Code --> su dung cho update properties
        removeClass : function() {

            // Code: remove exist class
            var ns        = ' '+ va.ns,
                classCode = ns +'one'+ ns +'multi';

            classCode += ns +'layout-line'+ ns +'layout-dot';          // Layout type
            classCode += ns +'fx-'+ va.fxType;
            classCode += ns +'height-auto'+ ns +'height-fixed';         // Height type

            // Kiem tra huong cua pagination
            $code.removeClass(classCode);

            // Pagination loai bo class them vao
            is.pag && PAG.toggleClass(false);
        },

        // Add class vao Code sau khi update
        addClass : function() {

            // Code: class layout & height type
            var ns         = ' '+ va.ns,
                typeHeight = is.heightFixed ? 'fixed' : 'auto',
                classCode  = ns +'layout-'+ va.layout + ns +'height-'+ typeHeight + ns +'fx-'+ va.fxType;

            // Class nhan biet Browser ho tro transition && showInRange
            classCode += ns + (is.ts ? 'transition' : 'no-transition');
            classCode += is.opacity ? '' : ns +'no-opacity';
            if( !is.showInRange ) classCode += ns +'none';

            // Add Class vao Code sau khi setup
            $code.addClass(classCode);

            // Pagination add type class
            is.pag && PAG.toggleClass(true);
        },


        // Reset other when update options
        reset : function() {

            // Layout dot: remove translate
            if( va.layout == 'dot' ) {
                var _tf = {}; _tf[cssTf] = '';
                va.$s.css(_tf);
                POSITION.xAnimate($canvas, 0, 1, 1);
            }
        },



        // Update when resize Code
        // Thu tu function rat quan trong!!!!
        resize : function() {
            // console.log('resize');
            cs.ev.trigger('resize');                            // Event trigger 'resize'

            // Setup size cua pagItem --> tim kiem gia tri wItem/hItem
            // Boi vi trong template TAB VERTICAL --> can phai reset kich thuoc pagination truoc
            is.pag && !is.pagList && PAG.typeSizeItem();


            SIZE.widthForCode();                                // Lay Chieu rong cua Code truoc tien.
            is.res && RESPONSIVE.updateVars();                  // Responsive: calculation padding & va.rate
            is.IMAGE && IMAGE.updateAllImagesBy('size');        // Cap nhat kich thuoc cua Image Item khi co Chieu ro.ng cua Slide

            is.heightFixed && SIZE.heightFixedForCode();        // Lay Chieu cao cua Code truoc tien -> Ho tro. image autofit/autofill
            SIZE.endOfCode();                                   // Kich thuoc cua Code tong hop tuy thuoc Direction
            is.res && is.fullscreen && FULLSCREEN.varible();    // Fullscreen: tinh toa'n lai. Padding & va.rate, nead hCode first
            is.IMAGE && IMAGE.updateAllImagesBy('position');    // Cap nhat vi tri cua Image back co trong tat ca? cac Slides sau khi co Chieu cao cua Code

            UPDATE.general();


            /* Phan setup can DELAY */
            SIZE.animHeightForCode(true);                       // animHeightForCode: update make image shake --> delay co san
        }
    },







    /**
     * NOISREV
     */
    NOISREV = {
        check : function() {

            // Bien khoi tao ban dau
            var ver   = o.rev[0],
                isRun = false;

            // Phien ban pre
            if     ( ver == 'erp' || ver == 'eerf' ) isRun = true;
            else if( ver == 'omed') {

                var demoURL = o.rev[1].split('').reverse().join('');
                if( document.URL.indexOf(demoURL) != -1 ) isRun = true;
            }
            return isRun;
        },

        // Thuoc tinh cua phien ban free
        eerf : function() {

            // Options chung
            var options = {
                cssOne      : null,
                cssTwoIn    : null,
                cssTwoOut   : null,
                cssEasing   : null,

                isSlideshow : false,
                name        : null
            };
            o  = $.extend(true, o, options);

            // Layout line
            if( o.fx === null ) { o.fx = va.layout = 'line' }

            // 'pag' options
            o.pag.direction = 'hor';
        }
    },







    /**
     * RENDER ELEMENTS
     */
    RENDER = {

        /**
         * CAU TRUC RENDER MARKUP CAC THANH PHAN
         */ 
        structure : function() {

            // Setup markup first: Viewport, Canvas
            RENDER.viewport();
            RENDER.canvas();
            RENDER.overlayGhost($viewport);


            // Slides: setup markup
            // Tao var $s rong --> de add new slide trong vong lap
            va.$s = $('');
            $canvas.children().each(function() { RENDER.slide($(this)) });


            // Setup cac thanh phan trong moi~ Slide
            va.$s.each(function() {
                var $slCur = $(this);

                // Setup Caption, PagItem
                RENDER.capPagHTML($slCur);

                // Setup Videos
                is.VIDEO && VIDEO.convertTag($slCur);
            });
        },

        /**
         * TAO MARKUP VIEWPORT
         */
        viewport : function() {

            // Bien shortcut va khoi tao ban dau
            var viewClass = va.ns + o.nameViewport,
                viewport  = $code.children('.'+ viewClass);


            // Tim kiem Viewport
            if( viewport.length ) $viewport = viewport;
            else {
                $code.wrapInner( $(divdiv, { 'class': viewClass }) );
                $viewport = $code.children('.'+ viewClass);
            }

            // Luu tru doi tuong 'viewport'
            va.$viewport = $viewport;
        },

        /**
         * TAO MARKUP CANVAS
         *  + Mac dinh tagName la 'div'
         *  + Co the thay doi tagName cua Canvas by options 'tagCanvas'
         *  + Tu dong thay doi tagName cua Canvas thanh 'ul' neu phat hien tagName slide la 'li'
         */
        canvas : function() {
            
            // Bien shortcut va khoi tao ban dau
            var canvasClass = va.ns + o.nameCanvas,
                tagCanvas   = o.tagCanvas,
                canvas      = $viewport.children('.'+ canvasClass);


            // Canvas DOM ton tai, get tagName cua Canvas lan nua
            if( canvas.length ) {
                tagCanvas = canvas[0].tagName.toLowerCase();
            }
            // Canvas DOM not exist, create Canvas DOM with tagName options
            else {

                // Tu dong convert tagCanvasName neu phat hien tagName children la 'li'
                if( tagCanvas == 'div' && $viewport.children()[0].tagName.toLowerCase() == 'li' ) tagCanvas = 'ul';

                var html = (tagCanvas == 'ul') ? '<ul></ul>' : divdiv;
                $viewport.children().wrapAll( $(html, {'class': canvasClass}) );
            }

            // $canvas refer to DOM, and store data --> reuse for later
            $canvas = va.$canvas = $viewport.children('.'+ canvasClass);
            $canvas.data({ 'tagName': tagCanvas, 'pos' : { 'x' : 0 } });
        },

        /**
         * OVERLAY GHOST : HO TRO SWIPE GESTURE KHONG BI NGAN CAN BOI THANH PHAN KHAC
         */
        overlayGhost : function($parent) {

            var $overlayGhost = $(divdiv, { 'class' : va.ns +'overlay-ghost' });
            $parent.append($overlayGhost);
        },

        /**
         * TAO MARKUP CAC SLIDES
         *  + Wrap 'div'/'li'  cho slide khong co wraper
         *  + Add class 'cs-slide' va add icon loader vao slide
         */
        slide : function($sl) {
            var slClass = va.ns + o.nameSlide,
                slTag   = $sl[0].tagName.toLowerCase();


            // Slide co wrapper la 'div'/'li' hoac class 'cs-slide'
            if( slTag == 'li' || slTag == 'div' || $sl.hasClass(slClass) ) {

                // Loai bo class hien tai
                !$sl.children().length && $sl.removeClass(slClass);
            }

            // Slide khong co wrapper, chi co 1 thanh phan nhu '<a>'
            else {
                var cTag   = $canvas.data('tagName'),
                    html   = (cTag == 'ul') ? '<li></li>' : divdiv,
                    parent = $(html, {'class': slClass});

                $sl.wrap(parent);
                $sl = $sl.closest('.'+ slClass);
            }



            // Slide: add class --> de chac chan slide co class 'cs-slide'
            // Slides assign to varible $s, add class 'sleep' to setup height 100% , hidden all children
            $sl.addClass(slClass).addClass(va.ns +'sleep').addClass(va.deactived);

            // Slide store data ban dau de khong khi get thong tin --> khong bi loi
            var FALSE = false;
            $sl.data({
                'isLoading'  : FALSE,
                'isLoaded'   : FALSE,
                'isImgback'  : FALSE,
                'isLayer'    : FALSE,
                'isVideo'    : FALSE,
                'isAjax'     : FALSE,
                'isPagEmpty' : FALSE,
                'loadBy'     : 'normal'
            });


            // Create icon loader
            RENDER.loaderAdd($sl, $sl, '$slLoader');

            // Slide add to varible $s
            va.$s = va.$s.add($sl);

            // Function return slide: use for add new slide by api
            return $sl;
        },

        /**
         * TIM KIEM VA TAO MARKUP CAPTION ITEM VA PAG ITEM CUA TUNG SLIDE
         */
        capPagHTML : function($slCur) {

            /**
             * TIM KIEM NOI DUNG CAPTION CUA SLIDE HIEN TAI
             */
            var ns       = va.ns,
                capHTML  = '',
                slData   = $slCur.data(),
                $imgback = $slCur.find('.'+ ns + o.nameImageBack);

            // Truoc tien lay noi du.ng cu?a Image back
            $imgback.each(function() {
                var $i = $(this);

                // Noi dung caption tuy theo tag
                // Neu la image thi la noi dung trong attr 'alt'
                // Neu la link tag thi lay noi dung ben trong
                var tag = this.tagName.toLowerCase();
                if     ( tag == 'img' ) capHTML = $i.attr('alt');
                else if( tag == 'a' )   capHTML = $i.html();
            });


            // Tien tuc tim kiem noi dung trong Node Caption Item
            var $capItem = $slCur.children('.'+ ns +'capitem');
            if( $capItem.length ) {
                capHTML = $capItem.html();
                $capItem.remove();
            }

            // Luu tru Caption Item vao Data Slide
            slData.htmlCap = capHTML;      



            /**
             * SETUP PAGINATION ITEM SETUP
             */
            // Pagination item: tim kiem '.pagitem' --> luu tru vao data slide
            var $pagItem = $slCur.children('.'+ ns +'pagitem');

            // Neu khong co thi tao dom
            if( !$pagItem.length ) {
                $pagItem = $(divdiv, { 'class': ns +'pagitem' });
                slData.isPagEmpty = true;
            }

            // Luu tru vao trong slide roi loai bo
            slData.$pagItem = $pagItem;
            $pagItem.remove();
        },




        /**
         * TIM KIEM CAC THANH O BEN NGOAI CODE
         */
        searchDOM : function(classSearch) {
            var $dom = $(),
                NAME = o.name;

            /**
             * TIEM KIEM DOI TUONG KHI CODE CO TREN - TIM KIEM BEN NGOAI
             */
            if( NAME != null && NAME != undefined ) {

                var $el = $(classSearch);
                if( $el.length ) {
                    $el.each(function() {

                        // Kiem tra tren data codeData co phai la json + co' doi tuong name hay khong
                        var dataDom = $(this).data(rt01VA.codeData);
                        dataDom = M.stringToObject(dataDom);

                        if( $.isPlainObject(dataDom) && dataDom.name == NAME ) $dom = $(this);
                    });

                    // Tra ve doi tuong neu duoc phat hien
                    if( $dom.length ) return $dom;
                }
            }



            /**
             * TIEP TUC TIM KIEM DOI TUONG BEN TRONG CODE
             */
            $code
                .find(classSearch)
                .each(function() {
                    var $find = $(this);

                    // Kiem tra de Loai bo doi tuong trong Code Nested
                    if( $find.closest('.'+ va.ns + o.nameViewport).length == 0 ) return $find;
                });

            // Tra ve doi tuong Ro~ng neu khong tim thay
            return $();
        },

        /**
         * CHEN CAC THANH MARKUP VAO DOI TUO.NG
         */
        into : function(intoParent, $child) {
            var oMarkup = o.markup, $parent;

            // Tim kiem doi tuong Parent
            switch( intoParent ) {

                case 'viewport' :
                    $parent = $viewport;
                    break;

                case 'nav' :
                    if( !va.$nav ) {
                        va.$nav = $(divdiv, {'class' : va.ns + o.nameNav});
                        RENDER.into(oMarkup.navInto, va.$nav);
                    }
                    $parent = va.$nav;
                    break;

                case 'control' :
                    if( !$control ) {
                        $control = $(divdiv, {'class' : va.ns +'control'});
                        RENDER.into(oMarkup.controlInto, $control);
                    }
                    $parent = $control;
                    break;

                default :
                    $parent = $code;
                    break;
            }

            // Chen` doi tuo.ng con vao Parent moi vua tim duoc
            $parent.append($child);
        },

        /**
         * RENDER ICON LOADER
         */
        loaderAdd : function($sl, $parent, name) {

            // Thay the Namespace vao Markup
            var markup = o.markup.loader;
            markup = markup.replace(/\{ns\}/g, va.ns);

            // Luu tru vao data Slide va chen vao doi tuo.ng Parent
            var $loader = $(markup),
                slData  = $sl.data();

            slData[name] = $loader;
            $parent.append($loader);
        },

        loaderRemove : function($sl, name) {

            var $loader = $sl.data(name);
            $loader && $loader.remove();
        },




        /**
         * UPDATE IMAGE TRONG THANH PHAN OVERLAY
         */
        divImg : function(name, parent, isAfter) {
            
            var classes   = va.ns + o[name+'Name'],
                nameUpper = M.properCase(name);     // Viet hoa chu cai dau tien cua "name", Vi du: overlay -> Overlay

            va[name] = $code.find('.'+ classes);

            // Option co TURN ON --> setup
            if( o['is'+ nameUpper] ) {
                if( !va[name].length ) {

                    // Kiem tra image o trong container
                    var src = $code.data('img'+ name),
                        tag = (!!src) ? '<div class="'+ classes +'"><img src="'+ src +'" alt="['+ name +']"></div>'
                                      : '<div class="'+ classes +'"></div>';

                    // Chon lua chen after hay before so voi doi tuong parent
                    isAfter && parent.after($(tag)) || parent.before($(tag));
                }
            }

            // Option co TURN OFF --> loai bo --> ho tro cho update api
            else if( va[name].length ) va[name].remove();
        },

        /**
         * RENDER CAC THANH PHAN KHAC
         */
        other : function() {

            // Render thanh phan Overlay
            (oo.isOverlay != o.isOverlay) && RENDER.divImg('overlay', $canvas, true);
        }
    },







    /**
     * LOAD METHOD
     * Thuc hien chuc nang sau:
     *  + Bat dau load id slide khac 0
     *  + Load theo hinh zigzag phai/trai neu load id slide != 0
     *  + Preload truoc bao nhieu slide, mac dinh la 1
     *  + Load dong thoi cac slide khac nhau de toi uu toc load
     *  + Khi chua load xong, di chuyen toi slide khac --> uu tien load slide do
     */
    LOAD = {

        /**
         * THU TU ID SLIDE XUAT HIEN DUOC LUU TRU TRONG []
         * @process
         *  + Tim kiem ID-Slide bat dau trong []
         *  + Thu tu con lai trong [] chi viec +1
         *  + Neu thu tu lon hon va.num --> bat dau lai = 0
         */
        idMap : function() {
            var map = [];

            /**
             * SETUP ID MAP CHO LAYOUT CENTER
             */
            if( va.layout == 'line' && is.centerLoop ) {
                // Uu tien slide xuat hien ben phai neu tong slide la so chan
                var idBegin = M.c(num / 2) + cs.idCur;
                if( va.center.isNum == 'even' ) idBegin++;

                // idBegin bat dau lai bang so nho, neu lon hon num
                if( idBegin >= num ) idBegin -= num;


                // Func loop: add id to map
                for( i = 0; i < num; i++ ) {

                    // Id begin tro ve 0, neu lon hon num
                    if( idBegin >= num ) idBegin = 0;

                    // Map: add value
                    map[i] = idBegin++;
                }
            }


            /**
             * SETUP ID MAP CHO LAYOUT KHONG CENTER
             */
            else {
                for( i = 0; i < num; i++ ) {
                    map.push(i);
                }
            }

            // Luu vao bien
            va.idMap = map;
        },

        /**
         * LUU TRU ID CUA SLIDES VAO DE LOADING TUNG SLIDE THE THU TU
         */
        way : function() {

            // Khoi tao gia tri ban dau, su dung cho nhung fn khac
            va.nAddLoad  = 0;       // Number of slide add to loading
            va.nLoaded   = 0;       // Number of slide already loaded
            is.preloaded = false;   // Kiem tra preload slide xong chua

            var IDToLoad = [],       // Shortcut array id slide to load
                idCur    = cs.idCur, // Shortcut ID current
                oLoad    = o.load;


            /**
             * SO LUONG SLIDES LOADING SONG SONG VOI NHAU
             *  + Luc dau sau khi preload xong, va.nLoadParallel luon luon -1 --> cho nen + 1 luc dau tien --> can bang va khoi rac roi
             */
            va.nLoadParallel = oLoad.amountEachLoad + 1;


            /**
             * SETUP PRELOAD
             *  + neu 'all', load toan bo slides
             *  + neu == 0 --> luon luon load truoc 1slide
             */
            va.preload = oLoad.preload;
            if( oLoad.preload == 'all' ) va.preload = num;
            if( oLoad.preload <= 0 )     va.preload = 1;




            /**
             * LOADING CAC SLIDE THEO THU TU NHO? DEN LO'N - THANG TIEN
             * Load theo thu tu tu` 0,1,2,3...
             */
            var fnLoadLinear = function() {

                for( i = 0; i < num; i++ ) {
                    IDToLoad.push(i);
                }
            },

            /**
             * LOADING ZIGZAG CAC SLIDES DUA VAO 'IDMAP'
             */
            fnLoadZigzagByIDMap = function() {

                var idMap    = va.idMap,
                    idCenter = M.c(num/2 - 1),
                    idCur    = idCenter,
                    nLeft    = 1,
                    nRight   = 1,
                    isRight  = true;

                // Setup id ban dau
                IDToLoad[0] = idMap[idCur];
                for( i = 1; i < num; i++ ) {

                    if( isRight ) {
                        idCur = idCenter + nRight;
                        nRight++;
                        isRight = false;
                    }
                    else {
                        idCur = idCenter - nLeft;
                        nLeft++;
                        isRight = true;
                    }
                    IDToLoad[i] = idMap[idCur];
                }
            },

            /**
             * LOADING ZIGZAG CAC SLIDES THEO HUONG PHAI TRAI
             * Bat dau load vi tri idBegin --> load Phai Trai --> load tiep Phai Trai
             */
            fnLoadZigzagLine = function() {

                var right     = 1,      // Default: load right first
                    n         = 1,
                    leftEnd   = 0,      // Shortcut leftEnd
                    rightrEnd = 0;      // Shortcut rightEnd

                IDToLoad[0] = va.idBegin;
                for( i = 1; i < num; i++ ) {

                    if( (idCur != num - 1) && (right || leftEnd) ) {
                        IDToLoad[i] = idCur + n;

                        // Left: end
                        if( leftEnd ) n++;
                        else          right = 0;

                        // Right: check end
                        if( IDToLoad[i] >= num-1 ) rightrEnd = 1;
                    }
                    else {
                        IDToLoad[i] = idCur - n;
                        n++;

                        // Right: end
                        right = !rightrEnd;

                        // Left: check end
                        if( IDToLoad[i] <= 0 ) leftEnd = 1;
                    }
                }
            };

            // Truoc tien setup idMap truoc
            LOAD.idMap();

            // Truong hop slide sap xep vi tri center --> load zigzag round
            if( va.layout == 'line' && is.centerLoop ) fnLoadZigzagByIDMap();

            // Truong hop slide sap xep vi tri thang hang hoac co pagination type la 'tabs'
            // Neu ID = 0 thi load thang tien, con lai load zigzagline
            else idCur == 0 ? fnLoadLinear() : fnLoadZigzagLine();


            // Kiem tra cac id co phai load ajax --> loai bo khoi load luc dau
            if( is.AJAX ) IDToLoad = AJAX.removeAutoLoad(IDToLoad);

            // Gian gia tri cuoi cung tim duoc vao namespace
            va.IDToLoad = IDToLoad;
        },
        
        /**
         * LOAD SLIDE TIEP THEO
         */
        next : function($slNext) {

            // Doi tuong Slide Next
            if( !$slNext ) $slNext = va.$s.eq(va.IDToLoad[0]);

            // Kiem tra co phai load ajax --> cho tai noi dung ve roi setup
            // Con khong thi setup binh thuong
            ($slNext.data('isAjax') && is.AJAX) ? AJAX.get($slNext) : LOAD.slideBegin($slNext);
        },




        /**
         * SETUP DE LOADING SONG SONG NHIEU SLIDES CUNG LUC KHI BAT DAU
         */
        parallelBegin : function() {

            var IDToLoad = va.IDToLoad;
            if( IDToLoad != null ) IDToLoad.shift();    // id slide hien tai duoc lay ra
            va.nAddLoad++;                              // Tang so luong da load

            // Cac slide  preload cung luc trong truoc khi Code bat dau xuat hien
            // Luc nay LOAD.slideBegin() o LOAD.parallelEnd() bi tam dung
            if( va.nAddLoad < va.preload && IDToLoad != null ) {
                LOAD.slideBegin( va.$s.eq(IDToLoad[0]) );
            }
        },

        /**
         * SETUP LOADING SONG SONG NHIEU SLIDES CUNG LUC KHI SETUP KET THUC SLIDE
         */
        parallelEnd : function($slide) {

            // Bien shortcut va khoi tao ban dau
            var IDToLoad = va.IDToLoad,
                oLoad = o.load;

            // Varible use for preload
            va.nLoaded++;

            // Tat ca slide da preloaded
            if( !is.preloaded && va.nLoaded == va.preload ) is.preloaded = true;


            // Kiem tra co phai load lien tiep hay khong
            if( !oLoad.isLazy ) {

                // LoadAmount chi thuc hien neu nhu preLoad da xong
                // Kiem tra reset lai gia tri va.nLoadParallel neu va.nLoadParallel == 0
                if( is.preloaded ) {

                    va.nLoadParallel--;
                    if( !va.nLoadParallel ) va.nLoadParallel = o.load.amountEachLoad;
                }


                // Load next slide
                // Dieu kien: va.IDToLoad array khac empty va is.preloaded da load xong
                // Neu is.preloaded chua load xong thi LOAD.slideBegin() bi tam dung --> load new slide chuyen sang LOAD.parallelBegin()
                // Them dieu kien: LOAD.add() khong thuc hien --> tranh run func nay nhieu lan cung luc
                if( IDToLoad != null && is.preloaded && va.nLoadParallel >= oLoad.amountEachLoad && !$slide.data('isLoadAdd') ) {

                    // Kiem tra va.IDToLoad lan nua, khong empty -> cho truong hop: va.nLoadParallel > va.IDToLoad.length
                    for( i = va.nLoadParallel; i > 0 && IDToLoad != null && IDToLoad.length; i-- ) {
                        LOAD.next();
                    }
                }
            }
        },

        /**
         * LOADING THEM SLIDE MOI KHI SWAP DEN SLIDE DO'
         */
        add : function($slide) {
            var slData = $slide.data();

            // Kiem tra slide da load xong hay chua
            if( !slData.isLoading ) {

                // Sua lai bien loadAll
                is.loadAll = false;

                // Vi khong biet id slide current trong va.IDToLoad[] --> su dung vong lap
                // Lay index id trong mang va.IDToLoad
                // Kiem tra va.IDToLoad != null trong truong hop them slide bang 'API.addSlide'
                var IDToLoad = va.IDToLoad;
                if( IDToLoad != null ) {

                    for( i = IDToLoad.length - 1; i >= 0; i-- ) {
                        if( IDToLoad[i] == cs.idCur ) {

                            // Hoan doi id trong IDToLoad[], neu khong co trong thu tu load tiep theo
                            IDToLoad.splice(0, 0, IDToLoad.splice(i, 1)[0]);

                            // Break loop for
                            i = -1;
                        }
                    }
                }


                // Luu tru bien de nhan bien load bang LOAD.add() --> khong tai nua trong loadAmount
                slData.isLoaded = true;

                // Kiem tra load slide tiep theo
                LOAD.next($slide);
            }
        },




        /**
         * SETUP SLIDE HIEN TAI LUC BAT DAU
         */
        slideBegin : function($slide) {

            var ns      = va.ns,
                slData  = $slide.data(),
                slideID = slData.id;

            // Chen them class 'init' nhan biet bat dau khoi tao Code
            slideID == va.idBegin && $code.addClass(ns +'init');

            // Load: setup begin
            cs.ev.trigger('loadBegin', [$slide, slideID]);

            // Chi load binh thuong moi chay fn setupBegin
            slData.loadBy == 'normal' && LOAD.parallelBegin();

            // Remove class 'sleep' --> remove height = 100% && all children show
            $slide.removeClass(ns +'sleep');


            // Tim kiem Image duoc quan ly trong Code
            // Bat buoc phai class {ns}img hoac Image layer
            // SelectorImage : ".{ns}imgback, .{ns}img, img.{ns}layer"
            // Callback phien ban cu: ho tro 'imglazy'
            var selectorImage = '.'+ ns + o.nameImageBack +', .'+ ns + o.nameImageLazy +', img.'+ ns + o.nameLayer,
                $images       = $slide.find(selectorImage),

                // Tim kiem tat cac Images trong Code nested
                // Loai bo image trong Code nested --> khoi bi chong cheo' tinh toan
                $codeNested   = $slide.find('.'+ ns),    
                $imagesNested = $codeNested.find(selectorImage);
                $images = $images.not($imagesNested);


            // Setup data trong Slide hien tai
            var imageNum = $images.length;
            $slide.data({
                '$images'   : $(),
                'imageNum'  : imageNum,
                'nCur'      : 0,
                'isLoading' : true
            });



            /**
             * SETUP KICH THUOC VA TI LE CUA CODE O SLIDE DAU
             *  + Phuc vu kich thuoc ti le cua image luc ban dau
             */
            if( slideID == va.idBegin ) {

                // Lay kich thuoc width Code
                SIZE.widthForCode();
                // Responsive: tinh toa'n gia tri padding & va.rate
                is.res && RESPONSIVE.updateVars();
                va.rateInit = va.rate;


                // Toggle slide Current luc ban dau
                cs.idCur == 0 && cs.ev.trigger('start');
                M.toggleSlide();
            }



            /**
             * SETUP TAT CA IMAGES TRONG SLIDE
             */
            if( imageNum && is.IMAGE )
                IMAGE.setupEachSlide({ '$images': $images, '$slide': $slide, 'id': slideID });

            else
                LOAD.slideEnd($slide);
        },

        /**
         * SETUP SLIDE HIEN TAI SAU KHI DA LOADED XONG IMAGE
         */
        slideEnd : function($slide) {

            var hSlide = $slide.outerHeight(true),
                slData = $slide.data(),
                id     = slData.id;


            // Slide current: setting data
            slData.height   = hSlide;
            slData.isLoaded = true;


            /**
             * HIEN THI CODE VA SETUP CAC GIA TRI KHAC KHI LOAD XONG SLIDE DAU TIEN
             */
            if( !is.initLoaded ) {

                // Toggle class 'init' & 'ready' -> Code da san san
                $code.addClass(va.ns +'ready').removeClass(va.ns +'init');

                // SETUP CHIEU CAO CHO CODE O SLIDE DAU TIEN
                // --> Phai loai bo class 'init' truoc khi thuc hien fn --> khoi bi lag
                if( is.heightFixed ) SIZE.heightFixedForCode();
                else                 SIZE.heightAutoForCode(hSlide);

                // Kich thuoc cua Code tong hop tuy thuoc Direction
                SIZE.endOfCode();

                // Init: load continue
                INIT.load();
            }


            /**
             * SETUP VI TRI CUA IMAGE BACK
             */
            if( is.IMAGE ) {
                var $imgbackItem = $slide.data('$imgbackItem');
                !!$imgbackItem && IMAGE.backPosition($imgbackItem);
            }


            // Cap nhat kich thuoc va vi tri trong huo'ng Vertical
            !is.dirsHor && VERTICAL.slideLoaded();

            // Hien thi slide sau khi loaded het image.
            $slide.addClass(va.ns +'ready');


            // Layer: init, need va.hCode first!
            // layer.init($slide);
            // (id == cs.idCur) && layer.run(id, 'start');

            // Hotspot: init --> tuong tu nhu layer
            // hotspot.init($slide);
            // var HOTSPOT = rt01MODULE.HOTSPOT;
            // HOTSPOT && HOTSPOT.init(one, $slide);
            

            // Video, Map: init
            is.VIDEO && VIDEO.init($slide);
            // map.init($slide);


            // Icon loader: remove
            RENDER.loaderRemove($slide, '$slLoader');


            // SLideshow: play next --> khong phu hop voi 'isLazy' option
            // slData.isPlayNext && cs.play();


            // Events trigger: slide loaded
            cs.ev.trigger('loadSlide.'+ id);
            cs.ev.trigger('loadEnd', [$slide, id]);


            // Events 'loadAll' : khi va.IDToLoad[] empty
            if( va.IDToLoad != null && va.IDToLoad.length == 0 ) {
                is.loadAll = true;
                va.IDToLoad   = null;

                cs.ev.trigger('loadAll');
            }


            // Setup khi add new slide bang api add
            if( is.apiAdd ) {
                cs.refresh();       // Refresh Code lan nua khi load xong
                is.apiAdd = false;  // Bien return false --> de biet ket thuc update add
            }


            // Slide: load next, varible $slide for new add loading
            // O duoi cuoi cung --> tien func & so sanh o tren khong bi anh huong khi load new slide moi
            LOAD.parallelEnd($slide);
        }
    },







    /**
     * POSITION
     */
    POSITION = {

        /**
         * SETUP ANIMATION CUA DOI TUONG VOI VI TRI CO DINH
         */
        xAnimate : function($obj, nx, isNoAnim, isPosFixed, _speed, _ease) {

            /**
             * VALUE SETUP
             * Doi tuong translate la $obj --> neu khong co chon doi tuong swipeCur
             */
            var $swipe = ($obj === null) ? va.$swipeCur : $obj,
                p      = $swipe.is($canvas.add(va.$s)) ? va.can : va.pag,

                // Vi tri can di chuyen toi
                x = isPosFixed ? nx : (- nx * p.sTranslate + p.xCanvas),

                // Toc do va easing khi transition
                sp = _speed ? _speed : va.speed[cs.idCur],
                es = _ease ? M.easeName(_ease) : va.ease;

            // Setup Vi tri gioi ha.n trong Effect Carousel
            x = POSITION.xLimitInCarousel(x);

            // Cap nhat vi tri hien tai cua xCanvas
            p.xCanvas = x;



            /**
             * TRANSITION SETUP
             * Phan chi thanh 2 truong hop:
             *  + Ho tro transition css
             *  + Khong ho tro transition css
             */
            var tf = {};
            if( is.ts ) {

                // Clear timeout thuoc tinh transition
                clearTimeout($swipe.data('timer'));

                // Them thuoc tinh transition css vao Canvas
                if( !isNoAnim ) M.tsAdd($swipe, sp, es);

                // Canvas: set transform - important
                // Ho tro transition theo huong swipe
                var translate = (p.dirs == 'hor') ? 'tlx' : 'tly';
                tf[p.cssTf] = va[translate + 0] + x +'px'+ va[translate + 1];
                // setTimeout(function() { $swipe.css(tf) }, 4);
                $swipe.css(tf);

                // Clear thuoc tinh transition --> kiem soat tot hon
                $swipe.data('timer', setTimeout(function() { M.tsRemove($swipe) }, sp));
            }

            // Transition danh cho old brower --> su dung jQuery animate
            else {
                tf[p.cssTf] = x;

                if( isNoAnim ) $swipe.stop(true, true).css(tf);
                else           $swipe.animate(tf, {duration: sp, queue: false, easing: es});
            }
        },

        /**
         * SETUP VI TRI MIN - MAX TRONG HIEU UNG CAROUSEL
         */
        xLimitInCarousel : function(x) {

            // Dieu kien de gioi han vi tri trong hieu ung Carousel
            if( va.layout == 'line' && !is.loop && va.$swipeCur.is(va.$canvas) ) {
                var p = va.can;

                if     ( x > p.xMin ) x = p.xMin;
                else if( x < p.xMax ) x = p.xMax;
            }

            // Tra ve gia tri vi tri x Gioi han
            return x;
        },

        /**
         * SETUP DI CHUYEN DOI TUONG TOI VI TRI CO DINH
         */
        xTranslate : function($obj, nx, isPosFixed, xPlus, isHorCustom) {

            // Position: init
            var x;
            if( isPosFixed ) x = nx;
            else             x = nx * va.can.sTranslate;

            // Transform: add _xPlus
            if( $.isNumeric(xPlus) ) x += xPlus;

            // Object: set transform
            var tf     = {},
                isHor  = isHorCustom === undefined ? is.dirsHor : isHorCustom,
                tlName = isHor ? 'tlx' : 'tly';

            tf[cssTf] = is.ts ? M[tlName](x) : x;
            $obj.css(tf);
        },




        /**
         * CAN BANG CHO LAYOUT CENTER
         * @porpose
         *  + Di chuyen slide o vi tri edge
         *  + -> slides luon can bang so luong 2 ben sau khi Canvas move
         *
         * @howtodo
         *  + Xac dinh bao nhieu slide can di chuyen --> vong lap di chuyen tung slide
         *  + Di chuyen tung slide: xac dinh id slide can di chuyen, vi tri(p) se di chuyen toi
         *  + -> thuc hien di chuyen bang xTranslate()
         */
        balance : function(isContinuity, isOne, speed) {
            // Dieu kiem thuc hien function
            if( !is.loop ) return;


            // Kiem tra di chuyen 'next' hay 'prev' slide
            // Di chuyen 'next' va 'prev' co cung cach thuc nhu nhau --> chi khac doi so
            var isNext = va.nMove > 0,

                // Thuoc tinh luu tru su khac nhau khi di chuyen 'next' hay 'prev'
                a = isNext ? { is : 1, s : 1, id0 : 0, idN : num - 1 }
                           : { is : 0, s : -1, id0 : num - 1, idN : 0 },

                // So luong slide di chuyen duoc ket hop voi options 'isOne', mac dinh la va.nMove
                nMove = isOne ? 1 : M.a(va.nMove);


            // Toc do khi translate --> cang nhieu slide thi toc do cang nho
            a.speed = (speed === undefined) ? va.speed[cs.idCur] : speed;

            // Chen nhung option khac vao namespace
            a.isContinuity = isContinuity;


            // Swap slide to balace
            var w = va.can.sTranslate,
                id, xCur, tf;

            for( i = 0; i < nMove; i++ ) {

                // GIA TRI CUA SLIDE RIA --> dich chuyen varible trong array
                // id: lay id slide of first array
                // xCur : Lay vi tri of last array + wslide
                // tf: vi tri thanh tranform
                id   = va.idMap[a.id0];
                xCur = va.pBegin[a.idN] + (w * a.s);


                // Gia tri Transform cho truong hop view
                var tf = {};
                if( va.view == 'basic' || va.view == 'mask' ) {
                    var tl = is.dirsHor ? 'tlx' : 'tly';            // Translate bang css3
                    tf[cssTf] = M[tl](xCur);
                }
                else if( va.view == 'coverflow' ) {

                    // Setup transform cua slide ria
                    tf = VIEW.transform1(xCur, - o.coverflow.rotate * a.s);
                    tf['z-index'] = va.zMap[a.idN]-1;
                }
                else if( va.view == 'scale' ) {

                    // Setup transform cua slide ria
                    tf = VIEW.transform2(xCur, o.scale.intensity/100);
                }



                // Update gia tri trong namespace
                var aIS = a.is;
                M.shift(va.idMap, aIS);
                M.push(va.idMap, id, aIS);

                M.shift(va.pBegin, aIS);
                M.push(va.pBegin, xCur, aIS);

                M.shift(va.tfMap, aIS);
                M.push(va.tfMap, tf, aIS);



                // Setup transition cua slide ria khi Code chi co 3 SLIDES
                // Neu khong thi loai bo transtion
                var ts = {}, slEdge = va.$s.eq(id);
                if( va.view != 'basic' && num == 3 ) {

                    // Xoa bo timer clear transition(neu co) truoc khi assign transition
                    clearTimeout(slEdge.data('timer'));

                    ts = M.ts(cssTf, a.speed, va.ease);
                    slEdge.data('timer', setTimeout(function() { M.tsRemove(slEdge) }, a.speed));
                }
                else ts[cssTs] = '';


                // Assign transition va transform moi vua setup vao slide can di chuyen
                slEdge.css(ts).css(tf);

                // UPDATE SLIDE CHINH GIUA VA CANVAS
                var balanceName = 'balance'+ va.View;
                !!VIEW[balanceName] && VIEW[balanceName](a);
            }
        },

        /**
         * COPY SLIDES VAO CHO TRONG KHI DI CHUYEN BANG PAGINATION
         * @purpose
         *  + Khi di chuyen bang pagination --> slide o vi tri edge tu dong di chuyen de tat ca slide can bang
         *  + Khi do xuat hien khoang trang do slide edge di chuyen --> copy slide edge giu nguyen vi tri --> sau time translate thi loai bo slide da copy.
         */
        fillHole : function() {
            // Dieu kien thuc hien function
            if( va.view != 'basic' || !is.loop ) return;

            // Kiem tra slideClone - remove
            va.$slClone.length && va.$slClone.remove();


            // Kiem tra clone slide hay ko
            // Khi pagination ma chi di chuyen slide an sau Viewport thi khong can thiet clone slide.
            var center   = va.center,
                nMove    = (va.nMove > 0) ? center.nLeft : center.nRight,
                nMin     = nMove - center.nEdge,
                nMoveAbs = M.a(va.nMove);

            if( nMoveAbs > nMin ) {

                // clone slide - chi clone slide nhin thay
                // -> id get tu nMin
                for( i = nMin; i < nMoveAbs; i++ ) {

                    // Copy slide roi append vao Canvas
                    // Loai bo class 'Cur' neu co tren Slide Clone
                    var id = (va.nMove > 0) ? va.idMap[i] : va.idMap[num - 1 - i],
                        sl = va.$s.eq(id).clone().removeClass(va.ns + o.current).appendTo($canvas);

                    // Add slide vua moi clone vao bien --> remove toan bo slide clone sau khi di chuyen xong
                    va.$slClone = va.$slClone.add(sl);
                }

                // Xoa bo tat ca slide clone sau khi transition ket thuc
                clearTimeout(ti.fillHole);
                ti.fillHole = setTimeout(function() {

                    va.$slClone.remove();
                }, va.speed[cs.idCur] + 10);
            }
        },




        /**
         * SETUP CHUYEN DONG REBOUND KHI TAP VAO NAVIGATION KHONG CHO DI CHUYEN
         */
        animRebound : function(dirs) {
            if( !o.isAnimRebound ) return;

            // Bien shortcut va khoi tao ban dau
            var p      = va.can,
                layout = va.layout,
                isNext = dirs == 'next',
                sign   = isNext ? -1 : 1,

                tSpeed = 150,                           // Thoi gian chuyen dong
                plus   = 30,                            // x plus value, unit px
                xBack  = isNext ? p.xMax : p.xMin,      // Vi tri ban dau cua Canvas
                xLimit = 130 * sign + xBack;            // Vi tri gio han de Canvas quay tro lai --> +/-130px



            /**
             * LAY GIA TRI CUA VI TRI HIEN TAI -> HO TRO LAY VI TRI CANVAS DI CHUYEN
             */
            var xCur = $canvas.css(cssTf);
            if( is.ts ) xCur = (xCur == 'none') ? xBack : M.valueX(xCur);
            else        xCur = (xCur == 'auto') ? xBack : M.pInt(xCur);
            


            /**
             * SETUP ANIMATION CHO CANVAS
             */
            var xGo = plus * sign + xCur,

                // Function chuyen dong Go va Back
                fnGo   = function() { POSITION.xAnimate(null, xGo, 0, 1, tSpeed) },
                fnBack = function() { POSITION.xAnimate(null, xBack, 0, 1) };

            /* xGo: limited value
                --> khi Canvas di chuyen vuot qua gioi han cho phep
                --> Canvas di chuyen ve vi tri ban dau */
            if( xGo/sign > xLimit/sign ) {
                fnBack();
            }

            // /* Animate run
            //     --> Se cho Canvas di 1 doan --> setup timer de quay tro lai */
            else {
                fnGo();
                clearTimeout(ti.rebound);
                ti.rebound = setTimeout(fnBack, tSpeed);
            }
        },

        /**
         * SETUP TIEP TUC DI CHUYEN KHI NGUNG SWIPE - BANH DA`
         */
        flywheel : function() {
            var isCanvas = $canvas.is(va.$swipeCur),
                p        = isCanvas ? va.can : va.pag;


            // Di chuyen cho pagination truoc
            if( !isCanvas ) {

                /**
                 * DIEU KIEN DE BA'NH DA` DI CHUYEN:
                 *  + O trong pham vi Viewport
                 *  + Thoi gian swipe nho hon 200ms
                 *  + Di chuyen tam thoi phai lon hon 1 sTranslate --> truong hop slide chinh
                */
                var tDrag      = va.tDrag1 - va.tDrag0,
                    isContinue = (va.xBuffer < 0 && va.xBuffer > p.xMax) && (tDrag < 200) && (M.a(va.xOffset) > 10);
                if( !isContinue ) return;


                /**
                 * TIEP TUC THUC HIEN FUNCTION
                 */
                var xOff    = va.pageX1 - va.x0Fix,     // khoang cach swipe duoc --> lay dung gia tri thay vi xOffset
                    xTarget = va.xBuffer + xOff,

                    /**
                     * wLimit : Khoang cach gioi han
                     *  + Ho tro kiem tra tiep tuc co flywheel hay khong --> khoang cach giua x[0], x[1] > wLimit
                     *  + Ho tro di chuyen pag thang toi vie`n neu' thieu' khoang cach wLimit
                     */
                    wLimit = 50;

                // Truong hop vi tri can di chuyen toi cach' vien 1 khoang cach wLimit
                if     ( xTarget + wLimit > 0 )      xTarget = 0;
                else if( xTarget - wLimit < p.xMax ) xTarget = p.xMax;

                // Setup translate cho pagination
                PAG.translateTo(xTarget);
            }
        },




        /**
         * DI CHUYEN CANVAS TOI VI TRI LUC BAN DAU
         *  + Code center: xCanvas da co gia tri --> func() chi de update gia tri tren Canvas
         *  + Loai bo transition khi update
         */
        canvasBegin : function() {

            /**
             * VI TRI BAN DAU CUA CANVAS
             * @param int xCanvas
             *  + Sau khi resize --> Canvas va slide deu reset lai position --> xCanvas cung reset lai
             *  + Code center --> xCanvas: tinh toan vi tri lui` lai cua Canvas
             */
            var layout = va.layout,
                p      = va.can,
                xBegin = 0;

            // Vi tri bat dau o layout Line
            if( layout == 'line' && is.center ) {
                var sSlideCur = is.dirsHor ? va.wSlide
                                           : va.$s.eq(cs.idCur).outerHeight(true);

                xBegin = M.r( (va.sCode - sSlideCur)/2 );
            }

            // Update vi tri bat dau cua Canvas
            p.xCanvas = xBegin;



            /**
             * VI TRI GIOI HAN CUA CANVAS -> SWIPE BUFFER BI GIAM TI LE
             * @param int xMin
             * @param int xMax
             */
            if( layout == 'dot' )
                p.xMin = p.xMax = 0;

            else if( layout == 'line' ) {
                // Vi tri toi thieu cua Canvas
                p.xMin = xBegin;

                // Kich thuoc To?ng co.ng cua tat ca cac Slide
                // Dong thoi loai bo? Margin left cua Item dau` va Margin right cua Item cuoi'
                var sSlideAll = M.sum(va.sSlideMap) - (va.ma[0] + va.ma[1]);

                // Vi tri Toi da cua Canvas
                if( va.wCode < sSlideAll )
                    p.xMax = - (sSlideAll - va.wCode + xBegin);
                else
                    p.xMax = xBegin;
            }



            /**
             * DI CHUYEN CANVAS TOI VI TRI DA SLIDE HIEN TAI
             */
            va.$swipeCur = $canvas;
            M.tsRemove($canvas, true);

            if( is.loop ) POSITION.xAnimate(null, xBegin, true, true);
            else          POSITION.xAnimate(null, cs.idCur, true);
        }
    },







    /**
     * SIZES
     */
    SIZE = {

        /**
         * LAY VALUE MARGIN
         * @param array va.ma Gia tri thu 1 la 'left', thu 2 la 'right'
         */
        margin : function() {

            /**
             * KIEM TRA VA LAY GIA TRI CUA MARGIN PHU HOP
             */
            var wMin   = 1e5,
                id     = null,
                margin = va.maRange,
                wCode  = va.wCode,
                wWin   = $w.width();

            if( !!va.maRange ) {
                for( i = margin.num - 1; i >= 0; i-- ) {

                    // Tim kiem doi tuong co gia tri nam` trong gioi ha.n
                    // Uu tien cho doi tuong co gia tri 'to' nho nhat
                    if( margin[i].from <= wWin && wWin <= margin[i].to ) {
                        if( wMin >= margin[i].to ) {

                            wMin = margin[i].to;
                            id   = i;
                        }
                    }
                }
            }

            // Lay gia tri cua margin
            // Ho tro gia tri cua Margin theo ti le %
            if( id != null )
                va.ma = [ M.pPercent(margin[id].left, wCode), M.pPercent(margin[id].right, wCode) ];
            else
                va.ma = [0, 0];



            /**
             * TU DONG LAY MARGIN KHI VIEWPORT CO PADDING
             * Fixed khi Viewport co CSS styled -> nhin thay cac slide tren Viewport
             */
            if( !va.maRange ) {
                if( is.dirsHor && va.wCode != $viewport.innerWidth() ) {
                    va.ma[0] = M.pInt($viewport.css('padding-left'));
                    va.ma[1] = M.pInt($viewport.css('padding-right'));
                }

                if( !is.dirsHor && va.hCode != $viewport.innerHeight() ) {
                    va.ma[0] = M.pInt($viewport.css('padding-top'));
                    va.ma[1] = M.pInt($viewport.css('padding-bottom'));
                }
            }
        },

        /**
         * KICH THUOC BAO GOM MARGIN CUA SLIDE
         * @param int va.wSlideFull
         * @param int va.can.sTranslate
         */
        sTranslate : function() {

            // Lay gia tri cua Margin
            SIZE.margin();

            // Assign value
            // Mac dinh wTranlate = wSlideFull --> cac view khac se update gia tri sau
            va.wSlideFull = va.can.sTranslate = va.wSlide + va.ma[0] + va.ma[1];
        },




        /**
         * SETUP CHIEU RONG TRONG CODE
         * @param init va.wCode
         */
        widthForCode : function() {

            /**
             * TABS VERTICAL
             * SETUP MARGIN CHO VIEWPORT -> LAY CHIEU RONG "va.wCode" CHINH XAC
             */
            if( is.pag && !!va.pagVer ) {

                // Neu khong co Kich thuoc Margin thi ti'nh kich thuoc cua Pag Item truoc
                !va.pag.maRight && PAG.getSizeOfItems();
                PAG.marginOnViewport();
            }



            /**
             * KICH THUOC CHIEU RONG CUA CODE
             */
            va.wCode = $viewport.width();



            /**
             * SETUP KICH THUOC WIDTH CUA SLIDE
             * @param int va.wSlide
             */
            // Setup Huo'ng Horizontal
            var wSlide = null;
            if( is.dirsHor ) {

                // Lay gia tri cua Chieu rong cua Slide tu ma?ng Range
                wSlide = M.getValueInRange(va.sSlideRange, 'width');

                // Chuyen doi unit percent sang px, don vi percent trong khoang [0, 1]
                if( wSlide > 0 && wSlide <= 1 ) wSlide *= va.wCode;
            }

            // Setup Huo'ng Vertical
            else {
                wSlide = va.wCode;
            }

            // Lam tro`n gia tri wSlide
            va.wSlide = M.pInt(wSlide);
        },

        /**
         * SETUP CHIEU CAO CHO VIEWPORT DE PHUC VU ANIMATE HEIGHT TRONG HEIGHT-AUTO
         */
        heightLockForAnim : function() {
            
            // Truoc tien setup Chieu cao co dinh hien tai cho Viewport
            $viewport.css('height', $viewport.height());

            // Setup timer de loai bo Chieu cao co' dinh cho Viewport
            clearTimeout(ti.heightLock);
            ti.heightLock = setTimeout(function() {

                $viewport.css('height', '');
            }, o.speedHeight + 10);
        },

        /**
         * SETUP HIEU UNG ANIMATE HEIGHT CHO CODE
         * @param int va.hCode
         */
        animHeightForCode : function(isUpdateResize) {
            var timePlus = 30;

            // Ho tro smoothHeight cho doi tuong Canvas & PagInner
            var fnSmoothHeight = function(height) {

                // Assign value chieu cao cua Code
                // Kich thuoc cua Viewport thay doi theo huong swipe
                va.hCode = height;
                if( !is.dirsHor ) va.sCode = height;


                /**
                 * HIEU U'NG ANIMATION HEIGHT
                 *  + Loai bo hieu u'ng neu speedHeight = null || Resize event
                 */
                if( o.speedHeight === null || isUpdateResize ) {
                    M.scroll.check();
                }

                else {
                    var speedHeight = o.speedHeight - timePlus;

                    // Setup Hieu uo'ng animation
                    $viewport
                        .stop()
                        .rt01Animate({ 'height': height }, {
                            duration : speedHeight,
                            complete : function() {

                                // Da?m ba?o loai bo Chieu cao co' dinh tren Viewport
                                $viewport.css('height', '');

                                // Update gia tri cac bie'n lien quan scroll browser
                                M.scroll.check();
                            }
                        });
                }
            },



            /**
             * KIEM TRA CHIEU CAO THAY DOI TREN VIEWPORT
             */
            fnCheckHeightChange = function() {

                // Lay chieu cao hien tai cua slide current
                var hCur = va.$s.eq(cs.idCur).outerHeight(true);


                // Smooth resize height Code when move to near slide
                // Them options isUpdateResize de luon luon run fnSmoothHeight()
                // Tranh truong hop khi update, va.hCode == hCur --> khong chay smoothHeight()
                if( !is.heightFixed && ((va.hCode != hCur && hCur > 0) || !!isUpdateResize) ) {
                    fnSmoothHeight(hCur);


                    /**
                     * UPDATE CAC GIA TRI CUA PAG VER KHI THAY DOI CHIEU CAO
                     *  + Smooth height cho pagination chieu huong vertical
                     */
                    if( is.pag && !is.pagList && va.pag.dirs == 'ver' && !is.outsidePag && o.pag.sizeAuto == 'full' ) {
                        PAG.propAndStyle();
                    }
                }
            };



            /**
             * FUNCTION SELECT
             * Setup timer cho animHeightForCode --> THAY DOI CHIEU CAO SAU CUNG
             * >= 30 ms --> layout DOT khi toggle class 'hNative' can delay cho old browser ???
             */
            setTimeout(fnCheckHeightChange, timePlus);
        },




        /**
         * SETUP CHIEU CAO CUA HEIGHT AUTO KHI LOAD XONG SLIDE DAU TIEN
         * @param int va.hCode
         */
        heightAutoForCode : function(hSlide) {

            // Luu tru va setup Chieu cao luon luon la so nguyen
            va.hCode = M.pInt(hSlide);
        },

        /**
         * SETUP CHIEU CAO CUA HEIGHT FIXED CHO CODE
         * @param int va.hCode
         */
        heightFixedForCode : function() {

            // Function setup chieu cao cho Viewport
            var fnHeightForViewport = function(h) { $viewport.css('height', h) };


            /**
             * SETUP TRONG CHE DO FULLSCREEN
             */
            if( o.isFullscreen ) {
                var hWin = $w.height();


                /**
                 * SETUP KICH THUOC HEIGHT KHI CO DOI TUONG 'OFFSET'
                 */
                if( o.offsetBy != null ) {
                    var hOffset = 0,
                        isImg   = false;

                    // Lay kich thuoc Chieu cao cua doi tuong Offset
                    var $offset = $(o.offsetBy);
                    $offset.each(function() {
                        hOffset += $(this).outerHeight(true);
                    });

                    // Kiem tra doi thuong 'Offset' co chua Image hay khong
                    if( $offset.find('img').length ) isImg = true;

                    // Height Code will substract by height offsetBy container
                    hWin -= hOffset

                    // Cap nhat lai Vi tri + Kich thuoc Code khi Doi tuong 'Offset' chua Image
                    if( isImg ) $w.load(function() { cs.refresh() });
                }

                va.hCode = hWin;
                fnHeightForViewport(va.hCode);
            }



            /**
             * SETUP BINH THUONG 
             */
            else {

                // Muc do uu tien cua height Code: va.hRes > height css > o.height
                // Assign height Viewport when have height repsonsive
                if( va.hRes ) {
                    va.hCode = M.r(va.hRes * va.rate);
                    fnHeightForViewport(va.hCode);
                }
                else {

                    // Height value in css
                    var h = $viewport.height();

                    // Kiem tra neu set Chieu cao tu option khac chieu cao trong css
                    if( is.heightFixed && h != o.height ) {
                       h = o.height;
                       fnHeightForViewport(h);
                    }

                    if( !h ) h = 0;
                    va.hCode = h;
                }
            }
        },

        /**
         * KICH THUOC CHO CODE SUA KHI BIET GIA TRI WIDTH - HEIGHT
         */
        endOfCode : function() {

            /**
             * KIEM TRA WIDTH CUA CODE THAY DOI THI UPDATE LAI GIA TRI CUA WIDTH-HEIGHT
             */
            if( va.wSlide != $viewport.width() ) {

                // Lay Chieu rong cua Code truoc tien.
                SIZE.widthForCode();
                // Responsive: calculation padding & va.rate
                is.res && RESPONSIVE.updateVars();
                // Lay Chieu cao cua Code truoc tien -> Ho tro. image autofit/autofill
                is.heightFixed ? SIZE.heightFixedForCode()
                               : SIZE.heightAutoForCode( va.$s.eq(cs.idCur).outerHeight(true) );
            }


            /**
             * SETUP CAC BIEN CO LIEN QUA TOI DIRECTION
             */
            // Bien hien thi kich thuoc (width/height) cua Code
            va.sCode = is.dirsHor ? va.wCode : va.hCode;
        }
    },







    /**
     * VIEW
     */
    VIEW = {

        /**
         * FUNCTION TINY
         */
        // Transform Translate ket hop voi Rotate
        transform1 : function(x, ndeg) {

            var con = 'translate3d('+ x.toFixed(1) +'px, 0, 0)';
            if( ndeg != undefined ) con += ' rotateY('+ ndeg.toFixed(1) +'deg)';

            var tf = {}; tf[cssTf] = con;
            return tf;
        },

        // Transform Translate ket hop voi Scale
        transform2 : function(x, nScale) {

            var con = 'translate3d('+ x.toFixed(1) +'px, 0, 0)';
            if( nScale != undefined ) con += ' scale('+ nScale +')';

            var tf = {}; tf[cssTf] = con;
            return tf;
        },



        /**
         * SETUP THUOC TINH KHI RESIZE TRONG FN SIZE
         */
        sizeBasic : function() {

            var pBegin    = va.pBegin    = [],
                sSlideMap = va.sSlideMap = [],
                nBegin    = is.centerLoop ? va.center.nLeft : 0,
                p         = va.can;


            /**
             * LUU TRU VI TRI CUA TUNG SLIDE
             * @param array va.pBegin
             */
            // Kich thuoc mac dinh cua Slide cho huo'ng Horizontal
            if( is.dirsHor ) {
                for( i = 0; i < num; i++ ) {

                    sSlideMap[i] = va.wSlideFull;
                    pBegin[i] = sSlideMap[i] * (- nBegin + i);
                }
            }

            // Kich thuoc cua Slide cho huo'ng Vertical
            else {

                var fnHeightSlideCur = function(id) {
                    return va.$s.eq(id).outerHeight(true) + va.ma[0] + va.ma[1];
                };
                
                // Truong hop Center Loop
                if( is.centerLoop ) {
                    var hTopPlus    = 0,
                        hBottomPlus = 0;

                    // Vi tri cua Phia tren
                    for( i = nBegin; i < num; i++ ) {
                        sSlideMap[i] = fnHeightSlideCur(va.idMap[i]);
                        pBegin[i] = hTopPlus;
                        hTopPlus += sSlideMap[i];   // Vi tri bat dau = 0 -> Phai nam phia duoi
                    }

                    // Vi tri cua Phia duoi
                    for( i = nBegin - 1; i >= 0; i-- ) {
                        sSlideMap[i] = fnHeightSlideCur(va.idMap[i]);
                        hBottomPlus -= sSlideMap[i];
                        pBegin[i]    = hBottomPlus;
                    }
                }

                // Truong hop khong phai Center Loop
                else {
                    for( i = 0; i < num; i++ ) {
                        3[i] = fnHeightSlideCur(i);
                        pBegin[i] = sSlideMap[i] * i;
                    }
                }
            }



            /**
             * SETUP TRANSFORM VI TRI CUA TUNG SLIDE DUA VAO VI TRI DA LUU TRU O TREN
             */
            var isHor     = p.dirs == 'hor',
                translate = isHor ? 'tlx' : 'tly',
                tf        = {},
                id;

            va.tfMap = [];
            for( i = 0; i < num; i++ ) {
                id = is.centerLoop ? va.idMap[i] : i;

                tf[p.cssTf] = M[translate](pBegin[i]);

                va.tfMap.push(tf);          // add vao namespace transform
                va.$s.eq(id).css(tf);       // Dat slide o vi tri dinh san
            }
        },




        /**
         * SETUP VIEW CUA FX FADE
         */
        bufferFade : function(sign) {

            /**
             * XAC DINH SLIDE CURRENT VA NEXT
             */
            var isNextSlide = sign > 0,
                idCur       = cs.idCur,
                idNext;

            // Xac dinh ID cua Slide Next
            if( isNextSlide ) {
                idNext = idCur + 1;
                if( idNext >= num ) idNext = 0;
            }
            else {
                idNext = idCur - 1;
                if( idNext < 0 ) idNext = num - 1;
            }

            // Doi tuong Slide Current va Slide Next
            var $slideCur  = va.$s.eq(idCur),
                $slideNext = va.$s.eq(idNext);



            /**
             * TOGGLE CLASS 'NEXT' TREN SLIDE NEXT CU VA MOI
             */
            var classNext = va.ns +'next';;
            if( cs.idNext != idNext ) {

                // Loai bo class 'next' va 'opacity' cho  Slide Next cu~
                if( $.isNumeric(cs.idNext) )
                    va.$s.eq(cs.idNext).css('opacity', '').removeClass(classNext);

                $slideNext.addClass(classNext);
            }

            // Luu tru lai idNext
            cs.idNext = idNext;
            


            /**
             * SETUP OPACITY TREN SLIDES
             */
            // Ti le xBuffer so voi Chieu dai cua Slide
            var rate = $.easing.easeOutQuad(null, M.a(va.xBuffer), 0, 1, va.wSlide);
            rate = parseFloat(rate.toFixed(3));

            var opacityCur  = 1 - rate,
                opacityNext = rate;

            $slideCur.css('opacity', opacityCur);
            $slideNext.css('opacity', opacityNext);
        },

        /**
         * PHUC HOI TRANG THAI KHI DUNG SWIPE
         */
        restoreFade : function() {
            
            // Lay idLast tu idNext -> De setup hieu ung Fade
            cs.idLast = cs.idNext;

            // Loai bo class 'next' tren Slide Next
            va.$s.eq(cs.idNext).removeClass(va.ns +'next');
            // Loai bo idNext -> boi vi da~ loai bo class 'next' -> toggle class trong bufferFade()
            cs.idNext = null;

            // Thuc hien hieu u'ng Fade -> Khong di chuyen thi khong thuc hien
            (va.xBuffer != 0) && FX.fade();
        },

        /**
         * RESET HIEU U'NG KHI SWIPE LIEN TUC
         */
        continuityFade : function() {
            
            // Loai bo css Opacity khoi Slide Last
            var $slideLast = va.$s.eq(cs.idLast);
            $slideLast.css({ 'opacity': '' });

            // Setup cac bien ket thuc hieu u'ng
            TOSLIDE.end();
        }
    },







    /**
     * UPDATE SIZE & POSITION IN DIRECTION VERTICAL
     */
    VERTICAL = {

        /**
         * UPDATE KICH THUOC VA VI TRI KHI SLIDE LOADED XONG
         */
        slideLoaded : function() {
            // Kich thuoc cua cac Slide
            VIEW.sizeBasic();

            // Update vi tri cua Canvas lai khi update vi tri cua tung Slide
            if( va.layout == 'line' ) POSITION.canvasBegin();
        }
    },







    /**
     * SWAP TO OTHER SLIDE
     */
    TOSLIDE = {

        /**
         * SETUP KHI BAT DAU DI CHUYEN DEN SLIDE KE TIEP
         */
        run : function(nSlide, isIDFixed, isContinuity, isPagCenter) {
            var nCur = cs.idCur;

            // Kiem tra dieu kien thuc hien fn
            if( !is.lockNav && (!isIDFixed || (isIDFixed && nCur != nSlide)) ) {

                /**
                 * SLIDETO : LUU TRU CAC THUOC TINH LUC BAN DAU
                 */
                va.ts = {
                    'num'          : nSlide,
                    // ID cua Slide truc tiep hay khong
                    'isIDFixed'    : !!isIDFixed,
                    // Swipe lien tuc hay khong
                    'isContinuity' : !!isContinuity,
                    // Mac dinh khong co lam center
                    'isPagCenter'  : (isPagCenter === undefined) ? true : !!isPagCenter
                };



                /**
                 * SETUP CAC BIEN BAN DAU
                 *  + fxRun : ho tro Slideshow + setup Tabs Ver khi Body resize
                 *  + slideNext : di chuyen next hay prev
                 */
                is.fxRun = true;
                $code.addClass(va.ns +'fxRun');

                is.slideNext = isIDFixed ? (nSlide - cs.idCur > 0) : (nSlide > 0);
                cs.ev.trigger('fxBegin');



                /**
                 * SETUP CAC THANH PHAN KHAC TRONG SLIDE DA~ LOADED
                 */
                if( va.$s.eq(nCur).data('isLoaded') ) {

                    // layer.slidePause(nCur);                  // Layer current pause
                    is.VIDEO && VIDEO.slideDeactived(nCur);     // Do'ng lai tat ca? cac Video
                    // map.slideClose(nCur);                    // Map current close
                }

                // Slideshow: setup stop timer khi chay hieu ung chuyen slide
                is.slideshow && SLIDESHOW.go('slideToBegin');



                /**
                 * MAIN SETUP
                 */
                // Callback func: start && before
                isIDFixed ? (nSlide == 0) && cs.ev.trigger('start')
                          : (nCur + nSlide == 0 || nCur + nSlide - num == 0 ) && cs.ev.trigger('start');
                cs.ev.trigger('before');

                // ID: convert to ts.num
                if( isIDFixed ) va.ts.num -= nCur;

                // Easing transition cua Canvas
                var es;
                if     ( va.moveBy == 'swipe' && va.moveLastBy != 'swipe' ) es = o.swipe.easing;
                else if( va.moveBy == 'tap' && va.moveLastBy != 'tap' )     es = o.fxEasing;

                if( es ) {
                    va.ease = M.easeName(es);
                    va.moveLastBy = va.moveBy;
                }

                // Tiep tuc setup tuy theo Layout
                TOSLIDE[va.layout]();
            }
        },




        /**
         * SETUP KE TIEP TRONG LAYOUT 'LINE'
         */
        line : function() {
            var ts = va.ts;

            // Toggle ID current
            TOSLIDE.toggleID();
            !is.heightFixed && SIZE.animHeightForCode();
            // Setup khi slide chay xong effect --> dat vi tri dau cho giong nhau
            clearTimeout(ti.lineEnd);
            ti.lineEnd = setTimeout(TOSLIDE.end, va.speed[cs.idCur]);



            /**
             * DI CHUYEN DOI TUONG CANVAS HUONG HORIZONTAL
             */
            if( is.dirsHor ) {
                if( is.centerLoop ) {

                    // Di chuyen bang Tap Pagination
                    if( ts.isIDFixed ) {
                        POSITION.fillHole();
                    }

                    TOSLIDE.lineTranslate();
                }

                // Setup mac dinh, Di chuyen den doi tuo.ng ke tiep
                else {
                    !ts.isContinuity && POSITION.xAnimate($canvas, ts.num);
                }
            }
            

            /**
             * DI CHUYEN DOI TUONG CANVAS HUONG VERTICAL
             */
            else {
                if( is.centerLoop ) {

                    if( M.a(ts.num) == 1 ) {
                        var id         = ts.num > 0 ? cs.idLast : cs.idCur,
                            hSlideCur  = va.$s.eq(id).outerHeight(true) + va.ma[0] + va.ma[1],
                            xTranslate = - (hSlideCur * ts.num - va.can.xCanvas);

                        // CHUA HOAN THANH --> DUNG TAI DAY
                        POSITION.balance(ts.isContinuity);
                        !ts.isContinuity && POSITION.xAnimate($canvas, xTranslate, false, true);
                    }
                }
            }
        },

        /**
         * TACH CHUYEN DONG THANH NHIEU CHUYEN DONG NHO KHI TAP PAGITEM
         */
        lineTranslate : function() {
            var ts = va.ts,
                n  = M.a(ts.num);

            /**
             * SETUP DANH CHO VIEW KHAC DI CHUYEN LON 1 SLIDE
             */
            if( va.view != 'basic' && n > 1 ) {

                var tOne = ~~(va.speed[cs.idCur] / n),  // Thoi gian di chuyen tung slide
                    t    = 0,
                    sign = ts.num > 0 ? 1 : -1;         // Phan biet 'next' hay 'prev'

                // Function setup transform tung slide
                var fnTranslateOne = function(_time, _es) {
                    setTimeout(function() {

                        // Easing rieng cho tach chuyen dong nay
                        va.ease = M.easeName(_es);
                        va.moveLastBy = 'multi';

                        POSITION.balance(ts.isContinuity, sign, tOne + 100);
                        !ts.isContinuity && POSITION.xAnimate($canvas, sign, 0, 0, tOne + 100);
                    }, _time - 100);
                };

                // Tang thoi gian sau khi set timer
                for( i = 0; i < n; i++, t += tOne) {

                    var es = (i == n-1) ? o.fxEasing : 'linear';
                    fnTranslateOne(t, es);
                }

                // Setup lock swipe va lock TOSLIDE.run() khi thuc function multi run
                is.lockSwipe = is.lockNav = true;
                setTimeout(function() { is.lockSwipe = is.lockNav = false; }, va.speed[cs.idCur]);
            }


            /**
             * SETUP VIEW BASIC HOAC DI CHUYEN 1 SLIDE
             */
            else {

                POSITION.balance(ts.isContinuity);
                !ts.isContinuity && POSITION.xAnimate($canvas, ts.num);
            }
        },

        /**
         * SETUP KE TIEP TRONG LAYOUT 'DOT'
         */
        dot : function() {
            var ts = va.ts;

            // Toggle ID current
            // Them timer khi toggle class --> khac phuc loi nhap' nhay' ban dau khi thuc hien hieu u'ng 'Math'
            if( va.fxType == 'math' ) ts.isDelayWhenToggleID = true;
            TOSLIDE.toggleID();

            // Setup Animation height cho Viewport trong Height-Auto
            !is.heightFixed && SIZE.animHeightForCode();


            // Bien namespace va khoi tao ban dau
            var f = {};
            f.isNext  = ts.num > 0;
            f.$slLast = va.$s.eq(cs.idLast);
            f.$slCur  = va.$s.eq(cs.idCur);

            // FxFunc run setup
            if( ts.isContinuity && va.view == 'fade' )
                VIEW.continuityFade();
            else
                FX.init(f);
        },




        /**
         * CHUYEN DOI ID HIEN TAI VOI ID LAST
         */
        toggleID : function() {

            /**
             * SETUP GIA TRI CHIEU CAO CHO VIEWPORT TRONG HEIGTH-AUTO DE TAO RA HIEU UNG ANIMATE HEIGHT
             *  + Loai bo hieu ung neu speedHeight = null
             */
            !is.heightFixed && (o.speedHeight !== null) && SIZE.heightLockForAnim();




            /**
             * THAY DOI GIA TRI CUA ID CURRENT VA LAST
             */
            var ts    = va.ts,
                idCur = cs.idCur,
                // Luu tru so Slide di chuyen
                nMove = va.nMove = ts.num;

            // Luu tru idLast va cap nhat id current
            // idLast2 --> Ho tro loai fx css khi swap slide lien tiep
            cs.idLast2 = cs.idLast;             
            cs.idLast  = idCur;


            // idCur return value when out range [0, num]
            idCur += nMove;
            if( is.loop ) {
                if(      nMove < 0 && idCur < 0 )    idCur = num-1;
                else if( nMove > 0 && idCur >= num ) idCur = 0;
            }

            // ID current chuyen sang id moi
            // Ket hop voi event swapID
            cs.ev.trigger('beforeSwapIDCur');
            cs.idCur = idCur;
            cs.ev.trigger('afterSwapIDCur');


            // Them timer cho hieu u'ng layout dot : Browser Chrome bi. loi -> slide shake
            // Neu them delay thi trong M.toggleSlide() --> su dung phuong phap cu: va.$s.not($slCur).removeClass(current)
            // --> vi trong may yeu', setTimeout co the bi bo? qua neu click lien tuc
            if( !!ts.isDelayWhenToggleID ) setTimeout(M.toggleSlide, 10);
            else                           M.toggleSlide();




            /**
             * SETUP PAG TABS ITEM CURRENT DI CHUYEN TOI VI TRI CHINH GIUA
             * Dieu kien :
             *  + Chi di chuyen chinh giua ki swipe tren body Code
             *  + Khi Tap tren Pag Item
             *  + Tabs Ver luon luon thuc hien function nay`
             */
            if( is.pag && !is.pagList && ts.isPagCenter
            &&  (va.moveBy == 'swipe' || (va.moveBy == 'tap' && o.pag.isItemCurCenterWhenTap) || va.pag.dirs == 'ver') ) {

                // Boi vi posCenter cho Tabs Ver luon cap nhat thuoc tinh PAG.propAndStyle --> isForce = true : khong chuyen dong sai vi tri'
                var isForceTf = (va.pag.dirs == 'ver') ? true : false;
                PAG.posCenterForItemCur(isForceTf);
            }
        },


        /**
         * SETUP KHI KET THUC HIEU U'NG
         */
        end : function() {

            // Setup thong bao ket thuc hieu ung swap slide
            is.fxRun = false;
            $code.removeClass(va.ns +'fxRun');
            cs.ev.trigger('fxEnd');

            // Other setup
            cs.ev.trigger('after');                         // Event after()
            cs.idCur == num - 1 && cs.ev.trigger('end');    // Event end()

            // Reset Slideshow khi Tap vao $nav, $pag, drag
            if( is.slideshow ) {
                is.hoverAction = true;

                // Kiem tra Pause slideshow khi co option 'isLoop' false va idCur end
                if( !o.slideshow.isLoop && cs.idLast == num - 1 && cs.idCur == 0 )
                    cs.pause();

                else
                    SLIDESHOW.go('slideToEnd');
            }
        }
    },







    /**
     * EVENTS
     */
    EVENTS = {

        /**
         * SAP XEP VA SETUP CAC EVENTS TRONG CODE
         */
        setup : function() {

            // Tap End Event tren Document
            // EVENTS.tapEndOnDocument();

            // Event Navigation va Pagination
            is.NAV && NAV.eventTap();
            is.PAG && PAG.eventTap();
            
            // Event Keyboard
            EVENTS.keyboard();

            // Event Wheel va Mousewheel cho Viewport va PagInner
            EVENTS.wheel({ '$wheel' : $viewport, 'direction' : va.can.dirs, 'optWheel' : o.wheel });
            is.PAG && EVENTS.wheel({ '$wheel' : va.$pag, 'direction' : va.pag.dirs, 'optWheel' : o.pag.wheel });

            // Event Deeplinking
            is.DEEPLINKING && DEEPLINKING.events();

            // Event Window thay doi kich thuoc
            EVENTS.resize();
        },

        /**
         * LAY DUNG' EVENT GIUA EVENT MOUSE - TOUCH - SWIPE
         */
        getEventRight : function(e) {
            var i = e;
            if( /^touch/.test(e.type) )        i = e.originalEvent.touches[0];
            else if( /pointer/i.test(e.type) ) i = e.originalEvent;
            return i;
        },

        /**
         * CHUYEN DOI CAC EVENT THANH TYPE MOUSE - TOUCH - POINTER
         */ 
        // getType : function(type) {
        //     if     ( /^mouse/.test(type) ) return 'mouse';
        //     else if( /^touch/.test(type) ) return 'touch';
        //     else if( /pointer/i.test(type) ) return 'pointer';
        //     return null;
        // },





        /**
         * SETUP TIMER DE LOAI BO 2 HANH DONG EVENT 'CLICK' 'SWIPEEND' CUNG LUC
         */
        delayToTapNext : function() {
            is.tapEnable = false;
            setTimeout( function() { is.tapEnable = true }, 10);
        },

        /**
         * LUU TRU VI TRI BAT DAU SWIPE TREN DOI TUONG
         */
        // tapBegin : function($obj) {
        //     var evStart = va.ev.mouse.start +' '+ va.ev.swipe.start;
            
        //     // Dang ki Event Start cho tung doi tuong
        //     $obj.off(evStart).on(evStart, function(e) {
        //         var $item = $(this);

        //         if( !va.typeTapCur ) {
        //             var i = EVENTS.getEventRight(e);

        //             // Luu tru vi tri va doi tuong Tap hien tai
        //             va.$tapCur = $item;
        //             va.xTapStart  = i.pageX;
        //             va.yTapStart  = i.pageY;;
        //             va.typeTapCur = EVENTS.getType(e.type);
        //         }
        //     });
        // },

        /**
         * KIEM TRA CO PHAI TAP EVENT TREN DOI TUONG
         */
        // checkTap : function($obj, e) {
        //     var radius = 20;

        //     /**
        //      * KIEM TRA DOI TUONG TAP HIEN TAI
        //      *  + typeTapCur : loai bo? event mouse + swipe thuc hien dong thoi
        //      */
        //     if( !(  va.typeTapCur && va.typeTapCur == EVENTS.getType(e.type) &&
        //             va.$tapCur && va.$tapCur.is($obj) ) ) {
        //         return false;
        //     }



        //     /**
        //      * SO SANH VI TRI CUOI VA` VI TRI BAT DAU CUA DOI TUONG
        //      */
        //     var i      = EVENTS.getEventRight(e);
        //     var xStart = va.xTapStart,
        //         yStart = va.yTapStart,
        //         xEnd   = i.pageX,
        //         yEnd   = i.pageY,
        //         isTapEnable = false;

        //     // Kiem tra co phai Tap event
        //     if( xStart - radius <= xEnd && xEnd <= xStart + radius &&
        //         yStart - radius <= yEnd && yEnd <= yStart + radius ) {
        //         isTapEnable = true;
        //     }

        //     va.typeTapCur = null;
        //     return isTapEnable;
        // },

        /**
         * SETUP TAP EVENT TREN DOCUMENT --> RESET VALUE
         */
        // tapEndOnDocument : function() {
        //     var evName = va.ev.mouse.end +'Tap'+' '+ va.ev.swipe.end +'Tap';
        //     $(document).on(evName, function(e) {

        //         clearTimeout(ti.tapEnd);
        //         ti.tapEnd = setTimeout(function() {
        //            if( !!va.typeTapCur ) {
        //                 va.$tapCur = $();
        //                 va.typeTapCur = null;
        //             } 
        //         }, 10);
        //     });
        // },





        /**
         * NAVIGATION EVENTS
         */
        prevCore : function(step) {
            va.moveBy = 'tap';
            if( is.loop || (!is.loop && cs.idCur > 0) ) TOSLIDE.run(-step);
            else                                        POSITION.animRebound('prev');
        },
        nextCore : function(step) {
            va.moveBy = 'tap';
            if( is.loop || (!is.loop && cs.idCur < num-1) ) TOSLIDE.run(step);
            else                                            POSITION.animRebound('next');
        },
        prev : function() {
            if( is.tapEnable ) {
                var step = o.stepNav;

                EVENTS.prevCore(step);
                EVENTS.delayToTapNext();
            }
            
            return false;
        },
        next : function(isSlideshow) {
            if( is.tapEnable ) {
                // Setup bao nhieu buoc
                var step = isSlideshow ? o.stepPlay : o.stepNav;

                EVENTS.nextCore(step);
                EVENTS.delayToTapNext();
            }

            return false;
        },




        /**
         * EVENT CHUYEN DOI SLIDE BANG PHIM KEYBOARD
         */
        keyboard : function() {
            $doc.off(va.ev.key);

            if( o.isKeyboard ) {
                $doc.on(va.ev.key, function(e) {

                    // Check slideInto
                    M.scroll.check(true);
                    if( is.into ) {

                        var keycode = e.keyCode;
                        if     ( keycode == 37 ) EVENTS.prevCore(1);
                        else if( keycode == 39 ) EVENTS.nextCore(1);
                    }
                });
            }
        },

        /**
         * EVENT CHUYEN DOI SLIDE BANG WHEEL EVENT
         */
        wheel : function(opts) {
            var suffix         = '.'+ va.ns + va.codekey,
                nameWheel      = 'wheel'+ suffix,
                nameMosuewheel = 'mousewheel'+ suffix,
                $wheel         = opts.$wheel;


            /**
             * DIEU KIEN THUC HIEN FUNCTION
             */
            if( !opts.$wheel ) return;



            /**
             * TRUOC TIEN SETUP DATA WHEEL VA LOAI BO EVENT WHEEL TREN DOI TUONG
             */
            // Loai bo event Wheel tren doi tuo.ng
            $wheel.off(nameWheel +' '+ nameMosuewheel);

            // Setup data Wheel cua Doi tuo.ng
            if( !$wheel.data('wheel') ) $wheel.data('wheel', { 'type': null, 'delta': 0 });
            var wheelData = $wheel.data('wheel');




            /**
             * FUNCTION CLASS DI CHUYEN DEN SLIDE KE TIEP
             */
            var fnGotoNextSlide = function(deltaX, deltaY) {

                var wheelDelta = wheelData.delta,
                    isScrollPagePrevent = false,

                    // Function class setup wheel delta hien tai
                    fnDeltaPlus = function(deltaCur, rate) {
                        if( deltaCur != 0 && deltaCur != undefined ) {
                            if( rate === undefined ) rate = 1;

                            wheelDelta += deltaCur > 0 ? 1 * rate : -1 * rate;
                            isScrollPagePrevent = true;
                        }
                    };


                /**
                 * SETUP CAC GIA TRI DELTA TUY THUOC THEO OPTIONS
                 */
                if( opts.optWheel == 'auto' ) {

                    // Truong hop Direction Horizontal
                    if( opts.direction == 'hor' ) fnDeltaPlus(deltaX, 0.2);

                    // Thuong hop Direction Vertical
                    else fnDeltaPlus(deltaY);
                }

                else if( opts.optWheel == 'both' ) {
                    var delta = deltaX || deltaY;
                    fnDeltaPlus(delta);
                }



                /**
                 * KIEM TRA DI CHUYEN TOI SLIDE KE TIEP
                 *  + Wheel 2 la`n moi duoc phep di chuyen toi vi tri Slide ke tiep
                 */
                if     ( wheelDelta <= -2 ) { EVENTS.prevCore(1); wheelDelta = 0; wheelData.type === null; }
                else if( wheelDelta >= 2 )  { EVENTS.nextCore(1); wheelDelta = 0; wheelData.type === null; }

                // Luu tru cac gia tri cua Wheel event tren data
                wheelData.delta = wheelDelta;
                // Tra ve gia tri co ngan ca?n Scroll Page hay khong
                return isScrollPagePrevent;
            };




            /**
             * CAU TRUC CUA EVENT WHEEL GIUA WHEEL NATIVE VA` WHEEL PLUGIN
             */
            if( o.wheel != false ) {
                $wheel.on(nameMosuewheel +' '+ nameWheel, function(e) {
                    var typeCur = e.type,
                        events  = e.originalEvent;

                    // Trun`g ten event Wheel moi setup tiep tuc
                    if( wheelData.type === null || wheelData.type == typeCur ) {

                        // Setup Type wheel hien tai neu da~ loai bo
                        if( wheelData.type === null ) wheelData.type = typeCur;

                        var deltaX = e.deltaX || events.deltaX,
                            deltaY = e.deltaY || events.deltaY;

                        // Kiem tra di chuyen toi Slide ke tiep
                        var isScrollPagePrevent = fnGotoNextSlide(deltaX, deltaY);

                        // Ngan chan khong scrollPage khi Wheel
                        if( isScrollPagePrevent ) return false;
                    }
                });
            }
        },

        /**
         * EVENT CAP NHAT LAI CODE SAU KHI DA LOADED TAT CA IMAGE
         */
        loadAll : function() {

            /**
             * FUNCTION KIEM TRA GIA TRI 'RATE' THAY DOI
             *  + Cap nhat lai Code neu Rate luc Init khac voi Rate hien tai
             */
            var fnCheckRate = function() {
                is.res && va.rateInit != va.rate && cs.refresh();
            };


            /**
             * THUC HIEN EVENT
             */
            cs.ev.on('loadAll', function() {
                fnCheckRate();
            });
        },




        /**
         * EVENT CAP NHAT LAI CODE SAU KHI BROWSER RESIZE
         */
        resize : function() {
            
            // Bien shortcut va khoi tao ban dau
            var fnCheck = function() {

                clearTimeout(ti.resize);
                ti.resize = setTimeout(function() {

                    // Fullscreen: find height page first
                    if( o.isFullscreen ) va.hCode = $w.height();
                    // Update cac bien lien quan scroll Browser
                    is.slideshow && !is.ssPauseAbsolute && M.scroll.check();

                    // Code: toggle showInRange
                    !!o.showInRange && is.SHOW && SHOW.toggle();

                    // Reupdate Code: when show/hide scroll-bar browser
                    if( is.showInRange && (($viewport.width() != va.wCode) || ($viewport.height() != va.hCode)) ) {
                        UPDATE.resize();
                    }
                }, 100);
            };

            // Resize: event
            $w.off(va.ev.resize);
            $w.on(va.ev.resize, fnCheck);




            /**
             * !IMPORTANT
             *  + Them event kiem tra 'div' resize
             *  + Thay the cho cac function:
             *      - Code nested khi khoi tao phai can phai resize
             *      - EVENTS.CodeLoaded() --> Code da loaded cac hinh anh can phai resize
             *      - EVENTS.pageLoaded() --> Trang web loaed cac noi dung bao gom font can phai resize
             *      - EVENTS.reCheck() --> loai bo reCheck trong 'event resize' va` hieu ung animate trong hieghtCode()
             *
             *  + Luy y: Neu va.wCode gio'ng nhu wCur, co the them bie'n moi va.wCodeResizeloop de so sanh wCur
             */
            clearInterval(ti.resizeLoop);
            ti.resizeLoop = setInterval(function() {

                var hCur = va.$s.eq(cs.idCur).outerHeight(true),
                    wCur = $viewport.width();

                // console.log(hCur, va.hCode, wCur, va.wCode);
                if( !is.fxRun && (wCur != va.wCode || hCur != va.hCode) ) {

                    // console.log('resize loop', hCur, va.hCode, wCur, va.wCode);
                    UPDATE.resize();
                }
            }, 1000);
        }
    },







    /**
     * EFFECTS
     */
    FX = {

        /**
         * PHAN LOAI HIEU U'NG LUC BAN DAU
         *  + Hieu ung 'math'
         *  + Hieu ung 'css'
         *  + Hieu ung 'fade'
         */
        init : function(f) {
            var fxType  = va.fxType;

            // Hieu u'ng Math
            if( fxType == 'math' && is.FXMATH ) FXMATH.check(f);

            // Hieu u'ng CSS
            else if( /css/g.test(fxType) && is.FXCSS ) FXCSS.setup();

            // Hieu u'ng Fade
            else if( fxType == 'fade' ) FX.fade();
            else                        FX.none();
        },

        /**
         * SETUP CAC BIEN O CUOI
         */
        end : function(speedCur) {

            /**
             * FUNCTION THUC HIEN CAC BUOC CUOI CUNG CUA HIEU UNG
             */
            var fnSetupEnd = function() {

                // Setup cho hieu ung Math
                if( va.fxType == 'math' ) {
                    !!va.$fxSlCur && va.$fxSlCur.css('visibility', '');
                    !!va.$fxOverlay && va.$fxOverlay.remove();
                }
                TOSLIDE.end();
            };


            /**
             * LUA CHON
             */
            // Truong hop khong co Timer
            if( speedCur === null ) fnSetupEnd();

            // Truong hop co Timer
            else {
                if( !$.isNumeric(speedCur) ) speedCur = va.speed[cs.idCur];

                // Setup timer de thuc hien
                clearTimeout(ti.fxEnd);
                ti.fxEnd = setTimeout(fnSetupEnd, speedCur);
            }
        },




        /**
         * HIEU UNG FADE
         * Hieu ung fade bang jQuery --> ho tro cho hieu ung custom cho old browser
         */
        fade : function(isFallback) {
            var idCur      = cs.idCur,
                $slideCur  = va.$s.eq(idCur),
                $slideLast = va.$s.eq(cs.idLast),
                styleEnd   = { 'opacity': '', 'visibility': '' };


            /**
             * SETUP CAC SLIDE LUC BAN DAU
             */
            // Loai bo class 'next' tren tat ca Slide - neu co
            va.$s.removeClass(va.ns +'next');

            // Quan trong
            // Reset gia tri 'xBuffer' neu thuc hien hieu u'ng bang event 'tap'
            if( va.moveBy == 'tap' ) va.xBuffer = 0;

            // Thoi gian Animation Fade dua theo xBuffer
            var wRate    = M.a(va.xBuffer) / va.wSlide,
                speedCur = ~~( (1 - wRate) * va.speed[idCur] );

            // Thoi gian Truong hop fallback hieu u'ng
            if( isFallback ) speedCur = 300;



            /**
             * SETUP ANIMATE FADE TREN TUNG SLIDE
             */
            var fnAnimateFade = function($slide, isCur) {

                var opacityCur    = $slide.css('opacity'),
                    visibilityCur = $slide.css('visibility'),
                    opacityBegin  = opacityCur,
                    opacityEnd    = isCur ? 1 : 0;

                // Opacity ban dau cua Slide neu Tap ba`ng Nav & Pag
                if( va.moveBy == 'tap' ) opacityBegin = isCur ? 0 : 1;

                // Setup hieu u'ng fade tren Slide
                $slide
                    .stop(true)
                    .css({ 'opacity': opacityBegin, 'visibility': 'visible' })
                    .animate({
                        'opacity': opacityEnd
                    },{
                        // Hieu ung css fallback thi 250, con hieu ung fade chi dinh thi lay thoi gian cua slide
                        duration : speedCur,
                        easing   : 'easeOutQuad',
                        complete : function() {
                            $slide.css(styleEnd);
                        }
                    });
            };
            fnAnimateFade($slideLast, false);
            fnAnimateFade($slideCur, true);



            /**
             * LOAI BO STYLE TREN SLIDE LAST CUA LAST CU~
             * Dieu kien : idLast 2 != idCur
             */
            var idLast2 = cs.idLast2;
            if( idLast2 != undefined && idLast2 != idCur ) {
                va.$s.eq(idLast2).stop(true).css(styleEnd);
            }



            /**
             * SETUP OTHER
             */
            FX.end(speedCur);
        },

        /**
         * HIEU UNG 'NONE'
         */
        none : function() {

            TOSLIDE.end();
        }
    },







    /**
     * API BASIC
     */
    API = {

        /**
         * NHUNG API METHOD CO BAN TRONG CODE
         */
        // Method navigation
        prev : function() { EVENTS.prev() },
        next : function() { EVENTS.next() },
        first: function() { TOSLIDE.run(0, true) },
        last : function() { TOSLIDE.run(num - 1, true) },
        goto : function(id) {
            if( typeof id == 'string' ) id = va.IDsOnDom.indexOf(id);
            if( id >= 0 && id < num )   TOSLIDE.run(id, true);
        },


        // Lenh ve slideshow
        play  : function() { is.slideshow && SLIDESHOW.api('play'); },
        pause : function() { is.slideshow && SLIDESHOW.api('pause'); },
        stop  : function() { is.slideshow && SLIDESHOW.api('stop'); },


        // Method update properties
        update : function(options, isNoRefresh) {

            // Luu tru option cu va Cap nhat option voi deep level
            one.oo = oo = $.extend(true, {}, o);
            o = $.extend(true, o, options);
            va.oUpdate = options;

            // Kiem tra Code co toggle show hay khong
            !!is.awake && !isNoRefresh && cs.refresh();
            va.oUpdate = va.addInfo = null;
        },
        updateOnSlides : function(options) {
            if( !$.isPlainObject(options) ) return;

            va.oSlides = options;
            cs.refresh();
            va.oSlides = null;
        },
        refresh : function() {
            PROP.mergeAllModules();
            UPDATE.removeClass();

            PROP.code();
            PROP.slides();
            LOAD.idMap();
            M.toggleSlide();

            UPDATE.reset();
            UPDATE.resize();


            // Others
            RENDER.other();
            EVENTS.setup();

            is.SLIDESHOW && SLIDESHOW.updateAll();
        },


        // Loai bo Code
        destroy : function(isDelete) {

            // Loai bo SWIPE event
            is.SWIPE && SWIPE.events(false);
                

            // Loai bo event Tap tren navigation va pagination
            var evClick = va.ev.mouse.end +' '+ va.ev.swipe.end +' '+ va.ev.click;
            o.isNav && va.$prev.add(va.$next).off(evClick);
            o.isPag && va.$pagItem.off(evClick);

            // Loai bo cac event KHAC
            $doc.off(va.ev.key);
            $viewport.off(va.ev.wheel);

            // Loai vong lap va RESIZE event
            clearInterval(ti.resizeLoop);
            $w.off(va.ev.resize);

            // Dung slideshow
            // Loai bo vong lap timer + event scroll
            if( o.isSlideshow ) {
                clearInterval(ti.timer);
                $w.off(va.ev.scroll);
                this.stop();
            }



            // Loai bo toan bo DOM cua Code
            if( !!isDelete ) {

                // Xoa bo data tren code
                $code.removeData(rt01VA.codeName);

                // Loai bo cac thanh co kha nang markup-outside
                !!va.$nav && va.$nav.remove();
                !!va.$pag && va.$pag.remove();
                o.isCap && va.$cap.remove();

                if( o.isSlideshow ) {
                    !!va.$timer && va.$timer.remove();
                    !!va.$playpause && va.$playpause.remove();
                    !!$control && $control.remove();
                }

                $code.remove();
            }
        },
        // Khoi phuc lai Code sau khi 'destroy'
        restore : function() { INIT.load() },




        /**
         * LAY NHUNG BIEN TRONG CODE
         */
        width       : function() { return va.wCode },
        height      : function() { return va.hCode },
        slideLength : function() { return num },
        slideCur    : function() { return va.$s.eq(cs.idCur) },
        slideAll    : function() { return va.$s },
        opts        : function() { return o },
        varible     : function() { return va },
        browser     : function() { return is.browser },
        isMobile    : function() { return is.mobile },
        isTransition : function() { return is.ts },




        /**
         * EVENTS TRIGGER
         *  ['init', 'ready', 'loaded']
         *  ['loadAll', 'loadSlide.id', 'loadBegin', 'loadEnd']
         *  ['resize']
         *  ['start', 'end', 'before', 'after']
         *  ['selectID', 'deselectID', 'swipeBegin', 'swipeEnd', 'fxBegin', 'fxEnd']
         *  ['slideshowPlay', 'slideshowPause', 'slideshowStop'] **
         *  ['beforeSwapIDCur', 'afterSwapIDCur']
         */
        ev : $(divdiv)
    },







    /**
     * OTHERS MODULES OF SCRIPTS
     */
    SWIPE,
    RESPONSIVE,
    NAV,
    PAG,
    CAPTION,
    IMAGE,
    VIDEO,
    IFRAME,
    FXMATH,
    FXCSS,
    SLIDESHOW,
    TIMER,
    SHOW,
    DEEPLINKING,
    COOKIE,
    AJAX,
    APIMORE,
    FULLSCREEN,
    NESTED,
    CLASSADD,
    OLD;




    

    /**
     * INIT CODE BEGIN
     */
    INIT.check();
};







/**
 * KHOI TAO CODE
 *  + Cu phap : var code = $('..').codeName();
 * ========================================================================== */
$.fn[rt01VA.codeName] = function() {
    var args     = arguments,               // args[0] : options, args[1]: value
        codeName = rt01VA.codeName,
        codeData = null;

    // Setup moi doi tuong
    $(this).each(function() {
        var self = $(this),
            code = self.data(codeName);

        // Tham so thu nhat luon luon la object --> de dang kiem tra
        if( args[0] === undefined ) args[0] = {};

        // Truong hop la object: khoi tao Code moi hoac update properties
        if( $.isPlainObject(args[0]) ) {
            // TAO CODE MOI
            if( !code ) new $[codeName](self, args[0]);
            // UPDATE THUOC TINH
            else if( !$.isEmptyObject(args[0]) ) code.prop(args[0]);

            // Luu data cua code
            codeData = self.data(codeName);
        }
        
        // Truong hop con lai: goi truc tiep function --> neu khong co thi bao error
        else {
            try      { code[args[0]](args[1]) }
            catch(e) { !!window.console && console.warn('['+ codeName +': function not exist!]'); }
        }
    });

    // Tra ve data cho doi tuong
    return codeData;
};





/**
 * CODE AUTO INIT
 */
rt01MODULE.AUTOINIT = function($code) {

    $code.each(function() {
        var $self = $(this),
            data  = $self.data(rt01VA.codeData);

        // Chuyen doi string than Json neu jQuery khong ho tro san~
        if( typeof data == 'string' ) data = $.parseJSON(data);

        // Kiem tra bien data co phai la json hay khong
        // --> kiem tra tiep data co doi tuong 'isAutoInit'
        // --> kiem tra tiep co ton tai data Code khong
        ($.isPlainObject(data) && !!data.isAutoInit)
        && !$self.data(rt01VA.codeName)
        && $self[rt01VA.codeName]();
    });
};
$(document).ready(function() { rt01MODULE.AUTOINIT( $('.'+ rt01VA.namespace) ) });






/**
 * JQUERY EASING LITTLE
 */
$.extend(jQuery.easing, {
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    }
});





/**
 * PLUGINS RUBY ANIMATE JQUERY
 */
$.fn.rt01Animate = function(prop, opts) {
    var $self = $(this),
        easingName = opts.easing || 'easeOutQuad',
        timeEnd    = opts.duration,
        fps        = 25,
        timeLoop   = ~~(1000 / fps),
        timeCur    = 0,

        styleBegin = {},
        styleRange = {},
        styleLast  = {},
        
        timer, xCur, cssCur, name, isOverflowOnDom;


    /**
     * FUNCTION CLASS
     */
    var fn = {

        /**
         * SETUP CAC BIEN KHI MOI BAT DAU 
         */
        setupBegin : function() {

            // Tao vong lap de lay het cac thanh phan trong doi tuo.ng
            for( name in prop ) {
                styleBegin[name] = parseFloat( $self.css(name) );
                styleRange[name] = prop[name] - styleBegin[name];
            }
        },

        /**
         * SETUP GIA TRI KHI MOI BAT DAU ANIMATION
         */
        start : function() {
            // Truoc tien loai bo Timer Animation truoc do neu' co
            clearInterval($self.data('rt01Animate'));

            // Che`n style 'overflow' luc dau` -> fixed Browser cu~
            var styleCur = $self.attr('styele');
            isOverflowOnDom = styleCur && styleCur.indexOf('overflow') != -1;
            !isOverflowOnDom && $self.css('overflow', 'hidden');

            // Chay function Start neu co
            !!opts.start && opts.start();
        },

        /**
         * SETUP GIA TRI KHI KET THUC ANIMATION
         */
        complete : function() {
            // Loai bo style 'overflow' khi ket thuc
            !isOverflowOnDom && $self.css('overflow', '');

            // Setup tat ca style target -> phong ngua function khong du'ng gia tri
            $self.css(prop);

            // Loai bo Timer neu thoi gian hien tai lo'n hon Thoi gian End
            clearInterval($self.data('rt01Animate'));
            !!opts.complete && opts.complete();
        },




        /**
         * SETUP CAC GIA TRI TRONG THOI GIAN CU THE LEN DOI TUONG
         */
        styleCur : function() {
            var valuePlus, valueCur, styleCur;
            for( name in prop ) {

                // Tinh toan gia tri hien tai
                valuePlus = Math.round(styleRange[name] * xCur);
                valueCur  = styleBegin[name] + valuePlus;

                // Kiem tra gia tri hien tai voi gia tri qua' khu
                if( valueCur != styleLast[name] ) {

                    // Setup style current vao doi tuo.ng
                    styleCur = {};
                    styleCur[name] = valueCur;
                    $self.css(styleCur);

                    // Luu tru gia tri hien tai vao` doi tuo.ng Style last
                    styleLast[name] = valueCur;
                }
            }
        },

        /**
         * SETUP NHUNG BIEN TRONG 1 LOOP
         */
        loop : function () {
            // Thoi gian hien tai duoc cong them vao
            timeCur += timeLoop;
            // Gia tri chenh lech giua [0, 1] tai thoi gian hien tai
            xCur = $.easing[easingName](null, timeCur, 0, 1, timeEnd);

            // Setup gia tri style cu the tren doi tuo.ng
            fn.styleCur();

            // Setup khi ket thuc Animation
            (timeCur >= timeEnd) && fn.complete();
        },

        /**
         * SETUP KHI KHOI TAO ANIMATION
         */
        init : function() {
            fn.setupBegin();
            fn.start();

            // Neu Thoi gia duration = 0 -> khong can setup vo`ng lap
            if( timeEnd == 0 ) fn.complete();
            else               $self.data('rt01Animate', setInterval(fn.loop, timeLoop));
        }
    };

    // Khoi tao Animation
    fn.init();
};

})(jQuery);






























/**
 * MODULE SWIPE
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M, VIEW, POSITION, PAG,
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            cs   = self.cs;
            va   = self.va;
            is   = self.is;
            ti   = self.ti;

            // Lay Module hoa`n toan co san~ trong Code
            M        = self.M;
            VIEW     = self.VIEW;
            POSITION = self.POSITION;
            // Lay Module o ngoai` Code
            PAG      = $.extend({}, rt01MODULE.PAG, self);
        };

    /**
     * MODULE SWIPE
     */
    rt01MODULE.SWIPE = {

        /**
         * TOGGLE EVENTS SWIPE KHI SWAP SLIDE
         */
        toggleEvent : function() {
            varibleModule(this);

            // Trang thai swipe events tren Slide hien tai
            var optsCur = va.$s.eq(cs.idCur).data('optsSlide');

            // Cap nhat thuoc tinh va bien cua Swipe event
            that.properties(optsCur);


            /**
             * TOGGLE EVENT SWIPE GESTURES
             */
            // Event Swipe toan bo Code
            if( is.swipeCur != is.swipeLast ) {    
                that.events( is.swipeCur ? true : false );
            }

            // Event Swipe tren Viewport
            var fnBodyToggle = function(isSwipeCur, isSwipeLast) {

                if( isSwipeLast != undefined && isSwipeCur != isSwipeLast ) {
                    that.events( isSwipeCur ? 'onBody' : 'offBody' );
                }
            };
            fnBodyToggle(is.swipeOnBodyCur, is.swipeOnBodyLast);
            fnBodyToggle(is.swipeOnSlideCur, is.swipeOnSlideLast);

            // Luu tru trang thai SwipeCur vao` SwipeLast
            is.swipeLast = is.swipeCur;
            is.swipeOnBodyLast = is.swipeOnBodyCur;
            is.swipeOnSlideLast = is.swipeOnSlideCur;
        },

        /**
         * CAP NHAT THUOC TINH VA BIEN SWIPE CUA SLIDE HIEN TAI
         */
        properties : function(optsCur) {
            varibleModule(this);

            // Setup luc ban dau
            is.swipeCur       = optsCur.isSwipe;
            is.swipeOnBodyCur = optsCur.swipe.isBody;


            // Setup hanh dong swipe --> Phan biet thanh swipeBody va swipePag
            if( optsCur.isSwipe ) {
                var swipe = optsCur.swipe;

                // Swipe tren Pagination
                is.swipeOnPag = true;
 
                // Swipe tren slide current
                is.swipeOnSlideCur = va.fxType == 'cssThree';

                // Tat Swipe tren body ne co swipe tren Slide
                if( is.swipeOnSlideCur ) is.swipeOnBodyCur = false;
            }

            else {
                is.swipeOnBodyCur = is.swipeOnSlideCur = is.swipeOnPag = false;
            }
        },
        
        /**
         * SETUP CAC EVENTS SWIPE
         */
        events : function(status) {
            var that = this;
            varibleModule(that);

            // Dang ki lai event tren cac doi tuong
            var isSwipeSupport = is.swipeSupport,
                evMouse = va.ev.mouse,
                evSwipe = va.ev.swipe;


            /**
             * FUNCTION CLASSES
             * Cac function loai bo doi tuo.ng
             */
            var fn = {

                // Loai bo event swipe 'Start' tren doi tuo.ng
                offStart : function($swipe) {

                    // Loai bo class 'swipe-on' --> ho tro nhan biet 'swipe gesture' va fix swipe trong IE mobile
                    // Loai bo event Drag tren cac Images trong Swipe
                    $swipe
                        .removeClass(va.ns +'swipe-on')
                        .off(va.ev.mouse.start +' '+ va.ev.swipe.start)
                        .off(va.ev.drag);
                },
                // Loai bo event swipe 'Move' va 'End' tren Document
                offMoveEnd : function() {
                    var ev = va.ev;
                    $(document)
                        .off(ev.mouse.move +' '+ ev.mouse.end +' '+ ev.swipe.move +' '+ ev.swipe.end);
                },


                /**
                 * LOAI BO EVENT SWIPE TREN CAC DOI TUONG
                 */
                offBody : function() {

                    // Loai bo class 'grab' khoi Viewport
                    // Tra lai vi tri cua slide truoc loai bo events
                    M.toggleClass('grab', -1);
                    that.setupEnd({}, va.swipeTypeCur, true);
                    fn.offStart(va.$viewport);
                },
                offPag : function() {

                    // Loai bo class 'grab' khoi Pagination
                    is.swipePagCur = false;
                    M.toggleClass('grab', -1, va.$pag);
                    is.pag && fn.offStart(va.$pag);
                },

                /**
                 * DANG KI EVENT SWIPE TREN CAC DOI TUONG
                 */
                onBody : function() {
                    if( is.swipeOnBodyCur || is.swipeOnSlideCur ) {

                        // Loai bo va dang ki lai swipe event tren DOC
                        fn.offMoveEnd();
                        fn.offBody();

                        // Dang ki swipe event cho doi tuong Viewport
                        M.toggleClass('grab', 0);
                        that.eventStart(va.$viewport, va.$canvas, evMouse);
                        isSwipeSupport && that.eventStart(va.$viewport, va.$canvas, evSwipe);
                    }
                },
                onPag : function() {
                    if( is.swipeOnPag && is.pag ) {

                        // Loai bo va dang ki lai swipe event tren DOC
                        fn.offMoveEnd();
                        fn.offPag();

                        // Dang ki swipe event cho doi tuong Pagination
                        is.swipePagCur = true;
                        M.toggleClass('grab', 0, va.$pag);
                        that.eventStart(va.$pag, va.$pagInner, evMouse);
                        isSwipeSupport && that.eventStart(va.$pag, va.$pagInner, evSwipe);
                    }
                }
            };



            /**
             * PHAN LOAI STATUS
             *  --> De chay function tuong u'ng
             *  --> phuc vu loai bo/dang ki rieng le DOI TUONG
             */
            if( status === true ) {
                fn.onBody();

                // Setup swipe on pagination luc' ban dau
                if( o.swipe.isAutoOnPag )
                    !va.pag.isViewLarge && fn.onPag();
                else
                    fn.onPag();
            }
            else if( status === false ) {
                fn.offBody();
                fn.offPag();
            }
            else fn[status]();
        },





        /**
         * SETUP EVENT VA THUOC TINH CHO DOI TUONG SWIPE ['VIEWPORT', 'PAGINATION']
         */
        eventStart : function($swipe, $swipeCanvas, evName) {
            varibleModule(this);
            var that = this, ns = va.ns;


            /**
             * THEM CLASS 'SWIPE-ON'
             *  + Nhan biet doi tuong co 'swipe gestures'
             *  + Fix swipe trong IE mobile
             */
            $swipe.addClass(ns +'swipe-on');


            /**
             * LOAI BO HANH DONG DRAG IMAGE TRONG CODE
             */
            $swipe
                .off(va.ev.drag)
                .on(va.ev.drag, function(e) { return false });




            /**
             * EVENT BAT DAU SWIPE - DRAG
             * swipeType --> ho tro swipe gestures cung luc event 'swipe' va 'mouse'
             * Touchmouse dung de phan bien swipe 'Code' hay scroll 'page'
             */
            $swipe.on(evName.start, { 'swipeType': evName.type }, function(e) {
                varibleModule(that);

                /**
                 * SETUP KHOI TAO
                 */
                // Huo'ng va Type cua Swipe gesture
                va.swipeDirs = null;
                var evSwipeType = e.data.swipeType;
                if( va.swipeTypeCur === null ) va.swipeTypeCur = evSwipeType;



                /**
                 * KIEM TRA DOI TUONG TARGET KHI SWIPE START DUOC CHO PHEP
                 */
                var tagSpecial    = ['input', 'textarea', 'label', 'a'],
                    eTarget       = e.target,
                    targetTag     = eTarget.tagName.toLowerCase(),
                    isTargetAllow = tagSpecial.indexOf(targetTag) == -1;

                // Loai bo Swipe start khi Target thuoc doi tuong 'Swipe Prevent'
                if( isTargetAllow ) {

                    // Class Prevent bao gom: 'swipe-preview', 'nav-prev', 'nav-next'
                    var classPrevent =  '.'+ ns +'swipe-prevent' +
                                        ', .'+ ns + o.namePrev +
                                        ', .'+ ns + o.nameNext,

                        $swipePrevent = $(eTarget).closest(classPrevent);

                    if( $swipePrevent.length ) {
                        isTargetAllow = false;

                        // Toggle event Drag tren $swipe de duoc select duoc text
                        that.eventDragToggle($swipe, va.ev[evSwipeType]);
                    }
                }

                // Loai bo event Swipe start khi Target duoc chua trong doi tuo.ng Link <a></a> && Nested
                if( isTargetAllow ) {
                    var $target     = $(eTarget),
                        $linkParent = $target.closest('a');

                    // Neu ton tai doi tuo.ng Parent la Link tag -> Kiem tra co nam trong Viewport hay khong
                    if( $linkParent.length ) {
                        var $viewportCheck = $linkParent.closest('.'+ ns + o.nameViewport);
                        if( $viewportCheck.length && $viewportCheck.is(va.$viewport) ) {
                            isTargetAllow = false;
                        }
                    }

                    // Kiem tra Target co phai doi tuo.ng la Code Nested hay khong
                    if( isTargetAllow ) {
                        var $code        = $target.closest('.'+ rt01VA.namespace),
                            $codeParent  = $code.parent().closest('.'+ rt01VA.namespace);

                        if( va.$self.is($codeParent) ) isTargetAllow = false;
                    }
                }




                /**
                 * DIEU KIEN TIEP TUC EVENT
                 */
                if( !(isTargetAllow && !is.lockSwipe && va.swipeTypeCur == evSwipeType) ) return;
                

                /**
                 * BAT DAU DANG KI EVENT SWIPE TREN DOCUMENT KHI BAT DAU SWIPE
                 */
                that.eventMoveEnd(va.ev[evSwipeType]);


                /**
                 * SWIPE END
                 * loai bo 'mouseleave' --> vi khong can thiet va giup Code don Gian
                 */
                $(document).one(evName.end, { 'swipeType': evName.type }, function(e) {

                    // Them Timer de fixed iOS touchEnd cha.m
                    // setTimeout(function() {
                    //     that.setupEnd(e, e.data.swipeType, false);
                    // }, 4);

                    that.setupEnd(e, e.data.swipeType, false);
                });
                




                /**
                 * SETUP CAC BIEN LUC BAT DAU
                 * Lay thoi gian luc bat dau darg
                 */
                var isCanvas = $swipeCanvas.is(va.$canvas);
                va.tDrag0 = va.tDrag1 = +new Date();

                // Luu thuoc tinh doi tuong nao dang swipe --> chi duoc 1 doi tuong duy nhat hoat dong
                if( is.swipeOnSlideCur && isCanvas ) va.$swipeCur = va.$s.eq(cs.idCur);
                else va.$swipeCur = $swipeCanvas;

                // Canvas: loai bo thuoc tinh transition --> di chuyen bang 'tap' event
                M.tsRemove($swipeCanvas);

                // Lay gia tri cac bien trong 'va.can' hoac 'va.pag'
                var p = M.swapVaOnSwipe();

                

                /**
                 * SETUP VI TRI BAT DAU SWIPE
                 *  + X0: get value --> lay vi tri ban dau, khi di chuyen lay vi tri hien tai tru` di vi tri goc
                 *  + x0Fix --> vi tri ban dau khi swipe, khong thay doi khi chuyen sang slide khac
                 *  + pageX1 --> ho tro khi swipe 'tap' moi bat dau --> pageX0 lay gia tri pageX o day
                 */
                var i = that.EVENTS.getEventRight(e);
                va.x0 = va.x0Fix = va.pageX1 = M.r( i[p.pageX] );

                // Y0 get value --> su dung de nhan biet swipe Code hay swipe page
                va.y0 = i.pageY;

                // xOffset, xBuffer : reset value
                va.xOffset = va.xBuffer = 0;

                // xBuffer bat dau bang xCanvas --> khi di chuyen chi viec +/- gia thi hien thoi
                if( is.swipeOnSlideCur && isCanvas ) va.xBuffer = 0;
                else                                 va.xBuffer = p.xCanvas;

                // Bien reset lai dragBegin --> bien voi muc dich thuc hien 1 lan ban dau trong luc 'mouseMove'
                is.swipeBegin = true;

                // Reset gia tri so luong event move swipe thuc thi --> ho tro cho event trigger 'swipeBegin'
                va.nMoveEvent = 0;

                // Canvas grabbing cursor
                va.$swipeCur.is(va.$canvas.add(va.$s)) && M.toggleClass('grab', 1);



                /**
                 *  + Fixed loi cursor hien thi lai 'default' sau khi click
                 *  + Khong thuc hien trong mobile --> khong scroll page duoc
                 */
                evSwipeType == 'mouse' && e.preventDefault();
            });
        },

        eventMoveEnd : function(evName) {
            var that = this;

            /**
             * EVENT SWIPE MOVE
             */
            $(document).on(evName.move, { 'swipeType': evName.type }, function(e) {
                varibleModule(that);
                var evSwipeType = e.data.swipeType;


                /**
                 * DIEU KIEN DE TIEP TUC EVENT - DI CHUYEN TAM THOI
                 */
                if( !(!is.lockSwipe && va.swipeTypeCur == evSwipeType) ) return;



                /**
                 * TIEP TUC EVENT - DI CHUYEN TAM THOI
                 * Trigger event 'swipeBegin'
                 */
                !va.nMoveEvent && cs.ev.trigger('swipeBegin');
                va.nMoveEvent++;

                // Lay dung' doi tuong Event
                var i = that.EVENTS.getEventRight(e);

                // Luu tru pageX cu va lay pageX moi --> de tim dang swipe 'trai' hay 'phai'
                var p = M.swapVaOnSwipe();
                va.pageX0 = va.pageX1;
                va.pageX1 = M.r( i[p.pageX] );



                /**
                 * Chi tinh toan khi pageX0 khac pageX1 --> tiet kiem CPU
                 */
                // $('.log').text( $('.log').text() + evSwipeType +' '+ va.pageX1 + ' - ');
                if( va.pageX0 != va.pageX1 ) {

                   // Gia tri di chuyen offset tam thoi
                    va.xOffset = va.pageX1 - va.x0;

                    // Phan biet swipe sang trai hay phai --> su dung cho swipe limit
                    is.swipeNav = (va.pageX1 > va.pageX0) ? 'right' : 'left';


                    /**
                     * DI CHUYEN TAM THOI TREN THIET BI MOBILE
                     * Phan biet scroll page hay la swipe Code
                     * Scroll page: vi khong co e.preventDefault() o trong touchstart va touchmove
                     * --> chi thuc hien 1 lan touchmove va ko co touchend
                     */
                    if( evSwipeType == 'swipe' ) {

                        va.y = M.a(va.y0 - i.pageY);
                        if( va.swipeDirs === null && M.a(va.xOffset) >= va.y ) va.swipeDirs = 'chieuX';
                        if( va.swipeDirs === null && va.y > 5 )                va.swipeDirs = 'chieuY';


                        // Truong hop swipe theo chieu Ngang X
                        if( va.swipeDirs === null || va.swipeDirs == 'chieuX' ) {

                            // Ngan ca?n di chuyen scroll page huo'ng Y cho Android
                            // Thu nghiem tren Chrome mobile simulate luc' duoc luc khong
                            e.preventDefault();

                            // Di chuyen tam thoi
                            that.xBuffer(va.pageX1);
                        }

                        // Truong hop chieu Doc Y
                        // Loai bo? event swipe 'Move' 'End' cua Document
                        else {
                            that.events('offMoveEnd');
                        }
                    }

                    // Mac dinh browser tren 'Desktop'
                    else that.xBuffer(va.pageX1);
                }

                // Pagination Grabbing Cursor: toggle class
                va.$swipeCur.is(va.$pagInner) && M.toggleClass('grab', 1, va.$pag);

                // Khoa event Tap, kiem offset de ho tro click de dang neu swipe it
                if( M.a(va.xOffset) > 10 && is.tapEnable ) is.tapEnable = false;     // Tap event tro nen cham chap
            });
        },

        /**
         * SETUP CAC THANH PHAN KHI KET THUC HANH DONG SWIPE
         */
        setupEnd : function(e, evSwipeType, isScrollPage) {
            varibleModule(this);

            if( !is.lockSwipe && va.swipeTypeCur == evSwipeType ) {

                // Ngan can event mouseUp o tren thiet bi ho tro touch event
                // Neu la scrollpage trong androidNative khong cho prevent --> khong scrollpage dc
                if( evSwipeType == 'swipe' && !isScrollPage ) {
                    e.preventDefault();
                }


                // Callback event end swipe
                !is.swipeBegin && cs.ev.trigger('swipeEnd');

                // Get thoi gian luc swipe out --> tinh toan nhanh hay cham
                va.tDrag1 = +new Date();

                // Tinh toan vi tri di chuyen sau khi swipe
                that.xNear();


                /**
                 * TOGGLE CLASS CURSOR
                 *  + Canvas --> phuc hoi lai cursor swipe
                 *  + Pagination --> xoa bo class cursor
                 */
                va.$swipeCur.is(va.$canvas.add(va.$s))
                ? M.toggleClass('grab', (is.swipeOnBodyCur || is.swipeOnSlideCur) ? 0 : -1)
                : M.toggleClass('grab', -1, va.$pag);

                // Loai bo class GrabStop khi swipe leave
                o.isViewGrabStop && M.toggleClass('stop', -1);
            }


            /**
             * OTHERS SETUP
             */
            // Reset lai gia tri swipeTypeCur o cuoi event
            // Phai co so sanh --> boi vi co 2 events mouse va touch trong mobile
            if( va.swipeTypeCur == evSwipeType ) va.swipeTypeCur = null;

            // Loai bo? Tap event trong luc Swipe gestures
            if( is.mobile ) is.tapEnable = true;
            else            setTimeout(function() { is.tapEnable = true }, 10);

            // Loai bo event Swipe 'Move' va 'End' tren Document khi ket thuc hanh dong swipe
            that.events('offMoveEnd');
        },

        /**
         * SETUP LOAI BO EVENT DRAG CUA SWIPE CURRENT -> HO TRO SELECT TEXT
         */ 
        eventDragToggle : function($swipe, evName) {
            var that = this;
            varibleModule(that);

            // Loai bo event Drag tren Swipe
            $swipe.off(va.ev.drag);

            // Phuc hoi lai event Drag da~ loai bo khi Tap ket thuc
            var evNameEndCur = evName.end +'stopDrag';
            $(document).on(evNameEndCur, function(e) {
                varibleModule(that);

                $swipe.on(va.ev.drag, function() { return false });
                $(document).off(evNameEndCur);
            });
        },




        /**
         * SETUP DI CHUYEN TAM KHI SWIPE LIEN TUC
         */
        xBuffer : function(xCur) {
            varibleModule(this);

            // Bien shortcut va khoi tao ban dau
            var layout     = va.layout,
                view       = va.view,
                idCur      = cs.idCur,
                isRight    = is.swipeNav == 'right',
                isLeft     = is.swipeNav == 'left',

                isCanvas   = va.$swipeCur.is(va.$canvas.add(va.$s)),
                p          = isCanvas ? va.can : va.pag,
                sTranslate = p.sTranslate,

                // Thuoc tinh luu tru su khac nhau khi di chuyen 'next' hay 'prev'
                sign = va.xOffset < 0 ? 1 : -1,

                // Khoang cach xe dich khi swipe move
                pageX = va.pageX1 - va.pageX0;



            /**
             * SETUP BIEN CO QUYEN DI CHUYEN TAM THOI HAY KHONG DUA TREN HIEU U'NG
             */
            var isBufferReduce = true,
                isBufferMove   = true;

            if( isCanvas ) {
                if( va.fxType == 'cssThree' ) isBufferReduce = false;
                if( va.fxType == 'fade' )     isBufferReduce = isBufferMove = false;
            }





            /**
             * GIAM TI LE GIA TRI DI CHUYEN --> SWIPE OUT VIEWPORT
             * TRUONG HOP LAYOUT LINE
             * Chi ap dung cho Canvas co isLoop-0 va pagination
             */
            var fnTranslateReduce1 = function() {

                /**
                 * DIEU KIEN DE GIAM TI LE
                 * Swipe limit chi ap dung khi swipe phai va swipe trai Canvas o ngoai Viewport
                 */
                if( (isRight && va.xBuffer > p.xMin)
                ||  (isLeft  && va.xBuffer < p.xMax) ) {

                    // Giam ti le xuong 8 lan cho desktop, mobile thi nho hon
                    var nRate1 = is.mobile ? 4 : 8;
                    pageX /= nRate1;
                }
            },

            fnTranslateReduce2 = function() {

                // Giam ti le di chuyen mac dinh tren layout dot
                var nRate2 = is.mobile ? 3 : 6;
                pageX /= nRate2;

                // Tiep tuc giam ti le neu isloop false
                if( !is.loop
                &&  (  (idCur <= 0 && isRight)
                    || (idCur >= num-1 && isLeft) ) ) {

                    pageX /= 4;
                }
            };

            // Khong thuc hien gia?m Buffer tren Canvas co bufferReduce false
            if( isBufferReduce ) {

                // Truong hop SwipeCur la Body Canvas
                if( isCanvas ) {
                    if( layout == 'line' && !is.loop ) fnTranslateReduce1();
                    if( layout == 'dot' )              fnTranslateReduce2();

                    /**
                     * GRAB STOP VIEW
                     */
                    if( !is.loop && o.isViewGrabStop ) {

                        if     ( isRight && va.xBuffer > 0 )      M.toggleClass('stop', 0);
                        else if( isLeft  && va.xBuffer < p.xMax ) M.toggleClass('stop', 1);
                    }
                }

                // Truong hop SwipeCur la Pag Inner
                else {
                    if( is.pag ) {
                        fnTranslateReduce1();

                        /**
                         * SETUP OTHER
                         */
                        // Pag Arrow kiem tra Toggle actived
                        // Di chuyen tam thoi cho Pag Mark
                        o.pag.isArrow && PAG.arrowActived(va.xBuffer);
                        o.pag.isMark  && PAG.xBufferOnMark(pageX);
                    }
                }
            }
            


            /**
             * DI CHUYEN BUFFER CHO CANVAS
             */
            if( isCanvas && (view == 'coverflow' || view == 'scale') )
                va.xBuffer += pageX * sTranslate / va.wSlideFull;
            else
                va.xBuffer += pageX;

            // Di chuyen doi tuo.ng Swipe tam thoi
            // Di chuyen x/y tuy theo huong swipe
            if( isBufferMove ) {

                var dirsTf = (p.dirs == 'hor') ? 'tlx' : 'tly',
                    xCur   = M.r(va.xBuffer),
                    tf     = {};

                tf[p.cssTf] = M[dirsTf](xCur);
                va.$swipeCur.css(tf);
            }

            // UPDATE TRANSFORM CAC SLIDE CHINH GIUA
            // Truyen tham so a: phan biet swipe 'next'/'prev'
            var bufferName = 'buffer'+ va.View;
            isCanvas && !!VIEW[bufferName] && VIEW[bufferName](sign);



            /**
             * SETUP CHUYEN TIEP SLIDE KHI SWIPE LIEN TUC TRONG LAYOUT 'LINE'
             * Next/prev cung cong thuc voi nhau nhung khac bien so 'a.s'
             * Vi so sanh cua 'next' la '>', con so sanh cua 'prev' la '<' nen nhan hai ve cho -1 de dao nguoc lai tu '<' sang '>'
             * @param int p.xCanvas
             */
            if( isCanvas && layout == 'line' ) {
                var posNext = p.xCanvas - (sTranslate * sign);

                // Swipe 'next' slide (so am) --> Swipe 'prev' tuong tu nhu 'next'
                if( va.xBuffer * sign < posNext * sign ) {

                    // Reset action chi thuc hien 1 lan trong luc drag lien tuc
                    is.swipeBegin = true;

                    // Update va.x0 --> su dung cho event dragmove --> de khi dragOut thi Canvas chi di chuyen toi da 1 slide nua
                    va.x0 = va.pageX1;

                    // Update xCanvas
                    p.xCanvas -= sTranslate * sign;

                    /**
                     * Update cac thanh phan khac khi next 1 slide
                     *  + Them option isContinuity --> ngan can setup 1 so options, trong do co POSITION.xAnimate
                     *  + Boi vi xCanvas da update o tren
                     */
                    that.TOSLIDE.run(sign, false, true);
                }
            }



            /**
             * SETUP CHUYEN TIEP SLIDE KE TIEP KHI SWIPE LIEN TUC TRONG HIEU UNG 'FADE'
             * @param int va.xBuffer
             */
            else if( isCanvas && view == 'fade' ) {
                var posNext = - (va.wSlide * sign);

                // Swipe 'next' slide (so am) --> Swipe 'prev' tuong tu nhu 'next'
                if( va.xBuffer * sign < posNext * sign ) {

                    // Reset action chi thuc hien 1 lan trong luc drag lien tuc
                    is.swipeBegin = true;

                    // Update va.x0 --> su dung cho event dragmove --> de khi dragOut thi Canvas chi di chuyen toi da 1 slide nua
                    va.x0 = va.pageX1;

                    // Reset vi tri xBuffer --> Ngan cha.n setup fn nay` lien tuc
                    va.xBuffer = 0;

                    // Update cac thanh phan khac khi next 1 slide
                    that.TOSLIDE.run(sign, false, true);
                }
            }




            /**
             * SEUP OTHERS
             *  + is.swipeBegin --> voi muc dich function chi chay 1 lan trong di drag move
             */
            if( is.swipeBegin ) {
                is.swipeBegin = false;

                view == 'mask' && VIEW.cloneImgbackInMask();
            }
        },

        /**
         * SETUP DI CHUYEN DEN SLIDE GAN DO KHI SWIPE KET THUC
         */
        xNear : function() {
            varibleModule(this);

            // Vi tri va kich thuoc doi tuong dang swipe
            var isCanvas = va.$swipeCur.is(va.$canvas.add(va.$s)),
                layout   = va.layout,
                num      = cs.num,
                p        = isCanvas ? va.can : va.pag,
                xOffset  = va.xOffset;  // Da~ di chuyen bao nhieu px

            // Setup Easing chuyen dong khi Swipe ket thuc
            va.moveBy = 'swipe';


            /**
             * SETUP BIEN QUYEN DUOC DI CHUYEN HOAC PHUC HOI VI TRI DUA TREN HIEU U'NG
             */
            var isNearRestore = true;
            if( isCanvas ) {
               if( va.fxType == 'fade' ) isNearRestore = false;  
            }



            /**
             * SETUP TREN BODY CANVAS
             */
            if( isCanvas ) {
                var wSlide = !!va.pa.left ? va.wSlideFull - (va.pa.left * 2) : va.wSlideFull,
                    tFast  = is.mobile ? 600 : 400,
                    isFast = va.tDrag1 - va.tDrag0 < tFast;


                // Width drag: select
                // Xac dinh di chuyen nhanh/cham cua 1 slide
                var w3  = M.r(wSlide/3),
                    w20 = M.r(wSlide/20),
                    wLimit = isFast ? w20 : w3,

                    // Thoi gian layout dot phuc hoi vi tri cu khi di chuyen sang slide moi
                    tGo = 100,
                    // Thoi gian khi slide phuc hoi lai vi tri cu
                    tRestore = 400;



                /**
                 * SETUP DI CHUYEN NEXT - PREV - RESET
                 */
                // Di chuyen toi Slide Next
                if( xOffset < -wLimit && (is.loop || (!is.loop && cs.idCur < num - 1)) && !!(num - 1) ) {

                    (layout == 'dot') && POSITION.xAnimate(null, 0, false, false, tGo);
                    that.TOSLIDE.run(1);
                }

                // Di chuyen toi Slide Prev
                else if( xOffset > wLimit && (is.loop || (!is.loop && cs.idCur > 0)) && !!(num - 1) ) {

                    (layout == 'dot') && POSITION.xAnimate(null, 0, false, false, tGo);
                    that.TOSLIDE.run(-1);
                }

                // Phuc hoi vi tri
                else if( xOffset != 0 ) {
                    var isPosFixed  = is.swipeOnSlideCur ? true : false,
                        restoreName = 'restore'+ va.View;

                    // Di chuyen toi vi tri ban dau --> View 'fade' Khong can thiet phuc hoi vi tri
                    isNearRestore && POSITION.xAnimate(null, 0, false, isPosFixed, tRestore);

                    // Phuc hoi lai vi tri va transform sau khi di chuyen tam thoi
                    !!VIEW[restoreName] && VIEW[restoreName]();
                }

                
                // Slideshow: setup bien --> reset timer khi di chuyen next/prev toi slide khac
                if( (xOffset < -wLimit || xOffset > wLimit) && o.isSlideshow ) is.hoverAction = true;
            }



            /**
             * SETUP TREN PAGINATION INNER
             */
            else {
                if( is.pag && xOffset != 0 ) {

                    // Update gia tri xCanvas
                    p.xCanvas = va.xBuffer;

                    // Phuc hoi lai vi tri chinh giua cho PagInner
                    var sp = o.pag.speed;
                    if( p.align == 'center' || p.align == 'end' ) {
                        p.xCanvas != p.xMin && POSITION.xAnimate(null, p.xMin, false, true, sp);
                    }

                    // Phuc hoi lai vi tri dau/cuoi neu Canvas o ngoai Viewport
                    else {
                        if( p.xCanvas > 0 )           { POSITION.xAnimate(null, 0, false, true, sp) }
                        else if( p.xCanvas < p.xMax ) { POSITION.xAnimate(null, p.xMax, false, true, sp) }
                    }


                    // Kiem tra actived tren Pag Arrow
                    o.pag.isArrow && PAG.arrowActived(p.xCanvas);

                    // Loai bo Transition Duration tren Pag Mark
                    // Update lai vi tri cua Pag Mark
                    if( o.pag.isMark ) {
                        is.ts && M.tsRemove(va.$pagMarkItem);
                        PAG.sizePosOfMark();
                    }
                }
            }



            /**
             * Other setup
             *  + Flywheel (banh da): tiep tuc di chuyen
             */
            POSITION.flywheel();
        }
    };
})(jQuery);







/**
 * MODULE RESPONSIVE
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE RESPONSIVE
     */
    rt01MODULE.RESPONSIVE = {

        /**
         * UPDATE CAC GIA TRI CUA RESPONSIVE
         * @param object va.pa
         * @param int va.rate
         */
        updateVars : function() {
            var that = this,
                o    = that.o,
                va   = that.va;


            /**
             * FUNCTION LAY GIA TRI CUA PADDING TRONG DOI TUONG VA.PARANGE
             */
            var fnGetPadding = function() {
                var pa = 0;
                if( !!va.paRange ) {

                    pa = that.M.getValueInRange(va.paRange);
                    if( pa === null ) pa = 0;
                }
                return pa;
            };



            /**
             * RANGE SETUP
             *  + Padding : get
             *  + Padding chi hoat dong khi va.wCode nho? hon Width Responsive
             */
            if( !!o.widthRange ) {

                /**
                 * DIEU KIEN
                 * TH 1: wMax < va.wRes -> uu tien cho Width small trong Range
                 * TH 2: wMax > va.wRes -> uu tien cho Width trong Range
                 */
                var wMax   = va.sizeRange.wMax,
                    isCond = (wMax > va.wRes) ? (wMax >= va.wCode) : (va.wRes > va.wSlide);

                if( isCond ) {
                    // Lay kich thuoc tu ma?ng Range
                    var sizeRange = that.M.getValueInRange(va.sizeRange);

                    // if return === null -> padding get va.paRange
                    // else -> calculator from va.wCode
                    va.pa.left = (sizeRange === null) ? fnGetPadding() : (va.wSlide - sizeRange)/2;
                }
                else va.pa.left = (va.wSlide - va.wRes)/2;
            }

            // Khong co' option 'widthRange'
            else va.pa.left = (va.wRes > va.wSlide) ? fnGetPadding() : (va.wSlide - va.wRes)/2;

            // Lam tron so
            va.pa.left = ~~(va.pa.left);



            /**
             * SETUP OTHERS
             */
            // Vi padding left luon luon co gia tri nen luc nao cung lay dc ratio widthContent / widthResponsive
            var rateCur = (va.wSlide - (va.pa.left * 2)) / va.wRes;
            va.rate = (rateCur > 1) ? 1 : rateCur;
        }
    };
})(jQuery);







/**
 * MODULE NAVIGATION
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is,

        /**
         * CAP NHAP BIEN TOAN CUC
         */
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            cs   = self.cs;
            va   = self.va;
            is   = self.is;
        };

    /**
     * MODULE NAVIGATION
     */
    rt01MODULE.NAV = {

        /**
         * RENDER NAVIGATION
         */
        render : function() {
            varibleModule(this);
            var ns = va.ns;


            /**
             * TIM KIEM DOI TUONG NAVIGATION DAU TIEN
             */
            var classes  = '.'+ va.ns + o.nameNav,
                $navHTML = that.RENDER.searchDOM(classes);

            if( $navHTML.length ) {
                va.$nav = $navHTML;
            }
            else {
                // Render Navigation mac. dinh neu khong to`n tai san
                va.$nav = $( o.markup.nav.replace(/\{ns\}/g, ns) );
                // Chen vao Code
                that.RENDER.into(o.markup.navInto, va.$nav);
            }



            /**
             * TIM KIEM CAC THANH PHAN KHAC TRONG NAVIGATION
             */
            var $prev = va.$nav.find('.'+ ns + o.namePrev),
                $next = va.$nav.find('.'+ ns + o.nameNext);

            // Navigation Prev
            if( $prev.length ) va.$prev = $prev;
            else {
                va.$prev = $('<div/>', { 'class': ns + o.namePrev, 'text': 'prev'});
                va.$nav.append(va.$prev);
            }

            // Navigation Next
            if( $next.length ) va.$next = $next;
            else {
                va.$next = $('<div/>', { 'class': ns + o.nameNext, 'text': 'next'});
                va.$nav.append(va.$next);
            }
        },



        /**
         * EVENT TAP-CLICK
         */
        eventTap : function() {
            var that   = this,
                va     = that.va,
                evName = va.ev.click +' '+ va.ev.swipe.end;


            // Dieu kieu de setup event Tap
            if( !va.$nav ) return false;

            // Loai bo event tren Navigation
            va.$prev.add(va.$next).off(evName);

            // Dang ki lai event tren Navigation neu co'
            if( that.is.nav ) {
                va.$prev.on(evName, function(e) { that.EVENTS.prev(); e.preventDefault(); });
                va.$next.on(evName, function(e) { that.EVENTS.next(); e.preventDefault(); });
            }
        },



        /**
         * TOGGLE NAVIGATION NEXT PREV
         */
        toggle : function() {
            varibleModule(this);
            var deactived = va.deactived,
                idCur     = cs.idCur,
                num       = cs.num;

            if( !is.loop ) {
                if( idCur == 0 )       va.$prev.addClass(deactived);
                if( idCur == num - 1 ) va.$next.addClass(deactived);
                
                if( idCur != 0 )       va.$prev.removeClass(deactived);
                if( idCur != num - 1 ) va.$next.removeClass(deactived);
            }

            else va.$prev.add(va.$next).removeClass(deactived);
        }
    };
})(jQuery);







/**
 * MODULE PAGINATION
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M,
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            cs   = self.cs;
            va   = self.va;
            is   = self.is;
            ti   = self.ti;
            M    = self.M;
        };

    /**
     * MODULE PAGINATION
     */
    rt01MODULE.PAG = {

        /**
         * RENDER CONTAINER PAGINATION
         */
        renderSelf : function() {
            varibleModule(this);

            // Pagination: search DOM
            var ns       = ' '+ va.ns,
                nsPag    = ns +'pag-',
                pag      = o.pag,
                pagOut   = ns +'outside',
                dirs     = pag.direction,
                pagClass = ns + o.namePag + ns + pag.type + nsPag + dirs + nsPag + pag.position,
                $pagHTML = that.RENDER.searchDOM('.'+ va.ns + o.namePag);

            // Kiem tra va` them vao` Class more vao Pagination luc ban dau
            if( typeof pag.moreClass == 'string' ) pagClass += ' '+ pag.moreClass;

            // Pagination: tao dom voi className --> class type va dirs se duoc update sau
            is.outsidePag = !!$pagHTML.length;
            va.$pag       = $pagHTML.length ? $pagHTML.addClass(pagClass + pagOut)
                                            : $('<div/>', { 'class' : pagClass });
            

            // Them DOM PagInner vao Pagination
            va.$pagInner = $('<div/>', {'class' : va.ns +'paginner'});

            
            // PagItems setup
            // Chen PagItem vao Pagination container
            va.$pagItem = $(''); $thumbItem = $('');
            va.$s.each(function() { that.renderPagItem($(this)) });


            // PagArrow + PagMark setup
            // Chen PagArrow vao pagination container
            if( o.pag.isArrow ) that.renderPagArrow();
            if( o.pag.isMark  ) that.renderPagMark();


            // PagItem: append to pagination, ngoai tru layout dash
            va.$pagInner.append(va.$pagItem);


            // Chen Pagination vao Code
            // Vi tri top --> Pagination append vao vi tri dau tien cua Code
            va.$pag.prepend(va.$pagInner);
            // that.RENDER.overlayGhost(va.$pag);   // Khong can thiet
            if( !$pagHTML.length ) {
                va.$self[ (pag.position == 'begin') ? 'prepend' : 'append' ](va.$pag);
            }



            // Add bien Viewport va namespace va.pag
            va.pag.viewport = va.$pag;



            /**
             * THEM CLASS VAO CODE -> HO TRO TABS STYLE CUSTOM
             */
            var classes = nsPag + pag.type;
            if( !is.pagList ) {

                // Them class chieu huong va vi tri
                classes += nsPag + dirs + nsPag + pag.position;
                if( is.outsidePag ) classes += pagOut;
            }
            // Chen tat ca class vao Code
            va.$self.addClass(classes);
        },

        renderPagItem : function($sl) {
            varibleModule(this);

            // Lay pagItem tu data slide
            var pItem = $sl.data('$pagItem');

            // Thumbnail item: them vao PagItem va luu tru vao $thumbItem de su dung sau nay
            is.pagThumb && that.renderThumbBegin($sl, pItem);

            // PagItem: store in object --> su dung sau nay
            va.$pagItem = va.$pagItem.add(pItem);

            // Usefor add new slide by API.add
            return pItem;
        },

        /**
         * RENDER PAG ARROW
         */
        renderPagArrow : function() {
            varibleModule(this);

            var
            str = "<div class='{ns}pagarrow-item {ns}pagarrow-{dirs}'><div class='{ns}pagarrow-icon'></div></div>";
            str = str.replace(/\{ns\}/g, va.ns);

            va.$pagArrowLeft  = $( str.replace(/\{dirs\}/g, 'left') );
            va.$pagArrowRight = $( str.replace(/\{dirs\}/g, 'right') );
            va.$pag.append(va.$pagArrowLeft, va.$pagArrowRight);
        },

        /**
         * RENDER PAGINATION SIGN CURRENT
         */
        renderPagMark : function() {
            varibleModule(this);
            var str = "<div class='{ns}pagmark'><div class='{ns}pagmark-item'></div></div>";

            va.$pagMark = $(str.replace(/\{ns\}/g, va.ns));
            va.$pagMarkItem = va.$pagMark.children();
            va.$pag.append(va.$pagMark);
        },

        /**
         * SETUP TRUOC KHI RENDER THUMBNAIL : TAO WRAPPER, ICONLOADER
         */
        renderThumbBegin : function($sl, $pItem) {
            varibleModule(this);
            var that   = this,
                slData = $sl.data();

            // Thumbnail tag
            var $thumb = $('<div/>', {'class' : va.ns + o.thumbWrap});
            $pItem.append($thumb);

            // Thumbnail luu tru vao slide
            slData.$thumb = $thumb;

            // Add icon loader vao thumbnail
            that.RENDER.loaderAdd($sl, $pItem, '$thumbLoader');




            /**
             * TIM KIEM THUMBNAIL O NGOAI - DUA TREN [DATA-THUMBNAIL-LINK]
             */
            var $imgback = $sl.find('.'+ va.ns + o.nameImageBack),
                thumbLink;

            if( !!$imgback ) {
                thumbLink = $imgback.data('thumbnailLink');

                // Tiep tuc kiem tra Thumbnail Link co empty string hay khong
                if( /^\s*$/g.test(thumbLink) ) thumbLink = false;
            }




            /**
             * TAO IMAGE THUMBNAIL NEU LINK IMAGE SRC TON TAI
             */
            if( !!thumbLink ) {
                var iThumb = new Image();

                iThumb.onload = function() {
                    varibleModule(that);

                    var $i = $('<img></img>', { 'src' : thumbLink }).data('rate', iThumb.width / iThumb.height);
                    that.renderThumbEnd($i, $thumb, $sl);
                }
                iThumb.onerror = function() {
                    varibleModule(that);
                    M.message('thumbnail load failed', thumbLink);
                }

                // Image thumbnail: set src
                iThumb.src = thumbLink;
            }

            // Neu thumbLink khong ton tai --> luu tru vao Code --> tao thumb bang imgback khi Code bat dau load
            else slData.isThumbByImgback = true;
        },

        /**
         * SETUP RENDER CAC THANH PHAN CON LAI KHI CO THUMBNAIL ITEM
         */
        renderThumbEnd : function($i, $thumb, $sl) {
            var that = this;

            // Setup vi tri Center va Style cho Thumb Item
            that.posCenterForThumbItem($i, $thumb);

            // Thumbnail: append image
            $thumb.append($i);

            // Loai bo thumb loader o giai doan cuoi cung
            that.RENDER.loaderRemove($sl, '$thumbLoader');
        },




        /**
         * FUNCTION TOGGLE CLASS TREN PAGINATION
         *  + Phai kiem tra $pag co ton tai hay khong, boi vi Code bat dau setup, setup prop truoc khi khi PAG.renderSelf
         *  + Class tren pagination nhu the nao --> tren Code cung tuong tu
         */
        toggleClass : function(isAdd) {
            var that = this, oo = that.oo;
            varibleModule(that);


            // DIEU KIEN THUC HIEN FUNCTION
            if( !(va.$pag && !$.isEmptyObject(oo)) ) return;

            // TIEP TUC THUC HIEN FUNCTION
            var opt       = isAdd ? o : oo,
                pag       = opt.pag,
                ns        = ' '+ va.ns,
                nsPag     = ns +'pag-',
                dirsCur   = '',
                classPag  = '',
                classCore = '';


            /* PHAN KIEM TRA */
            // Kiem tra more class them vao
            if( o.pag.moreClass != oo.pag.moreClass ) classPag += ' '+ pag.moreClass;

            // Kiem tra class Type
            if( o.pag.type != oo.pag.type ) classPag += ns + pag.type;

            // Kiem tra class Vi tri
            if( o.pag.position != oo.pag.position ) classCore += nsPag +'pos-'+ pag.position;

            // Kiem tra class Direction
            if( o.pag.direction != oo.pag.direction && pag.direction )
                classCore += nsPag + pag.direction;

            else if( !!va.addInfo )
                classCore += va.addInfo.pagDirs == 'hor' ? (isAdd ? nsPag +'hor' : nsPag +'ver')
                                                         : (isAdd ? nsPag +'ver' : nsPag +'hor');


            /* PHAN ADD CLASS VAO DOI TUONG */
            // Setup class cho pagination
            classPag += ' '+ classCore;
            isAdd ? va.$pag.addClass(classPag) : va.$pag.removeClass(classPag);

            // Setup class cho Code --> ho tro Pag style
            var classCode = classCore;
            if( isAdd ) classCode += nsPag + pag.type;
            else        classCode += '{ns}tabs {ns]thumbnail {ns}bullet {ns}list'.replace(/\{ns\}/g, nsPag);

            va.$self[isAdd ? 'addClass' : 'removeClass'](classCode);
        },

        /**
         * TOGGLE 'FIRST' - 'LAST' CLASS CHO PAG ITEMS
         */
        firstLastClass : function() {
            var va = this.va,
                $pagItem   = va.$pagItem,
                classFirst = va.ns + 'first',
                classLast  = va.ns + 'last';

            if( !!$pagItem ) {
                $pagItem.removeClass(classFirst +' '+ classLast);
                $pagItem.first().addClass(classFirst);
                $pagItem.last().addClass(classLast);
            }
        },




        /**
         * EVENT TAP TREN PAGINATION
         */
        eventTap : function() {
            // Setup bien o day de? giai quyet xung dot trong Event 'on'
            var that = this;
            varibleModule(that);

            // Dieu kien de tiep setup Event Tap
            if( !va.$pag ) return false;


            /**
             * EVENT TAP TREN PAG ITEM
             *  + Event Click : ngan ca?n di chuyen toi Slide moi khi bat dau swipe
             */
            // Truoc tien loai bo event Tap tren PagItem truoc
            var evName = va.ev.click +' '+ va.ev.swipe.end;
            va.$pagItem.off(evName);

            // Dang ki event Tap tren PagItem neu co
            if( is.pag ) {

                // Event luu tru vi tri bat dau Tap begin
                // that.EVENTS.tapBegin(va.$pagItem);

                // Event end cho PagItem
                va.$pagItem.on(evName, function(e) {
                    varibleModule(that);
                    var $item = $(this);

                    // Kiem tra co pha Tap event hay khong
                    // var isTapEnable = that.EVENTS.checkTap($item, e);

                    // Goto slide selected
                    if( is.tapEnable ) {
                        va.moveBy = 'tap';
                        that.TOSLIDE.run( $item.data('id') , true, false, true);

                        // Loai bo setup 2 event Tap cung luc
                        that.EVENTS.delayToTapNext();
                    }

                    // Loai bo touchend hoac mouseup --> chi 1 events dc hanh dong
                    // 'preventDefault' khac voi 'return false'
                    e.preventDefault();
                });
            }



            /**
             * EVENT TAP TREN PAG ARROW
             */
            if( o.pag.isArrow ) {
                var $arrows = va.$pagArrowLeft.add(va.$pagArrowRight);
                $arrows.off(evName);

                // Dang ki event tren Pag Arrow
                if( o.pag.isTapOnArrow ) {
                    $arrows.on(evName, function(e) {
                        varibleModule(that);

                        if( is.tapEnable ) {
                            var dirs = $(this).is(va.$pagArrowLeft) ? 'left' : 'right';

                            // Thay doi vi tri Pag moi ki tap tren arrow
                            that.translatePagByTapArrow(dirs);
                            
                            // Loai bo setup 2 event Tap cung luc
                            that.EVENTS.delayToTapNext();
                        }

                        // Fixed loi IE nen dung preventDefault --> khong su dung 'return false'
                        e.preventDefault();
                    });
                }
            }
        },

        /**
         * TOGGLE EVENT SWIPE TREN PAGINATION TUY THUOC KICH THUOC TONG CONG CUA PAGITEM
         */
        toggleEvent : function() {
            varibleModule(this);
            var isViewLarge = va.pag.isViewLarge;

            /**
             * DANG KI - LOAI BO SWIPE EVENT
             *  + Neu khong co option 'isAutoOnPag' == true --> Khong can setup nua~
             *  + Phu thuo.c vao 'isViewLarge' va` 'is.swipePagCur'
             */
            if( is.SWIPE && !!o.swipe.isAutoOnPag && ((isViewLarge && !!is.swipePagCur) || (!isViewLarge && !is.swipePagCur)) ) {
                var statusSwipeOnPag = isViewLarge ? 'offPag' : 'onPag',

                    // Lay Module Swipe o ben ngoai
                    SWIPE = $.extend({}, rt01MODULE.SWIPE, that);

                // Reset lai event swipe cho Pagination
                SWIPE.events(statusSwipeOnPag);
            }
        },






        /**
         * KICH THUOC WIDTH-HEIGHT CHO PAG ITEM
         */
        typeSizeItem : function() {
            varibleModule(this);

            var op    = o.pag,
                p     = va.pag,
                wfit  = va.ns +'wfit',
                hfit  = va.ns +'hfit',
                isHor = (p.dirs == 'hor'),
                isSizeSelf = is.pagItemSizeSelf;
                

            /**
             * RESET WIDTH-HEIGHT TREN PAG INNER
             *  --> lay dung gia tri width/height cua pagItem
             *  --> toggle class 'wfit' va 'hfit' de lay dung kich thuoc
             */
            var fnResetSizeOnInner = function() {

                va.$pagInner
                    .css({
                        'width'         : '',
                        'height'        : '',
                        'margin-right'  : '',
                        'margin-bottom' : ''
                    })
                    .removeClass(wfit +' '+ hfit);

                // Reset kich thuoc cua Pag Item
                va.$pagItem.each(function() { $(this).css({'width': '', 'height': ''}); });
            },


            /**
             * SETUP KICH THUOC WIDTH-HEIGHT-MARGIN TREN PAG INNER
             *  Khoang cach tong duoc tinh bang margin-right va margin-bottom
             *  --> khong anh huong toi size 100% va vi tri pagination
             *  --> Kiem tra TAB VERTICAL OUTSIDE --> loai bo width tren PagInner
             */
            fnSetupSizeOnInner = function() {
                var wInner = isHor  ? (op.typeSizeItem == 'max' ? p.wMax : p.wMin) : p.wMax,
                    hInner = !isHor ? (op.typeSizeItem == 'max' ? p.hMax : p.hMin) : p.hMax,
                    styles = {
                        'width'  : (is.outsidePag && !isHor) ? '' : wInner,
                        'height' : hInner
                    };

                // Them Margin vao Pag Inner
                // Loai bo width-height tren Pag Inner khi Pag Item o kich thuoc tu do
                if( isHor ) {
                    styles['margin-bottom'] = p.maBottom;
                    if( isSizeSelf ) styles.width = '1px';
                }
                else {
                    styles['margin-right'] = p.maRight;
                    if( isSizeSelf ) styles.height = '1px';
                }

                // Setup style con Pag Inner
                va.$pagInner.css(styles);



                /**
                 * Setup width-height fit cho Pag Item
                 *  + Neu la Item size Self thi tuy theo p.dirs ma` wfit hay hfit
                 *  + Neu Item khong phai size Self thi bat buoc phai co wfit-hfit
                 */
                if( !is.pagList ) {
                    var classes = wfit +' '+ hfit;

                    if( isSizeSelf ) {
                        classes = isHor ? hfit : wfit;
                    }

                    // Setup class wfit-hfit tren Pag Inner
                    va.$pagInner.addClass(classes);
                }
            },


            /**
             * Lay padding va border cua VIEWPORT
             *  --> ho tro pag-tab voi opt SIZEAUTO-FULL
             */
            fnGetSpaceOuterOfViewport = function() {
                var pad     = 'padding-',
                    border  = 'border-',

                    fnSpace = function(aProp) {
                        var sizeView = 0, sizePag  = 0;

                        for( i = aProp.length - 1; i >= 0; i-- ) {
                            sizeView += M.pInt(va.$viewport.css(aProp[i]));
                            sizePag  += M.pInt(va.$pag.css(aProp[i]));
                        }
                        return sizeView - sizePag;
                    };

                va.viewSpace = {
                    'hor': fnSpace([pad +'left', pad +'right', border +'left-width', border +'right-width']),
                    'ver': fnSpace([pad +'top', pad +'bottom', border +'top-width', border +'bottom-width'])
                };
            };



            /**
             * BAT DAU SETUP
             */
            fnResetSizeOnInner();
            that.getSizeOfItems();

            fnSetupSizeOnInner();
            fnGetSpaceOuterOfViewport();
        },

        /**
         * LAY KICH THUOC WIDTH-HEIGHT CUA TUNG ITEM
         */
        getSizeOfItems : function() {
            varibleModule(this);
            var op = o.pag,
                p  = va.pag;

            
            /**
             * LAY GIA TRI PADDING - BORDER - MARGIN CUA PAG ITEM
             */
            var
            fnGetPaBoMaOfItems = function() {
                var cssName = ['padding', 'border', 'margin'],
                    cssDirs = ['top', 'right', 'bottom', 'left'],
                    lenName = cssName.length,
                    lenDirs = cssDirs.length;

                // Truong tien: Reset lai cac gia tri cua Css Name
                for( i = 0; i < lenName; i++ ) {
                    p[cssName[i]] = [[], [], [], []];
                }

                // Vong lap tung doi tuong Pag Item
                va.$pagItem.each(function(index) {
                    var $itemCur = $(this);

                    /**
                     * VONG LAP DE LAY CAC GIA TRI CSS NAME
                     *  + Vong lap thu nhat la CSS Name
                     *  + Vong lap thu hai la CSS Dirs
                     *  + Gia tri sap xep the thu tu. : Padding.Top.IDPagItem
                     */
                    for( i = 0; i < lenName; i++ ) {
                        for( j = 0; j < lenDirs; j++ ) {
                            p[cssName[i]][j][index] = M.pInt( $itemCur.css(cssName[i] +'-'+ cssDirs[j]) );
                        }
                    }
                });
            },

            /**
             * LAY KICH THUOC WIDTH - HEIGHT CUA PAG ITEM
             */
            fnGetSizeOfItems = function(ns) {
                var ns2   = ns == 'w' ? 'width' : 'height',
                    ns3   = ns == 'w' ? 'Width' : 'Height',
                    names = [ns +'Self', ns +'ToPadding', ns + 'ToBorder', ns +'ToMargin'];

                // Reset thuoc tinh luc ban dau
                for( i = 0; i < names.length; i++ ) {
                    p[names[i]] = [];
                }

                // Setup tung item
                va.$pagItem.each(function() {
                    var $itemCur   = $(this),
                        dSelf      = M.r( $itemCur[ns2]() ),

                        // Khoang cach xunh quanh cua Item : Padding, Border, Margin
                        dPadding   = M.r( $itemCur['inner'+ ns3]() - dSelf ),
                        dPadToBor  = M.r( $itemCur['outer'+ ns3]() - dSelf ),
                        dPadToMar  = M.r( $itemCur['outer'+ ns3](true) - dSelf );


                    // SETUP KICH THUOC PAG ITEM KHI CO OPTION : WIDTH, HEIGHT, MINWIDTH, MAXWIDTH...
                    var optsMin = op['min'+ ns3],
                        optsMax = op['max'+ ns3];

                    if( $.isNumeric(op[ns2]) ) dSelf = op[ns2];
                    if( $.isNumeric(optsMin) && dSelf < optsMin ) dSelf = optsMin;
                    if( $.isNumeric(optsMax) && dSelf > optsMax ) dSelf = optsMax;

                    // Push tat ca kich thuoc vao ma?ng
                    // Phan kich thuoc phai cong lai. --> boi vi Kich thuoc self co the thay doi
                    p[names[0]].push(dSelf);
                    p[names[1]].push(dSelf + dPadding);
                    p[names[2]].push(dSelf + dPadToBor);
                    p[names[3]].push(dSelf + dPadToMar);
                });

                
                /**
                 * SETUP KICH THUOC KHAC
                 *  + Kich thuoc Min - Max cua Pag Item
                 *  + Kich thuoc Tong? cong cua tat ca Pag Items
                 */
                p[ns +'Min'] = Math.min.apply(null, p[names[0]]);
                p[ns +'Max'] = Math.max.apply(null, p[names[0]]);
                p[ns +'Sum'] = M.sum(p[names[3]]);
            },

            /**
             * LAY GIA TRI LON NHAT TRONG MA?NG
             */
            fnMaxOfTwoArray = function(arr1, arr2) {
                var maxValue = 0;
                for( i = 0; i < cs.num; i++ ) {

                    var valueCur = arr1[i] - arr2[i];
                    if( valueCur > maxValue ) maxValue = valueCur;
                }
                return maxValue;
            };


            // Bat dau setup
            fnGetPaBoMaOfItems();
            fnGetSizeOfItems('w');
            fnGetSizeOfItems('h');
            
            // Kich thuoc Tong cong cua Pag Items tuy thuoc vao Direction
            p.sSum = (p.dirs == 'hor') ? p.wSum : p.hSum;

            // Gia tri Lon nhat cua Margin cho Pag Inner
            p.maRight  = fnMaxOfTwoArray(p.wToMargin, p.wSelf);
            p.maBottom = fnMaxOfTwoArray(p.hToMargin, p.hSelf);
        },

        // Lay gia tri cac thuoc tinh cua pagination lien quan den kich thuoc/size
        propAndStyle : function() {
            varibleModule(this);
            var that  = this,
                $pag  = va.$pag,
                num   = cs.num,
                p     = va.pag,
                isHor = p.dirs == 'hor';


            /**
             * Chieu dai cua Pagination thay doi theo huong swipeCur
             *  Thay doi theo option sizeAuto [null, 'full', 'self']
             *      + Chuyen doi sizeAuto khi pagination co markup outside
             *      + null : khong setup gi ca
             *      + full : width/height pag == width/height Code
             *      + self : width/height pag = tong cua width/height PagItem cong lai
             */
            var sizeAuto = (is.outsidePag && !isHor) ? 'self' : o.pag.sizeAuto,
                style    = { 'width': '', 'height': '' },
                sViewport;

            if( sizeAuto === null ) {
                sViewport = isHor ? $pag.width() : $pag.height();
            }
            else if( sizeAuto == 'full' ) {
                if( isHor ) sViewport = style.width  = va.wCode + va.viewSpace.hor;
                else        sViewport = style.height = va.hCode + va.viewSpace.ver;
            }
            else if( sizeAuto == 'self' ) {
                if( isHor ) sViewport = style.width  = p.wSum;
                else        sViewport = style.height = p.hSum;
            }

            // Setup size auto len pagination
            p.sViewport = sViewport;
            va.$pag.css(style);

            // Kich thuoc cua Pag --> Nam phia duoi can phai Update Style truoc tien
            p.wViewport = $pag.width();
            p.hViewport = $pag.height();
            p.sTranslate = 0;   // Bien nay khong su du.ng nua trong Pag



            /**
             * SETUP ALIGN JUSTIFY
             *  + Justify: opts sizeAuto la null || full, markup inside va Huong pag la 'hor'
             */
            if( is.alignJustify && !is.outsidePag && sizeAuto != 'self' ) {
                
                // Truong hop Huo'ng Horizontal
                if( isHor ) {

                    // Lay kich thuoc lo'n nhat cua Item
                    var wMaxItem  = Math.max.apply(null, p.wToMargin),
                        wSumItems = wMaxItem * num;

                    // Kich thuoc cua Item tuy thuoc vao Size tong co.ng cua Items voi Size Viewport
                    var wJustify = wMaxItem;
                    if( p.wViewport >= wSumItems || o.pag.isJustifyWhenLarge ) wJustify = ~~(p.wViewport / num);

                    // Update kich thuoc cua Pag Inner
                    var wItem = wJustify - p.maRight;
                    va.$pagInner.css({ 'width': wItem, 'height': p.hSelf[0] });
                }
            }




            /**
             * Setup cac bien khac cua Pag
             *  + Do dai lai con cua va.wCode so voi tong width pagItem --> multi use
             *  + Kiem tra cho phep pagItem co center
             *    --> width Viewport phai lon hon tong width pagItem cong lai
             */
            // Truoc tien cap nhat kich thuoc cua Pag Item
            that.getSizeOfItems();

            // Setup cac bien tiep theo
            var wRemain     = p.sViewport - p.sSum,
                isViewLarge = p.isViewLarge = wRemain >= 0;
            
            

            /**
             * Setup PULL-ALIGN cua Pag
             * PULL se tro ve mac dinh la 'begin' --> neu do dai cua pagination lon hon Viewport
             */
            p.align = o.pag.align;
            if( p.align == 'justify' || (!isViewLarge && p.align != 'begin') ) p.align = 'begin';

            // Tiep tuc setup neu o cac vi tri khac nhau
            if( p.align == 'begin' ) {
                p.xMin = p.xCanvas = 0;
                p.xMax = isViewLarge ? 0 : wRemain;
            }
            else if( p.align == 'end' ) {
                p.xMin = p.xCanvas = wRemain;
                p.xMax = p.sViewport;
            }
            else if( p.align == 'center' ) {
                p.xMin = p.xCanvas = M.r(wRemain / 2);
                p.xMax = p.xMin + p.sSum;
            }



            /**
             * TOGGLE EVENT SWIPE CUA PAGINATION TUY THUOC VAO KICH THUOC CUA PAGITEM
             */
            that.toggleEvent();
        },

        /**
         * VI TRI CUA TUNG ITEM TRONG PHUONG THUC SIZE.sTranslate()
         */
        posAndSizeOfItems : function() {
            varibleModule(this);
            var p     = va.pag,
                isHor = p.dirs == 'hor';


            /**
             * TRUOC TIEN UPDATE LAI KICH THUOC WIDTH-HEIGHT CUA PAG ITEM
             */
            that.getSizeOfItems();


            /**
             * SETUP VI TRI CUA TUNG ITEM DUA THEO HUO"NG TABS
             */
            var nameSize = isHor ? 'wToMargin' : 'hToMargin';
            p.pBegin = [0];

            for( i = 1; i < that.cs.num; i++ ) {
                p.pBegin[i] = p.pBegin[i-1] + p[nameSize][i-1];
            }



            /**
             * VONG LAP DE DI CHUYEN TUNG ITEM THEO VI TRI DA SETUP
             */
            var tl = (isHor ? 'tlx' : 'tly'), tf = {};
            for( i = 0; i < that.cs.num; i++ ) {

                // Setup vi tri
                tf[p.cssTf] = M[tl](p.pBegin[i]);

                // Setup kich thuoc
                if( is.pagItemSizeSelf ) {
                    if( isHor ) tf['width']  = p.wSelf[i];
                    else        tf['height'] = p.hSelf[i];
                }
                va.$pagItem.eq(i).css(tf);
            }
        },





        /**
         * VI TRI VA KICH THUOC CHO THUMBNAIL ITEM
         */
        posCenterForThumbItem : function($imgItem, $thumb) {
            varibleModule(this);

            var ns       = va.ns,
                wPagOpts = o.pag.width,
                hPagOpts = o.pag.height,
                wThumb   = $.isNumeric(wPagOpts) ? wPagOpts : $thumb.width(),
                hThumb   = $.isNumeric(hPagOpts) ? hPagOpts : $thumb.height(),
                rThumb   = wThumb / hThumb,
                rImgItem = $imgItem.data('rate');


            // Setup image thumb o vi tri chinh giua va fill trong wrapper
            // Them class Thumbnail setup fit width/height
            var classAdd = '',
                style    = { 'width': '', 'height': '', 'left': '', 'top': '' };

            if( wThumb && hThumb ) {
                if( rImgItem > rThumb ) {
                    classAdd   = ns +'hfit';
                    style.left = - M.r((rImgItem * hThumb - wThumb) / 2);
                }
                else {
                    classAdd  = ns +'wfit';
                    style.top = - M.r((wThumb / rImgItem - hThumb) / 2);
                }
            }


            // Setup style tren Image Item
            $imgItem.css(style);

            // Toggle class Fit cho Thumbnail
            var classRemove = '{ns}hfit{ns}wfit'.replace(/\{ns\}/g, ns).replace(classAdd, '');
            $thumb.addClass(classAdd).removeClass(classRemove);
        },

        /**
         * CAP NHAT VI TRI CENTER CHO TAT CA THUMBNAIL
         */
        updateThumbnail : function() {
            var that = this;
            varibleModule(that);

            /**
             * DIEU KIEN THUC HIEN
             */
            if( !(is.pagThumb && is.initEnd) ) return;


            /**
             * UPDATE THUMBNAIL TUNG SLIDE
             */ 
            va.$s.each(function() {
                
                // Kiem tra Thumbnail ton tai trong Slide hien tai
                var $thumb = $(this).data('$thumb');
                if( !$thumb ) return;

                // Setup vi tri Center cho Image Item
                // Dong thoi Kiem tra Image Item da Loaded chua
                var $imgItem = $thumb.find('img'),
                    isLoaded = $imgItem.data('isLoaded');

                isLoaded && that.posCenterForThumbItem( $imgItem, $thumb );
            });
        },





        /**
         * SETUP VI TRI CHINH GIU CHO PAG ITEM CURRENT
         */
        posCenterForItemCur : function(isForceTf, isNoAnim) {
            var that = this,
                p    = that.va.pag;
            varibleModule(that);


            /**
             * MAIN FUNCTION
             * Tim kiem vi tri cua Pag Inner
             *  + Vi tri : KhoangCach phia truoc ItemCur - ((KhoangCach tu ItemCur so voi Viewport)/2)
             */
            var fnTranslate = function() {
                varibleModule(that);

                // Truong hop lon hon: Size Viewport > Size PagItems
                // Neu di chuyen bang POSITION.xAnimate thi can kiem tra arrowActived()
                // Pag huong Vertical luc bat dau luon luon co' Animation --> thay tu. nhien hon
                if( p.isViewLarge ) {
                    if( p.dirs == 'ver' ) isNoAnim = false;
                    that.translateTo(p.xCanvas, isForceTf, isNoAnim);
                }

                // Truong hop nho? hon: Size Viewport < Size PagItems
                else {

                    // Vi tri can de'n
                    var disOuter  = (p.dirs == 'hor') ? p.wToMargin : p.hToMargin,
                        disBefore = M.sum(disOuter, cs.idCur),
                        xTarget   = - M.r(disBefore - ((p.sViewport - disOuter[cs.idCur])/2));


                    // Truong hop o ria Viewport thi di chuyen toi ria
                    if     ( xTarget > 0 )      xTarget = 0;
                    else if( xTarget < p.xMax ) xTarget = p.xMax;

                    // Setup translate cho pagination
                    that.translateTo(xTarget);
                }
            };


            /**
             * SETUP TIMER CHO CHUYEN DONG
             * Tabs Ver thi cho` sau khi animate height roi` moi toi translate Pag
             */
            if( p.dirs == 'hor' ) {
                fnTranslate();
            }
            else {
                var timer = 10 + o.speedHeight;
                clearTimeout(ti.centerItemCur);
                ti.centerItemCur = setTimeout(fnTranslate, timer);
            }
        },

        /**
         * DI CHUYEN PAG TOI VI TRI CO DING!!
         *  + Khac vi tri xCanvas thi moi setup --> tiet kiem Memory
         *  + Ho tro PagItem0 o vi tri chinh giua sau khi resize nho dan --> van phuc hoi vi tri PagItem0
         *  + Thiet lap bang tay, khong dung xAnimate() --> Canvas va pagination cung transition
         *  + Ho tro loai bo transition inline tren doi tuo.ng
         *  + Ho tro fallback browser no transition
         */
        translateTo : function(xTarget, isForceTf, isNoAnim) {
            var that = this,
                p    = that.va.pag;
            varibleModule(that);

            // Dieu kien thuc hien function
            if( !(xTarget != p.xCanvas || xTarget == 0 || !!isForceTf) ) return;


            /**
             * SETUP TRANSLATE LEN PAG INNER
             */
            var tf = {},
                sp = o.pag.speed,
                es = o.pag.easing,
                tl = (p.dirs == 'hor') ? 'tlx' : 'tly';

            // Setup transfrom ho tro dirction
            tf[p.cssTf] = M[tl]( M.r(xTarget) );

            // PHAN CO ANIMATION
            if( !isNoAnim ) {

                // Phan browser ho tro css transition
                if( is.ts ) {
                    var ts = M.ts(va.cssTf, sp, M.easeName(es));

                    // Can phai co delay > 1ms (cho trinh duyen detach transition)
                    va.$pagInner.css(ts);
                    // setTimeout(function() { that.va.$pagInner.css(tf) }, 2);
                    va.$pagInner.css(tf);

                    // Loai bo transition --> sach se
                    clearTimeout(ti.pagCenter);
                    ti.pagCenter = setTimeout(function() { varibleModule(that); M.tsRemove(va.$pagInner); }, sp);
                }

                // Setup phan brower khong ho tro css transition
                else {
                    va.$pagInner.animate(tf, {duration: sp, queue: false, easing: es});
                }
            }

            // PHAN KHONG CO ANIMATION
            else va.$pagInner.css(tf);
                


            /**
             * OTHERS SETUP
             *  + Update vi tri xCanvas cua pagination
             *  + Kiem tra Arrow Actived : sau khi update vi tri xCanvas
             *  + Cap nhat vi tri cua Pag Mark
             */
            p.xCanvas = xTarget;
            o.pag.isArrow && that.arrowActived(xTarget);
            o.pag.isMark && that.sizePosOfMark();
        },



        /**
         * THEM MARGIN VAO CODE VIEWPORT --> DE LAY WIDTH VIEWPORT CHINH XAC
         */
        marginOnViewport : function() {
            varibleModule(this);

            // var margin = va.pag.wMax + va.pag.maRight;
            var margin = va.$pag.outerWidth(true);

            va.pagVer == 'begin' && va.$viewport.css('margin-left', margin);
            va.pagVer == 'end'   && va.$viewport.css('margin-right', margin);
        },

        /**
         * TABS VERTICAL CHUYEN SANG HUONG HORIZONTAL - VA PHUC HOI LAI NHU CU
         */
        verToHor : function() {
            varibleModule(this);
            var op   = o.pag,
                p    = va.pag,
                dirs = null;

            // Kiem tra co thay doi huong cua tabs hay khong
            if( is.pagTabs && op.direction == 'ver' ) {

                // Kiem tra co Chuyen doi sang huo'ng Horizontal
                var isMinToHor = M.matchMedia(0, op.widthMinToHor, true);
                // Kiem tra tiep tuc neu ket qua false
                if( !isMinToHor ) isMinToHor = M.matchMedia(0, op.rangeMinToHor);
                
                // Setup tiep tuc
                if( p.dirs == 'ver' && isMinToHor ) {
                    dirs = p.dirs = 'hor';

                    // Clear Height tren pag dom
                    // Ngan can setup height tren pag trong animHeightForCode()
                    !!va.$pag && va.$pag.stop(true).css('height', '');
                }
                else if( p.dirs == 'hor' && !isMinToHor ) {
                    dirs = p.dirs = 'ver';
                }
            }


            // Update Code neu co thay doi huong
            // Loai bo width-inline truoc de lay kich width dung khi update
            if( !!dirs ) {
                va.$canvas.add(va.$pag).css('width', '');
                va.addInfo = { 'pagDirs': dirs };
                cs.update({}, false);
            }
        },

        /**
         * ARROW TOGGLE ACTIVED
         *  @note Setup fn khi co' su thay doi vi tri' pag.xCanvas
         */
        arrowActived : function(xCanvasCur) {
            varibleModule(this);

            var xPlusToShow = 30,
                actived     = va.actived,
                $paLeft     = va.$pagArrowLeft,
                $paRight    = va.$pagArrowRight;


            // Truong hop Viewport nho? hon chieu dai` PagItem cong. lai
            if( !va.pag.isViewLarge ) {

                // Arrow left
                var isClassOnLeft = xCanvasCur < va.pag.xMin - xPlusToShow;
                M.xClass($paLeft, isClassOnLeft, actived);

                // Arrow Right
                var isClassOnRight = xCanvasCur > va.pag.xMax + xPlusToShow;
                M.xClass($paRight, isClassOnRight, actived);
            }

            // Truong hop Viewport lo'n hon
            else $paLeft.add($paRight).removeClass(actived);
        },

        /**
         * DI CHUYEN PAGINATION BOI TAP TREN ARROW
         */
        translatePagByTapArrow : function(dirs) {
            varibleModule(this);
            var p = va.pag;
            
            // Dieu kien de tiep hoat dong function
            if( p.isViewLarge ) return;


            /**
             * TIM KIEM KHOANG CACH CAN DI CHUYEN TREN PAGINATION
             */
            var isLeft = dirs == 'left',
                sign   = isLeft ? 1 : -1,
                // xPlus : Do chenh lech dc cong. vao` xWish
                // --> Nhin thay phan con` lai da~ di chuyen tren pag
                xPlus  = 10,
                xWish  = p.xCanvas + ((p.sViewport - xPlus) * sign),
                xLimit = isLeft ? p.xMin : p.xMax;

            // Setup vi tri can de'n nam trong gio'i han vi tri cho phep
            if( (isLeft && xWish > xLimit ) || (!isLeft && xWish < xLimit) ) {
                xWish = xLimit;
            }

            // Setup translate pagination
            that.translateTo(xWish);
        },

        /**
         * KICH THUOC & VI TRI CUA PAGINATION MARK
         */
        sizePosOfMark : function() {
            varibleModule(this);
            var p     = va.pag,
                xPlus = 0;

            // Dieu kien tiep tuc function
            if( p.margin === undefined ) return;


            /**
             * FUNCTION LAY KICH THUOC CUA PAG MARK
             */
            var
            fnGetSize = function() {
                var isHor    = p.dirs == 'hor',
                    ns       = isHor ? 'w' : 'h',
                    ns2      = isHor ? '3' : '0',
                    sizeTo   = o.pag.sizeMarkTo,
                    idCur    = cs.idCur,
                    styles   = { 'width': '', 'height': '' },

                    margin   = p.margin[ns2][idCur],
                    marToBor = margin   + p.border[ns2][idCur],
                    marToPad = marToBor + p.padding[ns2][idCur],
                    dItemCur;

                // Lay kich thuoc cua Pag Mark tuy thuoc vao opts 'sizeMarkTo'
                if( sizeTo == 'margin' ) {
                    dItemCur = p[ns +'ToMargin'][idCur];
                    xPlus    = 0;
                }
                else if( sizeTo == 'border' ) {
                    dItemCur = p[ns +'ToBorder'][idCur];
                    xPlus    = margin;
                }
                else if( sizeTo == 'padding' ) {
                    dItemCur = p[ns +'ToPadding'][idCur];
                    xPlus    = marToBor;
                }
                else {
                    dItemCur = p[ns +'Self'][idCur];
                    xPlus    = marToPad;
                }

                
                // Dieu kien tiep tuc
                if( dItemCur == p.dMark ) return;

                // Setup kich thuoc len Pag Mark
                styles[isHor ? 'width' : 'height'] = dItemCur;
                va.$pagMarkItem.css(styles);
                p.dMark = dItemCur;
            },


            /**
             * FUNCTION DI CHUYEN VI TRI PAG MARK
             */
            fnTranslate = function() {

                // Tim vi tri cua di chuyen cho Pag Mark
                if( p.pBegin === undefined ) return;
                var xMove = p.xCanvas + p.pBegin[cs.idCur] + xPlus;
                if( xMove == p.xMark ) return;

                // Setup di chuyen vi tri cho Pag Mark
                // Luu tru vi tri cua Pag Mark
                that.POSITION.xTranslate(va.$pagMarkItem, xMove, true, null, p.dirs == 'hor');
                p.xMark = xMove;
            };


            fnGetSize();
            fnTranslate();
        },

        /**
         * DI CHUYEN TAM THOI TREN PAG MARK
         */
        xBufferOnMark : function(pageX) {
            varibleModule(this);
            var p = va.pag;

            // Loai bo Transition cua Pag Mark
            if( is.ts ) {
                var ts = {}; ts[va.cssD] = '0s';
                va.$pagMarkItem.css(ts);
            }

            // Thay doi vi tri cua Pag Mark theo swipe gestures
            var xMove = pageX + p.xMark;
            that.POSITION.xTranslate(va.$pagMarkItem, M.c(xMove), true, null, p.dirs == 'hor');
            p.xMark = xMove;
        }
    };
})(jQuery);







/**
 * MODULE CAPTION
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE CAPTION
     */
    rt01MODULE.CAPTION = {

        /**
         * RENDER CAPTION ELEMENT
         */
        render : function() {

            // Caption: search DOM
            var that     = this,
                o        = that.o,
                va       = that.va,
                divdiv   = '<div/>',

                classes  = '.'+ va.ns + o.nameCap,
                $capHTML = that.RENDER.searchDOM(classes);

            if( $capHTML.length ) va.$cap = $capHTML;
            else                  va.$cap = $(divdiv, {'class' : va.ns + o.nameCap});


            // Them capCur va capLast --> them hieu ung cho caption
            va.$capCur   = $(divdiv, { 'class': va.ns +'cap-cur' });
            va.$capLast  = $(divdiv, { 'class': va.ns +'cap-last' });
            va.$capInner = $(divdiv, { 'class': va.ns +'capinner' });
            va.$capInner.append(va.$capCur, va.$capLast).appendTo(va.$cap);

            // Cap: add to Code
            if( !$capHTML.length ) va.$self.append(va.$cap);
        },


        toggle : function($slCur, $slLast) {
            var o  = this.o,
                va = this.va,
                is = this.is;

            // Bien shortcut va khoi tao ban dau
            var capCur    = $slCur.data('htmlCap'),
                capLast   = $slLast.length ? $slLast.data('htmlCap') : '',

                animEnd   = { duration : o.speedHeight,
                              complete : function() {
                                    var $self = $(this);

                                    if     ( $self.is(va.$capLast) )  $self.css('visibility', '');
                                    else if( $self.is(va.$capInner) ) $self.css('height', '');
                              }};

            // Thay doi noi dung giua caption current
            va.$capCur.html(capCur);


            // Hieu ung khong chay tren mobile --> khong can thiet
            // HIEU UNG FADE giua caption current va last
            // HIEU UNG HEIGHT cho caption
            if( !is.mobile && !is.ie7 ) {

                // NOI DUNG capton Last
                va.$capLast.html(capLast);

                // Lay height cua caption
                var hCur  = va.$capCur.outerHeight(true),
                    hLast = va.$capLast.outerHeight(true) || hCur;      // Fixed luc dau = 0
                    

                // HIEU UNG
                va.$capCur
                    .stop(true)
                    .css('opacity', 0)
                    .animate({ 'opacity' : 1 }, animEnd);

                va.$capLast
                    .stop(true)
                    .css({ 'opacity': 1, 'visibility': 'visible' })
                    .animate({ 'opacity' : 0 }, animEnd);
                
                hCur != hLast &&
                va.$capInner
                    .stop(true)
                    .css('height', hLast)
                    .animate({ 'height' : hCur }, animEnd);
            }
        }
    };
})(jQuery);







/**
 * MODULE IMAGE
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M, PAG,

        /**
         * CAP NHAP BIEN TOAN CUC
         */
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            cs   = self.cs;
            va   = self.va;
            is   = self.is;
            ti   = self.ti;
            M    = self.M;
            PAG  = $.extend({}, rt01MODULE.PAG, self);
        };


    /**
     * MODULE IMAGE
     */
    rt01MODULE.IMAGE = {

        /**
         * SETUP ALL IMAGES EACH SLIDE
         */
        setupEachSlide : function(dataCur) {
            varibleModule(this);
            var ns            = va.ns,
                $slide        = dataCur.$slide,
                isHaveImgback = false;

            // Setup tat ca ca'c image trong slide
            dataCur.$images.each(function() {
                var $i = $(this);


                /**
                 * CHUYEN DOI TAG CUA LINK THANH TAG IMG
                 */
                if( /a/i.test(this.tagName) ) $i = that.linkToImage($i);


                /**
                 * KIEM TRA IMAGE LAZY VA IMAGE BACK TRONG CODE
                 *  + Ho tro chi duoc phep 1 Image back trong moi~ Slide
                 *  + Image se duoc ho tro ti'nh nang Lazyload va Responsive
                 */
                var isImgback   = !isHaveImgback && $i.hasClass(ns + o.nameImageBack),
                    isImgOfCode = isImgback || $i.hasClass(ns + o.nameImageLazy);


                /**
                 * NHUNG THUOC TINH CO BAN DUOC LUU TRU TREN IMAGE DATA
                 */
                $i.data({
                    '$slide'       : $slide,
                    'slideID'      : dataCur.id,
                    'isImgOfCode'  : isImgOfCode,
                    'isImgback'    : isImgback,
                    'isSrcOutside' : false,
                    'isLoaded'     : false,
                    'src'          : []
                });



                /**
                 * SETUP NHUNG THUOC TINH CHI CO TRONG IMAGE BACK
                 */
                if( isImgback  ) {
                    isHaveImgback = true;

                    // Wrap Image Item to Div.imgback
                    that.wrap($i);

                    // Store object image background
                    $slide.data({
                        '$imgback'     : $slide.find('.'+ va.ns +'imgback'),
                        '$imgbackItem' : $i,
                        'isImgback'    : true
                    });
                }



                /**
                 * SETUP OTHERS
                 */
                // Src image setup, cho vao mang theo thu tu uu tien --> roi get tu` dau
                // Loai bo chuoi bat dau 'data:image/' --> boi vi do Code tu them vao, xung dot voi load image
                var dataSRC     = $i.data('src'),
                    srcSelf     = $i.attr('src'),
                    isSrcInline = /^data\:image\//g.test(srcSelf);
                !isSrcInline && dataSRC.push(srcSelf);


                var srcLazy = $i.attr('data-'+ o.nameDataLazy);
                if( srcLazy != undefined ) {
                    dataSRC.push(srcLazy);
                    $i.removeAttr('data-'+ o.nameDataLazy);
                }


                // Image: check data image && setup data image
                that.getData($i);


                // Image kiem tra src co o ngoai (server flickr)
                // Neu la srcOutside thi cho cho load xml xong, neu khong thi chay thang IMAGE.load
                var iData = $i.data();
                // if( iData.flickr && iData.flickr.photoID ) flickr.photo($i);
                // else                                       that.load($i);
                // that.load($i);
                that.loadEachImage($i);
            });
        },

        /**
         * EVENT LOAD TUNG IMAGE
         *  + Chu y: Khong the chuyen sang module.IMAGE dc --> bie'n trong event 'onload' khong chi'nh xac nua~
         */
        loadEachImage : function($i) {
            var that = this;
            varibleModule(that);

            /**
             * FUNCTION SETUP SAU KHI IMAGE LOADED
             */
            var iData  = $i.data(),
                $slCur = iData.$slide,
                slData = $slCur.data();

            var fnSetupAfterLoaded = function() {

                // Kiem tra da load het image --> neu load het --> setup slideEnd
                slData.nCur = slData.nCur + 1;
                if( slData.nCur == slData.imageNum ) {
                    setTimeout(function() { that.LOAD.slideEnd($slCur) }, 10);
                }


                /* THEM THUMBNAIL */
                // Kiem tra xem co add thumbnail bang imgback hay khong
                if( is.pag && slData.isThumbByImgback && iData.isImgback ) {

                    // Clone imgback voi thuoc tinh --> add vao pagination
                    PAG.renderThumbEnd($i.clone(true), slData.$thumb, $slCur);
                }
            };



            /**
             * KIEM TRA SRC CUA IMAGE DA LOAD THANH CONG
             */
            var imageNew = new Image(),
                dataSRC  = iData.src,
                srcCur   = dataSRC.pop();

            // EVENT IMAGE LOAD THANH CONG
            imageNew.onload = function() {
                varibleModule(that);

                // Image: set properties
                // Truyen agrument bang image DOM --> nhanh va lay size Width/Height chinh xac hon jquery selector
                that.prop($i, this);

                // Image: all image loaded
                fnSetupAfterLoaded();
            };

            // EVENT IMAGE LOAD THAT BAI
            imageNew.onerror = function() {
                varibleModule(that);

                // Neu src trong mang con value --> load tiep tuc src con lai trong mang
                if( dataSRC.length ) that.loadEachImage($i);

                // Neu mang src empty --> bao loi khong load duoc
                else {

                    // Image: change alt
                    $i.attr('alt', '[ image load failed ]');
                    M.message('image load failed', srcCur);

                    // Image: all image loaded
                    fnSetupAfterLoaded();
                }
            };

            // Image src: get, o duoi function i.onload --> fixed bug for IE
            // Lay src trong data --> lay theo thu tu uu tien.
            $i.attr('src', srcCur);
            imageNew.src = srcCur;
        },

        /**
         * LAY 'DATA-IMAGE' TREN IMAGE --> HO TRO 'FLICKR'
         */
        getData : function($i) {

            var optsImage = $i.data('image');
            if( $.isPlainObject(optsImage) ) {

                // Luu tru option Image tren data
                // Xoa data attribute tren Image
                $i.data(optsImage).removeAttr('data-image');
            }
        },

        /**
         * SETUP CAC THUOC TINH CUA IMAGE SAU KHI LOAD XONG
         */
        prop : function($i, i) {
            varibleModule(this);

            /**
             * LUU TRU KICH THUOC CUA IMAGE TREN DATA
             */
            var iData  = $i.data(),
                wImage = i.width,
                hImage = i.height;

            $i.data({
                'isLoaded' : true,
                'width'    : wImage,
                'height'   : hImage,
                'rate'     : wImage / hImage
            });


            /**
             * LUU TRU IMAGE HIEN TAI VAO NHO'M IMAGE TRONG SLIDE
             */
            var slData = iData.$slide.data();
            slData.$images = slData.$images.add($i);


            /**
             * SETUP KICH THUOC CHO IMAGE THEO TY LE
             */
            iData.isImgOfCode && that.itemSize($i);


            /**
             * LOAI BO HANH DONG EVENT DRAG TREN IMAGE BACK
             */
            iData.isImgback && $i.on(va.ev.drag, function(e) { return false });
        },



        /**
         * CHUYEN DOI TAG 'A' SANG TAG 'IMG'
         * Sao chep toan do data, alt, id cua link 'a'
         * Video: wrap by div, (div > img)
         */
        linkToImage : function($a) {
            varibleModule(this);

            /**
             * TOA IMAGE MOI VOI CAC THUOC TINH MAC DINH
             */
            var attrs     = {},
                imgGif    = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                imgAlt    = o.isCap ? 'image link' : $a.text(),
                $imageNew = $('<img>', { 'src': imgGif, 'alt': imgAlt });

            // Copy tat ca cac thuoc tinh co tren Link vao` Node Image moi
            $.each($a[0].attributes, function(key, attr) {
                var nameCur  = attr.name,
                    valueCur = attr.value;

                $imageNew.attr(nameCur, valueCur);
                attrs[nameCur] = valueCur;
            });

            // Them Data Lazy vao Node Image moi
            // Dong thoi loai bo thuoc tinh 'href' tren Image moi
            $imageNew
                .attr( 'data-'+ o.nameDataLazy, (attrs.href ? attrs.href : '') )
                .removeAttr('href');



            /**
             * SETUP OTHERS
             */
            // IE fixed: loai bo thuoc tinh width-height tren Dom
            is.ie && $imageNew.removeAttr('width height');

            // Thay the doi tuong trong DOM
            $a.after($imageNew).remove();
            return $imageNew;
        },

        /**
         * WRAP IMAGEBACK ITEM BOI TAG 'DIV'
         */
        wrap : function($imgItem) {

            // Tao Node 'div' moi va` wrap Image Item
            // Chuyen thuoc tinh 'Class' cua Item sang Wrap
            var classImgback = this.va.ns + o.nameImageBack;
                $imgWrap     = $('<div/>', { 'class': $imgItem.attr('class') });

            // Wrap Image Item bang Node Image Wrap va` refresh lai. bien' Image Wrap
            $imgItem.wrap($imgWrap).removeAttr('class');
            $imgWrap = $imgItem.closest('.'+ classImgback);


            /**
             * COPY CAC THUOC TINH DATA VIDEO SANG NODE IMAGE WRAP
             */
            var attrName = ['data-video', 'data-video-link'];
            for( var i = 0, len = attrName.length; i < len; i++ ) {

                // Lay thuoc tinh hien tai
                var attrCur = $imgItem.attr( attrName[i] );

                // Neu thuoc tinh data ton tai tren Dom thi copy sang Image Wrap
                // Dong thoi loai bo? thuoc tinh tren Image Item
                if( !!attrCur ) {
                    $imgWrap.attr(attrName[i], attrCur);
                    $imgItem.removeAttr(attrName[i]);
                }
            }
        },




        /**
         * CAP NHAT KICH THUOC HOAC VI TRI CUA IMAGES
         */
        updateAllImagesBy : function(typeUpdate) {
            var that = this;
            varibleModule(that);

            /**
             * PHAN BIET TEN CUA IMAGE TRONG DATA SLIDE VA TEN FUNCTION CAN THUOC CAT NHAT
             */
            // Cap nhat kich thuoc cua tat ca Image trong Code
            var nameImage, nameFunction;
            if( typeUpdate == 'size' ) {
                nameImage    = '$images';
                nameFunction = 'itemSize';
            }
            // Cap nhat vi tri cua Image back
            else {
                nameImage    = '$imgbackItem';
                nameFunction = 'backPosition';
            }


            /**
             * SETUP KICH THUOC HOAC VI TRI CUA IMAGES
             */
            va.$s.each(function() {

                // Lay Images can setup trong Slide hien tai
                var $images = $(this).data(nameImage);

                // Cap nhat kich thuoc hoac vi tri cua Image
                !!$images && $images.each(function() {
                    that[nameFunction]($(this));
                });
            });
        },

        /**
         * UPDATE KICH THUOC CUA IMAGE ITEM
         *  + Setup kich thuoc truoc tien de lay Chieu cao cua tung Slide
         *  + Luon luon de kich thuoc tren Image Item --> ho tro lay kich thuoc chinh xac tren IE
         */
        itemSize : function($imgItem) {
            varibleModule(this);
            var iData = $imgItem.data(),

                // Reset style css cho Image Item
                style = { 'width': '', 'height': '', 'left': '', 'top':'' },
                // Xac dinh Loai vi tri cua Image back
                typePosition = va.imgPos[ iData.slideID ];


            /**
             * FUNCTION CLASS SETUP KICH THUOC CUA IMAGE THEO HUO"NG KHAC NHAU
             */
            var fnSizeDependRate = function() {
                    style.width  = M.r( iData.width * va.rate );
                    style.height = M.r( iData.height * va.rate );
                    $imgItem.css(style);
                },

                fnSizeDependWidth = function() {
                    style.width  = va.wSlide;
                    style.height = M.r( style.width / iData.rate);
                    $imgItem.css(style);
                };


            /**
             * SETUP KICH THUOC CHO IMAGE CUA CODE
             */
            // Truong hop Image la Image back
            if( iData.isImgback ) {

                // Kich thuoc theo ti le Responsive, bao gom type ['center', 'tile']
                if( typePosition == 'center' || typePosition == 'tile' ) {
                    fnSizeDependRate();
                }

                // Kich thuoc theo Chieu rong cua Viewport, bao gom type ['fill', 'fit', 'stretch']
                else {
                    if( !is.heightFixed ) fnSizeDependWidth();
                }
            }

            // Truong hop Image binh thuong
            else fnSizeDependRate();
        },

        /**
         * SETUP KICH THUOC VA VI TRI CUA IMAGE BACK
         */
        backPosition : function($imgItem) {
            varibleModule(this);

            var iData        = $imgItem.data(),
                typePosition = va.imgPos[iData.slideID],
                wImage       = iData.width,
                hImage       = iData.height,
                rateImage    = iData.rate,
                rateCanvas   = va.wCode / va.hCode,
                wImageCur,
                hImageCur;


            /**
             * FUNCTION CLASS
             */
            // Kich thuoc tuy thuoc vao Chieu rong Viewport
            var fnSizeDependWidth = function() {
                    wImageCur = va.wSlide;
                    hImageCur = M.r( wImageCur / rateImage);
                },

                // Kich thuoc tuy thuoc vao Chieu cao Code
                fnSizeDependHeight = function() {
                    hImageCur = va.hCode;
                    wImageCur = M.r(hImageCur * rateImage);
                }



            /**
             * TRUONG HOP VI TRI TYPE 'FILL'
             * Khong phu thuoc vao ti le Responsive
             */
            if( typePosition == 'fill' ) {

                // Truong hop co chieu Co dinh
                if( is.heightFixed ) {
                    (rateImage > rateCanvas) ? fnSizeDependHeight() : fnSizeDependWidth();

                    // Setup kich thuoc cho Image Item
                    $imgItem.css({ 'width' : wImageCur, 'height' : hImageCur });

                    // Setup vi tri Center Left cho Image back
                    that.backCenterLeft($imgItem);
                    // Setup vi tri Center Top cho Image back
                    that.backCenterTop($imgItem);
                }
            }


            /**
             * TRUONG HOP VI TRI TYPE 'FIT'
             * Khong phu thuoc vao ti le Responsive
             */
            else if( typePosition == 'fit' ) {

                // Truong hop co chieu Co dinh
                if( is.heightFixed ) {
                    (rateImage > rateCanvas) ? fnSizeDependWidth() : fnSizeDependHeight();

                    // Setup kich thuoc cho Image Item
                    $imgItem.css({ 'width' : wImageCur, 'height' : hImageCur });


                    // Setup vi tri Center Left cho Image back
                    that.backCenterLeft($imgItem);
                    // Setup vi tri Center Top cho Image back
                    that.backCenterTop($imgItem);
                }
            }


            /**
             * TRUONG HOP VI TRI TYPE 'STRETCH'
             * Khong phu thuoc vao ti le Responsive
             */
            else if( typePosition == 'stretch' ) {

                // Truong hop co chieu Co dinh
                if( is.heightFixed ) {
                    wImageCur = va.wSlide;
                    hImageCur = va.hCode;

                    // Setup kich thuoc cho Image Item
                    $imgItem.css({ 'width' : wImageCur, 'height' : hImageCur });
                }
            }


            /**
             * TRUONG HOP VI TRI TYPE 'TILE'
             */
            else if( typePosition == 'tile' ) {
                var aPosition    = [],
                    wImageAll    = 0,
                    hImageAll    = 0,
                    leftCur      = 0,
                    topCur       = 0,
                    isWidthFill  = false,
                    isHeightFill = false;

                // Lay kich thuoc hien tai cua Image Item
                wImageCur = $imgItem.outerWidth(true);
                hImageCur = $imgItem.outerHeight(true);


                /**
                 * VONG LAP TINH TOAN VI TRI CUA TUNG IMAGE CLONE
                 * Vong lap thu 1 la lap theo chieu cao
                 * @param array aPosition
                 */
                do {
                    /**
                     * CAP NHAT CAC GIA TRI TRUOC TIEN
                     */
                    leftCur     = 0;
                    topCur      = hImageAll;
                    wImageAll   = 0
                    isWidthFill = false;


                    /**
                     * VONG LAP THU 2 LA LAP CHIEU RONG
                     */
                    do {
                        // Truoc tien luu tru vi tri Left - Top
                        aPosition.push([leftCur, topCur]);

                        // Cap nhat cac gia tri
                        leftCur   += wImageCur;
                        wImageAll += wImageCur;

                        // Kiem tra co tiep tuc vong lap thu 2
                        if( wImageAll >= va.wSlide ) isWidthFill = true;
                        // console.log(isWidthFill, wImageAll, va.wSlide);

                    } while( !isWidthFill );


                    /**
                     * CAP NHAT CAC GIA TRI SAU KHI TINH TOAN VI TRI IMAGE CLONE THEO CHIEU RONG
                     */
                    hImageAll += hImageCur;
                    
                    /**
                     * KIEM TRA TIEP TUC VONG LAP THU 1
                     */
                    // Chieu cao Co dinh thi phai lap' day` chieu cao cua Code
                    if( is.heightFixed ) {
                        if( hImageAll >= va.hCode ) isHeightFill = true;
                    }
                    // Chieu cao Tu do thi vong lap chi chay 1 lan
                    else isHeightFill = true;

                } while( !isHeightFill );



                /**
                 * SETUP CHEN` IMAGE CLONE VAO IMAGE BACK VOI VI TRI CO SAN
                 */
                // Loai bo Image clone truoc do
                var $imgItemClone = iData.$itemClone,
                    $imgWrap      = $imgItem.parent('.'+ va.ns + 'imgback');
                if( !!$imgItemClone ) $imgItemClone.remove();

                // Reset data Item Clone
                iData.$itemClone = $();

                // Vong lap de chen` Image clone
                for( var i = 1, posLength = aPosition.length; i < posLength; i++ ) {
                    var $imgCloneCur = $imgItem.clone();

                    // Chen ben duoi Image Item
                    $imgCloneCur
                        .addClass(va.ns + 'imgclone')
                        .css({ 'left': aPosition[i][0], 'top': aPosition[i][1] })
                        .appendTo($imgWrap);

                    // Luu tru Image clone vao Data
                    iData.$itemClone = iData.$itemClone.add($imgCloneCur);
                }
            }


            /**
             * TRUONG HOP VI TRI TYPE 'CENTER'
             */
            else {

                // Setup vi tri Center Left cho Image back
                that.backCenterLeft($imgItem);
                // Setup vi tri Center Top cho Image back
                is.heightFixed && that.backCenterTop($imgItem);
            }
        },

        /**
         * SETUP IMAGE BACK VI TRI CENTER LEFT
         */
        backCenterLeft : function($imgItem) {
            varibleModule(this);

            var leftOnDom = M.pInt( $imgItem.css('left') ),
                leftCur   = ~~( (va.wSlide - $imgItem.outerWidth(true)) / 2 );

            // Setup css 'left'
            if( leftOnDom !== leftCur ) $imgItem.css('left', leftCur);
        },

        /**
         * SETUP IMAGE BACK O VI TRI CENTER TOP
         */
        backCenterTop : function($imgItem) {
            varibleModule(this);

            var top = M.r( (va.hCode - $imgItem.outerHeight(true)) / 2 );
            if( top == 0 ) top = '';
            $imgItem.css('top', top);
        }
    };
})(jQuery);







/**
 * MODULE VIDEO
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M, SLIDESHOW,
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            cs   = self.cs;
            va   = self.va;
            is   = self.is;
            ti   = self.ti;
            M    = self.M;
            SLIDESHOW = $.extend({}, rt01MODULE.SLIDESHOW, self);
        };

    /**
     * MODULE VIDEO
     */
    rt01MODULE.VIDEO = {

        /**
         * BAT DAU CONVERT TAG TRONG PHAN RENDER
         */
        convertTag : function($slCur) {
            varibleModule(this);

            /**
             * TIM KIEM VIDEO LINK TRONG SLIDE HIEN TAI
             */
            var selectorVideo = '[data-video-link]',
                $videos       = $slCur.find(selectorVideo);

            // Loai bo nhung Videos trong Nested
            var $nested = $slCur.find(va.ns),
                $videoInNested = $nested.find(selectorVideo);
            $videos = $videos.not($videoInNested);

            // Khong setup nua khi khong co Videos
            if( !$videos.length ) return false;



            /**
             * SETUP TUNG VIDEO LINK
             */
            // Tao doi tuong div moi
            // Copy toan bo thuoc tinh co trong link sang Node div
            // Tao moi Image preview cua Video neu co duong thuoc tinh href
            var fnLinkToDiv = function($link) {

                /**
                 * TAO DOI TUONG IMAGE WRAP VOI THUOC TINH COPY TU DOI TUONG LINK
                 */
                var $videoWrap = $('<div/>', { 'class': va.ns +'video' });

                // Copy tat ca cac thuoc tinh co tren Link vao` Node Div moi
                var attrs = {};
                $.each($link[0].attributes, function(key, attr) {

                    var nameCur  = attr.name,
                        valueCur = attr.value;

                    $videoWrap.attr(nameCur, valueCur);
                    attrs[nameCur] = valueCur;
                });



                /**
                 * TAO IMAGE PREVIEW CHO VIDEO NEU CO THUOC TINH 'HREF'
                 */
                if( attrs.href && !/^\s*$/g.test(attrs.href) ) {
                    var $imagePreview = $('<img/>', { 'src': attrs.href, 'alt': $link.text() });

                    // Chen them class Video preview vao Image preview
                    $imagePreview.addClass(va.ns +'video-preview');
                    // Chen Image preview vao Video wrap
                    $videoWrap.append($imagePreview).removeAttr('href');

                    // Chuyen class Image Lazy tu Video Wrap sang Image Preview
                    var classLazy = va.ns + o.nameImageLazy;
                    if( $videoWrap.hasClass(classLazy) ) {
                        $videoWrap.removeClass(classLazy);
                        $imagePreview.addClass(classLazy);
                    }
                }


                /**
                 * THAY THE NODE LINK BANG VIDEO WRAP
                 */
                $link.after($videoWrap).remove();
                return $videoWrap;
            };

            // Setup tu`ng Video
            // Neu la tag link thi chuyen doi sang tag Div
            // Khong chuyen doi tag tren Image back
            $videos.each(function() {
                var $videoCur = $(this),
                    videoTag  = $videoCur[0].tagName.toLowerCase(),
                    isImgback = $videoCur.hasClass(va.ns + o.nameImageBack);

                // Kiem tra chuyen doi Link sang Node Div moi
                if( videoTag == 'a' && !isImgback ) {
                    fnLinkToDiv($videoCur);
                }
            });
        },

        /**
         * KHOI TAO VIDEO KHI BAT DAU LOAD SLIDE HIEN TAI
         */
        init : function($slCur) {
            varibleModule(this);
            var slData     = $slCur.data(),
                $videoLink = $slCur.find('[data-video-link]'),
                $videoAll  = $(),
                isVideo    = false;


            // Setup tung link Video
            $videoLink.each(function() {
                var $videoCur = $(this),
                    strLink   = $videoCur.data('videoLink');

                // Truoc tien lay ID va Type cua Video hien tai
                var videoData = that.getID(strLink);

                // Chi setup nhung link Video duoc ho tro [Youtube, Vimeo]
                if( videoData.type ) {

                    /**
                     * SETUP NHUNG OPTIONS TREN TUNG` VIDEO
                     */
                    var optsDefault = {
                        $self     : $videoCur,
                        $slide    : $slCur,
                        isImgback : $videoCur.hasClass(va.ns + o.nameImageBack),
                        isShow    : false
                    };

                    // Setup Image Preivew cua Video
                    var $imgPreview  = $videoCur.find('img'),
                        isImgPreview = false;

                    if( $imgPreview.length ) {
                        videoData.$imgPreview  = $imgPreview;
                        videoData.isImgPreview = isImgPreview = true;
                    }

                    // Setup vi tri cua Video trong Slide hien tai
                    var $imgback = slData.$imgback,
                        videoPosition;

                    if ( !!$imgback && $imgback.is($videoCur) ) videoPosition = 'imgback';
                    else if( !!$videoCur.data('layer') )        videoPosition = 'layer';
                    else                                        videoPosition = 'free';
                    // Luu tru tren Video Data
                    videoData.position = videoPosition;

                    // Ket hop Options Default va Video Data
                    var optsOnVideo = M.stringToObject( $videoCur.data('video') );
                    videoData = $.extend({}, optsDefault, o.video, videoData, optsOnVideo);

                    // Them class type vao Video hien tai
                    // Loai bo cac thuoc ti'nh khong can thiet tren Dom cua Video hien tai
                    $videoCur
                        .addClass( va.ns +'video '+ va.ns + videoData.type )
                        .addClass( isImgPreview ? '' : va.ns + 'no-preview' )
                        .removeAttr('data-video-link')
                        .removeAttr('data-video')
                        .data('video', videoData);



                    /**
                     * SETUP CAC THANH PHAN CAN THIET TRONG VIDEO
                     */
                    // Setup doi tuo.ng Iframe cua Video
                    that.setupIframe(videoData);

                    // Chen cac thanh phan button can` thiet vao Video
                    isImgPreview && that.addElements(videoData);

                    // Luu tru Video vao bien tong quat -> su dung de update Video
                    isVideo = true;
                    $videoAll = $videoAll.add($videoCur);
                }
            });


            // Luu tru cac bien Video vao` data Slide hien tai
            if( isVideo ) {
                slData.isVideo = true;
                slData.$video  = $videoAll;
            }
        },




        /**
         * GET ID CUA VIDEO HIEN TAI
         */
        getID : function(strLink) {
            var videoType = false, videoID;


            /**
             * KIEM TRA LINK VIDEO CO DUOC HO TRO VA PHAN LOAI LINK VIDEO
             */
            // Kiem tra link Youtube
            // RegExp Youtube : Dua tren "http://stackoverflow.com/a/9102270"
            var
            fnCheckYoutube = function() {
                var reYoutube = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                    match     = strLink.match(reYoutube);

                if( match && match[2].length == 11 ) {
                    videoID   = match[2];
                    videoType = 'youtube';
                }
            },

            // Kiem tra link Vimeo
            // RegExp Vimeo : Dua tren "http://stackoverflow.com/a/13286930"
            // Ho tro them 'ondemand'
            fnCheckVimeo = function() {
                var reVimeo = /^.*(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|ondemand\/(?:\w+\/)?|)(\d+)(?:$|\/|\?)/,
                    match = strLink.match(reVimeo);

                if( match && match[3] ) {
                    videoID   = match[3];
                    videoType = 'vimeo';
                }
            };


            // Cac buoc thu tu kiem tra link Video
            fnCheckYoutube();
            if( !videoType ) fnCheckVimeo();




            /**
             * TRA LAI KET QUA KIEM TRA
             */
            return {
                'type' : videoType,
                'id'   : videoID
            };
        },

        /**
         * SETUP IFRAME CUA VIDEO HIEN TAI
         */
        setupIframe : function(videoData) {
            var that = this;
            varibleModule(that);


            /**
             * SETUP THONG SO TREN DUONG LINK CUA VIDEO
             */
            var isAutoplay = videoData.isImgPreview ? 1 : 0,
                para = '?';

            if( videoData.type == 'youtube' ) {

                // Iframe video paramater
                para += 'rel=0';                        // Not show info in player
                para += '&autohide=3';                  // Auto hide button play, volume, force auto hide when height slide large than height video
                para += '&autoplay='+ isAutoplay;       // Auto play when show
                para += '&showinfo=0';                  // Turn on info video
                para += '&wmode=opaque';                // Fixed ie7/8, iframe overlay & z-index --> lam cho button close khong xuat hien; Trong firefox: iframe flash khong xuat hien

                videoData.src = 'https://www.youtube.com/embed/' + videoData.id + para;
            }
            else if( videoData.type == 'vimeo' ) {
                para += '&autoplay='+ isAutoplay;
                videoData.src = 'https://player.vimeo.com/video/' + videoData.id + para;
            }



            /**
             * SETUP NHUNG THUOC TINH TREN IFRAME
             */
            var iframeAttrs = {
                'class'       : va.ns + 'video-item',
                'frameborder' : 0,
                'allowfullscreen' : '',
                'width'       : '100%',
                'height'      : videoData.isImgPreview ? '100%' : videoData.height +'px'
            };

            videoData.$iframe = $('<iframe></iframe>', iframeAttrs);



            /**
             * CHEN IFRAME TRUC TIEP VAO VIDEO WRAP NEU KHONG CO IMAGE PREVIEW
             */
            if( !videoData.isImgPreview ) videoData.$self.append(videoData.$iframe);
        },

        /**
         * CHEN CAC THANH BUTTON OPEN - CLOSE CHO VIDEO
         */
        addElements : function(videoData) {
            varibleModule(this);
            var $self = videoData.$self;


            /**
             * TAO CAC DOI TUONG BUTTONS
             * Chen them class 'swipe-prevent' --> de loai bo event Swipe start
             */
            var ns          = va.ns,
                classSelect = ns +'swipe-prevent',
                classPlay   = ns +'btn-play',
                classClose  = ns +'btn-close';

            videoData.$btnPlay  = $('<div/>', { 'class' : classPlay +' '+ classSelect }),
            videoData.$btnClose = $('<div/>', { 'class' : classClose +' '+ classSelect });



            /**
             * TAO DOI TUONG OVERLAY VA LOADER
             */
            that.RENDER.loaderAdd($self, $self, '$loader');



            /**
             * CHEN CAC DOI TUONG VAO VIDEO VA SETUP EVENTS
             */
            $self.append(videoData.$btnPlay, videoData.$btnClose);

            // Setup Events cho cac Buttons
            that.events(videoData);
        },




        /**
         * EVENT CHO CAC THANH PHAN TRONG VIDEO
         */
        events : function(videoData) {
            varibleModule(this);
            var that = this,
                nameTapEvent = va.ev.click;


            /**
             * SETUP EVENT TAP TREN BUTTON OPEN
             */
            videoData.$btnPlay.on(nameTapEvent, function(e) {
                varibleModule(that);
                that.fnOpen(videoData);

                // Use for slideshow
                if( is.slideshow ) {
                    va.nVideoOpen++;
                    SLIDESHOW.go('videoOpen');
                }
            });



            /**
             * SETUP EVENT TAP TREN BUTTON CLOSE
             */
            videoData.$btnClose.on(nameTapEvent, function(e) {
                varibleModule(that);
                that.fnClose(videoData);

                // Setup for slideshow
                if( is.slideshow ) {
                    va.nVideoOpen--;

                    // Setup bien nVideoOpen luon >= 0
                    if(va.nVideoOpen < 0) va.nVideoOpen = 0;
                    SLIDESHOW.go('videoClosed');
                }
            });



            /**
             * FIXED IE : SETUP EVENT HOVER CHO IFRAME DE BUTTON CLOSE HIEN THI
             */
            if( is.ie ) {
                var classHover = va.ns +'hover';
                videoData.$iframe.hover(

                    function(e) { videoData.$btnClose.addClass(classHover) },
                    function(e) { videoData.$btnClose.removeClass(classHover) }
                );
            }      
        },

        /**
         * FUCTION CLASS CORE DE OPEN HOAC CLOSE VIDEO
         */
        fnOpen : function(videoData) {
            var that = this, ns = that.va.ns, $self = videoData.$self;

            if( !videoData.isShow ) {
                // Chen class 'init' vao khi load Iframe Video
                $self.addClass(ns +'video-init');
                videoData.isShow = true;

                // Them class 'Video back show' vao` Slide neu Video hien tai la Image back
                if( videoData.isImgback ) {
                    videoData.$slide.addClass(ns +'videoback-show');
                }


                /**
                 * CHEN IFRAME VIDEO VA SETUP EVENT
                 */
                videoData.$iframe
                    .attr('src', videoData.src)
                    .prependTo($self)
                    .on('load', function() {

                        // Thay doi class Actived tren Video
                        $self
                            .addClass(ns +'video-ready').removeClass(ns +'video-init')
                            .off('load');
                    });
            }
        },

        fnClose : function(videoData) {
            var that = this, ns = that.va.ns;

            if( videoData.isShow ) {

                videoData.$self.removeClass( '{ns}video-ready {ns}video-init'.replace(/\{ns\}/g, ns) );
                videoData.isShow = false;

                // Loai bo class 'Video back show' o Slide neu Video hien tai la Image back
                if( videoData.isImgback ) {
                    videoData.$slide.removeClass(ns +'videoback-show');
                }

                // Loai bo Iframe Video
                if( videoData.$iframe.length ) {
                    videoData.$iframe
                        .attr('src', 'about:blank')
                        .remove();
                }
            }
        },

        /**
         * SETUP KHI SLIDE DEACTIVED
         */
        slideDeactived : function(id) {
            var that = this;
            varibleModule(that);

            // Do'ng tat ca cac Video co tren Slide hien tai
            var $video = va.$s.eq(id).data('$video');
            !!$video && $video.each(function() {
                that.fnClose( $(this).data('video') );
            });

            // Reset lai bien nVideoOpen
            if( is.slideshow ) va.nVideoOpen = 0;
        }
    };
})(jQuery);







/**
 * MODULE IFRAME
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, va, is, M,
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            va   = self.va;
            is   = self.is;
            M    = self.M;
        };

    /**
     * MODULE IFRAME LAZY
     */
    rt01MODULE.IFRAME = {

        /**
         * KIEM TRA TON TAI IFRAME LAZY
         */
        checkExist : function($slCur) {
            varibleModule(this);

            /**
             * TIM KIEM IFRAME LINK TRONG SLIDE HIEN TAI
             */
            var selectorIframe = 'a.{ns}iframe'.replace(/\{ns\}/g, va.ns),
                $iframes       = $slCur.find(selectorIframe);

            // Loai bo nhung Videos trong Nested
            var $nested = $slCur.find(va.ns),
                $iframeInNested = $nested.find(selectorIframe);
            $iframes = $iframes.not($iframeInNested);

            // Luu tru Iframe vao data Slide hien tai
            if( $iframes.length ) $slCur.data({ 'isIframe': true, '$iframe': $iframes });
        },


        /**
         * CONVERT LINK TAG SANG IFRAME TAG
         */
        convertTag : function($slCur) {
            varibleModule(this);
            var slData = $slCur.data();

            // Dieu kien thuc hien
            if( !slData.isIframe ) return;



            /**
             * FUNCTION CHUYEN DOI LINK SANG IFRAME
             *  + Copy toan bo thuoc tinh co trong link sang Node div
             */
            var fnLinkToIframe = function($link) {

                /**
                 * TAO DOI TUONG IFRAME VOI THUOC TINH COPY TU DOI TUONG LINK
                 */
                var $iframe = $('<iframe/>');

                // Copy tat ca cac thuoc tinh co tren Link vao` Node Div moi
                var attrs = {};
                $.each($link[0].attributes, function(key, attr) {

                    var nameCur  = attr.name,
                        valueCur = attr.value;

                    $iframe.attr(nameCur, valueCur);
                    attrs[nameCur] = valueCur;
                });


                // Thay doi thuoc tinh 'href' sang 'src'
                if( attrs.href && !/^\s*$/g.test(attrs.href) ) {
                    $iframe.attr('src', attrs.href).removeAttr('href');
                }

                // Thay the node Link bang Iframe
                $link.after($iframe).remove();
            };



            /**
             * SETUP IFRAME TREN SLIDE HIEN TAI
             */
            slData.$iframe.each(function() {
                fnLinkToIframe( $(this) );
            });

            // Loai bo Iframe khoi slide sau khi setup xong
            slData.isIframe = false;
        }
    };
})(jQuery);







/**
 * MODULE VIEW ADVANCED
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M, i, j,
        varibleModule = function(self) {
            that  = self;
            o     = self.o;
            cs    = self.cs;
            va    = self.va;
            is    = self.is;
            ti    = self.ti;
            M     = self.M;
        };

    /**
     * MODULE VIEW ADVANCED
     */
    rt01MODULE.VIEW = {

        /**
         * SETUP THUOC TINH KHI RESIZE TRONG FN SIZE
         */
        // sizeMask : function() {
        //     varibleModule(this);

        //     // Setup thuoc tinh giong nhu VIEW.basic
        //     that.sizeBasic();

        //     /**
        //      * RESET LAI DOI TUONG IMAGE BACK NEU CO
        //      */
        //     var $imgback, $imgClone;
        //     for( i = 0; i < cs.num; i++ ) {

        //         $imgback = that.imgbackOfSlide(i);
        //         if( $imgback.length ) {
        //             $imgClone = $imgback.data('$imgClone');

        //             // Neu wrap Clone ton thi loai bo va tao cai moi
        //             !!$imgClone && $imgClone.remove();
        //             that.createImgClone(i);
        //         }
        //     }
        // },


        sizeMask : function() {
            varibleModule(this);

            // Setup thuoc tinh giong nhu VIEW.basic
            that.sizeBasic();


            /**
             * LUU TRU IMAGE BACK CUA SLIDE NEXT - PREV TREN SLIDE HIEN TAI
             */
            for( i = 0; i < cs.num; i++ ) {
                var $slideCur = va.$s.eq(i);

                // Setup idNext va idPrev
                var idMap      = va.idMap,
                    indexIDCur = idMap.indexOf(i), 
                    idPrev     = idMap[indexIDCur - 1],
                    idNext     = idMap[indexIDCur + 1];

                if( i == idMap[0] )         idPrev = idMap[cs.num - 1];
                if( i == idMap[cs.num - 1]) idNext = idMap[0];

                // Luu tru tren Slide hien tai
                $slideCur
                    .data('idPrev', idPrev)
                    .data('idNext', idNext);
            }
        },


        /**
         * SAO CHEP IMAGE BACK CUA SLIDE PREV-NEXT DEN SLIDE HIEN TAI
         */
        cloneImgbackInMask : function() {
            var that = this;
            varibleModule(that);

            var $slideCur = va.$s.eq(cs.idCur),
                slideData = $slideCur.data(),
                isImgbackPrevNextAdd = slideData['is']['imgbackPrevNextAdded'];


            if( !slideData.is.imgbackPrevNextAdded ) {
                var $imgCur  = $slideCur.data('$imgback'),
                    $imgPrev = va.$s.eq(slideData.idPrev).data('$imgback').parent(),
                    $imgNext = va.$s.eq(slideData.idNext).data('$imgback').parent();

                if( !!$imgPrev ) $imgCur.after( $imgPrev.clone().removeClass(va.ns +'imgback').addClass(va.ns +'imgback-prev') );
                if( !!$imgNext ) $imgCur.after( $imgNext.clone().removeClass(va.ns +'imgback').addClass(va.ns +'imgback-next') );

                // Luu tru vao data : da~ chen` Image back cua Slide Prev-Next vao Slide hien tai
                $slideCur.data( 'isImgbackPrevNextAdded', (!!$imgPrev && !!$imgNext ? true : false) );
            }
        },


        sizeCoverflow : function() {
            varibleModule(this);

            // Transform cua slide
            // Muc dich tim duoc transform cua tung slide --> roi gian vao cac slide
            var center  = va.center,
                cover   = o.coverflow,
                space   = cover.space,                  // Khoang cach giua cac slide
                rotate  = cover.rotate,                 // Goc xoay cua cac slide 2 ben left/right
                xRight  = va.wSlideFull - space,        // Vi tri right ke tiep slide o giua
                xLeft   = - xRight;                     // Vi tri left ke tiep slide o giua

            // Update gia tri sTranslate cho view Coverflow
            va.can.sTranslate = space;


            // Cac gia tri ban dau cua slide
            va.pBegin = [xLeft, 0, xRight];
            va.tfMap  = [that.tf1(xLeft, rotate), that.tf1(0, 0), that.tf1(xRight, - rotate)];
            va.zMap   = [ 0, 1, 0];

            
            // Vi tri cua cac slide left --> dao nguoc --> vi tri slide right --> vi tri hoan chinh cua cac slides
            // Transform, z-index cua cac slide tuong tu nhu vi tri
            var tf, p;
            for (i = 1; i < center.nLeft; i++)  {
                p  = xLeft - (i * space);
                tf = that.tf1(p, rotate);
                va.pBegin.unshift(p);       // Unshift() se return UNDEFINED trong IE8- --> kiem tra lai
                va.tfMap.unshift(tf);
                va.zMap.unshift(-i);
            }

            for( i = 1; i < center.nRight; i++ ) {
                p  = xRight + (i * space);
                tf = that.tf1(p, - rotate);
                va.pBegin.push(p);
                va.tfMap.push(tf);
                va.zMap.push(-i);
            }



            // Setup transform len cac slide voi cac gia tri vua tim duoc
            for( i = 0; i < cs.num; i++ ) {
                tf = {};
                tf = va.tfMap[i];
                tf['z-index'] = va.zMap[i];

                va.$s.eq(va.idMap[i]).css(tf);
            }


            // Canvas setup thuoc tinh perspective/origin transfrom 3d
            var perName = va.prefix + 'perspective',
                tf = {};

            // Update origin
            va.origin = M.r(va.wSlide / 2);

            tf[perName] = cover.perspective + 'px';
            tf[perName + '-origin'] = va.origin + 'px';
            va.$canvas.css(tf);
        },


        sizeScale : function() {

            // Tim kiem kich thuoc cua slide sau khi add transform --> ho tro translate/move/buffer slide
            // Co the tiet kiem bang cach khac --> * ti le
            var tf = {},
                intensity = o.scale.intensity,
                ints = intensity !== 0 ? intensity/100 : 0.1;         // Cuong do transform scale

            tf[cssTf] = 'scale(' + ints +')';

            // Tao slide ghost de lay kich thuoc --> lay xong roi xoa
            var $slGhost = $s.eq(cs.idCur).clone().addClass(va.ns + 'ghost').css(tf).appendTo($canvas),
                rect     = $slGhost[0].getBoundingClientRect();

            // Xoa slide ghost
            $slGhost.remove();



            // Tap hop cac gia tri cua slide --> tuong tung view coverflow
            var sTranslate = ~~(rect.width),
                xRight     = ~~( va.wSlide - (va.wSlide - sTranslate)/2 ),
                xLeft      = - xRight;

            // Update gia tri cua sTranslate
            va.can.sTranslate = sTranslate;
            va.gapBegin = xRight;       // Update khoang ban dau slide giua voi slide ke tiep --> ho tro buffer



            // Vi tri va tf luc dau
            va.pBegin = [xLeft, 0, xRight];
            va.tfMap  = [ that.tf2(xLeft, ints), that.tf2(0, 1), that.tf2(xRight, ints)];

            // Vi tri va tf con lai cua cac slide
            var tf, x;
            for (i = 1; i < va.center.nLeft; i++)  {
                x = xLeft - (i * sTranslate);
                tf = that.tf2(x, ints);
                va.pBegin.unshift(x);       // Su dung unshift() --> xem co tuong thich voi IE8-
                va.tfMap.unshift(tf);
            }

            for (i = 1; i < va.center.nRight; i++) {
                x  = xRight + (i * sTranslate);
                tf = that.tf2(x, ints);
                va.pBegin.push(x);
                va.tfMap.push(tf);
            }


            // Setup transform moi vua tim duoc len cac slide
            for (i = 0; i < num; i++) {

                var tf = va.tfMap[i];
                $s.eq(va.idMap[i]).css(tf);
            }
        },



        /**
         * SETUP CAC SLIDE KHI CHUYEN TAM THOI
         */
        bufferMask0 : function(sign) {
            varibleModule(this);

            // Xac dinh id cua slide chinh giua current va last
            var idMap        = va.idMap,
                classImage   = '.'+ va.ns +'imgback',
                isSwipeBegin = is.swipeBegin,
                idLast       = va.center.nLeft,
                idCur        = idLast + sign;

            // Cac id cua slide setup giong nhau
            var fnSetupID = function(id, xPlus, isCur) {

                var $imgback = va.$s.eq(idMap[id]).find(classImage),
                    x        = - va.xOffset - xPlus,         // Vi tri tam thoi cua imgback
                    tf       = that.tf1(x);

                if( isSwipeBegin ) {
                    // Loai bo transition cua imgback truoc khi setup transform
                    M.tsRemove($imgback);
                    // Tao va append imgClone vao imgback
                    that.updateImgClone(id, sign, isCur);
                }

                // Setup transform tam thoi len imgback
                $imgback.css(tf);
            };

            fnSetupID(idCur, va.can.sTranslate * sign, 1);
            fnSetupID(idLast, 0, 0);


            // Dong thoi loai bo transition cua imgback slide prev
            isSwipeBegin && M.tsRemove( va.$s.eq(idMap[idLast - sign]).find(classImage) );
        },


        bufferMask : function(sign) {
            varibleModule(this);

            // Xac dinh id cua slide chinh giua current va last
            var idMap        = va.idMap,
                classImage   = '.'+ va.ns +'imgback',
                isSwipeBegin = is.swipeBegin,
                idLast       = va.center.nLeft,
                idCur        = idLast + sign;

            // Cac id cua slide setup giong nhau
            var fnSetupID = function(id, xPlus, isCur) {

                var $imgback = va.$s.eq(idMap[id]).find(classImage),
                    x        = - va.xOffset - xPlus,         // Vi tri tam thoi cua imgback
                    tf       = that.tf1(x);

                if( isSwipeBegin ) {
                    // Loai bo transition cua imgback truoc khi setup transform
                    M.tsRemove($imgback);
                    // Tao va append imgClone vao imgback
                    // that.updateImgClone(id, sign, isCur);
                }

                // Setup transform tam thoi len imgback
                $imgback.css(tf);
            };

            // fnSetupID(idCur, va.can.sTranslate * sign, 1);
            // fnSetupID(idLast, 0, 0);


            // Dong thoi loai bo transition cua imgback slide prev
            // isSwipeBegin && M.tsRemove( va.$s.eq(idMap[idLast - sign]).find(classImage) );
        },


        bufferCoverflow : function(sign) {
            varibleModule(this);

            // Bien shortcut va khoi tao ban dau
            var sTranslate = va.can.sTranslate,
                wSlideFull = va.wSlideFull,
                cover      = o.coverflow,
                offset     = va.xOffset,
                
                // Xac dinh id cua slide chinh giua current va last
                idLast = va.center.nLeft,
                idCur  = idLast + sign;

            // Ho tro tim vi tri va goc xoay hien tai cua slide
            var gap     = wSlideFull - cover.space - sTranslate,       // Khoang cach slide chinh giua di chuyen duoc
                xOffset = offset / wSlideFull * gap,
                ratio   = - offset / wSlideFull;                  // Ti le di chuyen tu 0 -> 1, lam tron so do goc


            // Setup tren tung slide
            var fnSetupID = function(id, nDegPlus) {

                var slide = va.$s.eq(va.idMap[id]),
                    x     = va.pBegin[id] + xOffset,                // Khoang cach tam thoi cua slide chinh giua
                    nDeg  = cover.rotate * (ratio + nDegPlus),      // Goc xoay tam thoi cua slide chinh giua
                    tf    = that.tf1(x, nDeg);

                // Loai bo transition luc bat dau drag --> thuc hien chi 1 lan --> toi uu tinh toan
                is.swipeBegin && M.tsRemove(slide);

                // Add transform moi tinh toan dc vao slide
                slide.css(tf);
            };

            fnSetupID(idCur, -sign);
            fnSetupID(idLast, 0);


            // Ho tro them: loai bo slide doi dien idLast --> drag toi drag lui thi 3 slide bi anh huong
            if( is.swipeBegin ) {
                var $slSymmetry = va.$s.eq(va.idMap[idLast - sign]);
                M.tsRemove($slSymmetry);
            }


            // Perspective origin tam thoi cua Canvas
            var originX = va.origin - M.r(sTranslate * (offset / wSlideFull)),
                tf = {};
            tf[va.prefix + 'perspective-origin'] = originX + 'px 50%';
            va.$canvas.css(tf);
        },


        bufferScale : function(sign) {

            // Shortcut varible
            var intensity = o.scale.intensity,
                idMap     = va.idMap;

            // Xac dinh id cua slide chinh giua current va last
            var idLast = va.center.nLeft,
                idCur  = idLast + sign,

                slCur  = $s.eq(idMap[idCur]),
                slLast = $s.eq(idMap[idLast]);


            // Khoang cach tam thoi cua slide chinh giua
            var gap     = va.gapBegin - va.can.sTranslate,
                xOffset = va.xOffset / va.wSlideFull * gap,        // Khoang cach slide chinh giua di chuyen duoc
                xCur    = va.pBegin[idCur] + xOffset,
                xLast   = va.pBegin[idLast] + xOffset;

            // Scale tam thoi khi di chuyen
            var ratio = - va.xOffset / va.wSlideFull * sign,         // Ti le di chuyen tu 0 -> 1, lam tron so do goc
                ints  = intensity/100,
                iCur  = ints + ((1-ints) * ratio),
                iLast = 1 - ((1-ints) * ratio);


            // Assign transform tam thoi vao slide chinh giua
            var tfCur  = that.tf2(xCur, iCur),
                tfLast = that.tf2(xLast, iLast);

            // Remove transition luc bat dau drag --> thuc hien chi 1 lan --> toi uu tinh toan
            // Remove ca 3 slide chinh giua cung luc --> drag toi drag lui thi 3 slide bi anh huong
            if( is.swipeBegin ) {
                M.tsRemove(slCur);
                M.tsRemove(slLast);

                var slLast2 = $s.eq(idMap[idLast - sign]);
                M.tsRemove(slLast2);
            }
            
            // Assign transform moi tinh toan dc vao slide chinh giua
            slCur.css(tfCur);
            slLast.css(tfLast);
        },



        /**
         * SETUP CAN BANG GIUA CAC SLIDES
         */
        balanceMask : function(a) {
            varibleModule(this);

            // Shortcut varible ba bien khoi tao luc dau
            var sign       = a.s,
                sTranslate = va.can.sTranslate * sign,
                classImage = '.'+ va.ns +'imgback',
                timer      = 'timer',

                // Id slide current va last
                idCur  = va.center.nLeft,
                idLast = idCur - sign,

                // Transition setup --> Loai bo transition khi drag/touch lien tiep
                ts = a.isContinuity ? {} : M.ts(va.cssTf, a.sp, va.ease);


            // Function setup tren imgback moi slide
            var
            fnSetupID = function(id, tf0, tf1, isCur) {

                var $imgback = va.$s.eq(va.idMap[id]).find(classImage),
                    tfBegin  = that.tf1(tf0),
                    tfEnd    = that.tf1(tf1);

                // Loai bo timer va transition
                clearTimeout($imgback.data(timer));
                M.tsRemove($imgback);

                // Tao va update vi tri cua imgback clone
                // that.updateImgClone(id, sign, isCur);


                /* Reset tranform luc dau :
                    + Neu la next slide bang navigation thi reset transform luc dau
                    + Neu co thi transform luc dau --> tranform tiep tuc */
                $imgback.css(va.cssTf) == 'none' && $imgback.css(tfBegin);

                // Add transition vao imgback
                setTimeout(function() { $imgback.css(ts).css(tfEnd) }, 2);

                // Loai bo transition tren imgback --> de kiem soat va code dep hon
                $imgback.data(timer, setTimeout(function() { fnHideID($imgback) }, a.sp));
            },

            fnHideID = function($el) {

                // Loai bo transition va transform
                M.tsRemove($el);
                M.tfRemove($el);

                // Hide wrap clone
                var $imgClone = $el.data('$imgClone');
                $imgClone && $imgClone.css('visibility', 'hidden');
            };

            fnSetupID(idCur, - sTranslate, 0, 1);
            fnSetupID(idLast, 0, sTranslate, 0);


            // Bo sung setup slide lastNext --> loai bo transition va transform
            var idLastNext  = idLast - sign,
                imgLastNext = va.$s.eq(va.idMap[idLastNext]).find(classImage);

            clearTimeout(imgLastNext.data(timer));
            fnHideID(imgLastNext);
        },



        balanceCoverflow : function(a) {
            var that = this;
            varibleModule(that);

            /* Noi dung:
                + Setup z-index slide hai ben giam di 1
                + Setup z-index slide chinh giua tang them 1
                + Di chuyen css origin Canvas --> de transform cho dung
                + Setup transition va transform cho slide giua
                + Xoa transition sau khi di chuyen xong */

            // Shortcut varible
            var sign       = a.s,
                sTranslate = va.can.sTranslate,
                zMap       = va.zMap;

            // Swap z-index cua slide de can bang
            var z = zMap[a.idN] - 1;
            M.shift(zMap, a.is);
            M.push(zMap, z, a.is);


            // Switch slide center
            var idCur  = va.center.nLeft,
                idLast = idCur - sign,

                // Vi tri = vi tri hien co tru khoang cach dinh san va khoang cach Canvas di chuyen
                cover = o.coverflow,
                gap   = (va.wSlideFull - cover.space - sTranslate) * sign,
                zCur  = va.zMap[idLast] + 1,                                // z-index danh rieng cho slide current
                ts    = a.isContinuity ? {} : M.ts(va.cssTf, a.sp, va.ease);      // Loai bo transition khi drag/touch lien tiep
            

            // Setup vi tri transform cua tung slide
            var fnSetupID = function(id, rotate, isCur) {

                var slide = va.$s.eq(va.idMap[id]),
                    x     = va.pBegin[id] - gap,
                    tf;

                // Cap nhat thay doi vi tri slide trong namespace
                va.pBegin[id] = x;

                // Setup transform
                tf = va.tfMap[id] = that.tf1(x, rotate);

                // Setup rieng cho slide current
                if( isCur ) tf['z-index'] = zMap[id] = zCur;

                // Loai bo timer va cap tranform tren slide
                slide.css(ts);
                setTimeout(function() { slide.css(tf) }, 1);

                // Loai bo transition tren slide --> de kiem soat va code dep hon
                clearTimeout( slide.data('timer') );
                slide.data('timer', setTimeout(function() { that.M.tsRemove(slide) }, a.sp));
            };

            fnSetupID(idCur, undefined, true);
            fnSetupID(idLast, cover.rotate * sign, false);



            // Canvas origin transform --> di chuyen huong nguoc lai voi xCanvas
            va.origin += sTranslate * sign;

            // Canvas cap nhat origin transform
            var tf = {};
            tf[va.prefix + 'perspective-origin'] = va.origin +'px 50%';
            va.$canvas.css(tf);
        },


        balanceScale : function(a) {

            // Shortcut varible
            var pBegin = va.pBegin;

            // Switch slide center
            var idCur  = va.center.nLeft,
                idLast = idCur - a.s,
                slCur  = $s.eq(va.idMap[idCur]),
                slLast = $s.eq(va.idMap[idLast]),

                // Vi tri = vi tri hien co tru khoang cach dinh san va khoang cach Canvas di chuyen
                gap   = (va.gapBegin - va.can.sTranslate) * a.s,
                pCur  = pBegin[idCur]  - gap,
                pLast = pBegin[idLast] - gap;


            // Cap nhat thay doi vao doi tuong
            pBegin[idCur]  = pCur;
            pBegin[idLast] = pLast;


            // Tim transform value cua idCur/idLast va luu tru chung
            var tfCur  = va.tfMap[idCur]  = that.tf2(pCur),
                tfLast = va.tfMap[idLast] = that.tf2(pLast, o.scale.intensity/100);


            // Set transition truoc va transform sau len slide --> tao hieu ung chuyen dong
            // Set timer de loai bo transition sau khi chuyen dong ket thuc
            var ts    = a.isContinuity ? {} : M.ts(cssTf, a.sp, va.ease),     // Loai bo transition khi drag/touch lien tiep
                timer = 'timer';

            clearTimeout(slCur.data(timer));
            clearTimeout(slLast.data(timer));

            slCur.css(ts).css(tfCur);
            slLast.css(ts).css(tfLast);

            // Loai bo transition tren slide --> de kiem soat va code dep hon
            slCur.data(timer, setTimeout(function()  { M.tsRemove(slCur) }, a.sp));
            slLast.data(timer, setTimeout(function() { M.tsRemove(slLast) }, a.sp));
        },



        /**
         * PHUC HOI LAI VI TRI VA` TRANSFORM CAC SLIDES SAU KHI DI CHUYEN TAM THOI
         */
        restoreMask : function() {
            var that = this;

            var fnSetupID = function(id) {
                that.POSITION.xAnimate(that.imgbackOfSlide(id), 0, 0, 1);
            };

            // Setup 3 slide o chinh giua quay lai vi tri ban dau
            var idCur = that.va.center.nLeft;
            fnSetupID(idCur);
            fnSetupID(idCur + 1);
            fnSetupID(idCur - 1);
        },


        restoreCoverflow : function() {
            var that = this;
            varibleModule(that);

            // Bien shortcut va khoi tao ban dau 
            var idCur = va.center.nLeft,
                sp    = va.speed[cs.idCur],
                ts    = M.ts(va.cssTf, sp, va.ease);        // Loai bo transition khi drag/touch lien tiep


            // Setup thuoc tinh tren moi slide
            var fnSetupID = function(id) {

                var slide = va.$s.eq(va.idMap[id]),
                    tf    = va.tfMap[id];

                // Loai bo timer va setup transition cho slide
                clearTimeout(slide.data('timer'));
                slide.css(ts).css(tf);

                // Loai bo transition tren slide --> de kiem soat va code dep hon
                slide.data('timer', setTimeout(function() { that.M.tsRemove(slide) }, sp));
            };

            fnSetupID(idCur);
            fnSetupID(idCur + 1);
            fnSetupID(idCur - 1);
        },


        restoreScale : function() { that.restore.coverflow() },



        /**
         * TRA VE IMAGE BACK CUA SLIDE VOI CHI SO ID
         */
        imgbackOfSlide : function(id) {
            var va = this.va;
            return va.$s.eq(va.idMap[id]).data('$imgback');
        },


        /**
         * TOA IMAGE BACK CLONE LUU TRU TRONG DATA IMAGE BACK SLIDE ID
         */
        createImgClone : function(id) {
            varibleModule(this);

            // Bien shortcut va khoi tao
            var $imgback   = that.imgbackOfSlide(id),
                widthImage = M.pInt( $imgback.find('img').css('width') ),
                imgLeft    = - M.r( (widthImage - va.wSlide)/2 ),
                styleClone = {
                    'position'   : 'absolute',
                    'overflow'   : 'hidden',
                    'visibility' : 'hidden',
                    'top'        : 0,
                    'width'      : va.wSlide
                },

                // Copy imgback va wrap bang <div>
                $imgItemClone  = $imgback.find('img').clone().css({ 'position': 'relative', 'left': imgLeft }),
                $imgClone      = $('<div/>').css(styleClone).append($imgItemClone);


            // Luu tru wrap imgback clone vao slide
            $imgback.data({
                '$imgClone'  : $imgClone,
                'isAddClone' : 0,
                'left'       : M.pInt($imgback.css('left'))
            });

            return $imgClone;
        },


        // Update vi tri left cua wrap clone
        updateImgClone : function(id, sign, isCur) {
            var that = this,
                va  = that.va;

            var $imgback  = that.imgbackOfSlide(id),
                $imgClone = $imgback.data('$imgClone');

            // Neu $imgClone chua ton tai --> tao $imgClone
            if( !$imgClone ) $imgClone = that.createImgClone(id);

            var sTranslate = va.can.sTranslate * sign;
            sTranslate = isCur ? sTranslate : - sTranslate;

            // Cap nhap vi tri va toggle show $imgClone
            var left = - $imgback.data('left') + sTranslate;
            $imgClone.css({ 'left': left, 'visibility': 'visible' });


            // Append $imgClone vao page neu khong co trong page
            if( !$imgback.data('isAddClone') ) {

                $imgback.append($imgClone);
                $imgback.data('isAddClone', true);
            }
        }
    };
})(jQuery);







/**
 * MODULE MATH EFFECTS
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, va, is, ti, M, FX, i, j, idCur, speed, cssTf,
        varibleModule = function(self) {
            that  = self;
            o     = self.o;
            va    = self.va;
            is    = self.is;
            ti    = self.ti;
            M     = self.M;
            FX    = self.FX;

            idCur = self.cs.idCur;
            speed = va.speed;
            cssTf = va.cssTf
        };

    /**
     * MODULE HIEU UNG MATH
     */
    rt01MODULE.FXMATH = {

        /**
         * KIEM TRA HIEU U'NG TRUOC KHI SETUP BEGIN
         */
        check : function(f) {
            varibleModule(this);
            var fxIdCur = va.fx[idCur];
            

            /**
             * SETUP HIEU UNG RANDOM 
             */
            // Neu fxIdCur la 'randomMath' --> thi Random hieu u'ng trong Mang Fx Math
            if( fxIdCur == 'randomMath' ) {
                fxIdCur = M.randomInArray2(o.fxMathName, va.fxMathRandom);
            }
            // Neu fxIdCur la Mang? --> random trong Ma?ng
            else if( $.isArray(fxIdCur) ) {
                fxIdCur = M.randomInArray(fxCur, va.fxLast);
            }

            // Luu tru va lay ten hieu ung hien tai
            var fxCur = va.fxLast = fxIdCur;



            // Setup truong hop co image background
            f.$imgSlCur = f.$slCur.data('$imgback');

            if( !!f.$imgSlCur && !!that[fxCur] ) that[fxCur](f);
            else FX.end(null);
        },


        /**
         * SETUP BAN DAU KHI THUC HIEN HIEU U'NG
         */
        setupBegin : function(f, isNoInvert, isSizeSquare, isImgFading) {
            varibleModule(this);
            var ns = va.ns;

            /**
             * LOAI BO NHUNG THAN PHAN SOT LAI CUA HIEU UNG CU~
             *  + Loai bo css 'visibility' tren Slide Current cua hieu u'ng cu
             *  + Loai bo fxOverlay cua hieu u'ng cu~
             */
            clearTimeout(ti.fxEnd);
            !!va.$fxSlCur && va.$fxSlCur.css('visibility', '');
            !!va.$fxOverlay && va.$fxOverlay.remove();

            

            /**
             * SETUP BAN DAU TUY THEO HUONG NEXT - PREV
             */
            if( isNoInvert ) f.isNext = true;

            // Truong hop di chuyen theo huo'ng Next
            if( f.isNext ) {
                f.mark       = -1;
                f.opacity    = 1;
                f.opaReverse = 0;
            }

            // Truong hop di chuyen theo huo'ng Prev
            else {
                f.mark       = 1;
                f.opacity    = 0;
                f.opaReverse = 1;
            }



            /**
             * SETUP CAC BIEN BAN DAU
             */
            var nCur      = idCur,
                isNext    = f.isNext,
                wCode     = va.wCode,
                wSlide    = va.wSlide,
                div       = '<div/>';

            f.$imgSlLast     = f.$slLast.data('$imgback');
            f.$imgItemSlLast = f.$imgSlLast.find('img');
            f.$imgItemSlCur  = f.$imgSlCur.find('img');
            f.wImgItemLast   = f.$imgItemSlLast.outerWidth(true);
            f.wImgItemCur    = f.$imgItemSlCur.outerWidth(true);    // Shortcut true width width image background current
            f.hCur           = f.$imgSlCur.outerHeight(true);       // Shortcut true width height image background current
            f.leftImgItemCur = M.pInt( f.$imgItemSlCur.css('left') );

            f.wLast          = (f.wImgItemLast < wSlide) ? f.wImgItemLast : wSlide;
            f.wCur           = (f.wImgItemCur < wSlide) ? f.wImgItemCur : wSlide;

            f.$imgFxBack     = isNext ? f.$imgSlLast.clone() : f.$imgSlCur.clone();
            f.$imgFxFront    = isNext ? f.$imgSlCur.clone() : f.$imgSlLast.clone();
            f.$imgItemFxFront = f.$imgFxFront.find('img');

            va.$fxOverlay    = $(div, {'class': ns +'fx-overlay'});
            f.$fxBack        = $(div, {'class': ns +'fx-back'});
            f.$fxFrontWrap   = $(div, {'class': ns +'fx-front-wrap'});
            f.$fxFront       = $(div, {'class': ns +'fx-front'});


            /**
             * CHEN CAC THANH PHAN HIEU U'NG LUC BAN DAU
             */
            // Chen FxBack vao FxOverlay
            f.$fxBack
                .append(f.$imgFxBack)
                .appendTo(va.$fxOverlay);


            // Luu tru va hidden Slide Current
            va.$fxSlCur = f.$slCur;
            va.$fxSlCur.css('visibility', 'hidden');

            // Chen fxFrontWrap vao fxOverlay
            va.$fxOverlay.append(f.$fxFrontWrap);

            // FxFrontWrap: add css height in height-fixed mode
            // Neu khong thi height la height cua Image background target
            var hFrontWrap = is.heightFixed ? va.hCode : f.hCur;
            f.$fxFrontWrap.css('height', hFrontWrap);

            // fxFront: chen cac Image vao
            f.$imgFxFront.appendTo(f.$fxFront);

            // Luu tru vi tri Left - Top hien tai cua Image Item Fx Front va`o Data
            // Ho tro. setup vi tri khac nhau trong Image position Tile
            f.$imgItemFxFront.each(function() {
                var $imgCur = $(this);

                $imgCur.data({
                    'left' : M.pInt( $imgCur.css('left') ),
                    'top'  : M.pInt( $imgCur.css('top') )
                });
            });




            /**
             * SETUP HIEU U'NG FADING CHO IMAGE BACK
             */
            if( isImgFading ) {
                var opacityBegin = isNext ? 1 : 0,
                    opacityEnd   = isNext ? 0.25 : 1,
                    styleBegin   = { 'opacity': opacityBegin };

                // Setup Image Item fading
                f.$fxBack
                    .find('img')
                    .css(styleBegin)
                    .animate({ 'opacity' : opacityEnd }, { 'duration' : speed[idCur] });
            }




            /**
             * SETUP KICH THUOC SLOT CUA SIZE SQUARE
             *  + Hoan doi gia tri slot giua width/height slides
             *  + Lam theo chuan: width > height
             */
            var fnGetSlot = function(w, h, nameVer, nameHor) {
                    var a = {};

                    // Store slot vertical
                    a[nameVer] = f.slot;

                    // Height value: get
                    a['height'] = M.c(h / f.slot);

                    // Number slot at horizontal, get width-slide larger
                    a[nameHor] = M.c(w / a['height']);

                    // Width front: combine slotHor and width-slide
                    var nRemain = w - (a['height'] * a[nameHor]);           // Number remainder, so voi number slotHor va width slide
                    a['width'] = a['height'] + M.c(nRemain / a[nameHor]);

                    return a;
                };


            // Slot: setup number
            if( isSizeSquare ) {

                // Height of wrapFront. Lay tong chieu cao cua slide -> trong height-fixed, lay hCode
                var height = is.heightFixed ? va.hCode : f.hCur;

                // f.slot convert to {} --> muc dich: gan f.slot cho gia tri nho nhat cua width var height slide
                // Truong hop mac dinh, width-slide > height -slide
                if( wSlide > height ) {
                    f.slot   = fnGetSlot(wSlide, height, 'ver', 'hor');
                    f.wFront = f.slot['width'];
                    f.hFront = f.slot['height'];
                }

                // Truong hop nguoc lai, dao nguoc number slot
                else {
                    f.slot   = fnGetSlot(height, wSlide, 'hor', 'ver');
                    f.wFront = f.slot['height'];
                    f.hFront = f.slot['width'];
                }


                // Front: setup size, kich thuoc gan bang hinh vuong
                f.$fxFront.css({ 'width' : f.wFront, 'height' : f.hFront });
                f.$imgFxFront.css({ 'width': '100%', 'height' : '100%' });
            }
            else {
                f.wFront = M.c(wSlide / f.slot);
                f.$fxFront.css({ 'width': f.wFront, 'height': '100%' });
                f.$imgFxFront.css({ 'width': f.wFront });
            }



            /**
             * SETUP VI TRI TOP KHI CHIEU CAO CUA 2 SLIDE KHAC NHAU
             *  + Trong height-auto: slideCur & slideCur, height khac nhau
             *  + Trong height-fixed: slideCur & slideCur, height giong nhau
             */
            f.top = M.r( (f.$slCur.outerHeight(true) - f.$slLast.outerHeight(true)) / 2 );
            if( !is.heightFixed ) {

                if( isSizeSquare ) {
                    if( isNext ) { f.$fxBack.css('top', f.top); f.top = 0; }
                }
                else {
                    if( isNext ) f.$fxBack.css('top', f.top);
                    else         f.$imgFxFront.css('top', f.top);
                }
            }


            // WrapFront: clear top value trong sizeSquare && height-fixed
            // css top value la gia tri de center slide trong height-fixed
            if( isSizeSquare && is.heightFixed ) {
                f.tImg = f.$imgFxFront.css('top');

                // Check top value: neu khong co gia tri, trong chrome tra ve '', con trong ie tra ve 'auto'
                if( f.tImg != '' && f.tImg != 'auto' ) {

                    // Cong vao var f.top
                    f.top += M.pInt(f.tImg);

                    // WrapFront: clear top value
                    f.$imgFxFront.css('top', '');
                }
            }
        },

        /**
         * VI TRI CUA IMAGE ITEM LUC BAT DAU - DANH CHO HIEU U'NG RECT
         */
        posBeginImgItem : function(f, i, j) {

            f.$imgItemFxFront.each(function() {
                var $imgCur = $(this);

                // Setup vi tri Left
                $imgCur.css('left', -(i * f.wFront) + $imgCur.data('left'));
                
                // Setup vi tri Top
                if( j != undefined ) $imgCur.css('top', -(j * f.hFront) + f.top + $imgCur.data('top'));
            });
        },


        /**
         * SETUP TRANSFORM END CHO FX FRONT
         */
        transformEnd : function(f, transformBy) {
            var that = this;
            varibleModule(that);


            // Dragstart stop
            f.$fxFrontWrap.on(va.ev.drag, function(e) { return false });
            va.fxTime0 = +new Date();

            // Easing: setup
            var esIn  = f.easeIn ? f.easeIn : 'easeOutCubic',
                esOut = f.easeOut ? f.easeOut : 'easeInCubic',
                es    = f.isNext ? M.easeName(esIn) : M.easeName(esOut);

            // Function setup Transform va Transition voi Timer
            var fnAnimation = function($ele, ts, tf, sp) {
                if( that.is.ts ) {
                    $ele.css(ts);
                    // Bat buoc phai co timer
                    setTimeout(function() { $ele.css(tf) }, 10);
                }
                else $ele.animate(tf, sp);
            };


            /**
             * SETUP CHUYEN DONG KET THUC CHO FX FRONT
             */
            f.$fxFront = f.$fxFrontWrap.find('.'+ va.ns +'fx-front');
            f.$fxFront.each(function() {

                var $eleCur = $(this),
                    sp      = ~~ $eleCur.data('speed'),
                    tf      = $eleCur.data('tfEnd'),
                    ts      = (typeof tf['opacity'] != 'number') ? M.ts(cssTf, sp, es) : M.ts('opacity', sp, es),
                    $obj;

                if( transformBy == 'self' ) $obj = $eleCur;
                if( transformBy == 'wrap' ) $obj = $eleCur.find('.'+ va.ns +'imgback');

                // Setup timer neu co opt Delay
                var delay = ~~ $eleCur.data('delay');
                if( delay == 0 ) fnAnimation($obj, ts, tf, sp);
                else             setTimeout(function() { fnAnimation($obj, ts, tf, sp) }, delay);
            });


            /**
             * SETUP OTHERS
             */
            // Chen toan bo fx DOM vao slide sau cung --> de tang toc do
            va.$fxOverlay.appendTo(va.$canvas);

            // Fx animation end
            FX.end();
        },




        /**
         * SETUP HIEU U'NG RECT
         */
        rectMove : function(f, slot) {
            varibleModule(this);
            
            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            if( slot === undefined ) {
                var slotMin = (va.wCode > 768) ? 5 : 3,
                    slotCur = va.slot[idCur];

                slot = (slotCur == 'auto') ? M.r( M.rm(2, slotMin + 3) ) : M.pInt(slotCur);
            }
            f.slot = slot;

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, true, false, false);



            /**
             * TRANSFORM BAN DAU DOI TUONG FX FRONT
             */
            var tfBegin = {},
                tfEnd   = {};

            tfBegin[cssTf] = M.tlx(f.mark * f.wFront);
            tfEnd[cssTf]   = M.tlx(0);

            // Di chuyen Wrap Front truoc
            f.$imgFxFront.css(tfBegin);

            // Slot position start & Image Slot position
            for( i = 0; i < f.slot; i++ ) {

                // Vi tri luc dau cua Image Item
                that.posBeginImgItem(f, i);


                f.$fxFront.clone()
                    .css({ 'left' : i * f.wFront, 'top' : 0 })
                    .data({ 'speed': speed[idCur], 'delay': 0, 'tfEnd': tfEnd })
                    .appendTo(f.$fxFrontWrap);
            }


            /**
             * TRANSFORM BAN DAU DOI TUONG FX BACK
             */
            var tfEndBack = {};
            tfEndBack[cssTf] = M.tlx(-f.mark * f.wFront);

            if( is.ts ) {
                // Easing: set
                f.easeIn  = 'easeOutCubic';
                f.easeOut = 'easeInCubic';
                var es = f.isNext ? M.easeName(f.easeIn) : M.easeName(f.easeOut),
                    ts = M.ts(cssTf, speed[idCur], es);

                setTimeout(function() { f.$imgFxBack.css(ts) }, 5);
                setTimeout(function() { f.$imgFxBack.css(tfEndBack) }, 10);
            }
            else {
                // Di chuyen vi tri Left cua $FxBack
                f.$fxBack.animate(tfEndBack, speed[idCur]);
            }

            // Ket thuc Transform
            that.transformEnd(f, 'wrap');
        },

        rectRun : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(3,6)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, false, true);

            // Setup thoi gian Speed va Delay
            var speedCur = speed[idCur] / 4,
                delayAll = speed[idCur] - speedCur,
                delayOne = delayAll / (f.slot - 1);     // -1 : -> Lam` fxFront dau` tien chay ngay lap tuc



            /**
             * SETUP TRANSFORM CHO FX FRONT
             */
            var tfBegin, tfEnd, delay;
            for( i = 0; i < f.slot; i++ ) {

                // Vi tri luc dau cua Image Item
                that.posBeginImgItem(f, i);

                // Thoi gian delay va vi tri bat dau - ket thuc
                var delayCur = delayAll - (i * delayOne),
                    xBegin   = f.isNext ? -(f.wFront + 1) : i * f.wFront,
                    xEnd     = f.isNext ? M.r(i * f.wFront) : va.wSlide;


                // Transform ban dau cho fxFront
                tfBegin = {};
                tfBegin[cssTf] = M.tlx(xBegin);
                f.$fxFront.css(tfBegin);

                // Luu tru options tren data cua fxFront
                tfEnd = {};
                tfEnd[cssTf] = M.tlx(xEnd);

                f.$fxFront.clone()
                    .data({ 'speed': speedCur, 'delay' : delayCur, 'tfEnd': tfEnd })
                    .appendTo(f.$fxFrontWrap);
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'self');
        },

        rectSlice : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(4,10)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, false, true);


            // Setup thoi gia Speed va Delay
            var speedCur = speed[idCur] / 4,
                delayAll = speed[idCur] - speedCur,
                delayOne = delayAll / f.slot;


            /**
             * SETUP TRANSFORM CHO FX FRONT
             */
            var tfBegin, tfEnd, delayCur,
                yName = is.ts ? cssTf : 'top';

            for( i = 0; i < f.slot; i++ ) {

                // Vi tri luc dau cua Image Item
                that.posBeginImgItem(f, i);

                // Timer delay cho tung Item
                delayCur = f.isNext ? i * delayOne : (delayAll - (i * delayOne));


                // Transform ban dau cho fxFront
                var y      = (M.r(i / 2) > i / 2) ? 100 : -100,
                    yBegin = f.isNext ? y : 0,
                    yEnd   = f.isNext ? 0 : y;

                tfBegin = {};
                tfBegin[yName] = M.tly(yBegin, '%');
                f.$fxFront.css({ 'left': i * f.wFront }).css(tfBegin);


                // Luu tru options tren data cua fxFront
                tfEnd = {};
                tfEnd[yName] = M.tly(yEnd, '%');

                f.$fxFront.clone()
                    .data({ 'speed': speedCur , 'delay' : delayCur, 'tfEnd': tfEnd })
                    .appendTo(f.$fxFrontWrap);
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'self');
        },




        /**
         * SETUP HIEU U'NG RUBY
         */
        rubyFade : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(2, 4)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, true, false);


            // FxSlot: set Opacity
            f.$fxFront.css('opacity', f.opaReverse);


            // FxSlot & Image Slot: Position | Timer setup
            for( i = 0; i < f.slot.ver; i++ ) {
                for( j = 0; j < f.slot.hor; j++ ) {

                    // Vi tri luc bat dau cua Image Item
                    that.posBeginImgItem(f, j, i);

                    // Setup thoi gia Speed va Delay cua Item
                    var speedCur = M.r( M.rm(100, speed[idCur]) ),
                        delayCur = speed[idCur] - speedCur;


                    // Transform End ban dau va Luu tru options tren data cua fxFront
                    var tfEnd = {};
                    tfEnd['opacity'] = f.opacity;

                    f.$fxFront.clone()
                        .css({ 'left' : j * f.wFront, 'top' : i * f.hFront })
                        .data({ 'speed' : speedCur, 'delay' : delayCur, 'tfEnd' : tfEnd })
                        .appendTo(f.$fxFrontWrap);
                }
            }

            // Setup transform ket thuc cho fxFront
            f.easeOut = 'easeOutCubic';
            that.transformEnd(f, 'self');
        },

        rubyMove : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(2, 4)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, true, false);


            // Function Tra ve vi tri Tu do
            var fnPosRandom = function(v) {
                var x, y, a = {};
                switch (v) {
                    case 0: a.x = 0;    a.y = -100; break;
                    case 1: a.x = 100;  a.y = 0;    break;
                    case 2: a.x = 0;    a.y = 100;  break;
                    case 3: a.x = -100; a.y = 0;    break;
                }
                return a;
            }


            // FxSlot & Image Slot: Position | Timer setup
            var xy, tfBegin, tfEnd;
            for( i = 0; i < f.slot.ver; i++ ) {
                for( j = 0; j < f.slot.hor; j++ ) {

                    // Vi tri luc bat dau cua Image Item
                    that.posBeginImgItem(f, j, i);


                    // Transform Ban dau cho Image fxFront
                    xy = fnPosRandom(M.r(M.ra()*3));
                    if( is.ts ) { 
                        tfBegin = {};
                        tfEnd   = {};
                        tfBegin[cssTf] = M.tl(xy.x, xy.y, '%');
                        tfEnd[cssTf]   = M.tl(0, 0, '%'); 
                    }
                    else {
                        tfBegin = {};
                        tfBegin['left'] = xy.x;
                        tfBegin['top']  = xy.y;
                        
                        tfEnd = {};
                        tfEnd['left'] = 0;
                        tfEnd['top']  = 0;
                    }
                    f.$imgFxFront.css( f.isNext ? tfBegin : tfEnd);


                    // Setup thoi gia Speed va Delay cua Item
                    var speedCur = M.rm(100, speed[idCur] / 2),
                        delayCur = M.ra() * (speed[idCur] - speedCur);

                    // Luu tru options tren data cua fxFront
                    f.$fxFront.clone()
                        .css({ 'left' : j * f.wFront, 'top' : i * f.hFront })
                        .data({ 'speed' : speedCur, 'delay' : delayCur, 'tfEnd' : f.isNext ? tfEnd : tfBegin })
                        .appendTo(f.$fxFrontWrap);
                }
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'wrap');
        },

        rubyRun : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(2,4)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, true, true);


            // FxSlot & Image Slot: Position | Timer setup
            var xy = {}, tfBegin, tfEnd;
            for( i = 0; i < f.slot.ver; i++ ) {
                for( j = 0; j < f.slot.hor; j++ ) {

                    // Vi tri luc bat dau cua Image Item
                    that.posBeginImgItem(f, j, i);


                    // Luu chon ngau nhien vi tri xuat hien
                    switch ( M.r(M.ra() * 3) ) {
                        case 0:
                            xy.x = j * f.wFront;
                            xy.y = -f.hFront;
                            break;
                        case 1:
                            xy.x = va.wSlide;
                            xy.y = i * f.hFront;
                            break;
                        case 2:
                            xy.x = j * f.wFront;
                            xy.y = f.hCur;
                            break;
                        case 3:
                            xy.x = -f.wFront;
                            xy.y = i * f.hFront;
                            break;
                    }

                    // Transform Ban dau cho fxFront
                    if( is.ts ) {
                        tfBegin = {};
                        tfEnd   = {};
                        tfBegin[cssTf] = M.tl(xy.x, xy.y);
                        tfEnd[cssTf]   = M.tl(j * f.wFront, i * f.hFront);
                    }
                    else {
                        tfBegin = {};
                        tfBegin['left'] = xy.x;
                        tfBegin['top']  = xy.y;

                        tfEnd = {};
                        tfEnd['left'] = j * f.wFront;
                        tfEnd['top']  = i * f.hFront;
                    }
                    f.$fxFront.css( f.isNext ? tfBegin : tfEnd );


                    // Setup thoi gia Speed va Delay
                    var speedCur = M.rm(100, 300),   // Hieu u'ng nhi`n dep hon so o? tren
                        delayCur = M.ra() * (speed[idCur] - speedCur);

                    // Luu tru options tren data cua fxFront
                    f.$fxFront.clone()
                        .data({ 'speed' : speedCur, 'delay' : delayCur, 'tfEnd' : f.isNext ? tfEnd : tfBegin })
                        .appendTo(f.$fxFrontWrap);
                }
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'self');
        },

        rubyScale : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(2,4)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, true, false);


            /**
             * SETUP TRANSFORM BAN DAU & KET THUC HO IMAGE FXFRONT
             * @param mixed scaleEnd
             */
            var scaleBegin = f.isNext ? 0 : 1,
                scaleEnd   = f.isNext ? 1 : 0;

            if( is.ts ) {
                var tf = {};
                tf[cssTf] = 'scale(' + scaleBegin + ')';
                f.$imgFxFront.css({'width': '100%', 'height' : '100%'}).css(tf);

                var tf = {};
                tf[cssTf] = 'scale(' + scaleEnd + ')';
                scaleEnd  = tf;
            }
            else {
                f.$imgFxFront.css({
                    'width' : scaleBegin * 100 +'%',
                    'height': scaleBegin * 100 +'%',
                    'left'  : scaleEnd * 50 +'%',
                    'top'   : scaleEnd * 50 +'%'
                });

                var tf = {};
                tf['width']  = scaleEnd * 100 +'%';
                tf['height'] = scaleEnd * 100 +'%';
                tf['left']   = scaleBegin * 50 +'%';
                tf['top']    = scaleBegin * 50 +'%';
                scaleEnd = tf;
            }



            // FxSlot & Image Slot: Position | Timer setup
            for( i = 0; i < f.slot.ver; i++ ) {
                for( j = 0; j < f.slot.hor; j++ ) {

                    // Vi tri luc bat dau cua Image Item
                    that.posBeginImgItem(f, j, i);
                    
                    // Setup thoi gia Speed va Delay cho Item
                    var speedCur = M.rm(100, 300),
                        delayCur = M.ra() * (speed[idCur] - speedCur);

                    // Setup Vi tri va Luu tru options tren data cua fxFront
                    f.$fxFront.clone()
                        .css({ 'left': j * f.wFront, 'top': i * f.hFront })
                        .data({ 'speed' : speedCur, 'delay' : delayCur, 'tfEnd': scaleEnd })
                        .appendTo(f.$fxFrontWrap);
                }
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'wrap');
        },




        /**
         * SETUP HIEU U'NG ZIGZAG
         */
        zigzagRun : function(f) {
            varibleModule(this);

            /**
             * LAY SLOT VA SETUP BAN DAU CHO HIEU U'NG
             */
            var slotCur = va.slot[idCur];
            f.slot = (slotCur == 'auto') ? M.r(M.rm(2,5)) : M.pInt(slotCur);

            // Setup ban dau cho hieu u'ng
            that.setupBegin(f, false, true, true);

            // Setup thoi gia Speed va Delay cho FxFront
            var speedCur = ~~(speed[idCur] / (f.slot.ver * f.slot.hor) - 0.5),
                delayCur = speedCur;



            // FxSlot & Image Slot: Position | Timer setup
            var slotVer = f.slot.ver,
                slotHor = f.slot.hor,
                itemID  = 0,
                j0, j0, tfBegin, tfEnd, xBegin, xEnd;

            for( i = 0; i < f.slot.ver; i++ ) {
                for( j = 0; j < f.slot.hor; j++ ) {

                    // Vi tri luc bat dau cua Image Item
                    that.posBeginImgItem(f, j, i);


                    // Setup ID cua Item hien tai
                    j0 = slotHor - j;
                    j0 =  (M.r(j0 / 2) > j0 / 2) ? i : (slotVer - i - 1);
                    itemID = j0 + (slotVer * (slotHor - j - 1));


                    // Transform Ban dau cho Image fxFront
                    tfBegin = {};
                    xBegin  = f.isNext ? -(f.wFront + 1) : j * f.wFront;
                    tfBegin[cssTf] = M.tlx(xBegin);
                    f.$fxFront.css(tfBegin);


                    // Luu tru options tren data cua fxFront
                    tfEnd = {};
                    xEnd  = f.isNext ? j * f.wFront : va.wSlide;
                    tfEnd[cssTf] = M.tlx(xEnd);

                    f.$fxFront.clone()
                        .css({ 'top': i * f.hFront })
                        .data({ 'speed' : speedCur, 'delay' : delayCur * itemID, 'tfEnd' : tfEnd })
                        .appendTo(f.$fxFrontWrap);
                }
            }

            // Setup transform ket thuc cho fxFront
            that.transformEnd(f, 'self');
        }
    };
})(jQuery);







/**
 * MODULE CSS EFFECTS
 * ========================================================================== */
(function($) {

    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE HIEU UNG CSS
     */
    rt01MODULE.FXCSS = {

        /**
         * Ket hop voi CssOutIn va CssOne. Setup chia lam 3 phan:
         *  + Toggle class tren idLast va idCurrent --> bao gom ten hieu ung + speed
         *  + Toggle class tren Viewport --> Them class NoClip + ten hieu ung combine (neu co)
         *  + Toggle class tren ID last cua last --> loai bo ten class --> ho tro swap nav lien tiep
         *  + Setup moi thu con lai khi chay xong hieu ung bang css
         */
        setup : function() {

            var that = this,
                cs   = that.cs,
                va   = that.va,
                is   = that.is,
                M    = that.M,
                FX   = that.FX;

            /**
             * SETUP CAC BIEN BAN DAU
             */
            var prefix     = 'ruby',        // Prefix chung cho file 'animate.css'
                idCur      = cs.idCur,
                idLast     = cs.idLast,
                cssAD      = va.cssAD,
                $viewport  = va.$viewport,

                isCssOne   = va.fxType == 'cssOne',
                isCssOutIn = va.fxType == 'cssTwo',
                isCssIn    = va.fxType == 'cssThree',
                classAnim  = ' '+ prefix +'-animated',
                classClip  = va.ns +'noclip',
                dataTimer  = 'tiRemove' + M.properCase(va.fxType),
                dataFxAdd  = 'fxAdded',
                speedCur   = va.speed[idCur],
                speedCSS   = {},
                cssReset   = {},
                easeCur    = va.cssEasing[idCur],
                easeName   = va.prefix +'animation-timing-function',
                fxEasing   = {},

                // Bien va setup danh cho cssOne
                ns         = prefix +'-slide',
                IN         = ns +'In',
                OUT        = ns +'Out';

            // Setup thoi gian hieu ung hoat dong
            speedCSS[cssAD] = speedCur +'ms';

            // Setup easing animation
            fxEasing[easeName] = !!easeCur ? easeCur : '';

            // CSS Reset style khi swap slide ket thuc
            cssReset[cssAD]    = '';
            cssReset[easeName] = '';




            /**
             * Toggle hieu ung bang css tren slide current
             * --> slide last nghich dao va tuong tu
             */
            var fnSlideToggleCSS = function(id, isCur) {

                    var $slide = va.$s.eq(id),
                        fxAdd, fxDel;

                    // Setup class Add va Delete
                    if( isCssOne ) {
                        fxAdd = isCur ? IN : OUT;
                        fxDel = isCur ? OUT : IN;
                    }
                    else {
                        // Ten hieu u'ng Them vao va` Xoa'
                        fxAdd = va.fx[id][isCur ? 0 : 1] || '';
                        fxDel = $slide.data(dataFxAdd) || '';

                        // Kiem tra co phai mang hieu ung hay khong
                        var nameFxLast = 'fxLast'+ (isCur ? 'Out' : 'In');
                        fxAdd = va[nameFxLast] = M.randomInArray(fxAdd, va[nameFxLast]);

                        // Luu tru hieu ung hien tai vao data slide
                        $slide.data(dataFxAdd, fxAdd);
                    }


                    // Loai bo timer remove class cua slide
                    clearTimeout($slide.data(dataTimer));

                    // Them thoi gian chuyen dong vao slide
                    $slide.css(speedCSS);

                    // Toggle class vao idCurrent va idLast
                    $slide.removeClass(fxDel).css(fxEasing).addClass(fxAdd + classAnim);

                    // Loai bo class effect tren slide
                    $slide.data(dataTimer, setTimeout(function() {
                        $slide.removeClass(fxAdd + classAnim).css(cssReset);
                        isCssIn && fnResetAnimateOnSlide($slide);
                    }, speedCur));
                },

                fnResetAnimateOnSlide = function($slCur) {
                    var ts = {};

                    ts[va.cssTf]  = '';
                    ts[va.cssTs]  = 'none';
                    ts[cssAD]     = '';
                    ts['opacity'] = '';

                    $slCur.stop(true);
                    $slCur.css(ts).css(va.cssTs, '');
                },

                fnTranslateLineOnSlide = function($slCur) {

                    var sign        = is.slideNext ? -1 : 1,
                        nameFnReset = va.fxType +'Reset';

                    // Loai bo timer luu tru trong data
                    clearTimeout($slCur.data(dataTimer));

                    // Hien thi SlideLast va loai bo css khong can thiet
                    $slCur.removeClass($slCur.data(dataFxAdd)).addClass(classAnim);

                    // Di chuyen SlideLast voi khoang cach sTranslate
                    that.POSITION.xAnimate($slCur, va.sCode * 1.5 * sign , false, true);
                    $slCur.fadeOut(speedCur, function() { $(this).css('display', ''); });
                    
                    // Loai bo class hien thi va transition
                    $slCur.data(dataTimer, setTimeout(function() {

                        $slCur.removeClass(classAnim);
                        fnResetAnimateOnSlide($slCur);
                    }, speedCur));
                };

            /**
             * SETEUP CHO CAC LOAI HIEU UNG CSS
             */
            if( isCssIn ) {
                var $slLast = va.$s.eq(idLast),
                    $slNext = va.$s.eq(idCur);

                // Setup Slide Prev
                fnResetAnimateOnSlide($slLast);
                fnTranslateLineOnSlide($slLast);

                // Setup slide Next
                fnResetAnimateOnSlide($slNext);
                fnSlideToggleCSS(idCur, is.slideNext);
            }
            else {
                fnSlideToggleCSS(idLast, false);
                fnSlideToggleCSS(idCur, true);
            }




            /**
             * Loai bo class tren Viewport
             *  + Loai bo timer remove class
             *  + Them class noclip de hien hieu ung css khong bi cat
             *  + Setup timer loai bo class no clip
             */
            var fxViewAdd, fxViewDel;
            if( isCssOne ) {
                var fxPrefix  = prefix +'one-',
                    fxCur     = va.fxLast = M.randomInArray(va.fx[idCur], va.fxLast),
                    fxViewAdd = fxPrefix + fxCur,
                    fxViewDel = $viewport.data(dataFxAdd),
                    isNext    = va.nMove > 0,
                    navCur    = isNext ? ns +'Next' : ns +'Prev',
                    navLast   = isNext ? ns +'Prev' : ns +'Next';

                fxViewAdd = classClip +' '+ fxViewAdd +' '+ navCur;
                fxViewDel = fxViewDel +' '+ navLast;

                // Luu tru Hieu ung hien tai vao data Viewport
                va.$viewport.data(dataFxAdd, fxViewAdd);
            }
            else {
                fxViewAdd = classClip;
                fxViewDel = '';
            }

            clearTimeout($viewport.data(dataTimer));
            $viewport.removeClass(fxViewDel).addClass(fxViewAdd);

            $viewport.data(dataTimer, setTimeout(function() {
                $viewport.removeClass(fxViewAdd)
            }, speedCur));



            /**
             * Loai bo hieu ung tren slide last cua last
             * Voi dieu kien phai co idLast2 va phai khac voi idCurrent
             */
            var idLast2 = cs.idLast2;
            if( idLast2 != undefined && idLast2 != idCur ) {

                var $slLast2   = va.$s.eq(idLast2),
                    fxLast2Del = isCssOne ? OUT
                                          : $slLast2.data(dataFxAdd) || '';

                clearTimeout($slLast2.data(dataTimer));
                $slLast2.removeClass(fxLast2Del + classAnim).css(cssReset);

                // Loai css Transform tren Slide Last2
                isCssIn && fnResetAnimateOnSlide($slLast2);
            }



            /**
             * KET THUC SETUP HIEU UNG
             */
            FX.end();
        }
    };
})(jQuery);







/**
 * MODULE SLIDESHOW
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, oo, cs, va, is, ti, M, TIMER,

        /**
         * CAP NHAP BIEN TOAN CUC
         */
        varibleModule = function(self) {
            that  = self;
            o     = self.o;
            oo    = self.oo;
            cs    = self.cs;
            va    = self.va;
            is    = self.is;
            ti    = self.ti;
            M     = self.M;
            TIMER = $.extend({}, rt01MODULE.TIMER, self);
        };


    /**
     * MODULE SLIDESHOW
     * @param int va.tDelay
     */
    rt01MODULE.SLIDESHOW = {

        /**
         * RENDER BUTTON PLAY PAUSE
         */
        renderPlayPause : function() {
            varibleModule(this);

            // Navigation: search DOM
            var classes   = '.'+ va.ns + o.namePlay,
                $playHTML = that.RENDER.searchDOM(classes);

            if( $playHTML.length ) va.$playpause = $playHTML;
            else {

                va.$playpause = $('<div/>', {'class' : va.ns + o.namePlay, 'text' : 'play-pause'});

                // Add playpause vao markup
                that.RENDER.into(o.markup.playInto, va.$playpause);
            }

            // Add class actived vao playpause neu isAutoRun false
            if( !is.autoRun ) {
                is.ssPauseAbsolute = true;
                va.$playpause.addClass(va.actived);
            }
        },


        /**
         * KHOI TAO SLIDESHOW
         */
        init : function() {
            varibleModule(this);

            // Dieu thuc hien function
            // So luong cua Slide phai lo'n hon 2 slides
            if( cs.num < 2 ) return;

            // Tiep tuc setup function
            is.hoverAction = false;

            M.scroll.setup();
            that.eventHover();
            o.slideshow.isPlayPause && that.tapOnPlayPause();

            // Thuoc tinh danh cho button stop
            is.stop = false;

            // Play Slideshow luc dau tien
            that.go('init');
        },


        /**
         * DIE`U HUO'NG SLIDESHOW
         */
        go : function(status) {
            varibleModule(this);
            var actionCur = null,
                PLAY      = 'play',
                PAUSE     = 'pause';

            /**
             * KHONG THUC HIEN LENH NAO KHI STOP ACTIVED
             */
            if( is.stop ) return;
            // console.log('SLIDESHOW.GO', status);


            /**
             * DUNG SLIDESHOW KHI CO LENH DUNG
             */
            if( is.ssPauseAbsolute ) {

                // Chi du`ng khi slideshow dang playing
                if( is.ssPlaying ) {
                    that.pause();
                    actionCur = PAUSE;
                }
            }
            else {

                /**
                 * DUNG SLIDESHOW KHI CO :
                 *  + Code nam ngoai vung Window Browser
                 *  + Dang MouseHover tren Code
                 *  + Slide hien tai co' Video hoac Map dang play
                 *  + Khi hieu u'ng dang chay co' lenh 'go' goi toi
                 */
                if( (is.ssRunInto && !is.into) || is.mouseHover || va.nVideoOpen || va.nMapOpen || is.fxRun ) {

                    // is.ssPlaying --> the hien timer co chay hay khong
                    if( is.ssPlaying ) {
                        that.pause();
                        actionCur = PAUSE;
                    }
                }

                /**
                 * TRUONG HOP CO LENH 'GO' MA KHONG CO SWAP SLIDE
                 */
                else if( !is.fxRun ) {

                    // Danh cho truong hop luc dau khong 'autoRun' slideshow
                    if( !$.isNumeric(va.tDelay)) {
                        that.resetPropThenPlay();
                        actionCur = PLAY;
                    }
                    else if( is.hoverAction ) {
                        if( !is.ssPlaying ) {
                            that.resetPropThenPlay();
                            actionCur = PLAY;
                        }
                    }
                    else {
                        that.play();
                        actionCur = PLAY;
                    }
                }
            }



            /**
             * SETUP BANG STATUS
             */
            if( status == 'slideToBegin' ) {

                // Ket thuc timer slideshow bang hieu u'ng 'fade' 
                is.TIMER && TIMER[va.timer +'AnimationEnd']();
            }
        },



        /**
         * CAP NHAT LAI TOAN BO SLIDESHOW & TIMER
         */
        updateAll : function() {
            varibleModule(this);

            // Timer toggle markup
            var auto0 = oo.slideshow,
                auto1 = o.slideshow;

            // Kiem tra co Option slideshow luu tru hay khong
            if( auto0 === undefined ) return;


            if( auto0.timer != auto1.timer ) {
                clearInterval(ti.timer);
                that.RENDER.timer();
                !!va.tTimer0 && that.pause();      // no check if first auto SLIDESHOW
                that.play();
            }


            // Timer arc update properties
            is.timer && (va.timer == 'arc') && TIMER.arcSetupInit();


            // Slideshow toggle --> after timer update
            if( oo.isSlideshow != o.isSlideshow ) {

                // Khoi tao Slideshow
                if( o.isSlideshow ) that.init();

                // Dung Slideshow
                else {
                    that.pause(true);

                    $(window).off(va.ev.scroll);
                    va.$self.off('mouseenter.code mouseleave.code');
                }
            }

            // Hoverstop toggle
            (auto0.isHoverPause != auto1.isHoverPause) && that.eventHover();
        },



        /**
         * TI'NH TOAN LAI THUOC TINH CUA TIMER -> TIEP TUC PLAYING SLIDESHOW
         */
        resetPropThenPlay : function() {
            varibleModule(this);

            // Reset lai gia tri cac bien
            if( va.tDelay != va.delay[cs.idCur] ) va.tDelay = va.delay[cs.idCur];

            if( is.TIMER ) {
                if     ( va.timer == 'line' && va.xTimer != 100 )  va.xTimer     = 100;
                else if( va.timer == 'arc' )                       va.arc.angCur = 0;
            }
            
            // Tiep tuc tinh toan trong fn Play
            that.play();
        },


        /**
         * PLAY NEXT SLIDE IN SLIDESHOW
         * @param int va.tDelay Phan quan trong
         */
        play : function() {
            varibleModule(this);
            var that = this,
                cs   = that.cs,
                va   = that.va,
                is   = that.is,
                ti   = that.ti;

            // console.log('SLIDESHOW.PLAY');
            va.tTimer0 = +new Date();
            is.ssPlaying = true;
            is.timer && TIMER[va.timer +'Animation']();


            // Setup di chuyen toi slide ke tiep
            clearTimeout(ti.play);
            ti.play = setTimeout(function() {
                varibleModule(that);

                var num      = cs.num,
                    idCur    = cs.idCur,
                    isRandom = o.slideshow.isRandom && num >= 1,
                    idNext   = isRandom ? M.randomInArray2(va.idMap, va.ssIDRandom, idCur)
                                        : (idCur >= num-1 ? 0 : idCur + 1),

                    $slNext  = va.$s.eq(idNext);


                // SLIDE da load xong --> di chuyen toi slide
                // if( $slNext.data('isLoaded') ) {
                //     if     ( isRandom )                   that.TOSLIDE.run(idNext, true);
                //     else if( !is.loop && idCur == num-1 ) that.TOSLIDE.run(0, true);
                //     else                                  that.EVENTS.next(1);
                // }

                // // SLIDE chua load xong --> cho` load xong
                // else {
                //     $slNext.data({ 'isPlayNext' : true });
                //     cs.stop();
                // }

                if     ( isRandom )                   that.TOSLIDE.run(idNext, true);
                else if( !is.loop && idCur == num-1 ) that.TOSLIDE.run(0, true);
                else                                  that.EVENTS.next(1);

            }, va.tDelay);
        },


        /**
         * DUNG HOAC NGUNG HANG SLIDESHOW
         */
        pause : function(isStop) {
            varibleModule(this);
            var idCur = cs.idCur;
            // console.log('SLIDESHOW.PAUSE');

            // Chuyen doi thuoc tinh cua cac bien ngay luc dau
            is.ssPlaying = is.hoverAction = false;


            /**
             * SETUP KHI TIMER DU`NG HA?NG
             */
            if( !!isStop ) {
                va.tDelay = va.delay[idCur];
            }

            /**
             * SETUP KHI TIMER TA.M D`UNG
             */
            else {

                var t0 = va.tDelay;
                va.tTimer1 = +new Date();
                va.tDelay  = va.delay[idCur] - (va.tTimer1 - va.tTimer0);

                if( va.delay[idCur] != t0 ) va.tDelay -= va.delay[idCur] - t0;
                if( va.tDelay < 0 ) {
                    va.tDelay = 0;

                    // !important to solve hover slideshow when fxRunning
                    is.hoverAction = true;
                }
            }

            
            /**
             * SETUP OTHERS
             * Dung hoan toan va loai bo timer playing
             */
            is.timer && TIMER.stop();
            clearTimeout(ti.play);
            clearTimeout(ti.timerLineAnimEnd);
        },



        eventHover : function() {
            var that = this;
            varibleModule(that);

            if( o.slideshow.isHoverPause ) {
                is.mouseHover = false;

                va.$self
                    .off('mouseenter.code mouseleave.code')
                    .on('mouseenter.code', function() {
                        that.is.mouseHover = true;
                        that.go('mouseenter');
                    })
                    .on('mouseleave.code', function() {
                        that.is.mouseHover = false;
                        that.go('mouseleave');
                    });
            }

            else va.$self.off('mouseenter.code mouseleave.code');
        },


        tapOnPlayPause : function() {
            var that = this,
                va   = that.va,
                evName = va.ev.click;       // Khong co event TOUCH --> xung dot voi event CLICK trong IE10+


            // Events
            va.$playpause.off(evName);
            va.$playpause.on(evName, function(e) {
                varibleModule(that);
                
                // Tinh toan vi tri cua Code
                M.scroll.check(true);

                // Thuc hien lenh Play - Pause dua. tren class 'actived'
                if( va.$playpause.hasClass(va.actived) ) that.api('play');
                else that.api('pause');

                return false;
            });
        },


        /**
         * LENH API PLAY - PAUSE - STOP
         */
        api : function(action) {
            var that = this;
            varibleModule(that);

            /**
             * LENH API PLAY
             *  + Chi hoat do.ng khi hieu u'ng khong chay
             */
            if( action == 'play' ) {

                // Khoi tao slideshow neu option khong co 
                if( !o.isSlideshow ) {
                    o.isSlideshow = true;
                    that.init();
                }

                // Them dieu kien 'is.ssPlaying' -> tranh khi tam. du`ng va~n co lenh Play
                if( is.ssPauseAbsolute ) {

                   // Loai bo class 'actived' tren button PlayPause
                    !!va.$playpause && va.$playpause.removeClass(va.actived);
                    // Loai bo bie'n ngan ca?n play slideshow
                    is.stop = is.ssPauseAbsolute = false;
                    // Thuc hien lenh go chi khi hieu u'ng khong chay. 
                    !is.fxRun && that.go('apiPlay');
                    // Tra ve event 'slideshowPlay'
                    cs.ev.trigger('slideshowPlay');
                }
            }


            /**
             * LENH API PAUSE
             */
            else if( action == 'pause' ) {
                if( !is.ssPauseAbsolute ) {

                    // Them class 'actived' tren button PlayPause
                    !!va.$playpause && va.$playpause.addClass(va.actived);
                    // Setup phan khac
                    is.ssPauseAbsolute = true;
                    that.go('apiPause');
                    // Tra ve event 'slideshowPause'
                    cs.ev.trigger('slideshowPause');
                }
            }


            /**
             * LENH API STOP
             */
            else if( action == 'stop' ) {
                if( !is.stop ) {
                    
                    // Them class 'actived' tren button PlayPause
                    !!va.$playpause && va.$playpause.addClass(va.actived);

                    // Bien thong bao dung ha?ng
                    is.stop = is.ssPauseAbsolute = true;
                    that.pause(true);
                    // Tra ve event 'slideshowStop'
                    cs.ev.trigger('slideshowStop');
                }
            }
        }
    };
})(jQuery);







/**
 * MODULE TIMER
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, cs, va, is, ti, M,

        /**
         * CAP NHAP BIEN TOAN CUC
         */
        varibleModule = function(self) {
            that  = self;
            o     = self.o;
            cs    = self.cs;
            va    = self.va;
            is    = self.is;
            ti    = self.ti;
            M     = self.M;
        };


    /**
     * MODULE TIMER FOR SLIDESHOW
     */
    rt01MODULE.TIMER = {

        /**
         * RENDER MARKUP CUA TIMER
         */
        render : function() {
            varibleModule(this);

            // Timer: remove last timer
            !!va.$timer && va.$timer.remove();
            if( !is.timer ) return;


            /**
             * TIM KIEM DOM VA` THEM TIMER VAO CODE
             */
            // Timer: search DOM
            var className  = va.ns + o.nameTimer,                   // Class name
                classType  = className +'-'+ va.timer,              // Class type
                divdiv     = '<div/>',
                $timerHTML = that.RENDER.searchDOM('.'+ className);


            // Timer: them vao markup
            if( $timerHTML.length ) va.$timer = $timerHTML.addClass(classType);
            else {
                va.$timer = $(divdiv, {'class' : className +' '+ classType});

                // Add timer vao markup
                that.RENDER.into(o.markup.timerInto, va.$timer);
            }



            /**
             * SETUP MARKUP VA` THUOC TINH CUA TIMER ITEM
             */
            // TIMER LINE
            if( va.timer == 'line' ) {
                va.$timerItem = $(divdiv, {'class' : className +'item'});
                va.$timer.append(va.$timerItem);

                // Properties init
                that.lineSetupInit();
            }

            // TIMER ARC
            else if( va.timer == 'arc' ) {
                va.$timerItem = $('<canvas></canvas>');
                va.$timer.append(va.$timerItem);

                // Setup init
                that.arcSetupInit();
            }
        },




        /**
         * SETUP TIMER LINE LUC BAT DAU KHI RENDER
         */
        lineSetupInit : function() {
            var that = this;
            varibleModule(that);

            // Setup gia tri transform tren Timer
            var tf = {};
            tf[va.cssTf] = M.tlx(-100, '%');
            setTimeout(function() { that.va.$timerItem.css(tf) }, 1);
        },

        /**
         * SETUP TIMER ARC LUC BAT DAU RENDER
         */
        arcSetupInit : function() {
            varibleModule(this);
            var timerArc = o.timerArc;

            // Arc setup properties
            var propSetup = {
                    angCur : (!!va.arc && !!va.arc.angCur) ? va.arc.angCur : 0,     // Angle Current, get angle last if update by api
                    pi     : Math.PI / 180,
                    width  : (timerArc.width === null)  ? va.$timer.width()  : timerArc.width,
                    height : (timerArc.height === null) ? va.$timer.height() : timerArc.height,
                    speed  : ~~(1000 / timerArc.fps)
                };

            // API update: all properties extend to va.arc
            va.arc = $.extend(o.timerArc, propSetup);

            // Arc size
            va.$timerItem.attr({'width' : va.arc.width, 'height' : va.arc.height});
            

            // Arc: style draw
            va.tContext = va.$timerItem[0].getContext('2d');
            var arcSet = function() {
                var c = va.tContext;
                c.setTransform(1,0,0,1,0,0);
                c.translate(va.arc.width/2, va.arc.height/2);
                c.rotate(-va.arc.pi*(90-va.arc.rotate));

                c.strokeStyle = va.arc.stroke;
                c.fillStyle   = va.arc.fill;
                c.lineWidth   = va.arc.weight;
            };
            arcSet();
        },




        /**
         * SETUP ANIMATION TREN TIMER LINE
         */
        lineAnimation : function() {
            var that = this,
                cs   = that.cs,
                va   = that.va,
                is   = that.is,
                ti   = that.ti,
                M    = that.M;


            /**
             * SETUP ANIMATION KHI BAT DAU
             */
            var
            fnAnimationBegin = function() {
                var tf = {}; tf[va.cssTf] = M.tlx(0);

                // Loai bo thuoc css truoc tien
                va.$timerItem.css({ 'opacity': '', 'visibility': '' });
                
                // Phan biet ho tro Css Transition
                if( is.ts ) {
                    // var ts = {}; ts[va.cssD] = va.tDelay +'ms';
                    var ts = {}; ts = M.ts(va.cssTf, va.tDelay, 'linear');

                    /**
                     * THEM TIMER DE FIXED IE
                     *  + Lam moi lai timer
                     *  + Cai dat timer de fixed trong IE 10+ khong chiu di chuyen luc ban dau
                     */
                    // va.$timerItem.hide().show();
                    va.$timerItem.css(ts);
                    setTimeout(function() { va.$timerItem.css(tf) }, 1);
                }
                else va.$timerItem.animate(tf, { duration: va.tDelay, easing: 'linear' });
            };


            // Truoc tien Loai bo Transition va reset lai vi tri cho Timer
            that.lineAnimationReset(va.xTimer);
            // Bau dau Reset transform cho Timer
            setTimeout(fnAnimationBegin, 1);
        },

        /**
         * LOAI BO TRANSTION VA RESET LAI VI TRI CHO TIMER LINE
         */
        lineAnimationReset : function(xReset) {
            var that = this,
                va   = that.va,
                is   = that.is,
                M    = that.M;

            // Tinh toan gia tri bien Transform
            var tf = {}; tf[va.cssTf] = M.tlx(-xReset.toFixed(2), '%');
            
            // Loai bo transition cua Timer
            va.$timerItem.stop(true);
            if( is.ts ) M.tsRemove(va.$timerItem);
            
            // Setup Transform cho Timer sau khi loai bo transition
            setTimeout(function() { va.$timerItem.css(tf) }, 1);
        },

        /**
         * SETUP ANIMATION KHI KET THUC TIMER
         */
        lineAnimationEnd : function() {
            var that = this,
                cs   = that.cs,
                va   = that.va;


            // Setup ID Next slide -> De lay speed cua Slide next
            var idNext = cs.idCur + 1;
            if( idNext > cs.num - 1 ) idNext = 0;

            // Setup animate fade
            va.$timerItem
                .stop(true)
                .animate({ 'opacity': 0 }, {

                    duration : va.speed[idNext] - 100,
                    complete : function() {

                        // Them css 'visibility' -> fixed sau khi 'fading' thi tranform vi tri 0
                        va.$timerItem.css({ 'opacity': '', 'visibility': 'hidden' });

                        // Loai bo Transition va reset lai vi tri cho Timer
                        that.lineAnimationReset(100);
                    }
                });
        },




        /**
         * SETUP ANIMATION TREN TIMER ARC
         */
        arcAnimation : function(isRunOne) {
            var that = this,
                va   = that.va,
                ti   = that.ti,
                cs   = that.cs,

                // Setup goc' cong them trong vong lap
                angPlus   = va.arc.speed * 360 / va.delay[cs.idCur],

                // Fn ve cac duong arc trong Timer
                ctx       = va.tContext,
                ARC       = va.arc,
                inFill    = Math.ceil((ARC.radius - ARC.weight) / 2),
                fnArcDraw = function() {

                    // Xoa vu`ng ve~ Canvas truoc tien
                    ctx.clearRect(-ARC.width/2, -ARC.height/2, ARC.width, ARC.height);
                    ctx.globalAlpha = 1;
                    
                    // Ve~ duong arc o ngoai`
                    ctx.beginPath();
                    ctx.lineCap = 'round';
                    ctx.arc(0, 0, ARC.radiusOuter, 0, ARC.pi*360, false);
                    ctx.lineWidth   = ARC.weightOuter;
                    ctx.strokeStyle = ARC.strokeOuter;
                    ctx.fillStyle   = ARC.fillOuter;
                    ctx.stroke();
                    ctx.fill();

                    // Ve~ duong Fill arc o trong
                    ctx.beginPath();
                    ctx.arc(0, 0, inFill + 1, 0, ARC.pi * Math.ceil(ARC.angCur*10)/10, false);
                    ctx.lineWidth   = inFill * 2 + 2;
                    ctx.strokeStyle = ARC.fill;
                    ctx.stroke();

                    // Ve~ duong Stroke arc o trong
                    ctx.beginPath();
                    ctx.arc(0, 0, ARC.radius, 0, ARC.pi * ARC.angCur, false);
                    ctx.lineWidth   = ARC.weight;
                    ctx.strokeStyle = ARC.stroke;
                    ctx.stroke();

                    // Setup goc cua arc hien tai
                    va.arc.angCur += angPlus;
                    if( va.arc.angCur > 370 ) {
                        clearInterval(ti.timer);
                    }
                };


            /**
             * SETUP VONG LAP DE VE~ TIMER ARC
             *  + Truoc tien loai bo timer ve~ duong arc fading
             */
            clearInterval(ti.timer);
            is.enableTimerAnimEnd = true;

            if( !!isRunOne ) fnArcDraw();
            else             ti.timer = setInterval(fnArcDraw, va.arc.speed);
        },

        /**
         * SETUP ANIMATION TIMER ARC SAU KHI KET THUC
         */
        arcAnimationEnd : function() {
            var that = this,
                va   = that.va,
                ti   = that.ti,
                cs   = that.cs,

                // Setup chi? so' alpha can` phai tru trong vong lap
                fps        = 30,
                delay      = 1000 / fps,
                speedMinus = va.speed[cs.idCur] >= 600 ? 400 : 100,     // Thoi gian gia?m them
                speedCur   = va.speed[cs.idCur] - speedMinus,
                nStep      = speedCur / delay - 1,
                alphaCur   = 1,
                delayCur   = 0,
                alphaMinus,

                // Fn ve cac duong arc trong Timer
                ctx       = va.tContext,
                ARC       = va.arc,
                inFill    = Math.ceil((ARC.radius - ARC.weight) / 2),
                fnArcDraw = function() {

                    // Xoa vu`ng ve~ Canvas truoc tien
                    ctx.clearRect(-ARC.width/2, -ARC.height/2, ARC.width, ARC.height);
                    
                    // Ve~ duong arc o ngoai`
                    ctx.globalAlpha = 1;
                    ctx.beginPath();
                    ctx.arc(0, 0, ARC.radiusOuter, 0, ARC.pi*360, false);
                    ctx.lineWidth   = ARC.weightOuter;
                    ctx.strokeStyle = ARC.strokeOuter;
                    ctx.fillStyle   = ARC.fillOuter;
                    ctx.stroke();
                    ctx.fill();

                    // Ve~ duong Fill arc o trong
                    ctx.globalAlpha = parseFloat(alphaCur.toFixed(3));
                    ctx.beginPath();
                    ctx.arc(0, 0, inFill + 1, 0, ARC.pi * Math.ceil(ARC.angCur*10)/10, false);
                    ctx.lineWidth   = inFill * 2 + 2;
                    ctx.strokeStyle = ARC.fill;
                    ctx.stroke();

                    // Ve~ duong Stroke arc o trong
                    ctx.beginPath();
                    ctx.arc(0, 0, ARC.radius, 0, ARC.pi * ARC.angCur, false);
                    ctx.lineWidth   = ARC.weight;
                    ctx.strokeStyle = ARC.stroke;
                    ctx.stroke();

                    // Setup alpha can phai tru`
                    delayCur  += delay;
                    alphaMinus = $.easing.easeOutQuad(null, delayCur, 0, 1, speedCur);
                    alphaCur   = 1 - alphaMinus;
                    nStep--;

                    // Setup alpha cua duong arc
                    if( alphaCur <= 0.01 || nStep < 0  ) {
                        clearInterval(ti.timer);
                        is.enableTimerAnimEnd = true;
                        va.arc.angCur = 0;
                    }
                };


            /**
             * VONG LAP DE ANIMATION
             *  + Bien 'enableTimerAnimEnd' -> fixed khi swap slide lien tuc nhung Animation End cua timer van lap lai.
             */
            if( is.enableTimerAnimEnd ) {
                is.enableTimerAnimEnd = false;

                clearInterval(ti.timer);
                ti.timer = setInterval(fnArcDraw, delay);
            }
        },




        /**
         * SETUP TIMER WHEN STOP
         */
        stop : function() {
            var that = this, tf = {};
            varibleModule(that);

            /**
             * SETUP STOP SLIDESHOW TREN CAC LOAI TIMER
             */
            switch(va.timer) {
                case 'line' :

                    // Loai bo chuyen dong Animation
                    if( is.ts ) va.$timerItem.css(va.cssDEmpty);
                    else        va.$timerItem.stop(true);
                    
                    // Setup gia tri Transform
                    va.xTimer = va.tDelay / va.delay[cs.idCur] * 100;
                    tf[va.cssTf] = M.tlx(-va.xTimer.toFixed(2), '%');
                    
                    // Setup transform len Timer
                    setTimeout(function() { that.va.$timerItem.css(tf) }, 1);
                    break;


                case 'arc' :
                    // Setup ve goc hien tai cua Timer
                    va.arc.angCur = 360 - (va.tDelay / va.delay[cs.idCur] * 360);
                    // Ve lai Timer
                    that.arcAnimation(true);
                    // Xoa bo vong lap de ve duong arc trong Timer
                    clearInterval(ti.timer);
                    break;
            };
        }
    };
})(jQuery);







/**
 * MODULE AJAX
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE AJAX
     */
    rt01MODULE.AJAX = {

        // Kiem tra slide co phai load ajax hay khong
        check : function(opt, $sl) {

            var that   = this,
                slData = $sl.data();

            if( !!opt.media && typeof opt.media.ajax == 'string' ) {
                $sl.data('isAjax', true);

                // Kiem tra slide co tu dong load neu khong co pagItem o tabs
                // if( that.o.isPag && that.is.pagTabs && slData.isPagEmpty ) $sl.data('isAjaxAutoLoad', true);
            }
        },


        // Loai bo slide co load-ajax ra khoi danh sach load lien tiep luc dau
        removeAutoLoad : function(IDToLoad) {
            var that    = this,
                newLoad = [];

            // Tao 1 mang moi, neu khong phai load ajax thi ID do' push vao mang moi
            for( i = 0; i < IDToLoad.length; i++ ) {

                // Bien is trong data slide
                var slData = that.va.$s.eq(i).data();

                // Neu khong co ajax hoac co co ajax roi ma khong co pagItem thi tu dong load
                if(  !slData.isAjax ) newLoad.push(IDToLoad[i]);
            }

            // Tra ve mang sau khi loai bo id co load ajax
            return newLoad;
        },


        // Lay noi dung tu URL
        get : function($sl) {

            // Bien khoi tao ban dau
            var that   = this,
                url    = $sl.data('mediaAjax'),
                slData = $sl.data(),

                fnLoadEnd = function() {

                    // Luu gia tri load bang AJAX
                    $sl.data('loadBy', 'ajax');

                    // Tiep tiep setup slide neu load xong
                    that.LOAD.slideBegin($sl);
                },

                settings  = {
                    type       : 'GET',
                    cache      : false,
                    beforeSend : function() {

                        // Bien nhan biet slide dang loading
                        $sl.data('isLoading', true);
                    },
                    success : function(data) {

                        // Chen them vao noi dung lay duoc vao slide
                        $sl.html( $sl.html() + data);

                        // Cap nhap lai loader
                        var $loader = $sl.find('.'+ that.va.ns +'loader');
                        if( $loader.length ) $sl.data('$slLoader', $loader);

                        // Bat dau setup noi dung lay duoc
                        fnLoadEnd();
                    },
                    error : function() {

                        // Set bien de co the load ajax lai
                        $sl.data('isLoaded', false);
                        fnLoadEnd();
                    }
                };

            // Setup ajax
            $.ajax(url, settings);
        }
    };
})(jQuery);







/**
 * MODULE FULLSCREEN
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE FULLSCREEN
     */
    rt01MODULE.FULLSCREEN = {

        varible : function() {
            var that = this,
                va   = that.va,
                M    = that.M;

            // width/height content: de biet ti le
            va.wContent = va.wCode - (va.pa.left*2);
            va.hContent = M.r(va.wContent / va.rRes);

            // Truong hop: content nho hon page
            if( va.hContent < va.hCode ) {

                va.pa.top = M.r( (va.hCode - va.hContent) / 2 );
            }

            // Truong hop nguoc lai: content lon hon page
            // --> setup hContent = height page, tinh toan lai va.rate va padding
            else {
                va.pa.top = 0;
                va.hContent = va.hCode;
                va.wContent = M.r(va.hContent * va.rRes);

                va.rate = va.wContent / va.wRes;
                va.pa.left = M.r( (va.wCode - va.wContent)/2 );
            }
        }
    };
})(jQuery);







/**
 * MODULE NESTED
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE NESTED
     */
    rt01MODULE.NESTED = {

        // Tu dong khoi tao lai Code nested trong 'api add slide'
        autoInit : function($slCur) {

            var $codeNested = $slCur.find('.'+ this.va.ns);
            rt01MODULE.AUTOINIT($codeNested);
        },


        // Loai bo Code nested trong slide hien tai khi su dung api-remove
        destroy : function($slCur) {
            var that = this;

            // Kiem tra co code nested hay khong
            var $nested = $slCur.find('.'+ that.va.ns);
            if( $nested.length ) {

                var nestedData = $nested.data(rt01VA.codeName);
                nestedData = that.M.stringToObject(nestedData);
                $.isPlainObject(nestedData) && !$.isEmptyObject(nestedData) && nestedData.destroy(true);
            }
        },



        /**
         * REFRESH CAC GIA TRI CUA CODE NESTED TRONG SLIDE HIEN TAI
         */
        refreshInSlide : function($slCur) {
            var that = this,
                va   = that.va,
                $codeNested = $slCur.find('.'+ va.ns);


            // Kiem tra trong tung Code Nested neu co
            $codeNested.each(function() {
                var $self = $(this),
                    code  = $self.data(rt01VA.codeName);

                // Chi ap dung cho Code dang hoat do.ng
                if( !!code ) {

                    // Refresh lai Code Nested cho Width hoac Height < 10
                    if( code.one.va.wCode < 10 || code.one.va.hCode < 10 ) code.refresh();
                }
            });
        }
    };
})(jQuery);







/**
 * MODULE CLASSADD
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE CLASSADD
     */
    rt01MODULE.CLASSADD = {

        // Kiem tra va luu tru classAdd cua tung slide
        filter : function(opt) {

            var classAdd = '';
            if( opt.classAdd != undefined ) {

                // Dam bao chuyen doi sang chuoi
                classAdd = opt.classAdd.toString();
            }
            return classAdd;
        },


        // Toggle class tren Code khi switch slide
        toggle : function() {
            var va = this.va,
                cs = this.cs;

            var classLast = va.classAdd[cs.idLast],
                classCur  = va.classAdd[cs.idCur];

            // Loai bo class cu va add class moi
            if( classLast != undefined && classLast != '' ) va.$self.removeClass(classLast);
            if( classCur  != undefined && classCur  != '' ) va.$self.addClass(classCur);
        }
    };
})(jQuery);







/**
 * MODULE HIDE-SHOW
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var that, o, va, is,
        varibleModule = function(self) {
            that = self;
            o    = self.o;
            va   = self.va;
            is   = self.is;
        };


    /**
     * MODULE SHOW - HIDE CODE
     */
    rt01MODULE.SHOW = {

        /**
         * SETUP SHOW-HIDE TRONG INIT CODE
         *  + Kiem tra Code co o che do sleep(option 'show', 'showInRange') hay khong
         */
        setupInit : function() {
            varibleModule(this);

            /**
             * SETUP SHOW-HIDE TREN THIET BI 'DESKTOP' & 'MOBILE'
             */
            var isShowCode = true;
            if( (is.mobile && o.showBy == 'desktop')
            ||  (!is.mobile && o.showBy == 'mobile') ) isShowCode = false;

            if( isShowCode ) {

                /**
                 * TIEP TUC SETUP OPTION SHOW-FROM
                 */
                that.setupVars();
                that.check();

                // Chuyen sang INIT.ready hoac dang ki event resize
                is.awake ? that.INIT.ready() : that.resizeON();
            }

            // Loai bo Code neu thiet bi hien thi khong du'ng
            else va.$self.remove();
        },



        /**
         * SETUP CAC BIEN CUA SHOW-HIDE
         * @param array va.showInRange
         * @param boolean is.showCode
         */
        setupVars : function() {
            varibleModule(this);
            var M = that.M;


            /**
             * SETUP BIEN SHOWFROM
             */
            if( !!o.showInRange ) {

                /**
                 * FUNCTION CHUYEN DOI BIEN THANH DOI TUONG RANGE
                 * @return object chain
                 */
                var fnChain2 = function(val) {
                    
                    if( $.isNumeric(val) )            val = [[val, 100000]];
                    else if( M.elesIsNumber(val, 2) ) val = [val];

                    // Kiem tra gia tri co phai Array hay khong de tiep setup
                    if( !$.isArray(val) ) return false;


                    var chain = { num : val.length };
                    for( i = chain.num-1; i >= 0; i-- ) {
                        var a = val[i];

                        // Bo sung gia tri cua con thieu
                        if( $.isNumeric(a) ) a = [a, 100000];

                        // Bien doi gia tri cua bie'n thanh cac thanh phan khac cua 'chain'
                        chain[i] = { 'from': M.pInt(a[0]), 'to': M.pInt(a[1]) };
                    }
                    return chain;
                };

                // Setup bien 'showInRange' thanh doi tuo.ng range
                va.showInRange = fnChain2(o.showInRange);
            }

            // Default setup: if no showInRange value
            else {
                is.showInRange = is.awake = true;
            }
        },




        /**
         * KIEM TRA CODE CO HIEN THI TRONG KICH THUOC WINDOW HIEN TAI
         * @param boolean is.showInRange
         * @param boolean is.wake
         */
        check : function() {
            varibleModule(this);
            var range = va.showInRange;


            /**
             * SETUP BIEN 'is.showInRange'
             */
            if( $.isPlainObject(va.showInRange) ) {
                is.showInRange = false;

                // Kiem tra trong ma?ng va.showInRange
                for( i = range.num-1; i >= 0; i-- ) {
                    if( that.M.matchMedia(range[i].from, range[i].to) ) {
                        is.showInRange = true;
                        break;
                    }
                }
            }


            /**
             * SETUP BIEN 'is.awake'
             *  + Code is sleep --> Code not init, not setup
             */
            if( is.awake === undefined && is.showInRange ) is.awake = true;
        },




        /**
         * TOGGLE CLASS 'NONE' TREN CODE
         */
        toggle : function() {
            varibleModule(this);

            // Show: check
            that.check();

            // Toggle class 'none' tren code
            var hide = va.ns +'none';
            va.$self[(is.showInRange ? 'remove' : 'add') + 'Class'](hide);
        },




        /**
         * EVENT RESIZE
         */
        resizeON : function() {
            var that = this,
                va   = that.va,
                is   = that.is,
                ti   = that.ti;

            va.$self.addClass(va.ns +'none');
            $(window).on('resize.codeShow'+ va.codekey, function() {

                clearTimeout(ti.showResize);
                ti.showResize = setTimeout(function() {

                    that.check();
                    is.awake && that.resizeOFF();
                }, 200);
            });
        },

        resizeOFF : function() {
            varibleModule(this);

            $(window).off('resize.codeShow'+ va.codekey);
            va.$self.removeClass(va.ns +'none');

            // Init ready when Code awake
            that.INIT.ready();
        }
    };
})(jQuery);







/**
 * MODULE DEEPLINKING
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE DEEPLINGING
     */
    rt01MODULE.DEEPLINKING = {

        /**
         * TRA LAI GIA TRI HASH (ID) TREN DIA CHI TRANG WEB
         */
        hashReturn : function(isIDReturn) {

            var that      = this,
                va        = that.va,
                is        = that.is,
                oDeeplink = that.o.deeplinking,

                // Lua chon prefix Custom va prefix Mac dinh --> uu tien prefix Custom
                prefix0   = oDeeplink.prefixDefault[0] + va.codeID + oDeeplink.prefixDefault[1],
                codeName  = oDeeplink.prefix != null ? oDeeplink.prefix : prefix0,

                reStr     = codeName +'\\d+',
                re        = new RegExp(reStr, 'g'),
                hash      = window.location.hash,
                linkCheck = hash.match(re),
                idReturn;


            // Kiem tra va tra ve id-text cua last slide tren hash
            var fnIDTextOnHash = function() {
                if( !!oDeeplink.isIDConvert ) {
                    for( i = 0; i < va.IDsOnDom.length; i++ ) {

                        var idCur = va.IDsOnDom[i];
                        if( idCur != undefined && hash.indexOf(idCur.toString()) != -1 ) {
                            return i;
                        }
                    }
                }
                return null;
            };



            // Tra lai ket qua ID nhan duoc tu hash
            if( isIDReturn ) {

                // Uu tien doc id-text truoc
                idReturn = fnIDTextOnHash();
                if( idReturn != null ) return idReturn;

                // Neu khong co id-text thi tiep tuc kiem tra theo dang 'codeID_slideID'
                if( linkCheck != null ) {
                    idReturn = that.M.pInt( linkCheck[0].substr(codeName.length) );

                    // Dat lai idBegin neu nho hon idReturn < num
                    if( idReturn < that.cs.num ) return idReturn;
                }
                // Tra lai gia tri null neu khong hop le
                return null;
            }



            // Kiem tra va tra lai gia tri Hash moi' thay the cho hash hien tai
            // 1. Truoc tien kiem tra hashLast co ton tai tren HASH hay khong
            // 2. Setup de lay hashCur
            // 3. Thay the hashLast bang hashCur hoac khong co hashLast thi them hashCur vao HASH
            else {

                var hashCur = null, hashLast = null;


                /**
                 * PHAN 1: LAY HASHLAST
                 * @param string hashLast
                 */
                // Lay id tren hash co trung voi ID-Dom cua cac Slide hay khong
                idReturn = fnIDTextOnHash();
                if( idReturn != null ) hashLast = va.IDsOnDom[idReturn];

                // Neu khong co hashLast id-text thi tiep tuc tim kiem dang 'codeID_slideID'
                if( hashLast === null && linkCheck != null ) hashLast = linkCheck[0];



                /**
                 * PHAN 2: LAY HASHCUR
                 * @param string hashCur
                 */
                var idTextCur = va.IDsOnDom[that.cs.idCur];
                if( !!oDeeplink.isIDConvert && idTextCur != undefined ) {
                    hashCur = idTextCur;
                }
                if( hashCur === null ) {
                    hashCur = !!oDeeplink.isOnlyShowID ? '' : (codeName + that.cs.idCur);
                }



                /**
                 * PHAN 3: CHUYEN DOI GIUA HASHCUR VA HASHLAST
                 * @param string hash
                 */
                // Neu hashLast khong ton tai: cong hashCur vao HASH hien tai
                // HashCur phai khac empty
                if( hashLast === null ) {
                    if( hashCur != '' ) {

                        // Neu khong co hash --> cong them dau '#'
                        // Neu co hash cuo'i cung` --> cong vao tiep theo
                        // Them dau '-' cho multi hash --> de doc hon
                        if( hash == '' )            hash = '#'+ hashCur;
                        else if( hash == '#' )      hash += hashCur;
                        else if( /\+$/.test(hash) ) hash += hashCur;
                        else                        hash += '+'+ hashCur;
                    }
                }

                // Neu hashLast ton tai: thay the hashLast bang hashCur
                else {
                    hash = hash.replace(hashLast, hashCur);
                }

                /**
                 * THANH PHAN CUA HASH NEU O TRONG CAC TRUONG HOP SAU
                 *  + Thay the dau '#+' o dau bang '#'
                 *  + Thay the dau '+' o cuoi bang ''
                 *  + Thay the dau '++' thanh '+'
                 */
                hash = hash.replace(/^#\+/g, '#').replace(/\+$/g, '').replace(/\++/g, '+');

                // Cuoi cung tra lai gia tri Hash
                return hash;
            }
        },



        // Doc id tu link trang page --> di toi slide do
        read : function() {
            var that  = this,
                idCur = that.hashReturn(true);

            if( idCur != null ) {

                // Set lai idCur theo url
                that.cs.idCur = that.va.idBegin = idCur;

                // Update gia tri trong properties: reset lai idCenterMap, loadWay...
                that.PROP.code();
            }
        },


        // Toggle link on browser
        write : function() {

            // Lay gia tri Hash moi tu dia chi trang web
            var that    = this,
                ti      = that.ti,
                hashNew = that.hashReturn(false);



            /**
             * FUNCTION CLASS
             */
            // Function cho phep thay doi Hash 1 lan duy nhat
            var fnHashReset = function() {

                clearTimeout(ti.hashReset);
                ti.hashReset = setTimeout(function() { rt01VA.isStopHashChange = false }, 100);
            },

            // Function thay doi Hash 
            fnHashChange = function() {

                // Ngan hanh dong event 'hashchange' --> tranh lap lai
                rt01VA.isStopHashChange = true;


                /**
                 * SETUP DIA CHI MOI TREN BROWSER
                 *  + Ho~ tro API 'History PushState' --> Khong di chuyen toi DOM
                 */
                if( !!window.history && !!window.history.pushState ) {
                    try      { window.history.pushState(null, null, hashNew); }
                    catch(e) { }
                }
                // Truong hop khong ho tro API 'History PushState' --> Su dung cach thong thuong
                else window.location.hash = hashNew;



                /**
                 * PHUC HOI LAI EVENT HASHCHANGE
                 */
                fnHashReset();
            };



            /**
             * KIEM TRA HASH NEW KHONG TRUNG VOI HASH CU~
             */
            window.location.hash != hashNew && fnHashChange();
        },



        // Event khi hashChange
        events : function() {
            var that = this;

            // Loai bo event roi dang ki lai --> ho tro update
            $(window).off(that.va.ev.hash);
            that.o.isDeeplinking && $(window).on(that.va.ev.hash, function(e) {

                // Ngan browser load lai trang
                e.preventDefault();
                if( !rt01VA.isStopHashChange ) {

                    // Kiem tra hash change co phai la 'Code' hien tai
                    // --> neu phai thi di toi id cua slide
                    var idCur = that.hashReturn(true);
                    if( idCur != null ) that.TOSLIDE.run(idCur, true, false, true);
                }
            });
        }
    };
})(jQuery);







/**
 * MODULE COOKIE
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    /**
     * MODULE COOKIE
     */
    rt01MODULE.COOKIE = {

        write : function() {
            var that = this,
                date = new Date(),
                name = rt01VA.codeName + that.va.codeID + that.o.cookie.name;

            // Cong them so ngay luu tru va convert theo gio GTM chuan
            date.setTime( date.getTime() + (that.o.cookie.days * 24 * 60 * 60 * 1000) );
            var expires = '; expires='+ date.toGMTString();

            // Ghi hoac update cookie gia tri moi
            document.cookie = name +'='+ that.cs.idCur + expires +'; path=/';
        },
        

        read : function() {

            var that    = this,
                aCookie = document.cookie.replace(/\s+/g, '').split(';'),
                name    = rt01VA.codeName + that.va.codeID + that.o.cookie.name +'=',
                idCur   = null;

            // Kiem tra tat ca cookie
            for( i = 0; i < aCookie.length; i++ ) {
                if( aCookie[i].indexOf(name) == 0 ) idCur = that.M.pInt( aCookie[i].substr(name.length) );
            }

            // Setup idCur neu cookie co luu tru gia tri trong qua khu
            if( idCur != null ) that.cs.idCur = that.va.idBegin = idCur;
        }
    };
})(jQuery);







/**
 * MODULE API MORE
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};

    // Bien toan cuc
    var cs, one, o, va, is, M,

        /**
         * CAP NHAP BIEN TOAN CUC
         */
        varibleModule = function(self) {
            cs    = self;
            one   = self.one;
            o     = self.one.o;
            va    = self.one.va;
            is    = self.one.is;
            M     = self.one.M;
        };


    /**
     * MODULE APIS MORE FUNCTION
     */
    rt01MODULE.APIMORE = {

        // Kiem tra va convert thanh number cho index
        parseIndex : function(index, isAddSlide) {
            var num = this.num;

            // Kiem tra co phai number
            if( /^\-?\d+/g.test(index) ) index = M.pInt(index);

            // Kiem tra index, neu gia tri index khong hop le --> index se la id slide cuoi
            // Slide cuoi cua addSlide khac voi removeSlide
            if( !($.isNumeric(index) && (index >= 0 && index < num)) )
                index = isAddSlide ? num : num-1;

            return index;
        },



        /* Add new slide & remove slide with index
         * Slide va PagItem co cung chung func --> toi uu Code later!!!
        ------------------------------------------------------------------------- */
        fnAddSlide : function(html, index) {
            varibleModule(this);
            var PAG = $.extend({}, rt01MODULE.PAG, one);


            // Kiem tra 'html' co bao gom nguyen SLIDE hay noi dung ben trong SLIDE --> khoi tao $sl du'ng ca'ch
            // 'html' co the la doi tuong jQuery
            var $div   = $(html),
                isWrap = $div.length == 1 && /^(div|article|section)$/ig.test($div[0].tagName),
                $sl    = isWrap ? $div : $('<div/>', { 'html': html });


            // Slide setup markup, va return slide da setup
            // va setup PagItem trong slide
            // Convert chi so index thanh number
            $sl   = one.RENDER.slide($sl);
            index = cs.parseIndex(index, 1);



            // SLIDE SETUP: append to code with index
            var isIDEnd = index == cs.num;
            if( isIDEnd ) { va.$canvas.append($sl) }
            else {
                // Them slide moi vao phia truoc slide index
                va.$s.eq(index).before($sl);

                // Varible $s reset thu tu
                va.$s = va.$canvas.children('.'+ va.ns + o.nameSlide);
            }



            // PAGITEM SETUP
            if( is.pag ) {

                // Lay noi dung ben trong cua capitem va PagItem
                one.RENDER.capPagHTML($sl);

                // Them PagItem vao pagination
                var pagAdd = PAG.renderPagItem($sl);

                // Add PagItem vao pagination
                if( isIDEnd ) va.$pagInner.append(pagAdd);
                else {
                    // Mac dinh them PagItem moi phia truoc PagItem index
                    va.$pagItem.eq(index).before(pagAdd);

                    // Varible va.$pagItem reset thu tuong
                    va.$pagItem = va.$pagInner.children('.'+ va.ns +'PagItem');
                }

                // Them event click vao PagItem
                PAG.eventTap();
            }


            // ID toggle class actived --> Ho tro khi index trung voi idCur
            if( index == cs.idCur ) cs.idLast = cs.idCur + 1;


            // Kiem tra co phai load Nearby hay khong
            // Load nearby khong can chay. fx can thiet --> tam dung load
            if( o.load.isLazy ) cs.refresh();

            // Load binh thuong
            else {

                // Properties Code & slide: resetup
                is.apiAdd = true;           // De cac func khac biet update Code bang apiAdd
                one.PROP.code();            // Setup prop truoc --> trong khi load image
                one.PROP.slides();

                // Cuoi cung LOAD begin
                $sl.data('loadBy', 'apiAdd');
                one.LOAD.slideBegin($sl);
            }


            // Kiem tra 'code nested' --> khoi tao lai code trong slide
            var NESTED = $.extend({}, rt01MODULE.NESTED, one);
            is.NESTED && NESTED.autoInit($sl);
        },

        getFromURL : function(url, index) {
            var one = this.one;

            // Bien khoi tao ban dau
            var settings = {
                    type    : 'GET',
                    cache   : false,
                    crossDomain : true,
                    success : function(data) { one.fnAddSlide(data, index); },
                    error   : function()     { one.M.message('ajax load failed', url); }
                };

            // Setup ajax
            $.ajax(url, settings);
        },

        addSlide : function(obj, index) {
            varibleModule(this);

            // Dieu kien add: phai co it nhat 1 slide
            if( cs.num > 0 ) {

                // Function class Chen` Slide core
                var fnAddSlide = function(html) { cs.fnAddSlide(html, index); };


                // Neu 'obj' la string --> chuyen doi qua jquery selector hoac tai ajax
                if( typeof obj == 'string' && obj != '' ) fnAddSlide(obj);

                // Neu 'obj' la doi tuong {}
                else if( typeof obj == 'object' ) {
                    
                    // Add slide bang ajax --> load ajax truoc
                    if( obj.ajax != undefined && typeof obj.ajax == 'string' ) cs.getFromURL(obj.ajax, index);

                    // Add slide bang doi tuong jquery
                    else if( obj instanceof jQuery ) fnAddSlide(obj);
                    
                    // Add slide bang html
                    else if( obj.html != undefined && typeof obj.html == 'string' ) fnAddSlide($(html));
                }
            }
        },


        removeSlide : function(aIndex) {
            varibleModule(this);

            // Dieu kien remove: phai co it nhat 2 slide
            if( cs.num > 1 ) {

                // Bien de cac func khac nhan biet loai bo slide
                is.apiRemove = true;

                // Neu la` xoa slide khong co' index --> Tu dong chuyen sang ma?ng
                if( !$.isArray(aIndex) ) {
                    // Chuyen thanh ma?ng co 1 value
                    aIndex = [aIndex];
                    // Setup idCur: idCur cuoi, remove se lay bot --> idCur chuyen sang id phia truoc
                    if( cs.idCur == cs.num-1 ) {
                        cs.ev.trigger('beforeSwapIDCur');
                        cs.idCur = cs.num-2;
                        cs.ev.trigger('afterSwapIDCur');
                    }
                }
                // Neu aIndex la ma?ng
                else {
                    // Chuyen idCur sang slide dau tien
                    cs.ev.trigger('beforeSwapIDCur');
                    cs.idLast = cs.idCur = 0;
                    cs.ev.trigger('afterSwapIDCur');
                    // Toggle slide --> loai bo actived tren slide hien tai
                    M.toggleSlide();
                }
                

                // Setup tat ca? cac id cung luc
                for( var i = 0, len = aIndex.length; i < len; i++ ) {
                    // Convert index thanh number
                    var index  = cs.parseIndex(aIndex[i], 0),
                        $slCur = va.$s.eq(index);

                    // Kiem tra code nested co trong slide hay khong --> remove event resize truoc
                    var NESTED = $.extend({}, rt01MODULE.NESTED, one);
                    is.NESTED && NESTED.destroy($slCur);

                    // Remove slide from Code va setup lai var $s
                    $slCur.remove();
                    
                    // Remove PagItem form pagination va setup lai var $pagItem
                    if( is.pag ) va.$pagItem.eq(index).remove();
                }


                // Reset lai bie'n slide va` pagItem
                va.$s = va.$canvas.children('.'+ va.ns + o.nameSlide);
                if( is.pag ) va.$pagItem = va.$pag.find('.'+ va.ns +'pagitem');

                // Lam moi cac thuoc tinh khac trong Code
                cs.refresh();
                is.apiRemove = false;
            }
        },




        /* Sap xep lai thu tu cac slide
        ------------------------------------------------------------------------- */
        orderSlide : function(inOrder) {
            varibleModule(this);
            var num          = cs.num,
                isRightOrder = true;    // Bien nhan biet thu' tu. sa'p xep' hop le.

            
            /**
             * SETUP NEU "INORDER" LA OBJECT {}
             */
            if( num > 1 && $.isPlainObject(inOrder)) {

                // Bien khoi tao va shortcut ban dau
                var aCheck = [],

                    // Function kiem tra so' co hop le. hay khong
                    fnCheckNum = function(n) {
                        return (/^\d+/g.test(n) && M.pInt(n) >= 0 && M.pInt(n) < num);
                    },
                    
                    // Function chuyen doi gia tri trong array
                    fnSwapValueInAarray = function(arr, pOld, pNew) {
                        var temp = arr[pNew];
                        arr[pNew] = arr[pOld];
                        arr[pOld] = temp;
                    };


                // BUOC 1: Tao ma?ng vi tri ban dau cua slide co' thu tu. tang dan
                for( var i = 0; i < num; i++ ) { aCheck.push(i) }

                // BUOC 2: Vong lap lay tung key item trong object
                for( var key in inOrder ) {
                    var val = inOrder[key], pOld, pNew;
                    if( fnCheckNum(key) && fnCheckNum(val) ) {

                        // Tim kie'm vi tri cua key --> chuyen doi vi tri cu~ va moi'
                        pOld = $.inArray(M.pInt(key), aCheck);
                        fnSwapValueInAarray(aCheck, pOld, M.pInt(val));
                    }
                }

                // BUOC 3: Chuyen object thanh ma?ng
                inOrder = aCheck;
            }


            /**
             * SETUP NEU "INORDER" LA ARRAY []
             */
            else if( num > 1 && $.isArray(inOrder) && inOrder.length == num ) {
                var aCheck = $.extend([], inOrder);

                for( var i = 0, poped; i < num; i++ ) {
                    poped = aCheck.pop();
                    if( !$.isNumeric(poped) || $.inArray(poped, aCheck) != -1 || poped < 0 || poped >= num ) {
                        isRightOrder = false;
                        break;
                    }
                }
            }
            else isRightOrder = false;



            // Kiem tra truoc khi sap xep
            if( isRightOrder ) {

                // Truoc tien: loai bo toan bo slide
                va.$s.detach();
                is.pag && va.$pagItem.detach();

                // Sau do: Chen cac slide theo thu tu moi
                for( var i = 0; i < num; i++ ) {
                    var idSwap = inOrder[i];
                    va.$canvas.append(va.$s.eq(idSwap));
                    is.pag && va.$pagInner.append(va.$pagItem.eq(idSwap));
                }

                // Reset lai doi tuo.ng SLIDE
                va.$s = va.$canvas.children('.'+ va.ns + o.nameSlide);
                // Reset lai doi tuong va them event vao PAGITEM
                if( is.pag ) va.$pagItem = va.$pag.find('.'+ va.ns +'pagitem');
                // Reset lai id current
                cs.ev.trigger('beforeSwapIDCur');
                cs.idCur = $.inArray(cs.idCur, inOrder);
                cs.ev.trigger('afterSwapIDCur');

                // Reset va update lai ca'c bien va thuoc tinh
                cs.prop();
            }

            // Thong bao loi neu ma?ng khong du'ng
            else M.message('array or object order not right');
        },




        /* Dang ki va loai bo swipe event
        ------------------------------------------------------------------------- */
        swipeEvent : function(status) {
            var that = this;

               typeof status == 'string'
            && ('onBody onPag offBody offPag').indexOf(status) != -1
            && that.is.SWIPE && that.SWIPE.events(status);
        },





        /* Sap' xep lai slide bang phuong phap menu-sortable
        ------------------------------------------------------------------------- */
        sortableBegin : function() {
            varibleModule(this);
            var ns = ' '+ va.ns;


            // Loai bo het cac' event tren PagItem
            cs.destroy();

            // Them class moi vao` PagItem
            va.$pag.addClass(ns +'sortable');

            // Loai bo vi tri cua PagItem
            var $pagInner = va.$pagInner,
                wPag      = $pagInner.width(),
                hPag      = $pagInner.height();

            $pagInner.removeClass(ns +'hfit'+ ns +'wfit').css({'width': '', 'height': ''});
            va.$pagItem.removeAttr('style').css({'width': wPag, 'height': hPag});
        },

        sortableEnd : function() {
        },

        sortable : function(status) {
            varibleModule(this);

            // API chi hoat dong khi co' PAGINATION
            if( o.isPag ) {
                if     ( status == 'begin' ) cs.sortableBegin();
                else if( status == 'end' )   cs.sortableEnd();
            }
        }
    };
})(jQuery);







/**
 * MODULE SUPPORT OLD BROWSER
 * ========================================================================== */
(function($) {
    
    // Kiem tra bien module
    if( !window.rt01MODULE ) window.rt01MODULE = {};


    /**
     * NHUNG FUNCTION HO TRO OLD BROWSER
     */
    rt01MODULE.OLD = {
        arrayIndex : function() {

            // Phien ban? rut gon, khong ho tro 'fromIndex'
            Array.prototype.indexOf = function(elt) {
                var len  = this.length >>> 0,
                    from =  0;

                for( ; from < len; from++ ) {
                  if (from in this && this[from] === elt)
                    return from;
                }
                return -1;
            };
        },

        replaceAt : function() {

            // Thay the ki tu bang func substr
            // Mac dinh thay the 1 ki tu, them tuy chon so luong ki tu thay the
            String.prototype.replaceAt = function(_newStr, _index, _nChar) {
                // Mac dinh thay the 1 ki tu
                if( _nChar === undefined ) _nChar = 1;

                return this.substr(0, _index) + _newStr + this.substr(_index + _nChar);
            }
        }
    };
})(jQuery);