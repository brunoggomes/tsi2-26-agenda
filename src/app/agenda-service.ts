import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  readonly #contatos: Contato[] = []

  adicionar(cc: Contato): boolean {
    if (cc) {
      this.#contatos.push(cc)
      return true
    }
    return false
  }

  obterTodos(): Contato[] {
    /*[...lista] - evita receber a referência
      real à lista*/
    return [...this.#contatos]
  }
}
