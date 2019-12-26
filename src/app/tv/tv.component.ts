import { RedditService } from './../reddit.service';
import { Component, OnInit } from '@angular/core';
import { RedditData, ChildData } from '../reddit';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  subscription: Subscription;
  currentRedditVideo: ChildData;
  redditData: RedditData;
  currentVideoId: string;
  currentVideoYoutubeId: string;
  currentSubredditTitle: string;
  isSubredditValid = true;
  listingType = 0;
  thumbnailsX = 150;

  constructor(
    private redditService: RedditService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    interval(1000).subscribe(() => console.log(this.currentSubredditTitle));

    this.currentSubredditTitle = this.route.snapshot.paramMap.get('subreddit');
    if (!this.currentSubredditTitle) {
      this.router.navigate(['/r/videos']);
    }
    this.currentVideoId = this.route.snapshot.paramMap.get('id');

    this.changeListing({value: 'top'});
  }

  changeListing(listingType) {
    let observable;
    const type = listingType.value;

    if (type === 'hot') {
      observable = this.redditService.getHot(this.currentSubredditTitle);
    } else if (type === 'new') {
      observable = this.redditService.getNew(this.currentSubredditTitle);
    } else if (type === 'rising') {
      observable = this.redditService.getRising(this.currentSubredditTitle);
    } else if (type === 'top') {
      observable = this.redditService.getTop(this.currentSubredditTitle);
    }

    if (observable) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = observable.subscribe((redditData) => {
        this.isSubredditValid = true;
        this.redditData = redditData.data;

        this.redditData.children = this.redditData.children.filter((child) => child.data.url.match('youtube'));

        this.changeVideo(this.redditData.children[0].data, 0);
      }, (err) => this.isSubredditValid = false);
    }
  }

  changeVideo(videoData: ChildData, videoIndex: number) {
    console.log('you clicked on the ', videoIndex, ' video', videoData);
    this.currentRedditVideo = videoData;
    this.currentVideoYoutubeId = this.getVideoYoutubeId(this.currentRedditVideo);
    this.router.navigate(['/r/' + this.currentSubredditTitle + '/' + this.currentRedditVideo.id]);
    this.thumbnailsX = -videoIndex * 150;
  }

  getVideoByTitle(title: string): ChildData {
    const videoData = this.redditData.children.find((child) => child.data.title === this.currentVideoId);
    if (videoData) {
      return videoData.data;
    }
  }

  getVideoYoutubeId(videoData: ChildData) {
    if (videoData && videoData.url) {
      return videoData.url.substr(videoData.url.length - 11, 11);
    }
  }

  currentSubredditTitleChanged(e) {
    console.log('currentSubredditTitleChanged', this.currentSubredditTitle);
    this.changeListing({value: 'top'});
  }
}
