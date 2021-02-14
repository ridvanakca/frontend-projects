import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   postsCollection: AngularFirestoreCollection<Post>;
   postDoc: AngularFirestoreDocument<Post>;
   

   constructor(private firestore: AngularFirestore) {
      this.postsCollection = this.firestore
        .collection<Post>('posts', ref => ref.orderBy('published','desc'));
   }

   getPosts() {
     // read the data and metada from firestore with snapshotChanges
     return this.postsCollection.snapshotChanges()
      .pipe( map(actions => actions.map(res => {
        const data = res.payload.doc.data() as Post;
        const id = res.payload.doc.id;
        return { id, ...data };
      })))
   }

   getPostData(id: string) {
    this.postDoc = this.firestore.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
   }
}
