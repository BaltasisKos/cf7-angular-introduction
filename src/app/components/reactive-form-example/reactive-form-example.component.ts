import { Component } from '@angular/core';
import { EpresonReactiveFormComponent } from '../epreson-reactive-form/epreson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-reactive-form-example',
  imports: [
    PersonTableComponent, 
    SimpleDatatableComponent, 
    EpresonReactiveFormComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {

}
