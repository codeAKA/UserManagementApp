import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fb.group({
      userName: [''],
      name: [''],
      surname: [''],
      email: [''],
      enable: [Boolean]
    });
   }

  ngOnInit(): void {
  }

  closeDialog() {

  }

  save() {

  }

}
