import {Auth} from '@ngrx/store';

// import {Token} from '';

export class Login {

  let entrada:Auth;

constructor() {
  }

  function entrar(tokenName: string, tokenValue: string) {

    this.entrada.setKey(tokenValue);

    //if(this.entrada == ){
      //return true;
   // }

    return false;
  }
}
