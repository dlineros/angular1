import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Page1Component } from './component/page1/page1.component';
import { RouterModule } from '@angular/router';
import { ListafirmanteComponent } from "./component/page1/listafirmante/listafirmante.component";
import { AgregafirmanteComponent } from "./component/page1/agregafirmante/agregafirmante/agregafirmante.component";




@NgModule({
 declarations:[
    Page1Component,
    ListafirmanteComponent,
    AgregafirmanteComponent
  ],
  exports: [
    Page1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page1Component,
      },


    ]),

  ]
})

export class page1Module{}
