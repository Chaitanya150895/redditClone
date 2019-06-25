import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHelloWorldComponent } from './angular-hello-world/angular-hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent, // <-- added this
    AngularHelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
