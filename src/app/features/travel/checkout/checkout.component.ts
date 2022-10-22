import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { City, Country } from './interfaces/country.interface';
import { CountryService } from './services/country.service';

@Component({
  selector: 'jsh-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  public form: FormGroup;
  public countries: Country[];

  public showingSummary = false;

  constructor(private service: CountryService) {}

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

  public getOrigin(): string {
    const { originCountry, originCity } = this.form.getRawValue();
    return `${originCountry?.country} (${originCity?.city})`;
  }

  public getDestination(): string {
    const { destinationCountry, destinationCity } = this.form.getRawValue();
    return `${destinationCountry?.country} (${destinationCity?.city})`;
  }

  public getDistance(): number {
    return this.distance(
      this.originLatitude() || 0,
      this.originLongitude() || 0,
      this.destinationLatitude() || 0,
      this.destinationLongitude() || 0
    );
  }

  private distance(
    originLatitude: number,
    originLongitude: number,
    destinationLatitude: number,
    destinationLongitude: number
  ) {
    const EARTH_RADIUS = 6_371.071; // Earth
    const diffLatitudeRadians = this.degreesToRadians(destinationLatitude - originLatitude);
    const diffLongitudeRadians = this.degreesToRadians(destinationLongitude - originLongitude);

    const originLatitudeRadians = this.degreesToRadians(originLatitude);
    const destinationLatitudeRadians = this.degreesToRadians(destinationLatitude);
    const kmDistance =
      2 *
      EARTH_RADIUS *
      Math.asin(
        Math.sqrt(
          Math.sin(diffLatitudeRadians / 2) * Math.sin(diffLatitudeRadians / 2) +
            Math.cos(originLatitudeRadians) *
              Math.cos(destinationLatitudeRadians) *
              Math.sin(diffLongitudeRadians / 2) *
              Math.sin(diffLongitudeRadians / 2)
        )
      );
    return kmDistance;
  }

  private degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180.0;
  }

  private originLatitude(): number {
    const { originCity } = this.form.getRawValue();
    return (originCity as City)?.latitude;
  }

  private originLongitude(): number {
    const { originCity } = this.form.getRawValue();
    return (originCity as City)?.longitude;
  }

  private destinationLatitude(): number {
    const { destinationCity } = this.form.getRawValue();
    return (destinationCity as City)?.latitude;
  }

  private destinationLongitude(): number {
    const { destinationCity } = this.form.getRawValue();
    return (destinationCity as City)?.longitude;
  }

  public getClassDescription(): string {
    const { class: fligthClass } = this.form.getRawValue();
    return fligthClass === 'ECONOMIC' ? 'Economic class' : 'Executive class';
  }

  public getAdultsCosts(): number {
    let costs = 0;

    if (this.form.valid) {
      const countryMultiplier = this.isSameCountry() ? 0.3 : 0.5;
      const travelMultiplier = this.isEconomic() ? 1 : 1.8;

      costs = this.getDistance() * countryMultiplier * travelMultiplier * this.form.value.adults;
    }

    return costs;
  }

  public getChildrenCosts(): number {
    let costs = 0;

    if (this.form.valid) {
      const countryMultiplier = this.isSameCountry() ? 0.15 : 0.25;
      const travelMultiplier = this.isEconomic() ? 1 : 1.4;

      costs = this.getDistance() * countryMultiplier * travelMultiplier * this.form.value.children;
    }

    return costs;
  }

  private isSameCountry(): boolean {
    const { originCountry, destinationCountry } = this.form.getRawValue();
    return originCountry === destinationCountry;
  }

  private isEconomic(): boolean {
    const { class: fligthClass } = this.form.getRawValue();
    return fligthClass === 'ECONOMIC';
  }

  public getDiscountedValuePerMiles(): number {
    const { miles } = this.form.getRawValue();
    const discountPerMile = 0.02;

    let discount = 0;

    if (miles > 0) {
      discount = discountPerMile * miles;
    }

    return discount;
  }

  public getTotalValue(): number {
    const totalWithoutDiscount = this.getAdultsCosts() + this.getChildrenCosts();
    const discount = this.getDiscountedValuePerMiles();

    return totalWithoutDiscount - discount;
  }

  public checkout(): void {
    if (!this.canCheckout()) return;

    this.showingSummary = true;
  }

  private canCheckout(): boolean {
    const { adults, originCity, destinationCity } = this.form.getRawValue();
    const totalWithoutDiscount = this.getAdultsCosts() + this.getChildrenCosts();

    return (
      adults > 0 && originCity !== destinationCity && totalWithoutDiscount > this.getDiscountedValuePerMiles()
    );
  }

  public reset(): void {
    this.showingSummary = false;
    this.form = this.createForm();
  }
}
