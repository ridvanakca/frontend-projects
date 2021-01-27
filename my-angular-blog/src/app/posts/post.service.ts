import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   postsCollection: AngularFirestoreCollection<Post>;

   constructor(private firestore: AngularFirestore) {}

   getPosts() {
    this.postsCollection = this.firestore.collection<Post>('posts', ref => ref.orderBy('published','desc'));
    return this.postsCollection.valueChanges();
   }


}
