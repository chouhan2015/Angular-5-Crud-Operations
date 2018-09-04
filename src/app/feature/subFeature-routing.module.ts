import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core'
import { subFeatureComponent } from "./subFeature.component";

const routes: Routes = [
  {
    path: '',
    component: subFeatureComponent
  }
];

export const routing : ModuleWithProviders = RouterModule.forChild(routes);