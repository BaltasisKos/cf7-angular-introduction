import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Thanasis"

  person = {
    givenName: "Thanassis",
    surname: "Androutsos",
    age: 20,
    email: 'thanasis@aueb.gr'
  }

}
