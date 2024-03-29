import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternService implements IService<Intern> {
  private _interns: Array<Intern> = [];

  constructor(private _httpClient: HttpClient) {}

  add(item: Intern): Observable<Intern> {
    return this._httpClient.post<Intern>('http://localhost:3000/interns', item);
  }

  get interns(): Array<Intern> {
    return this._interns;
  }
  

  findAll(): Observable<Intern[]> {
    return this._httpClient.get<Intern[]>('http://localhost:3000/interns')
    .pipe(
      map((interns: Intern[]) => {
        return interns.sort((i1: Intern, i2: Intern) => {
          return i1.lastname.localeCompare(i2.lastname)
        })
      })
    )
  }
}
