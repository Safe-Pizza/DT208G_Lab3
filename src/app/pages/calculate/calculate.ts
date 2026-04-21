import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.html',
  styleUrl: './calculate.scss',
})
export class Calculate {
  //variabler
  numLenght: number = 0;
  numTemp: number = 0;
  resultLenght: string = "";
  resultTemp: string = "";
  unitTemp: string = "";
  unitLength: string = "";

  //funktioner
  calcCelToFarenheit(): void { //konvertera celsius till farenheit
    //kontroll om 0
    if (this.numTemp === 0) return;

    this.resultTemp = (this.numTemp * 1.8 + 32).toFixed(0);
    this.unitTemp = "farenheit";
  }

  calcFarToCelsius(): void { //konvertera farenheit till celsius
    //kontroll om 0
    if (this.numTemp === 0) return;

    this.resultTemp = ((this.numTemp - 32) / 1.8).toFixed(0);
    this.unitTemp = "celsius";
  }

  calcFotToMeter(): void { //konvertera fot till meter
    //kontroll om 0
    if (this.numLenght === 0) return;

    this.resultLenght = (this.numLenght * 0.3048).toFixed(2);
    this.unitLength = "meter";
  }

  calcMeterToFot(): void { //kovertera meter till fot
    //kontroll om 0
    if (this.numLenght === 0) return;

    this.resultLenght = (this.numLenght * 3.28).toFixed(2);
    this.unitLength = "fot";
  }

  //bild
  calculateImage = "/images/images_calculate.jpg";
}
