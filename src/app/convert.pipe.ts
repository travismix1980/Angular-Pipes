import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  private kilometers = 1.609344;
  private meters = 1609.344;

  transform(value: any, ...args: unknown[]): string | number {
    if (!value) {
      return '';
    }

    switch (args[0]) {
      case 'm':
        return value * this.meters;
      case 'k':
        return value * this.kilometers;
      default:
        throw new Error('Unit not supported');
    }
  }
}
