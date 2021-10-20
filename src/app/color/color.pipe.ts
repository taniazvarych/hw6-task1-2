import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hexToRgb'})

export class ColorPipe implements PipeTransform {
  transform(color: string) {
    const hexToRgb = (value: string) => ({
        r:parseInt(`${value[0] ?? 0}${value[1] ?? 0}`,16),
        g:parseInt(`${value[2] ?? 0}${value[3] ?? 0}`,16),
        b:parseInt(`${value[4] ?? 0}${value[5] ?? 0}`,16)
    })
      , rgb = hexToRgb(color)
    return `rgb (${rgb.r}, ${rgb.g }, ${rgb.b})`
  }

}
