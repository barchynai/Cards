import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
posts = [
  {
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: '@nature',
    content: 'I saw this tree today'
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: '@mountainlover',
    content: 'There is a picture of snowy mountain'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: '@biking222',
    content: 'I did some biking today'
  },
]

}
