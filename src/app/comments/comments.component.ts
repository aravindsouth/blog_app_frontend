import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { commentsModel } from './comments.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: commentsModel[] = [];

  constructor(private commentservice: BlogService) { }

  ngOnInit(): void {
    this.commentservice.getComments().subscribe((data) => {
      this.comments = JSON.parse(JSON.stringify(data));
  })
}
}
