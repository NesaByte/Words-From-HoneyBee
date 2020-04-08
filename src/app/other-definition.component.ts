import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "./data-manager.service";
import { ActivatedRoute } from "@angular/router";
import { Definition, FormAddTermResponse, FormAddDef, FormAddDefResponse, FormAddTerm } from "./data-classes";

class FormAddDefinition{
  _id:string;
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  likes: number;
}

@Component({
  selector: 'app-other-definition',
  templateUrl: './other-definition.component.html',
  styleUrls: ['./other-definition.component.css']
})
export class OtherDefinitionComponent implements OnInit {
  // Initialization 
 /* term : FormAddTerm;
  termResult: FormAddTermResponse;
  def : FormAddDef;
  defResult: FormAddDefResponse;
  id : string;
  numLikes : number;
  numHelpNes : number;
  numHelpNo : number;

  formError: string;*/

  constructor(private m: DataManagerService, private route: ActivatedRoute) { }

  ngOnInit() {/*
    this.id = this.route.snapshot.paramMap.get("id");
    this.m.englishTermGetById(this.id).subscribe(response => this.termResult = response);
    this.def = new FormAddDef();
    this.numHelpNes = this.termResult.helpYes;
    this.numHelpNo = this.termResult.helpNo;*/
  }
  /*

  // Actions

  save() {

    this.formError = null;
    if(this.def.authorName && this.def.definition){
      this.m.englishTermAddDefinition(this.termResult._id, this.def).subscribe(response => this.defResult = response);
    }
    else {
      this.formError = "Data entry error - all fields are required";
    }
  }

  like() {
    console.log("LIKE begins");
    this.def.likes = this.numLikes;
    this.def.likes = this.def.likes + 1;
    this.m.englishTermIncrementLikes(this.id, this.def).subscribe(response => this.defResult = response);
  }

  helpyes() {
    console.log("LIKE begins");
    console.log(this.term);
    this.term = this.termResult;

    console.log(this.termResult);
    this.term.helpYes++;
    this.m.englishTermIncrementHelpYes(this.id, this.term).subscribe(response => this.termResult = response);
  }

  helpno() {

  }*/
}