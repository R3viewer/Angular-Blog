import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier Post',
      content: 'Cupidatat pariatur occaecat pariatur exercitation duis magna.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième Post',
      content: 'Sint sint laboris labore labore ipsum nostrud minim magna quis laborum minim pariatur enim. Aliquip enim occaecat consectetur ea reprehenderit sit laborum magna laborum sint esse. Culpa elit qui eiusmod amet proident voluptate laboris. Culpa aliqua aute eu enim. Eiusmod adipisicing magna officia fugiat quis reprehenderit. Cupidatat exercitation sint veniam labore consectetur labore nostrud elit.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Velit aliqua in deserunt et.',
      loveIts: -3,
      created_at: new Date()
    }
  ]
}
