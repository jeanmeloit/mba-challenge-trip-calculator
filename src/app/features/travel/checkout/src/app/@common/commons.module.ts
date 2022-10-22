import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { MenubarModule } from 'primeng/menubar';

const PRIME_NG = [
  CardModule,
  ButtonModule,
  DropdownModule,
  InputNumberModule,
  RadioButtonModule,
  SliderModule,
  MenubarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...PRIME_NG],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ...PRIME_NG]
})
export class CommonsModule {}
