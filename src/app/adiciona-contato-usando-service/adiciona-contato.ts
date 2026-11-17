import { Component, inject } from '@angular/core';
import { Contato, TipoContato } from '../contato';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExibeContatos } from '../exibe-contatos/exibe-contatos';
import { AgendaService } from '../agenda-service';

interface OpcoesSelect {
  id: number
  value: TipoContato
}
@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule, ExibeContatos],
  providers: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato {
  formContato: FormGroup
  readonly fb = inject(FormBuilder)
  protected readonly agenda = inject(AgendaService)

  readonly SELECT_TIPO: OpcoesSelect[] = [
    { id: 1, value: 'Amigo(a)'},
    { id: 2, value: 'IFRN'},
    { id: 3, value: 'Trabalho'},
    { id: 4, value: 'Família'},
    { id: 5, value: 'Outro'}

  ]

  constructor() {
    this.formContato = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tel: ['', [Validators.required]],
      tipo: ['Amigo(a)', [Validators.required]]
    })
  }

  adicionar() {
    let form = this.formContato.value
    let contato = new Contato(
      form.nome, form.tel, form.tipo as TipoContato)
    
    this.agenda.adicionar(contato)
  }
}

