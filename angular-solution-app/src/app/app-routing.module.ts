import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strytegy';


const app_routes: Routes = [
  { path: 'devices', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
  providers: [ PreloadModulesStrategy ]
})
export class AppRoutingModule { }
