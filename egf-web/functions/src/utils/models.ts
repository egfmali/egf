import * as admin from 'firebase-admin';
import DocumentReference = admin.firestore.DocumentReference;

export class ColName {

    static users = 'users';
    static appConfigs = 'app_configs';

}

export class ProductType {
    static colis = 'COLIS';
    static devise = 'DEVISE';
}

export class PaymentMethod {

    private static _cash = 'CASH';
    private static _orangeMoney = 'ORANGE_MONEY';
    private static _mobiCash = 'MOBI_CASH';
    private static _visa = 'VISA';
    private static _payPal = 'PAY_PAL';

    static cash = new PaymentMethod(PaymentMethod._cash, 'Cash');
    static orangeMoney = new PaymentMethod(PaymentMethod._orangeMoney, 'Orange Money');
    static mobiCash = new PaymentMethod(PaymentMethod._mobiCash, 'Mobi Cash');
    static visa = new PaymentMethod(PaymentMethod._visa, 'Carte Visa');
    static payPal = new PaymentMethod(PaymentMethod._payPal, 'PayPal');

    readonly type: string;
    readonly title: string;

    constructor(type: string, title: string) {
        this.type = type;
        this.title = title;
    }

    is(type: string): boolean {
        return this.type === type;
    }

    public static valueOf(value: string): PaymentMethod | undefined {
        if (value === PaymentMethod._cash) {
            return PaymentMethod.cash;
        } else if (value === PaymentMethod._orangeMoney) {
            return PaymentMethod.orangeMoney;
        } else if (value === PaymentMethod._mobiCash) {
            return PaymentMethod.mobiCash;
        } else if (value === PaymentMethod._visa) {
            return PaymentMethod.visa;
        } else if (value === PaymentMethod._payPal) {
            return PaymentMethod.payPal;
        }

        return undefined;
    }
}




export interface PaymentData {
    ref: DocumentReference;
    productType: string;
    dateOperation: Date;
    state: string;
    paymentMethod: string;
    amount: number;
    societe: string;
    userUid: string;
    userName: string;
    userPhone?: string;
    userEmail?: string;
    message?: string;
    validationDate?: Date;
    validate: boolean;
}



export interface UserData {
    ref: DocumentReference;
    uid: string;
    email: string;
    name?: string;
    providerId?: string;
    phone?: string;
    adresse?: string;
    photoUrl?: string;
}

export class PaymentState {
    static initial = 'INITIAL';
    static inProgress = 'IN_PROGRESS';
    static error = 'ERROR';
    static cancel = 'CANSEL';
    static toCheck = 'TO_CHECK';
    static cheCked = 'CHECK_ED';
    static valid = 'VALID';
}


export class TicketStateData {
    static initial = 'INITIAL';
    static inValidation = 'IN_VALIDATION';
    static used = 'USED';
    static cancel = 'CANCEL';

    static inProgress = 'IN_PROGRESS';
    static error = 'ERROR';
    static toCheck = 'TO_CHECK';
    static fails = 'FAILS';
    static valid = 'VALID';
}

export interface TicketData {

    ref: DocumentReference;
    id: string;
    uid: string;
    user: string;
    seller_uid: string;
    seller_name: string;

    organisation: string;
    organisation_uid?: string;
    organisation_name?: string;

    event: string;
    eventLibelle?: string;
    eventDateDebut?: Date;
    eventDateFin?: Date;
    eventDatetimeDebut?: Date;
    eventDatetimeFin?: Date;
    eventUrl?: string;
    event_uid: string;
    event_libelle?: string;

    qrCode?: string;

    state?: string;

    payment?: string;

    amount: number;
    price: number;
    quantity: number;

    creationDate: Date;

    displayName?: string;
    deviceId?: string;
    telephone?: string;
    email?: string;

    libelle: string;
    description?: string;
    ticketExpire: Date;

    modelEvent_uid?: string;
    modelEvent_name?: string;

    salle_uid?: string;
    salle_libelle?: string;

    standing_uid?: string;
    standing_name?: string;

    buyer_uid: string;
    buyer_name: string;

    consumer_uid: string;
    consumer_name: string;

}
