import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoeService } from '../services/poe.service';
import { Poe } from '../../home/types/poe.type';

@Component({
  selector: 'app-poe-form',
  templateUrl: './poe-form.component.html',
  styleUrl: './poe-form.component.scss'
})
export class PoeFormComponent {
  public poeForm: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _poeService: PoeService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.poeForm = this._formBuilder.group({
      name: [
        '', //valeur par défaut.
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  onSubmit(): void {
  }

}
