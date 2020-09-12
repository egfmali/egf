
import * as admin from 'firebase-admin';
import Transaction = admin.firestore.Transaction;
import DocumentReference = admin.firestore.DocumentReference;

export const getFreshDocData =  async function (transaction: Transaction, docRef: DocumentReference): Promise<any> {
    const freshDoc = await transaction.get(docRef);
    return {
        ref: docRef,
        uid: docRef.id,
        ...freshDoc.data(),
    };
}

