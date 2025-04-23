import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared./interfaces/person';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Kostas';
  

  // Step 1: One way binding of data
  person = {
    givenName: 'Kostas',
    surName: 'Kostakis',
    age: 35,
    email: 'kostakis@aueb.gr'
  }

  // Step 3: Component input
  person0: Person ={
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age: 55,
    email: "chfraf@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@example.com",
    address: 'New York, USA'
  }
}
