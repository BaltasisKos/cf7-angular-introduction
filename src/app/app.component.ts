import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Kostas';

  person = {
    givenName: 'Kostas',
    surName: 'Kostakis',
    age: 35,
    email: 'kostakis@aueb.gr'
  }
}
