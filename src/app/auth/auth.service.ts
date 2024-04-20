import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/IRegisterUser';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;

  isAuthenticated$: Observable<boolean>;

  private apiUrl = 'https://blank-51bdbef.payloadcms.app/api';
  constructor(private httpClient: HttpClient) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  public register(data: IUser): Observable<any> {
    return this.httpClient.post<IUser>(`${this.apiUrl}/users`, data);
  }

  public login(data: IUser): Observable<any> {
    return this.httpClient.post<IUser>(`${this.apiUrl}/users/login`, data).pipe(
      tap((resp: any) => {
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  public logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
