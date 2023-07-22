import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent{
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          nume: ['', [Validators.required, Validators.maxLength(15)]],
          prenume: ['', [Validators.required, Validators.maxLength(15)]],
          mesaj: ['', [Validators.required, Validators.minLength(10)]],
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.form.reset();
  }
}

