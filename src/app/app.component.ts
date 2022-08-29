import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor( private fb : FormBuilder){}
 
  myGroup = this.fb.group({
    firstName : new FormControl(' ', [Validators.required, Validators.minLength(10)]),
    lname: new FormControl(' ',[Validators.required, Validators.maxLength(5)]),
    id : new FormControl(' ')
  })
  


/*
  myGroup =new FormGroup({
    firstName : new FormControl('ekta'),
    lname: new FormControl(''),
    id : new FormControl('')
    
 
  });
  */
  
  login(){
    console.log(this.myGroup.value);
     
  }
  title ='ekta yadav'

   
}
