//tersm component
import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { EnglishTerm, FormAddTermResponse, FormAddDef, FormAddDefResponse, FormAddTerm } from "./data-classes";

@Component({
  selector: 'app-terms',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class TermListComponent implements OnInit {
  constructor(private m: DataManagerService) { }

  terms: EnglishTerm[];
  //term : FormAddTerm[];

  ngOnInit() {
    this.m.englishTermGetAll().subscribe(response => this.terms = response);
  }

}