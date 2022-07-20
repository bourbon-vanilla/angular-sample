import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strytegy';


const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome'},
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'devices', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/welcome' }
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy, relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
  providers: [ PreloadModulesStrategy ]
})
export class AppRoutingModule { }
