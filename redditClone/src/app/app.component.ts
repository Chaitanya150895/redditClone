import { Component,
  OnInit,
  Input, // <-- added,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}

//articles: Article[]; // <-- component property

 //constructor() {
 //this.articles = [
 //new Article('Angular 2', 'http://angular.io', 3),
 //new Article('Fullstack', 'http://fullstack.io', 2),
 //new Article('Angular Homepage', 'http://angular.io', 1),
// ];
// }