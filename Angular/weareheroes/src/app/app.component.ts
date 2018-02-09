import { Component } from '@angular/core';

@Component({
  selector: 'wahapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Propiedades públicas que van a poder utilizar los otros componentes
  title = 'We are heroes - Angular App'; // Pueden tener cualquier nombre
  author = 'mcalmunoz';

}
