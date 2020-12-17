import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EntrepriseFormComponent } from './entreprise-form/entreprise-form.component';
import { BandeauModule } from 'src/app/commun/components/bandeau/bandeau.module';

@NgModule({
  declarations: [EntrepriseComponent, EntrepriseFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EntrepriseRoutingModule,
    BandeauModule
  ]
})
export class EntrepriseModule { }
