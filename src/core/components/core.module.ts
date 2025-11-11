import { NgModule } from '@angular/core';

// Components & Pipes
import { FooterComponent } from './footer/footer';
import { HeaderComponent } from './header/header';
import { MessageModalComponent } from '../components/message-modal/message-modal';
import { PageNotFoundComponent } from './page-not-found/page-not-found';

@NgModule({
  declarations: [
  ],
  imports: [
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MessageModalComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
