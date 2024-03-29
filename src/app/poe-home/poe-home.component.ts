import { Component } from '@angular/core';
import { Poe } from '../home/types/poe.type';
import { PoeService } from './services/poe.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poe-home',
  templateUrl: './poe-home.component.html',
  styleUrl: './poe-home.component.scss'
})
export class PoeHomeComponent {
  poes: Array<Poe> = [];
  constructor(private _service: PoeService, private _router: Router ) {}

  ngOnInit(): void {
    this._service
      .findAll()
      .pipe(take(1))
      .subscribe((poes: Poe[]) => {
        this.poes = poes;
      });
  }

  redirectToAddPoe(): void {
    this._router.navigate(['/add-poe']);
  }

  redirectToHome(): void {
    this._router.navigate(['/home']);
  }

}
