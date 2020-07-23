import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Observable<UserModel[]>;

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.users$ = this.homeService.getAllUsers();
  }

  openAddUserDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(AddUserDialogComponent, dialogConfig);

  }

}
