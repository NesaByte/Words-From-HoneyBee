import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  // Data for the form elements
  driverData: Driver;
  transportationModes: Option[] = [
    { value: "C", text: "Car" },
    { value: "B", text: "Bus" },
    { value: "M", text: "Motorcycle" },
    { value: "H", text: "Helicopter" }
  ];

  constructor() { }

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Richard Hammond",
      password: "mysecret!",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"],
      favouriteTransportation: "M",
      driverLicence: true,
      skillLevel: 8,
      vehicleUse: "pleasure"
    };
  }

  // Form submit button handler
  createDriver(): void {

    // Here we can do whatever tasks we need to do
    // For now, we'll just dump content to the console
    console.log(`Name and password: ${this.driverData.name}, ${this.driverData.password}`);
    console.log(`Description: ${this.driverData.description}`);
  }

}

// Data model classes for the form elements

class Driver {
  name: string;
  password: string;
  description: string;
  ownedTransportation: string[];
  favouriteTransportation: string;
  driverLicence: boolean;
  skillLevel: number;
  vehicleUse: string;
}

class Option {
  value: string;
  text: string;
}
