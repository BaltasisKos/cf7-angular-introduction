import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
      {
        "givenName": "Cally",
        "surName": "Ogilvie",
        "email": "cogilvie0@salon.com",
        "age": 1,
        "address": "Suite 85"
      }, {
        "givenName": "Veda",
        "surName": "Hancox",
        "email": "vhancox1@instagram.com",
        "age": 2,
        "address": "PO Box 62053"
      }, {
        "givenName": "Nate",
        "surName": "Renner",
        "email": "nrenner2@dyndns.org",
        "age": 3,
        "address": "PO Box 29788"
      }, {
        "givenName": "Robinette",
        "surName": "Lye",
        "email": "rlye3@goodreads.com",
        "age": 4,
        "address": "10th Floor"
      }, {
        "givenName": "Teddi",
        "surName": "Lethlay",
        "email": "tlethlay4@bizjournals.com",
        "age": 5,
        "address": "PO Box 54270"
      }, {
        "givenName": "Basile",
        "surName": "Bisp",
        "email": "bbisp5@timesonline.co.uk",
        "age": 6,
        "address": "PO Box 73652"
      }, {
        "givenName": "Cyrill",
        "surName": "Tomasoni",
        "email": "ctomasoni6@washingtonpost.com",
        "age": 7,
        "address": "Room 1930"
      }, {
        "givenName": "Imelda",
        "surName": "Yeld",
        "email": "iyeld7@census.gov",
        "age": 8,
        "address": "6th Floor"
      }, {
        "givenName": "Enriqueta",
        "surName": "Duffil",
        "email": "eduffil8@pen.io",
        "age": 9,
        "address": "20th Floor"
      }, {
        "givenName": "Kevin",
        "surName": "Kempton",
        "email": "kkempton9@opensource.org",
        "age": 10,
        "address": "Suite 71"
      }, {
        "givenName": "Conrade",
        "surName": "Holdey",
        "email": "choldeya@ucoz.com",
        "age": 11,
        "address": "PO Box 49460"
      }, {
        "givenName": "Lisha",
        "surName": "Brownsword",
        "email": "lbrownswordb@dagondesign.com",
        "age": 12,
        "address": "Suite 34"
      }, {
        "givenName": "Darbee",
        "surName": "Larby",
        "email": "dlarbyc@cbc.ca",
        "age": 13,
        "address": "Apt 203"
      }, {
        "givenName": "Adria",
        "surName": "Beeson",
        "email": "abeesond@mtv.com",
        "age": 14,
        "address": "PO Box 80362"
      }, {
        "givenName": "Sandy",
        "surName": "Handrik",
        "email": "shandrike@163.com",
        "age": 15,
        "address": "Apt 1574"
      }, {
        "givenName": "Gwynne",
        "surName": "Grimsdith",
        "email": "ggrimsdithf@yellowbook.com",
        "age": 16,
        "address": "5th Floor"
      }, {
        "givenName": "Nollie",
        "surName": "Gallally",
        "email": "ngallallyg@merriam-webster.com",
        "age": 17,
        "address": "15th Floor"
      }, {
        "givenName": "Adi",
        "surName": "Barby",
        "email": "abarbyh@edublogs.org",
        "age": 18,
        "address": "PO Box 25085"
      }, {
        "givenName": "Peyter",
        "surName": "Manger",
        "email": "pmangeri@tripadvisor.com",
        "age": 19,
        "address": "PO Box 58933"
      }, {
        "givenName": "Care",
        "surName": "Muggleton",
        "email": "cmuggletonj@dedecms.com",
        "age": 20,
        "address": "17th Floor"
      }]

}
