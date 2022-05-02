
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'json'})
export class JsonPipe implements PipeTransform {
  transform(value: any, exponent = 1): string {
    return JSON.stringify(value)
  }
}
