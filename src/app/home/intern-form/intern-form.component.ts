import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss'
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.internForm = this._formBuilder.group({
      lastname: [
        '', //valeur par défaut.
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      firstname: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  onSubmit(): void {
    this._internService.add(this.internForm.value)
    this._router.navigate(['/home'])
  }
}
