(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-tables-data-tables-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/basic/dt-basic.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/basic/dt-basic.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic DataTable Starts-->\n<section id=\"basic-datatable\" class=\"mb-3\">\n  <div class=\"row text-left\">\n    <div class=\"col-12\">\n      <div class=\"content-header\">Basic DataTable</div>\n      <p class=\"content-sub-header\">A feature-rich yet lightweight data-table crafted for Angular4 and beyond!</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [loadingIndicator]=\"loadingIndicator\" [columns]=\"columns\"\n        [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"getRowHeight\" [reorderable]=\"reorderable\">\n      </ngx-datatable>\n    </div>\n  </div>\n</section>\n<!--Basic DataTable Ends-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/editing/dt-editing.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/editing/dt-editing.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--DataTable With Editing Feature Starts-->\n<section id=\"editing-DataTable\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">Editing Content</div>\n            <p class=\"content-sub-header\">Double click on any content to edit that section.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ngx-datatable #mydatatable class=\"bootstrap\" [headerHeight]=\"50\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\" [rows]=\"rows\">\n                <ngx-datatable-column name=\"name\">\n                    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n                        <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-name'] = true\" *ngIf=\"!editing[rowIndex + '-name']\">\n                            {{value}}\n                        </span>\n                        <input autofocus (blur)=\"updateValue($event, 'name', rowIndex)\" *ngIf=\"editing[rowIndex+ '-name']\" type=\"text\" [value]=\"value\"\n                        />\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Gender\">\n                    <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n                        <span title=\"Double click to edit\" (dblclick)=\"editing[rowIndex + '-gender'] = true\" *ngIf=\"!editing[rowIndex + '-gender']\">\n                            {{value}}\n                        </span>\n                        <select *ngIf=\"editing[rowIndex + '-gender']\" (change)=\"updateValue($event, 'gender', rowIndex)\" [value]=\"value\">\n                            <option value=\"male\">Male</option>\n                            <option value=\"female\">Female</option>\n                        </select>\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Age\">\n                    <ng-template ngx-datatable-cell-template let-value=\"value\">\n                        {{value}}\n                    </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n<!--DataTable With Editing Feature Ends-->\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/filter/dt-filter.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/filter/dt-filter.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Filter Option</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <input type='text' style='padding:8px;margin:15px auto;width:30%;' placeholder='Type to filter the name column...' (keyup)='updateFilter($event)'\n            />\n            <ngx-datatable #table class='bootstrap' [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\n                [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='rows'>\n            </ngx-datatable>\n        </div>\n    </div>\n</section>\n<!-- Filter Datatable Options Ends -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/fullscreen/dt-fullscreen.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/fullscreen/dt-fullscreen.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Fullscreen DataTable Starts-->\n<section id=\"fullscreen\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">Fullscreen DataTable</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"height-600\">\n                <ngx-datatable class=\"bootstrap fullscreen\" style=\"top: 52px\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"0\"\n                    [rowHeight]=\"50\" [scrollbarV]=\"true\" [scrollbarH]=\"true\" [rows]=\"rows\">\n                    <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n                    <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n                </ngx-datatable>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Fullscreen DataTable Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/paging/dt-paging.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/paging/dt-paging.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Paging dataTable starts-->\n<section id=\"paging\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Paging</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\" [columnMode]=\"'force'\"\n                [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\n            </ngx-datatable>\n        </div>\n    </div>\n</section>\n<!--Paging dataTable starts-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/pinning/dt-pinning.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/pinning/dt-pinning.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pinning Starts-->\n<section id=\"pinning\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Pinning DataTable</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ngx-datatable class=\"bootstrap\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [scrollbarV]=\"true\"\n                [scrollbarH]=\"true\" [rows]=\"rows\">\n                <ngx-datatable-column name=\"Name\" [width]=\"300\" [frozenLeft]=\"true\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Gender\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Age\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"City\" [width]=\"150\" prop=\"address.city\">\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\">\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n</section>\n<!--Pinning Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/selection/dt-selection.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/selection/dt-selection.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Selection DataTable Starts-->\n<section id=\"selection\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Selection DataTable</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ngx-datatable class=\"bootstrap selection-cell\" [rows]=\"rows\" [columnMode]=\"'force'\" [columns]=\"columns\" [headerHeight]=\"50\"\n                [footerHeight]=\"50\" [rowHeight]=\"50\" [selected]=\"selected\" [selectionType]=\"'cell'\" (select)=\"onSelect($event)\"\n                (activate)=\"onActivate($event)\">\n            </ngx-datatable>\n        </div>\n    </div>\n</section>\n<!--Selection DataTable Ends-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/data-tables/sorting/dt-sorting.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/data-tables/sorting/dt-sorting.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Sorting DataTable Starts-->\n<section id=\"sorting\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Sorting DataTable</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\n                [scrollbarV]=\"true\" [sorts]=\"[{prop: 'name', dir: 'desc'}]\">\n                <ngx-datatable-column name=\"Company\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        {{row.company}}\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Name\">\n                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                        {{row.name}}\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"Gender\">\n                </ngx-datatable-column>\n            </ngx-datatable>\n        </div>\n    </div>\n</section>\n<!--Sorting DataTable Ends-->"

/***/ }),

/***/ "./src/app/data-tables/basic/dt-basic.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/data-tables/basic/dt-basic.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL2Jhc2ljL2R0LWJhc2ljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/data-tables/basic/dt-basic.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/data-tables/basic/dt-basic.component.ts ***!
  \*********************************************************/
/*! exports provided: DTBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTBasicComponent", function() { return DTBasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTBasicComponent = /** @class */ (function () {
    function DTBasicComponent() {
        var _this = this;
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        // DataTable Content Titles
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = data;
        setTimeout(function () { _this.loadingIndicator = false; }, 1500);
    }
    DTBasicComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    DTBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-basic',
            template: __webpack_require__(/*! raw-loader!./dt-basic.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/basic/dt-basic.component.html"),
            styles: [__webpack_require__(/*! ./dt-basic.component.scss */ "./src/app/data-tables/basic/dt-basic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTBasicComponent);
    return DTBasicComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/data-tables-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-tables/data-tables-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DataTablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesRoutingModule", function() { return DataTablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fullscreen_dt_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/dt-fullscreen.component */ "./src/app/data-tables/fullscreen/dt-fullscreen.component.ts");
/* harmony import */ var _editing_dt_editing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editing/dt-editing.component */ "./src/app/data-tables/editing/dt-editing.component.ts");
/* harmony import */ var _filter_dt_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/dt-filter.component */ "./src/app/data-tables/filter/dt-filter.component.ts");
/* harmony import */ var _paging_dt_paging_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paging/dt-paging.component */ "./src/app/data-tables/paging/dt-paging.component.ts");
/* harmony import */ var _pinning_dt_pinning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pinning/dt-pinning.component */ "./src/app/data-tables/pinning/dt-pinning.component.ts");
/* harmony import */ var _selection_dt_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection/dt-selection.component */ "./src/app/data-tables/selection/dt-selection.component.ts");
/* harmony import */ var _sorting_dt_sorting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sorting/dt-sorting.component */ "./src/app/data-tables/sorting/dt-sorting.component.ts");
/* harmony import */ var _basic_dt_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/dt-basic.component */ "./src/app/data-tables/basic/dt-basic.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _fullscreen_dt_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__["DTFullScreenComponent"],
                data: {
                    title: 'Full Screen Data Table'
                }
            },
            {
                path: 'editing',
                component: _editing_dt_editing_component__WEBPACK_IMPORTED_MODULE_4__["DTEditingComponent"],
                data: {
                    title: 'Editing Data Table'
                }
            },
            {
                path: 'filter',
                component: _filter_dt_filter_component__WEBPACK_IMPORTED_MODULE_5__["DTFilterComponent"],
                data: {
                    title: 'Filter Data Table'
                }
            },
            {
                path: 'paging',
                component: _paging_dt_paging_component__WEBPACK_IMPORTED_MODULE_6__["DTPagingComponent"],
                data: {
                    title: 'Paging Data Table'
                }
            },
            {
                path: 'pinning',
                component: _pinning_dt_pinning_component__WEBPACK_IMPORTED_MODULE_7__["DTPinningComponent"],
                data: {
                    title: 'Pinning Data Table'
                }
            },
            {
                path: 'selection',
                component: _selection_dt_selection_component__WEBPACK_IMPORTED_MODULE_8__["DTSelectionComponent"],
                data: {
                    title: 'Selection Data Table'
                }
            },
            {
                path: 'sorting',
                component: _sorting_dt_sorting_component__WEBPACK_IMPORTED_MODULE_9__["DTSortingComponent"],
                data: {
                    title: 'Sorting Data Table'
                }
            },
            {
                path: 'basic',
                component: _basic_dt_basic_component__WEBPACK_IMPORTED_MODULE_10__["DTBasicComponent"],
                data: {
                    title: 'Basic Data Table'
                }
            },
        ]
    }
];
var DataTablesRoutingModule = /** @class */ (function () {
    function DataTablesRoutingModule() {
    }
    DataTablesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DataTablesRoutingModule);
    return DataTablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/data-tables/data-tables.module.ts":
/*!***************************************************!*\
  !*** ./src/app/data-tables/data-tables.module.ts ***!
  \***************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-tables-routing.module */ "./src/app/data-tables/data-tables-routing.module.ts");
/* harmony import */ var _fullscreen_dt_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen/dt-fullscreen.component */ "./src/app/data-tables/fullscreen/dt-fullscreen.component.ts");
/* harmony import */ var _editing_dt_editing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editing/dt-editing.component */ "./src/app/data-tables/editing/dt-editing.component.ts");
/* harmony import */ var _filter_dt_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter/dt-filter.component */ "./src/app/data-tables/filter/dt-filter.component.ts");
/* harmony import */ var _paging_dt_paging_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paging/dt-paging.component */ "./src/app/data-tables/paging/dt-paging.component.ts");
/* harmony import */ var _pinning_dt_pinning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pinning/dt-pinning.component */ "./src/app/data-tables/pinning/dt-pinning.component.ts");
/* harmony import */ var _selection_dt_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/dt-selection.component */ "./src/app/data-tables/selection/dt-selection.component.ts");
/* harmony import */ var _sorting_dt_sorting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sorting/dt-sorting.component */ "./src/app/data-tables/sorting/dt-sorting.component.ts");
/* harmony import */ var _basic_dt_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/dt-basic.component */ "./src/app/data-tables/basic/dt-basic.component.ts");













var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataTablesRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]
            ],
            declarations: [
                _fullscreen_dt_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__["DTFullScreenComponent"],
                _editing_dt_editing_component__WEBPACK_IMPORTED_MODULE_6__["DTEditingComponent"],
                _filter_dt_filter_component__WEBPACK_IMPORTED_MODULE_7__["DTFilterComponent"],
                _paging_dt_paging_component__WEBPACK_IMPORTED_MODULE_8__["DTPagingComponent"],
                _pinning_dt_pinning_component__WEBPACK_IMPORTED_MODULE_9__["DTPinningComponent"],
                _selection_dt_selection_component__WEBPACK_IMPORTED_MODULE_10__["DTSelectionComponent"],
                _sorting_dt_sorting_component__WEBPACK_IMPORTED_MODULE_11__["DTSortingComponent"],
                _basic_dt_basic_component__WEBPACK_IMPORTED_MODULE_12__["DTBasicComponent"],
            ]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());



/***/ }),

/***/ "./src/app/data-tables/editing/dt-editing.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/data-tables/editing/dt-editing.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL2VkaXRpbmcvZHQtZWRpdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/data-tables/editing/dt-editing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-tables/editing/dt-editing.component.ts ***!
  \*************************************************************/
/*! exports provided: DTEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTEditingComponent", function() { return DTEditingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTEditingComponent = /** @class */ (function () {
    function DTEditingComponent() {
        this.editing = {};
        this.rows = [];
        this.rows = data;
    }
    // Editing content code
    DTEditingComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = this.rows.slice();
    };
    DTEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-editing',
            template: __webpack_require__(/*! raw-loader!./dt-editing.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/editing/dt-editing.component.html"),
            styles: [__webpack_require__(/*! ./dt-editing.component.scss */ "./src/app/data-tables/editing/dt-editing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTEditingComponent);
    return DTEditingComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/filter/dt-filter.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/data-tables/filter/dt-filter.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL2ZpbHRlci9kdC1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-tables/filter/dt-filter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-tables/filter/dt-filter.component.ts ***!
  \***********************************************************/
/*! exports provided: DTFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTFilterComponent", function() { return DTFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);



var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTFilterComponent = /** @class */ (function () {
    function DTFilterComponent() {
        this.rows = [];
        this.temp = [];
        // Table Column Titles
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.temp = data.slice();
        this.rows = data;
    }
    DTFilterComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], DTFilterComponent.prototype, "table", void 0);
    DTFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-filter',
            template: __webpack_require__(/*! raw-loader!./dt-filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/filter/dt-filter.component.html"),
            styles: [__webpack_require__(/*! ./dt-filter.component.scss */ "./src/app/data-tables/filter/dt-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTFilterComponent);
    return DTFilterComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/fullscreen/dt-fullscreen.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/data-tables/fullscreen/dt-fullscreen.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fullscreen {\n  overflow: hidden; }\n  #fullscreen .height-600 {\n    height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvZGF0YS10YWJsZXMvZnVsbHNjcmVlbi9kdC1mdWxsc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVLO0VBQ0UsZ0JBQWdCLEVBQUE7RUFEbEI7SUFJSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL2Z1bGxzY3JlZW4vZHQtZnVsbHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgLy8gRm9yIEZ1bGxzY3JlZW4gRGF0YVRhYmxlXG5cbiAgICAgI2Z1bGxzY3JlZW4ge1xuICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAuaGVpZ2h0LTYwMCB7XG4gICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/data-tables/fullscreen/dt-fullscreen.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/data-tables/fullscreen/dt-fullscreen.component.ts ***!
  \*******************************************************************/
/*! exports provided: DTFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTFullScreenComponent", function() { return DTFullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/employee.json */ "./src/app/shared/data/employee.json");
var DTFullScreenComponent = /** @class */ (function () {
    function DTFullScreenComponent() {
        this.rows = [];
        this.rows = data;
    }
    DTFullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-fullscreen',
            template: __webpack_require__(/*! raw-loader!./dt-fullscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/fullscreen/dt-fullscreen.component.html"),
            styles: [__webpack_require__(/*! ./dt-fullscreen.component.scss */ "./src/app/data-tables/fullscreen/dt-fullscreen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTFullScreenComponent);
    return DTFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/paging/dt-paging.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/data-tables/paging/dt-paging.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL3BhZ2luZy9kdC1wYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-tables/paging/dt-paging.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-tables/paging/dt-paging.component.ts ***!
  \***********************************************************/
/*! exports provided: DTPagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTPagingComponent", function() { return DTPagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTPagingComponent = /** @class */ (function () {
    function DTPagingComponent() {
        this.rows = [];
        this.rows = data;
    }
    DTPagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-paging',
            template: __webpack_require__(/*! raw-loader!./dt-paging.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/paging/dt-paging.component.html"),
            styles: [__webpack_require__(/*! ./dt-paging.component.scss */ "./src/app/data-tables/paging/dt-paging.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTPagingComponent);
    return DTPagingComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/pinning/dt-pinning.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/data-tables/pinning/dt-pinning.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL3Bpbm5pbmcvZHQtcGlubmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/data-tables/pinning/dt-pinning.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-tables/pinning/dt-pinning.component.ts ***!
  \*************************************************************/
/*! exports provided: DTPinningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTPinningComponent", function() { return DTPinningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/employee.json */ "./src/app/shared/data/employee.json");
var DTPinningComponent = /** @class */ (function () {
    function DTPinningComponent() {
        this.rows = [];
        this.rows = data;
    }
    DTPinningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-pinning',
            template: __webpack_require__(/*! raw-loader!./dt-pinning.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/pinning/dt-pinning.component.html"),
            styles: [__webpack_require__(/*! ./dt-pinning.component.scss */ "./src/app/data-tables/pinning/dt-pinning.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTPinningComponent);
    return DTPinningComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/selection/dt-selection.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/data-tables/selection/dt-selection.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL3NlbGVjdGlvbi9kdC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/data-tables/selection/dt-selection.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/data-tables/selection/dt-selection.component.ts ***!
  \*****************************************************************/
/*! exports provided: DTSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTSelectionComponent", function() { return DTSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTSelectionComponent = /** @class */ (function () {
    function DTSelectionComponent() {
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.rows = data;
    }
    //  On select of dataTable's data row
    DTSelectionComponent.prototype.onSelect = function (event) {
        //your code here
    };
    //  On Activation of dataTable's data row
    DTSelectionComponent.prototype.onActivate = function (event) {
        //your code here
    };
    DTSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-selection',
            template: __webpack_require__(/*! raw-loader!./dt-selection.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/selection/dt-selection.component.html"),
            styles: [__webpack_require__(/*! ./dt-selection.component.scss */ "./src/app/data-tables/selection/dt-selection.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTSelectionComponent);
    return DTSelectionComponent;
}());



/***/ }),

/***/ "./src/app/data-tables/sorting/dt-sorting.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/data-tables/sorting/dt-sorting.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL3NvcnRpbmcvZHQtc29ydGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/data-tables/sorting/dt-sorting.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-tables/sorting/dt-sorting.component.ts ***!
  \*************************************************************/
/*! exports provided: DTSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DTSortingComponent", function() { return DTSortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../shared/data/company.json */ "./src/app/shared/data/company.json");
var DTSortingComponent = /** @class */ (function () {
    function DTSortingComponent() {
        this.rows = [];
        this.columns = [
            { name: 'Company' },
            { name: 'Name' },
            { name: 'Gender' }
        ];
        this.rows = data;
    }
    DTSortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dt-sorting',
            template: __webpack_require__(/*! raw-loader!./dt-sorting.component.html */ "./node_modules/raw-loader/index.js!./src/app/data-tables/sorting/dt-sorting.component.html"),
            styles: [__webpack_require__(/*! ./dt-sorting.component.scss */ "./src/app/data-tables/sorting/dt-sorting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DTSortingComponent);
    return DTSortingComponent;
}());



/***/ }),

/***/ "./src/app/shared/data/company.json":
/*!******************************************!*\
  !*** ./src/app/shared/data/company.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = [{"name":"Ethel Price","gender":"female","company":"Johnson, Johnson and Partners, LLC CMP DDC","age":22},{"name":"Claudine Neal","gender":"female","company":"Sealoud","age":55},{"name":"Beryl Rice","gender":"female","company":"Velity","age":67},{"name":"Wilder Gonzales","gender":"male","company":"Geekko"},{"name":"Georgina Schultz","gender":"female","company":"Suretech"},{"name":"Carroll Buchanan","gender":"male","company":"Ecosys"},{"name":"Valarie Atkinson","gender":"female","company":"Hopeli"},{"name":"Schroeder Mathews","gender":"male","company":"Polarium"},{"name":"Lynda Mendoza","gender":"female","company":"Dogspa"},{"name":"Sarah Massey","gender":"female","company":"Bisba"},{"name":"Robles Boyle","gender":"male","company":"Comtract"},{"name":"Evans Hickman","gender":"male","company":"Parleynet"},{"name":"Dawson Barber","gender":"male","company":"Dymi"},{"name":"Bruce Strong","gender":"male","company":"Xyqag"},{"name":"Nellie Whitfield","gender":"female","company":"Exospace"}];

/***/ }),

/***/ "./src/app/shared/data/employee.json":
/*!*******************************************!*\
  !*** ./src/app/shared/data/employee.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, default */
/***/ (function(module) {

module.exports = [{"id":0,"name":"Ramsey Cummings","gender":"male","age":52,"address":{"state":"South Carolina","city":"Glendale"}},{"id":1,"name":"Stefanie Huff","gender":"female","age":70,"address":{"state":"Arizona","city":"Beaverdale"}},{"id":2,"name":"Mabel David","gender":"female","age":52,"address":{"state":"New Mexico","city":"Grazierville"}},{"id":3,"name":"Frank Bradford","gender":"male","age":61,"address":{"state":"Wisconsin","city":"Saranap"}},{"id":4,"name":"Forbes Levine","gender":"male","age":34,"address":{"state":"Vermont","city":"Norris"}},{"id":5,"name":"Santiago Mcclain","gender":"male","age":38,"address":{"state":"Montana","city":"Bordelonville"}},{"id":6,"name":"Merritt Booker","gender":"male","age":33,"address":{"state":"New Jersey","city":"Aguila"}},{"id":7,"name":"Oconnor Wade","gender":"male","age":18,"address":{"state":"Virginia","city":"Kenmar"}},{"id":8,"name":"Leigh Beasley","gender":"female","age":53,"address":{"state":"Texas","city":"Alfarata"}},{"id":9,"name":"Johns Wood","gender":"male","age":52,"address":{"state":"Maine","city":"Witmer"}},{"id":10,"name":"Thompson Hays","gender":"male","age":38,"address":{"state":"Nevada","city":"Kipp"}},{"id":11,"name":"Hallie Mack","gender":"female","age":19,"address":{"state":"Minnesota","city":"Darrtown"}},{"id":12,"name":"Houston Santos","gender":"male","age":24,"address":{"state":"Georgia","city":"Crucible"}},{"id":13,"name":"Brandy Savage","gender":"female","age":65,"address":{"state":"Idaho","city":"Nord"}},{"id":14,"name":"Finch Barnett","gender":"male","age":22,"address":{"state":"Ohio","city":"Osmond"}},{"id":15,"name":"Nicole Crosby","gender":"female","age":77,"address":{"state":"Kentucky","city":"Fairfield"}},{"id":16,"name":"Carrie Mcconnell","gender":"female","age":26,"address":{"state":"South Dakota","city":"Waikele"}},{"id":17,"name":"Ann James","gender":"female","age":37,"address":{"state":"North Dakota","city":"Siglerville"}},{"id":18,"name":"Becky Sanford","gender":"female","age":48,"address":{"state":"Massachusetts","city":"Celeryville"}},{"id":19,"name":"Kathryn Rios","gender":"female","age":39,"address":{"state":"Delaware","city":"Kylertown"}},{"id":20,"name":"Dotson Vaughn","gender":"male","age":68,"address":{"state":"Arkansas","city":"Monument"}},{"id":21,"name":"Wright Kline","gender":"male","age":41,"address":{"state":"Missouri","city":"Bynum"}},{"id":22,"name":"Lula Morgan","gender":"female","age":52,"address":{"state":"Oregon","city":"Mapletown"}},{"id":23,"name":"Kay Mendez","gender":"female","age":50,"address":{"state":"Michigan","city":"Twilight"}},{"id":24,"name":"Mona Maddox","gender":"female","age":35,"address":{"state":"Wyoming","city":"Wilmington"}},{"id":25,"name":"Fulton Velez","gender":"male","age":66,"address":{"state":"Colorado","city":"Loretto"}},{"id":26,"name":"Ericka Craft","gender":"female","age":80,"address":{"state":"Nebraska","city":"Beaulieu"}},{"id":27,"name":"Richmond Rodriguez","gender":"male","age":62,"address":{"state":"Rhode Island","city":"Vallonia"}},{"id":28,"name":"Olsen Farmer","gender":"male","age":45,"address":{"state":"Connecticut","city":"Romeville"}},{"id":29,"name":"Sophie Austin","gender":"female","age":59,"address":{"state":"New Hampshire","city":"Gorst"}},{"id":30,"name":"Alta Olsen","gender":"female","age":58,"address":{"state":"Florida","city":"Drytown"}},{"id":31,"name":"Katherine Chavez","gender":"female","age":20,"address":{"state":"Mississippi","city":"Trucksville"}},{"id":32,"name":"Yvette Myers","gender":"female","age":69,"address":{"state":"Washington","city":"Bangor"}},{"id":33,"name":"Nguyen Dean","gender":"male","age":58,"address":{"state":"Alaska","city":"Caroline"}},{"id":34,"name":"Lauri Irwin","gender":"female","age":23,"address":{"state":"Hawaii","city":"Takilma"}},{"id":35,"name":"David Mclean","gender":"male","age":49,"address":{"state":"Louisiana","city":"Harviell"}},{"id":36,"name":"Tisha Cotton","gender":"female","age":78,"address":{"state":"Illinois","city":"Camas"}},{"id":37,"name":"Eliza Conrad","gender":"female","age":82,"address":{"state":"Utah","city":"Gwynn"}},{"id":38,"name":"Bolton Cooley","gender":"male","age":44,"address":{"state":"Oklahoma","city":"Glidden"}},{"id":39,"name":"Crosby Osborn","gender":"male","age":44,"address":{"state":"Alabama","city":"Buxton"}},{"id":40,"name":"Reese Tran","gender":"male","age":53,"address":{"state":"Maryland","city":"Kempton"}},{"id":41,"name":"Evangeline Larson","gender":"female","age":49,"address":{"state":"Pennsylvania","city":"Mayfair"}},{"id":42,"name":"Jimenez Frazier","gender":"male","age":23,"address":{"state":"California","city":"Ronco"}},{"id":43,"name":"Conner Tate","gender":"male","age":39,"address":{"state":"West Virginia","city":"Eastvale"}},{"id":44,"name":"Avery Rosales","gender":"male","age":71,"address":{"state":"Tennessee","city":"Cascades"}},{"id":45,"name":"Burris Marquez","gender":"male","age":32,"address":{"state":"North Carolina","city":"Chamizal"}},{"id":46,"name":"Hoover Cardenas","gender":"male","age":65,"address":{"state":"Kansas","city":"Joes"}},{"id":47,"name":"Moran Gomez","gender":"male","age":40,"address":{"state":"New York","city":"Knowlton"}},{"id":48,"name":"Boyd Juarez","gender":"male","age":33,"address":{"state":"Iowa","city":"Hemlock"}},{"id":49,"name":"John Mooney","gender":"female","age":73,"address":{"state":"Rhode Island","city":"Gardners"}},{"id":50,"name":"Avery Crawford","gender":"male","age":39,"address":{"state":"Hawaii","city":"Woodruff"}}];

/***/ })

}]);
//# sourceMappingURL=data-tables-data-tables-module.js.map