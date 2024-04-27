import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  email: string = '';
  message: string = '';
  constructor() { }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    form.reset();
  }
}
