// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Other libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Local modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // LoggingModule,   // Has to be added here as "Eager loaded" since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,   // Main routes for the application
    NgbModule,          // ng-bootstrap
    CoreModule,         // Singleton objects (services, components that are loaded only once etc.)
    SharedModule        // Shared (multi-instance) objects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
