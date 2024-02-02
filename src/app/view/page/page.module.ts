import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShearModule } from 'src/app/shear/shear.module';
import { PageComponent } from './page.component';
import { AppexBarChartComponent } from './appex-bar-chart/appex-bar-chart.component';
import { AppexPieChartComponent } from './appex-pie-chart/appex-pie-chart.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { FrindsComponent } from './frinds/frinds.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PageComponent,
    AppexBarChartComponent,
    AppexPieChartComponent,
    FaqComponent,
    ProfileComponent,
    TimelineComponent,
    AboutComponent,
    FrindsComponent,
    PhotoComponent,
    VideoComponent,
    TimelinePageComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ShearModule
  ]
})
export class PageModule { }
