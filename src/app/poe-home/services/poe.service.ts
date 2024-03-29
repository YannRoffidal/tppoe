import { Injectable } from '@angular/core';
import { IService } from '../../core/interfaces/i-service';
import { Observable, map } from 'rxjs';
import { Poe } from '../../home/types/poe.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PoeService implements IService<Poe> {
  private _poes: Array<Poe> = [];

  constructor(private _httpClient: HttpClient) {}

  add(item: Poe): Observable<Poe> {
    return this._httpClient.post<Poe>('http://localhost:3000/poes', item);
  }

  get poes(): Array<Poe> {
    return this._poes;
  }

  findAll(): Observable<Poe[]> {
    return this._httpClient.get<Poe[]>('http://localhost:3000/poes').pipe(
      map((poes: Poe[]) => {
        return poes.sort((i1: Poe, i2: Poe) => {
          return i1.poeName.localeCompare(i2.poeName);
        });
      })
    );
  }
}
