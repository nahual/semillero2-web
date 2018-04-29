import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { BaseInterceptor } from './http-interceptors/base-interceptor';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NodoModule } from './nodo/nodo.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { EmpresaModule } from './empresa/empresa.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NodoModule,
    EstudianteModule,
    EmpresaModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
