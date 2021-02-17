import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onAmountChange(amount: string): void{
    this.amount = parseFloat(amount);
  }

  onDateChange(date: string): void{
    this.date = date;
  }

  onNameChange(name: string): void {
    this.name = name;
  }
}
