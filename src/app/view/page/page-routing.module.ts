import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FrindsComponent } from './frinds/frinds.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: '', component: DashboardComponent ,pathMatch:'full'},
      { path: 'faq', component: FaqComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'pricing', component: PricingComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', component: AboutComponent, pathMatch:'full'},
          { path: 'timeline_page', component: TimelinePageComponent },
          { path: 'friends', component: FrindsComponent },
          { path: 'photo', component: PhotoComponent },
          { path: 'video', component: VideoComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
