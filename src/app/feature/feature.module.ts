import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { chartService } from './chart.service';
import { subFeatureComponent } from "./subFeature.component";
import { routing } from './subFeature-routing.module'

@NgModule({
  declarations: [subFeatureComponent],
  imports: [CommonModule, routing],
  providers: [chartService]
})
export class FeatureModule { }


