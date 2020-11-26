import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteComponent } from './site/site.component';
import { LoteComponent } from './uniformes/lote/lote.component';
import { UniformeComponent } from './uniformes/uniforme/uniforme.component';

const routes: Routes = [
    { path: '', redirectTo: '/site', pathMatch: 'full' },
    { path: 'site', component: SiteComponent },
    { path: 'lote', component: LoteComponent },
    { path: 'uniforme', component: UniformeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }