import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatSelectModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TvComponent } from './tv/tv.component';
import { SafeHtmlPipe, SafeUrlPipe } from './safe-html.pipe';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    TvComponent,
    SafeHtmlPipe,
    SafeUrlPipe,
    CardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  exports: [SafeHtmlPipe, SafeUrlPipe],
  providers: [SafeHtmlPipe, SafeUrlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
