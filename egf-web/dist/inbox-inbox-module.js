(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/inbox/inbox.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/inbox/inbox.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-application\">\n  <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\n  <div #emailSidebar class=\"email-app-sidebar float-left d-none d-xl-block\">\n    <div [perfectScrollbar] class=\"email-app-sidebar-content\">\n      <div class=\"email-app-menu\">\n        <div class=\"form-group form-group-compose text-center\">\n          <button type=\"button\" class=\"btn btn-raised btn-danger btn-block my-2\" (click)=\"open(content)\">\n            <i class=\"ft-mail\"></i> Compose</button>\n        </div>\n        <h6 class=\"text-muted text-bold-500 mb-1 text-left\">Messages</h6>\n        <div class=\"list-group list-group-messages\">\n          <a class=\"list-group-item active no-border text-left\" (click)=\"GetEmailsByType($event, 'Inbox')\">\n            <i class=\"ft-inbox mr-1 pr-1 float-left\"></i> Inbox\n            <span class=\"badge badge-dark badge-pill float-right\">8</span>\n          </a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Sent')\">\n            <i class=\"fa fa-paper-plane-o mr-1 pr-1 float-left\"></i> Sent</a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Work')\">\n            <i class=\"ft-file mr-1 pr-1 float-left\"></i> Draft</a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetStarredEmails($event)\">\n            <i class=\"ft-star mr-1 pr-1 float-left\"></i> Starred\n            <span class=\"badge badge-danger badge-pill float-right\">3</span>\n          </a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByType($event, 'Trash')\">\n            <i class=\"ft-trash-2 mr-1 pr-1 float-left\"></i> Trash</a>\n        </div>\n        <h6 class=\"text-muted text-bold-500 mt-1 mb-1 text-left\">Labels</h6>\n        <div class=\"list-group list-group-messages\">\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Work')\">\n            <i class=\"ft-circle mr-1 pr-1 float-left warning\"></i> Work\n            <span class=\"badge badge-warning badge-pill float-right\">5</span>\n          </a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Family')\">\n            <i class=\"ft-circle mr-1 pr-1 float-left danger\"></i> Family</a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Friends')\">\n            <i class=\"ft-circle mr-1 pr-1 float-left primary\"></i> Friends</a>\n          <a class=\"list-group-item list-group-item-action no-border text-left\" (click)=\"GetEmailsByLabel($event, 'Private')\">\n            <i class=\"ft-circle mr-1 pr-1 float-left success\"></i> Private\n            <span class=\"badge badge-success badge-pill float-right\">3</span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"email-app-content row\">\n    <div class=\"email-search-box w-100 bg-white p-2\">\n      <div class=\"media\">\n        <span class=\"email-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-xl-none\" (click)=\"onSidebarToggle()\"></span>\n        <div class=\"media-body\">\n          <input type=\"text\" class=\"form-control round\" placeholder=\"search for emails\" [(ngModel)]=\"searchQuery\">\n        </div>\n      </div>\n    </div>\n    <div class=\"email-app-content-area w-100\">\n      <div class=\"email-app-list-mails p-0\" (click)=\"onListItemClick()\">\n        <div [perfectScrollbar] class=\"email-app-list\">\n          <div id=\"users-list\">\n            <div class=\"list-group\">\n              <div class=\"users-list-padding\">\n                <a [ngClass]=\"!mail.isDefault ? 'list-group-item list-group-item-action no-border' : 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2'\"\n                  *ngFor=\"let mail of mail | search:'mailFrom,subject,body':searchQuery\" (click)=\"DisplayMessage($event, [mail.mailId])\">\n                  <span class=\"media\">\n                    <span class=\"avatar avatar-md mr-2\">\n                      <span *ngIf=\"!mail.hasImage\" class=\"media-object rounded-circle text-circle d-flex mr-2 ml-0 justify-content-center align-items-center + ' ' + {{mail.imageClass}}\">{{\n                        mail.imageText }}</span>\n                      <img *ngIf=\"mail.hasImage\" class=\"media-object rounded-circle\" [src]=\"mail.imagePath\" alt=\"Generic placeholder image\">\n                    </span>\n                    <div class=\"media-body text-left\">\n                      <h6 [ngClass]=\"mail.isRead === false ? 'list-group-item-heading text-bold-400' : 'list-group-item-heading' \">{{\n                        mail.mailFrom }}\n                        <span class=\"float-right\">\n                          <i class=\"fa-paperclip fa\" *ngIf=\"mail.hasAttachment\"></i>\n                          <span [ngClass]=\"mail.isRead === false ? 'font-small-2 primary' : 'font-small-2 float-right'\">{{\n                            mail.time }}</span>\n                        </span>\n                      </h6>\n                      <p [ngClass]=\"mail.isRead === false ? 'list-group-item-text text-truncate text-bold-500' : 'list-group-item-text text-truncate' \">{{\n                        mail.subject }}</p>\n                      <p class=\"list-group-item-text\">{{ mail.body }}\n                        <span class=\"float-right primary\" *ngIf=\"mail.hasLabel\">\n                          <span class=\"badge mr-1 + ' ' + {{mail.labelClass}}\">{{\n                            mail.labelType }}</span>\n                          <i *ngIf=\"isEmailImportant\" class=\"float-right font-medium-1 ft-star warning\"></i>\n                          <i *ngIf=\"!isEmailImportant\" class=\"float-right font-medium-1 ft-star blue-grey\"></i>\n                          <!-- <i [ngClass]=\"mail.isImportant === false ? 'font-medium-1 ft-star blue-grey lighten-3' : 'font-medium-1 ft-star warning'\"></i> -->\n                        </span>\n                        <span class=\"float-right primary\" *ngIf=\"!mail.hasLabel\">\n                          <i class=\"font-medium-1 ft-star blue-grey lighten-3\"></i>\n                        </span>\n                      </p>\n\n                    </div>\n                  </span>\n                </a>\n                <p class=\"primary text-center\" *ngIf=\"mail.length === 0\">There are no messages!</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"email-app-mail-content\" #emailContent>\n        <div class=\"email-app-mail-content-detail\" *ngIf=\"isMessageSelected\">\n          <div class=\"email-app-options card-body\">\n            <div class=\"row d-md-none\">\n              <button class=\"btn btn-raised btn-primary ml-2 back-to-inbox\" (click)=\"OnBackToInbox()\">\n                <i class=\"fa fa-angle-left\"></i> Back to inbox</button>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6 col-12 text-left\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Replay\">\n                    <i class=\"fa fa-reply\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Replay All\">\n                    <i class=\"fa fa-reply-all\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Report SPAM\">\n                    <i class=\"ft-alert-octagon\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Delete\">\n                    <i class=\"ft-trash-2\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-12 text-right\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Previous\">\n                    <i class=\"fa fa-angle-left\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" data-toggle=\"tooltip\" data-placement=\"top\"\n                    data-original-title=\"Next\">\n                    <i class=\"fa fa-angle-right\"></i>\n                  </button>\n                </div>\n                <div class=\"btn-group ml-1\">\n                  <div ngbDropdown [placement]=\"placement\" class=\"d-inline-block\">\n                    <button class=\"btn btn-sm btn-outline-secondary\" id=\"dropdownBasic1\" ngbDropdownToggle>More</button>\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                      <button class=\"dropdown-item\" (click)=\"markAsUnread();\">Mark as unread</button>\n                      <button class=\"dropdown-item\" *ngIf=\"!isEmailImportant\" (click)=\"markAsImportant();\">Mark\n                        as important</button>\n                      <button class=\"dropdown-item\" *ngIf=\"isEmailImportant\" (click)=\"markAsUnimportant();\">Mark\n                        as unimportant</button>\n                      <button class=\"dropdown-item\">Add star</button>\n                      <button class=\"dropdown-item\">Add to task</button>\n                      <div class=\"dropdown-divider\"></div>\n                      <button class=\"dropdown-item\">Filter mail</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"email-app-title card-body\">\n            <h3 class=\"list-group-item-heading text-left\">{{message.subject}}</h3>\n            <div class=\"row\">\n              <div class=\"col-sm-6 col-12 text-left\">\n                <span class=\"primary\">\n                  <span class=\"badge badge-primary \">Previous</span>\n                </span>\n              </div>\n              <div class=\"col-sm-6 col-12 text-right\">\n                <i *ngIf=\"isEmailImportant\" class=\"float-right font-medium-3 ft-star warning\"></i>\n                <i *ngIf=\"!isEmailImportant\" class=\"float-right font-medium-3 ft-star\"></i>\n              </div>\n            </div>\n          </div>\n\n          <div *ngFor=\"let messageDetail of message.messages\">\n            <div id=\"headingCollapse2\" class=\"card-header p-0\">\n              <a (click)=\"messageDetail.collapsed = !messageDetail.collapsed\" [attr.aria-expanded]=\"!messageDetail.collapsed\"\n                [attr.aria-controls]=\"messageDetail.messageId\">\n                <div class=\"email-app-sender list-group-item list-group-item-action no-border\">\n                  <div class=\"media\">\n                    <span class=\"avatar avatar-md mr-2\">\n                      <span *ngIf=\"!messageDetail.hasAvatar\" class=\"media-object rounded-circle text-circle d-flex mr-2 justify-content-center align-items-center + ' ' + {{messageDetail.avatarClass}}\">{{\n                        messageDetail.avatarText }}</span>\n                      <img *ngIf=\"messageDetail.hasAvatar\" class=\"media-object rounded-circle\" [src]=\"messageDetail.avatarPath\"\n                        alt=\"Generic placeholder image\">\n                    </span>\n                    <div class=\"media-body text-left\">\n                      <h6 class=\"list-group-item-heading\">{{messageDetail.mailFrom}}</h6>\n                      <p class=\"list-group-item-text\">to {{messageDetail.mailTo}}\n                        <span class=\"primary\">{{messageDetail.time}}</span>\n                        <span class=\"float-right\">\n                          <i class=\"fa fa-reply mr-1\"></i>\n                          <i class=\"fa fa-arrow-right mr-1\"></i>\n                          <i class=\"fa fa-ellipsis-v\"></i>\n                        </span>\n                      </p>\n\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div [id]=\"messageDetail.messageId\" [ngbCollapse]=\"messageDetail.collapsed\">\n              <div class=\"card-content\">\n                <div class=\"email-app-text card-body\">\n                  <div class=\"email-app-message text-left\">\n                    <div [innerHTML]=\"messageDetail.body\">\n                    </div>\n                    <div *ngIf=\"messageDetail.hasAttachment\">\n                      <p class=\"primary\">Attachments:</p>\n                      <div *ngFor=\"let attachment of messageDetail.attachments\" class=\"float-left mr-2\">\n                        <img class=\"media-object width-100\" [src]=\"attachment.url\" alt=\"Generic placeholder image\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"email-app-text-action card-body\">\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"email-app-mail-content-detail\" *ngIf=\"!isMessageSelected\">\n          <p class=\"primary text-center\">Select a message to read</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header px-4\">\n      <h4 class=\"modal-title\">Compose Email</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body px-4\">\n      <form role=\"form\" class=\"form form-horizontal\">\n        <div class=\"form-group row\">\n          <label class=\"col-md-2 label-control\" for=\"emailTo\">To </label>\n          <div class=\"col-md-10\">\n            <input type=\"text\" id=\"emailTo\" class=\"form-control\" name=\"emailTo\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-2 label-control\" for=\"emailCC\">Cc / Bcc </label>\n          <div class=\"col-md-10\">\n            <input type=\"text\" id=\"emailCC\" class=\"form-control\" name=\"emailCC\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-2 label-control\" for=\"emailSubject\">Subject </label>\n          <div class=\"col-md-10\">\n            <input type=\"text\" id=\"emailSubject\" class=\"form-control\" name=\"emailSubject\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-md-2 label-control\">Message</label>\n          <div class=\"col-md-10\">\n            <quill-editor [style]=\"{height: '200px'}\"></quill-editor>\n          </div>\n        </div>\n\n      </form>\n    </div>\n    <div class=\"modal-footer px-4\">\n      <i class=\"fa-paperclip fa font-large-1 mr-3\"></i>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-raised btn-danger\" (click)=\"c('Close click')\">Save as Draft</button>\n      <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"c('Close click')\">Send</button>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/inbox/inbox-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");




var routes = [
    {
        path: '',
        component: _inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"],
        data: {
            title: 'Inbox'
        },
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InboxRoutingModule);
    return InboxRoutingModule;
}());

var routedComponents = [_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"]];


/***/ }),

/***/ "./src/app/inbox/inbox.component.scss":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.service */ "./src/app/inbox/inbox.service.ts");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");






// import { ConfigService } from '../services/config.service';
var InboxComponent = /** @class */ (function () {
    function InboxComponent(elRef, renderer, modalService, inboxService, layoutService, configService) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.modalService = modalService;
        this.inboxService = inboxService;
        this.layoutService = layoutService;
        this.configService = configService;
        this.placement = "bottom-right";
        this.config = {};
        this.searchQuery = '';
        this.selectedMailId = 4;
        this.isEmailImportant = false;
        this.isCollapsed = true;
        this.isCollapsed1 = false;
        this.isMessageSelected = true;
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === 'Inbox'; });
        this.message = this.inboxService.message.filter(function (message) { return message.mailId === _this.selectedMailId; })[0];
        this.markAsRead();
        this.checkEmailImportantStatus();
        this.layoutSub = layoutService.changeEmitted$.subscribe(function (direction) {
            var dir = direction.direction;
            if (dir === "rtl") {
                _this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                _this.placement = "bottom-right";
            }
        });
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.config = this.configService.templateConf;
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        if (this.innerWidth < 768) {
            this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
        }
        if (this.config.layout.dir) {
            var dir = this.config.layout.dir;
            if (dir === "rtl") {
                this.placement = "bottom-left";
            }
            else if (dir === "ltr") {
                this.placement = "bottom-right";
            }
        }
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    InboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = true;
    };
    InboxComponent.prototype.markAsUnread = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = false;
    };
    InboxComponent.prototype.markAsImportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = true;
        this.isEmailImportant = true;
    };
    InboxComponent.prototype.markAsUnimportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = false;
        this.isEmailImportant = false;
    };
    InboxComponent.prototype.checkEmailImportantStatus = function () {
        var _this = this;
        var selectedEmail = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        this.isEmailImportant = selectedEmail.isImportant;
    };
    //inbox user list click event function
    InboxComponent.prototype.DisplayMessage = function (event, mailId) {
        this.selectedMailId = mailId;
        this.message = this.inboxService.message.filter(function (message) { return message.mailId.toString() === mailId.toString(); })[0];
        this.isMessageSelected = true;
        this.markAsRead();
        this.checkEmailImportantStatus();
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.users-list-padding > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    };
    //compose popup start
    InboxComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    InboxComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //compose popup ends
    //inbox labels click event function
    InboxComponent.prototype.GetEmailsByLabel = function (event, labelType) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.labelType === labelType; });
        this.SetItemActive(event);
    };
    //inbox type click event function
    InboxComponent.prototype.GetEmailsByType = function (event, type) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === type; });
        this.SetItemActive(event);
    };
    //inbox Starred click event function
    InboxComponent.prototype.GetStarredEmails = function (event) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.isImportant === true; });
        this.SetItemActive(event);
    };
    InboxComponent.prototype.SetItemActive = function (event) {
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.querySelectorAll('.list-group-messages > a.list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item list-group-item-action no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item active no-border');
    };
    InboxComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
        }
        if (this.innerWidth > 768) {
            this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
        }
    };
    InboxComponent.prototype.onListItemClick = function () {
        this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
    };
    InboxComponent.prototype.OnBackToInbox = function () {
        this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
    };
    InboxComponent.prototype.onSidebarToggle = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    };
    InboxComponent.prototype.onContentOverlay = function () {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
    };
    InboxComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
        { type: _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"] },
        { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"] },
        { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailSidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentOverlay', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "overlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailContent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InboxComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InboxComponent.prototype, "onResize", null);
    InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/inbox/inbox.component.html"),
            providers: [_inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"]],
            styles: [__webpack_require__(/*! ./inbox.component.scss */ "./src/app/inbox/inbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _inbox_service__WEBPACK_IMPORTED_MODULE_3__["InboxService"],
            app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"], app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.model.ts":
/*!**************************************!*\
  !*** ./src/app/inbox/inbox.model.ts ***!
  \**************************************/
/*! exports provided: Mail, Message, MessageDetail, Attachments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDetail", function() { return MessageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachments", function() { return Attachments; });
var Mail = /** @class */ (function () {
    function Mail(mailId, mailFrom, subject, body, time, isRead, isImportant, hasAttachment, hasImage, imagePath, imageText, imageClass, mailType, hasLabel, labelType, labelClass, isDefault) {
        this.mailId = mailId;
        this.mailFrom = mailFrom;
        this.subject = subject;
        this.body = body;
        this.time = time;
        this.isRead = isRead;
        this.isImportant = isImportant;
        this.hasAttachment = hasAttachment;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageText = imageText;
        this.imageClass = imageClass;
        this.mailType = mailType;
        this.hasLabel = hasLabel;
        this.labelType = labelType;
        this.labelClass = labelClass;
        this.isDefault = isDefault;
    }
    Mail.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Boolean }
    ]; };
    return Mail;
}());

var Message = /** @class */ (function () {
    function Message(mailId, subject, messagesCount, messages) {
        this.mailId = mailId;
        this.subject = subject;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    Message.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Number },
        { type: Array }
    ]; };
    return Message;
}());

var MessageDetail = /** @class */ (function () {
    function MessageDetail(messageId, mailFrom, mailTo, body, time, collapsed, hasAttachment, hasAvatar, avatarPath, avatarText, avatarClass, attachments) {
        this.messageId = messageId;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.body = body;
        this.time = time;
        this.collapsed = collapsed;
        this.hasAttachment = hasAttachment;
        this.hasAvatar = hasAvatar;
        this.avatarPath = avatarPath;
        this.avatarText = avatarText;
        this.avatarClass = avatarClass;
        this.attachments = attachments;
    }
    MessageDetail.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: Boolean },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return MessageDetail;
}());

var Attachments = /** @class */ (function () {
    function Attachments(attachmentId, url) {
        this.attachmentId = attachmentId;
        this.url = url;
    }
    Attachments.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return Attachments;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.module.ts":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/inbox/inbox-routing.module.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");










var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["InboxRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
            ],
            declarations: [
                _inbox_component__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"],
                app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]
            ]
        })
    ], InboxModule);
    return InboxModule;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.service.ts":
/*!****************************************!*\
  !*** ./src/app/inbox/inbox.service.ts ***!
  \****************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inbox_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.model */ "./src/app/inbox/inbox.model.ts");



var InboxService = /** @class */ (function () {
    function InboxService() {
        this.inbox = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](1, 'Tonny Deep', 'PixInvent, I found you...', 'I would be good.', '4:14 AM', false, true, false, false, '', 'T', 'bg-info', 'Inbox', true, 'Family', 'badge badge-danger mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](2, 'Louis Welch', 'Thanks, Let us do it.', 'Can we connect today...', '2:15 AM', false, false, true, false, '', 'L', 'bg-danger', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](3, 'Envato Market', 'You have new comment...', 'Hi Pixinvent...', '11:18 PM', false, false, false, false, '', 'E', 'bg-warning', 'Inbox', true, 'Work', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](4, 'Wayne Burton', 'Project ABC Status...', 'Andy, Let us...', 'Today', true, true, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', 'Inbox', true, 'Private', 'badge badge-success mr-1', true),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](5, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', 'Inbox', true, 'Friends', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](6, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, false, true, false, '', 'H', 'bg-success', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](7, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Inbox', true, 'Work', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](8, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Sent', true, 'Friends', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](9, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Sent', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](10, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', 'Sent', true, 'Work', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](11, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, true, false, false, '', 'H', 'bg-success', 'Sent', true, 'Private', 'badge badge-success mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](12, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Trash', true, 'Work', 'badge badge-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](13, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Trash', true, 'Friends', 'badge badge-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Mail"](14, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Trash', false, '', '', false),
        ];
        this.message = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](1, 'PixInvent, I found you...', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Tonny Deep', "<p>Hi Tonny,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Tonny Deep', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Today', false, false, false, '', 'T', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](2, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Louis Welch', "<p>Hi Louis,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Louis Welch', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '2:15 AM', false, true, false, '', 'L', 'bg-danger', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](3, 'You have a new comment...', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'Envato Market', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11:18 PM', false, false, false, '', 'E', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](4, 'Project ABC Status Report', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Wayne Burton', "<p>Hi Wayne,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Wayne Burton', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](5, 'Your New UI', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Yesterday', false, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](6, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Heather Howell', "<p>Hi Heather,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '13 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Heather Howell', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '15 July', false, true, false, '', 'H', 'bg-success', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/16.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/17.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](7, 'I paid it, Thanks.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '12 July', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](8, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 August', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](9, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '31 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '8 July', false, false, false, '', 'E', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](10, 'Your New UI.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Yesterday', false, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](11, 'Thanks, Let us do it.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'Heather Howell', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '15 July', false, false, false, '', 'H', 'bg-success', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](12, 'I paid it, Thanks.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Kelly Reyes', "<p>Hi Kelly,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](13, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '21 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Message"](14, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p> \n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["MessageDetail"]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '8 July', false, true, false, '', 'E', 'bg-info', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_2__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ])
        ];
    }
    InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InboxService);
    return InboxService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module.js.map