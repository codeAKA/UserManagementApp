import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) {
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

  closeDialog(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.addUserForm.value);
  }

}
