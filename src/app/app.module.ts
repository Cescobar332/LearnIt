import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppsGeografiaComponent } from './apps-geografia/apps-geografia.component';
import { AppsLenguaComponent } from './apps-lengua/apps-lengua.component';
import { AppsMatematicasComponent } from './apps-matematicas/apps-matematicas.component';
import { GeografiaComponent } from './geografia/geografia.component';
import { LenguaComponent } from './lengua/lengua.component';
import { MatematicasComponent } from './matematicas/matematicas.component';
import { InformacionExtraGeografiaComponent } from './informacion-extra-geografia/informacion-extra-geografia.component';
import { InformacionExtraLenguaComponent } from './informacion-extra-lengua/informacion-extra-lengua.component';
import { InformacionExtraMatematicasComponent } from './informacion-extra-matematicas/informacion-extra-matematicas.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsGeografiaComponent,
    AppsLenguaComponent,
    AppsMatematicasComponent,
    GeografiaComponent,
    LenguaComponent,
    MatematicasComponent,
    InformacionExtraGeografiaComponent,
    InformacionExtraLenguaComponent,
    InformacionExtraMatematicasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
