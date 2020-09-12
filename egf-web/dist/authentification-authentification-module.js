(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentification-authentification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/coming-soon/coming-soon-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/coming-soon/coming-soon-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming soon starts-->\n<section id=\"coming-soon\">\n  <div class=\"container-fluid white\">\n    <div class=\"row full-height-vh\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"card box-shadow-0 no-border\">\n          <div class=\"card-header text-center\">\n            <h4 class=\"card-title text-dark\">\n              WE ARE LAUNCHING SOON.\n            </h4>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"text-center\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <img alt=\"avtar\" class=\"img-fluid mb-2\" src=\"../../../assets/img/gallery/coming-soon.png\" width=\"200\">\n                </div>\n              </div>\n              <div id=\"clockFlat\" class=\"getting-started pt-1 mt-2\">\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.days}}</span> <br>\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Days </p>\n                </div>\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.hours}}</span> <br>\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Hours </p>\n                </div>\n                <div class=\"px-3 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.minutes}}</span>\n                  <br>\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Minutes </p>\n                </div>\n                <div class=\"px-2 py-3 mr-3 mb-3 d-inline-block\"> <span class=\"text-dark\">{{countdown.seconds}}</span>\n                  <br>\n                  <p class=\"lead mt-2 mb-0 text-dark\"> Seconds </p>\n                </div>\n              </div>\n              <div class=\"cs-text-divider\">\n                <hr class=\"float-left\"> <span class=\"text-dark\">Subscribe</span>\n                <hr class=\"float-right\">\n              </div>\n              <p class=\"mt-3 text-dark\">\n                If you would like to be notified when our app is live, Please subscribe to our mailing list.\n              </p>\n              <div class=\"row mx-auto\">\n                <div class=\"col-sm-12 mx-auto\">\n                  <input type=\"text\" class=\"form-control mt-3\" placeholder=\"Email\" />\n                  <button class=\"btn btn-lg btn-primary mt-2\">Subscribe</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Coming soon ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/error/error-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/error/error-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Error page starts-->\n<section id=\"error\">\n  <div class=\"container-fluid forgot-password-bg\">\n    <div class=\"row full-height-vh\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n            <img src=\"../../assets/img/gallery/error.png\" alt=\"\" class=\"img-fluid error-img mt-2\" height=\"300\" width=\"400\">\n            <h1 class=\"text-white mt-4\">404 - Page Not Found!</h1>\n            <div class=\"error-text w-75 mx-auto mt-4\">\n              <p class=\"text-white\">paraphonic unassessable foramination Caulopteris worral Spirophyton\n                encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area\n                bertram plotting unstarting.</p>\n            </div>\n            <button class=\"btn btn-primary btn-lg mt-3\"><a [routerLink]=\"['/']\" class=\"text-decoration-none text-white\">Back\n                To Home</a></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Error page ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/forgot-password/forgot-password-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/forgot-password/forgot-password-page.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\n<section id=\"forgot-password\">\n  <div class=\"container-fluid forgot-password-bg\">\n    <div\n      class=\"row full-height-vh m-0  d-flex align-items-center justify-content-center\"\n    >\n      <div class=\"col-md-7 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body fg-image\">\n              <div class=\"row m-0\">\n                <div class=\"col-lg-6 d-none d-lg-block text-center py-3\">\n                  <img\n                    src=\"../../../assets/img/gallery/forgot.png\"\n                    alt=\"\"\n                    class=\"img-fluid\"\n                    width=\"300\"\n                    height=\"230\"\n                  />\n                </div>\n\n\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n                  <h4 class=\"card-title mb-2\">Récupération de mot de passe</h4>\n                  <p class=\"card-text mb-3\">\n                    Veuillez saisir votre adresse e-mail et nous vous enverrons des instructions pour réinitialiser votre mot de passe.\n                  </p>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" ngModel required email\n                               #email=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                        <small class=\"form-text text-muted danger\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                          L'adresse email est invalid !</small>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button class=\"btn btn-outline-primary\">\n                        <a\n                          class=\"text-decoration-none\"\n                          [routerLink]=\"['/auth/login']\"\n                          >Connexion</a\n                        >\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\">\n                      <button type=\"submit\" class=\"btn btn-primary\">\n                        <a  class=\"text-decoration-none text-white\" >\n                          Récupérer\n                        </a>\n                      </button>\n                    </div>\n                  </div>\n                </form>\n                </div>\n\n\n\n\n\n\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Forgot Password Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/lock-screen/lock-screen-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/lock-screen/lock-screen-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Lock Screen Starts-->\n<section id=\"lock-screen\">\n  <div class=\"container-fluid forgot-password-bg\">\n    <div class=\"row full-height-vh m-0\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body lock-screen-img\">\n              <div class=\"row m-0\">\n                <div class=\"col-lg-6 d-lg-block d-none text-center py-2\">\n                  <img\n                    src=\"../../assets/img/gallery/lock.png\"\n                    alt=\"\"\n                    class=\"img-fluid\"\n                    height=\"230\"\n                    width=\"400\"\n                  />\n                </div>\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\n                  <h4 class=\"card-title mb-3\">\n                    Your Session is locked\n                  </h4>\n                  <input\n                    type=\"text\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"Email\"\n                  />\n                  <input\n                    type=\"password\"\n                    class=\"form-control mb-3\"\n                    placeholder=\"password\"\n                  />\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button\n                        class=\"btn btn-link text-decoration-none text-primary\"\n                      >\n                        Are You Not John Doe ?\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\">\n                      <button class=\"btn btn-primary\">\n                        <a\n                          class=\"text-decoration-none text-white\"\n                          [routerLink]=\"['/dashboard/dashboard1']\"\n                        >\n                          Unlock\n                        </a>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Lock Screen Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/login/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/login/login-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\n<section id=\"login\">\n  <div class=\"container-fluid\">\n    <div class=\"row full-height-vh m-0\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body login-img\">\n              <div class=\"row m-0\">\n                <div\n                  class=\"col-lg-6 d-lg-block d-none py-2 px-3 text-center align-middle\"\n                >\n                  <img\n                    src=\"../../assets/img/gallery/login.png\"\n                    alt=\"\"\n                    class=\"img-fluid mt-5\"\n                    width=\"400\"\n                    height=\"230\"\n                  />\n                </div>\n\n                <div class=\"col-lg-6 col-md-12 bg-white px-4 pt-3\">\n                  <h4 class=\"card-title mb-2\">Connexion</h4>\n                  <p class=\"card-text mb-3\">\n                    Bienvenue, veuillez vous connecter à votre compte.\n                  </p>\n                  <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" >\n\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"email\">Email</label>\n                          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" ngModel required email\n                                 #email=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                          <small class=\"form-text text-muted danger\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">\n                            L'adresse email est invalid !</small>\n                        </div>\n                      </div>\n                    </div>\n\n\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label for=\"password\">Mot de passe</label>\n                          <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" ngModel required\n                                 minlength=\"4\" maxlength=\"24\" [ngModelOptions]=\"{updateOn: 'blur'}\" #password=\"ngModel\">\n                          <small class=\"form-text text-muted danger\" *ngIf=\"!password.valid && (password.dirty || password.touched)\">\n                            Le mot de passe est compris entre 4 et 24 !</small>\n                        </div>\n                      </div>\n                    </div>\n\n\n\n                  <div class=\"d-flex justify-content-between mt-2\">\n                    <div class=\"remember-me\">\n                      <div\n                        class=\"custom-control custom-checkbox custom-control-inline mb-3\"\n                      >\n                        <input\n                          type=\"checkbox\"\n                          id=\"customCheckboxInline1\"\n                          name=\"customCheckboxInline1\"\n                          class=\"custom-control-input\"\n                        />\n                        <label\n                          class=\"custom-control-label\"\n                          for=\"customCheckboxInline1\"\n                        >\n                          Se souvenir de moi\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"forgot-password-option\">\n                      <a\n                        [routerLink]=\"['/auth/forgotpassword']\"\n                        class=\"text-decoration-none text-primary\"\n                        >Mot de passe oublié ?</a\n                      >\n                    </div>\n                  </div>\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button class=\"btn btn-outline-primary\">\n                        <a\n                          [routerLink]=\"['/auth/register']\"\n                          class=\"text-decoration-none\"\n                          >Inscription</a\n                        >\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\">\n                      <button type=\"submit\" class=\"btn btn-primary\">\n                        <a class=\"text-decoration-none text-white\"\n                          >Se connecter</a\n                        >\n                      </button>\n                    </div>\n                  </div>\n\n                  <hr class=\"m-0\" />\n                  <div class=\"d-flex justify-content-between mt-3\">\n                    <div class=\"option-login\">\n                      <h6 class=\"text-decoration-none text-primary\">\n                        Se connecter avec\n                      </h6>\n                    </div>\n                    <div class=\"social-login-options\">\n                      <a class=\"btn btn-social-icon mr-2 btn-google\" (click)=\"doGoogleLogin()\">\n                        <span class=\"fa fa-google\"></span>\n                      </a>\n                      <a class=\"btn btn-social-icon mr-2 btn-facebook\" (click)=\"doFacebookLogin()\">\n                        <span class=\"fa fa-facebook\"></span>\n                      </a>\n                      <a class=\"btn btn-social-icon mr-2 btn-twitter\" (click)=\"doTwitterLogin()\">\n                        <span class=\"fa fa-twitter\"></span>\n                      </a>\n                    </div>\n                  </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Login Page Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/maintenance/maintenance-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/maintenance/maintenance-page.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Under Maintenance Starts-->\n<section id=\"maintenance\" class=\"full-height-vh\">\n  <div class=\"container-fluid\">\n    <div class=\"row full-height-vh\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n            <img src=\"../../../assets/img/gallery/maintenance.png\" alt=\"\" class=\"img-fluid maintenance-img mt-2\"\n                 height=\"300\" width=\"400\">\n            <h1 class=\"text-white mt-4\">Under Maintenance!</h1>\n            <div class=\"w-75 mx-auto maintenance-text mt-3\">\n              <p class=\"text-white\">paraphonic unassessable foramination Caulopteris worral Spirophyton\n                encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area\n                bertram plotting unstarting quarterstaff.\n              </p>\n            </div>\n            <button class=\"btn btn-primary btn-lg mt-4\"><a href=\"dashboard1.html\" class=\"text-decoration-none text-white\">Back\n                To Home</a></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Under Maintenance Starts-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authentification/register/register-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authentification/register/register-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Registration Page Starts-->\n<section id=\"register\">\n  <div class=\"container-fluid\">\n    <div class=\"row full-height-vh m-0\">\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"card-body register-img\">\n              <div class=\"row m-0\">\n                <div class=\"col-lg-6 d-none d-lg-block py-2 px-3 text-center\">\n                  <img\n                          src=\"../../assets/img/gallery/register.png\"\n                          alt=\"\"\n                          class=\"img-fluid mt-3 pl-3\"\n                          width=\"400\"\n                          height=\"230\"\n                  />\n                </div>\n                <div class=\"col-lg-6 col-md-12 pt-3 px-4 bg-white\">\n                  <h4 class=\"card-title mb-2\">Création de compte</h4>\n                  <p class=\"card-text mb-3\">\n                    Remplissez le formulaire ci-dessous pour créer un nouveau compte.\n                  </p>\n                  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\" >\n                  <input\n                          type=\"text\"\n                          name=\"name\" ngModel\n                          class=\"form-control mb-3\"\n                          placeholder=\"Prénom et nom\"\n                          required\n                  />\n                  <input\n                          type=\"phone\" name=\"phone\" ngModel\n                          class=\"form-control mb-3\"\n                          placeholder=\"Téléphone\"\n                          required\n                  />\n                    <input\n                          type=\"email\" name=\"email\" ngModel\n                          class=\"form-control mb-3\"\n                          placeholder=\"Email\"\n                          required\n                  />\n                  <input\n                          type=\"password\" name=\"password\" ngModel\n                          class=\"form-control mb-3\"\n                          placeholder=\"Mot de passe\"\n                          required\n                  />\n                  <input\n                          type=\"password\" name=\"passwordConfirme\" ngModel\n                          class=\"form-control mb-3\"\n                          placeholder=\"Confirmer mot de passe\"\n                          required\n                  />\n                  <div class=\"custom-control custom-checkbox custom-control-inline mb-3\">\n                    <input\n                            type=\"checkbox\"\n                            id=\"customCheckboxInline1\"\n                            name=\"acceptedTermes\" ngModel\n                            class=\"custom-control-input\"\n                            checked\n                    />\n                    <label\n                            class=\"custom-control-label\"\n                            for=\"customCheckboxInline1\"\n                    > J'accepte les termes et conditions de EGF.\n                    </label>\n                  </div>\n                  <div class=\"fg-actions d-flex justify-content-between\">\n                    <div class=\"login-btn\">\n                      <button class=\"btn btn-outline-primary\">\n                        <a class=\"text-decoration-none\" [routerLink]=\"['/auth/login']\" >\n                          Connexion\n                        </a>\n                      </button>\n                    </div>\n                    <div class=\"recover-pass\" [hidden]=\"isLoading\">\n                      <button class=\"btn btn-primary\" type=\"submit\">\n                        <a class=\"text-decoration-none text-white\">\n                          S'enregistrer\n                        </a>\n                      </button>\n                    </div>\n                  </div>\n                </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Registration Page Ends-->\n"

/***/ }),

/***/ "./src/app/authentification/authentification-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentification/authentification-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AuthentificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationRoutingModule", function() { return AuthentificationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/authentification/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/authentification/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/authentification/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/authentification/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/authentification/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/authentification/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/authentification/register/register-page.component.ts");










var routes = [
    {
        path: '',
        children: [
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_3__["ComingSoonPageComponent"],
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_6__["LockScreenPageComponent"],
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_8__["MaintenancePageComponent"],
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var AuthentificationRoutingModule = /** @class */ (function () {
    function AuthentificationRoutingModule() {
    }
    AuthentificationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthentificationRoutingModule);
    return AuthentificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentification/authentification.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthentificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationModule", function() { return AuthentificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentification-routing.module */ "./src/app/authentification/authentification-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/authentification/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/authentification/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/authentification/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/authentification/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/authentification/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/authentification/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/authentification/register/register-page.component.ts");












var AuthentificationModule = /** @class */ (function () {
    function AuthentificationModule() {
    }
    AuthentificationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authentification_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthentificationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_5__["ComingSoonPageComponent"],
                _error_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
                _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordPageComponent"],
                _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_8__["LockScreenPageComponent"],
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
                _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_10__["MaintenancePageComponent"],
                _register_register_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisterPageComponent"]
            ]
        })
    ], AuthentificationModule);
    return AuthentificationModule;
}());



/***/ }),

/***/ "./src/app/authentification/coming-soon/coming-soon-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/authentification/coming-soon/coming-soon-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#coming-soon {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #coming-soon .card-coming-soon {\n    border-radius: 0.5rem; }\n  #coming-soon .getting-started {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n  #coming-soon .cs-text-divider {\n    width: 100%;\n    text-align: center; }\n  #coming-soon .cs-text-divider hr {\n      margin-left: auto;\n      margin-right: auto;\n      width: 40%; }\n  #coming-soon .cs-text-divider span {\n      position: relative;\n      top: 11px; }\n  #coming-soon .btn.btn-lg.btn-primary {\n    color: #fff !important; }\n  @media (max-width: 540px) {\n  #coming-soon {\n    overflow: hidden; }\n    #coming-soon .card-coming-soon {\n      position: relative;\n      top: -12px; }\n      #coming-soon .card-coming-soon .card-header {\n        padding: 1rem; }\n        #coming-soon .card-coming-soon .card-header h4.card-title {\n          font-size: 1rem; }\n      #coming-soon .card-coming-soon img.img-cs {\n        width: 100px; }\n      #coming-soon .card-coming-soon .cs-text-divider hr {\n        margin-left: auto;\n        margin-right: auto;\n        width: 35%; }\n      #coming-soon .card-coming-soon .getting-started {\n        padding-top: 0 !important;\n        margin-top: auto !important; }\n        #coming-soon .card-coming-soon .getting-started .clockCard {\n          margin-bottom: 0.5rem !important; }\n          #coming-soon .card-coming-soon .getting-started .clockCard P.lead {\n            margin-top: 0 !important; }\n      #coming-soon .card-coming-soon input.form-control {\n        margin-top: 0.5rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9jb21pbmctc29vbi9jb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTtFQUg5QjtJQU1JLHFCQUFxQixFQUFBO0VBTnpCO0lBVUksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUIsRUFBQTtFQVozQjtJQWdCSSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFqQnRCO01Bb0JNLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0VBdEJoQjtNQTBCTSxrQkFBa0I7TUFDbEIsU0FBUyxFQUFBO0VBM0JmO0lBZ0NJLHNCQUFzQixFQUFBO0VBSzFCO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQTtJQURsQjtNQUlJLGtCQUFrQjtNQUNsQixVQUFVLEVBQUE7TUFMZDtRQVFNLGFBQWEsRUFBQTtRQVJuQjtVQVdRLGVBQWUsRUFBQTtNQVh2QjtRQWdCTSxZQUFZLEVBQUE7TUFoQmxCO1FBc0JRLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsVUFBVSxFQUFBO01BeEJsQjtRQTZCTSx5QkFBeUI7UUFDekIsMkJBQTJCLEVBQUE7UUE5QmpDO1VBaUNRLGdDQUFnQyxFQUFBO1VBakN4QztZQW9DVSx3QkFBd0IsRUFBQTtNQXBDbEM7UUEwQ00sNkJBQTZCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWZpY2F0aW9uL2NvbWluZy1zb29uL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21pbmcgU29vblxuXG4jY29taW5nLXNvb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgLmNhcmQtY29taW5nLXNvb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxuXG4gIC5nZXR0aW5nLXN0YXJ0ZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNzLXRleHQtZGl2aWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaHIge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogNDAlO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAxMXB4O1xuICAgIH1cbiAgfVxuXG4gIC5idG4uYnRuLWxnLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDo1NDBweCkge1xuICAjY29taW5nLXNvb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuY2FyZC1jb21pbmctc29vbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC0xMnB4O1xuXG4gICAgICAuY2FyZC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuXG4gICAgICAgIGg0LmNhcmQtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbWcuaW1nLWNzIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICAuY3MtdGV4dC1kaXZpZGVyIHtcblxuICAgICAgICBociB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmdldHRpbmctc3RhcnRlZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcblxuICAgICAgICAuY2xvY2tDYXJkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcblxuICAgICAgICAgIFAubGVhZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentification/coming-soon/coming-soon-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/authentification/coming-soon/coming-soon-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent() {
        this.pickDate = new Date().setMonth(new Date().getMonth() + 2);
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = moment__WEBPACK_IMPORTED_MODULE_4__();
        var launchDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.launchDate);
        var diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);
        // Create a subscribable interval
        var countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return diff = diff - 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            return _this.calculateRemainingTime(value);
        }));
        // Subscribe to the countdown interval
        countDown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (value) {
            _this.countdown = value;
        });
    };
    ComingSoonPageComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ComingSoonPageComponent.prototype.calculateRemainingTime = function (seconds) {
        var timeLeft = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](seconds, 'seconds');
        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    };
    ComingSoonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming-soon-page',
            template: __webpack_require__(/*! raw-loader!./coming-soon-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/coming-soon/coming-soon-page.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-page.component.scss */ "./src/app/authentification/coming-soon/coming-soon-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComingSoonPageComponent);
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/error/error-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/authentification/error/error-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#error {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n@media (max-width: 768px) {\n  #error .error-img {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9lcnJvci9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRTtJQUVJLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9lcnJvci9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXJyb3JcbiNlcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjhweCkge1xuICAjZXJyb3Ige1xuICAgIC5lcnJvci1pbWcge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/authentification/error/error-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/authentification/error/error-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/error/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/authentification/error/error-page.component.scss")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/forgot-password/forgot-password-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/authentification/forgot-password/forgot-password-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#forgot-password .forgot-password-bg {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n#forgot-password .fg-image {\n  padding: 0;\n  background: #f0f0f0; }\n\n#forgot-password .login-btn .btn.btn-outline-primary:hover a {\n  color: #fff; }\n\n#forgot-password .recover-pass button.btn.btn-primary {\n  color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQ0FBaUU7RUFDakUsMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBOztBQUpoQztFQVFJLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFUdkI7RUFpQlUsV0FBVyxFQUFBOztBQWpCckI7RUF5Qk0sc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWZpY2F0aW9uL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdvdCBQYXNzd29yZFxuXG4jZm9yZ290LXBhc3N3b3JkIHtcbiAgLmZvcmdvdC1wYXNzd29yZC1iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgLmZnLWltYWdlIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIH1cblxuXG4gIC5sb2dpbi1idG4ge1xuICAgIC5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVjb3Zlci1wYXNzIHtcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentification/forgot-password/forgot-password-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/authentification/forgot-password/forgot-password-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");






var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route, auth, notification) {
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.notification = notification;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('onSubmit', form.value);
        this.auth.sendPasswordResetEmail(form.value.email)
            .then(function (res) {
            console.log('onSubmit ok');
            _this.notification.success('Le lien de réinitialisation a été envoyé à : ' + form.value.email);
        })
            .catch(function (err) {
            console.log('onSubmit err', err);
            _this.notification.error('Impossible d\'envoyer le lien de réinitialisation, veuillez réessayer plus tard');
        });
        form.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ForgotPasswordPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ForgotPasswordPageComponent.prototype, "form", void 0);
    ForgotPasswordPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-page',
            template: __webpack_require__(/*! raw-loader!./forgot-password-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/forgot-password/forgot-password-page.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/authentification/forgot-password/forgot-password-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], ForgotPasswordPageComponent);
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/lock-screen/lock-screen-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/authentification/lock-screen/lock-screen-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock-screen {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #lock-screen .lock-screen-img {\n    background: #f0f0f0;\n    padding: 0; }\n  #lock-screen .btn.btn-link.text-decoration-none:hover {\n    text-decoration: none !important; }\n  #lock-screen .login-btn .btn.btn-link {\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9sb2NrLXNjcmVlbi9sb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTtFQUg5QjtJQU1JLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7RUFQZDtJQVlNLGdDQUFnQyxFQUFBO0VBWnRDO0lBa0JNLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vbG9jay1zY3JlZW4vbG9jay1zY3JlZW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcmdvdCBQYXNzd29yZFxuXG4jbG9jay1zY3JlZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2dhbGxlcnkvbGlnaHQtYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAubG9jay1zY3JlZW4taW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuYnRuLmJ0bi1saW5rLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5sb2dpbi1idG4ge1xuICAgIC5idG4uYnRuLWxpbmsge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/authentification/lock-screen/lock-screen-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/authentification/lock-screen/lock-screen-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LockScreenPageComponent.prototype, "lockScreenForm", void 0);
    LockScreenPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lock-screen-page',
            template: __webpack_require__(/*! raw-loader!./lock-screen-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/lock-screen/lock-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen-page.component.scss */ "./src/app/authentification/lock-screen/lock-screen-page.component.scss")]
        })
    ], LockScreenPageComponent);
    return LockScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/login/login-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/authentification/login/login-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #login .login-img {\n    padding: 0;\n    background: #f0f0f0; }\n  #login .login-btn .btn.btn-outline-primary:hover a {\n    color: #fff; }\n  #login .recover-pass button.btn.btn-primary {\n    color: #fff !important; }\n  #login .forgot-password-option a.text-decoration-none,\n  #login .forgot-password-option .custom-control-label,\n  #login .remember-me a.text-decoration-none,\n  #login .remember-me .custom-control-label {\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTtFQUg5QjtJQU1JLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtFQVB2QjtJQWNVLFdBQVcsRUFBQTtFQWRyQjtJQXNCTSxzQkFBc0IsRUFBQTtFQXRCNUI7Ozs7SUErQk0sZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9naW4gUGFnZVxuXG4jbG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgLmxvZ2luLWltZyB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICB9XG5cbiAgLmxvZ2luLWJ0biB7XG4gICAgLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWNvdmVyLXBhc3Mge1xuICAgIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuZm9yZ290LXBhc3N3b3JkLW9wdGlvbixcbiAgLnJlbWVtYmVyLW1lIHtcblxuICAgIGEudGV4dC1kZWNvcmF0aW9uLW5vbmUsXG4gICAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentification/login/login-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/authentification/login/login-page.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/egf.option */ "./src/environments/egf.option.ts");







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, route, fb, notification, auth) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.auth = auth;
        this.isLoading = false;
    }
    LoginPageComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### onSubmit ###');
                        if (!(form.dirty && form.valid)) return [3 /*break*/, 2];
                        this.isLoading = true;
                        console.log('form value', form.value);
                        return [4 /*yield*/, this.auth.doLogin(form.value)
                                .then(function (user) {
                                console.log('doLogin ok', user);
                                _this.isLoading = false;
                                if (user.status) {
                                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].successMessage);
                                    _this.router.navigateByUrl('dashboard/dashboard1');
                                }
                                else {
                                    _this.notification.info(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].authenticationInactifMessage);
                                }
                            })
                                .catch(function (ko) {
                                _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].authenticationFailedMessage);
                                _this.notification.error(ko.message);
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoginPageComponent.prototype.doGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### doGoogleLogin ###');
                        return [4 /*yield*/, this.auth.doGoogleLogin()
                                .then(function (user) {
                                console.log('doLogin ok', user.user);
                                _this.isLoading = false;
                                _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].successMessage);
                                _this.router.navigateByUrl('dashboard/dashboard1');
                            })
                                .catch(function (ko) {
                                _this.notification.error(ko.message);
                                console.log('doLogin ko', ko);
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPageComponent.prototype.doFacebookLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### doFacebookLogin ###');
                        return [4 /*yield*/, this.auth.doFacebookLogin()
                                .then(function (user) {
                                console.log('doLogin ok', user.user);
                                _this.isLoading = false;
                                _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].successMessage);
                                _this.router.navigateByUrl('dashboard/dashboard1');
                            })
                                .catch(function (ko) {
                                _this.notification.error(ko.message);
                                console.log('doLogin ko', ko);
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPageComponent.prototype.doTwitterLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### doTwitterLogin ###');
                        return [4 /*yield*/, this.auth.doTwitterLogin()
                                .then(function (user) {
                                console.log('doLogin ok', user.user);
                                _this.isLoading = false;
                                _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_6__["egfOption"].successMessage);
                                _this.router.navigateByUrl('dashboard/dashboard1');
                            })
                                .catch(function (ko) {
                                _this.notification.error(ko.message);
                                console.log('doLogin ko', ko);
                                _this.isLoading = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // On Forgot password link click
    LoginPageComponent.prototype.onForgotPassword = function () {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    };
    // On registration link click
    LoginPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginPageComponent.prototype, "form", void 0);
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/login/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/authentification/login/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/maintenance/maintenance-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/authentification/maintenance/maintenance-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#maintenance {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n\n@media (max-width: 768px) {\n  #maintenance .maintenance-img {\n    width: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9tYWludGVuYW5jZS9tYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRTtJQUVJLFlBQVksRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9tYWludGVuYW5jZS9tYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWFpbnRlbmFuY2VcblxuI21haW50ZW5hbmNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9nYWxsZXJ5L2xpZ2h0LWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtYWludGVuYW5jZSB7XG4gICAgLm1haW50ZW5hbmNlLWltZyB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentification/maintenance/maintenance-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/authentification/maintenance/maintenance-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: MaintenancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageComponent", function() { return MaintenancePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maintenance-page',
            template: __webpack_require__(/*! raw-loader!./maintenance-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/maintenance/maintenance-page.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-page.component.scss */ "./src/app/authentification/maintenance/maintenance-page.component.scss")]
        })
    ], MaintenancePageComponent);
    return MaintenancePageComponent;
}());



/***/ }),

/***/ "./src/app/authentification/register/register-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/authentification/register/register-page.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#register {\n  background-image: url('light-bg.jpg');\n  background-size: 100% 100%;\n  background-repeat: no-repeat; }\n  #register .register-img {\n    background: #f0f0f0;\n    padding: 0; }\n  #register .login-btn .btn.btn-outline-primary:hover a {\n    color: #fff; }\n  #register .recover-pass button.btn.btn-primary {\n    color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQWlFO0VBQ2pFLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTtFQUg5QjtJQU1JLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7RUFQZDtJQWNVLFdBQVcsRUFBQTtFQWRyQjtJQXNCTSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZvciByZWdpc3RlciBwYWdlXG5cbiNyZWdpc3RlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2FsbGVyeS9saWdodC1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIC5yZWdpc3Rlci1pbWcge1xuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5sb2dpbi1idG4ge1xuICAgIC5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVjb3Zlci1wYXNzIHtcbiAgICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentification/register/register-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentification/register/register-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/egf.option */ "./src/environments/egf.option.ts");






var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(fb, notification, auth) {
        this.fb = fb;
        this.notification = notification;
        this.auth = auth;
        this.isLoading = false;
    }
    RegisterPageComponent.prototype.onSubmit = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### onSubmit ###');
                        if (!(form.dirty && form.valid)) return [3 /*break*/, 2];
                        this.isLoading = true;
                        console.log('form value', form.value);
                        return [4 /*yield*/, this.auth.doRegister(form.value)
                                .then(function (ok) {
                                _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_5__["egfOption"].successMessage);
                                console.log('register OK', ok);
                                _this.isLoading = false;
                                _this.onReset(form);
                            })
                                .catch(function (ko) {
                                _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_5__["egfOption"].alternativeMessage);
                                console.log('register ko', ko);
                                _this.isLoading = false;
                                _this.onReset(form);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPageComponent.prototype.onReset = function (form) {
        form.resetForm();
    };
    RegisterPageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/authentification/register/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/authentification/register/register-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentification-authentification-module.js.map