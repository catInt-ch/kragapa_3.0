import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, CollectionReference } from '@firebase/firestore';
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

  getUsers(): Observable<UserData[]> {
    return collectionData(this.usersCollection);
  }
}
