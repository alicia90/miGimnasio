import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { SocioCreateComponent } from './socio-create/socio-create.component';
import { SocioEditComponent } from './socio-edit/socio-edit.component';
import { SocioListComponent } from './socio-list/socio-list.component';
import { SocioService } from './socio.service';

@NgModule({
  declarations: [
    AppComponent,
    SocioCreateComponent,
    SocioEditComponent,
    SocioListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [SocioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
