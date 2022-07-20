import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLoadedOnceGuard } from './module-loaded-once.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule extends ModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    super(parentModule);
  }
  
}
