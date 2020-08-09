import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { UserDto } from '../models/user.dto';
import { UpdateUserDto } from '../models/update-user.dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private userUrl = environment.apiUrl + environment.apiEndpoints.user;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.userUrl)
      .pipe(
        catchError(error => throwError(error.messege)),
        map(result => {
          return result.map(item => {
            return {
              ...item
            } as UserModel;
          });
        }));
  }

  addUser(user: UserDto): Observable<UserModel> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<UserModel>(this.userUrl, user, { headers })
      .pipe(
        catchError(error => throwError(error.messege)),
        map(response => {
          console.log(response);
          return { ...response } as UserModel;
        }),
      );
  }

  updateUser(id: number, user: UpdateUserDto): Observable<UserModel> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<UserModel>(`${this.userUrl}/${id}`, user, { headers })
      .pipe(
        catchError(error => throwError(error.messege)),
        map(response => {
          console.log(response);
          return { ...response } as UserModel;
        })
        );
  }

  removeUser(id: number): Observable<{}> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.userUrl}/${id}`, { headers })
      .pipe(
        catchError(error => throwError(error.messege)
        ));
  }

}
