import {Injectable} from '@angular/core';
import {Post} from "../models/post.model";
import {Subject} from "rxjs/index";
import * as firebase from "firebase";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
    }

    getPosts() {
        firebase.database().ref('/posts').on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        });
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.savePosts();
        this.emitPosts();
    }

    deletePost(post: Post) {
        this.posts.splice(this.findIndexPost(post), 1);
        this.savePosts();
        this.emitPosts();
    }

    updatePost(post: Post) {
        this.posts[this.findIndexPost(post)] = post;
        this.savePosts();
        this.emitPosts();
    }

    findIndexPost(post: Post) {
        return this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }
}
