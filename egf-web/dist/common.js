(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/administration/profils/service/profil.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/administration/profils/service/profil.service.ts ***!
  \******************************************************************/
/*! exports provided: ProfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilService", function() { return ProfilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/abstract/abstract.service */ "./src/app/shared/abstract/abstract.service.ts");
/* harmony import */ var _model_profil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/profil */ "./src/app/administration/profils/model/profil.ts");




var ProfilService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfilService, _super);
    function ProfilService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfilService.prototype.getPath = function () {
        return _model_profil__WEBPACK_IMPORTED_MODULE_3__["Profil"].colName;
    };
    ProfilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProfilService);
    return ProfilService;
}(_shared_abstract_abstract_service__WEBPACK_IMPORTED_MODULE_2__["AbstractService"]));



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");

var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    AddTodo.ctorParameters = function () { return [
        { type: _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Task"] }
    ]; };
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    todo: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Responsive', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('QA Testing', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Budget', 'Etiam porta sem malesuada magna mollis euismod.', 'May 17', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')
    ],
    inProcess: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('checklist', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Navigation', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Bootstrap 4', 'Etiam porta sem malesuada magna mollis euismod.', 'Apr 11', 'Bruce Reid', 'assets/img/portrait/small/avatar-s-1.png', 'In Process')
    ],
    backLog: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Assessment', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Schedule', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Unit tests', 'Etiam porta sem malesuada magna mollis euismod.', 'Jun 19', 'Kelly Reyes', 'assets/img/portrait/small/avatar-s-5.png', 'Pending')
    ],
    completed: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Angular 5', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Fields', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('Task board', 'Etiam porta sem malesuada magna mollis euismod.', 'Aug 22', 'Sara Ali', 'assets/img/portrait/small/avatar-s-7.png', 'Completed')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]):
            var todo = state.todo.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todo: state.todo.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    Task.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Task;
}());



/***/ }),

/***/ "./src/environments/egf.option.ts":
/*!****************************************!*\
  !*** ./src/environments/egf.option.ts ***!
  \****************************************/
/*! exports provided: egfOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "egfOption", function() { return egfOption; });
var egfOption = {
    // HEADERS
    messageKey: 'm',
    emptyMessage: 'Aucune données',
    userKey: 'u',
    currentUserKey: 'scu',
    tokenKey: 'auth_token',
    userRolesKey: 'r',
    urlKey: 'to',
    // OTHER OPTIONS
    SPACE: ' ',
    EMPTY: '',
    uploadFileNameSeparator: ';',
    printTitle: 'Imprimer',
    addTitle: 'Ajouter',
    editTitle: 'Modifier',
    deleteTitle: 'Supprimer',
    saveTitle: 'Enregistrer',
    cancelTitle: 'Annuler',
    validTitle: 'Valider',
    detailsTitle: 'Plus d\'informations',
    uploadTitle: 'Charger',
    returnTitle: 'Retour',
    confirmationTitle: 'Oui',
    nonConfirmationTitle: 'Non',
    closeConfirmationTitle: 'Fermer',
    actionTitle: 'Actions',
    refreshTitle: 'Rafraichir',
    // MESSAGE OPTIONS
    authenticationFailedMessage: 'Nom d\'utilisateur ou mot de passe incorrect !',
    authenticationInactifMessage: 'Votre compte a été  desactivé, contacter l\'admin système !',
    notAuthorizedMessage: 'Vous n\'êtes pas authorisés à accèder à cette page',
    expiredConnexionMessage: 'La connexion a expirée, réconnectez vous pour continuer',
    requiredMessage: 'Vous devez renseigner une valeur',
    invalidEmailMessage: 'Adresse email invalide',
    emptyTableMessage: 'Aucune donnée dans la table',
    emptyDropdownMessage: 'Aucune donnée correspondante',
    deleteConfirmationMessage: 'Etes-vous sûr de vouloir supprimer cet élément ?',
    deleteConfirmationTitle: 'Suppression de l\'élément',
    uploadFileTitle: 'Chargement des pièces jointes',
    selectFileTitle: 'Selectionner le fichier',
    imageTitle: 'Image associee',
    noImageTitle: 'Aucune image associee',
    noFileTitle: 'Aucun fichier associe !',
    suspendTitle: 'Suspendre',
    reactivateTitle: 'Réactiver',
    transferTitle: 'Transférer',
    alternativeMessage: 'Problème de connexion, verifiez que le serveur est en marche',
    dvEmptyMessage: 'Aucun element trouvé',
    errorMessage: 'L\'opération n\'a pas été effectuée avec succès!',
    successMessage: 'Opération éffectuée avec succès!',
    listColor: [
        { key: '0', color: '#0B60A9' },
        { key: '1', color: '#ef9b0f' },
        { key: '2', color: '#dc3545' },
        { key: '3', color: '#34A835' },
        { key: '4', color: '#798892' },
        { key: '5', color: '#7f3ddb' },
        { key: '6', color: '#17a2b8' },
    ],
};


/***/ })

}]);
//# sourceMappingURL=common.js.map