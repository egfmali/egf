import {Deserializable} from "../utility";
import {DocumentReference} from "@angular/fire/firestore";


export abstract class AbstractEntity<T> implements Deserializable<T> {
  uid: string;
  createdBy?: string;
  createdByDisplayName?: string;
  lastModifiedByDisplayName?: string;
  lastModifiedBy?: string;
  createdDate: Date;
  lastModifiedDate?: Date;
  ref?: DocumentReference;
  keys?: string[];


  deserialize(input: any): T {
    return Object.assign(this, input);
  }
}
