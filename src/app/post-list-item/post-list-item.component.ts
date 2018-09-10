import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../models/post.model";
import {PostsService} from "../services/posts.service";

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;


    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
    }

    onIncrement() {
        this.post.loveIts += 1;
        this.postsService.updatePost(this.post);
    }

    onDecrement() {
        this.post.loveIts -= 1;
        this.postsService.updatePost(this.post);
    }

    onDelete() {
        this.postsService.deletePost(this.post);
    }

}
