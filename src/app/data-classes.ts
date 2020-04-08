import { Input, OnInit } from '@angular/core';


export class EnglishTerm {
  constructor() {
    let date = new Date();
    this.dateCreated = date.toString();
  }

  wordEnglish: string;
  wordNonEnglish: string;
  wordExpanded: string;
  languageCode: string;
  image: string;
  imageType: string;
  audio: string;
  audioType: string;
  linkAuthoritative: string;
  linkWikipedia: string;
  linkYouTube: string;
  authorName: string;
  dateCreated: string;
  dateRevised: string;
  fieldOfStudy: string;
  helpYes: number;
  helpNo: number;
  definitions: Definition[];
}

export class Definition {
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  likes: number;
}

export class FormAddTerm { 
  wordEnglish: string;
  wordNonEnglish: string;
  wordExpanded: string;
  languageCode: string;
  image: string;
  imageType: string;
  audio: string;
  audioType: string;
  linkAuthoritative: string;
  linkWikipedia: string;
  linkYouTube: string;
  authorName: string;
  fieldOfStudy: string;
  helpYes: number;
  helpNo: number;
  definitions?: FormAddDef[];
}

export class FormAddTermResponse { 
    constructor() {
    let date = new Date();
    this.dateCreated = date.toString();
  }

  _id?: string;
  wordEnglish: string;
  wordNonEnglish: string;
  wordExpanded: string;
  languageCode: string;
  image: string;
  imageType: string;
  audio: string;
  audioType: string;
  linkAuthoritative: string;
  linkWikipedia: string;
  linkYouTube: string;
  authorName: string;
  dateCreated: string;
  dateRevised: string;
  fieldOfStudy: string;
  helpYes: number;
  helpNo: number;
  definitions?: FormAddDef[];
}

export class FormAddDef {
  constructor() {
    let date = new Date();
    this.dateCreated = date.toString();
  }

  authorName: string;
  definition: string;
  dateCreated: string;
  likes: number;
}

export class FormAddDefResponse {
  constructor() {
    let date = new Date();
    this.dateCreated = date.toString();
  }

  _id?:string;
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  likes: number;
}
// Example - describes a product
export class Product {
  id: number;
  name: string;
  description?: string;   // optional property, can be null
}

// Add more data model classes below...



// From the "typicode" web API...
// https://jsonplaceholder.typicode.com

export class Post {
  id:         number;
  userId:     number;
  title:      string;
  body:       string;
}

export class Comment {
  id:         number;
  postId:     number;
  email:      string;
  name:       string;
  body:       string;
}

export class Geo {
  lat:        number;
  lng:        number;
}

export class Address {
  city:       string;
  geo:        Geo;
  street:     string;
  suite:      string;
  zipcode:    string;
}

export class Company {
  bs:             string;
  catchPhrase:    string;
  name:           string;
}

export class User {
  address:        Address;
  company:        Company;
  email:          string;
  id:             number;
  name:           string;
  phone:          string;
  username:       string;
  website:        string;
}




// From the "request response" web API...
// https://reqres.in

// User 
export class ReqresTerm {
  id: number;
  authorName: string;
  definition: string;
  avatar: string;
}

/********* T E R M *********/
export class ReqresUser {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

// Package that delivers a collection of users
export class ReqresUserCollectionPackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresUser[];
}

/********* T E R M *********/

// Package that delivers one user
export class ReqresUserSinglePackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresUser;
}

// Packaging for "add new" request
// NOTICE...
// The same package works for the "edit existing" request
export class ReqresUserCreate {
  name: string;
  job: string;
}

// Response from "add new" POST request
// NOTICE...
// The same package works for the "edit existing" request, 
// except that the web service does NOT return the "id" value,
// which is why it has been configured (below) as optional
export class ReqresUserCreateResponse {
  id?: number;
  name: string;
  job: string;
  createdAt: string;  // ISO8601 date and time string
}
