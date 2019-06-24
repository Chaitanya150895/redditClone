//import { Component, HostBinding } from '@angular/core';
import { Component, OnInit, HostBinding } from '@angular/core';

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

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 55;
  }

  voteUp() : boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }


  ngOnInit() {
  }

}
