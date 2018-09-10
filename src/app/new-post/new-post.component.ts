import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private postsService: PostsService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    onValidate() {
        const post = new Post(
            this.postForm.get('title').value,
            this.postForm.get('content').value
        );
        console.log(post);
        this.postsService.addPost(post);
        this.router.navigate(['/posts']);
    }

}
