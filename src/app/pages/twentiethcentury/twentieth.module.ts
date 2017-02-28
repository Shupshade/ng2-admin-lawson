import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './twentieth.routing';
import { Twentieth } from './twentieth.component';
import { NineteenTen } from './components/nineteenTen/nineteenTen.component';
import { NineteenTwenty } from './components/nineteenTwenty/nineteenTwenty.component';
import { NineteenThirty } from './components/nineteenThirty/nineteenThirty.component';
import { NineteenFourty } from './components/nineteenFourty/nineteenFourty.component';
import { NineteenFifty } from './components/nineteenFifty/nineteenFifty.component';
import { NineteenSixty } from './components/nineteenSixty/nineteenSixty.component';
import { NineteenSeventy } from './components/nineteenSeventy/nineteenSeventy.component';
import { NineteenEighty } from './components/nineteenEighty/nineteenEighty.component';
import { NineteenNinety } from './components/nineteenNinety/nineteenNinety.component';
import { NineteenNineNine } from './components/nineteenNineNine/nineteenNineNine.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    CKEditorModule,
    routing
  ],
  declarations: [
    Twentieth,
    NineteenTen,
    NineteenTwenty,
    NineteenThirty,
    NineteenFourty,
    NineteenFifty,
    NineteenSixty,
    NineteenSeventy,
    NineteenEighty,
    NineteenNinety,
    NineteenNineNine
  ]
})
export class TwentiethModule {
}
