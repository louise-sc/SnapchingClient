import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-us',
  templateUrl: './email-us.component.html',
  styleUrls: ['./email-us.component.scss']
})
export class EmailUsComponent implements OnInit {

  subscribeForm: FormGroup;

  constructor(private sf: FormBuilder) { }

  // Email Validator
  ngOnInit() {
    this.subscribeForm = this.sf.group({
      email: ['', Validators.email],
    });
  }

  onSubmit(name) {
    if (!name) { return false; }
    const form = document.createElement('form');
    const element1 = document.createElement('input');

    form.method = 'POST';
    form.target = '_blank';
    form.action = '';

    element1.value = name;
    element1.name = 'EMAIL';
    element1.id = 'mce-EMAIL';
    form.appendChild(element1);

    document.body.appendChild(form);

    form.submit();
  }

}
