import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Add imports
import { of } from 'rxjs/observable/of';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable()
export class UsersService {

  // private baseUrl = 'http://localhost:3000/users';
  users: Array<object> = [  // Add employee object
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];

  constructor() {
   }

  // public getUsers(): Observable<any>{
  //   return this.http.get<any>(this.baseUrl);
  // }

  public getUsers(): Observable<any>{
    return of(this.users)
  }

  findOne(id: string): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }
}
