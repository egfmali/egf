(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-administration-module"],{

/***/ "./src/app/administration/administration-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administration/administration-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationRoutingModule", function() { return AdministrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'users',
        loadChildren: function () { return Promise.all(/*! import() | users-users-module */[__webpack_require__.e("default~components-ui-components-module~configuration-configuration-module~users-users-module"), __webpack_require__.e("default~forms-forms-module~users-users-module"), __webpack_require__.e("common"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/administration/users/users.module.ts")).then(function (m) { return m.UsersModule; }); },
    },
    {
        path: 'profils',
        loadChildren: function () { return Promise.all(/*! import() | profils-profils-module */[__webpack_require__.e("default~configuration-configuration-module~data-tables-data-tables-module~profils-profils-module"), __webpack_require__.e("default~components-ui-components-module~configuration-configuration-module~profils-profils-module"), __webpack_require__.e("common"), __webpack_require__.e("profils-profils-module")]).then(__webpack_require__.bind(null, /*! ./profils/profils.module */ "./src/app/administration/profils/profils.module.ts")).then(function (m) { return m.ProfilsModule; }); }
    },
];
var AdministrationRoutingModule = /** @class */ (function () {
    function AdministrationRoutingModule() {
    }
    AdministrationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdministrationRoutingModule);
    return AdministrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/administration/administration.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationModule", function() { return AdministrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _administration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration-routing.module */ "./src/app/administration/administration-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");







var AdministrationModule = /** @class */ (function () {
    function AdministrationModule() {
    }
    AdministrationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _administration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrationRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__["taskReducer"])
            ],
            declarations: []
        })
    ], AdministrationModule);
    return AdministrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=administration-administration-module.js.map