import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UpdateUserDto } from '../models/update-user.dto';
import { UserDto } from '../models/user.dto';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Observable<UserModel[]>;
  displayedColumns = ['Username', 'Name', 'Surname', 'E-mail', 'Enable', 'Role', 'Registration date', 'Actions'];

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.users$ = this.homeService.getAllUsers();
  }

  openAddUserDialog(user?: UpdateUserDto): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-dialog-class';
    dialogConfig.height = '500px';
    dialogConfig.width = '400px';
    // if update User with PUT operation
    dialogConfig.data = user ? { ...user } : {};

    const dialogRef = this.dialog.open(AddUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        const dataEnable = (data && data.enable === 'yes') ? true : false;
        // if update User with PUT operation
        if (user) {
          this.homeService.updateUser({...data, enable: dataEnable}, user.id);
        } else {
          // if create User with POST operation
          const newUser = {...data, enable: dataEnable} as UserDto;
          // const newUser = {
          //   username: data.userName,
          //   name: data.name,
          //   surname: data.surname,
          //   email: data.email,
          //   registrationDate: new Date(),
          //   enable: dataEnable
          // } as UserDto;
          this.homeService.addUser(newUser).subscribe(
            u => console.log('Dialog output:', u)
          );
        }
      }
    );

  }

}
