webpackJsonp([0],{

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.get = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* config */].baseUrl + '/state';
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    HomeService.prototype.getStatus = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* config */].baseUrl + '/status';
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    HomeService.prototype.post = function (text) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* config */].baseUrl + '/txs';
        var senderName = sessionStorage.getItem('name');
        var bodyObject = {
            sender: senderName,
            message: text
        };
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.enter = function () {
        console.log('button clcked');
        sessionStorage.setItem('name', this.name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <ion-col width-67>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <div class="login-box">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              <ion-item>\n                <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="name" ></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" (click)="enter()">Enter</button>\n          </ion-col>\n        </ion-row>\n        \n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var connect = __webpack_require__(777);
var HomePage = (function () {
    function HomePage(navCtrl, homeService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.homeService = homeService;
        this.loadingCtrl = loadingCtrl;
        this.senderName = '';
        this.allData = null;
        this.senderName = sessionStorage.getItem('name');
        this.con = this.loadingCtrl.create({
            content: 'Blockchain Synching ....'
        });
        this.con.present();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(4000).subscribe(function (x) {
            // console.log('get message');
            // async function main() {
            //   let { state, send } = await connect(null, { 
            //     genesis: require('./genesis.json'),
            //     nodes: [ 'ws://184.173.1.108:30090','ws://168.1.149.33:30090' ]
            //   })
            //   // console.log(await state)
            //   // this.allData = temp['messages']
            //   // console.log(this.allData)
            // }
            // main()
            _this.homeService.get().subscribe(function (data) {
                data = data['messages'].filter(function (n) { return n != null; });
                _this.allData = data;
                if (_this.scroll) {
                    if (sessionStorage.getItem('allData') === null || sessionStorage.getItem('allData') === undefined) {
                        sessionStorage.setItem('allData', JSON.stringify(_this.allData));
                    }
                    else {
                        _this.temp = sessionStorage.getItem('allData'),
                            _this.temp = JSON.parse(_this.temp);
                        if (_this.temp.length !== _this.allData.length) {
                            sessionStorage.setItem('allData', JSON.stringify(_this.allData));
                            _this.contentScroll.scrollToBottom();
                        }
                    }
                }
            }, function (error) {
                console.log(error);
            });
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(5000).subscribe(function (x) {
            console.log('getting status');
            _this.homeService.getStatus().subscribe(function (data) {
                if (!data['result']['syncing']) {
                    _this.con.dismiss();
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    HomePage.prototype.sendMessage = function () {
        var _this = this;
        console.log('sending message');
        this.homeService.post(this.content).timeout(5000).subscribe(function (data) {
            _this.content = '';
        }, function (error) {
            console.log(error);
            _this.content = '';
        });
        // async function main() {
        //   let { state, send } = await connect(null, { 
        //     genesis: require('./genesis.json'),
        //     nodes: [ 'ws://184.173.1.108:30090','ws://168.1.149.33:30090' ]
        //   })
        //   console.log(await send({ "sender": 'saif',"message":"himom" }))
        //   console.log(await state)
        // }
        // main()
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "contentScroll", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{senderName}}\n    </ion-title>\n    <ion-toggle [(ngModel)]="scroll"></ion-toggle>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="lightGreen">\n  <ng-container *ngIf="allData"> \n  <ion-card *ngFor="let data of allData ">\n        <ion-card-header>\n          {{data.sender}}\n        </ion-card-header>\n        <ion-card-content>\n          {{data.message}}\n        </ion-card-content>\n      </ion-card>\n      </ng-container>\n</ion-content>\n<ion-footer class="chatPageFooter">\n  <ion-toolbar>\n    <ion-item>\n      <ion-label style="margin:0px;"></ion-label>\n      <div item-content style="width:100%;">\n        <ion-textarea placeholder=\'enter your message\' [(ngModel)]="content" (keyup.enter)="sendMessage()"></ion-textarea>\n      </div>\n    </ion-item>\n    <ion-buttons right>\n      <button style="min-width:45px;" (click)="sendMessage()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__home_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(456);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home_service__["a" /* HomeService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = (function () {
    function config() {
    }
    config.baseUrl = "http://tendermint-chat-app-new.au-syd.mybluemix.net";
    return config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saifrehman/Desktop/tendermint-chat-app/frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[451]);
//# sourceMappingURL=main.js.map