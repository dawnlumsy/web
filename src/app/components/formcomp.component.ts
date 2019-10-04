import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RSVP } from '../models';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {

  @Output() onNewRSVP = new EventEmitter<RSVP>();

  constructor() { }

  ngOnInit() {
  }

  processForm(form: NgForm){
    console.info("processing form", form.value);
    const values = form.value;
    const rsvp: RSVP = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      attendingDay: (new Date(values.attendingDay)).getTime(),
      vegetarian: values.vegetarian == "yes",
      comments: values.comments,
      guest: parseInt(values.guest) || 0,
      allergies: []
    };
    for (let i in values)
    if (i.startsWith('allergies-') && values[i])
      rsvp.allergies.push(i)
 
      form.resetForm();
      this.onNewRSVP.next(rsvp);
      //this.rsvpdetails.push(rsvp)
  }

/*
  rsvpdetails: RSVP[] = [{

    name: "dawn",
    phone: "123",
    email: "abc@servername",
    attendingDay: 1570636800000,
    vegetarian: false,
    comments: "",
    guest: 1,
    allergies: ["allergies-nut"]
  }];
*/

}
