import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightthroughDirective } from './highlightthrough.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    HighlightthroughDirective,
    DateCountPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
