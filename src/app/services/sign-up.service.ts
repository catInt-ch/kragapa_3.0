import { Injectable } from '@angular/core';
import {collectionData, doc, Firestore} from '@angular/fire/firestore';
import { addDoc, collection, updateDoc, CollectionReference } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { UserData, userDataConverter } from '../models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private usersCollection: CollectionReference<UserData>;

  constructor(private firestore: Firestore) {
    this.usersCollection = collection(firestore, 'users').withConverter(
      userDataConverter
    );
  }

  signUp(user: UserData): Promise<string> {
    return addDoc(this.usersCollection, {...user}).then((res) => {
      return res.id;
    });
  }

  check(user: any): Promise<any> {
    return updateDoc(doc(this.firestore, `users/${user.id}`), {...user});
  }

  getUsers(): Observable<UserData[]> {
    return collectionData(this.usersCollection);
  }
}
