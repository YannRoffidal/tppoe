import { Injectable } from '@angular/core';
import { Intern } from '../types/intern.type';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  private _interns: Array<Intern> = [
    {
      lastname: 'ARNAUD',
      firstname: 'Manon'
    },
    {
      lastname: 'AUBERT',
      firstname: 'Jean-luc'
    },
    {
      lastname: 'BERNARDIN',
      firstname: 'Bruno'
    },
    {
      lastname: 'BERTON',
      firstname: 'Dorine'
    },
    {
      lastname: 'BETTAN',
      firstname: 'Frédéric'
    },
    {
      lastname: 'BONNET',
      firstname: 'Fabien'
    },
    {
      lastname: 'CHENU',
      firstname: 'Guillaume'
    },
    {
      lastname: 'DE BOUARD',
      firstname: 'Anne-claire'
    },
    {
      lastname: 'DUMONET',
      firstname: 'Vincent'
    },
    {
      lastname: 'EL HACHIMI ALAOUI',
      firstname: 'Imane'
    },
    {
      lastname: 'GORMAND',
      firstname: 'Loïc'
    },
    {
      lastname: 'PROVO',
      firstname: 'Sabine'
    },
    {
      lastname: 'ROCK',
      firstname: 'Bertrand'
    },
    {
      lastname: 'ROFFIDAL',
      firstname: 'Yann'
    },
    {
      lastname: 'TROUCHE',
      firstname: 'Boris'
    },
    {
      lastname: 'TURTI',
      firstname: 'Thomas'
    }

  ]

  constructor() { }

  get interns(): Array<Intern> { 
    return this._interns
  }
}
