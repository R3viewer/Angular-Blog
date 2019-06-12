import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: any

  constructor() {}

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green'
    } else if (this.post.loveIts < 0) {
      return 'red'
    }
  }

  addLove() {
    this.post.loveIts++
  }

  removeLove() {
    this.post.loveIts--
  }

}
