import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostService } from './post.service';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    NavbarComponent,
    NotFoundComponent,
    SinglePostComponent,
    ContactComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'posts/:id',
        component: SinglePostComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
