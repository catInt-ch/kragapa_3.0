import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';

export class UserData {
  constructor(
    public firstName: string,
    public lastName: string,
    public foodType: string,
    public meal: string,
    public favoriteDrink: string,
    public invitedBy: string
  ) {}
}

export const userDataConverter = {
  toFirestore(user: UserData): DocumentData {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      foodType: user.foodType,
      meal: user.meal,
      favoriteDrink: user.favoriteDrink,
      invitedBy: user.invitedBy,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): UserData {
    const data = snapshot.data(options)!;
    return new UserData(
      data['firstName'],
      data['lastName'],
      data['foodType'],
      data['meal'],
      data['favoriteDrink'],
      data['invitedBy']
    );
  },
};
