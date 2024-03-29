import { Component } from '@angular/core';
import { Poe } from '../home/types/poe.type';
import { PoeService } from './services/poe.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-poe-home',
  templateUrl: './poe-home.component.html',
  styleUrl: './poe-home.component.scss'
})
export class PoeHomeComponent {
  poes: Array<Poe> = [];
  constructor(private _service: PoeService ) {}

  ngOnInit(): void {
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((poes: Poe[]) => {
        this.poes = poes;
      });
  }

}
