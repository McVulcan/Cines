import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MovieComponent,
    HomeComponent,
    MovieDetailsComponent
  ],
  imports: [SuiModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
