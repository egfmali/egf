(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"],{

/***/ "./node_modules/@angular/material/esm5/card.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/card.es5.js ***!
  \*********************************************************/
/*! exports provided: MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return MatCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return MatCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return MatCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return MatCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return MatCardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return MatCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return MatCardSmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return MatCardMdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return MatCardLgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return MatCardXlImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return MatCardAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return MatCardTitleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return MatCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardContent = /** @class */ (function () {
    function MatCardContent() {
    }
    MatCardContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-content',
                    host: { 'class': 'mat-card-content' }
                },] },
    ];
    return MatCardContent;
}());
/**
 * Title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardTitle = /** @class */ (function () {
    function MatCardTitle() {
    }
    MatCardTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                    host: {
                        'class': 'mat-card-title'
                    }
                },] },
    ];
    return MatCardTitle;
}());
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardSubtitle = /** @class */ (function () {
    function MatCardSubtitle() {
    }
    MatCardSubtitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                    host: {
                        'class': 'mat-card-subtitle'
                    }
                },] },
    ];
    return MatCardSubtitle;
}());
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardActions = /** @class */ (function () {
    function MatCardActions() {
        /**
         * Position of the actions inside the card.
         */
        this.align = 'start';
    }
    MatCardActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-actions',
                    exportAs: 'matCardActions',
                    host: {
                        'class': 'mat-card-actions',
                        '[class.mat-card-actions-align-end]': 'align === "end"',
                    }
                },] },
    ];
    MatCardActions.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatCardActions;
}());
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardFooter = /** @class */ (function () {
    function MatCardFooter() {
    }
    MatCardFooter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-footer',
                    host: { 'class': 'mat-card-footer' }
                },] },
    ];
    return MatCardFooter;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardImage = /** @class */ (function () {
    function MatCardImage() {
    }
    MatCardImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-image], [matCardImage]',
                    host: { 'class': 'mat-card-image' }
                },] },
    ];
    return MatCardImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardSmImage = /** @class */ (function () {
    function MatCardSmImage() {
    }
    MatCardSmImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-sm-image], [matCardImageSmall]',
                    host: { 'class': 'mat-card-sm-image' }
                },] },
    ];
    return MatCardSmImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardMdImage = /** @class */ (function () {
    function MatCardMdImage() {
    }
    MatCardMdImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-md-image], [matCardImageMedium]',
                    host: { 'class': 'mat-card-md-image' }
                },] },
    ];
    return MatCardMdImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardLgImage = /** @class */ (function () {
    function MatCardLgImage() {
    }
    MatCardLgImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-lg-image], [matCardImageLarge]',
                    host: { 'class': 'mat-card-lg-image' }
                },] },
    ];
    return MatCardLgImage;
}());
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardXlImage = /** @class */ (function () {
    function MatCardXlImage() {
    }
    MatCardXlImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-xl-image], [matCardImageXLarge]',
                    host: { 'class': 'mat-card-xl-image' }
                },] },
    ];
    return MatCardXlImage;
}());
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardAvatar = /** @class */ (function () {
    function MatCardAvatar() {
    }
    MatCardAvatar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-avatar], [matCardAvatar]',
                    host: { 'class': 'mat-card-avatar' }
                },] },
    ];
    return MatCardAvatar;
}());
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
var MatCard = /** @class */ (function () {
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    function MatCard(_animationMode) {
        this._animationMode = _animationMode;
    }
    MatCard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card',
                    exportAs: 'matCard',
                    template: "<ng-content></ng-content><ng-content select=\"mat-card-footer\"></ng-content>",
                    styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'class': 'mat-card',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    }
                },] },
    ];
    /** @nocollapse */
    MatCard.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    return MatCard;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * \@docs-private
 */
var MatCardHeader = /** @class */ (function () {
    function MatCardHeader() {
    }
    MatCardHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-header',
                    template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content><div class=\"mat-card-header-text\"><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-header' }
                },] },
    ];
    return MatCardHeader;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * \@docs-private
 */
var MatCardTitleGroup = /** @class */ (function () {
    function MatCardTitleGroup() {
    }
    MatCardTitleGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-title-group',
                    template: "<div><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content select=\"img\"></ng-content><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-title-group' }
                },] },
    ];
    return MatCardTitleGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatCardModule = /** @class */ (function () {
    function MatCardModule() {
    }
    MatCardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                    exports: [
                        MatCard,
                        MatCardHeader,
                        MatCardTitleGroup,
                        MatCardContent,
                        MatCardTitle,
                        MatCardSubtitle,
                        MatCardActions,
                        MatCardFooter,
                        MatCardSmImage,
                        MatCardMdImage,
                        MatCardLgImage,
                        MatCardImage,
                        MatCardXlImage,
                        MatCardAvatar,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                    ],
                    declarations: [
                        MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                        MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                        MatCardXlImage, MatCardAvatar,
                    ],
                },] },
    ];
    return MatCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=card.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/nature-colis/nature-colis.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/nature-colis/nature-colis.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"card\">\n\n            <div class=\"card-content\">\n                <div class=\"px-3\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-ils\"></i> {{natureColisSelected.uid ? natureColisSelected.libelle : 'Nouvelle nature du colis'}}</h4>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Libelle</label>\n                                <input type=\"text\" id=\"nama\" class=\"form-control\"\n                                       placeholder=\"Libelle\"\n                                       [(ngModel)]=\"natureColisSelected.libelle\" name=\"libelle\" required\n                                       #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                     class=\"alert alert-danger\">\n                                    libelle invalid !\n                                </div>\n\n<!--                                <small class=\"form-text text-muted danger\" *ngIf=\"!name.valid && (name.dirty || name.touched)\">-->\n<!--                                    libelle invalid !</small>-->\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"description\">Description</label>\n                                <textarea id=\"description\" rows=\"5\" class=\"form-control\"\n                                          placeholder=\"Description\"\n                                          [(ngModel)]=\"natureColisSelected.description\" name=\"description\" required\n                                          #description=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                </textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{natureColisSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"fa fa-ils\"></i> Nature du colis</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"natureColiss$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"description\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Description</ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/point-depot/point-depot.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/point-depot/point-depot.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n     <div class=\"px-4\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-map-pin\"></i> {{pointDepotSelected.uid ? pointDepotSelected.ville : 'Nouvelle point de depot'}}</h4>\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"libelle\">Libelle</label>\n                                        <input type=\"text\" id=\"libelle\" class=\"form-control\"\n                                               placeholder=\"Libelle\"\n                                               [(ngModel)]=\"pointDepotSelected.libelle\" name=\"libelle\" required\n                                               #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                             class=\"alert alert-danger\">\n                                            libelle invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"code\">Code</label>\n                                        <input type=\"text\" id=\"code\" class=\"form-control\"\n                                               placeholder=\"Code\"\n                                               [(ngModel)]=\"pointDepotSelected.code\" name=\"code\" required\n                                               #code=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                        <div [hidden]=\"code.valid || code.pristine\"\n                                             class=\"alert alert-danger\">\n                                            code invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label for=\"nameResponsable\">Responsable</label>\n                                <input type=\"text\" id=\"nameResponsable\" class=\"form-control\"\n                                       placeholder=\"Responsable\"\n                                       [(ngModel)]=\"pointDepotSelected.nameResponsable\" name=\"nameResponsable\" required\n                                       #nameResponsable=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                <div [hidden]=\"nameResponsable.valid || nameResponsable.pristine\"\n                                     class=\"alert alert-danger\">\n                                    responsable invalid !\n                                </div>\n                            </div>\n\n\n\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"pay\">Pays</label>\n                                        <ng-select id=\"pay\"\n                                           [items]=\"pays\"\n                                           [virtualScroll]=\"true\"\n                                           bindLabel=\"name\" bindValue=\"name\" placeholder=\"Selectionner le pays\" appendTo=\"body\"\n                                           [(ngModel)]=\"pointDepotSelected.pays\" name=\"pays\" required\n                                           (select)=\"onSelected($event)\"\n                                           #pay=\"ngModel\">\n                                        </ng-select>\n                                        <div [hidden]=\"pay.valid || pay.pristine\" class=\"alert alert-danger\">\n                                            pays invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ville\">Ville</label>\n                                        <input type=\"text\" id=\"ville\" class=\"form-control\"\n                                           placeholder=\"Ville\"\n                                           [(ngModel)]=\"pointDepotSelected.ville\" name=\"ville\" required\n                                           #ville=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                        <div [hidden]=\"ville.valid || ville.pristine\"\n                                             class=\"alert alert-danger\">\n                                            ville invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"address\">Adresse</label>\n                                <input type=\"text\" id=\"address\" class=\"form-control\"\n                                       placeholder=\"Adresse\"\n                                       [(ngModel)]=\"pointDepotSelected.address\" name=\"address\"\n                                       #address=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                            </div>\n\n\n                            <div style=\"width: 100%\">\n\n<!--                                <div class=\"form-group\">-->\n<!--                                    <mat-google-maps-autocomplete-->\n<!--                                            [country]=\"pointDepotSelected.pays\"-->\n<!--                                            type=\"address\"-->\n<!--                                            placeholderText=\"Adresse sur maps\"-->\n<!--                                            id=\"address\" [(ngModel)]=\"pointDepotSelected.address\" name=\"address\"-->\n<!--                                            (onAutocompleteSelected)=\"onAutocompleteSelected($event)\"-->\n<!--                                            (onLocationSelected)=\"onLocationSelected($event)\"-->\n<!--                                            (onGermanAddressMapped)=\"onGermanAddressMapped($event)\">-->\n<!--                                    </mat-google-maps-autocomplete>-->\n<!--                                </div>-->\n\n                                <div class=\"form-group\">\n                                    <agm-map\n                                            [latitude]=\"latitude\"\n                                            [longitude]=\"longitude\"\n                                            [scrollwheel]=\"true\"\n                                            [zoom]=\"zoom\">\n                                        <agm-marker\n                                            [latitude]=\"latitude\"\n                                            [longitude]=\"longitude\"\n                                            [markerDraggable]=\"true\"\n                                            (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                                    </agm-map>\n                                </div>\n\n\n                            </div>\n\n\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{pointDepotSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Point de dépots</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"pointDepots$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"code\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Code</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"address\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Adresse</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ row.address }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"nameResponsable\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Responsable</ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"fa fa-user-secret font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/societe/societe.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/societe/societe.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n     <div class=\"px-4\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-university\"></i> {{societeSelected.uid ? societeSelected.libelle : 'Nouvelle sociéte'}}</h4>\n\n                            <div class=\"form-group\">\n                                <label for=\"libelle\">Libelle</label>\n                                <input type=\"text\" id=\"libelle\" class=\"form-control\"\n                                       placeholder=\"Libelle\"\n                                       [(ngModel)]=\"societeSelected.libelle\" name=\"libelle\" required\n                                       #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                     class=\"alert alert-danger\">\n                                    libelle invalid !\n                                </div>\n                            </div>\n                            \n                            <div class=\"row\">\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"code\">Code</label>\n                                        <input type=\"text\" id=\"code\" class=\"form-control\"\n                                               placeholder=\"Code\"\n                                               [(ngModel)]=\"societeSelected.code\" name=\"code\" required\n                                               #code=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"code.valid || code.pristine\"\n                                             class=\"alert alert-danger\">\n                                            code invalid !\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"phone\">Téléphone</label>\n                                        <input type=\"text\" id=\"phone\" class=\"form-control\"\n                                               placeholder=\"Téléphone\"\n                                               [(ngModel)]=\"societeSelected.phone\" name=\"phone\" required\n                                               #phone=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"phone.valid || phone.pristine\"\n                                             class=\"alert alert-danger\">\n                                            téléphone invalid !\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"email\">Email</label>\n                                        <input type=\"text\" id=\"email\" class=\"form-control\"\n                                               placeholder=\"Email\"\n                                               [(ngModel)]=\"societeSelected.email\" name=\"phone\"\n                                               #email=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                    </div>\n                                </div>\n\n                            </div>\n\n\n\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"pay\">Pays</label>\n                                        <ng-select id=\"pay\"\n                                           [items]=\"pays\"\n                                           [virtualScroll]=\"true\"\n                                           bindLabel=\"name\" bindValue=\"name\" placeholder=\"Selectionner le pays\" appendTo=\"body\"\n                                           [(ngModel)]=\"societeSelected.pays\" name=\"pays\" required\n                                           (select)=\"onSelected($event)\"\n                                           #pay=\"ngModel\">\n                                        </ng-select>\n                                        <div [hidden]=\"pay.valid || pay.pristine\" class=\"alert alert-danger\">\n                                            pays invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ville\">Ville</label>\n                                        <input type=\"text\" id=\"ville\" class=\"form-control\"\n                                           placeholder=\"Ville\"\n                                           [(ngModel)]=\"societeSelected.ville\" name=\"ville\" required\n                                           #ville=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                        <div [hidden]=\"ville.valid || ville.pristine\"\n                                             class=\"alert alert-danger\">\n                                            ville invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"fax\">Fax</label>\n                                        <input type=\"text\" id=\"fax\" class=\"form-control\"\n                                               placeholder=\"Fax\"\n                                               [(ngModel)]=\"societeSelected.fax\" name=\"fax\"\n                                               #fax=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"bp\">Bp</label>\n                                        <input type=\"text\" id=\"bp\" class=\"form-control\"\n                                               placeholder=\"Bp\"\n                                               [(ngModel)]=\"societeSelected.bp\" name=\"bp\"\n                                               #bp=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                    </div>\n                                </div>\n\n                            </div>\n\n\n                            <div class=\"form-group\">\n                                <label for=\"address\">Adresse</label>\n                                <input type=\"text\" id=\"address\" class=\"form-control\"\n                                       placeholder=\"Adresse\"\n                                       [(ngModel)]=\"societeSelected.address\" name=\"address\"\n                                       #address=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                            </div>\n\n\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{societeSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">Sociétes</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"societes$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n<!--                <ngx-datatable-column name=\"code\">-->\n<!--                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>-->\n<!--                        <span (click)=\"sort()\"> Code</span>-->\n<!--                    </ng-template>-->\n<!--                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>-->\n<!--                        <strong>{{ value }}</strong>-->\n<!--                    </ng-template>-->\n<!--                </ngx-datatable-column>-->\n\n                <ngx-datatable-column name=\"phone\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Téléphone</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"email\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Email</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"address\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Adresse</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ row.address }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"fa fa-user-secret font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/trajet/trajet.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/trajet/trajet.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n <ng-template #contentMaps let-c=\"close\" let-d=\"dismiss\">\n     <div class=\"px-4\">\n        <div class=\"form-body\">\n            <h4 class=\"form-section\"><i class=\"fa fa-road\"></i> Détail {{trajetSelected?.libelle}}</h4>\n\n<!--            <agm-map-->\n<!--                    [latitude]=\"latitude\"-->\n<!--                    [longitude]=\"longitude\"-->\n<!--                    [scrollwheel]=\"true\"-->\n<!--                    [zoom]=\"zoom\">-->\n<!--                <agm-marker-->\n<!--                        [latitude]=\"latitude\"-->\n<!--                        [longitude]=\"longitude\"-->\n<!--                        [markerDraggable]=\"true\"-->\n<!--                        (dragEnd)=\"markerDragEnd($event)\"></agm-marker>-->\n<!--            </agm-map>-->\n\n            </div>\n        <div class=\"form-actions\">\n            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                <i class=\"ft-x\"></i> Fermer\n            </button>\n        </div>\n    </div>\n</ng-template>\n\n\n <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n     <div class=\"px-4\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-road\"></i> {{trajetSelected.uid ? trajetSelected.libelle : 'Nouveau trajet'}}</h4>\n\n                            <div class=\"row\">\n                                <div class=\"col-9\">\n                                    <div class=\"form-group\">\n                                        <label for=\"libelle\">Libelle</label>\n                                        <input type=\"text\" id=\"libelle\" class=\"form-control\"\n                                               placeholder=\"Libelle\"\n                                               [(ngModel)]=\"trajetSelected.libelle\" name=\"libelle\" required\n                                               #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                             class=\"alert alert-danger\">\n                                            libelle invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"code\">Code</label>\n                                        <input type=\"text\" id=\"code\" class=\"form-control\"\n                                               placeholder=\"Code\"\n                                               [(ngModel)]=\"trajetSelected.code\" name=\"code\" required\n                                               #code=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"code.valid || code.pristine\"\n                                             class=\"alert alert-danger\">\n                                            code invalid !\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"pointDepart\">Point de depart</label>\n                                        <ng-select id=\"pointDepart\"\n                                                   [items]=\"villeEscales$ | async\"\n                                                   [virtualScroll]=\"true\"\n                                                   bindLabel=\"ville\" bindValue=\"ville\" placeholder=\"Selectionner le point de depart\" appendTo=\"body\"\n                                                   [(ngModel)]=\"trajetSelected.pointDepart\" name=\"pointDepart\" required\n                                                   #pointDepart=\"ngModel\">\n                                        </ng-select>\n                                        <div [hidden]=\"pointDepart.valid || pointDepart.pristine\" class=\"alert alert-danger\">\n                                            point de depart invalid !\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"pointArrivee\">Point d'arrivée</label>\n                                        <ng-select\n                                               id=\"pointArrivee\"\n                                               [items]=\"villeEscales$ | async\"\n                                               [virtualScroll]=\"true\"\n                                               bindLabel=\"ville\"\n                                               bindValue=\"ville\"\n                                               placeholder=\"Selectionner le point d'arrivée\"\n                                               appendTo=\"body\"\n                                               [(ngModel)]=\"trajetSelected.pointArrivee\"\n                                               name=\"pointArrivee\" required\n                                               #pointArrivee=\"ngModel\">\n                                        </ng-select>\n                                        <div [hidden]=\"pointArrivee.valid || pointArrivee.pristine\" class=\"alert alert-danger\">\n                                            point d'arrivée invalid !\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-3\">\n                                    <div class=\"form-group\">\n                                        <label for=\"distance\">Distance(Km)</label>\n                                        <input type=\"number\" id=\"distance\" class=\"form-control\"\n                                           placeholder=\"Distance\"\n                                           [(ngModel)]=\"trajetSelected.distance\" name=\"distance\"\n                                           #distance=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                        <div [hidden]=\"distance.valid || distance.pristine\"\n                                             class=\"alert alert-danger\">\n                                            distance invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-9\">\n                                    <div class=\"form-group\">\n                                        <label for=\"description\">Description</label>\n                                        <input type=\"text\" id=\"description\" class=\"form-control\"\n                                           placeholder=\"Description\"\n                                           [(ngModel)]=\"trajetSelected.description\" name=\"description\"\n                                           #description=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                    </div>\n                                </div>\n                            </div>\n\n\n                                <div class=\"form-group\">\n                                    <label for=\"villeEscale\">Villes d'escale</label>\n                                    <ng-select id=\"villeEscale\"\n                                           [items]=\"villeEscales$ | async\"\n                                           [virtualScroll]=\"true\"\n                                           [multiple]=\"true\"\n                                           bindLabel=\"ville\"\n                                           bindValue=\"ville\"\n                                           placeholder=\"Selectionner une ville d'escale\"\n                                           appendTo=\"body\"\n                                           [(ngModel)]=\"trajetSelected.villeEscales\"\n                                           name=\"villeEscales\" required\n\n                                           (select)=\"onSelected($event)\"\n                                           #villeEscale=\"ngModel\">\n                                    </ng-select>\n                                    <div [hidden]=\"villeEscale.valid || villeEscale.pristine\" class=\"alert alert-danger\">\n                                        villes d'escales invalid !\n                                    </div>\n                                </div>\n\n\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{trajetSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"fa fa-road\"></i> Trajets</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"trajets$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n<!--                <ngx-datatable-column name=\"code\">-->\n<!--                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>-->\n<!--                        <span (click)=\"sort()\"> Code</span>-->\n<!--                    </ng-template>-->\n<!--                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>-->\n<!--                        <strong>{{ value }}</strong>-->\n<!--                    </ng-template>-->\n<!--                </ngx-datatable-column>-->\n\n                <ngx-datatable-column name=\"pointDepart\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Point de depart</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"pointArrivee\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Point d'arrivée</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"distance\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Distance</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }} Km</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Ville d'escales</span>\n                    </ng-template>\n                    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong> {{ row.villeEscales.length }} </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n<!--                            (click)=\"openShow(contentMaps,row)\"-->\n                            <a class=\"primary p-0\" data-original-title=\"\" title=\"\" >\n                                <i class=\"fa fa-road font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-acheminement/type-acheminement.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/type-acheminement/type-acheminement.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"card\">\n\n            <div class=\"card-content\">\n                <div class=\"px-3\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-road\"></i> {{typeAcheminementSelected.uid ? typeAcheminementSelected.libelle : 'Nouveau type d\\'acheminement'}}</h4>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Libelle</label>\n                                <input type=\"text\" id=\"nama\" class=\"form-control\"\n                                       placeholder=\"Libelle\"\n                                       [(ngModel)]=\"typeAcheminementSelected.libelle\" name=\"libelle\" required\n                                       #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                     class=\"alert alert-danger\">\n                                    libelle invalid !\n                                </div>\n\n<!--                                <small class=\"form-text text-muted danger\" *ngIf=\"!name.valid && (name.dirty || name.touched)\">-->\n<!--                                    libelle invalid !</small>-->\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"description\">Description</label>\n                                <textarea id=\"description\" rows=\"5\" class=\"form-control\"\n                                          placeholder=\"Description\"\n                                          [(ngModel)]=\"typeAcheminementSelected.description\" name=\"description\" required\n                                          #description=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                </textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{typeAcheminementSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"fa fa-road\"></i> Type d'achéminement</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"typeAcheminements$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"description\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Description</ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-colis/type-colis.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/type-colis/type-colis.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"card\">\n\n            <div class=\"card-content\">\n                <div class=\"px-3\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"ft-layout\"></i> {{typeColisSelected.uid ? typeColisSelected.libelle : 'Nouveau type de colis'}}</h4>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Libelle</label>\n                                <input type=\"text\" id=\"nama\" class=\"form-control\"\n                                       placeholder=\"Libelle\"\n                                       [(ngModel)]=\"typeColisSelected.libelle\" name=\"libelle\" required\n                                       #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                     class=\"alert alert-danger\">\n                                    libelle invalid !\n                                </div>\n\n<!--                                <small class=\"form-text text-muted danger\" *ngIf=\"!name.valid && (name.dirty || name.touched)\">-->\n<!--                                    libelle invalid !</small>-->\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Code</label>\n                                <input type=\"text\" id=\"code\" class=\"form-control\"\n                                       placeholder=\"Code\"\n                                       [(ngModel)]=\"typeColisSelected.code\" name=\"code\"\n                                       #code=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"description\">Description</label>\n                                <textarea id=\"description\" rows=\"5\" class=\"form-control\"\n                                          placeholder=\"Description\"\n                                          [(ngModel)]=\"typeColisSelected.description\" name=\"description\" required\n                                          #description=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                </textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{typeColisSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"ft-layout\"></i> Type de colis</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"typeColiss$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"code\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Code</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"description\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Description</ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-devis/type-devis.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/type-devis/type-devis.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\">\n        <div class=\"card\">\n\n            <div class=\"card-content\">\n                <div class=\"px-3\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"ft-grid\"></i> {{typeDevisSelected.uid ? typeDevisSelected.libelle : 'Nouveau type de devis'}}</h4>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Libelle</label>\n                                <input type=\"text\" id=\"nama\" class=\"form-control\"\n                                       placeholder=\"Libelle\"\n                                       [(ngModel)]=\"typeDevisSelected.libelle\" name=\"libelle\" required\n                                       #libelle=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                <div [hidden]=\"libelle.valid || libelle.pristine\"\n                                     class=\"alert alert-danger\">\n                                    libelle invalid !\n                                </div>\n\n<!--                                <small class=\"form-text text-muted danger\" *ngIf=\"!name.valid && (name.dirty || name.touched)\">-->\n<!--                                    libelle invalid !</small>-->\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"nama\">Code</label>\n                                <input type=\"text\" id=\"code\" class=\"form-control\"\n                                       placeholder=\"Code\"\n                                       [(ngModel)]=\"typeDevisSelected.code\" name=\"code\"\n                                       #code=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"description\">Description</label>\n                                <textarea id=\"description\" rows=\"5\" class=\"form-control\"\n                                          placeholder=\"Description\"\n                                          [(ngModel)]=\"typeDevisSelected.description\" name=\"description\" required\n                                          #description=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                                </textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{typeDevisSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"ft-grid\"></i> Type de devis</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n\n            <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n                <div class=\"card\">\n                    <div class=\"card-body pt-3 text-left\">\n                        <form class=\"taskboard-app-input row\">\n                            <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                                    <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                                </button>\n                            </fieldset>\n                            <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"icon-emoticon-smile\"></i>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                            </fieldset>\n\n                            <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                                    <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                                    <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                                </button>\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n            </section>\n\n            <ngx-datatable\n                    [rows]=\"typeDeviss$ | async\"\n                    [loadingIndicator]=\"true\"\n                    [swapColumns]=\"true\"\n                    class='bootstrap'\n                    [columns]=\"columns\"\n                    [columnMode]=\"columnMode\"\n                    [headerHeight]=\"40\"\n                    [footerHeight]=\"40\"\n                    [rowHeight]=\"'auto'\"\n                    [reorderable]=\"true\"\n                    [limit]=\"10\"\n                    (select)=\"onSelect($event)\"\n            >\n\n                <ngx-datatable-column name=\"createdDate\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"createdByDisplayName\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\">Acteur</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value ? value:'admin'  }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"code\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Code</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"libelle\">\n                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                        <span (click)=\"sort()\"> Libelle</span>\n                    </ng-template>\n                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"description\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Description</ng-template>\n                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                        <strong>{{ value }}</strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n                <ngx-datatable-column name=\"uid\">\n                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                        <strong>\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                            </a>\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                            </a>\n                        </strong>\n                    </ng-template>\n                </ngx-datatable-column>\n\n            </ngx-datatable>\n\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuration/component/ville-escale/ville-escale.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuration/component/ville-escale/ville-escale.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Filter Datatable Options Starts -->\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"px-4\">\n                    <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n                        <div class=\"form-body\">\n                            <h4 class=\"form-section\"><i class=\"fa fa-map-o\"></i> {{villeEscaleSelected.uid ? villeEscaleSelected.ville : 'Nouvelle ville d\\'escale'}}</h4>\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"pay\">Pays</label>\n                                        <ng-select id=\"pay\"\n                                           [items]=\"pays\"\n                                           [virtualScroll]=\"true\"\n                                           bindLabel=\"name\" bindValue=\"name\" placeholder=\"Selectionner le pays\" appendTo=\"body\"\n                                           [(ngModel)]=\"villeEscaleSelected.pays\" name=\"pays\" required\n                                           (select)=\"onSelected($event)\"\n                                           #pay=\"ngModel\">\n                                        </ng-select>\n                                        <div [hidden]=\"pay.valid || pay.pristine\" class=\"alert alert-danger\">\n                                            pays invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"ville\">Ville</label>\n                                        <input type=\"text\" id=\"ville\" class=\"form-control\"\n                                               placeholder=\"Ville\"\n                                               [(ngModel)]=\"villeEscaleSelected.ville\" name=\"ville\" required\n                                               #ville=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n\n                                        <div [hidden]=\"ville.valid || ville.pristine\"\n                                             class=\"alert alert-danger\">\n                                            ville invalid !\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label for=\"address\">Adresse</label>\n                                <input type=\"text\" id=\"address\" class=\"form-control\"\n                                       placeholder=\"Adresse\"\n                                       [(ngModel)]=\"villeEscaleSelected.address\" name=\"address\"\n                                       #address=\"ngModel\" [ngModelOptions]=\"{updateOn: 'blur'}\">\n                            </div>\n\n                            <div style=\"width: 100%\">\n\n<!--                                <div class=\"form-group\">-->\n<!--                                    <mat-google-maps-autocomplete-->\n<!--                                            [country]=\"villeEscaleSelected.pays\"-->\n<!--                                            type=\"address\"-->\n<!--                                            placeholderText=\"Adresse sur maps\"-->\n<!--                                            id=\"address\" [(ngModel)]=\"villeEscaleSelected.address\" name=\"address\"-->\n<!--                                            (onAutocompleteSelected)=\"onAutocompleteSelected($event)\"-->\n<!--                                            (onLocationSelected)=\"onLocationSelected($event)\"-->\n<!--                                            (onGermanAddressMapped)=\"onGermanAddressMapped($event)\">-->\n<!--                                    </mat-google-maps-autocomplete>-->\n<!--                                </div>-->\n\n                                <div class=\"form-group\" style=\"height: 250px;\">\n                                    <agm-map\n                                        [latitude]=\"latitude\"\n                                        [longitude]=\"longitude\"\n                                        [scrollwheel]=\"true\"\n                                        [zoom]=\"zoom\">\n                                        <agm-marker\n                                            [latitude]=\"latitude\"\n                                            [longitude]=\"longitude\"\n                                            [markerDraggable]=\"true\"\n                                            (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                                    </agm-map>\n                                </div>\n\n\n                            </div>\n\n\n                        </div>\n\n                        <div class=\"form-actions\">\n                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                                <i class=\"ft-x\"></i> Annuler\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" [disabled]=\"!f.valid\">\n                                <i class=\"fa fa-check-square-o\"></i>  {{villeEscaleSelected.uid ? 'Modifier':'Ajouter'}}\n                            </button>\n                        </div>\n                    </form>\n                </div>\n</ng-template>\n\n\n<section id=\"filter\" class=\"mb-3\">\n    <div class=\"row text-left\">\n        <div class=\"col-12\">\n            <div class=\"content-header\"><i class=\"fa fa-map-o\"></i> Ville d'escale</div>\n            <p class=\"content-sub-header\">Tables with some actions and with more feathers.</p>\n        </div>\n    </div>\n\n    <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n        <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n                <form class=\"taskboard-app-input row\">\n                    <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n                        <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\" style=\"width: 100%\" (click)=\"openAdd(content)\">\n                            <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n                            <span class=\"d-lg-inline-block d-none ml-1\">Nouveau</span>\n                        </button>\n                    </fieldset>\n                    <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n                        <div class=\"form-control-position\">\n                            <i class=\"icon-emoticon-smile\"></i>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder='Chercher' (keyup)='updateFilter($event)'>\n                    </fieldset>\n\n                    <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n                        <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n                            <i class=\"ft ft-search d-lg-none d-xl-inline-block\"></i>\n                            <span class=\"d-lg-inline-block d-none ml-1\">Chercher</span>\n                        </button>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n        <div class=\"card\">\n             <ngb-tabset\n                 type=\"pills\"\n                 [justify]=\"currentJustify\"\n             >\n            <ngb-tab>\n                <ng-template ngbTabTitle><b><i class=\"fa fa-th-list\"></i> Tableau ville d'escale</b></ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ngx-datatable\n                                    [rows]=\"villeEscales$ | async\"\n                                    [loadingIndicator]=\"true\"\n                                    [swapColumns]=\"true\"\n                                    class='bootstrap'\n                                    [columns]=\"columns\"\n                                    [columnMode]=\"columnMode\"\n                                    [headerHeight]=\"40\"\n                                    [footerHeight]=\"40\"\n                                    [rowHeight]=\"'auto'\"\n                                    [reorderable]=\"true\"\n                                    [limit]=\"10\"\n                                    (select)=\"onSelect($event)\"\n                            >\n\n                                <ngx-datatable-column name=\"createdDate\">\n                                    <ng-template let-column=\"column\" ngx-datatable-header-template> Date </ng-template>\n                                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                        <strong>{{ toDate(value) | date:'dd/MM/yyyy HH:mm'  }}</strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                                <ngx-datatable-column name=\"createdByDisplayName\">\n                                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                                        <span (click)=\"sort()\">Acteur</span>\n                                    </ng-template>\n                                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                                        <strong>{{ value ? value:'admin'  }}</strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                                <ngx-datatable-column name=\"pays\">\n                                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                                        <span (click)=\"sort()\"> Pays</span>\n                                    </ng-template>\n                                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                                        <strong>{{ value }}</strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                                <ngx-datatable-column name=\"ville\">\n                                    <ng-template let-column=\"column\" let-sort=\"sortFn\" ngx-datatable-header-template>\n                                        <span (click)=\"sort()\"> Ville</span>\n                                    </ng-template>\n                                    <ng-template let-row=\"value\" let-value=\"value\" ngx-datatable-cell-template>\n                                        <strong>{{ value }}</strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                                <ngx-datatable-column name=\"address\">\n                                    <ng-template let-column=\"column\" ngx-datatable-header-template>Adresse</ng-template>\n                                    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n                                        <strong>{{ value }}</strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                                <ngx-datatable-column name=\"uid\">\n                                    <ng-template let-column=\"column\" ngx-datatable-header-template>Actions</ng-template>\n                                    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n                                        <strong>\n                                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"openEdite(content,row)\">\n                                                <i class=\"ft-edit-2 font-medium-3 mr-2\"></i>\n                                            </a>\n                                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"confirmCancelButton(value)\">\n                                                <i class=\"ft-x font-medium-3 mr-2\"></i>\n                                            </a>\n                                        </strong>\n                                    </ng-template>\n                                </ngx-datatable-column>\n\n                            </ngx-datatable>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n\n            <ngb-tab>\n                <ng-template ngbTabTitle><b><i class=\"fa fa-map-marker\"></i> Géolocalisation ville d'escale</b></ng-template>\n                <ng-template ngbTabContent>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <agm-map\n                                        [latitude]=\"latitude\"\n                                        [longitude]=\"longitude\"\n                                        [scrollwheel]=\"true\"\n                                        [zoom]=\"zoom\"\n                                        style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;background-color: rgb(229, 227, 223);\"\n                                >\n                                    <agm-marker\n                                            [latitude]=\"latitude\"\n                                            [longitude]=\"longitude\"\n                                            [markerDraggable]=\"true\"\n                                            (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n                                </agm-map>\n                            </div>\n                        </div>\n                </ng-template>\n            </ngb-tab>\n\n        </ngb-tabset>\n        </div>\n    </section>\n\n</section>"

/***/ }),

/***/ "./src/app/configuration/component/nature-colis/nature-colis.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/configuration/component/nature-colis/nature-colis.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50L25hdHVyZS1jb2xpcy9uYXR1cmUtY29saXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuration/component/nature-colis/nature-colis.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/configuration/component/nature-colis/nature-colis.component.ts ***!
  \********************************************************************************/
/*! exports provided: NatureColisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureColisComponent", function() { return NatureColisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_nature_colis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/nature-colis */ "./src/app/configuration/model/nature-colis.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_nature_colis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/nature-colis.service */ "./src/app/configuration/service/nature-colis.service.ts");












var NatureColisComponent = /** @class */ (function () {
    function NatureColisComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName', sortable: true }, { name: 'libelle', sortable: true }, { name: 'description', sortable: false },];
        this.isLoading = false;
        this.initData();
    }
    NatureColisComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].fromaTimestamp(value);
    };
    NatureColisComponent.prototype.initData = function () {
        this.natureColiss$ = this.service.findAll();
    };
    NatureColisComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.natureColiss$ = this.service.search(val);
        // this.table.offset = 0;
    };
    NatureColisComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.natureColisSelected);
        this.natureColisSelected.uid ? this.update() : this.add();
    };
    NatureColisComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.natureColisSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.natureColisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].createKeywords(_this.natureColisSelected.libelle);
                _this.service.create(_this.natureColisSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Cette nature du Colis " + _this.natureColisSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
        });
    };
    NatureColisComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.natureColisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].createKeywords(this.natureColisSelected.libelle);
        this.service.update(this.natureColisSelected.uid, this.natureColisSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    NatureColisComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.natureColisSelected = new _model_nature_colis__WEBPACK_IMPORTED_MODULE_3__["NatureColis"]();
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.natureColisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NatureColisComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.natureColisSelected = value;
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.natureColisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    NatureColisComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NatureColisComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    NatureColisComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    NatureColisComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    NatureColisComponent.ctorParameters = function () { return [
        { type: _service_nature_colis_service__WEBPACK_IMPORTED_MODULE_11__["NatureColisService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], NatureColisComponent.prototype, "form", void 0);
    NatureColisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nature-colis',
            template: __webpack_require__(/*! raw-loader!./nature-colis.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/nature-colis/nature-colis.component.html"),
            styles: [__webpack_require__(/*! ./nature-colis.component.scss */ "./src/app/configuration/component/nature-colis/nature-colis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_nature_colis_service__WEBPACK_IMPORTED_MODULE_11__["NatureColisService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], NatureColisComponent);
    return NatureColisComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/point-depot/point-depot.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/configuration/component/point-depot/point-depot.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  width: 100%; }\n\n.autocomplete-container {\n  padding: 1rem 0 1rem 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvY29uZmlndXJhdGlvbi9jb21wb25lbnQvcG9pbnQtZGVwb3QvcG9pbnQtZGVwb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUViO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50L3BvaW50LWRlcG90L3BvaW50LWRlcG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/configuration/component/point-depot/point-depot.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/configuration/component/point-depot/point-depot.component.ts ***!
  \******************************************************************************/
/*! exports provided: PointDepotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointDepotComponent", function() { return PointDepotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _model_point_depot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../model/point-depot */ "./src/app/configuration/model/point-depot.ts");
/* harmony import */ var _service_point_depot_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../service/point-depot.service */ "./src/app/configuration/service/point-depot.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);










;





var GeoPoint = firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].GeoPoint;
var PointDepotComponent = /** @class */ (function () {
    function PointDepotComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [
            { name: 'createdDate', sortable: true },
            { name: 'createdByDisplayName', sortable: true },
            { name: 'libelle', sortable: true },
            { name: 'code', sortable: true },
            { name: 'address', sortable: false },
            { name: 'nameResponsable', sortable: true },
        ];
        this.isLoading = false;
        this.appearance = _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_10__["Appearance"];
        this.zoom = 10;
        this.latitude = 52.520008;
        this.longitude = 13.404954;
        this.pays = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].pays;
        this.setCurrentPosition();
        this.initData();
    }
    PointDepotComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].fromaTimestamp(value);
    };
    PointDepotComponent.prototype.initData = function () {
        this.pointDepots$ = this.service.findAll();
    };
    PointDepotComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.pointDepots$ = this.service.search(val);
        // this.table.offset = 0;
    };
    PointDepotComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.pointDepotSelected);
        this.pointDepotSelected.uid ? this.update() : this.add();
    };
    PointDepotComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.pointDepotSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.pointDepotSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(_this.pointDepotSelected.libelle);
                _this.service.create(_this.pointDepotSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Cette point de depot " + _this.pointDepotSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    PointDepotComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.pointDepotSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(this.pointDepotSelected.libelle);
        this.service.update(this.pointDepotSelected.uid, this.pointDepotSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    PointDepotComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.pointDepotSelected = new _model_point_depot__WEBPACK_IMPORTED_MODULE_11__["PointDepot"]();
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.pointDepotSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PointDepotComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.pointDepotSelected = value;
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.pointDepotSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    PointDepotComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PointDepotComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    PointDepotComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    PointDepotComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    // initial user position on the map
    PointDepotComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.pointDepotSelected.geopoint = new GeoPoint(_this.latitude, _this.longitude);
                _this.zoom = 12;
            });
            this.latitude;
        }
    };
    PointDepotComponent.prototype.onAutocompleteSelected = function (result) {
        console.log('onAutocompleteSelected ===>>>', result);
        this.pointDepotSelected.geopoint = new GeoPoint(result.geometry.location.lat(), result.geometry.location.lng());
        this.pointDepotSelected.address = result.formatted_address;
    };
    PointDepotComponent.prototype.onLocationSelected = function (location) {
        console.log('onLocationSelected ===>>>', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.pointDepotSelected.geopoint = new GeoPoint(location.latitude, location.longitude);
    };
    PointDepotComponent.prototype.onGermanAddressMapped = function ($event) {
        console.log('onGermanAddressMapped ===>>>', $event);
        this.pointDepotSelected.geopoint = new GeoPoint($event.geoLocation.latitude, $event.geoLocation.longitude);
        this.pointDepotSelected.address = $event.displayAddress;
        this.pointDepotSelected.pays = $event.state.long;
    };
    PointDepotComponent.prototype.markerDragEnd = function ($event) {
        console.log('markerDragEnd ===>>>', $event.coords);
        console.log('markerDragEnd lat ===>>>', $event.coords.lat);
        console.log('markerDragEnd lng ===>>>', $event.coords.lng);
        this.pointDepotSelected.geopoint = new GeoPoint($event.coords.lat, $event.coords.lng);
    };
    PointDepotComponent.prototype.onSelected = function ($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    };
    PointDepotComponent.ctorParameters = function () { return [
        { type: _service_point_depot_service__WEBPACK_IMPORTED_MODULE_12__["PointDepotService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PointDepotComponent.prototype, "form", void 0);
    PointDepotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poit-depot',
            template: __webpack_require__(/*! raw-loader!./point-depot.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/point-depot/point-depot.component.html"),
            styles: [__webpack_require__(/*! ./point-depot.component.scss */ "./src/app/configuration/component/point-depot/point-depot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_point_depot_service__WEBPACK_IMPORTED_MODULE_12__["PointDepotService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], PointDepotComponent);
    return PointDepotComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/societe/societe.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/configuration/component/societe/societe.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  width: 100%; }\n\n.autocomplete-container {\n  padding: 1rem 0 1rem 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvY29uZmlndXJhdGlvbi9jb21wb25lbnQvc29jaWV0ZS9zb2NpZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFFYjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmF0aW9uL2NvbXBvbmVudC9zb2NpZXRlL3NvY2lldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/configuration/component/societe/societe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/configuration/component/societe/societe.component.ts ***!
  \**********************************************************************/
/*! exports provided: SocieteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocieteComponent", function() { return SocieteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _model_societe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/societe */ "./src/app/configuration/model/societe.ts");
/* harmony import */ var _service_societe_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/societe.service */ "./src/app/configuration/service/societe.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");










;



var SocieteComponent = /** @class */ (function () {
    function SocieteComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columns = [
            { name: 'createdDate', sortable: true },
            { name: 'createdByDisplayName', sortable: true },
            { name: 'libelle', sortable: true },
            { name: 'code', sortable: true },
            { name: 'phone', sortable: true },
            { name: 'email', sortable: true },
            { name: 'ville', sortable: true },
            { name: 'address', sortable: false },
        ];
        this.isLoading = false;
        this.pays = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].pays;
        this.initData();
    }
    SocieteComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].fromaTimestamp(value);
    };
    SocieteComponent.prototype.initData = function () {
        this.societes$ = this.service.findAll();
    };
    SocieteComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.societes$ = this.service.search(val);
        // this.table.offset = 0;
    };
    SocieteComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.societeSelected);
        this.societeSelected.uid ? this.update() : this.add();
    };
    SocieteComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.societeSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.societeSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(_this.societeSelected.libelle);
                _this.service.create(_this.societeSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Cette point de depot " + _this.societeSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    SocieteComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.societeSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(this.societeSelected.libelle);
        this.service.update(this.societeSelected.uid, this.societeSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    SocieteComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.societeSelected = new _model_societe__WEBPACK_IMPORTED_MODULE_10__["Societe"]();
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.societeSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    SocieteComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.societeSelected = value;
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.societeSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    SocieteComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    SocieteComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    SocieteComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    SocieteComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    SocieteComponent.prototype.onSelected = function ($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    };
    SocieteComponent.ctorParameters = function () { return [
        { type: _service_societe_service__WEBPACK_IMPORTED_MODULE_11__["SocieteService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], SocieteComponent.prototype, "form", void 0);
    SocieteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-societe',
            template: __webpack_require__(/*! raw-loader!./societe.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/societe/societe.component.html"),
            styles: [__webpack_require__(/*! ./societe.component.scss */ "./src/app/configuration/component/societe/societe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_societe_service__WEBPACK_IMPORTED_MODULE_11__["SocieteService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], SocieteComponent);
    return SocieteComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/trajet/trajet.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/configuration/component/trajet/trajet.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  width: 100%; }\n\n.autocomplete-container {\n  padding: 1rem 0 1rem 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvY29uZmlndXJhdGlvbi9jb21wb25lbnQvdHJhamV0L3RyYWpldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBRWI7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29uZmlndXJhdGlvbi9jb21wb25lbnQvdHJhamV0L3RyYWpldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/configuration/component/trajet/trajet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/configuration/component/trajet/trajet.component.ts ***!
  \********************************************************************/
/*! exports provided: TrajetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrajetComponent", function() { return TrajetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _model_trajet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/trajet */ "./src/app/configuration/model/trajet.ts");
/* harmony import */ var _service_trajet_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/trajet.service */ "./src/app/configuration/service/trajet.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_ville_escale_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../service/ville-escale.service */ "./src/app/configuration/service/ville-escale.service.ts");










;




var TrajetComponent = /** @class */ (function () {
    function TrajetComponent(service, villeEscaleService, modal, router, route, fb, notification) {
        this.service = service;
        this.villeEscaleService = villeEscaleService;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [
            { name: 'createdDate', sortable: true },
            { name: 'createdByDisplayName', sortable: true },
            { name: 'libelle', sortable: true },
            { name: 'code', sortable: true },
            { name: 'pointDepart', sortable: true },
            { name: 'pointArrivee', sortable: true },
            { name: 'distance', sortable: true },
        ];
        this.isLoading = false;
        this.pays = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].pays;
        this.initData();
    }
    TrajetComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].fromaTimestamp(value);
    };
    TrajetComponent.prototype.initData = function () {
        this.villeEscales$ = this.villeEscaleService.findAll();
        this.trajets$ = this.service.findAll();
    };
    TrajetComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.trajets$ = this.service.search(val);
        // this.table.offset = 0;
    };
    TrajetComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.trajetSelected);
        this.trajetSelected.uid ? this.update() : this.add();
    };
    TrajetComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.trajetSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.trajetSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(_this.trajetSelected.libelle);
                _this.service.create(_this.trajetSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Ce trajet " + _this.trajetSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    TrajetComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.trajetSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(this.trajetSelected.libelle);
        this.service.update(this.trajetSelected.uid, this.trajetSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    TrajetComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.trajetSelected = new _model_trajet__WEBPACK_IMPORTED_MODULE_10__["Trajet"]();
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.trajetSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TrajetComponent.prototype.openShow = function (contentMaps, value) {
        var _this = this;
        console.log("openShow", value);
        this.trajetSelected = value;
        this.modal.open(contentMaps, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.trajetSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TrajetComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.trajetSelected = value;
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.trajetSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TrajetComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TrajetComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    TrajetComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    TrajetComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    TrajetComponent.prototype.onSelected = function ($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    };
    TrajetComponent.ctorParameters = function () { return [
        { type: _service_trajet_service__WEBPACK_IMPORTED_MODULE_11__["TrajetService"] },
        { type: _service_ville_escale_service__WEBPACK_IMPORTED_MODULE_13__["VilleEscaleService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], TrajetComponent.prototype, "form", void 0);
    TrajetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trajet',
            template: __webpack_require__(/*! raw-loader!./trajet.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/trajet/trajet.component.html"),
            styles: [__webpack_require__(/*! ./trajet.component.scss */ "./src/app/configuration/component/trajet/trajet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_trajet_service__WEBPACK_IMPORTED_MODULE_11__["TrajetService"],
            _service_ville_escale_service__WEBPACK_IMPORTED_MODULE_13__["VilleEscaleService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], TrajetComponent);
    return TrajetComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/type-acheminement/type-acheminement.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/configuration/component/type-acheminement/type-acheminement.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50L3R5cGUtYWNoZW1pbmVtZW50L3R5cGUtYWNoZW1pbmVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/configuration/component/type-acheminement/type-acheminement.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/configuration/component/type-acheminement/type-acheminement.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TypeAcheminementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAcheminementComponent", function() { return TypeAcheminementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _model_type_acheminement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/type-acheminement */ "./src/app/configuration/model/type-acheminement.ts");
/* harmony import */ var _service_type_acheminement_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/type-acheminement.service */ "./src/app/configuration/service/type-acheminement.service.ts");












var TypeAcheminementComponent = /** @class */ (function () {
    function TypeAcheminementComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName', sortable: true }, { name: 'libelle', sortable: true }, { name: 'description', sortable: false },];
        this.isLoading = false;
        this.initData();
    }
    TypeAcheminementComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].fromaTimestamp(value);
    };
    TypeAcheminementComponent.prototype.initData = function () {
        this.typeAcheminements$ = this.service.findAll();
    };
    TypeAcheminementComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.typeAcheminements$ = this.service.search(val);
        // this.table.offset = 0;
    };
    TypeAcheminementComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.typeAcheminementSelected);
        this.typeAcheminementSelected.uid ? this.update() : this.add();
    };
    TypeAcheminementComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.typeAcheminementSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.typeAcheminementSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(_this.typeAcheminementSelected.libelle);
                _this.service.create(_this.typeAcheminementSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Cette nature du Colis " + _this.typeAcheminementSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    TypeAcheminementComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.typeAcheminementSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(this.typeAcheminementSelected.libelle);
        this.service.update(this.typeAcheminementSelected.uid, this.typeAcheminementSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    TypeAcheminementComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.typeAcheminementSelected = new _model_type_acheminement__WEBPACK_IMPORTED_MODULE_10__["TypeAcheminement"]();
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeAcheminementSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TypeAcheminementComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.typeAcheminementSelected = value;
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeAcheminementSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TypeAcheminementComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TypeAcheminementComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    TypeAcheminementComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    TypeAcheminementComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    TypeAcheminementComponent.ctorParameters = function () { return [
        { type: _service_type_acheminement_service__WEBPACK_IMPORTED_MODULE_11__["TypeAcheminementService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], TypeAcheminementComponent.prototype, "form", void 0);
    TypeAcheminementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-acheminement',
            template: __webpack_require__(/*! raw-loader!./type-acheminement.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-acheminement/type-acheminement.component.html"),
            styles: [__webpack_require__(/*! ./type-acheminement.component.scss */ "./src/app/configuration/component/type-acheminement/type-acheminement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_type_acheminement_service__WEBPACK_IMPORTED_MODULE_11__["TypeAcheminementService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], TypeAcheminementComponent);
    return TypeAcheminementComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/type-colis/type-colis.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/configuration/component/type-colis/type-colis.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50L3R5cGUtY29saXMvdHlwZS1jb2xpcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/configuration/component/type-colis/type-colis.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/configuration/component/type-colis/type-colis.component.ts ***!
  \****************************************************************************/
/*! exports provided: TypeColisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeColisComponent", function() { return TypeColisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_type_colis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/type-colis */ "./src/app/configuration/model/type-colis.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _service_type_colis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/type-colis.service */ "./src/app/configuration/service/type-colis.service.ts");












var TypeColisComponent = /** @class */ (function () {
    function TypeColisComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName', sortable: true }, { name: 'code', sortable: true }, { name: 'libelle', sortable: true }, { name: 'description', sortable: false },];
        this.isLoading = false;
        this.initData();
    }
    TypeColisComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].fromaTimestamp(value);
    };
    TypeColisComponent.prototype.initData = function () {
        this.typeColiss$ = this.service.findAll();
    };
    TypeColisComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.typeColiss$ = this.service.search(val);
        // this.table.offset = 0;
    };
    TypeColisComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.typeColisSelected);
        this.typeColisSelected.uid ? this.update() : this.add();
    };
    TypeColisComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.typeColisSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.typeColisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].createKeywords(_this.typeColisSelected.libelle);
                _this.service.create(_this.typeColisSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Le typde de Colis " + _this.typeColisSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
        });
    };
    TypeColisComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.typeColisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_9__["Helpers"].createKeywords(this.typeColisSelected.libelle);
        this.service.update(this.typeColisSelected.uid, this.typeColisSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    TypeColisComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.typeColisSelected = new _model_type_colis__WEBPACK_IMPORTED_MODULE_3__["TypeColis"]();
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeColisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TypeColisComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.typeColisSelected = value;
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeColisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TypeColisComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TypeColisComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    TypeColisComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    TypeColisComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_8__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    TypeColisComponent.ctorParameters = function () { return [
        { type: _service_type_colis_service__WEBPACK_IMPORTED_MODULE_11__["TypeColisService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], TypeColisComponent.prototype, "form", void 0);
    TypeColisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-colis',
            template: __webpack_require__(/*! raw-loader!./type-colis.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-colis/type-colis.component.html"),
            styles: [__webpack_require__(/*! ./type-colis.component.scss */ "./src/app/configuration/component/type-colis/type-colis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_type_colis_service__WEBPACK_IMPORTED_MODULE_11__["TypeColisService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])
    ], TypeColisComponent);
    return TypeColisComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/type-devis/type-devis.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/configuration/component/type-devis/type-devis.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29tcG9uZW50L3R5cGUtZGV2aXMvdHlwZS1kZXZpcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/configuration/component/type-devis/type-devis.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/configuration/component/type-devis/type-devis.component.ts ***!
  \****************************************************************************/
/*! exports provided: TypeDevisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDevisComponent", function() { return TypeDevisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_type_devis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/type-devis.service */ "./src/app/configuration/service/type-devis.service.ts");
/* harmony import */ var _model_type_devis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/type-devis */ "./src/app/configuration/model/type-devis.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












var TypeDevisComponent = /** @class */ (function () {
    function TypeDevisComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        // Table Column Titles
        this.columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName', sortable: true }, { name: 'code', sortable: true }, { name: 'libelle', sortable: true }, { name: 'description', sortable: false },];
        this.isLoading = false;
        this.initData();
    }
    TypeDevisComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_10__["Helpers"].fromaTimestamp(value);
    };
    TypeDevisComponent.prototype.initData = function () {
        this.typeDeviss$ = this.service.findAll();
    };
    TypeDevisComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.typeDeviss$ = this.service.search(val);
        // this.table.offset = 0;
    };
    TypeDevisComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.typeDevisSelected);
        this.typeDevisSelected.uid ? this.update() : this.add();
    };
    TypeDevisComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('libelle', this.typeDevisSelected.libelle)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.typeDevisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_10__["Helpers"].createKeywords(_this.typeDevisSelected.libelle);
                _this.service.create(_this.typeDevisSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Le typde de devis " + _this.typeDevisSelected.libelle + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].errorMessage);
        });
    };
    TypeDevisComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.typeDevisSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_10__["Helpers"].createKeywords(this.typeDevisSelected.libelle);
        this.service.update(this.typeDevisSelected.uid, this.typeDevisSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    TypeDevisComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.typeDevisSelected = new _model_type_devis__WEBPACK_IMPORTED_MODULE_4__["TypeDevis"]();
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeDevisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TypeDevisComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.typeDevisSelected = value;
        this.modal.open(content)
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.typeDevisSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    TypeDevisComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TypeDevisComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    TypeDevisComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    TypeDevisComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_9__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    TypeDevisComponent.ctorParameters = function () { return [
        { type: _service_type_devis_service__WEBPACK_IMPORTED_MODULE_3__["TypeDevisService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], TypeDevisComponent.prototype, "form", void 0);
    TypeDevisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type-devis',
            template: __webpack_require__(/*! raw-loader!./type-devis.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/type-devis/type-devis.component.html"),
            styles: [__webpack_require__(/*! ./type-devis.component.scss */ "./src/app/configuration/component/type-devis/type-devis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_type_devis_service__WEBPACK_IMPORTED_MODULE_3__["TypeDevisService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]])
    ], TypeDevisComponent);
    return TypeDevisComponent;
}());



/***/ }),

/***/ "./src/app/configuration/component/ville-escale/ville-escale.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/configuration/component/ville-escale/ville-escale.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%;\n  width: 100%; }\n\n.modal-body {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvY29uZmlndXJhdGlvbi9jb21wb25lbnQvdmlsbGUtZXNjYWxlL3ZpbGxlLWVzY2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBT2I7RUFHRyxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb25maWd1cmF0aW9uL2NvbXBvbmVudC92aWxsZS1lc2NhbGUvdmlsbGUtZXNjYWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4vLy5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcbi8vICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAwO1xuLy8gIHdpZHRoOiAxMDAlO1xuLy99XG5cbi5tb2RhbC1ib2R5IHtcbiAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xuICAgLy9mbGV4OiAxIDEgYXV0bztcbiAgIHBhZGRpbmc6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/configuration/component/ville-escale/ville-escale.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/configuration/component/ville-escale/ville-escale.component.ts ***!
  \********************************************************************************/
/*! exports provided: VilleEscaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VilleEscaleComponent", function() { return VilleEscaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/extra/notification/notification.service */ "./src/app/components/extra/notification/notification.service.ts");
/* harmony import */ var _environments_egf_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/egf.option */ "./src/environments/egf.option.ts");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utility */ "./src/app/shared/utility/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _model_ville_escale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/ville-escale */ "./src/app/configuration/model/ville-escale.ts");
/* harmony import */ var _service_ville_escale_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/ville-escale.service */ "./src/app/configuration/service/ville-escale.service.ts");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);















var GeoPoint = firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].GeoPoint;
var VilleEscaleComponent = /** @class */ (function () {
    function VilleEscaleComponent(service, modal, router, route, fb, notification) {
        this.service = service;
        this.modal = modal;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.notification = notification;
        this.selectionType = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["SelectionType"].cell;
        this.pays = [];
        this.columnMode = _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"].force;
        this.columns = [{ name: 'createdDate', sortable: true }, { name: 'createdByDisplayName', sortable: true }, {
                name: 'pays',
                sortable: true
            }, { name: 'ville', sortable: true }, { name: 'address', sortable: false },];
        this.isLoading = false;
        this.currentJustify = 'justified';
        this.appearance = _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_12__["Appearance"];
        this.zoom = 10;
        this.latitude = 52.520008;
        this.longitude = 13.404954;
        this.pays = _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].pays;
        this.setCurrentPosition();
        this.initData();
    }
    VilleEscaleComponent.prototype.toDate = function (value) {
        return _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].fromaTimestamp(value);
    };
    VilleEscaleComponent.prototype.initData = function () {
        this.villeEscales$ = this.service.findAll();
    };
    VilleEscaleComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        console.log('updateFilter', val);
        (val == null || val == undefined) ? this.initData() : this.villeEscales$ = this.service.search(val);
        // this.table.offset = 0;
    };
    VilleEscaleComponent.prototype.onSubmit = function () {
        console.log('onSubmit', this.villeEscaleSelected);
        this.villeEscaleSelected.uid ? this.update() : this.add();
    };
    VilleEscaleComponent.prototype.add = function () {
        var _this = this;
        console.log('### add ###');
        this.service.findAttribute('ville', this.villeEscaleSelected.ville)
            .subscribe(function (response) {
            if (response === undefined) {
                _this.villeEscaleSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(_this.villeEscaleSelected.ville);
                _this.service.create(_this.villeEscaleSelected).subscribe(function (response) {
                    _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
                    _this.modal.dismissAll();
                }, function (error) {
                    _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
                });
            }
            else {
                _this.notification.error("Cette ville d'escale " + _this.villeEscaleSelected.ville + " existe !");
            }
        }, function (error) {
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    VilleEscaleComponent.prototype.update = function () {
        var _this = this;
        console.log('### update ###');
        this.villeEscaleSelected.keys = _shared_utility__WEBPACK_IMPORTED_MODULE_8__["Helpers"].createKeywords(this.villeEscaleSelected.ville);
        this.service.update(this.villeEscaleSelected.uid, this.villeEscaleSelected).subscribe(function (response) {
            console.log('response', response);
            _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage);
            _this.modal.dismissAll();
        }, function (error) {
            console.log('onSubmit', error);
            _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage);
        });
    };
    // Open default modal
    VilleEscaleComponent.prototype.openAdd = function (content) {
        var _this = this;
        this.villeEscaleSelected = new _model_ville_escale__WEBPACK_IMPORTED_MODULE_10__["VilleEscale"]();
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.villeEscaleSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    VilleEscaleComponent.prototype.openEdite = function (content, value) {
        var _this = this;
        console.log("openEdite", value);
        this.villeEscaleSelected = value;
        this.modal.open(content, { size: 'lg' })
            .result
            .then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.villeEscaleSelected = null;
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    // This function is used in open
    VilleEscaleComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    VilleEscaleComponent.prototype.onSelect = function (event) {
        var selected = (event.selected)[0];
        console.log('Select selected', selected);
        console.log('Select selected', selected.ref);
    };
    VilleEscaleComponent.prototype.onActivate = function (_a) {
        var event = _a.event;
        console.log('Activate Event', event);
    };
    VilleEscaleComponent.prototype.confirmCancelButton = function (uid) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Oui, supprimez',
            cancelButtonText: 'Non, annulez',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (response) {
            if (response != undefined && response.value) {
                _this.service.delete(uid)
                    .then(function (res) { return _this.notification.success(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].successMessage); })
                    .catch(function (error) { return _this.notification.error(_environments_egf_option__WEBPACK_IMPORTED_MODULE_7__["egfOption"].errorMessage); });
            }
            console.log('confirmCancelButton value ===>>>', response.value);
        });
    };
    // initial user position on the map
    VilleEscaleComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.villeEscaleSelected.geopoint = new GeoPoint(_this.latitude, _this.longitude);
                _this.zoom = 12;
            });
            this.latitude;
        }
    };
    VilleEscaleComponent.prototype.onAutocompleteSelected = function (result) {
        console.log('onAutocompleteSelected ===>>>', result);
        this.villeEscaleSelected.geopoint = new GeoPoint(result.geometry.location.lat(), result.geometry.location.lng());
        this.villeEscaleSelected.address = result.formatted_address;
    };
    VilleEscaleComponent.prototype.onLocationSelected = function (location) {
        console.log('onLocationSelected ===>>>', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.villeEscaleSelected.geopoint = new GeoPoint(location.latitude, location.longitude);
    };
    VilleEscaleComponent.prototype.onGermanAddressMapped = function ($event) {
        console.log('onGermanAddressMapped ===>>>', $event);
        this.villeEscaleSelected.geopoint = new GeoPoint($event.geoLocation.latitude, $event.geoLocation.longitude);
        this.villeEscaleSelected.address = $event.displayAddress;
        this.villeEscaleSelected.pays = $event.state.long;
    };
    VilleEscaleComponent.prototype.markerDragEnd = function ($event) {
        console.log('markerDragEnd ===>>>', $event.coords);
        console.log('markerDragEnd lat ===>>>', $event.coords.lat);
        console.log('markerDragEnd lng ===>>>', $event.coords.lng);
        this.villeEscaleSelected.geopoint = new GeoPoint($event.coords.lat, $event.coords.lng);
    };
    VilleEscaleComponent.prototype.onSelected = function ($event) {
        console.log('onSelected ===>>>', $event);
        console.log('onSelected value ===>>>', $event.value);
    };
    VilleEscaleComponent.ctorParameters = function () { return [
        { type: _service_ville_escale_service__WEBPACK_IMPORTED_MODULE_11__["VilleEscaleService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], VilleEscaleComponent.prototype, "form", void 0);
    VilleEscaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ville-escale',
            template: __webpack_require__(/*! raw-loader!./ville-escale.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuration/component/ville-escale/ville-escale.component.html"),
            styles: [__webpack_require__(/*! ./ville-escale.component.scss */ "./src/app/configuration/component/ville-escale/ville-escale.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ville_escale_service__WEBPACK_IMPORTED_MODULE_11__["VilleEscaleService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _components_extra_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], VilleEscaleComponent);
    return VilleEscaleComponent;
}());



/***/ }),

/***/ "./src/app/configuration/configuration-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuration/configuration-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function() { return ConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_type_devis_type_devis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/type-devis/type-devis.component */ "./src/app/configuration/component/type-devis/type-devis.component.ts");
/* harmony import */ var _component_type_colis_type_colis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/type-colis/type-colis.component */ "./src/app/configuration/component/type-colis/type-colis.component.ts");
/* harmony import */ var _component_nature_colis_nature_colis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/nature-colis/nature-colis.component */ "./src/app/configuration/component/nature-colis/nature-colis.component.ts");
/* harmony import */ var _component_ville_escale_ville_escale_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/ville-escale/ville-escale.component */ "./src/app/configuration/component/ville-escale/ville-escale.component.ts");
/* harmony import */ var _component_point_depot_point_depot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/point-depot/point-depot.component */ "./src/app/configuration/component/point-depot/point-depot.component.ts");
/* harmony import */ var _component_type_acheminement_type_acheminement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/type-acheminement/type-acheminement.component */ "./src/app/configuration/component/type-acheminement/type-acheminement.component.ts");
/* harmony import */ var _component_societe_societe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/societe/societe.component */ "./src/app/configuration/component/societe/societe.component.ts");
/* harmony import */ var _component_trajet_trajet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/trajet/trajet.component */ "./src/app/configuration/component/trajet/trajet.component.ts");
/* harmony import */ var _shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/authentification/guard/authorization.guard */ "./src/app/shared/authentification/guard/authorization.guard.ts");












var routes = [
    {
        path: 'type-devis',
        component: _component_type_devis_type_devis_component__WEBPACK_IMPORTED_MODULE_3__["TypeDevisComponent"],
        data: {
            title: 'Type de devis',
            roles: ['TYPES_DEVIS', 'TYPE_DEVIS_ADD', 'TYPE_DEVIS_EDITE', 'TYPE_DEVIS_DELETE']
        },
        canActivate: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizationGuard"]]
    },
    {
        path: 'type-colis',
        component: _component_type_colis_type_colis_component__WEBPACK_IMPORTED_MODULE_4__["TypeColisComponent"],
        data: {
            title: 'Type de colis',
            roles: ['TYPE_COLIS', 'TYPE_COLIS_ADD', 'TYPE_COLIS_EDITE', 'TYPE_COLIS_DELETE']
        }
    },
    {
        path: 'nature-colis',
        component: _component_nature_colis_nature_colis_component__WEBPACK_IMPORTED_MODULE_5__["NatureColisComponent"],
        data: {
            title: 'Nature du colis',
            roles: ['TYPE_COLIS', 'TYPE_COLIS_ADD', 'TYPE_COLIS_EDITE', 'TYPE_COLIS_DELETE']
        }
    },
    {
        path: 'ville-escale',
        component: _component_ville_escale_ville_escale_component__WEBPACK_IMPORTED_MODULE_6__["VilleEscaleComponent"],
        data: {
            title: 'Ville d\'escale'
        }
    },
    {
        path: 'point-depot',
        component: _component_point_depot_point_depot_component__WEBPACK_IMPORTED_MODULE_7__["PointDepotComponent"],
        data: {
            title: 'Point de depots'
        },
        canActivate: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizationGuard"]]
    },
    {
        path: 'type-acheminement',
        component: _component_type_acheminement_type_acheminement_component__WEBPACK_IMPORTED_MODULE_8__["TypeAcheminementComponent"],
        data: {
            title: 'Type acheminements'
        },
        canActivate: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizationGuard"]]
    },
    {
        path: 'societes',
        component: _component_societe_societe_component__WEBPACK_IMPORTED_MODULE_9__["SocieteComponent"],
        data: {
            title: 'Sociétes'
        },
        canActivate: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizationGuard"]]
    },
    {
        path: 'trajets',
        component: _component_trajet_trajet_component__WEBPACK_IMPORTED_MODULE_10__["TrajetComponent"],
        data: {
            title: 'Trajets'
        },
        canActivate: [_shared_authentification_guard_authorization_guard__WEBPACK_IMPORTED_MODULE_11__["AuthorizationGuard"]]
    },
];
var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration-routing.module */ "./src/app/configuration/configuration-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");
/* harmony import */ var _component_type_devis_type_devis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/type-devis/type-devis.component */ "./src/app/configuration/component/type-devis/type-devis.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_type_colis_type_colis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/type-colis/type-colis.component */ "./src/app/configuration/component/type-colis/type-colis.component.ts");
/* harmony import */ var _component_nature_colis_nature_colis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/nature-colis/nature-colis.component */ "./src/app/configuration/component/nature-colis/nature-colis.component.ts");
/* harmony import */ var _component_ville_escale_ville_escale_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/ville-escale/ville-escale.component */ "./src/app/configuration/component/ville-escale/ville-escale.component.ts");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _component_point_depot_point_depot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/point-depot/point-depot.component */ "./src/app/configuration/component/point-depot/point-depot.component.ts");
/* harmony import */ var _component_type_acheminement_type_acheminement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/type-acheminement/type-acheminement.component */ "./src/app/configuration/component/type-acheminement/type-acheminement.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _component_societe_societe_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/societe/societe.component */ "./src/app/configuration/component/societe/societe.component.ts");
/* harmony import */ var _component_trajet_trajet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/trajet/trajet.component */ "./src/app/configuration/component/trajet/trajet.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






















var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigurationRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__["taskReducer"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatGoogleMapsAutocompleteModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbCollapseModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTabsetModule"]
            ],
            declarations: [
                _component_type_devis_type_devis_component__WEBPACK_IMPORTED_MODULE_7__["TypeDevisComponent"],
                _component_type_colis_type_colis_component__WEBPACK_IMPORTED_MODULE_10__["TypeColisComponent"],
                _component_nature_colis_nature_colis_component__WEBPACK_IMPORTED_MODULE_11__["NatureColisComponent"],
                _component_ville_escale_ville_escale_component__WEBPACK_IMPORTED_MODULE_12__["VilleEscaleComponent"],
                _component_point_depot_point_depot_component__WEBPACK_IMPORTED_MODULE_15__["PointDepotComponent"],
                _component_type_acheminement_type_acheminement_component__WEBPACK_IMPORTED_MODULE_16__["TypeAcheminementComponent"],
                _component_societe_societe_component__WEBPACK_IMPORTED_MODULE_19__["SocieteComponent"],
                _component_trajet_trajet_component__WEBPACK_IMPORTED_MODULE_20__["TrajetComponent"],
            ],
            providers: []
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ }),

/***/ "./src/app/configuration/model/nature-colis.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/model/nature-colis.ts ***!
  \*****************************************************/
/*! exports provided: NatureColis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureColis", function() { return NatureColis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var NatureColis = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NatureColis, _super);
    function NatureColis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NatureColis.colName = "nature_colis";
    return NatureColis;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/point-depot.ts":
/*!****************************************************!*\
  !*** ./src/app/configuration/model/point-depot.ts ***!
  \****************************************************/
/*! exports provided: PointDepot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointDepot", function() { return PointDepot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var PointDepot = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PointDepot, _super);
    function PointDepot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointDepot.colName = "point_depots";
    return PointDepot;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/societe.ts":
/*!************************************************!*\
  !*** ./src/app/configuration/model/societe.ts ***!
  \************************************************/
/*! exports provided: Societe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Societe", function() { return Societe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var Societe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Societe, _super);
    function Societe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Societe.colName = "societes";
    return Societe;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/trajet.ts":
/*!***********************************************!*\
  !*** ./src/app/configuration/model/trajet.ts ***!
  \***********************************************/
/*! exports provided: Trajet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trajet", function() { return Trajet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var Trajet = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Trajet, _super);
    function Trajet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trajet.colName = "trajets";
    return Trajet;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/type-acheminement.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuration/model/type-acheminement.ts ***!
  \**********************************************************/
/*! exports provided: TypeAcheminement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAcheminement", function() { return TypeAcheminement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var TypeAcheminement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeAcheminement, _super);
    function TypeAcheminement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeAcheminement.colName = "type_acheminements";
    return TypeAcheminement;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/type-colis.ts":
/*!***************************************************!*\
  !*** ./src/app/configuration/model/type-colis.ts ***!
  \***************************************************/
/*! exports provided: TypeColis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeColis", function() { return TypeColis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var TypeColis = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeColis, _super);
    function TypeColis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeColis.colName = "type_colis";
    return TypeColis;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/type-devis.ts":
/*!***************************************************!*\
  !*** ./src/app/configuration/model/type-devis.ts ***!
  \***************************************************/
/*! exports provided: TypeDevis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDevis", function() { return TypeDevis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var TypeDevis = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeDevis, _super);
    function TypeDevis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDevis.colName = "type_devis";
    return TypeDevis;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/model/ville-escale.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuration/model/ville-escale.ts ***!
  \*****************************************************/
/*! exports provided: VilleEscale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VilleEscale", function() { return VilleEscale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/abstract/abstract.entity */ "./src/app/shared/abstract/abstract.entity.ts");


var VilleEscale = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VilleEscale, _super);
    function VilleEscale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VilleEscale.colName = "ville_escales";
    return VilleEscale;
}(_shared_abstract_abstract_entity__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/configuration/service/nature-colis.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuration/service/nature-colis.service.ts ***!
  \***************************************************************/
/*! exports provided: NatureColisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NatureColisService", function() { return NatureColisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_nature_colis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/nature-colis */ "./src/app/configuration/model/nature-colis.ts");




var NatureColisService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NatureColisService, _super);
    function NatureColisService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NatureColisService.prototype.getPath = function () {
        return _model_nature_colis__WEBPACK_IMPORTED_MODULE_3__["NatureColis"].colName;
    };
    NatureColisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NatureColisService);
    return NatureColisService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/point-depot.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/configuration/service/point-depot.service.ts ***!
  \**************************************************************/
/*! exports provided: PointDepotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointDepotService", function() { return PointDepotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_point_depot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/point-depot */ "./src/app/configuration/model/point-depot.ts");




var PointDepotService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PointDepotService, _super);
    function PointDepotService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PointDepotService.prototype.getPath = function () {
        return _model_point_depot__WEBPACK_IMPORTED_MODULE_3__["PointDepot"].colName;
    };
    PointDepotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PointDepotService);
    return PointDepotService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/societe.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/configuration/service/societe.service.ts ***!
  \**********************************************************/
/*! exports provided: SocieteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocieteService", function() { return SocieteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_societe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/societe */ "./src/app/configuration/model/societe.ts");




var SocieteService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SocieteService, _super);
    function SocieteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocieteService.prototype.getPath = function () {
        return _model_societe__WEBPACK_IMPORTED_MODULE_3__["Societe"].colName;
    };
    SocieteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocieteService);
    return SocieteService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/trajet.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/configuration/service/trajet.service.ts ***!
  \*********************************************************/
/*! exports provided: TrajetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrajetService", function() { return TrajetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_trajet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/trajet */ "./src/app/configuration/model/trajet.ts");




var TrajetService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TrajetService, _super);
    function TrajetService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrajetService.prototype.getPath = function () {
        return _model_trajet__WEBPACK_IMPORTED_MODULE_3__["Trajet"].colName;
    };
    TrajetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TrajetService);
    return TrajetService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/type-acheminement.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/configuration/service/type-acheminement.service.ts ***!
  \********************************************************************/
/*! exports provided: TypeAcheminementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAcheminementService", function() { return TypeAcheminementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_type_acheminement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/type-acheminement */ "./src/app/configuration/model/type-acheminement.ts");




var TypeAcheminementService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeAcheminementService, _super);
    function TypeAcheminementService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeAcheminementService.prototype.getPath = function () {
        return _model_type_acheminement__WEBPACK_IMPORTED_MODULE_3__["TypeAcheminement"].colName;
    };
    TypeAcheminementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TypeAcheminementService);
    return TypeAcheminementService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/type-colis.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/configuration/service/type-colis.service.ts ***!
  \*************************************************************/
/*! exports provided: TypeColisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeColisService", function() { return TypeColisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_type_colis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/type-colis */ "./src/app/configuration/model/type-colis.ts");




var TypeColisService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeColisService, _super);
    function TypeColisService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeColisService.prototype.getPath = function () {
        return _model_type_colis__WEBPACK_IMPORTED_MODULE_3__["TypeColis"].colName;
    };
    TypeColisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TypeColisService);
    return TypeColisService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/type-devis.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/configuration/service/type-devis.service.ts ***!
  \*************************************************************/
/*! exports provided: TypeDevisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDevisService", function() { return TypeDevisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_type_devis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/type-devis */ "./src/app/configuration/model/type-devis.ts");




var TypeDevisService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeDevisService, _super);
    function TypeDevisService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeDevisService.prototype.getPath = function () {
        return _model_type_devis__WEBPACK_IMPORTED_MODULE_3__["TypeDevis"].colName;
    };
    TypeDevisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TypeDevisService);
    return TypeDevisService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/configuration/service/ville-escale.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/configuration/service/ville-escale.service.ts ***!
  \***************************************************************/
/*! exports provided: VilleEscaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VilleEscaleService", function() { return VilleEscaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_ville_escale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/ville-escale */ "./src/app/configuration/model/ville-escale.ts");




var VilleEscaleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VilleEscaleService, _super);
    function VilleEscaleService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VilleEscaleService.prototype.getPath = function () {
        return _model_ville_escale__WEBPACK_IMPORTED_MODULE_3__["VilleEscale"].colName;
    };
    VilleEscaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VilleEscaleService);
    return VilleEscaleService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ })

}]);
//# sourceMappingURL=configuration-configuration-module.js.map