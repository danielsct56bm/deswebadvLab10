import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})



export class MiDirectivaDirective {

  constructor() { }
  
  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('El elemento ha sido clickeado');
  }
}
