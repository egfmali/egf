(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forms-forms-module~users-users-module"],{

/***/ "./node_modules/angular-archwizard/fesm5/angular-archwizard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-archwizard/fesm5/angular-archwizard.js ***!
  \*********************************************************************/
/*! exports provided: WizardCompletionStepComponent, WizardNavigationBarComponent, WizardStepComponent, WizardComponent, EnableBackLinksDirective, GoToStepDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStepDirective, WizardStepDirective, WizardStepTitleDirective, FreeNavigationMode, NavigationMode, SemiStrictNavigationMode, StrictNavigationMode, WizardState, navigationModeFactory, MovingDirection, isStepId, isStepIndex, isStepOffset, WizardCompletionStep, WizardStep, ArchwizardModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function() { return WizardCompletionStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function() { return WizardNavigationBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function() { return EnableBackLinksDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function() { return GoToStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextStepDirective", function() { return NextStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function() { return OptionalStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function() { return PreviousStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function() { return ResetWizardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function() { return SelectedStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function() { return WizardCompletionStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function() { return WizardStepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function() { return WizardStepTitleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeNavigationMode", function() { return FreeNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationMode", function() { return NavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiStrictNavigationMode", function() { return SemiStrictNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictNavigationMode", function() { return StrictNavigationMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardState", function() { return WizardState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationModeFactory", function() { return navigationModeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingDirection", function() { return MovingDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepId", function() { return isStepId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepIndex", function() { return isStepIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStepOffset", function() { return isStepOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function() { return WizardCompletionStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return WizardStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchwizardModule", function() { return ArchwizardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return WizardStepSymbolDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
 * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepSymbol>
 *     ...
 * </ng-template>
 * ```
 */
var WizardStepSymbolDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    function WizardStepSymbolDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepSymbolDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
                },] }
    ];
    /** @nocollapse */
    WizardStepSymbolDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return WizardStepSymbolDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
 * to define the content of a step title inside the navigation bar.
 * This step title can be freely created and can contain more than only plain text
 *
 * ### Syntax
 *
 * ```html
 * <ng-template awWizardStepTitle>
 *     ...
 * </ng-template>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepTitleDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    WizardStepTitleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
                },] }
    ];
    /** @nocollapse */
    WizardStepTitleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return WizardStepTitleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every type of wizard step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var WizardStep = /** @class */ (function () {
    function WizardStep() {
        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = { symbol: '' };
        /**
         * A boolean describing if the wizard step has been completed
         */
        this.completed = false;
        /**
         * A boolean describing if the wizard step is currently selected
         */
        this.selected = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */
        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */
        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */
        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */
        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */
        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(WizardStep.prototype, "hidden", {
        /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         */
        get: /**
         * Returns if this wizard step should be visible to the user.
         * If the step should be visible to the user false is returned, otherwise true
         * @return {?}
         */
        function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @param condition A condition variable, deciding if the step can be transitioned
     * @param direction The direction in which this step should be transitioned
     * @returns A [[Promise]] containing `true`, if this step can transitioned in the given direction
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    WizardStep.canTransitionStep = /**
     * This method returns true, if this wizard step can be transitioned with a given direction.
     * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
     *
     * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
     * @private
     * @param {?} condition A condition variable, deciding if the step can be transitioned
     * @param {?} direction The direction in which this step should be transitioned
     * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
     */
    function (condition, direction) {
        if (typeof (condition) === typeof (true)) {
            return Promise.resolve((/** @type {?} */ (condition)));
        }
        else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
        }
        else {
            return Promise.reject(new Error("Input value '" + condition + "' is neither a boolean nor a function"));
        }
    };
    /**
     * A function called when the step is entered
     *
     * @param direction The direction in which the step is entered
     */
    /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    WizardStep.prototype.enter = /**
     * A function called when the step is entered
     *
     * @param {?} direction The direction in which the step is entered
     * @return {?}
     */
    function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * A function called when the step is exited
     *
     * @param direction The direction in which the step is exited
     */
    /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    WizardStep.prototype.exit = /**
     * A function called when the step is exited
     *
     * @param {?} direction The direction in which the step is exited
     * @return {?}
     */
    function (direction) {
        this.stepExit.emit(direction);
    };
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be entered
     * @returns A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    WizardStep.prototype.canEnterStep = /**
     * This method returns true, if this wizard step can be entered from the given direction.
     * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be entered
     * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canEnter, direction);
    };
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @param direction The direction in which this step should be left
     * @returns A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     */
    /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    WizardStep.prototype.canExitStep = /**
     * This method returns true, if this wizard step can be exited into given direction.
     * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
     * nor a function.
     *
     * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
     * @param {?} direction The direction in which this step should be left
     * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
     */
    function (direction) {
        return WizardStep.canTransitionStep(this.canExit, direction);
    };
    WizardStep.propDecorators = {
        stepTitleTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [WizardStepTitleDirective,] }],
        stepSymbolTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [WizardStepSymbolDirective,] }],
        stepId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigationSymbol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        stepEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['hidden',] }]
    };
    return WizardStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 * @abstract
 */
WizardCompletionStep = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStep, _super);
    function WizardCompletionStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.enter = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    WizardCompletionStep.prototype.exit = /**
     * @inheritDoc
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        // set this completion step as incomplete
        this.completed = false;
        this.stepExit.emit(direction);
    };
    return WizardCompletionStep;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
 * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStepComponent, _super);
    function WizardCompletionStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-completion-step',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) },
                        { provide: WizardCompletionStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepComponent; })) }
                    ],
                    styles: ["aw-wizard-completion-step{height:auto;width:100%}"]
                }] }
    ];
    return WizardCompletionStepComponent;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/** @enum {number} */
var MovingDirection = {
    /**
     * A forward step transition
     */
    Forwards: 0,
    /**
     * A backward step transition
     */
    Backwards: 1,
    /**
     * No step transition was done
     */
    Stay: 2,
};
MovingDirection[MovingDirection.Forwards] = 'Forwards';
MovingDirection[MovingDirection.Backwards] = 'Backwards';
MovingDirection[MovingDirection.Stay] = 'Stay';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
var  /**
 * An interface describing the basic functionality, which must be provided by a navigation mode.
 * A navigation mode manages the navigation between different wizard steps, this contains the validation, if a step transition can be done
 *
 * @author Marc Arndt
 * @abstract
 */
NavigationMode = /** @class */ (function () {
    function NavigationMode(wizardState) {
        this.wizardState = wizardState;
    }
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToPreviousStep = /**
     * Tries to transition the wizard to the previous step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasPreviousStep()) {
            this.goToStep(this.wizardState.currentStepIndex - 1, preFinalize, postFinalize);
        }
    };
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     */
    /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    NavigationMode.prototype.goToNextStep = /**
     * Tries to transition the wizard to the next step from the `currentStep`
     * @param {?=} preFinalize
     * @param {?=} postFinalize
     * @return {?}
     */
    function (preFinalize, postFinalize) {
        if (this.wizardState.hasNextStep()) {
            this.goToStep(this.wizardState.currentStepIndex + 1, preFinalize, postFinalize);
        }
    };
    return NavigationMode;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate without any limitations,
 * as long as the current step can be exited in the given direction
 *
 * @author Marc Arndt
 */
FreeNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(FreeNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function FreeNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    FreeNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    FreeNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    FreeNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        return true;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    FreeNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return FreeNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with some limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - a completion step can only be entered, if all "normal" wizard steps have been completed
 *
 * @author Marc Arndt
 */
SemiStrictNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SemiStrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The model/state of the wizard, that is configured with this navigation mode
     */
    function SemiStrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    SemiStrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all "normal" wizard steps have been completed, are optional or selected, or the destination step isn't a completion step
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        // provide the destination step as a lambda in case the index doesn't exist (i.e. hasStep === false)
        /** @type {?} */
        var destinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            if (previous) {
                /** @type {?} */
                var allNormalStepsCompleted = _this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return index < destinationIndex; }))
                    .every((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed || step.optional || step.selected; }));
                return Promise.resolve(!(_this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) || allNormalStepsCompleted);
            }
            else {
                return Promise.resolve(false);
            }
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(destinationStep);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                // the current step can be exited in the given direction
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @param {?} destinationIndex
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.isNavigable = /**
     * @inheritDoc
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        if (this.wizardState.getStepAtIndex(destinationIndex) instanceof WizardCompletionStep) {
            // a completion step can only be entered, if all previous steps have been completed, are optional, or selected
            return this.wizardState.wizardSteps.filter((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) { return index < destinationIndex; }))
                .every((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.completed || step.optional || step.selected; }));
        }
        else {
            // a "normal" step can always be entered
            return true;
        }
    };
    /**
     * @inheritDoc
     */
    /**
     * @inheritDoc
     * @return {?}
     */
    SemiStrictNavigationMode.prototype.reset = /**
     * @inheritDoc
     * @return {?}
     */
    function () {
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // the default step is a completion step and the wizard contains more than one step
        /** @type {?} */
        var defaultCompletionStep = this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof WizardCompletionStep &&
            this.wizardState.wizardSteps.length !== 1;
        if (defaultCompletionStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return SemiStrictNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
var  /**
 * A [[NavigationMode]], which allows the user to navigate with strict limitations.
 * The user can only navigation to a given destination step, if:
 * - the current step can be exited in the direction of the destination step
 * - all previous steps to the destination step have been completed or are optional
 *
 * @author Marc Arndt
 */
StrictNavigationMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StrictNavigationMode, _super);
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard, that is configured with this navigation mode
     */
    function StrictNavigationMode(wizardState) {
        return _super.call(this, wizardState) || this;
    }
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param destinationIndex The index of the destination wizard step
     * @returns True if the destination wizard step can be entered, false otherwise
     */
    /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    StrictNavigationMode.prototype.canGoToStep = /**
     * Checks whether the wizard can be transitioned to the given destination step.
     * A destination wizard step can be entered if:
     * - it exists
     * - the current step can be exited in the direction of the destination step
     * - all previous steps to the destination step have been completed or are optional
     *
     * @param {?} destinationIndex The index of the destination wizard step
     * @return {?} True if the destination wizard step can be entered, false otherwise
     */
    function (destinationIndex) {
        var _this = this;
        /** @type {?} */
        var hasStep = this.wizardState.hasStep(destinationIndex);
        /** @type {?} */
        var movingDirection = this.wizardState.getMovingDirection(destinationIndex);
        /** @type {?} */
        var canExitCurrentStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.currentStep.canExitStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var canEnterDestinationStep = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            return previous ? _this.wizardState.getStepAtIndex(destinationIndex).canEnterStep(movingDirection) : Promise.resolve(false);
        });
        /** @type {?} */
        var allPreviousStepsComplete = (/**
         * @param {?} previous
         * @return {?}
         */
        function (previous) {
            if (previous) {
                return Promise.resolve(_this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return index < destinationIndex && index !== _this.wizardState.currentStepIndex; }))
                    .every((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed || step.optional; })));
            }
            else {
                return Promise.resolve(false);
            }
        });
        return Promise.resolve(hasStep)
            .then(canExitCurrentStep)
            .then(canEnterDestinationStep)
            .then(allPreviousStepsComplete);
    };
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param destinationIndex The index of the destination wizard step, which should be entered
     * @param preFinalize An event emitter, to be called before the step has been transitioned
     * @param postFinalize An event emitter, to be called after the step has been transitioned
     */
    /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    StrictNavigationMode.prototype.goToStep = /**
     * Tries to enter the wizard step with the given destination index.
     * When entering the destination step, the following actions are done:
     * - the old current step is set as completed
     * - the old current step is set as unselected
     * - the old current step is exited
     * - all steps between the old current step and the destination step are marked as incomplete
     * - the destination step is set as selected
     * - the destination step is entered
     *
     * When the destination step couldn't be entered, the following actions are done:
     * - the current step is exited and entered in the direction `MovingDirection.Stay`
     *
     * @param {?} destinationIndex The index of the destination wizard step, which should be entered
     * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
     * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
     * @return {?}
     */
    function (destinationIndex, preFinalize, postFinalize) {
        var _this = this;
        this.canGoToStep(destinationIndex).then((/**
         * @param {?} navigationAllowed
         * @return {?}
         */
        function (navigationAllowed) {
            if (navigationAllowed) {
                /** @type {?} */
                var movingDirection = _this.wizardState.getMovingDirection(destinationIndex);
                /* istanbul ignore if */
                if (preFinalize) {
                    preFinalize.emit();
                }
                // leave current step
                _this.wizardState.currentStep.completed = true;
                _this.wizardState.currentStep.exit(movingDirection);
                _this.wizardState.currentStep.selected = false;
                // set all steps after the destination step to incomplete
                _this.wizardState.wizardSteps
                    .filter((/**
                 * @param {?} step
                 * @param {?} index
                 * @return {?}
                 */
                function (step, index) { return _this.wizardState.currentStepIndex > destinationIndex && index > destinationIndex; }))
                    .forEach((/**
                 * @param {?} step
                 * @return {?}
                 */
                function (step) { return step.completed = false; }));
                _this.wizardState.currentStepIndex = destinationIndex;
                // go to next step
                _this.wizardState.currentStep.enter(movingDirection);
                _this.wizardState.currentStep.selected = true;
                /* istanbul ignore if */
                if (postFinalize) {
                    postFinalize.emit();
                }
            }
            else {
                // if the current step can't be left, reenter the current step
                _this.wizardState.currentStep.exit(MovingDirection.Stay);
                _this.wizardState.currentStep.enter(MovingDirection.Stay);
            }
        }));
    };
    /**
     * @param {?} destinationIndex
     * @return {?}
     */
    StrictNavigationMode.prototype.isNavigable = /**
     * @param {?} destinationIndex
     * @return {?}
     */
    function (destinationIndex) {
        // a wizard step can be navigated to through the navigation bar, iff it's located before the current wizard step
        return destinationIndex < this.wizardState.currentStepIndex;
    };
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     */
    /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    StrictNavigationMode.prototype.reset = /**
     * Resets the state of this wizard.
     * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
     * In addition the whole wizard is set as incomplete
     * @return {?}
     */
    function () {
        var _this = this;
        // the wizard doesn't contain a step with the default step index
        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
        }
        // at least one step is before the default step, that is not optional
        /** @type {?} */
        var illegalDefaultStep = this.wizardState.wizardSteps
            .filter((/**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) { return index < _this.wizardState.defaultStepIndex; }))
            .some((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return !step.optional; }));
        if (illegalDefaultStep) {
            throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
        }
        // reset the step internal state
        this.wizardState.wizardSteps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.completed = false;
            step.selected = false;
        }));
        // set the first step as the current step
        this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex;
        this.wizardState.currentStep.selected = true;
        this.wizardState.currentStep.enter(MovingDirection.Forwards);
    };
    return StrictNavigationMode;
}(NavigationMode));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A factory method used to create [[NavigationMode]] instances
 *
 * @param {?} navigationMode The name of the to be used navigation mode
 * @param {?} wizardState The wizard state of the wizard
 * @return {?} The created [[NavigationMode]]
 */
function navigationModeFactory(navigationMode, wizardState) {
    switch (navigationMode) {
        case 'free':
            return new FreeNavigationMode(wizardState);
        case 'semi-strict':
            return new SemiStrictNavigationMode(wizardState);
        case 'strict':
        default:
            return new StrictNavigationMode(wizardState);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The internal model/state of a wizard.
 * This model contains:
 * - an array with all steps the wizard contains
 * - the index of the step the wizard currently resides inside
 * - information about the completeness of the wizard
 * - some additional helper methods
 *
 * @author Marc Arndt
 */
var WizardState = /** @class */ (function () {
    /**
     * Constructor
     */
    function WizardState() {
        /**
         * An array representation of all wizard steps belonging to this model
         */
        this.wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         */
        this.currentStepIndex = -1;
        /**
         * The initial step index, as taken from the [[WizardComponent]]
         */
        this._defaultStepIndex = 0;
    }
    Object.defineProperty(WizardState.prototype, "defaultStepIndex", {
        /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         */
        get: /**
         * The initial step index.
         * This value can be either:
         * - the index of a wizard step with a `selected` directive, or
         * - the default step index, set in the [[WizardComponent]]
         * @return {?}
         */
        function () {
            /** @type {?} */
            var foundDefaultStep = this.wizardSteps.find((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.defaultSelected; }));
            if (foundDefaultStep) {
                return this.getIndexOfStep(foundDefaultStep);
            }
            else {
                return this._defaultStepIndex;
            }
        },
        /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param defaultStepIndex The new default wizard step index
         */
        set: /**
         * Sets the initial default step.
         * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
         *
         * @param {?} defaultStepIndex The new default wizard step index
         * @return {?}
         */
        function (defaultStepIndex) {
            this._defaultStepIndex = defaultStepIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "currentStep", {
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         */
        get: /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         * @return {?}
         */
        function () {
            if (this.hasStep(this.currentStepIndex)) {
                return this.wizardSteps[this.currentStepIndex];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardState.prototype, "completed", {
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         */
        get: /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         * @return {?}
         */
        function () {
            return this.wizardSteps.every((/**
             * @param {?} step
             * @return {?}
             */
            function (step) { return step.completed || step.optional; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param updatedNavigationMode The name of the new navigation mode
     */
    /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    WizardState.prototype.updateNavigationMode = /**
     * Updates the navigation mode to the navigation mode with the given name
     *
     * @param {?} updatedNavigationMode The name of the new navigation mode
     * @return {?}
     */
    function (updatedNavigationMode) {
        this.navigationMode = navigationModeFactory(updatedNavigationMode, this);
    };
    /**
     * Updates the wizard steps to the new array
     *
     * @param updatedWizardSteps The updated wizard steps
     */
    /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    WizardState.prototype.updateWizardSteps = /**
     * Updates the wizard steps to the new array
     *
     * @param {?} updatedWizardSteps The updated wizard steps
     * @return {?}
     */
    function (updatedWizardSteps) {
        // the wizard is currently not in the initialization phase
        if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = updatedWizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
        }
        this.wizardSteps = updatedWizardSteps;
    };
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param stepIndex The to be checked index of a step inside this wizard
     * @returns True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    WizardState.prototype.hasStep = /**
     * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
     *
     * @param {?} stepIndex The to be checked index of a step inside this wizard
     * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
     */
    function (stepIndex) {
        return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
    };
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @returns True if this wizard has a previous step before the current step
     */
    /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    WizardState.prototype.hasPreviousStep = /**
     * Checks if this wizard has a previous step, compared to the current step
     *
     * @return {?} True if this wizard has a previous step before the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex - 1);
    };
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @returns True if this wizard has a next step after the current step
     */
    /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    WizardState.prototype.hasNextStep = /**
     * Checks if this wizard has a next step, compared to the current step
     *
     * @return {?} True if this wizard has a next step after the current step
     */
    function () {
        return this.hasStep(this.currentStepIndex + 1);
    };
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @returns True if the wizard is currently inside its last step
     */
    /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    WizardState.prototype.isLastStep = /**
     * Checks if this wizard is currently inside its last step
     *
     * @return {?} True if the wizard is currently inside its last step
     */
    function () {
        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
    };
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @param stepIndex The given index
     * @returns The found [[WizardStep]] at the given index `stepIndex`
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     */
    /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    WizardState.prototype.getStepAtIndex = /**
     * Finds the [[WizardStep]] at the given index `stepIndex`.
     * If no [[WizardStep]] exists at the given index an Error is thrown
     *
     * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
     * @param {?} stepIndex The given index
     * @return {?} The found [[WizardStep]] at the given index `stepIndex`
     */
    function (stepIndex) {
        if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: " + stepIndex + ".");
        }
        return this.wizardSteps[stepIndex];
    };
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param stepId The given step id
     * @returns The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    WizardState.prototype.getIndexOfStepWithId = /**
     * Finds the index of the step with the given `stepId`.
     * If no step with the given `stepId` exists, `-1` is returned
     *
     * @param {?} stepId The given step id
     * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
     */
    function (stepId) {
        return this.wizardSteps.findIndex((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.stepId === stepId; }));
    };
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param step The given [[WizardStep]]
     * @returns The found index of `step` or `-1` if the step is not included in the wizard
     */
    /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    WizardState.prototype.getIndexOfStep = /**
     * Finds the index of the given [[WizardStep]] `step`.
     * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
     *
     * @param {?} step The given [[WizardStep]]
     * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
     */
    function (step) {
        return this.wizardSteps.indexOf(step);
    };
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param destinationStep The given destination step
     * @returns The calculated [[MovingDirection]]
     */
    /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    WizardState.prototype.getMovingDirection = /**
     * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
     *
     * @param {?} destinationStep The given destination step
     * @return {?} The calculated [[MovingDirection]]
     */
    function (destinationStep) {
        /** @type {?} */
        var movingDirection;
        if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
        }
        else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
        }
        else {
            movingDirection = MovingDirection.Stay;
        }
        return movingDirection;
    };
    WizardState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    WizardState.ctorParameters = function () { return []; };
    return WizardState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
 * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
 * otherwise it will look like a normal `ul` component.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
 * ```
 *
 * @author Marc Arndt
 */
var WizardNavigationBarComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state the wizard currently resides in
     */
    function WizardNavigationBarComponent(wizardState) {
        this.wizardState = wizardState;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */
        this.direction = 'left-to-right';
    }
    Object.defineProperty(WizardNavigationBarComponent.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "wizardSteps", {
        /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @returns An array containing all [[WizardStep]]s
         */
        get: /**
         * Returns all [[WizardStep]]s contained in the wizard
         *
         * @return {?} An array containing all [[WizardStep]]s
         */
        function () {
            switch (this.direction) {
                case 'right-to-left':
                    return this.wizardState.wizardSteps.slice().reverse();
                case 'left-to-right':
                default:
                    return this.wizardState.wizardSteps;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardNavigationBarComponent.prototype, "numberOfWizardSteps", {
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @returns The number of wizard steps to be displayed
         */
        get: /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */
        function () {
            return this.wizardState.wizardSteps.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as current
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    WizardNavigationBarComponent.prototype.isCurrent = /**
     * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as current
     */
    function (wizardStep) {
        return wizardStep.selected && !wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as done
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    WizardNavigationBarComponent.prototype.isDone = /**
     * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as done
     */
    function (wizardStep) {
        return (wizardStep.completed && !wizardStep.selected) || this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as default
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    WizardNavigationBarComponent.prototype.isDefault = /**
     * Checks, whether a [[WizardStep]] can be marked as `default` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as default
     */
    function (wizardStep) {
        return !wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as editing
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    WizardNavigationBarComponent.prototype.isEditing = /**
     * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as editing
     */
    function (wizardStep) {
        return wizardStep.selected && wizardStep.completed && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as optional
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    WizardNavigationBarComponent.prototype.isOptional = /**
     * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as optional
     */
    function (wizardStep) {
        return wizardStep.optional && !wizardStep.completed && !wizardStep.selected && !this.wizardState.completed;
    };
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param wizardStep The wizard step to be checked
     * @returns True if the step can be marked as navigable
     */
    /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    WizardNavigationBarComponent.prototype.isNavigable = /**
     * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
     * A wizard step can be navigated to if:
     * - the step is currently not selected
     * - the navigation bar isn't disabled
     * - the navigation mode allows navigation to the step
     *
     * @param {?} wizardStep The wizard step to be checked
     * @return {?} True if the step can be marked as navigable
     */
    function (wizardStep) {
        return !wizardStep.selected && !this.wizardState.disableNavigationBar &&
            this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(wizardStep));
    };
    WizardNavigationBarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-navigation-bar',
                    template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        default: isDefault(step),\n        current: isCurrent(step),\n        done: isDone(step),\n        editing: isEditing(step),\n        optional: isOptional(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: ["aw-wizard-navigation-bar.horizontal.small ul.steps-indicator{padding:24px 0 10px}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 14px);top:-7px;left:calc(50% + 14px / 2)}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li .step-indicator{position:absolute;top:-14px;left:calc(50% - 14px / 2);width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.horizontal.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.horizontal.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator{padding:60px 0 10px}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;height:1px;width:calc(100% - 50px);top:-25px;left:calc(50% + 50px / 2)}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:-50px;left:calc(50% - 50px / 2);width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.horizontal.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator{display:flex;flex-direction:row;justify-content:center;margin:0;width:100%;list-style:none}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2:before{left:25%;right:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-2 li{width:50%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3:before{left:16.66666667%;right:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-3 li{width:33.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4:before{left:12.5%;right:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-4 li{width:25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5:before{left:10%;right:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-5 li{width:20%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6:before{left:8.33333333%;right:8.33333333%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-6 li{width:16.66666667%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7:before{left:7.14285714%;right:7.14285714%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-7 li{width:14.28571429%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8:before{left:6.25%;right:6.25%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-8 li{width:12.5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9:before{left:5.55555556%;right:5.55555556%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-9 li{width:11.11111111%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10:before{left:5%;right:5%}aw-wizard-navigation-bar.horizontal ul.steps-indicator.steps-10 li{width:10%}aw-wizard-navigation-bar.horizontal ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.horizontal ul.steps-indicator li{position:relative;margin:0;padding:0;pointer-events:none;text-align:center}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a{cursor:pointer}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a .label{display:inline-block;padding-top:10px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:center;font-weight:700;transition:.25s}aw-wizard-navigation-bar.horizontal ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.horizontal ul.steps-indicator li.navigable{pointer-events:auto}", "aw-wizard-navigation-bar.vertical{max-width:280px;width:20%;height:100%;position:-webkit-sticky;position:sticky;top:0}aw-wizard-navigation-bar.vertical.small ul.steps-indicator{padding:5px 5px 5px 19px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-7px;top:14px;height:calc(100% - 14px);width:1px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a{min-height:14px}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-14px;width:14px;height:14px;text-align:center;vertical-align:middle;line-height:14px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.small ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done .step-indicator{background-color:#393}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional .step-indicator{background-color:#38ef38}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing .step-indicator{background-color:red}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current .step-indicator{border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done .step-indicator{border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional .step-indicator{border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing .step-indicator{border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00}aw-wizard-navigation-bar.vertical.large-empty ul.steps-indicator li.default a:hover .step-indicator{border-color:grey}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:50px;transition:.25s;border-radius:100%;background-color:#e6e6e6;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current .step-indicator{background-color:grey;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done .step-indicator{background-color:#393;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional .step-indicator{background-color:#38ef38;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing .step-indicator{background-color:red;color:#000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li a:hover .step-indicator{background-color:#d9d9d9}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.current a:hover .step-indicator{background-color:#737373}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.done a:hover .step-indicator{background-color:#2d862d}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.optional a:hover .step-indicator{background-color:#20ed20}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.editing a:hover .step-indicator{background-color:#e60000}aw-wizard-navigation-bar.vertical.large-filled-symbols ul.steps-indicator li.default a:hover .step-indicator{background-color:grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator{padding:5px 5px 5px 55px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li:not(:last-child):before{background-color:#e6e6e6;content:'';position:absolute;left:-25px;top:50px;height:calc(100% - 50px);width:1px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a{min-height:50px}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li .step-indicator{position:absolute;top:0;left:-50px;width:50px;height:50px;text-align:center;vertical-align:middle;line-height:46px;transition:.25s;border-radius:100%;color:#e6e6e6;border:2px solid #e6e6e6}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current .step-indicator{color:grey;border:2px solid grey}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done .step-indicator{color:#393;border:2px solid #393}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional .step-indicator{color:#38ef38;border:2px solid #38ef38}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing .step-indicator{color:red;border:2px solid red}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li a:hover .step-indicator{border-color:#cdcdcd;color:#cdcdcd}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.current a:hover .step-indicator{border-color:#676767;color:#676767}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.done a:hover .step-indicator{border-color:#267326;color:#267326}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.optional a:hover .step-indicator{border-color:#12e212;color:#12e212}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.editing a:hover .step-indicator{border-color:#c00;color:#c00}aw-wizard-navigation-bar.vertical.large-empty-symbols ul.steps-indicator li.default a:hover .step-indicator{border-color:grey;color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator{display:flex;flex-direction:column;justify-content:center;list-style:none;margin:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator *{box-sizing:border-box}aw-wizard-navigation-bar.vertical ul.steps-indicator li{position:relative;pointer-events:none}aw-wizard-navigation-bar.vertical ul.steps-indicator li:not(:last-child){margin-bottom:0;padding-bottom:10px}aw-wizard-navigation-bar.vertical ul.steps-indicator li a{display:flex;flex-direction:row;align-items:center;cursor:pointer}aw-wizard-navigation-bar.vertical ul.steps-indicator li a .label{margin-left:15px;color:grey;line-height:14px;font-size:14px;text-decoration:none;text-transform:uppercase;text-align:left;font-weight:700;transition:.25s}aw-wizard-navigation-bar.vertical ul.steps-indicator li a:hover .label{color:#4d4d4d}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a{cursor:auto}aw-wizard-navigation-bar.vertical ul.steps-indicator li.default a .label{color:grey}aw-wizard-navigation-bar.vertical ul.steps-indicator li.navigable{pointer-events:auto}"]
                }] }
    ];
    /** @nocollapse */
    WizardNavigationBarComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardNavigationBarComponent.propDecorators = {
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return WizardNavigationBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard-step` component is used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </aw-wizard-step>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <aw-wizard-step>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardStepComponent, _super);
    function WizardStepComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard-step',
                    template: "<ng-content></ng-content>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardStepComponent; })) }
                    ],
                    styles: ["aw-wizard-step{height:auto;width:100%}"]
                }] }
    ];
    return WizardStepComponent;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `aw-wizard` component defines the root component of a wizard.
 * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
 * of its navigation bar.
 *
 * ### Syntax
 * ```html
 * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
 *     ...
 * </aw-wizard>
 * ```
 *
 * ### Example
 *
 * Without completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 * </aw-wizard>
 * ```
 *
 * With completion step:
 *
 * ```html
 * <aw-wizard navBarLocation="top" navBarLayout="small">
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-step>...</aw-wizard-step>
 *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
 * </aw-wizard>
 * ```
 *
 * @author Marc Arndt
 */
var WizardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param model The model for this wizard component
     */
    function WizardComponent(model) {
        this.model = model;
        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */
        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */
        this.navBarDirection = 'left-to-right';
        /**
         * The navigation mode used for transitioning between different steps.
         * The navigation mode can be either `strict`, `semi-strict` or `free`
         */
        this.navigationMode = 'strict';
        /**
         * The initially selected step, represented by its index
         */
        this.defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */
        this.disableNavigationBar = false;
    }
    Object.defineProperty(WizardComponent.prototype, "horizontalOrientation", {
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @returns True if this wizard uses a horizontal orientation
         */
        get: /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @return {?} True if this wizard uses a horizontal orientation
         */
        function () {
            return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "verticalOrientation", {
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @returns True if this wizard uses a vertical orientation
         */
        get: /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @return {?} True if this wizard uses a vertical orientation
         */
        function () {
            return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "navigation", {
        /**
         * The navigation mode for this wizard
         */
        get: /**
         * The navigation mode for this wizard
         * @return {?}
         */
        function () {
            return this.model.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Updates the model after certain input values have changed
     *
     * @param changes The detected changes
     */
    /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    WizardComponent.prototype.ngOnChanges = /**
     * Updates the model after certain input values have changed
     *
     * @param {?} changes The detected changes
     * @return {?}
     */
    function (changes) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                /** @type {?} */
                var change = changes[propName];
                if (!change.firstChange) {
                    switch (propName) {
                        case 'defaultStepIndex':
                            this.model.defaultStepIndex = parseInt(change.currentValue, 10);
                            break;
                        case 'disableNavigationBar':
                            this.model.disableNavigationBar = change.currentValue;
                            break;
                        case 'navigationMode':
                            this.model.updateNavigationMode(change.currentValue);
                            break;
                        /* istanbul ignore next */
                        default:
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    WizardComponent.prototype.ngAfterContentInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        var _this = this;
        // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
        this.wizardSteps.changes.subscribe((/**
         * @param {?} changedWizardSteps
         * @return {?}
         */
        function (changedWizardSteps) {
            _this.model.updateWizardSteps(changedWizardSteps.toArray());
        }));
        // initialize the model
        this.model.disableNavigationBar = this.disableNavigationBar;
        this.model.defaultStepIndex = this.defaultStepIndex;
        this.model.updateWizardSteps(this.wizardSteps.toArray());
        this.model.updateNavigationMode(this.navigationMode);
        // finally reset the whole wizard state
        this.navigation.reset();
    };
    WizardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'aw-wizard',
                    template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    providers: [WizardState],
                    styles: ["aw-wizard{display:flex;justify-content:flex-start}aw-wizard.vertical{flex-direction:row}aw-wizard.horizontal{flex-direction:column}aw-wizard .wizard-steps{top:0;display:flex}aw-wizard .wizard-steps.vertical{min-width:calc(100% - 280px);width:80%;height:100%;flex-direction:column}aw-wizard .wizard-steps.horizontal{width:100%;flex-direction:row}"]
                }] }
    ];
    /** @nocollapse */
    WizardComponent.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    WizardComponent.propDecorators = {
        wizardSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [WizardStep,] }],
        navBarLocation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navBarLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navBarDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        navigationMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        defaultStepIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableNavigationBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        horizontalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.horizontal',] }],
        verticalOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.vertical',] }]
    };
    return WizardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
 *     ...
 * </aw-wizard-completion-step>
 * ```
 *
 * @author Marc Arndt
 */
var EnableBackLinksDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param completionStep The wizard completion step, which should be exitable
     */
    function EnableBackLinksDirective(completionStep) {
        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */
        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    EnableBackLinksDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.completionStep.canExit = true;
        this.completionStep.stepExit = this.stepExit;
    };
    EnableBackLinksDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awEnableBackLinks]'
                },] }
    ];
    /** @nocollapse */
    EnableBackLinksDirective.ctorParameters = function () { return [
        { type: WizardCompletionStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    EnableBackLinksDirective.propDecorators = {
        stepExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return EnableBackLinksDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepId]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepId]] and false otherwise
 */
function isStepId(value) {
    return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepIndex]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepIndex]] and false otherwise
 */
function isStepIndex(value) {
    return value.hasOwnProperty('stepIndex');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks whether the given `value` implements the interface [[StepOffset]].
 *
 * @param {?} value The value to be checked
 * @return {?} True if the given value implements [[StepOffset]] and false otherwise
 */
function isStepOffset(value) {
    return value.hasOwnProperty('stepOffset');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awGoToStep` directive can be used to navigate to a given step.
 * This step can be defined in one of multiple formats
 *
 * ### Syntax
 *
 * With absolute step index:
 *
 * ```html
 * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
 * ```
 *
 * With unique step id:
 *
 * ```html
 * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
 * ```
 *
 * With a wizard step object:
 *
 * ```html
 * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
 * ```
 *
 * With an offset to the defining step:
 *
 * ```html
 * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var GoToStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     * @param wizardStep The wizard step, which contains this [[GoToStepDirective]]
     */
    function GoToStepDirective(wizardState, wizardStep) {
        this.wizardState = wizardState;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(GoToStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "destinationStep", {
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @returns The index of the destination step
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         */
        get: /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         * @return {?} The index of the destination step
         */
        function () {
            /** @type {?} */
            var destinationStep;
            if (isStepIndex(this.targetStep)) {
                destinationStep = this.targetStep.stepIndex;
            }
            else if (isStepId(this.targetStep)) {
                destinationStep = this.wizardState.getIndexOfStepWithId(this.targetStep.stepId);
            }
            else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
                destinationStep = this.wizardState.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
            }
            else if (this.targetStep instanceof WizardStep) {
                destinationStep = this.wizardState.getIndexOfStep(this.targetStep);
            }
            else {
                throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");
            }
            return destinationStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoToStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    GoToStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the `destinationStep`
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
    };
    GoToStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awGoToStep]'
                },] }
    ];
    /** @nocollapse */
    GoToStepDirective.ctorParameters = function () { return [
        { type: WizardState },
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    GoToStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        targetStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['awGoToStep',] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return GoToStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awNextStep` directive can be used to navigate to the next step.
 *
 * ### Syntax
 *
 * ```html
 * <button awNextStep (finalize)="finalize method">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var NextStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function NextStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NextStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience name for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NextStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    NextStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the next step
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize);
    };
    NextStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awNextStep]'
                },] }
    ];
    /** @nocollapse */
    NextStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    NextStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return NextStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
 * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * ### Example
 *
 * ```html
 * <aw-wizard-step stepTitle="Second step" awOptionalStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var OptionalStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which contains this [[OptionalStepDirective]]
     */
    function OptionalStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    OptionalStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.optional = true;
    };
    OptionalStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awOptionalStep]'
                },] }
    ];
    /** @nocollapse */
    OptionalStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    return OptionalStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awPreviousStep` directive can be used to navigate to the previous step.
 * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
 *
 * ### Syntax
 *
 * ```html
 * <button awPreviousStep>...</button>
 * ```
 *
 * @author Marc Arndt
 */
var PreviousStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The state of the wizard
     */
    function PreviousStepDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */
        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */
        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PreviousStepDirective.prototype, "finalize", {
        /**
         * A convenience field for `preFinalize`
         */
        get: /**
         * A convenience field for `preFinalize`
         * @return {?}
         */
        function () {
            return this.preFinalize;
        },
        /**
         * A convenience field for `preFinalize`
         *
         * @param emitter The [[EventEmitter]] to be set
         */
        set: /**
         * A convenience field for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        function (emitter) {
            /* istanbul ignore next */
            this.preFinalize = emitter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreviousStepDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     */
    /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    PreviousStepDirective.prototype.onClick = /**
     * Listener method for `click` events on the component with this directive.
     * After this method is called the wizard will try to transition to the previous step
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize);
    };
    PreviousStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awPreviousStep]'
                },] }
    ];
    /** @nocollapse */
    PreviousStepDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    PreviousStepDirective.propDecorators = {
        preFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        postFinalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return PreviousStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awResetWizard` directive can be used to reset the wizard to its initial state.
 * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
 *
 * ### Syntax
 *
 * ```html
 * <button awResetWizard (finalize)="custom reset task">...</button>
 * ```
 *
 * @author Marc Arndt
 */
var ResetWizardDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardState The wizard state
     */
    function ResetWizardDirective(wizardState) {
        this.wizardState = wizardState;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */
        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ResetWizardDirective.prototype, "navigationMode", {
        /**
         * The navigation mode
         */
        get: /**
         * The navigation mode
         * @private
         * @return {?}
         */
        function () {
            return this.wizardState.navigationMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the wizard
     */
    /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    ResetWizardDirective.prototype.onClick = /**
     * Resets the wizard
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // do some optional cleanup work
        this.finalize.emit();
        // reset the wizard to its initial state
        this.navigationMode.reset();
    };
    ResetWizardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awResetWizard]'
                },] }
    ];
    /** @nocollapse */
    ResetWizardDirective.ctorParameters = function () { return [
        { type: WizardState }
    ]; };
    ResetWizardDirective.propDecorators = {
        finalize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }]
    };
    return ResetWizardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
 *
 * ### Syntax
 *
 * ```html
 * <aw-wizard-step stepTitle="Step title" awSelectedStep>
 *     ...
 * </aw-wizard-step>
 * ```
 *
 * @author Marc Arndt
 */
var SelectedStepDirective = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param wizardStep The wizard step, which should be selected by default
     */
    function SelectedStepDirective(wizardStep) {
        this.wizardStep = wizardStep;
    }
    /**
     * Initialization work
     */
    /**
     * Initialization work
     * @return {?}
     */
    SelectedStepDirective.prototype.ngOnInit = /**
     * Initialization work
     * @return {?}
     */
    function () {
        this.wizardStep.defaultSelected = true;
    };
    SelectedStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awSelectedStep]'
                },] }
    ];
    /** @nocollapse */
    SelectedStepDirective.ctorParameters = function () { return [
        { type: WizardStep, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
    ]; };
    return SelectedStepDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
 *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardCompletionStepDirective, _super);
    function WizardCompletionStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardCompletionStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awWizardCompletionStep]',
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepDirective; })) },
                        { provide: WizardCompletionStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardCompletionStepDirective; })) }
                    ]
                },] }
    ];
    return WizardCompletionStepDirective;
}(WizardCompletionStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The `awWizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template awWizardStepTitle>
 *        step title
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        symbol
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `stepTitle` and `navigationSymbol` inputs:
 *
 * ```html
 * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
 *    ...
 * </div>
 * ```
 *
 * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
 *
 * ```html
 * <div awWizardStep>
 *    <ng-template awWizardStepTitle>
 *        Address information
 *    </ng-template>
 *    <ng-template awWizardStepSymbol>
 *        <i class="fa fa-taxi"></i>
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WizardStepDirective, _super);
    function WizardStepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStepDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[awWizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                             * @return {?}
                             */
                            function () { return WizardStepDirective; })) }
                    ]
                },] }
    ];
    return WizardStepDirective;
}(WizardStep));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The module defining all the content inside `angular-archwizard`
 *
 * @author Marc Arndt
 */
var ArchwizardModule = /** @class */ (function () {
    function ArchwizardModule() {
    }
    /* istanbul ignore next */
    /* istanbul ignore next */
    /**
     * @return {?}
     */
    ArchwizardModule.forRoot = /* istanbul ignore next */
    /**
     * @return {?}
     */
    function () {
        return { ngModule: ArchwizardModule, providers: [] };
    };
    ArchwizardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        WizardComponent,
                        WizardStepComponent,
                        WizardNavigationBarComponent,
                        WizardCompletionStepComponent,
                        GoToStepDirective,
                        NextStepDirective,
                        PreviousStepDirective,
                        OptionalStepDirective,
                        WizardStepSymbolDirective,
                        WizardStepTitleDirective,
                        EnableBackLinksDirective,
                        WizardStepDirective,
                        WizardCompletionStepDirective,
                        SelectedStepDirective,
                        ResetWizardDirective
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        WizardComponent,
                        WizardStepComponent,
                        WizardNavigationBarComponent,
                        WizardCompletionStepComponent,
                        GoToStepDirective,
                        NextStepDirective,
                        PreviousStepDirective,
                        OptionalStepDirective,
                        WizardStepSymbolDirective,
                        WizardStepTitleDirective,
                        EnableBackLinksDirective,
                        WizardStepDirective,
                        WizardCompletionStepDirective,
                        SelectedStepDirective,
                        ResetWizardDirective
                    ]
                },] }
    ];
    return ArchwizardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1hcmNod2l6YXJkLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtc3ltYm9sLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXRpdGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0udHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vZnJlZS1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zZW1pLXN0cmljdC1uYXZpZ2F0aW9uLW1vZGUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvbmF2aWdhdGlvbi9zdHJpY3QtbmF2aWdhdGlvbi1tb2RlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2NvbXBvbmVudHMvd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9jb21wb25lbnRzL3dpemFyZC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9lbmFibGUtYmFjay1saW5rcy5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvdXRpbC9zdGVwLWlkLmludGVyZmFjZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi91dGlsL3N0ZXAtaW5kZXguaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9uZXh0LXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvb3B0aW9uYWwtc3RlcC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9wcmV2aW91cy1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3Jlc2V0LXdpemFyZC5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItYXJjaHdpemFyZC9saWIvZGlyZWN0aXZlcy9zZWxlY3RlZC1zdGVwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1hcmNod2l6YXJkL2xpYi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWFyY2h3aXphcmQvbGliL2FyY2h3aXphcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0IG9mIGEgW1tXaXphcmRTdGVwXV1cbiAqIHRvIGRlZmluZSB0aGUgc3RlcCBzeW1ib2wgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci4gIFRoaXMgd2F5IHN0ZXAgc3ltYm9sIG1heSBjb250YWluIGFyYml0cmFyeSBjb250ZW50LlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgIC4uLlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthd1N0ZXBTeW1ib2xdLCBuZy10ZW1wbGF0ZVthd1dpemFyZFN0ZXBTeW1ib2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBBIHJlZmVyZW5jZSB0byB0aGUgY29udGVudCBvZiB0aGUgYG5nLXRlbXBsYXRlYCB0aGF0IGNvbnRhaW5zIHRoaXMgW1tXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlXV1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRTdGVwVGl0bGVgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byB0aGUgYHN0ZXBUaXRsZWAgaW5wdXQgb2YgYSBbW1dpemFyZFN0ZXBdXVxuICogdG8gZGVmaW5lIHRoZSBjb250ZW50IG9mIGEgc3RlcCB0aXRsZSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyLlxuICogVGhpcyBzdGVwIHRpdGxlIGNhbiBiZSBmcmVlbHkgY3JlYXRlZCBhbmQgY2FuIGNvbnRhaW4gbW9yZSB0aGFuIG9ubHkgcGxhaW4gdGV4dFxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwVGl0bGU+XG4gKiAgICAgLi4uXG4gKiA8L25nLXRlbXBsYXRlPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F3U3RlcFRpdGxlXSwgbmctdGVtcGxhdGVbYXdXaXphcmRTdGVwVGl0bGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIEEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IG9mIHRoZSBgbmctdGVtcGxhdGVgIHRoYXQgY29udGFpbnMgdGhpcyBbW1dpemFyZFN0ZXBUaXRsZURpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4uL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25TeW1ib2x9IGZyb20gJy4vbmF2aWdhdGlvbi1zeW1ib2wuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBCYXNpYyBmdW5jdGlvbmFsaXR5IGV2ZXJ5IHR5cGUgb2Ygd2l6YXJkIHN0ZXAgbmVlZHMgdG8gcHJvdmlkZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cbiAgICogVGhpcyB0aXRsZSBpcyB0aGVuIHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIENvbXBhcmVkIHRvIGBzdGVwVGl0bGVgIHRoaXMgcHJvcGVydHkgY2FuIGNvbnRhaW4gYW55IGh0bWwgY29udGVudCBhbmQgbm90IG9ubHkgcGxhaW4gdGV4dFxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUpXG4gIHB1YmxpYyBzdGVwVGl0bGVUZW1wbGF0ZTogV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgc3ltYm9sIHByb3BlcnR5IHRoYXQsIGlmIGRlZmluZWQsIG92ZXJyaWRlcyBgbmF2aWdhdGlvblN5bWJvbGAuXG4gICAqIEFsbG93cyB0byBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50IGFzIGEgc3RlcCBzeW1ib2wgaW5zdGVhZCBvZiBwbGFpbiB0ZXh0LlxuICAgKi9cbiAgQENvbnRlbnRDaGlsZChXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlKVxuICBwdWJsaWMgc3RlcFN5bWJvbFRlbXBsYXRlOiBXaXphcmRTdGVwU3ltYm9sRGlyZWN0aXZlO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgaWQsIHVuaXF1ZSB0byB0aGUgc3RlcFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHN0ZXBJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0ZXAgdGl0bGUgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIHRoZSB2aXNpYmxlIGhlYWRlciB0aXRsZSBvZiB0aGUgc3RlcC5cbiAgICogVGhpcyB0aXRsZSBpcyBvbmx5IHNob3duIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIsIGlmIGBzdGVwVGl0bGVUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGVwVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogQSBzeW1ib2wgcHJvcGVydHksIHdoaWNoIGNvbnRhaW5zIGFuIG9wdGlvbmFsIHN5bWJvbCBmb3IgdGhlIHN0ZXAgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhci5cbiAgICogVGFrZXMgZWZmZWN0IHdoZW4gYHN0ZXBTeW1ib2xUZW1wbGF0ZWAgaXMgbm90IGRlZmluZWQgb3IgbnVsbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYXZpZ2F0aW9uU3ltYm9sOiBOYXZpZ2F0aW9uU3ltYm9sID0ge3N5bWJvbDogJyd9O1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaGFzIGJlZW4gY29tcGxldGVkXG4gICAqL1xuICBwdWJsaWMgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYm9vbGVhbiBkZXNjcmliaW5nIGlmIHRoZSB3aXphcmQgc3RlcCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcbiAgICovXG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZywgaWYgdGhlIHdpemFyZCBzdGVwIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0LCBpLmUuIGFmdGVyIHRoZSB3aXphcmQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgYXMgdGhlIGluaXRpYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIGRlZmF1bHRTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gZGVzY3JpYmluZyBpZiB0aGUgd2l6YXJkIHN0ZXAgaXMgYW4gb3B0aW9uYWwgc3RlcFxuICAgKi9cbiAgcHVibGljIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gb3IgYm9vbGVhbiBkZWNpZGluZywgaWYgdGhpcyBzdGVwIGNhbiBiZSBlbnRlcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FuRW50ZXI6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBvciBib29sZWFuIGRlY2lkaW5nLCBpZiB0aGlzIHN0ZXAgY2FuIGJlIGV4aXRlZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhbkV4aXQ6ICgoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pID0+IGJvb2xlYW4pIHwgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGVudGVyZWQuXG4gICAqIFRoZSBib3VuZCBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgdG8gZG8gaW5pdGlhbGl6YXRpb24gd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEVudGVyOiBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92aW5nRGlyZWN0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIHdoZW4gdGhlIHN0ZXAgaXMgZXhpdGVkLlxuICAgKiBUaGUgYm91bmQgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGRvIGNsZWFudXAgd29yay5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3RlcEV4aXQ6IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyB3aXphcmQgc3RlcCBzaG91bGQgYmUgdmlzaWJsZSB0byB0aGUgdXNlci5cbiAgICogSWYgdGhlIHN0ZXAgc2hvdWxkIGJlIHZpc2libGUgdG8gdGhlIHVzZXIgZmFsc2UgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSB0cnVlXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2hpZGRlbicpXG4gIHB1YmxpYyBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB3aXRoIGEgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBUcmFuc2l0aW9uZWQgaW4gdGhpcyBjYXNlIG1lYW5zIGVpdGhlciBlbnRlcmVkIG9yIGV4aXRlZCwgZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBgY29uZGl0aW9uYCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdmFyaWFibGUsIGRlY2lkaW5nIGlmIHRoZSBzdGVwIGNhbiBiZSB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgdHJhbnNpdGlvbmVkXG4gICAqIEByZXR1cm5zIEEgW1tQcm9taXNlXV0gY29udGFpbmluZyBgdHJ1ZWAsIGlmIHRoaXMgc3RlcCBjYW4gdHJhbnNpdGlvbmVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biBpZiBgY29uZGl0aW9uYCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY2FuVHJhbnNpdGlvblN0ZXAoY29uZGl0aW9uOiAoKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKSA9PiBib29sZWFuKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gUHJvbWlzZTxib29sZWFuPikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKHR5cGVvZihjb25kaXRpb24pID09PSB0eXBlb2YodHJ1ZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uIGFzIGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZGl0aW9uKGRpcmVjdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBJbnB1dCB2YWx1ZSAnJHtjb25kaXRpb259JyBpcyBuZWl0aGVyIGEgYm9vbGVhbiBub3IgYSBmdW5jdGlvbmApKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgc3RlcCBpcyBlbnRlcmVkXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnN0ZXBFbnRlci5lbWl0KGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgc3RlcCBpcyBleGl0ZWRcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBzdGVwIGlzIGV4aXRlZFxuICAgKi9cbiAgcHVibGljIGV4aXQoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgZnJvbSB0aGUgZ2l2ZW4gZGlyZWN0aW9uLlxuICAgKiBCZWNhdXNlIHRoaXMgbWV0aG9kIGRlcGVuZHMgb24gdGhlIHZhbHVlIGBjYW5FbnRlcmAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FbnRlcmAgaXMgbmVpdGhlciBhIGJvb2xlYW5cbiAgICogbm9yIGEgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGlzIHN0ZXAgc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIHN0ZXAgY2FuIGJlIGVudGVyZWQgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEB0aHJvd3MgQW4gYEVycm9yYCBpcyB0aHJvd24gaWYgYGFuRW50ZXJgIGlzIG5laXRoZXIgYSBmdW5jdGlvbiBub3IgYSBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FuRW50ZXJTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FbnRlciwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIGlmIHRoaXMgd2l6YXJkIHN0ZXAgY2FuIGJlIGV4aXRlZCBpbnRvIGdpdmVuIGRpcmVjdGlvbi5cbiAgICogQmVjYXVzZSB0aGlzIG1ldGhvZCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSBgY2FuRXhpdGAsIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IsIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgYm9vbGVhblxuICAgKiBub3IgYSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoaXMgc3RlcCBzaG91bGQgYmUgbGVmdFxuICAgKiBAcmV0dXJucyBBIFtbUHJvbWlzZV1dIGNvbnRhaW5pbmcgYHRydWVgLCBpZiB0aGUgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24sIGZhbHNlIG90aGVyd2lzZVxuICAgKiBAdGhyb3dzIEFuIGBFcnJvcmAgaXMgdGhyb3duIGlmIGBjYW5FeGl0YCBpcyBuZWl0aGVyIGEgZnVuY3Rpb24gbm9yIGEgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbkV4aXRTdGVwKGRpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIFdpemFyZFN0ZXAuY2FuVHJhbnNpdGlvblN0ZXAodGhpcy5jYW5FeGl0LCBkaXJlY3Rpb24pO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZFN0ZXB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5cbi8qKlxuICogQmFzaWMgZnVuY3Rpb25hbGl0eSBldmVyeSB3aXphcmQgY29tcGxldGlvbiBzdGVwIG5lZWRzIHRvIHByb3ZpZGVcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgY2FuRXhpdDogKChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbikgPT4gYm9vbGVhbikgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZW50ZXIoZGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGhpcy5zdGVwRW50ZXIuZW1pdChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBwdWJsaWMgZXhpdChkaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbik6IHZvaWQge1xuICAgIC8vIHNldCB0aGlzIGNvbXBsZXRpb24gc3RlcCBhcyBpbmNvbXBsZXRlXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXBFeGl0LmVtaXQoZGlyZWN0aW9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBjb21wb25lbnQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgY29tcGxldGlvbi9zdWNjZXNzIHN0ZXAgYXQgdGhlIGVuZCBvZiB5b3VyIHdpemFyZFxuICogQWZ0ZXIgYSBgYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcGAgaGFzIGJlZW4gZW50ZXJlZCwgaXQgaGFzIHRoZSBjaGFyYWN0ZXJpc3RpYyB0aGF0IHRoZSB1c2VyIGlzIGJsb2NrZWQgZnJvbVxuICogbGVhdmluZyBpdCBhZ2FpbiB0byBhIHByZXZpb3VzIHN0ZXAuXG4gKiBJbiBhZGRpdGlvbiBlbnRlcmluZyBhIGBhdy13aXphcmQtY29tcGxldGlvbi1zdGVwYCBhdXRvbWF0aWNhbGx5IHNldHMgdGhlIGBhdy13aXphcmRgIGFuZCBhbGwgc3RlcHMgaW5zaWRlIHRoZSBgYXctd2l6YXJkYFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBbc3RlcFRpdGxlXT1cInRpdGxlIG9mIHRoZSB3aXphcmQgc3RlcFwiXG4gKiAgICBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJ25hdmlnYXRpb24gc3ltYm9sJywgZm9udEZhbWlseTogJ25hdmlnYXRpb24gc3ltYm9sIGZvbnQgZmFtaWx5JyB9XCJcbiAqICAgIChzdGVwRW50ZXIpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZW50ZXJlZFwiXG4gKiAgICAoc3RlcEV4aXQpPVwiZXZlbnQgZW1pdHRlciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgd2l6YXJkIHN0ZXAgaXMgZXhpdGVkXCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAgc3RlcFRpdGxlPVwiU3RlcCAxXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICcxJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnJiN4ZjFiYTsnLCBmb250RmFtaWx5OiAnRm9udEF3ZXNvbWUnIH1cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJ3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCl9LFxuICAgIHtwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBDb21wb25lbnQpfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xufVxuIiwiLyoqXG4gKiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIGEgc3RlcCB0cmFuc2l0aW9uIHdhcyBtYWRlXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cblxuLyoqXG4gKiBUaGlzIGVudW0gY29udGFpbnMgdGhlIGRpZmZlcmVudCBwb3NzaWJsZSBtb3ZpbmcgZGlyZWN0aW9ucyBpbiB3aGljaCBhIHdpemFyZCBjYW4gYmUgdHJhdmVyc2VkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBlbnVtIE1vdmluZ0RpcmVjdGlvbiB7XG4gIC8qKlxuICAgKiBBIGZvcndhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBGb3J3YXJkcyxcbiAgLyoqXG4gICAqIEEgYmFja3dhcmQgc3RlcCB0cmFuc2l0aW9uXG4gICAqL1xuICBCYWNrd2FyZHMsXG4gIC8qKlxuICAgKiBObyBzdGVwIHRyYW5zaXRpb24gd2FzIGRvbmVcbiAgICovXG4gIFN0YXlcbn1cbiIsImltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgZGVzY3JpYmluZyB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eSwgd2hpY2ggbXVzdCBiZSBwcm92aWRlZCBieSBhIG5hdmlnYXRpb24gbW9kZS5cbiAqIEEgbmF2aWdhdGlvbiBtb2RlIG1hbmFnZXMgdGhlIG5hdmlnYXRpb24gYmV0d2VlbiBkaWZmZXJlbnQgd2l6YXJkIHN0ZXBzLCB0aGlzIGNvbnRhaW5zIHRoZSB2YWxpZGF0aW9uLCBpZiBhIHN0ZXAgdHJhbnNpdGlvbiBjYW4gYmUgZG9uZVxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF2aWdhdGlvbk1vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgd2l6YXJkIHN0ZXAsIGFzIGRlZmluZWQgYnkgdGhlIGdpdmVuIGRlc3RpbmF0aW9uIGluZGV4LCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHJldHVybnMgQSBbW1Byb21pc2VdXSBjb250YWluaW5nIGB0cnVlYCwgaWYgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY2FuIGJlIHRyYW5zaXRpb25lZCB0byBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBhYnN0cmFjdCBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byB0cmFuc2l0aW9uIHRvIHRoZSB3aXphcmQgc3RlcCwgYXMgZGVub3RlZCBieSB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIElmIHRoaXMgaXMgbm90IHBvc3NpYmxlLCB0aGUgY3VycmVudCB3aXphcmQgc3RlcCBzaG91bGQgYmUgZXhpdGVkIGFuZCB0aGVuIHJlZW50ZXJlZCB3aXRoIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGFic3RyYWN0IGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciB0aGUgd2l6YXJkIHN0ZXAsIGxvY2F0ZWQgYXQgdGhlIGdpdmVuIGluZGV4LCBpcyBjYW4gYmUgbmF2aWdhdGVkIHRvXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBuYXZpZ2F0ZWQgdG8sIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgYWJzdHJhY3QgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBzdGF0ZSBvZiB0aGlzIHdpemFyZC5cbiAgICogQSByZXNldCB0cmFuc2l0aW9ucyB0aGUgd2l6YXJkIGF1dG9tYXRpY2FsbHkgdG8gdGhlIGZpcnN0IHN0ZXAgYW5kIHNldHMgYWxsIHN0ZXBzIGFzIGluY29tcGxldGUuXG4gICAqIEluIGFkZGl0aW9uIHRoZSB3aG9sZSB3aXphcmQgaXMgc2V0IGFzIGluY29tcGxldGVcbiAgICovXG4gIGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHRyYW5zaXRpb24gdGhlIHdpemFyZCB0byB0aGUgcHJldmlvdXMgc3RlcCBmcm9tIHRoZSBgY3VycmVudFN0ZXBgXG4gICAqL1xuICBnb1RvUHJldmlvdXNTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNQcmV2aW91c1N0ZXAoKSkge1xuICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggLSAxLCBwcmVGaW5hbGl6ZSwgcG9zdEZpbmFsaXplKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gdHJhbnNpdGlvbiB0aGUgd2l6YXJkIHRvIHRoZSBuZXh0IHN0ZXAgZnJvbSB0aGUgYGN1cnJlbnRTdGVwYFxuICAgKi9cbiAgZ29Ub05leHRTdGVwKHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5oYXNOZXh0U3RlcCgpKSB7XG4gICAgICB0aGlzLmdvVG9TdGVwKHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCArIDEsIHByZUZpbmFsaXplLCBwb3N0RmluYWxpemUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBbW05hdmlnYXRpb25Nb2RlXV0sIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBuYXZpZ2F0ZSB3aXRob3V0IGFueSBsaW1pdGF0aW9ucyxcbiAqIGFzIGxvbmcgYXMgdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuZXhwb3J0IGNsYXNzIEZyZWVOYXZpZ2F0aW9uTW9kZSBleHRlbmRzIE5hdmlnYXRpb25Nb2RlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGF0ZSBUaGUgbW9kZWwvc3RhdGUgb2YgdGhlIHdpemFyZCwgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhpcyBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHdpemFyZFN0YXRlOiBXaXphcmRTdGF0ZSkge1xuICAgIHN1cGVyKHdpemFyZFN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciB0aGUgd2l6YXJkIGNhbiBiZSB0cmFuc2l0aW9uZWQgdG8gdGhlIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAuXG4gICAqIEEgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQgaWY6XG4gICAqIC0gaXQgZXhpc3RzXG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBoYXNTdGVwID0gdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgbW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICBjb25zdCBjYW5FeGl0Q3VycmVudFN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBwcmV2aW91cyA/IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY2FuRXhpdFN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbkVudGVyRGVzdGluYXRpb25TdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KGRlc3RpbmF0aW9uSW5kZXgpLmNhbkVudGVyU3RlcChtb3ZpbmdEaXJlY3Rpb24pIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNTdGVwKVxuICAgICAgLnRoZW4oY2FuRXhpdEN1cnJlbnRTdGVwKVxuICAgICAgLnRoZW4oY2FuRW50ZXJEZXN0aW5hdGlvblN0ZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIGVudGVyIHRoZSB3aXphcmQgc3RlcCB3aXRoIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBpbmRleC5cbiAgICogV2hlbiBlbnRlcmluZyB0aGUgZGVzdGluYXRpb24gc3RlcCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIHNldCBhcyBjb21wbGV0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgdW5zZWxlY3RlZFxuICAgKiAtIHRoZSBvbGQgY3VycmVudCBzdGVwIGlzIGV4aXRlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIHNldCBhcyBzZWxlY3RlZFxuICAgKiAtIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzIGVudGVyZWRcbiAgICpcbiAgICogV2hlbiB0aGUgZGVzdGluYXRpb24gc3RlcCBjb3VsZG4ndCBiZSBlbnRlcmVkLCB0aGUgZm9sbG93aW5nIGFjdGlvbnMgYXJlIGRvbmU6XG4gICAqIC0gdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgYW5kIGVudGVyZWQgaW4gdGhlIGRpcmVjdGlvbiBgTW92aW5nRGlyZWN0aW9uLlN0YXlgXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBlbnRlcmVkXG4gICAqIEBwYXJhbSBwcmVGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYmVmb3JlIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKiBAcGFyYW0gcG9zdEZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICovXG4gIGdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXg6IG51bWJlciwgcHJlRmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4sIHBvc3RGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMuY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleCkudGhlbihuYXZpZ2F0aW9uQWxsb3dlZCA9PiB7XG4gICAgICBpZiAobmF2aWdhdGlvbkFsbG93ZWQpIHtcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RlcCBjYW4gYmUgZXhpdGVkIGluIHRoZSBnaXZlbiBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgbW92aW5nRGlyZWN0aW9uOiBNb3ZpbmdEaXJlY3Rpb24gPSB0aGlzLndpemFyZFN0YXRlLmdldE1vdmluZ0RpcmVjdGlvbihkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByZUZpbmFsaXplKSB7XG4gICAgICAgICAgcHJlRmluYWxpemUuZW1pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGVhdmUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSBkZXN0aW5hdGlvbkluZGV4O1xuXG4gICAgICAgIC8vIGdvIHRvIG5leHQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKG1vdmluZ0RpcmVjdGlvbik7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocG9zdEZpbmFsaXplKSB7XG4gICAgICAgICAgcG9zdEZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgc3RlcCBjYW4ndCBiZSBsZWZ0LCByZWVudGVyIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5leGl0KE1vdmluZ0RpcmVjdGlvbi5TdGF5KTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHN0YXRlIG9mIHRoaXMgd2l6YXJkLlxuICAgKiBBIHJlc2V0IHRyYW5zaXRpb25zIHRoZSB3aXphcmQgYXV0b21hdGljYWxseSB0byB0aGUgZmlyc3Qgc3RlcCBhbmQgc2V0cyBhbGwgc3RlcHMgYXMgaW5jb21wbGV0ZS5cbiAgICogSW4gYWRkaXRpb24gdGhlIHdob2xlIHdpemFyZCBpcyBzZXQgYXMgaW5jb21wbGV0ZVxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vdmluZ0RpcmVjdGlvbn0gZnJvbSAnLi4vdXRpbC9tb3ZpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtY29tcGxldGlvbi1zdGVwLmludGVyZmFjZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aCBzb21lIGxpbWl0YXRpb25zLlxuICogVGhlIHVzZXIgY2FuIG9ubHkgbmF2aWdhdGlvbiB0byBhIGdpdmVuIGRlc3RpbmF0aW9uIHN0ZXAsIGlmOlxuICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICogLSBhIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgXCJub3JtYWxcIiB3aXphcmQgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgY2xhc3MgU2VtaVN0cmljdE5hdmlnYXRpb25Nb2RlIGV4dGVuZHMgTmF2aWdhdGlvbk1vZGUge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSBtb2RlbC9zdGF0ZSBvZiB0aGUgd2l6YXJkLCB0aGF0IGlzIGNvbmZpZ3VyZWQgd2l0aCB0aGlzIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3Iod2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gICAgc3VwZXIod2l6YXJkU3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSB3aXphcmQgY2FuIGJlIHRyYW5zaXRpb25lZCB0byB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcC5cbiAgICogQSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCBjYW4gYmUgZW50ZXJlZCBpZjpcbiAgICogLSBpdCBleGlzdHNcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGNhbiBiZSBleGl0ZWQgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKiAtIGFsbCBcIm5vcm1hbFwiIHdpemFyZCBzdGVwcyBoYXZlIGJlZW4gY29tcGxldGVkLCBhcmUgb3B0aW9uYWwgb3Igc2VsZWN0ZWQsIG9yIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGlzbid0IGEgY29tcGxldGlvbiBzdGVwXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIC8vIHByb3ZpZGUgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXMgYSBsYW1iZGEgaW4gY2FzZSB0aGUgaW5kZXggZG9lc24ndCBleGlzdCAoaS5lLiBoYXNTdGVwID09PSBmYWxzZSlcbiAgICBjb25zdCBkZXN0aW5hdGlvblN0ZXAgPSAocHJldmlvdXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb25zdCBhbGxOb3JtYWxTdGVwc0NvbXBsZXRlZCA9IHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHNcbiAgICAgICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAgIC5ldmVyeShzdGVwID0+IHN0ZXAuY29tcGxldGVkIHx8IHN0ZXAub3B0aW9uYWwgfHwgc3RlcC5zZWxlY3RlZCk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgICAhKHRoaXMud2l6YXJkU3RhdGUuZ2V0U3RlcEF0SW5kZXgoZGVzdGluYXRpb25JbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCkgfHwgYWxsTm9ybWFsU3RlcHNDb21wbGV0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxuICAgICAgLnRoZW4oZGVzdGluYXRpb25TdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBzZXQgYXMgc2VsZWN0ZWRcbiAgICogLSB0aGUgZGVzdGluYXRpb24gc3RlcCBpcyBlbnRlcmVkXG4gICAqXG4gICAqIFdoZW4gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgY291bGRuJ3QgYmUgZW50ZXJlZCwgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFyZSBkb25lOlxuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGFuZCBlbnRlcmVkIGluIHRoZSBkaXJlY3Rpb24gYE1vdmluZ0RpcmVjdGlvbi5TdGF5YFxuICAgKlxuICAgKiBAcGFyYW0gZGVzdGluYXRpb25JbmRleCBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwLCB3aGljaCBzaG91bGQgYmUgZW50ZXJlZFxuICAgKiBAcGFyYW0gcHJlRmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGJlZm9yZSB0aGUgc3RlcCBoYXMgYmVlbiB0cmFuc2l0aW9uZWRcbiAgICogQHBhcmFtIHBvc3RGaW5hbGl6ZSBBbiBldmVudCBlbWl0dGVyLCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqL1xuICBnb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsIHByZUZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+LCBwb3N0RmluYWxpemU/OiBFdmVudEVtaXR0ZXI8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLmNhbkdvVG9TdGVwKGRlc3RpbmF0aW9uSW5kZXgpLnRoZW4obmF2aWdhdGlvbkFsbG93ZWQgPT4ge1xuICAgICAgaWYgKG5hdmlnYXRpb25BbGxvd2VkKSB7XG4gICAgICAgIC8vIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbjogTW92aW5nRGlyZWN0aW9uID0gdGhpcy53aXphcmRTdGF0ZS5nZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25JbmRleCk7XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcmVGaW5hbGl6ZSkge1xuICAgICAgICAgIHByZUZpbmFsaXplLmVtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxlYXZlIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcblxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBpc05hdmlnYWJsZShkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KSBpbnN0YW5jZW9mIFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gICAgICAvLyBhIGNvbXBsZXRpb24gc3RlcCBjYW4gb25seSBiZSBlbnRlcmVkLCBpZiBhbGwgcHJldmlvdXMgc3RlcHMgaGF2ZSBiZWVuIGNvbXBsZXRlZCwgYXJlIG9wdGlvbmFsLCBvciBzZWxlY3RlZFxuICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsIHx8IHN0ZXAuc2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhIFwibm9ybWFsXCIgc3RlcCBjYW4gYWx3YXlzIGJlIGVudGVyZWRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgLy8gdGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggdGhlIGRlZmF1bHQgc3RlcCBpbmRleFxuICAgIGlmICghdGhpcy53aXphcmRTdGF0ZS5oYXNTdGVwKHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHdpemFyZCBkb2Vzbid0IGNvbnRhaW4gYSBzdGVwIHdpdGggaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9YCk7XG4gICAgfVxuXG4gICAgLy8gdGhlIGRlZmF1bHQgc3RlcCBpcyBhIGNvbXBsZXRpb24gc3RlcCBhbmQgdGhlIHdpemFyZCBjb250YWlucyBtb3JlIHRoYW4gb25lIHN0ZXBcbiAgICBjb25zdCBkZWZhdWx0Q29tcGxldGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldFN0ZXBBdEluZGV4KHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleCkgaW5zdGFuY2VvZiBXaXphcmRDb21wbGV0aW9uU3RlcCAmJlxuICAgICAgdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5sZW5ndGggIT09IDE7XG5cbiAgICBpZiAoZGVmYXVsdENvbXBsZXRpb25TdGVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IHN0ZXAgaW5kZXggJHt0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXh9IHJlZmVyZW5jZXMgYSBjb21wbGV0aW9uIHN0ZXBgKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgc3RlcCBpbnRlcm5hbCBzdGF0ZVxuICAgIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICBzdGVwLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IHN0ZXAgYXMgdGhlIGN1cnJlbnQgc3RlcFxuICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA9IHRoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleDtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmVudGVyKE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW92aW5nRGlyZWN0aW9ufSBmcm9tICcuLi91dGlsL21vdmluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIEEgW1tOYXZpZ2F0aW9uTW9kZV1dLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gbmF2aWdhdGUgd2l0aCBzdHJpY3QgbGltaXRhdGlvbnMuXG4gKiBUaGUgdXNlciBjYW4gb25seSBuYXZpZ2F0aW9uIHRvIGEgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcCwgaWY6XG4gKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gKiAtIGFsbCBwcmV2aW91cyBzdGVwcyB0byB0aGUgZGVzdGluYXRpb24gc3RlcCBoYXZlIGJlZW4gY29tcGxldGVkIG9yIGFyZSBvcHRpb25hbFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgY2xhc3MgU3RyaWN0TmF2aWdhdGlvbk1vZGUgZXh0ZW5kcyBOYXZpZ2F0aW9uTW9kZSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmQsIHRoYXQgaXMgY29uZmlndXJlZCB3aXRoIHRoaXMgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgICBzdXBlcih3aXphcmRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpemFyZCBjYW4gYmUgdHJhbnNpdGlvbmVkIHRvIHRoZSBnaXZlbiBkZXN0aW5hdGlvbiBzdGVwLlxuICAgKiBBIGRlc3RpbmF0aW9uIHdpemFyZCBzdGVwIGNhbiBiZSBlbnRlcmVkIGlmOlxuICAgKiAtIGl0IGV4aXN0c1xuICAgKiAtIHRoZSBjdXJyZW50IHN0ZXAgY2FuIGJlIGV4aXRlZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqIC0gYWxsIHByZXZpb3VzIHN0ZXBzIHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGhhdmUgYmVlbiBjb21wbGV0ZWQgb3IgYXJlIG9wdGlvbmFsXG4gICAqXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXBcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVzdGluYXRpb24gd2l6YXJkIHN0ZXAgY2FuIGJlIGVudGVyZWQsIGZhbHNlIG90aGVyd2lzZVxuICAgKi9cbiAgY2FuR29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgaGFzU3RlcCA9IHRoaXMud2l6YXJkU3RhdGUuaGFzU3RlcChkZXN0aW5hdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IG1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgY29uc3QgY2FuRXhpdEN1cnJlbnRTdGVwID0gKHByZXZpb3VzOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gcHJldmlvdXMgPyB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmNhbkV4aXRTdGVwKG1vdmluZ0RpcmVjdGlvbikgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5FbnRlckRlc3RpbmF0aW9uU3RlcCA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgcmV0dXJuIHByZXZpb3VzID8gdGhpcy53aXphcmRTdGF0ZS5nZXRTdGVwQXRJbmRleChkZXN0aW5hdGlvbkluZGV4KS5jYW5FbnRlclN0ZXAobW92aW5nRGlyZWN0aW9uKSA6IFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbFByZXZpb3VzU3RlcHNDb21wbGV0ZSA9IChwcmV2aW91czogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwc1xuICAgICAgICAgIC5maWx0ZXIoKHN0ZXAsIGluZGV4KSA9PiBpbmRleCA8IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggIT09IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleClcbiAgICAgICAgICAuZXZlcnkoc3RlcCA9PiBzdGVwLmNvbXBsZXRlZCB8fCBzdGVwLm9wdGlvbmFsKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzU3RlcClcbiAgICAgIC50aGVuKGNhbkV4aXRDdXJyZW50U3RlcClcbiAgICAgIC50aGVuKGNhbkVudGVyRGVzdGluYXRpb25TdGVwKVxuICAgICAgLnRoZW4oYWxsUHJldmlvdXNTdGVwc0NvbXBsZXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBlbnRlciB0aGUgd2l6YXJkIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gZGVzdGluYXRpb24gaW5kZXguXG4gICAqIFdoZW4gZW50ZXJpbmcgdGhlIGRlc3RpbmF0aW9uIHN0ZXAsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBzZXQgYXMgY29tcGxldGVkXG4gICAqIC0gdGhlIG9sZCBjdXJyZW50IHN0ZXAgaXMgc2V0IGFzIHVuc2VsZWN0ZWRcbiAgICogLSB0aGUgb2xkIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWRcbiAgICogLSBhbGwgc3RlcHMgYmV0d2VlbiB0aGUgb2xkIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgYXJlIG1hcmtlZCBhcyBpbmNvbXBsZXRlXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgc2V0IGFzIHNlbGVjdGVkXG4gICAqIC0gdGhlIGRlc3RpbmF0aW9uIHN0ZXAgaXMgZW50ZXJlZFxuICAgKlxuICAgKiBXaGVuIHRoZSBkZXN0aW5hdGlvbiBzdGVwIGNvdWxkbid0IGJlIGVudGVyZWQsIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyBhcmUgZG9uZTpcbiAgICogLSB0aGUgY3VycmVudCBzdGVwIGlzIGV4aXRlZCBhbmQgZW50ZXJlZCBpbiB0aGUgZGlyZWN0aW9uIGBNb3ZpbmdEaXJlY3Rpb24uU3RheWBcbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXggVGhlIGluZGV4IG9mIHRoZSBkZXN0aW5hdGlvbiB3aXphcmQgc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGVudGVyZWRcbiAgICogQHBhcmFtIHByZUZpbmFsaXplIEFuIGV2ZW50IGVtaXR0ZXIsIHRvIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHN0ZXAgaGFzIGJlZW4gdHJhbnNpdGlvbmVkXG4gICAqIEBwYXJhbSBwb3N0RmluYWxpemUgQW4gZXZlbnQgZW1pdHRlciwgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBzdGVwIGhhcyBiZWVuIHRyYW5zaXRpb25lZFxuICAgKi9cbiAgZ29Ub1N0ZXAoZGVzdGluYXRpb25JbmRleDogbnVtYmVyLCBwcmVGaW5hbGl6ZT86IEV2ZW50RW1pdHRlcjx2b2lkPiwgcG9zdEZpbmFsaXplPzogRXZlbnRFbWl0dGVyPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpcy5jYW5Hb1RvU3RlcChkZXN0aW5hdGlvbkluZGV4KS50aGVuKG5hdmlnYXRpb25BbGxvd2VkID0+IHtcbiAgICAgIGlmIChuYXZpZ2F0aW9uQWxsb3dlZCkge1xuICAgICAgICBjb25zdCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbiA9IHRoaXMud2l6YXJkU3RhdGUuZ2V0TW92aW5nRGlyZWN0aW9uKGRlc3RpbmF0aW9uSW5kZXgpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAocHJlRmluYWxpemUpIHtcbiAgICAgICAgICBwcmVGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZWF2ZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLmV4aXQobW92aW5nRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHNldCBhbGwgc3RlcHMgYWZ0ZXIgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgdG8gaW5jb21wbGV0ZVxuICAgICAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAgICAgLmZpbHRlcigoc3RlcCwgaW5kZXgpID0+IHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXBJbmRleCA+IGRlc3RpbmF0aW9uSW5kZXggJiYgaW5kZXggPiBkZXN0aW5hdGlvbkluZGV4KVxuICAgICAgICAgIC5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgPSBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4ID0gZGVzdGluYXRpb25JbmRleDtcblxuICAgICAgICAvLyBnbyB0byBuZXh0IHN0ZXBcbiAgICAgICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihtb3ZpbmdEaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHBvc3RGaW5hbGl6ZSkge1xuICAgICAgICAgIHBvc3RGaW5hbGl6ZS5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IHN0ZXAgY2FuJ3QgYmUgbGVmdCwgcmVlbnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZXhpdChNb3ZpbmdEaXJlY3Rpb24uU3RheSk7XG4gICAgICAgIHRoaXMud2l6YXJkU3RhdGUuY3VycmVudFN0ZXAuZW50ZXIoTW92aW5nRGlyZWN0aW9uLlN0YXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNOYXZpZ2FibGUoZGVzdGluYXRpb25JbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgLy8gYSB3aXphcmQgc3RlcCBjYW4gYmUgbmF2aWdhdGVkIHRvIHRocm91Z2ggdGhlIG5hdmlnYXRpb24gYmFyLCBpZmYgaXQncyBsb2NhdGVkIGJlZm9yZSB0aGUgY3VycmVudCB3aXphcmQgc3RlcFxuICAgIHJldHVybiBkZXN0aW5hdGlvbkluZGV4IDwgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc3RhdGUgb2YgdGhpcyB3aXphcmQuXG4gICAqIEEgcmVzZXQgdHJhbnNpdGlvbnMgdGhlIHdpemFyZCBhdXRvbWF0aWNhbGx5IHRvIHRoZSBmaXJzdCBzdGVwIGFuZCBzZXRzIGFsbCBzdGVwcyBhcyBpbmNvbXBsZXRlLlxuICAgKiBJbiBhZGRpdGlvbiB0aGUgd2hvbGUgd2l6YXJkIGlzIHNldCBhcyBpbmNvbXBsZXRlXG4gICAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICAvLyB0aGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCB0aGUgZGVmYXVsdCBzdGVwIGluZGV4XG4gICAgaWYgKCF0aGlzLndpemFyZFN0YXRlLmhhc1N0ZXAodGhpcy53aXphcmRTdGF0ZS5kZWZhdWx0U3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgd2l6YXJkIGRvZXNuJ3QgY29udGFpbiBhIHN0ZXAgd2l0aCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH1gKTtcbiAgICB9XG5cbiAgICAvLyBhdCBsZWFzdCBvbmUgc3RlcCBpcyBiZWZvcmUgdGhlIGRlZmF1bHQgc3RlcCwgdGhhdCBpcyBub3Qgb3B0aW9uYWxcbiAgICBjb25zdCBpbGxlZ2FsRGVmYXVsdFN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzXG4gICAgICAuZmlsdGVyKChzdGVwLCBpbmRleCkgPT4gaW5kZXggPCB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXgpXG4gICAgICAuc29tZShzdGVwID0+ICFzdGVwLm9wdGlvbmFsKTtcblxuICAgIGlmIChpbGxlZ2FsRGVmYXVsdFN0ZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgc3RlcCBpbmRleCAke3RoaXMud2l6YXJkU3RhdGUuZGVmYXVsdFN0ZXBJbmRleH0gaXMgbG9jYXRlZCBhZnRlciBhIG5vbiBvcHRpb25hbCBzdGVwYCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIHN0ZXAgaW50ZXJuYWwgc3RhdGVcbiAgICB0aGlzLndpemFyZFN0YXRlLndpemFyZFN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgc3RlcC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IHRoZSBmaXJzdCBzdGVwIGFzIHRoZSBjdXJyZW50IHN0ZXBcbiAgICB0aGlzLndpemFyZFN0YXRlLmN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLndpemFyZFN0YXRlLmRlZmF1bHRTdGVwSW5kZXg7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53aXphcmRTdGF0ZS5jdXJyZW50U3RlcC5lbnRlcihNb3ZpbmdEaXJlY3Rpb24uRm9yd2FyZHMpO1xuICB9XG59XG4iLCJpbXBvcnQge0ZyZWVOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9mcmVlLW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc2VtaS1zdHJpY3QtbmF2aWdhdGlvbi1tb2RlJztcbmltcG9ydCB7U3RyaWN0TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4vc3RyaWN0LW5hdmlnYXRpb24tbW9kZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogQSBmYWN0b3J5IG1ldGhvZCB1c2VkIHRvIGNyZWF0ZSBbW05hdmlnYXRpb25Nb2RlXV0gaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIG5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSB0byBiZSB1c2VkIG5hdmlnYXRpb24gbW9kZVxuICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGUgb2YgdGhlIHdpemFyZFxuICogQHJldHVybnMgVGhlIGNyZWF0ZWQgW1tOYXZpZ2F0aW9uTW9kZV1dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkobmF2aWdhdGlvbk1vZGU6IHN0cmluZywgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKTogTmF2aWdhdGlvbk1vZGUge1xuICBzd2l0Y2ggKG5hdmlnYXRpb25Nb2RlKSB7XG4gICAgY2FzZSAnZnJlZSc6XG4gICAgICByZXR1cm4gbmV3IEZyZWVOYXZpZ2F0aW9uTW9kZSh3aXphcmRTdGF0ZSk7XG4gICAgY2FzZSAnc2VtaS1zdHJpY3QnOlxuICAgICAgcmV0dXJuIG5ldyBTZW1pU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgU3RyaWN0TmF2aWdhdGlvbk1vZGUod2l6YXJkU3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7bmF2aWdhdGlvbk1vZGVGYWN0b3J5fSBmcm9tICcuL25hdmlnYXRpb24tbW9kZS5wcm92aWRlcic7XG5cbi8qKlxuICogVGhlIGludGVybmFsIG1vZGVsL3N0YXRlIG9mIGEgd2l6YXJkLlxuICogVGhpcyBtb2RlbCBjb250YWluczpcbiAqIC0gYW4gYXJyYXkgd2l0aCBhbGwgc3RlcHMgdGhlIHdpemFyZCBjb250YWluc1xuICogLSB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgdGhlIHdpemFyZCBjdXJyZW50bHkgcmVzaWRlcyBpbnNpZGVcbiAqIC0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNvbXBsZXRlbmVzcyBvZiB0aGUgd2l6YXJkXG4gKiAtIHNvbWUgYWRkaXRpb25hbCBoZWxwZXIgbWV0aG9kc1xuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RhdGUge1xuICAvKipcbiAgICogQW4gYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgYWxsIHdpemFyZCBzdGVwcyBiZWxvbmdpbmcgdG8gdGhpcyBtb2RlbFxuICAgKi9cbiAgcHVibGljIHdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSB2aXNpYmxlIGFuZCBzZWxlY3RlZCBzdGVwIGluc2lkZSB0aGUgd2l6YXJkU3RlcHMgUXVlcnlMaXN0LlxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXBJbmRleCBpcyAtMVxuICAgKi9cbiAgcHVibGljIGN1cnJlbnRTdGVwSW5kZXggPSAtMTtcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIHRvIG5hdmlnYXRlIGluc2lkZSB0aGUgd2l6YXJkXG4gICAqL1xuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGU6IE5hdmlnYXRpb25Nb2RlO1xuXG4gIC8qKlxuICAgKiBUcnVlLCBpZiB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkbid0IGJlIHVzZWQgZm9yIG5hdmlnYXRpbmdcbiAgICovXG4gIHB1YmxpYyBkaXNhYmxlTmF2aWdhdGlvbkJhcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbml0aWFsIHN0ZXAgaW5kZXgsIGFzIHRha2VuIGZyb20gdGhlIFtbV2l6YXJkQ29tcG9uZW50XV1cbiAgICovXG4gIHByaXZhdGUgX2RlZmF1bHRTdGVwSW5kZXggPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5pdGlhbCBzdGVwIGluZGV4LlxuICAgKiBUaGlzIHZhbHVlIGNhbiBiZSBlaXRoZXI6XG4gICAqIC0gdGhlIGluZGV4IG9mIGEgd2l6YXJkIHN0ZXAgd2l0aCBhIGBzZWxlY3RlZGAgZGlyZWN0aXZlLCBvclxuICAgKiAtIHRoZSBkZWZhdWx0IHN0ZXAgaW5kZXgsIHNldCBpbiB0aGUgW1tXaXphcmRDb21wb25lbnRdXVxuICAgKi9cbiAgcHVibGljIGdldCBkZWZhdWx0U3RlcEluZGV4KCk6IG51bWJlciB7XG4gICAgY29uc3QgZm91bmREZWZhdWx0U3RlcCA9IHRoaXMud2l6YXJkU3RlcHMuZmluZChzdGVwID0+IHN0ZXAuZGVmYXVsdFNlbGVjdGVkKTtcblxuICAgIGlmIChmb3VuZERlZmF1bHRTdGVwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbmRleE9mU3RlcChmb3VuZERlZmF1bHRTdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRTdGVwSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGluaXRpYWwgZGVmYXVsdCBzdGVwLlxuICAgKiBCZXdhcmU6IFRoaXMgaW5pdGlhbCBkZWZhdWx0IGlzIG9ubHkgdXNlZCBpZiBubyB3aXphcmQgc3RlcCBoYXMgYmVlbiBlbmhhbmNlZCB3aXRoIHRoZSBgc2VsZWN0ZWRgIGRpcmVjdGl2ZVxuICAgKlxuICAgKiBAcGFyYW0gZGVmYXVsdFN0ZXBJbmRleCBUaGUgbmV3IGRlZmF1bHQgd2l6YXJkIHN0ZXAgaW5kZXhcbiAgICovXG4gIHB1YmxpYyBzZXQgZGVmYXVsdFN0ZXBJbmRleChkZWZhdWx0U3RlcEluZGV4KSB7XG4gICAgdGhpcy5fZGVmYXVsdFN0ZXBJbmRleCA9IGRlZmF1bHRTdGVwSW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIFdpemFyZFN0ZXAgb2JqZWN0IGJlbG9uZ2luZyB0byB0aGUgY3VycmVudGx5IHZpc2libGUgYW5kIHNlbGVjdGVkIHN0ZXAuXG4gICAqIFRoZSBjdXJyZW50U3RlcCBpcyBhbHdheXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB3aXphcmQgc3RlcC5cbiAgICogVGhlIGN1cnJlbnRTdGVwIGNhbiBiZSBlaXRoZXIgY29tcGxldGVkLCBpZiBpdCB3YXMgdmlzaXRlZCBlYXJsaWVyLFxuICAgKiBvciBub3QgY29tcGxldGVkLCBpZiBpdCBpcyB2aXNpdGVkIGZvciB0aGUgZmlyc3QgdGltZSBvciBpdHMgc3RhdGUgaXMgY3VycmVudGx5IG91dCBvZiBkYXRlLlxuICAgKlxuICAgKiBJZiB0aGlzIHdpemFyZCBjb250YWlucyBubyBzdGVwcywgY3VycmVudFN0ZXAgaXMgbnVsbFxuICAgKi9cbiAgcHVibGljIGdldCBjdXJyZW50U3RlcCgpOiBXaXphcmRTdGVwIHtcbiAgICBpZiAodGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCkpIHtcbiAgICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29tcGxldGVuZXNzIG9mIHRoZSB3aXphcmQuXG4gICAqIElmIHRoZSB3aXphcmQgaGFzIGJlZW4gY29tcGxldGVkLCBpLmUuIGFsbCBzdGVwcyBhcmUgZWl0aGVyIGNvbXBsZXRlZCBvciBvcHRpb25hbCwgdGhpcyB2YWx1ZSBpcyB0cnVlLCBvdGhlcndpc2UgaXQgaXMgZmFsc2VcbiAgICovXG4gIHB1YmxpYyBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmV2ZXJ5KHN0ZXAgPT4gc3RlcC5jb21wbGV0ZWQgfHwgc3RlcC5vcHRpb25hbCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbmF2aWdhdGlvbiBtb2RlIHRvIHRoZSBuYXZpZ2F0aW9uIG1vZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZE5hdmlnYXRpb25Nb2RlIFRoZSBuYW1lIG9mIHRoZSBuZXcgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICB1cGRhdGVOYXZpZ2F0aW9uTW9kZSh1cGRhdGVkTmF2aWdhdGlvbk1vZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUgPSBuYXZpZ2F0aW9uTW9kZUZhY3RvcnkodXBkYXRlZE5hdmlnYXRpb25Nb2RlLCB0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSB3aXphcmQgc3RlcHMgdG8gdGhlIG5ldyBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gdXBkYXRlZFdpemFyZFN0ZXBzIFRoZSB1cGRhdGVkIHdpemFyZCBzdGVwc1xuICAgKi9cbiAgdXBkYXRlV2l6YXJkU3RlcHModXBkYXRlZFdpemFyZFN0ZXBzOiBBcnJheTxXaXphcmRTdGVwPik6IHZvaWQge1xuICAgIC8vIHRoZSB3aXphcmQgaXMgY3VycmVudGx5IG5vdCBpbiB0aGUgaW5pdGlhbGl6YXRpb24gcGhhc2VcbiAgICBpZiAodGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwSW5kZXggPSB1cGRhdGVkV2l6YXJkU3RlcHMuaW5kZXhPZih0aGlzLndpemFyZFN0ZXBzW3RoaXMuY3VycmVudFN0ZXBJbmRleF0pO1xuICAgIH1cblxuICAgIHRoaXMud2l6YXJkU3RlcHMgPSB1cGRhdGVkV2l6YXJkU3RlcHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAgaXMgaW5zaWRlIHRoZSByYW5nZSBvZiBwb3NzaWJsZSB3aXphcmQgc3RlcHMgaW5zaWRlIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIHRvIGJlIGNoZWNrZWQgaW5kZXggb2YgYSBzdGVwIGluc2lkZSB0aGlzIHdpemFyZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiBgc3RlcEluZGV4YCBpcyBjb250YWluZWQgaW5zaWRlIHRoaXMgd2l6YXJkLCBmYWxzZSBvdGhlcndpc2VcbiAgICovXG4gIGhhc1N0ZXAoc3RlcEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIDAgPD0gc3RlcEluZGV4ICYmIHN0ZXBJbmRleCA8IHRoaXMud2l6YXJkU3RlcHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBoYXMgYSBwcmV2aW91cyBzdGVwLCBjb21wYXJlZCB0byB0aGUgY3VycmVudCBzdGVwXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgaGFzIGEgcHJldmlvdXMgc3RlcCBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cbiAgaGFzUHJldmlvdXNTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1N0ZXAodGhpcy5jdXJyZW50U3RlcEluZGV4IC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCwgY29tcGFyZWQgdG8gdGhlIGN1cnJlbnQgc3RlcFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIGhhcyBhIG5leHQgc3RlcCBhZnRlciB0aGUgY3VycmVudCBzdGVwXG4gICAqL1xuICBoYXNOZXh0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNTdGVwKHRoaXMuY3VycmVudFN0ZXBJbmRleCArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGlzIHdpemFyZCBpcyBjdXJyZW50bHkgaW5zaWRlIGl0cyBsYXN0IHN0ZXBcbiAgICpcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgd2l6YXJkIGlzIGN1cnJlbnRseSBpbnNpZGUgaXRzIGxhc3Qgc3RlcFxuICAgKi9cbiAgaXNMYXN0U3RlcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggPiAwICYmIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9PT0gdGhpcy53aXphcmRTdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGAuXG4gICAqIElmIG5vIFtbV2l6YXJkU3RlcF1dIGV4aXN0cyBhdCB0aGUgZ2l2ZW4gaW5kZXggYW4gRXJyb3IgaXMgdGhyb3duXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSW5kZXggVGhlIGdpdmVuIGluZGV4XG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBbW1dpemFyZFN0ZXBdXSBhdCB0aGUgZ2l2ZW4gaW5kZXggYHN0ZXBJbmRleGBcbiAgICogQHRocm93cyBBbiBgRXJyb3JgIGlzIHRocm93biwgaWYgdGhlIGdpdmVuIGluZGV4IGBzdGVwSW5kZXhgIGRvZXNuJ3QgZXhpc3RcbiAgICovXG4gIGdldFN0ZXBBdEluZGV4KHN0ZXBJbmRleDogbnVtYmVyKTogV2l6YXJkU3RlcCB7XG4gICAgaWYgKCF0aGlzLmhhc1N0ZXAoc3RlcEluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIGtub3duIHN0ZXAsIGJ1dCBnb3Qgc3RlcEluZGV4OiAke3N0ZXBJbmRleH0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHNbc3RlcEluZGV4XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAuXG4gICAqIElmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gYHN0ZXBJZGAgZXhpc3RzLCBgLTFgIGlzIHJldHVybmVkXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwSWQgVGhlIGdpdmVuIHN0ZXAgaWRcbiAgICogQHJldHVybnMgVGhlIGZvdW5kIGluZGV4IG9mIGEgc3RlcCB3aXRoIHRoZSBnaXZlbiBzdGVwIGlkLCBvciBgLTFgIGlmIG5vIHN0ZXAgd2l0aCB0aGUgZ2l2ZW4gaWQgaXMgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXBXaXRoSWQoc3RlcElkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAuc3RlcElkID09PSBzdGVwSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gYHN0ZXBgLlxuICAgKiBJZiB0aGUgZ2l2ZW4gW1tXaXphcmRTdGVwXV0gaXMgbm90IGNvbnRhaW5lZCBpbnNpZGUgdGhpcyB3aXphcmQsIGAtMWAgaXMgcmV0dXJuZWRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXAgVGhlIGdpdmVuIFtbV2l6YXJkU3RlcF1dXG4gICAqIEByZXR1cm5zIFRoZSBmb3VuZCBpbmRleCBvZiBgc3RlcGAgb3IgYC0xYCBpZiB0aGUgc3RlcCBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIHdpemFyZFxuICAgKi9cbiAgZ2V0SW5kZXhPZlN0ZXAoc3RlcDogV2l6YXJkU3RlcCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBjb3JyZWN0IFtbTW92aW5nRGlyZWN0aW9uXV0gdmFsdWUgZm9yIGEgZ2l2ZW4gYGRlc3RpbmF0aW9uU3RlcGAgY29tcGFyZWQgdG8gdGhlIGBjdXJyZW50U3RlcEluZGV4YC5cbiAgICpcbiAgICogQHBhcmFtIGRlc3RpbmF0aW9uU3RlcCBUaGUgZ2l2ZW4gZGVzdGluYXRpb24gc3RlcFxuICAgKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBbW01vdmluZ0RpcmVjdGlvbl1dXG4gICAqL1xuICBnZXRNb3ZpbmdEaXJlY3Rpb24oZGVzdGluYXRpb25TdGVwOiBudW1iZXIpOiBNb3ZpbmdEaXJlY3Rpb24ge1xuICAgIGxldCBtb3ZpbmdEaXJlY3Rpb246IE1vdmluZ0RpcmVjdGlvbjtcblxuICAgIGlmIChkZXN0aW5hdGlvblN0ZXAgPiB0aGlzLmN1cnJlbnRTdGVwSW5kZXgpIHtcbiAgICAgIG1vdmluZ0RpcmVjdGlvbiA9IE1vdmluZ0RpcmVjdGlvbi5Gb3J3YXJkcztcbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uU3RlcCA8IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLkJhY2t3YXJkcztcbiAgICB9IGVsc2Uge1xuICAgICAgbW92aW5nRGlyZWN0aW9uID0gTW92aW5nRGlyZWN0aW9uLlN0YXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmluZ0RpcmVjdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmQtbmF2aWdhdGlvbi1iYXJgIGNvbXBvbmVudCBjb250YWlucyB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIGEgW1tXaXphcmRDb21wb25lbnRdXS5cbiAqIFRvIGNvcnJlY3RseSBkaXNwbGF5IHRoZSBuYXZpZ2F0aW9uIGJhciwgaXQncyByZXF1aXJlZCB0byBzZXQgdGhlIHJpZ2h0IGNzcyBjbGFzc2VzIGZvciB0aGUgbmF2aWdhdGlvbiBiYXIsXG4gKiBvdGhlcndpc2UgaXQgd2lsbCBsb29rIGxpa2UgYSBub3JtYWwgYHVsYCBjb21wb25lbnQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtbmF2aWdhdGlvbi1iYXI+PC9hdy13aXphcmQtbmF2aWdhdGlvbi1iYXI+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXctd2l6YXJkLW5hdmlnYXRpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5ob3Jpem9udGFsLmxlc3MnLCAnd2l6YXJkLW5hdmlnYXRpb24tYmFyLmNvbXBvbmVudC52ZXJ0aWNhbC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZE5hdmlnYXRpb25CYXJDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIGRpcmVjdGlvbiBpbiB3aGljaCB0aGUgd2l6YXJkIHN0ZXBzIHNob3VsZCBiZSBzaG93biBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIGVpdGhlciBgbGVmdC10by1yaWdodGAgb3IgYHJpZ2h0LXRvLWxlZnRgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlyZWN0aW9uID0gJ2xlZnQtdG8tcmlnaHQnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIHRoZSB3aXphcmQgY3VycmVudGx5IHJlc2lkZXMgaW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBbW1dpemFyZFN0ZXBdXXMgY29udGFpbmVkIGluIHRoZSB3aXphcmRcbiAgICpcbiAgICogQHJldHVybnMgQW4gYXJyYXkgY29udGFpbmluZyBhbGwgW1tXaXphcmRTdGVwXV1zXG4gICAqL1xuICBnZXQgd2l6YXJkU3RlcHMoKTogQXJyYXk8V2l6YXJkU3RlcD4ge1xuICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3JpZ2h0LXRvLWxlZnQnOlxuICAgICAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgIGNhc2UgJ2xlZnQtdG8tcmlnaHQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUud2l6YXJkU3RlcHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3aXphcmQgc3RlcHMsIHRoYXQgbmVlZCB0byBiZSBkaXNwbGFjZWQgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2Ygd2l6YXJkIHN0ZXBzIHRvIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgZ2V0IG51bWJlck9mV2l6YXJkU3RlcHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS53aXphcmRTdGVwcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgY3VycmVudGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBjdXJyZW50XG4gICAqL1xuICBwdWJsaWMgaXNDdXJyZW50KHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhd2l6YXJkU3RlcC5jb21wbGV0ZWQgJiYgIXRoaXMud2l6YXJkU3RhdGUuY29tcGxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcywgd2hldGhlciBhIFtbV2l6YXJkU3RlcF1dIGNhbiBiZSBtYXJrZWQgYXMgYGRvbmVgIGluIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgZG9uZVxuICAgKi9cbiAgcHVibGljIGlzRG9uZSh3aXphcmRTdGVwOiBXaXphcmRTdGVwKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCkgfHwgdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgZGVmYXVsdGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBkZWZhdWx0XG4gICAqL1xuICBwdWJsaWMgaXNEZWZhdWx0KHdpemFyZFN0ZXA6IFdpemFyZFN0ZXApOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXdpemFyZFN0ZXAub3B0aW9uYWwgJiYgIXdpemFyZFN0ZXAuY29tcGxldGVkICYmICF3aXphcmRTdGVwLnNlbGVjdGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBlZGl0aW5nYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXJcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwIHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RlcCBjYW4gYmUgbWFya2VkIGFzIGVkaXRpbmdcbiAgICovXG4gIHB1YmxpYyBpc0VkaXRpbmcod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLnNlbGVjdGVkICYmIHdpemFyZFN0ZXAuY29tcGxldGVkICYmICF0aGlzLndpemFyZFN0YXRlLmNvbXBsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MsIHdoZXRoZXIgYSBbW1dpemFyZFN0ZXBdXSBjYW4gYmUgbWFya2VkIGFzIGBvcHRpb25hbGAgaW4gdGhlIG5hdmlnYXRpb24gYmFyXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCB0byBiZSBjaGVja2VkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0ZXAgY2FuIGJlIG1hcmtlZCBhcyBvcHRpb25hbFxuICAgKi9cbiAgcHVibGljIGlzT3B0aW9uYWwod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB3aXphcmRTdGVwLm9wdGlvbmFsICYmICF3aXphcmRTdGVwLmNvbXBsZXRlZCAmJiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5jb21wbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzLCB3aGV0aGVyIGEgW1tXaXphcmRTdGVwXV0gY2FuIGJlIG1hcmtlZCBhcyBgbmF2aWdhYmxlYCBpbiB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqIEEgd2l6YXJkIHN0ZXAgY2FuIGJlIG5hdmlnYXRlZCB0byBpZjpcbiAgICogLSB0aGUgc3RlcCBpcyBjdXJyZW50bHkgbm90IHNlbGVjdGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gYmFyIGlzbid0IGRpc2FibGVkXG4gICAqIC0gdGhlIG5hdmlnYXRpb24gbW9kZSBhbGxvd3MgbmF2aWdhdGlvbiB0byB0aGUgc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGVwIGNhbiBiZSBtYXJrZWQgYXMgbmF2aWdhYmxlXG4gICAqL1xuICBwdWJsaWMgaXNOYXZpZ2FibGUod2l6YXJkU3RlcDogV2l6YXJkU3RlcCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhd2l6YXJkU3RlcC5zZWxlY3RlZCAmJiAhdGhpcy53aXphcmRTdGF0ZS5kaXNhYmxlTmF2aWdhdGlvbkJhciAmJlxuICAgICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5pc05hdmlnYWJsZSh0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHdpemFyZFN0ZXApKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXctd2l6YXJkLXN0ZXBgIGNvbXBvbmVudCBpcyB1c2VkIHRvIGRlZmluZSBhIG5vcm1hbCBzdGVwIGluc2lkZSBhIHdpemFyZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogV2l0aCBgc3RlcFRpdGxlYCBhbmQgYG5hdmlnYXRpb25TeW1ib2xgIGlucHV0czpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9hdy13aXphcmQtc3RlcD5cbiAqIGBgYFxuICpcbiAqIFdpdGggYGF3V2l6YXJkU3RlcFRpdGxlYCBhbmQgYGF3V2l6YXJkU3RlcFN5bWJvbGAgZGlyZWN0aXZlczpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXBcIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZC1zdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZC1zdGVwJyxcbiAgdGVtcGxhdGVVcmw6ICd3aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd3aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwQ29tcG9uZW50KX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBkZWZpbmVzIHRoZSByb290IGNvbXBvbmVudCBvZiBhIHdpemFyZC5cbiAqIFRocm91Z2ggdGhlIHNldHRpbmcgb2YgaW5wdXQgcGFyYW1ldGVycyBmb3IgdGhlIGBhdy13aXphcmRgIGNvbXBvbmVudCBpdCdzIHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24gYW5kIHNpemVcbiAqIG9mIGl0cyBuYXZpZ2F0aW9uIGJhci5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkIFtuYXZCYXJMb2NhdGlvbl09XCJsb2NhdGlvbiBvZiBuYXZpZ2F0aW9uIGJhclwiIFtuYXZCYXJMYXlvdXRdPVwibGF5b3V0IG9mIG5hdmlnYXRpb24gYmFyXCI+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogV2l0aG91dCBjb21wbGV0aW9uIHN0ZXA6XG4gKlxuICogYGBgaHRtbFxuICogPGF3LXdpemFyZCBuYXZCYXJMb2NhdGlvbj1cInRvcFwiIG5hdkJhckxheW91dD1cInNtYWxsXCI+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiAgICAgPGF3LXdpemFyZC1zdGVwPi4uLjwvYXctd2l6YXJkLXN0ZXA+XG4gKiA8L2F3LXdpemFyZD5cbiAqIGBgYFxuICpcbiAqIFdpdGggY29tcGxldGlvbiBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQgbmF2QmFyTG9jYXRpb249XCJ0b3BcIiBuYXZCYXJMYXlvdXQ9XCJzbWFsbFwiPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtc3RlcD4uLi48L2F3LXdpemFyZC1zdGVwPlxuICogICAgIDxhdy13aXphcmQtY29tcGxldGlvbi1zdGVwPi4uLjwvYXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcD5cbiAqIDwvYXctd2l6YXJkPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F3LXdpemFyZCcsXG4gIHRlbXBsYXRlVXJsOiAnd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dpemFyZC5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtXaXphcmRTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEEgUXVlcnlMaXN0IGNvbnRhaW5pbmcgYWxsIFtbV2l6YXJkU3RlcF1dcyBpbnNpZGUgdGhpcyB3aXphcmRcbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcClcbiAgcHVibGljIHdpemFyZFN0ZXBzOiBRdWVyeUxpc3Q8V2l6YXJkU3RlcD47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhdGlvbiBvZiB0aGUgbmF2aWdhdGlvbiBiYXIgaW5zaWRlIHRoZSB3aXphcmQuXG4gICAqIFRoaXMgbG9jYXRpb24gY2FuIGJlIGVpdGhlciB0b3AsIGJvdHRvbSwgbGVmdCBvciByaWdodFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxvY2F0aW9uID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIFRoZSBsYXlvdXQgb2YgdGhlIG5hdmlnYXRpb24gYmFyIGluc2lkZSB0aGUgd2l6YXJkLlxuICAgKiBUaGUgbGF5b3V0IGNhbiBiZSBlaXRoZXIgc21hbGwsIGxhcmdlLWZpbGxlZCwgbGFyZ2UtZW1wdHkgb3IgbGFyZ2Utc3ltYm9sc1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckxheW91dCA9ICdzbWFsbCc7XG5cbiAgLyoqXG4gICAqIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIHN0ZXBzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgc2hvdWxkIGJlIHNob3duLlxuICAgKiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBlaXRoZXIgYGxlZnQtdG8tcmlnaHRgIG9yIGByaWdodC10by1sZWZ0YFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hdkJhckRpcmVjdGlvbiA9ICdsZWZ0LXRvLXJpZ2h0JztcblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSB1c2VkIGZvciB0cmFuc2l0aW9uaW5nIGJldHdlZW4gZGlmZmVyZW50IHN0ZXBzLlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlIGNhbiBiZSBlaXRoZXIgYHN0cmljdGAsIGBzZW1pLXN0cmljdGAgb3IgYGZyZWVgXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmF2aWdhdGlvbk1vZGUgPSAnc3RyaWN0JztcblxuICAvKipcbiAgICogVGhlIGluaXRpYWxseSBzZWxlY3RlZCBzdGVwLCByZXByZXNlbnRlZCBieSBpdHMgaW5kZXhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWZhdWx0U3RlcEluZGV4ID0gMDtcblxuICAvKipcbiAgICogVHJ1ZSwgaWYgdGhlIG5hdmlnYXRpb24gYmFyIHNob3VsZG4ndCBiZSB1c2VkIGZvciBuYXZpZ2F0aW5nXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsIFRoZSBtb2RlbCBmb3IgdGhpcyB3aXphcmQgY29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZWw6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBpZmYgdGhlIG5hdmlnYXRpb24gYmFyIGlzIHNob3duIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoaXMgd2l6YXJkXG4gICAqXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIGhvcml6b250YWwgb3JpZW50YXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG9yaXpvbnRhbCcpXG4gIHB1YmxpYyBnZXQgaG9yaXpvbnRhbE9yaWVudGF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAndG9wJyB8fCB0aGlzLm5hdkJhckxvY2F0aW9uID09PSAnYm90dG9tJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyB3aXphcmQgdXNlcyBhIHZlcnRpY2FsIG9yaWVudGF0aW9uLlxuICAgKiBUaGUgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiwgaWZmIHRoZSBuYXZpZ2F0aW9uIGJhciBpcyBzaG93biBhdCB0aGUgbGVmdCBvciByaWdodCBvZiB0aGlzIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgd2l6YXJkIHVzZXMgYSB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52ZXJ0aWNhbCcpXG4gIHB1YmxpYyBnZXQgdmVydGljYWxPcmllbnRhdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZCYXJMb2NhdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMubmF2QmFyTG9jYXRpb24gPT09ICdyaWdodCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZSBmb3IgdGhpcyB3aXphcmRcbiAgICovXG4gIHB1YmxpYyBnZXQgbmF2aWdhdGlvbigpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbW9kZWwgYWZ0ZXIgY2VydGFpbiBpbnB1dCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkXG4gICAqXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBkZXRlY3RlZCBjaGFuZ2VzXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xuICAgICAgY29uc3QgY2hhbmdlID0gY2hhbmdlc1twcm9wTmFtZV07XG5cbiAgICAgIGlmICghY2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHN3aXRjaCAocHJvcE5hbWUpIHtcbiAgICAgICAgICBjYXNlICdkZWZhdWx0U3RlcEluZGV4JzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGVmYXVsdFN0ZXBJbmRleCA9IHBhcnNlSW50KGNoYW5nZS5jdXJyZW50VmFsdWUsIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Rpc2FibGVOYXZpZ2F0aW9uQmFyJzpcbiAgICAgICAgICAgIHRoaXMubW9kZWwuZGlzYWJsZU5hdmlnYXRpb25CYXIgPSBjaGFuZ2UuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbk1vZGUnOlxuICAgICAgICAgICAgdGhpcy5tb2RlbC51cGRhdGVOYXZpZ2F0aW9uTW9kZShjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXphdGlvbiB3b3JrXG4gICAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gYWRkIGEgc3Vic2NyaWJlciB0byB0aGUgd2l6YXJkIHN0ZXBzIFF1ZXJ5TGlzdCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgRE9NXG4gICAgdGhpcy53aXphcmRTdGVwcy5jaGFuZ2VzLnN1YnNjcmliZShjaGFuZ2VkV2l6YXJkU3RlcHMgPT4ge1xuICAgICAgdGhpcy5tb2RlbC51cGRhdGVXaXphcmRTdGVwcyhjaGFuZ2VkV2l6YXJkU3RlcHMudG9BcnJheSgpKTtcbiAgICB9KTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIG1vZGVsXG4gICAgdGhpcy5tb2RlbC5kaXNhYmxlTmF2aWdhdGlvbkJhciA9IHRoaXMuZGlzYWJsZU5hdmlnYXRpb25CYXI7XG4gICAgdGhpcy5tb2RlbC5kZWZhdWx0U3RlcEluZGV4ID0gdGhpcy5kZWZhdWx0U3RlcEluZGV4O1xuICAgIHRoaXMubW9kZWwudXBkYXRlV2l6YXJkU3RlcHModGhpcy53aXphcmRTdGVwcy50b0FycmF5KCkpO1xuICAgIHRoaXMubW9kZWwudXBkYXRlTmF2aWdhdGlvbk1vZGUodGhpcy5uYXZpZ2F0aW9uTW9kZSk7XG5cbiAgICAvLyBmaW5hbGx5IHJlc2V0IHRoZSB3aG9sZSB3aXphcmQgc3RhdGVcbiAgICB0aGlzLm5hdmlnYXRpb24ucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb3ZpbmdEaXJlY3Rpb259IGZyb20gJy4uL3V0aWwvbW92aW5nLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7V2l6YXJkQ29tcGxldGlvblN0ZXB9IGZyb20gJy4uL3V0aWwvd2l6YXJkLWNvbXBsZXRpb24tc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdFbmFibGVCYWNrTGlua3NgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBhbGxvdyB0aGUgdXNlciB0byBsZWF2ZSBhIFtbV2l6YXJkQ29tcGxldGlvblN0ZXBdXSBhZnRlciBpcyBoYXMgYmVlbiBlbnRlcmVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBhd0VuYWJsZUJhY2tMaW5rcyAoc3RlcEV4aXQpPVwiZXhpdCBmdW5jdGlvblwiPlxuICogICAgIC4uLlxuICogPC9hdy13aXphcmQtY29tcGxldGlvbi1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLWNvbXBsZXRpb24tc3RlcCBzdGVwVGl0bGU9XCJGaW5hbCBzdGVwXCIgYXdFbmFibGVCYWNrTGlua3M+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1jb21wbGV0aW9uLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3RW5hYmxlQmFja0xpbmtzXSdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoaXMgRXZlbnRFbWl0dGVyIGlzIGNhbGxlZCB3aGVuIHRoZSBzdGVwIGlzIGV4aXRlZC5cbiAgICogVGhlIGJvdW5kIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBkbyBjbGVhbnVwIHdvcmsuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHN0ZXBFeGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZpbmdEaXJlY3Rpb24+KCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSBjb21wbGV0aW9uU3RlcCBUaGUgd2l6YXJkIGNvbXBsZXRpb24gc3RlcCwgd2hpY2ggc2hvdWxkIGJlIGV4aXRhYmxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgY29tcGxldGlvblN0ZXA6IFdpemFyZENvbXBsZXRpb25TdGVwKSB7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6YXRpb24gd29ya1xuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb21wbGV0aW9uU3RlcC5jYW5FeGl0ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbXBsZXRpb25TdGVwLnN0ZXBFeGl0ID0gdGhpcy5zdGVwRXhpdDtcbiAgfVxufVxuIiwiaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogQW4gdW5pcXVlIGlkZW50aWZpZXIgb2YgYSB3aXphcmQgc3RlcFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBJZCB7XG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICovXG4gIHN0ZXBJZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBgdmFsdWVgIGltcGxlbWVudHMgdGhlIGludGVyZmFjZSBbW1N0ZXBJZF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBJZF1dIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RlcElkKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBTdGVwSWQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBJZCcpICYmICEodmFsdWUgaW5zdGFuY2VvZiBXaXphcmRTdGVwKTtcbn1cbiIsIi8qKlxuICogQW4gaW5kZXggb2YgYSB3aXphcmQgc3RlcC5cbiAqIFRoaXMgaW5kZXggaXMgdGhlIGluZGV4IG9mIHRoZSBzdGVwIGluc2lkZSB0aGUgd2l6YXJkLlxuICogVGhlIGluZGV4IGlzIGFsd2F5cyB6ZXJvIGJhc2VkLCBpLmUuIHRoZSBzdGVwIHdpdGggaW5kZXggMCBpcyB0aGUgZmlyc3Qgc3RlcCBvZiB0aGUgd2l6YXJkXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEluZGV4IHtcbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgZGVzdGluYXRpb24gc3RlcFxuICAgKi9cbiAgc3RlcEluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcEluZGV4XV0uXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpbXBsZW1lbnRzIFtbU3RlcEluZGV4XV0gYW5kIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdGVwSW5kZXgodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBJbmRleCB7XG4gIHJldHVybiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RlcEluZGV4Jyk7XG59XG4iLCIvKipcbiAqIEFuIG9mZnNldCBiZXR3ZWVuIHR3byBzdGVwcy5cbiAqIFRoaXMgb2Zmc2V0IGNhbiBiZSBlaXRoZXIgcG9zaXRpdmUgb3IgbmVnYXRpdmUuXG4gKiBBIHBvc2l0aXZlIG9mZnNldCBtZWFucywgdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWZ0ZXIgdGhlIG90aGVyIHN0ZXAsIHdoaWxlIGEgbmVnYXRpdmUgb2Zmc2V0IG1lYW5zLFxuICogdGhhdCB0aGUgb2Zmc2V0IHN0ZXAgaXMgYWhlYWQgb2YgdGhlIG90aGVyIHN0ZXAuXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcE9mZnNldCB7XG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IHRvIHRoZSBkZXN0aW5hdGlvbiBzdGVwXG4gICAqL1xuICBzdGVwT2Zmc2V0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGB2YWx1ZWAgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIFtbU3RlcE9mZnNldF1dLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZFxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaW1wbGVtZW50cyBbW1N0ZXBPZmZzZXRdXSBhbmQgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0ZXBPZmZzZXQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFN0ZXBPZmZzZXQge1xuICByZXR1cm4gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0ZXBPZmZzZXQnKTtcbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcbmltcG9ydCB7aXNTdGVwSWQsIFN0ZXBJZH0gZnJvbSAnLi4vdXRpbC9zdGVwLWlkLmludGVyZmFjZSc7XG5pbXBvcnQge2lzU3RlcEluZGV4LCBTdGVwSW5kZXh9IGZyb20gJy4uL3V0aWwvc3RlcC1pbmRleC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtpc1N0ZXBPZmZzZXQsIFN0ZXBPZmZzZXR9IGZyb20gJy4uL3V0aWwvc3RlcC1vZmZzZXQuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdHb1RvU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIGEgZ2l2ZW4gc3RlcC5cbiAqIFRoaXMgc3RlcCBjYW4gYmUgZGVmaW5lZCBpbiBvbmUgb2YgbXVsdGlwbGUgZm9ybWF0c1xuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBXaXRoIGFic29sdXRlIHN0ZXAgaW5kZXg6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBbYXdHb1RvU3RlcF09XCJ7IHN0ZXBJbmRleDogYWJzb2x1dGUgc3RlcCBpbmRleCB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCB1bmlxdWUgc3RlcCBpZDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cInsgc3RlcElkOiAnc3RlcCBpZCBvZiBkZXN0aW5hdGlvbiBzdGVwJyB9XCIgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogV2l0aCBhIHdpemFyZCBzdGVwIG9iamVjdDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIFthd0dvVG9TdGVwXT1cIndpemFyZCBzdGVwIG9iamVjdFwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYW4gb2Zmc2V0IHRvIHRoZSBkZWZpbmluZyBzdGVwOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gW2F3R29Ub1N0ZXBdPVwieyBzdGVwT2Zmc2V0OiBvZmZzZXQgfVwiIChmaW5hbGl6ZSk9XCJmaW5hbGl6ZSBtZXRob2RcIj4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdHb1RvU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIEdvVG9TdGVwRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYmVmb3JlIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcmVGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGlzIFtbRXZlbnRFbWl0dGVyXV0gaXMgY2FsbGVkIGRpcmVjdGx5IGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZXhpdGVkIGR1cmluZyBhIHRyYW5zaXRpb24gdGhyb3VnaCBhIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwb3N0RmluYWxpemU6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIFRoZSBkZXN0aW5hdGlvbiBzdGVwLCB0byB3aGljaCB0aGUgd2l6YXJkIHNob3VsZCBuYXZpZ2F0ZSwgYWZ0ZXIgdGhlIGNvbXBvbmVudCwgaGF2aW5nIHRoaXMgZGlyZWN0aXZlIGhhcyBiZWVuIGFjdGl2YXRlZC5cbiAgICogVGhpcyBkZXN0aW5hdGlvbiBzdGVwIGNhbiBiZSBnaXZlbiBlaXRoZXIgYXMgYSBbW1dpemFyZFN0ZXBdXSBjb250YWluaW5nIHRoZSBzdGVwIGRpcmVjdGx5LFxuICAgKiBhIFtbU3RlcE9mZnNldF1dIGJldHdlZW4gdGhlIGN1cnJlbnQgc3RlcCBhbmQgdGhlIGB3aXphcmRTdGVwYCwgaW4gd2hpY2ggdGhpcyBkaXJlY3RpdmUgaGFzIGJlZW4gdXNlZCxcbiAgICogb3IgYSBzdGVwIGluZGV4IGFzIGEgbnVtYmVyIG9yIHN0cmluZ1xuICAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXdHb1RvU3RlcCcpXG4gIHB1YmxpYyB0YXJnZXRTdGVwOiBXaXphcmRTdGVwIHwgU3RlcE9mZnNldCB8IFN0ZXBJbmRleCB8IFN0ZXBJZDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHdpemFyZFN0YXRlIFRoZSB3aXphcmQgc3RhdGVcbiAgICogQHBhcmFtIHdpemFyZFN0ZXAgVGhlIHdpemFyZCBzdGVwLCB3aGljaCBjb250YWlucyB0aGlzIFtbR29Ub1N0ZXBEaXJlY3RpdmVdXVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUsIEBPcHRpb25hbCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICovXG4gIHB1YmxpYyBnZXQgZmluYWxpemUoKTogRXZlbnRFbWl0dGVyPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wcmVGaW5hbGl6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIG5hbWUgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIHN0ZXAgb2YgdGhpcyBkaXJlY3RpdmUgYXMgYW4gYWJzb2x1dGUgc3RlcCBpbmRleCBpbnNpZGUgdGhlIHdpemFyZFxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHN0ZXBcbiAgICogQHRocm93cyBJZiBgdGFyZ2V0U3RlcGAgaXMgb2YgYW4gdW5rbm93biB0eXBlIGFuIGBFcnJvcmAgaXMgdGhyb3duXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlc3RpbmF0aW9uU3RlcCgpOiBudW1iZXIge1xuICAgIGxldCBkZXN0aW5hdGlvblN0ZXA6IG51bWJlcjtcblxuICAgIGlmIChpc1N0ZXBJbmRleCh0aGlzLnRhcmdldFN0ZXApKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLnRhcmdldFN0ZXAuc3RlcEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNTdGVwSWQodGhpcy50YXJnZXRTdGVwKSkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcFdpdGhJZCh0aGlzLnRhcmdldFN0ZXAuc3RlcElkKTtcbiAgICB9IGVsc2UgaWYgKGlzU3RlcE9mZnNldCh0aGlzLnRhcmdldFN0ZXApICYmIHRoaXMud2l6YXJkU3RlcCAhPT0gbnVsbCkge1xuICAgICAgZGVzdGluYXRpb25TdGVwID0gdGhpcy53aXphcmRTdGF0ZS5nZXRJbmRleE9mU3RlcCh0aGlzLndpemFyZFN0ZXApICsgdGhpcy50YXJnZXRTdGVwLnN0ZXBPZmZzZXQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldFN0ZXAgaW5zdGFuY2VvZiBXaXphcmRTdGVwKSB7XG4gICAgICBkZXN0aW5hdGlvblN0ZXAgPSB0aGlzLndpemFyZFN0YXRlLmdldEluZGV4T2ZTdGVwKHRoaXMudGFyZ2V0U3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW5wdXQgJ3RhcmdldFN0ZXAnIGlzIG5laXRoZXIgYSBXaXphcmRTdGVwLCBTdGVwT2Zmc2V0LCBTdGVwSW5kZXggb3IgU3RlcElkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uU3RlcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuZXIgbWV0aG9kIGZvciBgY2xpY2tgIGV2ZW50cyBvbiB0aGUgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqIEFmdGVyIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0aGUgd2l6YXJkIHdpbGwgdHJ5IHRvIHRyYW5zaXRpb24gdG8gdGhlIGBkZXN0aW5hdGlvblN0ZXBgXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvbk1vZGUuZ29Ub1N0ZXAodGhpcy5kZXN0aW5hdGlvblN0ZXAsIHRoaXMucHJlRmluYWxpemUsIHRoaXMucG9zdEZpbmFsaXplKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uTW9kZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW1vZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RhdGV9IGZyb20gJy4uL25hdmlnYXRpb24vd2l6YXJkLXN0YXRlLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYGF3TmV4dFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBuYXZpZ2F0ZSB0byB0aGUgbmV4dCBzdGVwLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3TmV4dFN0ZXAgKGZpbmFsaXplKT1cImZpbmFsaXplIG1ldGhvZFwiPi4uLjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd05leHRTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgTmV4dFN0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgbmFtZSBmb3IgYHByZUZpbmFsaXplYFxuICAgKlxuICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgW1tFdmVudEVtaXR0ZXJdXSB0byBiZSBzZXRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2V0IGZpbmFsaXplKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPikge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy5wcmVGaW5hbGl6ZSA9IGVtaXR0ZXI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbW9kZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgbmF2aWdhdGlvbk1vZGUoKTogTmF2aWdhdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLndpemFyZFN0YXRlLm5hdmlnYXRpb25Nb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmVyIG1ldGhvZCBmb3IgYGNsaWNrYCBldmVudHMgb24gdGhlIGNvbXBvbmVudCB3aXRoIHRoaXMgZGlyZWN0aXZlLlxuICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgdGhlIHdpemFyZCB3aWxsIHRyeSB0byB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0ZXBcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5nb1RvTmV4dFN0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdPcHRpb25hbFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYW4gb3B0aW9uYWwgYHdpemFyZC1zdGVwYC5cbiAqIEFuIG9wdGlvbmFsIHdpemFyZCBzdGVwIGlzIGEgW1tXaXphcmRTdGVwXV0gdGhhdCBkb2Vzbid0IG5lZWQgdG8gYmUgY29tcGxldGVkIHRvIHRyYW5zaXRpb24gdG8gbGF0ZXIgd2l6YXJkIHN0ZXBzLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgYXdPcHRpb25hbFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8YXctd2l6YXJkLXN0ZXAgc3RlcFRpdGxlPVwiU2Vjb25kIHN0ZXBcIiBhd09wdGlvbmFsU3RlcD5cbiAqICAgICAuLi5cbiAqIDwvYXctd2l6YXJkLXN0ZXA+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3T3B0aW9uYWxTdGVwXSdcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uYWxTdGVwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB3aXphcmRTdGVwIFRoZSB3aXphcmQgc3RlcCwgd2hpY2ggY29udGFpbnMgdGhpcyBbW09wdGlvbmFsU3RlcERpcmVjdGl2ZV1dXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkU3RlcC5vcHRpb25hbCA9IHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGlvbk1vZGV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1tb2RlLmludGVyZmFjZSc7XG5pbXBvcnQge1dpemFyZFN0YXRlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3dpemFyZC1zdGF0ZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBhd1ByZXZpb3VzU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxuICogQ29tcGFyZWQgdG8gdGhlIFtbTmV4dFN0ZXBEaXJlY3RpdmVdXSBpdCdzIGltcG9ydGFudCB0byBub3RlLCB0aGF0IHRoaXMgZGlyZWN0aXZlIGRvZXNuJ3QgY29udGFpbiBhIGBmaW5hbGl6ZWAgb3V0cHV0IG1ldGhvZC5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBhd1ByZXZpb3VzU3RlcD4uLi48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdQcmV2aW91c1N0ZXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmV2aW91c1N0ZXBEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhpcyBbW0V2ZW50RW1pdHRlcl1dIGlzIGNhbGxlZCBkaXJlY3RseSBiZWZvcmUgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHByZUZpbmFsaXplOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgW1tFdmVudEVtaXR0ZXJdXSBpcyBjYWxsZWQgZGlyZWN0bHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc3RlcCBpcyBleGl0ZWQgZHVyaW5nIGEgdHJhbnNpdGlvbiB0aHJvdWdoIGEgY29tcG9uZW50IHdpdGggdGhpcyBkaXJlY3RpdmUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHBvc3RGaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHN0YXRlIG9mIHRoZSB3aXphcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2l6YXJkU3RhdGU6IFdpemFyZFN0YXRlKSB7XG4gIH1cblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBmaWVsZCBmb3IgYHByZUZpbmFsaXplYFxuICAgKi9cbiAgcHVibGljIGdldCBmaW5hbGl6ZSgpOiBFdmVudEVtaXR0ZXI8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnByZUZpbmFsaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgZmllbGQgZm9yIGBwcmVGaW5hbGl6ZWBcbiAgICpcbiAgICogQHBhcmFtIGVtaXR0ZXIgVGhlIFtbRXZlbnRFbWl0dGVyXV0gdG8gYmUgc2V0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcHVibGljIHNldCBmaW5hbGl6ZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMucHJlRmluYWxpemUgPSBlbWl0dGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG1vZGVcbiAgICovXG4gIHByaXZhdGUgZ2V0IG5hdmlnYXRpb25Nb2RlKCk6IE5hdmlnYXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy53aXphcmRTdGF0ZS5uYXZpZ2F0aW9uTW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5lciBtZXRob2QgZm9yIGBjbGlja2AgZXZlbnRzIG9uIHRoZSBjb21wb25lbnQgd2l0aCB0aGlzIGRpcmVjdGl2ZS5cbiAgICogQWZ0ZXIgdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRoZSB3aXphcmQgd2lsbCB0cnkgdG8gdHJhbnNpdGlvbiB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25Nb2RlLmdvVG9QcmV2aW91c1N0ZXAodGhpcy5wcmVGaW5hbGl6ZSwgdGhpcy5wb3N0RmluYWxpemUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdmlnYXRpb25Nb2RlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbW9kZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtXaXphcmRTdGF0ZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi93aXphcmQtc3RhdGUubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBgYXdSZXNldFdpemFyZGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSB3aXphcmQgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIG91dHB1dCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSBzb21lIGN1c3RvbSBjbGVhbnVwIHdvcmsgZHVyaW5nIHRoZSByZXNldCBwcm9jZXNzLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGF3UmVzZXRXaXphcmQgKGZpbmFsaXplKT1cImN1c3RvbSByZXNldCB0YXNrXCI+Li4uPC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F3UmVzZXRXaXphcmRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNldFdpemFyZERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBBbiBbW0V2ZW50RW1pdHRlcl1dIGNvbnRhaW5pbmcgc29tZSB0YXNrcyB0byBiZSBkb25lLCBkaXJlY3RseSBiZWZvcmUgdGhlIHdpemFyZCBpcyBiZWluZyByZXNldFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmaW5hbGl6ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RhdGUgVGhlIHdpemFyZCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aXphcmRTdGF0ZTogV2l6YXJkU3RhdGUpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBtb2RlXG4gICAqL1xuICBwcml2YXRlIGdldCBuYXZpZ2F0aW9uTW9kZSgpOiBOYXZpZ2F0aW9uTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMud2l6YXJkU3RhdGUubmF2aWdhdGlvbk1vZGU7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB3aXphcmRcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gZG8gc29tZSBvcHRpb25hbCBjbGVhbnVwIHdvcmtcbiAgICB0aGlzLmZpbmFsaXplLmVtaXQoKTtcbiAgICAvLyByZXNldCB0aGUgd2l6YXJkIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5uYXZpZ2F0aW9uTW9kZS5yZXNldCgpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdTZWxlY3RlZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCBvbiBhIFtbV2l6YXJkU3RlcF1dIHRvIHNldCBpdCBhcyBzZWxlY3RlZCBhZnRlciB0aGUgd2l6YXJkIGluaXRpYWxpc2F0aW9uIG9yIGEgcmVzZXQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIGBgYGh0bWxcbiAqIDxhdy13aXphcmQtc3RlcCBzdGVwVGl0bGU9XCJTdGVwIHRpdGxlXCIgYXdTZWxlY3RlZFN0ZXA+XG4gKiAgICAgLi4uXG4gKiA8L2F3LXdpemFyZC1zdGVwPlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1NlbGVjdGVkU3RlcF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0gd2l6YXJkU3RlcCBUaGUgd2l6YXJkIHN0ZXAsIHdoaWNoIHNob3VsZCBiZSBzZWxlY3RlZCBieSBkZWZhdWx0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgd2l6YXJkU3RlcDogV2l6YXJkU3RlcCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemF0aW9uIHdvcmtcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2l6YXJkU3RlcC5kZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dpemFyZENvbXBsZXRpb25TdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7V2l6YXJkU3RlcH0gZnJvbSAnLi4vdXRpbC93aXphcmQtc3RlcC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoZSBgYXdXaXphcmRDb21wbGV0aW9uU3RlcGAgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIGNvbXBsZXRpb24vc3VjY2VzcyBzdGVwIGF0IHRoZSBlbmQgb2YgeW91ciB3aXphcmRcbiAqIEFmdGVyIGEgW1tXaXphcmRDb21wbGV0aW9uU3RlcF1dIGhhcyBiZWVuIGVudGVyZWQsIGl0IGhhcyB0aGUgY2hhcmFjdGVyaXN0aWMgdGhhdCB0aGUgdXNlciBpcyBibG9ja2VkIGZyb21cbiAqIGxlYXZpbmcgaXQgYWdhaW4gdG8gYSBwcmV2aW91cyBzdGVwLlxuICogSW4gYWRkaXRpb24gZW50ZXJpbmcgYSBbW1dpemFyZENvbXBsZXRpb25TdGVwXV0gYXV0b21hdGljYWxseSBzZXRzIHRoZSBgd2l6YXJkYCwgYW5kIGFsbCBzdGVwcyBpbnNpZGUgdGhlIGB3aXphcmRgLFxuICogYXMgY29tcGxldGVkLlxuICpcbiAqICMjIyBTeW50YXhcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGF3V2l6YXJkQ29tcGxldGlvblN0ZXAgW3N0ZXBUaXRsZV09XCJ0aXRsZSBvZiB0aGUgd2l6YXJkIHN0ZXBcIlxuICogICAgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICduYXZpZ2F0aW9uIHN5bWJvbCcsIGZvbnRGYW1pbHk6ICdmb250LWZhbWlseScgfVwiXG4gKiAgICAoc3RlcEVudGVyKT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGVudGVyZWRcIlxuICogICAgKHN0ZXBFeGl0KT1cImV2ZW50IGVtaXR0ZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHdpemFyZCBzdGVwIGlzIGV4aXRlZFwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZENvbXBsZXRpb25TdGVwIHN0ZXBUaXRsZT1cIlN0ZXAgMVwiIFtuYXZpZ2F0aW9uU3ltYm9sXT1cInsgc3ltYm9sOiAnMScgfVwiPlxuICogICAgLi4uXG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIFdpdGggYSBuYXZpZ2F0aW9uIHN5bWJvbCBmcm9tIHRoZSBgZm9udC1hd2Vzb21lYCBmb250OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRDb21wbGV0aW9uU3RlcCBzdGVwVGl0bGU9XCJTdGVwIDFcIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogQGF1dGhvciBNYXJjIEFybmR0XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thd1dpemFyZENvbXBsZXRpb25TdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZSl9LFxuICAgIHtwcm92aWRlOiBXaXphcmRDb21wbGV0aW9uU3RlcCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUpfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkQ29tcGxldGlvblN0ZXAge1xufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwfSBmcm9tICcuLi91dGlsL3dpemFyZC1zdGVwLmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIGBhd1dpemFyZFN0ZXBgIGRpcmVjdGl2ZSBjYW4gYmUgdXNlZCB0byBkZWZpbmUgYSBub3JtYWwgc3RlcCBpbnNpZGUgYSB3aXphcmQuXG4gKlxuICogIyMjIFN5bnRheFxuICpcbiAqIFdpdGggYHN0ZXBUaXRsZWAgYW5kIGBuYXZpZ2F0aW9uU3ltYm9sYCBpbnB1dHM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW3N0ZXBUaXRsZV09XCJzdGVwIHRpdGxlXCIgW25hdmlnYXRpb25TeW1ib2xdPVwieyBzeW1ib2w6ICdzeW1ib2wnLCBmb250RmFtaWx5OiAnZm9udC1mYW1pbHknIH1cIlxuICogICAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIC4uLlxuICogPC9kaXY+XG4gKiBgYGBcbiAqXG4gKiBXaXRoIGBhd1dpemFyZFN0ZXBUaXRsZWAgYW5kIGBhd1dpemFyZFN0ZXBTeW1ib2xgIGRpcmVjdGl2ZXM6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhd1dpemFyZFN0ZXAgW2NhbkV4aXRdPVwiZGVjaWRpbmcgZnVuY3Rpb25cIiAoc3RlcEVudGVyKT1cImVudGVyIGZ1bmN0aW9uXCIgKHN0ZXBFeGl0KT1cImV4aXQgZnVuY3Rpb25cIj5cbiAqICAgIDxuZy10ZW1wbGF0ZSBhd1dpemFyZFN0ZXBUaXRsZT5cbiAqICAgICAgICBzdGVwIHRpdGxlXG4gKiAgICA8L25nLXRlbXBsYXRlPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFN5bWJvbD5cbiAqICAgICAgICBzeW1ib2xcbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBXaXRoIGBzdGVwVGl0bGVgIGFuZCBgbmF2aWdhdGlvblN5bWJvbGAgaW5wdXRzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwIHN0ZXBUaXRsZT1cIkFkZHJlc3MgaW5mb3JtYXRpb25cIiBbbmF2aWdhdGlvblN5bWJvbF09XCJ7IHN5bWJvbDogJyYjeGYxYmE7JywgZm9udEZhbWlseTogJ0ZvbnRBd2Vzb21lJyB9XCI+XG4gKiAgICAuLi5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogV2l0aCBgYXdXaXphcmRTdGVwVGl0bGVgIGFuZCBgYXdXaXphcmRTdGVwU3ltYm9sYCBkaXJlY3RpdmVzOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgYXdXaXphcmRTdGVwPlxuICogICAgPG5nLXRlbXBsYXRlIGF3V2l6YXJkU3RlcFRpdGxlPlxuICogICAgICAgIEFkZHJlc3MgaW5mb3JtYXRpb25cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiAgICA8bmctdGVtcGxhdGUgYXdXaXphcmRTdGVwU3ltYm9sPlxuICogICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGF4aVwiPjwvaT5cbiAqICAgIDwvbmctdGVtcGxhdGU+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqIEBhdXRob3IgTWFyYyBBcm5kdFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXdXaXphcmRTdGVwXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXaXphcmRTdGVwRGlyZWN0aXZlKX1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwRGlyZWN0aXZlIGV4dGVuZHMgV2l6YXJkU3RlcCB7XG59XG4iLCJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3dpemFyZC1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtXaXphcmRTdGVwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7V2l6YXJkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge0VuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2VuYWJsZS1iYWNrLWxpbmtzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0dvVG9TdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvZ28tdG8tc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOZXh0U3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL25leHQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtPcHRpb25hbFN0ZXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9vcHRpb25hbC1zdGVwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1ByZXZpb3VzU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3ByZXZpb3VzLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7UmVzZXRXaXphcmREaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZXNldC13aXphcmQuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VsZWN0ZWRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0ZWQtc3RlcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRDb21wbGV0aW9uU3RlcERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1jb21wbGV0aW9uLXN0ZXAuZGlyZWN0aXZlJztcbmltcG9ydCB7V2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3dpemFyZC1zdGVwLXN5bWJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy93aXphcmQtc3RlcC10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtXaXphcmRTdGVwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvd2l6YXJkLXN0ZXAuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBUaGUgbW9kdWxlIGRlZmluaW5nIGFsbCB0aGUgY29udGVudCBpbnNpZGUgYGFuZ3VsYXItYXJjaHdpemFyZGBcbiAqXG4gKiBAYXV0aG9yIE1hcmMgQXJuZHRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgV2l6YXJkQ29tcG9uZW50LFxuICAgIFdpemFyZFN0ZXBDb21wb25lbnQsXG4gICAgV2l6YXJkTmF2aWdhdGlvbkJhckNvbXBvbmVudCxcbiAgICBXaXphcmRDb21wbGV0aW9uU3RlcENvbXBvbmVudCxcbiAgICBHb1RvU3RlcERpcmVjdGl2ZSxcbiAgICBOZXh0U3RlcERpcmVjdGl2ZSxcbiAgICBQcmV2aW91c1N0ZXBEaXJlY3RpdmUsXG4gICAgT3B0aW9uYWxTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBTeW1ib2xEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFRpdGxlRGlyZWN0aXZlLFxuICAgIEVuYWJsZUJhY2tMaW5rc0RpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwRGlyZWN0aXZlLFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwRGlyZWN0aXZlLFxuICAgIFNlbGVjdGVkU3RlcERpcmVjdGl2ZSxcbiAgICBSZXNldFdpemFyZERpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudCxcbiAgICBXaXphcmROYXZpZ2F0aW9uQmFyQ29tcG9uZW50LFxuICAgIFdpemFyZENvbXBsZXRpb25TdGVwQ29tcG9uZW50LFxuICAgIEdvVG9TdGVwRGlyZWN0aXZlLFxuICAgIE5leHRTdGVwRGlyZWN0aXZlLFxuICAgIFByZXZpb3VzU3RlcERpcmVjdGl2ZSxcbiAgICBPcHRpb25hbFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkU3RlcFN5bWJvbERpcmVjdGl2ZSxcbiAgICBXaXphcmRTdGVwVGl0bGVEaXJlY3RpdmUsXG4gICAgRW5hYmxlQmFja0xpbmtzRGlyZWN0aXZlLFxuICAgIFdpemFyZFN0ZXBEaXJlY3RpdmUsXG4gICAgV2l6YXJkQ29tcGxldGlvblN0ZXBEaXJlY3RpdmUsXG4gICAgU2VsZWN0ZWRTdGVwRGlyZWN0aXZlLFxuICAgIFJlc2V0V2l6YXJkRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXJjaHdpemFyZE1vZHVsZSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7bmdNb2R1bGU6IEFyY2h3aXphcmRNb2R1bGUsIHByb3ZpZGVyczogW119O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7O0lBU0UsbUNBQW1CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtLQUMvQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0REFBNEQ7aUJBQ3ZFOzs7O2dCQWhCa0IsV0FBVzs7SUF5QjlCLGdDQUFDO0NBWEQ7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7OztJQVNFLGtDQUFtQixXQUE2QjtRQUE3QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7S0FDL0M7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMERBQTBEO2lCQUNyRTs7OztnQkFuQmtCLFdBQVc7O0lBNEI5QiwrQkFBQztDQVhEOzs7Ozs7QUNqQkE7Ozs7OztBQVdBO0lBQUE7Ozs7O1FBa0NTLHFCQUFnQixHQUFxQixFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQzs7OztRQUtsRCxjQUFTLEdBQUcsS0FBSyxDQUFDOzs7O1FBS2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7UUFLakIsb0JBQWUsR0FBRyxLQUFLLENBQUM7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

/***/ })

}]);
//# sourceMappingURL=default~forms-forms-module~users-users-module.js.map