import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
} from '@angular/forms';
@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
    constructor(private fb: FormBuilder) {
      this.myForm();
    }
    userName: any;
    formData: any;
    requiredForm: any = FormGroup;
    ngOnInit(): void {
        this.formData = new FormGroup({
            userName: new FormControl('Ram'),
        });
    }
    onClickSubmit(value: any) {
        console.log(value);
        this.userName = value.userName;
    }
    //example.mail@microsoft123.com,org,in,co,app
    myForm() {
      this.requiredForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
      })
    }

}
