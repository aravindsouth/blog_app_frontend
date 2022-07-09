import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogModel } from './blog.model';

@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.css']
})
export class BlogBodyComponent implements OnInit {
  blog: BlogModel[] = [];
  button_name: string = "Subscribe";
  follow_count: number = 10;
  follow_flag: boolean = false;

  constructor(private blogservice:BlogService) { }

  ngOnInit(): void {
    this.blogservice.getBlog().subscribe((data) => {
      this.blog = JSON.parse(JSON.stringify(data));
    })
  }
  follow () {
    if (this.follow_flag === false) {
      this.button_name = "Subscribed";
      this.follow_count += 1;
      this.follow_flag = true;
    }

    else {
      this.button_name = "Subscribe";
      this.follow_count -= 1;
      this.follow_flag = false;
    }

  }

}
