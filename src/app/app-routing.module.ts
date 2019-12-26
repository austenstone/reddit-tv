import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TvComponent } from './tv/tv.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: 'r/videos', pathMatch: 'full' },
  { path: 'r/:subreddit', component: TvComponent },
  { path: 'r/:subreddit/:id', component: TvComponent },
  { path: 'cards', component: CardComponent },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
