//import { Component, HostBinding } from '@angular/core';
import { Component, OnInit, HostBinding, Input} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

//import { Article } from './article.model';

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // resolve this err
  votes: number;
  title: string;
  link: string;

@Input()  article: Article;

  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 55);
}

voteUp() : boolean {
  this.article.voteUp();
  return false;
}

voteDown(): boolean {
  this.article.voteDown();
  return false;
}


ngOnInit() {
}

}
