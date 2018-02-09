import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Aqui se borran los componentes generados con 'ng generate component'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    // Aqui tambien hay que borrar el componente borrado arriba
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
