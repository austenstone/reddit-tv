import { YouTubePlayer } from '@angular/youtube-player';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input() currentVideoYoutubeId;
  @ViewChild('player', { static: false }) public player: YouTubePlayer;

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.player) {
      this.player.videoId = this.currentVideoYoutubeId;
      this.player.playVideo();
    }
  }

  ready(e: YT.PlayerEvent) {
    e.target.playVideo();
  }
}
