import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe',
  standalone: true
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {


    if (value.includes("USD")) {
      let newValue = value.split("USD");
      value = newValue[0] = "INR" + newValue[1];
    }
    return value;
  }
}
 