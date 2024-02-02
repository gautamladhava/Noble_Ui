import { Component } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
ngAfterViewInit() {
    feather.replace();
  }
}
