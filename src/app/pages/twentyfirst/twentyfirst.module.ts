import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './twentyfirst.routing';
import { Twentyfirst } from './twentyfirst.component';
import { TwentyTen } from './components/twentyTen/twentyTen.component';
import { TwentyTwenty } from './components/twentyTwenty/twentyTwenty.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Twentyfirst,
    TwentyTen,
    TwentyTwenty,
  ]
})
export class TwentyfirstModule {
}
