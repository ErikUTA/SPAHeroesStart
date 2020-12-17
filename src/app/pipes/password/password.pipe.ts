import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, letras: boolean = true): any {

    if(letras){
      value = value.replace(/[a-zA-Z1-9]/gi,'*');
    }

    return value;
  }

}
