webpackJsonp([1,4],{"/fcW":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="/fcW"},0:function(n,t,e){n.exports=e("x35b")},"06vT":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[""]},"1++6":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(n){this._state=n}return Object.defineProperty(n.prototype,"state",{get:function(){return this._state},set:function(n){this._state=n},enumerable:!0,configurable:!0}),n.prototype.isEmpty=function(){return 0===this._state},n.prototype.isRed=function(){return 1===this._state},n.prototype.isYellow=function(){return 2===this._state},n}()},"1A80":function(n,t,e){"use strict";function l(n){return u._15(0,[(n()(),u._16(0,null,null,7,"div",[["class","game row"]],null,null,null,null,null)),(n()(),u._17(null,["\n  "])),(n()(),u._16(0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),u._17(null,["\n    "])),(n()(),u._16(0,null,null,1,"app-grid",[],null,null,null,_.a,_.b)),u._18(57344,null,0,o.a,[s.a],null,null),(n()(),u._17(null,["\n  "])),(n()(),u._17(null,["\n"])),(n()(),u._17(null,["\n"]))],function(n,t){n(t,5,0)},null)}function r(n){return u._15(0,[(n()(),u._16(0,null,null,1,"app-root",[],null,null,null,l,f)),u._18(24576,null,0,a.a,[],null,null)],null,null)}var i=e("Ni5f"),u=e("3j3K"),_=e("5ENv"),o=e("KjhJ"),s=e("cmh8"),a=e("YWx4");e.d(t,"a",function(){return h});var c=[i.a],f=u._14({encapsulation:0,styles:c,data:{}}),h=u._19("app-root",a.a,r,{},{},[])},"5ENv":function(n,t,e){"use strict";function l(n){return y._15(0,[(n()(),y._16(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),y._17(null,["Player 1 turn!"]))],null,null)}function r(n){return y._15(0,[(n()(),y._16(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),y._17(null,["Player 2 turn!"]))],null,null)}function i(n){return y._15(0,[(n()(),y._16(0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),y._17(null,["\n  "])),(n()(),y._16(0,null,null,1,"button",[["class","btn btn-default btn-block"]],null,[[null,"click"]],function(n,t,e){var l=!0,r=n.component;if("click"===t){l=!1!==r.restart()&&l}return l},null,null)),(n()(),y._17(null,["\n    Restart Game\n  "])),(n()(),y._17(null,["\n\n  "])),(n()(),y._16(0,null,null,7,"div",[["class","text-center"]],null,null,null,null,null)),(n()(),y._17(null,["\n    "])),(n()(),y._20(8388608,null,null,1,null,l)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n    "])),(n()(),y._20(8388608,null,null,1,null,r)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n  "])),(n()(),y._17(null,["\n\n"]))],function(n,t){var e=t.component;n(t,8,0,e.game.isPlayerOne()),n(t,11,0,e.game.isPlayerTwo())},null)}function u(n){return y._15(0,[(n()(),y._16(0,null,null,8,"div",[["class","row winner-row"]],null,null,null,null,null)),(n()(),y._17(null,["\n      "])),(n()(),y._16(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),y._17(null,["Player "," has won !"])),(n()(),y._17(null,["\n        "])),(n()(),y._16(0,null,null,2,"button",[["class","col-xs-12 btn again"],["type","button"]],null,[[null,"click"]],function(n,t,e){var l=!0,r=n.component;if("click"===t){l=!1!==r.playAgain()&&l}return l},null,null)),(n()(),y._16(0,null,null,0,"i",[["class","glyphicon glyphicon-equalizer"]],null,null,null,null,null)),(n()(),y._17(null,[" Play again"])),(n()(),y._17(null,["\n    "]))],null,function(n,t){n(t,3,0,t.component.winner)})}function _(n){return y._15(0,[(n()(),y._16(0,null,null,2,"div",[["class","circle"]],null,null,null,null,null)),y._18(139264,null,0,g.g,[y.t,y.u,y.V,y.W],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),y._21(["red","yellow"])],function(n,t){var e=t.component;n(t,1,0,"circle",n(t,2,0,e.game.isPlayerOne(),e.game.isPlayerTwo()))},null)}function o(n){return y._15(0,[(n()(),y._16(0,null,null,4,"div",[["class","selection-case"]],null,[[null,"mouseover"],[null,"click"]],function(n,t,e){var l=!0,r=n.component;if("mouseover"===t){l=!1!==r.show(n.context.index)&&l}if("click"===t){l=!1!==r.add(n.context.index)&&l}return l},null,null)),(n()(),y._17(null,["\n          "])),(n()(),y._20(8388608,null,null,1,null,_)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n        "]))],function(n,t){n(t,3,0,t.context.$implicit.visible)},null)}function s(n){return y._15(0,[(n()(),y._16(0,null,null,5,"div",[["class","case"]],null,[[null,"mouseover"],[null,"click"]],function(n,t,e){var l=!0,r=n.component;if("mouseover"===t){l=!1!==r.show(n.context.index)&&l}if("click"===t){l=!1!==r.add(n.context.index)&&l}return l},null,null)),(n()(),y._17(null,["\n          "])),(n()(),y._16(0,null,null,2,"div",[["class","circle"]],null,null,null,null,null)),y._18(139264,null,0,g.g,[y.t,y.u,y.V,y.W],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),y._21(["white","red","yellow"]),(n()(),y._17(null,["\n        "]))],function(n,t){n(t,3,0,"circle",n(t,4,0,t.context.$implicit.isEmpty(),t.context.$implicit.isRed(),t.context.$implicit.isYellow()))},null)}function a(n){return y._15(0,[(n()(),y._16(0,null,null,4,"div",[["class","row custom-row"]],null,null,null,null,null)),(n()(),y._17(null,["\n        "])),(n()(),y._20(8388608,null,null,1,null,s)),y._18(401408,null,0,g.h,[y._0,y._1,y.t],{ngForOf:[0,"ngForOf"]},null),(n()(),y._17(null,["\n      "]))],function(n,t){n(t,3,0,t.context.$implicit)},null)}function c(n){return y._15(0,[(n()(),y._16(0,null,null,10,"div",[],null,null,null,null,null)),(n()(),y._17(null,["\n      "])),(n()(),y._16(0,null,null,4,"div",[["class","row selection-row"]],null,null,null,null,null)),(n()(),y._17(null,["\n        "])),(n()(),y._20(8388608,null,null,1,null,o)),y._18(401408,null,0,g.h,[y._0,y._1,y.t],{ngForOf:[0,"ngForOf"]},null),(n()(),y._17(null,["\n      "])),(n()(),y._17(null,["\n\n      "])),(n()(),y._20(8388608,null,null,1,null,a)),y._18(401408,null,0,g.h,[y._0,y._1,y.t],{ngForOf:[0,"ngForOf"]},null),(n()(),y._17(null,["\n    "]))],function(n,t){var e=t.component;n(t,5,0,e.pieces),n(t,9,0,e.game.grid)},null)}function f(n){return y._15(0,[(n()(),y._20(8388608,null,null,1,null,i)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n\n"])),(n()(),y._16(0,null,null,10,"div",[["class","grid"]],null,null,null,null,null)),(n()(),y._17(null,["\n  "])),(n()(),y._16(0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(n()(),y._17(null,["\n    "])),(n()(),y._20(8388608,null,null,1,null,u)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n\n    "])),(n()(),y._20(8388608,null,null,1,null,c)),y._18(8192,null,0,g.f,[y._0,y._1],{ngIf:[0,"ngIf"]},null),(n()(),y._17(null,["\n  "])),(n()(),y._17(null,["\n"])),(n()(),y._17(null,["\n"]))],function(n,t){var e=t.component;n(t,1,0,0===e.winner),n(t,8,0,0!==e.winner),n(t,11,0,0===e.winner)},null)}function h(n){return y._15(0,[(n()(),y._16(0,null,null,1,"app-grid",[],null,null,null,f,v)),y._18(57344,null,0,d.a,[b.a],null,null)],function(n,t){n(t,1,0)},null)}var p=e("06vT"),y=e("3j3K"),g=e("2Je8"),d=e("KjhJ"),b=e("cmh8");e.d(t,"b",function(){return v}),t.a=f;var m=[p.a],v=y._14({encapsulation:0,styles:m,data:{}});y._19("app-grid",d.a,h,{},{},[])},7088:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n.prototype.hasFour=function(n,t){for(var e=!1,l=!1;!(e||l||(e=this.checkHorizontal(n,t))||(e=this.checkVertical(n,t))||(e=this.checkDiagUp(n,t)));)e=this.checkDiagDown(n,t),l=!0;return e},n.prototype.checkHorizontal=function(n,t){for(var e=!1,l=0;!e&&l<6;){for(var r=0,i=0;r<4&&i<7;){t[l][i].state===n?r++:r=0,i++}e=4===r,l++}return e},n.prototype.checkVertical=function(n,t){for(var e=!1,l=0;!e&&l<7;){for(var r=0,i=0;r<4&&i<6;){t[i][l].state===n?r++:r=0,i++}e=4===r,l++}return e},n.prototype.checkDiagUp=function(n,t){for(var e=!1,l=0;!e&&l<6;){var r=0,i=void 0;if(l>=0&&l<=2){i=6;for(var u=l;r<4&&u<6;){var _=t[u][i];_.state===n?r++:r=0,u++,i--}}else{i=0;for(var u=l;r<4&&u>=0;){var _=t[u][i];_.state===n?r++:r=0,u--,i++}}e=4===r,l++}return e},n.prototype.checkDiagDown=function(n,t){for(var e=!1,l=0;!e&&l<6;){var r=0,i=void 0;if(l>=0&&l<=2){i=0;for(var u=l;r<4&&u<6;){var _=t[u][i];_.state===n?r++:r=0,u++,i++}}else{i=6;for(var u=l;r<4&&u>=0;){var _=t[u][i];_.state===n?r++:r=0,u--,i--}}e=4===r,l++}return e},n.ctorParameters=function(){return[]},n}()},Iksp:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},KjhJ:function(n,t,e){"use strict";var l=e("cmh8");e.d(t,"a",function(){return r});var r=function(){function n(n){this.pieces=[{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1}],this.winner=0,this._game=n}return n.prototype.add=function(n){var t=this._game.addPiece(n);new Audio("src/app/assets/audio/coin-drop-4.mp3").play(),0===t?this._game.nextPlayer():-1!==t&&(this.winner=t)},n.prototype.show=function(n){this.pieces.map(function(t,e){return t.visible=n===e})},Object.defineProperty(n.prototype,"game",{get:function(){return this._game},enumerable:!0,configurable:!0}),n.prototype.playAgain=function(){this._game.clear(),this.pieces=[{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1},{visible:!1}],this.winner=0},n.prototype.restart=function(){this._game.clear()},n.prototype.ngOnInit=function(){},n.ctorParameters=function(){return[{type:l.a}]},n}()},Ni5f:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[""]},YWx4:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n.ctorParameters=function(){return[]},n}()},cmh8:function(n,t,e){"use strict";var l=e("1++6"),r=e("7088");e.d(t,"a",function(){return i});var i=function(){function n(n){this._grid=[],this._currentPlayer=1;for(var t=0;t<6;t++){for(var e=[],r=0;r<7;r++)e.push(new l.a(0));this._grid.push(e),this._gridManager=n}}return Object.defineProperty(n.prototype,"currentPlayer",{get:function(){return this._currentPlayer},set:function(n){this._currentPlayer=n},enumerable:!0,configurable:!0}),n.prototype.isPlayerOne=function(){return 1===this._currentPlayer},n.prototype.isPlayerTwo=function(){return 2===this._currentPlayer},n.prototype.addPiece=function(n){if(n>=0&&n<this._grid[0].length&&this._grid[0][n].isEmpty()){for(var t=5;!this._grid[t][n].isEmpty();)t--;return this._grid[t][n].state=this._currentPlayer,this._gridManager.hasFour(this._currentPlayer,this._grid)?this._currentPlayer:0}return-1},n.prototype.nextPlayer=function(){this._currentPlayer=1===this._currentPlayer?2:1},Object.defineProperty(n.prototype,"grid",{get:function(){return this._grid},enumerable:!0,configurable:!0}),n.prototype.clear=function(){this._grid=[];for(var n=0;n<6;n++){for(var t=[],e=0;e<7;e++)t.push(new l.a(0));this._grid.push(t)}this._currentPlayer=1},n.ctorParameters=function(){return[{type:r.a}]},n}()},kZql:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,e){"use strict";var l=e("3j3K"),r=e("Iksp"),i=e("2Je8"),u=e("Qbdm"),_=e("NVOs"),o=e("Fzro"),s=e("7088"),a=e("cmh8"),c=e("1A80");e.d(t,"a",function(){return p});var f=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),h=function(n){function t(t){return n.call(this,t,[c.a],[c.a])||this}return f(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new i.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new l.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=l.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=l.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=l.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new u.b(this.parent.get(u.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new u.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new u.e(this.parent.get(u.c)),new u.f(this.parent.get(u.c)),new u.g(this.parent.get(u.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new u.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(l.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new u.i(this.parent.get(u.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new u.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new l.i(this.parent.get(l.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new u.k(this.parent.get(u.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new u.l(this.parent.get(u.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new _.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new o.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new o.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=o.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new o.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new o.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=o.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_GridManagerService_37",{get:function(){return null==this.__GridManagerService_37&&(this.__GridManagerService_37=new s.a),this.__GridManagerService_37},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_GameService_38",{get:function(){return null==this.__GameService_38&&(this.__GameService_38=new a.a(this._GridManagerService_37)),this.__GameService_38},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=u.m(),this._APP_INITIALIZER_2=[l.j,u.n(this.parent.get(u.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new u.p(this.parent.get(u.p,null)),this._ɵba_8=new _.b,this._FormsModule_9=new _.c,this._HttpModule_10=new o.g,this._AppModule_11=new r.a,this._AppModule_11},t.prototype.getInternal=function(n,t){return n===i.b?this._CommonModule_0:n===l.p?this._ErrorHandler_1:n===l.q?this._APP_INITIALIZER_2:n===l.l?this._ApplicationInitStatus_3:n===l.m?this._ɵf_4:n===l.r?this._ApplicationRef_5:n===l.o?this._ApplicationModule_6:n===u.p?this._BrowserModule_7:n===_.b?this._ɵba_8:n===_.c?this._FormsModule_9:n===o.g?this._HttpModule_10:n===r.a?this._AppModule_11:n===l.c?this._LOCALE_ID_12:n===i.c?this._NgLocalization_13:n===l.d?this._Compiler_14:n===l.s?this._APP_ID_15:n===l.t?this._IterableDiffers_16:n===l.u?this._KeyValueDiffers_17:n===u.q?this._DomSanitizer_18:n===l.v?this._Sanitizer_19:n===u.r?this._HAMMER_GESTURE_CONFIG_20:n===u.s?this._EVENT_MANAGER_PLUGINS_21:n===u.h?this._EventManager_22:n===u.i?this._ɵDomSharedStylesHost_23:n===u.j?this._ɵDomRendererFactory2_24:n===l.w?this._RendererFactory2_25:n===u.t?this._ɵSharedStylesHost_26:n===l.i?this._Testability_27:n===u.k?this._Meta_28:n===u.l?this._Title_29:n===_.a?this._ɵi_30:n===o.a?this._BrowserXhr_31:n===o.h?this._ResponseOptions_32:n===o.i?this._XSRFStrategy_33:n===o.d?this._XHRBackend_34:n===o.j?this._RequestOptions_35:n===o.k?this._Http_36:n===s.a?this._GridManagerService_37:n===a.a?this._GameService_38:t},t.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},t}(l.x),p=new l.y(h,r.a)},x35b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("3j3K"),r=e("kZql"),i=e("Qbdm"),u=e("kke6");r.a.production&&e.i(l.a)(),e.i(i.a)().bootstrapModuleFactory(u.a)}},[0]);
//# sourceMappingURL=main.d8fc79b472d922d84d15.bundle.js.map