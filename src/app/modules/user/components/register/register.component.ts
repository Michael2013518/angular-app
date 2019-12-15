import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [Validators.required, Validators.minLength(5)])
  // });
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(6)]]
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(item => {
      console.log(item);
    });
    // this.registerForm.setValue({
    //   username: 'Bruce_Lee',
    //   password: '11111'
    // });
    this.registerForm.statusChanges.subscribe(status => {
      console.log('Status', status)
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
