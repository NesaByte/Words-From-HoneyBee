import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Create a "Student" object
  s: Student = { name: "Nesa Rosmar Jan Bertanico", id: "104497185", city: "Toronto" };

  constructor() { }

  ngOnInit() { }

}

class Student {
  name: string;
  id: string;
  city: string;
}
