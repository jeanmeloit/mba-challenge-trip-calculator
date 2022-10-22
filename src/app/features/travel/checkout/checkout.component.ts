import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SummaryComponent } from '../summary/summary.component';
import { City, Country } from './interfaces/country.interface';
import { CountryService } from './services/country.service';

@Component({
  selector: 'jsh-checkout',
  templateUrl: './checkout.component.html',
  providers: [MessageService]
})
export class CheckoutComponent implements OnInit {
  public form: FormGroup;
  public countries: Country[];

  public showingSummary = false;

  @ViewChild('summary', { static: true })
  private summary: SummaryComponent;

  constructor(private service: CountryService, private messageService: MessageService) {}

  public ngOnInit(): void {
    this.form = this.createForm();
    this.getCountries();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      originCountry: new FormControl({ value: null, disabled: this.showingSummary }, Validators.required),
      originCity: new FormControl({ value: null, disabled: this.showingSummary }, Validators.required),
      destinationCountry: new FormControl(
        { value: null, disabled: this.showingSummary },
        Validators.required
      ),
      destinationCity: new FormControl({ value: null, disabled: this.showingSummary }, Validators.required),
      adults: new FormControl({ value: 0, disabled: this.showingSummary }, Validators.required),
      children: new FormControl({ value: 0, disabled: this.showingSummary }, Validators.required),
      class: new FormControl({ value: 'ECONOMIC', disabled: this.showingSummary }, Validators.required),
      miles: new FormControl({ value: 0, disabled: this.showingSummary })
    });
  }

  private getCountries(): void {
    this.service.list().subscribe((response) => {
      this.countries = response;
    });
  }

  public getCities(country: Country): City[] {
    if (country) {
      const selectedCountry = this.countries?.find((item) => item.country === country?.country);
      return selectedCountry?.cities as City[];
    } else return [];
  }

  public checkout(): void {
    if (!this.canCheckout()) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'You have broked at least one of the validation rules',
        life: 15000,
        closable: true
      });
      return;
    }

    this.messageService.clear();
    this.showingSummary = true;
  }

  private canCheckout(): boolean {
    const { adults, originCity, destinationCity } = this.form.getRawValue();
    const totalWithoutDiscount = this.summary.getAdultsCosts() + this.summary.getChildrenCosts();

    return (
      adults > 0 &&
      originCity !== destinationCity &&
      totalWithoutDiscount > this.summary.getDiscountedValuePerMiles()
    );
  }

  public reset(): void {
    this.showingSummary = false;
    this.form = this.createForm();
  }
}
