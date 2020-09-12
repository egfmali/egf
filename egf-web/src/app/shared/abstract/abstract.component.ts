import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AbstractEntity} from './abstract.entity';
import {User} from '../../administration/users/model/user';
import {Converter, Helpers} from "../utility";
import {NotificationService} from "../../components/extra/notification/notification.service";
import {AbstractService} from "./abstract.service";
import {egfOption} from "../../../environments/egf.option";
import {MatIconRegistry} from "@angular/material/icon";
import {AuthService} from "../services/auth.service";

export abstract class AbstractComponent<T extends AbstractEntity<T>, R extends AbstractService<T>> {

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  DECLARATION
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    /**
     * Title, model list and the model
     */
    title: string;
    models: T[];
    model: T;
    form: FormGroup;
    projectOption: any;
    helpers: any;
    apiUrl: string;

    /**
     * Print Options
     */
    printOptions: any;

    /**
     * Boolean options
     */
    addOrEditVisibility = false;
    detailsVisibility = false;
    confirmDialogVisibility = false;
    uploadDialogVisibility = false;
    loading = false;
    purchase = false;
    toList = true;

    /**
     * Datatable options
     */
    totalElements = 0;
    row = 10;
    columns: any[];

    /**
     * Common Values
     */
    currentUser: User;
    roles: string;
    currentDate = new Date();

    /**
     * Upload Options
     */
    file: FormData;
    files: FormData[];
    fileNames = '';

    /**
     * Details buttons
     */

    actionButtonVisibility = false;
    detailsButtonVisibility = false;
    uploadButtonVisibility = false;

    /**
     * Params management
     */
    hasParams = false;
    paramError = false;

    /**
     * string default sizes
     */
    maxLength = 100;
    minLength = 2;
    descriptionLength;
    lineLength = 4;

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  CONSTRUCTOR
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    protected constructor(

        protected abstractService: R,
        protected notification: NotificationService,
        protected formBuilder: FormBuilder,
        protected auth: AuthService,

        ) {
        this.initializeModel();
        this.helpers = Helpers;

        this.showActionButtons();

    }

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  ABSTRACT METHODS
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    /**
     * SHOW
     */

    get addTitle() {
        return this.projectOption.addTitle + ' ' + this.getTitle();
    }

    get editTitle() {
        return this.projectOption.editTitle + ' ' + this.getTitle();
    }

    get deleteTitle() {
        return this.projectOption.deleteTitle + ' ' + this.getTitle();
    }

    get requiredStrValidations() {
        return [Validators.required, Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)];
    }

    get strValidations() {
        return [Validators.minLength(this.minLength), Validators.maxLength(this.maxLength)];
    }

    public abstract hasDetails(): boolean;

    public abstract hasUpload(): boolean;

    showActionButtons() {
        this.detailsButtonVisibility = this.hasDetails();
        this.uploadButtonVisibility = this.hasUpload();
        this.actionButtonVisibility = this.hasUpload() || this.hasDetails();
    }

    showLoading() {
        this.loading = true;
    }

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  SHOW AND CLOSE
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    showAdd() {
        this.showAddBeforeVisibility();
        this.addOrEditVisibility = true;
    }

    showEdit(model) {
        this.showEditBeforeVisibility(model);
        this.addOrEditVisibility = true;
    }

    showAddBeforeVisibility() {
        this.showLoading();
        this.initializeModel();
        this.buildForm();
        this.title = this.projectOption.addTitle + this.projectOption.SPACE + this.getDescription();
        this.closeDetails();
        this.closeLoading();
    }

    showEditBeforeVisibility(model) {
        this.showLoading();
        this.model = model;
        this.buildForm();
        this.title = this.projectOption.editTitle + this.projectOption.SPACE + this.getDescription();
        this.closeDetails();
        this.closeLoading();
    }

    showConfirmDialog(model) {
        this.showLoading();
        this.model = model;
        this.closeLoading();
        this.confirmDialogVisibility = true;
    }

    showDetails(model) {
        this.title = this.projectOption.detailsTitle + this.projectOption.SPACE + '(' + this.getTitle() + ')';
        this.model = model;
        this.detailsVisibility = true;
    }

    showUploadDialog(model) {
        this.showLoading();
        this.model = model;
        this.fileNames = this.projectOption.EMPTY;
        this.closeLoading();
        this.uploadDialogVisibility = true;
    }

    showPurchaseItem(item?: T) {
        this.showLoading();
        if (item) {
            this.model = item;
        }
        this.closeLoading();
        this.purchase = true;
    }

    /**
     * CLOSE
     */

    closeLoading() {
        if (this.loading) {
            this.loading = false;
        }
    }

    closeAddOrEdit() {
        this.title = this.getTitle();
        this.closeDetails();
        this.addOrEditVisibility = false;
        this.initModels();
    }

    closeConfirmDialog() {
        this.confirmDialogVisibility = false;
    }

    closeDetails() {
        this.detailsVisibility = false;
    }

    closeUploadDialog() {
        this.uploadDialogVisibility = false;
    }

    closePurchaseDialog() {
        this.purchase = false;
    }

    /**
     * INIT
     */
    initModels() {
        this.showLoading();
        this.totalElements = 0;
        if (this.hasParams && !this.paramError) {
            this.paginateParams(0);
        } else {
            this.paginate(0);
        }
        this.title = this.getTitle();
        this.closeDetails();
        this.closeLoading();
    }

    formatDate(date?: Date, separator?, locale?) {
        return Helpers.formatDate(date, separator, locale);
    }

    formatDatetime(date?: Date) {
        return Helpers.format(date);
    }

    money(number: number) {
        return this.helpers.money(+number);
    }

    numberToLetter(num: number, add = false) {
        const letter = Converter.numberToLetter(Math.abs(Math.trunc(num)));
        return letter[0].toUpperCase() + letter.substring(1) + (add ? ' de' : '') + ' XOF';
    }

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  INITIALISATION AND UTILS
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    showError(error) {
        console.log('Error: ' + error);
        if (error.error instanceof Error) {
            console.log('Client-side error occured.');
        } else {
            console.log('Server-side error occured.');
        }
        this.notification.error(this.getErrorMessage(error), 'Error message');
    }

    /**
     * UTILITY
     */

    /*isEmpty(obj) {
      return _.isEmpty(obj);
    }*/

    getErrorMessage(error) {
        if (error.status >= 400 && error.status < 500) {
            return error.error;
        } else {
            return error.error && error.error.status >= 500 ? error.error.message : this.projectOption.alternativeMessage;
        }
    }

    /**
     * SERVICE RETURN LIST MANAGEMENT
     */
    getList(data): T[] {
        return data === null ? [] : data.hasOwnProperty('content') ? data.content : data;
    }

    getTotalElements(data): number {
        return this.helpers.getTotalElements(data, this.models);
    }

    getOthers(data) {
        return this.helpers.getOthers(data);
    }

    checkReturn(ret) {
        return this.helpers.checkReturn(ret);
    }

    paginate(page) {
        this.findAllByPage(page);
    }

    /**
     * FIND ONE MODEL BY ID
     */
    find(id) {
        this.showLoading();
        this.abstractService.find(id).subscribe(data => {
            try {
                this.model = this.getOthers(data);
                this.closeLoading();
            } catch (e) {
                console.log(e);
                this.notification.error(egfOption.errorMessage);
                this.closeLoading();
            }
        }, error => {
            this.showError(error);
            this.closeLoading();
        });
    }

    /**
     * FIND ALL MODELS
     */
    findAll() {
        this.abstractService.findAll().subscribe(
            data => {
                try {
                    this.models = this.getList(data);
                    this.closeLoading();
                } catch (e) {
                    console.log(e);
                    this.notification.error(egfOption.errorMessage);
                    this.closeLoading();
                }
            },
            (error: HttpErrorResponse) => {
                this.showError(error);
                this.models = [];
                this.closeLoading();
            },
        );
    }

    /**
     * FIND ALL MODELS BY PAGE
     */
    findAllByPage(page: number) {
        this.showLoading();
        this.models = [];
        this.abstractService.findAllPage(page, this.row).subscribe(data => {
            try {
                this.models = this.getList(data);
                this.totalElements = this.getTotalElements(data);
                this.closeLoading();
            } catch (e) {
                console.log(e);
                this.notification.error(egfOption.errorMessage);
                this.closeLoading();
            }
        }, error => {
            this.showError(error);
            this.closeLoading();
        });
    }

    /**
     * CREATE MODEL
     */
    save(model?: T) {
        this.showLoading();
        if (model) {
            this.model = model;
        }
        this.abstractService.create(this.model)
            .subscribe(data => {
                    this.model = this.getOthers(data);
                    if (this.models == null || this.models.length <= 0) {
                        this.initializeModel();
                    }
                    if (!this.models) {
                        this.models = [];
                    }
                    if (this.models.indexOf(this.model) < 0) {
                        this.models.push(this.model);
                    }
                    if (this.toList) {
                        this.closeAddOrEdit();
                    }
                    this.closeLoading();
                    this.notification.success(egfOption.successMessage);

                },
                error => {
                    console.log('error',error);
                    this.notification.error(error);
                    this.closeLoading();

                    this.showError(error);
                    this.closeLoading();
                    this.initModels()
                }
            )

    }

    /**
     * EDIT MODEL
     */
    update(model?: T) {
        this.showLoading();
        this.abstractService.update(this.id(), this.model)
            .subscribe(data => {
                    console.log('update',data);
                    this.model = this.getOthers(data);

                    if (this.toList) {
                        this.closeAddOrEdit();
                    }
                    this.closeLoading();
                    this.notification.success(egfOption.successMessage);
                    this.initModels();
                },
                error => {
                    console.log('error',error);
                    this.notification.error(egfOption.errorMessage);
                    this.closeLoading();
                    this.showError(error);
                    this.closeLoading();
                    this.initModels();
                }
            );
    }


    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  CALLING SERVICES
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    /**
     * DELETE MODEL
     */
    delete() {
        this.showLoading();
        this.abstractService.delete(this.id())
            .then(data => {
                    try {
                        if (this.checkReturn(data)) {
                            this.closeLoading();
                            this.closeConfirmDialog();
                            this.notification.success(egfOption.successMessage);
                        } else {
                            this.notification.error(egfOption.errorMessage);
                            this.closeLoading();
                        }
                    } catch (e) {
                        console.log('error',e);
                        console.log(e);
                        this.notification.error(egfOption.errorMessage);
                        this.closeLoading();
                    }
                }
            )
            .catch(error => {
                console.log('error',error);
                this.closeConfirmDialog();
                console.log(error);
                this.notification.error(egfOption.errorMessage);
                this.closeConfirmDialog();
                this.closeLoading();
            })
            .then(() => this.initModels())
    }

    loadFiles(event) {
        this.showLoading();
        this.fileNames = this.projectOption.EMPTY;
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.file = new FormData();
            for (let i = 0; i < fileList.length; i++) {
                const fichier: File = fileList[i];
                this.file.append('uploadfile', fichier, fichier.name);
                this.fileNames += fichier.name + this.projectOption.uploadFileNameSeparator;
            }
        }
        this.closeLoading();
    }

    upload() {
        // this.showLoading();
        // if (this.file !== null && this.file !== undefined) {
        //     this.abstractService.upload(+this.id(), this.file).subscribe(ret => {
        //
        //             try {
        //                 if (this.checkReturn(ret)) {
        //                     this.closeLoading();
        //                     this.closeUploadDialog();
        //                     this.initModels();
        //                     this.notificationService.success(this.projectOption.succesMessage);
        //                 } else {
        //                     this.notificationService.error('this.projectOption.errorMessage', ret['message']);
        //                     this.closeLoading();
        //                 }
        //             } catch (e) {
        //                 this.closeUploadDialog();
        //                 this.notificationService.error(e, egfOption.errorMessage);
        //             }
        //         },
        //         error => {
        //             this.closeUploadDialog();
        //             this.showError(error);
        //             this.closeLoading();
        //         });
        // }
        // this.closeLoading();
    }

    printElement(elementID, title = '') {
        this.showLoading();
        const printElement = document.getElementById(elementID);
        this.closePurchaseDialog();
        const data = printElement.innerHTML;
        const doc = window.document.body.innerHTML;
        window.document.body.innerHTML = data;
        window.print();
        this.closeLoading();
        window.document.body.innerHTML = doc;
        window.close();
        window.location.reload();
    }

    logout() {
        this.helpers.removeInLocalStorage(this.projectOption.tokenKey);
        if (this.helpers.getInLocalStorage(this.projectOption.userKey)) {
            this.helpers.removeInLocalStorage(this.projectOption.userKey);
        }
        if (this.helpers.getInLocalStorage(this.projectOption.currentUserKey)) {
            this.helpers.removeInLocalStorage(this.projectOption.currentUserKey);
        }
        if (this.helpers.getInLocalStorage(this.projectOption.urlKey)) {
            this.helpers.removeInLocalStorage(this.projectOption.urlKey);
        }
        if (this.helpers.getInLocalStorage(this.projectOption.userRolesKey)) {
            this.helpers.removeInLocalStorage(this.projectOption.userRolesKey);
        }
    }

    public getListOthers(data) {
        return Helpers.getListOthers(data);
    }


    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  UPLOAD FILES
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    getDayCountWithEnd(end: Date) {
        return this.getDayCount(new Date(), end);
    }

    getDayCount(begin: Date = new Date(), end: Date) {
        return Helpers.getDayCount(begin, end);
    }

    purchaseItem(item?: T) {
        if (item) {
            this.model = item;
        }
        this.purchase = true;
    }

    compareById(f1, f2) {
        return Helpers.compareById(f1, f2);
    }


    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  PRINT FILES
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    compareText(t1, t2) {
        return t1 === t2;
    }

    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  DROP-DOWNS
    //////////////////////////////////////////////////////////////////////////////////////////////*/


    /*//////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////  LOGOUT
    //////////////////////////////////////////////////////////////////////////////////////////////*/

    compareId(t1, t2) {
        return t1 === t2;
    }

    substring(str: string, all?: boolean) {
        if (!str) {
            str = '';
        }
        if (all) {
            return str;
        }
        return str.substr(0, this.descriptionLength);
    }

    formatDescription(str: string, length = this.lineLength) {
        if (!str) {
            return '';
        }
        str = str.trim();
        const words = str.split(' ');
        let description = '';
        let index = 1;
        for (const word of words) {
            description += ' ' + word;
            if (index % length === 0) {
                description += this.projectOption.br;
            }
            index++;
        }
        return description;
    }

    protected abstract initializeModel();

    protected abstract getTitle(): string;

    protected abstract getDescription(): string;

    protected abstract id(): string;

    protected abstract buildColumns();

    protected abstract buildForm();

    protected abstract paginateParams(page);
}
