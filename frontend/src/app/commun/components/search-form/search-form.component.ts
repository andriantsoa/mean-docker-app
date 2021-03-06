import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Metier } from '../../interfaces/metier.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  public form = new FormGroup({
    keyword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl(''),
    advanced: new FormControl({} as any)
  });

  filteredMetiers: Observable<Metier[]>;

  metiers: Metier[] = [
    {
      name: 'Developpeur',
      population: 'Web, Mobile',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Commerciale',
      population: 'Informatique, Industrie',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Comptable',
      population: 'Finance et budget',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Chef de projet',
      population: 'BTP, et Architecture',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  public get f(): any {
    return this.form.controls;
  }

  public submit(): void {
    alert(this.form.status);
    if (this.form.status === 'VALID') {
      alert(this.form.value);
    }
  }

  public initForm(): void {
    this.form.setValue({
      keyword: 'Hardik Savani',
      city: 'itsolutionstuff@gmail.com',
      advanced: 'This is testing from itsolutionstuff.com'
    });
  }

  public resetForm(): void {
    this.form.reset({ keyword: '', city: '', advanced: '' });
  }

  constructor() {
    this.filteredMetiers = this.form.controls.keyword.valueChanges
      .pipe(
        startWith(''),
        map(metier => metier ? this.filterListMetiers(metier) : this.metiers.slice())
      );
  }

  private filterListMetiers(value: string): Metier[] {
    const filterValue = value.toLowerCase();
    return this.metiers.filter(metier => metier.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
