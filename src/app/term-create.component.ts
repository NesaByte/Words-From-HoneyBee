import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { ActivatedRoute } from "@angular/router";
import { FormAddTerm, FormAddDef, FormAddTermResponse } from './data-classes';
// Data model classes for the form...



@Component({
  selector: 'app-term-create',
  templateUrl: './term-create.component.html',
  styleUrls: ['./term-create.component.css']
})
export class TermCreateComponent implements OnInit {

  // Properties

  // Data that will be sent to and submitted from the form
  
  term: FormAddTerm;
  termResult: FormAddTermResponse;
  def: FormAddDef;


  // Displays error text beside the buttons
  formError: string;

  // Initialization

  constructor(private m: DataManagerService, private router: ActivatedRoute) { }

  ngOnInit() {
    // Initialize the object that will be sent to the form
    this.term = new FormAddTerm();
    this.termResult = new FormAddTermResponse();
    this.def = new FormAddDef();
  }

  // Actions

  save() {

    this.formError = null;
    if(this.term.authorName && this.term.wordEnglish && this.term.fieldOfStudy){
      this.def.authorName = this.term.authorName;
      this.term.definitions= [ this.def ];
      this.m.englishTermAdd(this.term).subscribe(response => this.termResult = response);
    }
    else {
      this.formError = "Data entry error - all fields are required";
    }

  }

}
