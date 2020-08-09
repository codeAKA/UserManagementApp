import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UpdateUserDto } from '../models/update-user.dto';
import { UserDto } from '../models/user.dto';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take, share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  users$: Observable<UserModel[]>;
  users: MatTableDataSource<UserModel>;
  displayedColumns = ['Username', 'Name', 'Surname', 'E-mail', 'Enable', 'Role', 'Registration date', 'Actions'];

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.users$ = this.getUsers();
    this.users = new MatTableDataSource([]);
  }

  ngAfterViewInit(): void {
    this.users$.pipe(take(1))
      .subscribe(data => {
        this.users.data = data;
        this.users.sort = this.sort;
      });
  }

  removeUser(id: number): void {
    this.homeService.removeUser(id).subscribe(res => console.log(res));
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
        if (user) {
          const userRegistrationDate = user.registrationDate ? user.registrationDate : new Date();
          const userToUpdate: UpdateUserDto = { ...data, userId: user.userId, enable: dataEnable, registrationDate: userRegistrationDate };

          this.homeService.updateUser(user.userId, userToUpdate).subscribe(
            u => {
              console.log('Dialog output:', u);
              // this.users$ = this.homeService.getAllUsers();
            }
          );
        } else {
          const newUser = { ...data, registrationDate: new Date(), enable: dataEnable } as UserDto;
          this.homeService.addUser(newUser).subscribe(
            u => {
              console.log('Dialog output:', u);
              // this.users$ = this.homeService.getAllUsers();
            }
          );
        }
      }
    );

  }

  getUsers(): Observable<UserModel[]> {
    return this.homeService.getAllUsers().pipe(share());
  }

}
