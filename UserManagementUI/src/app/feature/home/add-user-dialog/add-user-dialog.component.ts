import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateUserDto } from '../../models/update-user.dto';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  addUserForm: FormGroup;
  // if update User with PUT operation
  userToUpdate: UpdateUserDto | null;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.addUserForm = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      enable: ['', Validators.required]
    });
    // if update User with PUT operation
    this.userToUpdate = data ? { ...data } : null;
  }

  ngOnInit(): void {
    // if update User with PUT operation
    if (this.userToUpdate) {
      this.addUserForm.setValue({
        username: this.userToUpdate.username,
        name: this.userToUpdate.name,
        surname: this.userToUpdate.surname,
        email: this.userToUpdate.email,
        enable: this.userToUpdate.enable === true ? 'yes' : 'false'
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.addUserForm.value);
  }

}
