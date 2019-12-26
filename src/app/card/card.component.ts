import { RedditService } from './../reddit.service';
import { Component, OnInit } from '@angular/core';
import { RedditData } from '../reddit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  topData: RedditData;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() {
    // this.redditService.getTop('videos').subscribe((data) => this.topData = data.data);
    this.redditService.getTop('videos').subscribe((data) => {
      this.topData = data.data;
      console.log(this.topData);
    });
  }

}
