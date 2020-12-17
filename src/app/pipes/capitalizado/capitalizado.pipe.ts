import { Pipe, PipeTransform } from '@angular/core';
// Decorador
@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // Un Pipe siempre recibe argumentos
  // "value" es el valor o la variable antes de entrar al pipe
  // , edad: number, activo: boolean, mensaje: string
  transform(value: string, todas: true): string {
    console.log(value.toLowerCase());
    value = value.toLowerCase();
    
    // Dividir el string (value) en palabras
    let palabras = value.split(' ');
    console.log(palabras);

    // Verificar cuando "todas" viene en TRUE, se capitaliza cada palabra del string
    if(todas){
      palabras = palabras.map(palabra =>{
        return palabra[0].toUpperCase() + palabra.substr(1);
      });
    }else{
      palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
    }

    // console.log({edad, activo, mensaje});
    return palabras.join(' ');
  }

}
