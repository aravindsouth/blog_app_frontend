import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  button_name: string = "Subscribe";
  follow_count: number = 10;
  follow_flag: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
