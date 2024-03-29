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
      poeName: [
        '', //valeur par défaut.
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      duration: [
        '',
        [
          Validators.required,
          Validators.min(1)
        ]
      ]
    })
  }

  onSubmit(): void {
    this._poeService.add(this.poeForm.value)
      .subscribe((poe: Poe) => {
        this._router.navigate(['/poe'])
      })
  }

}
