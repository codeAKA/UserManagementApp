import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$: Observable<UserModel[]>;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.users$ = this.homeService.getAllUsers();
  }

}
