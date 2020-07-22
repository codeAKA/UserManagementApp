import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from './../models/user-model';

@Injectable()
export class HomeService {

  private userUrl = environment.apiUrl + environment.apiEndpoints.user;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.userUrl)
    .pipe(map(result => {
      return result.map(item => {
        return {
          ...item
        } as UserModel;
      });
    }));
  }

}
