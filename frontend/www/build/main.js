webpackJsonp([0],{

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeoutWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_config__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_environment_variables_environment_variables_token__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var HomeService = (function () {
    function HomeService(http, envVariables) {
        this.http = http;
        this.envVariables = envVariables;
        console.log('loggggssssssssss', envVariables.apiEndpoint);
    }
    HomeService.prototype.get = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
            })
        });
        var link = this.envVariables.apiEndpoint + '/api/get';
        console.log(link);
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
        var link = this.envVariables.apiEndpoint + '/api/status';
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
        var link = __WEBPACK_IMPORTED_MODULE_6__config_config__["a" /* config */].baseUrl + '/api/post';
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
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__app_environment_variables_environment_variables_token__["a" /* EnvVariables */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], Object])
    ], HomeService);
    return HomeService;
}());

//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvVariables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var EnvVariables = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* OpaqueToken */]("env.variables");
//# sourceMappingURL=environment-variables.token.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(348);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(250);
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
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].interval(2000).subscribe(function (x) {
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
        this.homeService.post(this.content).timeout(2000).subscribe(function (data) {
            _this.content = '';
        }, function (error) {
            console.log(error);
            _this.content = '';
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment_variables_environment_variables_module__ = __webpack_require__(675);
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
                __WEBPACK_IMPORTED_MODULE_10__environment_variables_environment_variables_module__["a" /* EnvironmentsModule */],
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

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = (function () {
    function config() {
    }
    config.baseUrl = "http://tendermint-chat-app.mybluemix.net";
    return config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(347);
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

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export environmentFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_variables_token__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__development__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__production__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qa__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function environmentFactory() {
    // In a real app it's better to use only NODE_ENV or only IONI_ENV, as using both is confusing, but for
    // demonstration purposes I use both here. If NODE_ENV is set to qa, those variables are used, otherwise it
    // checks IONIC_ENV. There's a helper script in package.json called ionic:serve:qa that will set your NODE_ENV
    // and start the app in one command.
    if (process.env.NODE_ENV === 'qa') {
        return __WEBPACK_IMPORTED_MODULE_4__qa__["a" /* qaVariables */];
    }
    return  false ? prodVariables : __WEBPACK_IMPORTED_MODULE_2__development__["a" /* devVariables */];
}
var EnvironmentsModule = (function () {
    function EnvironmentsModule() {
    }
    EnvironmentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__environment_variables_token__["a" /* EnvVariables */],
                    // useFactory instead of useValue so we can easily add more logic to the environment factory.
                    useFactory: environmentFactory
                }
            ]
        })
    ], EnvironmentsModule);
    return EnvironmentsModule;
}());

//# sourceMappingURL=environment-variables.module.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(321)))

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return devVariables; });
var devVariables = {
    apiEndpoint: 'http://localhost:8080',
    environmentName: 'Development Environment',
    ionicEnvName: 'dev'
};
//# sourceMappingURL=development.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prodVariables */
var prodVariables = {
    apiEndpoint: 'https://prod-endpoint.com',
    environmentName: 'Production Environment',
    ionicEnvName: 'prod'
};
//# sourceMappingURL=production.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qaVariables; });
var qaVariables = {
    apiEndpoint: 'https://qa-endpoint.com',
    environmentName: 'QA Environment',
    ionicEnvName: 'qa (Actually NODE_ENV in this case)'
};
//# sourceMappingURL=qa.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map