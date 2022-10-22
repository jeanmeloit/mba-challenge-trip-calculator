import { HttpClient } from '@angular/common/http';
import { CrudService } from '@common/services/crud';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends CrudService<Country> {
  constructor(http: HttpClient) {
    super(http, 'countries');
  }
}
