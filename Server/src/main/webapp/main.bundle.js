webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul .active a {\n    border-right: 2px solid #333;\n}\n\nul .active a:hover {\n    color: white;\n    background-color: #333;\n}\n\n.jumbotron {\n    padding-bottom: 2%\n}\n\nh5 {\n    font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\n    font-style: italic;\n}\n\nfooter {\n    text-align: center;\n    font-family: monospace;\n    font-style: italic\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-inverse  navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"main\">Home</a></li>\n\n            </ul>\n            <ul class=\"nav navbar-nav pull-right\">\n                <li *ngIf=\"isLoggedIn()\" class=\"active\"><a (click)=\"logout()\">Logout</a></li>\n                <li *ngIf=\"!isLoggedIn()\" class=\"active\"><a href=\"login\">Login</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container theme-showcase\" role=\"main\">\n    <div class=\"jumbotron\">\n        <h2>VX Group</h2>\n        <h5>...portal aktuelnih vesti...</h5>\n    </div>\n    <router-outlet></router-outlet>\n</div>\n<footer class=\"navbar navbar-fixed-bottom\">\n    <span id=\"copyright\">Made by Nikola 2017</span>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.logIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/main']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/page/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meni_component_meni_component_component__ = __webpack_require__("../../../../../src/app/meni-component/meni-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_can_activate_auth_guard__ = __webpack_require__("../../../../../src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_token_interceptor_service__ = __webpack_require__("../../../../../src/app/service/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_page_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_meni_component_vest_service__ = __webpack_require__("../../../../../src/app/meni-component/vest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_meni_component_kategorija_service__ = __webpack_require__("../../../../../src/app/meni-component/kategorija.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_save_edit_save_component__ = __webpack_require__("../../../../../src/app/edit-save/edit-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_5__meni_component_meni_component_component__["a" /* MeniComponentComponent */] },
    { path: 'vest/:id', component: __WEBPACK_IMPORTED_MODULE_17__preview_preview_component__["a" /* PreviewComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12_app_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13_app_page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12_app_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13_app_page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_0__page_main_page_main_page_component__["a" /* MainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__meni_component_meni_component_component__["a" /* MeniComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__edit_save_edit_save_component__["a" /* EditSaveComponent */],
            __WEBPACK_IMPORTED_MODULE_17__preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__messages_messages_component__["a" /* MessagesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                enableTracing: false
            })
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_9__service_token_interceptor_service__["a" /* TokenInterceptorService */],
                multi: true
            },
            __WEBPACK_IMPORTED_MODULE_8_app_service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14_app_meni_component_vest_service__["a" /* VestService */],
            __WEBPACK_IMPORTED_MODULE_7__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_6_app_service_jwt_utils_service__["a" /* JwtUtilsService */],
            __WEBPACK_IMPORTED_MODULE_15_app_meni_component_kategorija_service__["a" /* KategorijaService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/edit-save/edit-save.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-save/edit-save.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"add()\">\n    <div class=\"form-group\">\n        <label>category</label>\n        <select [compareWith]=\"byId\" name=\"kategorija\" class=\"form-control\" [(ngModel)]=\"vest.category\">\n        <option *ngFor=\"let kategorija of kategorije\" [ngValue]=\"kategorija\">{{kategorija.name}}</option>  \n      </select>\n    </div>\n    <div class=\"form-group\">\n        <label>title</label>\n        <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"vest.name\" />\n    </div>\n    <div class=\"form-group\">\n        <label>about</label>\n        <textarea type=\"text\" name=\"price\" class=\"form-control\" [(ngModel)]=\"vest.about\"></textarea>\n        <label>contents</label>\n        <textarea type=\"text\" name=\"price\" class=\"form-control\" [(ngModel)]=\"vest.content\"></textarea>\n    </div>\n    <div class=\"pull-right\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"save\" />\n        <input type=\"button\" (click)=\"reset()\" class=\"btn btn-warning\" value=\"reset\" />\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/edit-save/edit-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_vest__ = __webpack_require__("../../../../../src/app/model/vest.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_model_vest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_app_model_vest__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditSaveComponent = (function () {
    function EditSaveComponent() {
        this.addComponentEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
    }
    EditSaveComponent.prototype.ngOnInit = function () {
        this.vest = {
            category: null,
            name: '',
            about: '',
            content: ''
        };
    };
    EditSaveComponent.prototype.add = function () {
        this.addComponentEmitter.next(this.vest);
        this.vest = {
            category: null,
            name: '',
            about: '',
            content: ''
        };
    };
    EditSaveComponent.prototype.reset = function () {
        this.vest = {
            category: null,
            name: '',
            about: '',
            content: ''
        };
    };
    EditSaveComponent.prototype.byId = function (kategorija1, kategorija2) {
        if (kategorija1 && kategorija2) {
            return kategorija1.id === kategorija2.id;
        }
    };
    return EditSaveComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_model_vest__["Vest"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_model_vest__["Vest"]) === "function" && _a || Object)
], EditSaveComponent.prototype, "vest", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _b || Object)
], EditSaveComponent.prototype, "addComponentEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Array)
], EditSaveComponent.prototype, "kategorije", void 0);
EditSaveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-save',
        template: __webpack_require__("../../../../../src/app/edit-save/edit-save.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-save/edit-save.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditSaveComponent);

var _a, _b;
//# sourceMappingURL=edit-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\n          required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\n          required>\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Wrong username or password.\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/meni-component/kategorija.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KategorijaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KategorijaService = (function () {
    function KategorijaService(httpClient) {
        this.httpClient = httpClient;
        this.path = '/api/categories';
    }
    KategorijaService.prototype.getKategorije = function () {
        return this.httpClient.get(this.path);
    };
    return KategorijaService;
}());
KategorijaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], KategorijaService);

var _a;
//# sourceMappingURL=kategorija.service.js.map

/***/ }),

/***/ "../../../../../src/app/meni-component/meni-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/meni-component/meni-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"page\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"button-group pull-right\">\n                <button class=\"btn btn-sm btn-primary\" [disabled]=\"currentPageNumber<1\" (click)=\"changePage(-1)\">\n          <span class=\"glyphicon glyphicon-backward\"></span>\n                </button>\n                <button class=\"btn btn-sm btn-primary\" [disabled]=\"currentPageNumber>=page.totalPages-1\" (click)=\"changePage(1)\">\n          <span class=\"glyphicon glyphicon-forward\"></span>\n                </button>\n            </div>\n            <div *ngIf=\"kategorije\">\n                <form *ngIf=\"isAdmin()\" class=\"form\" (ngSubmit)=\"filter()\">\n                    <b>category</b>\n                    <select name=\"kategorija\" [(ngModel)]=\"kategorija\">\n                        <option class=\"form-control\" *ngFor=\"let category of kategorije\" [ngValue]=\"category\">{{category.name}}</option>  \n                    </select>\n                    <b>title</b> <input name=\"nameItem\" type=\"text\" [(ngModel)]=\"nameItem\">\n                    <button class=\"btn btn-sm btn-success\" (click)=\"submit\">filter</button>\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"resetFilter()\" value=\"resetFilter\">reset</button>\n                </form>\n            </div>\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th>title</th>\n                        <th>category</th>\n                        <th>about</th>\n                        <th *ngIf=\"isAdmin()\">action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let meniItem of page.content\">\n                        <td>{{meniItem.name}}</td>\n                        <td>{{meniItem.category.name}}</td>\n                        <td>{{meniItem.about}} <button *ngIf=\"!isAdmin()\" class=\"btn btn-danger\" [routerLink]=\"['/vest/', meniItem.id]\" class=\"btn btn-primary\">details</button></td>\n\n                        <td>\n\n                            <button class=\"btn btn-danger\" *ngIf=\"isAdmin()\" (click)=\"delete(meniItem)\">delete</button>\n\n\n                            <button class=\"btn btn-warning\" *ngIf=\"isAdmin()\" (click)=\"edit(meniItem)\">edit</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-4\">\n            <app-edit-save *ngIf=\"isAdmin()\" [kategorije]=\"kategorije\" [vest]=\"forEdit\" (addComponentEmitter)=\"addVest($event)\">\n            </app-edit-save>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/meni-component/meni-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_meni_component_vest_service__ = __webpack_require__("../../../../../src/app/meni-component/vest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_meni_component_kategorija_service__ = __webpack_require__("../../../../../src/app/meni-component/kategorija.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeniComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeniComponentComponent = (function () {
    function MeniComponentComponent(authenticationService, vestService, kategorijaService) {
        this.authenticationService = authenticationService;
        this.vestService = vestService;
        this.kategorijaService = kategorijaService;
        this.nameItem = "";
    }
    MeniComponentComponent.prototype.ngOnInit = function () {
        this.currentPageNumber = 0;
        this.loadData();
    };
    MeniComponentComponent.prototype.changePage = function (i) {
        this.currentPageNumber += i;
        this.loadData();
    };
    MeniComponentComponent.prototype.isAdmin = function () {
        return this.authenticationService.isAdmin();
    };
    MeniComponentComponent.prototype.resetFilter = function () {
        window.location.reload();
    };
    MeniComponentComponent.prototype.loadData = function () {
        var _this = this;
        this.vestService.getVestiPage(this.currentPageNumber).subscribe(function (data) {
            _this.page = data;
        });
        this.vestService.getVesti().subscribe(function (vesti) {
            _this.vesti = vesti;
        });
        this.kategorijaService.getKategorije().subscribe(function (kategorije) {
            _this.kategorije = kategorije;
        });
    };
    MeniComponentComponent.prototype.addVest = function (vest) {
        var _this = this;
        this.vestService.saveVest(vest).subscribe(function (savedComp) {
            _this.loadData();
        });
    };
    MeniComponentComponent.prototype.delete = function (vest) {
        var _this = this;
        this.vestService.deleteVest(vest).subscribe(function (response) {
            _this.loadData();
        }, function (error) {
            console.log('This is not good!', 'Oops!');
        });
    };
    MeniComponentComponent.prototype.edit = function (meniItem) {
        //kopija objekta
        this.forEdit = Object.assign({}, meniItem);
    };
    MeniComponentComponent.prototype.filter = function (nameItem, kategorija, currentPageNumber) {
        var _this = this;
        this.vestService.filterByNameAndKategorija(this.nameItem, this.kategorija, this.currentPageNumber).subscribe(function (data) { _this.page = data; });
    };
    MeniComponentComponent.prototype.byId = function (kategorija1, kategorija2) {
        if (kategorija1 && kategorija2) {
            return kategorija1.id === kategorija2.id;
        }
    };
    return MeniComponentComponent;
}());
MeniComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-meni-component',
        template: __webpack_require__("../../../../../src/app/meni-component/meni-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/meni-component/meni-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_meni_component_vest_service__["a" /* VestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_meni_component_vest_service__["a" /* VestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_meni_component_kategorija_service__["a" /* KategorijaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_meni_component_kategorija_service__["a" /* KategorijaService */]) === "function" && _c || Object])
], MeniComponentComponent);

var _a, _b, _c;
//# sourceMappingURL=meni-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/meni-component/vest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VestService = (function () {
    function VestService(httpClient) {
        this.httpClient = httpClient;
        this.path = 'api/tiding';
    }
    VestService.prototype.getVesti = function () {
        return this.httpClient.get(this.path);
    };
    VestService.prototype.getVestiPage = function (page) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', page.toString()).append('size', '5');
        return this.httpClient.get(this.path, { params: params });
    };
    VestService.prototype.saveVest = function (meniItem) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('Content-Type', 'application/json');
        if (meniItem.id === undefined) {
            return this.httpClient.post(this.path, meniItem, { params: params });
        }
        else {
            return this.httpClient.put(this.path + '/' + meniItem.id, meniItem, { params: params });
        }
    };
    VestService.prototype.deleteVest = function (meniItem) {
        return this.httpClient.delete(this.path + '/' + meniItem.id);
    };
    VestService.prototype.filterByNameAndKategorija = function (name, kategorija, page) {
        // var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', page.toString()).append('size', '7');
        if (kategorija) {
            return this.httpClient.get(this.path + '/' + kategorija.id + '/?name=' + name, { params: params });
        }
        else {
            return this.httpClient.get(this.path + '/' + '/?name=' + name, { params: params });
        }
    };
    return VestService;
}());
VestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], VestService);

var _a;
//# sourceMappingURL=vest.service.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#message {\r\n    border-radius: 12px;\r\n    padding-left: 1%;\r\n}\r\n\r\np {\r\n    text-align: right;\r\n    padding-right: 1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"add-message\" (ngSubmit)=\"addMessage()\">\n    <div id=\"add\" class=\" col-md-4 pull-right\">\n        <label>Comment</label>\n        <textarea name=\"message\" class=\"form-control\" [(ngModel)]=\"messageText\" placeholder=\"Enter your comment...\"></textarea>\n        <label>Name</label>\n        <input name=\"message\" class=\"form-control\" [(ngModel)]=\"messageName\" placeholder=\"Enter your name...\" />\n        <br/>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Add comment\" />\n    </div>\n</form>\n<!-- <br/>\n<br/> -->\n<div class=\" col-md-8 pull-left\">\n    <div *ngIf=\"messages\">\n        <div id=\"message\" *ngFor=\"let item of messages\" class=\"bg-success\">\n            <h4>{{item.text}}</h4>\n            <p>signature: {{item.name}}</p>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = (function () {
    function MessagesComponent(route, http) {
        this.route = route;
        this.http = http;
        this.chatToAdd = {
            name: '',
            text: ''
        };
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    MessagesComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/tiding/" + _this.id + "/messages").subscribe(function (res) {
                _this.messages = res;
            });
        });
    };
    MessagesComponent.prototype.addMessage = function () {
        var _this = this;
        this.chatToAdd.text = this.messageText;
        this.chatToAdd.name = this.messageName;
        this.http.post("api/tiding/" + this.id + "/messages", this.chatToAdd).subscribe(function (res) {
            _this.resetChatText();
            _this.loadData();
        });
    };
    MessagesComponent.prototype.resetChatText = function () {
        this.messageName = '';
        this.messageText = '';
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _b || Object])
], MessagesComponent);

var _a, _b;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/vest.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=vest.js.map

/***/ }),

/***/ "../../../../../src/app/page/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-meni-component></app-meni-component>"

/***/ }),

/***/ "../../../../../src/app/page/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main-page',
        template: __webpack_require__("../../../../../src/app/page/main-page/main-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/main-page/main-page.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], MainPageComponent);

//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Wrong page buddy :)\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#vest {\r\n    /* border-radius: 22%; */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"vest\" class=\"container\">\n    <div *ngIf=\"vest\">\n        <h2>{{vest.name}}</h2>\n        <h4>{{vest.content}}</h4>\n    </div>\n    <app-messages></app-messages>\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreviewComponent = (function () {
    function PreviewComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    PreviewComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/tiding/" + _this.id).subscribe(function (res) {
                _this.vest = res;
            });
        });
    };
    return PreviewComponent;
}());
PreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-preview',
        template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _b || Object])
], PreviewComponent);

var _a, _b;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().roles.indexOf('ADMINISTRATOR') >= 0;
        }
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/can-activate-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return CanActivateAuthGuard;
}());
CanActivateAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateAuthGuard);

var _a, _b;
//# sourceMappingURL=can-activate-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/service/jwt-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtUtilsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    return JwtUtilsService;
}());
JwtUtilsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JwtUtilsService);

//# sourceMappingURL=jwt-utils.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    return TokenInterceptorService;
}());
TokenInterceptorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Injector */]) === "function" && _a || Object])
], TokenInterceptorService);

var _a;
//# sourceMappingURL=token-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map