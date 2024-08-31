import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsGeografiaComponent } from "./apps-geografia/apps-geografia.component";
import { AppsLenguaComponent } from "./apps-lengua/apps-lengua.component";
import { AppsMatematicasComponent } from "./apps-matematicas/apps-matematicas.component";
import { GeografiaComponent } from "./geografia/geografia.component";
import { LenguaComponent } from './lengua/lengua.component';
import { MatematicasComponent } from './matematicas/matematicas.component';
import { InformacionExtraGeografiaComponent } from "./informacion-extra-geografia/informacion-extra-geografia.component";
import { InformacionExtraLenguaComponent } from "./informacion-extra-lengua/informacion-extra-lengua.component";
import { InformacionExtraMatematicasComponent } from "./informacion-extra-matematicas/informacion-extra-matematicas.component";
import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    {
        path:'',
        children:[
            {
              path: "inicio",
              component: InicioComponent
            },
            {
                path: "apps-geografia",
                component: AppsGeografiaComponent
            },
            {
              path: "apps-lengua",
              component: AppsLenguaComponent
            },
            {
              path: "apps-matematicas",
              component: AppsMatematicasComponent
            },
            {
              path: "geografia",
              component: GeografiaComponent
            },
            {
              path: "lengua",
              component: LenguaComponent
            },
            {
              path: "matematicas",
              component: MatematicasComponent
            },
            {
              path: "info-extra-geo",
              component: InformacionExtraGeografiaComponent
            },
            {
              path: "info-extra-lengua",
              component: InformacionExtraLenguaComponent
            },
            {
              path: "info-extra-mate",
              component: InformacionExtraMatematicasComponent
            },
            {
              path: '', redirectTo: 'inicio', pathMatch: 'full' 
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
