import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'posts/new', component: NewPostComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts' }
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        HeaderComponent,
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        PostsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
