import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(enumValue: any): string[] | undefined {
    if (!enumValue) {
      return undefined; // Handle case when input is undefined or null
    }

    // Handle both string and numeric enums (assuming enum values are unique)
    const enumKeys =
      typeof enumValue[0] === 'string'
        ? Object.keys(enumValue)
        : Object.values(enumValue);

    return enumKeys.map((key) => {
      // Cast key to string to prevent potential arithmetic operations on numeric keys
      return enumValue[String(key)]; // Extract key-value pairs
    });
  }
}
