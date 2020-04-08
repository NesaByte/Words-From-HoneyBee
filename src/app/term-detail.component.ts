import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { FormAddDef, Definition, EnglishTerm, FormAddTermResponse } from "./data-classes";

// Enables access to the route / URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css']
})
export class TermDetailComponent implements OnInit {

  // reqres.in web service data
 
  dres: FormAddDef;
  term : EnglishTerm;
  termResult : FormAddTermResponse;
  id : string;
  
  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  onClickYes(){
    this.term.helpYes++;
    this.m.englishTermIncrementHelpYes(this.id, this.term).subscribe(response => this.termResult = response);
  }
  onClickNo(){
    this.term.helpNo++;
    this.m.englishTermIncrementHelpNo(this.id, this.term).subscribe(response => this.termResult = response);

  }

  onClickLike(){
    this.term.definitions;
    //this.m.englishTermIncrementLikes(this.id, this.dres).subscribe(response => this.termResult = response);

  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get("id");

    this.m.englishTermGetById(this.id).subscribe(response => this.term = response);
    
  }
  
  save(){
    //this.term.helpYes = this.fhy.helpYes +this.term.helpYes;
    //this.fhy.helpYes = this.term.helpYes;
  }

}
