(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/taskboard-ngrx/taskboard-ngrx.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header text-left\">Task Board NgRx</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Taskboard Starts -->\n<section id=\"taskboard\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-list mr-1  float-left\"></i> To Dos</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='todo'>\n        <div *ngFor='let todo of todo'>\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 primary float-left\">{{todo.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{todo.taskMessage}}</p>\n              <img [src]=\"[todo.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\n                class=\"primary\">{{todo.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-trending-up mr-1  float-left\"></i> In Progress</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='inProcess'>\n        <div *ngFor='let inProcess of inProcess'>\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 info float-left\">{{inProcess.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{inProcess.taskMessage}}</p>\n              <img [src]=\"[inProcess.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\n                class=\"info\">{{inProcess.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-thumbs-up mr-1  float-left\"></i>Completed</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='completed'>\n        <div *ngFor='let completed of completed'>\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 success float-left\">{{completed.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{completed.taskMessage}}</p>\n              <img [src]=\"[completed.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\n                class=\"success\">{{completed.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3 col-12\">\n      <h4 class=\"ml-2 mt-2 text-bold-500 text-left\"><i class=\"ft-alert-octagon mr-1  float-left\"></i>On Hold</h4>\n      <div class='dragdrop-container' [dragula]='\"task-group\"' [dragulaModel]='backLog'>\n        <div *ngFor='let backLog of backLog'>\n          <div class=\"card\">\n            <div class=\"card-body pt-3 text-left\">\n              <div class=\"clearfix\">\n                <h5 class=\"text-bold-500 warning float-left\">{{backLog.taskTitle}}</h5>\n                <div class=\"actions float-right\">\n                  <i class=\"ft-edit mr-1 info\"></i>\n                  <i class=\"ft-trash-2 danger\"></i>\n                </div>\n              </div>\n              <p>{{backLog.taskMessage}}</p>\n              <img [src]=\"[backLog.assignedTo]\" class=\"rounded-circle width-50 mr-2\"> <span\n                class=\"warning\">{{backLog.createdOn}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <section class=\"taskboard-app-form bg-blue-grey bg-lighten-5\">\n    <div class=\"card\">\n      <div class=\"card-body pt-3 text-left\">\n        <h5 class=\"text-bold-500\">Create new Task</h5>\n        <form class=\"taskboard-app-input row\">\n          <fieldset class=\"position-relative has-icon-left col-md-4 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoTitle\" placeholder=\"Title\">\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image gallery-icon-title\"></i>\n            </div>\n          </fieldset>\n          <fieldset class=\"position-relative has-icon-left col-md-6 col-12 mb-1\">\n            <div class=\"form-control-position\">\n              <i class=\"icon-emoticon-smile\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"todoMessage\" placeholder=\"Message\">\n            <div class=\"form-control-position control-position-right\">\n              <i class=\"ft-image gallery-icon-msg\"></i>\n            </div>\n          </fieldset>\n\n          <fieldset class=\"position-relative has-icon-left col-md-2 col-12 mb-1 add-task-btn\">\n            <button type=\"button\" class=\"btn btn-raised btn-primary px-4 mb-0\">\n              <i class=\"ft ft-plus-circle d-lg-none d-xl-inline-block\"></i>\n              <span class=\"d-lg-inline-block d-none ml-1\">Create</span>\n            </button>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </section>\n\n</section>\n<!-- Taskboard Ends -->"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0; }\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table; }\n\n/* .dragdrop-container {\n    display: table-cell;\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 25%;\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n/*\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\n   * you're better off giving the draggable elements a unique class and styling that directly!\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out; }\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c; }\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial; }\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move; }\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center; }\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px; }\n\n.taskboard-app-input i.ft.ft-plus-circle {\n  position: relative;\n  top: 2px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title {\n  position: absolute;\n  left: 363px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg {\n  position: absolute;\n  left: 573px;\n  font-size: 1.2rem;\n  top: 7px; }\n\n@media (max-width: 992px) {\n  .taskboard-app-input i.ft.ft-plus-circle {\n    padding: 0.25rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9USUVDT1VSQS9Eb2N1bWVudHMvQUdVTEFSL2thZGktZG9jL2VnZi9lZ2Ytd2ViL3NyYy9hcHAvdGFza2JvYXJkLW5ncngvdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYLHlDQUFBOztBQUNBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7OztLQ0VLOztBREdMO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDOzs7SUNBSTs7QURJSjs7RUFLRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUVaLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQjtFQUVoQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSwwQ0FBMEMsRUFBQTs7QUFHNUM7O0VBRUUsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFIWjtFQU9NLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFFBQVEsRUFBQTs7QUFWZDtFQWNNLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFFBQVEsRUFBQTs7QUFLZDtFQUNFO0lBRUksZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC90YXNrYm9hcmQtbmdyeC90YXNrYm9hcmQtbmdyeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naC1mb3JrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xuLmRyYWdkcm9wLXdyYXBwZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgd2lkdGg6IDI1JTtcbiAgfSAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLypcbiAgICogbm90ZSB0aGF0IHN0eWxpbmcgZ3UtbWlycm9yIGRpcmVjdGx5IGlzIGEgYmFkIHByYWN0aWNlIGJlY2F1c2UgaXQncyB0b28gZ2VuZXJpYy5cbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcbiAgICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuLmd1LW1pcnJvciB7XG4gIC8vIG1hcmdpbjogMTBweDtcbiAgLy8gcGFkZGluZzogMTBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgY3Vyc29yOiAtbW96LWdyYWI7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xufVxuXG4uZ3UtbWlycm9yIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG59XG5cbi5kcmFnZHJvcC1jb250YWluZXIgLmV4LW1vdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lci5leC1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4jbGVmdC1sb3ZlaGFuZGxlcyA+IGRpdixcbiNyaWdodC1sb3ZlaGFuZGxlcyA+IGRpdiB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLmhhbmRsZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5pbWFnZS10aGluZyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xhY2stam9pbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4udGFza2JvYXJkLWFwcC1pbnB1dCB7XG4gIGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgfVxuICAuZm9ybS1jb250cm9sLXBvc2l0aW9uLmNvbnRyb2wtcG9zaXRpb24tcmlnaHQge1xuICAgIC5nYWxsZXJ5LWljb24tdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMzYzcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHRvcDogN3B4O1xuICAgIH1cblxuICAgIC5nYWxsZXJ5LWljb24tbXNnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDU3M3B4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB0b3A6IDdweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50YXNrYm9hcmQtYXBwLWlucHV0IHtcbiAgICBpLmZ0LmZ0LXBsdXMtY2lyY2xlIHtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgfVxuICB9XG59XG4iLCIuZ2gtZm9yayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyOiAwOyB9XG5cbi8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xuLmRyYWdkcm9wLXdyYXBwZXIge1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB3aWR0aDogMjUlO1xuICB9ICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG5cbi8qXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXG4gICAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdixcbi5ndS1taXJyb3Ige1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7IH1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7IH1cblxuLmd1LW1pcnJvciB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nOyB9XG5cbi5kcmFnZHJvcC1jb250YWluZXIgLmV4LW1vdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYzsgfVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cblxuI2xlZnQtbG92ZWhhbmRsZXMgPiBkaXYsXG4jcmlnaHQtbG92ZWhhbmRsZXMgPiBkaXYge1xuICBjdXJzb3I6IGluaXRpYWw7IH1cblxuLmhhbmRsZSB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBjdXJzb3I6IG1vdmU7IH1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnNsYWNrLWpvaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBsaW5lLWhlaWdodDogMTZweDsgfVxuXG4udGFza2JvYXJkLWFwcC1pbnB1dCBpLmZ0LmZ0LXBsdXMtY2lyY2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDsgfVxuXG4udGFza2JvYXJkLWFwcC1pbnB1dCAuZm9ybS1jb250cm9sLXBvc2l0aW9uLmNvbnRyb2wtcG9zaXRpb24tcmlnaHQgLmdhbGxlcnktaWNvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzYzcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0b3A6IDdweDsgfVxuXG4udGFza2JvYXJkLWFwcC1pbnB1dCAuZm9ybS1jb250cm9sLXBvc2l0aW9uLmNvbnRyb2wtcG9zaXRpb24tcmlnaHQgLmdhbGxlcnktaWNvbi1tc2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU3M3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdG9wOiA3cHg7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50YXNrYm9hcmQtYXBwLWlucHV0IGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");





var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'Elizabeth Elliott', 'assets/img/portrait/small/avatar-s-3.png', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardNGRXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: __webpack_require__(/*! raw-loader!./taskboard-ngrx.component.html */ "./node_modules/raw-loader/index.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./taskboard-ngrx.component.scss */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");








var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_7__["taskReducer"])
            ],
            declarations: [
                _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardNGRXComponent"]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module.js.map