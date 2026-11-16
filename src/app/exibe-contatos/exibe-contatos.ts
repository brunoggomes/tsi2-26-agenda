import { Component, input } from '@angular/core';
import { Contato } from '../contato';


@Component({
  selector: 'app-exibe-contatos',
  imports: [],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss',
})
export class ExibeContatos {
   contatosAdicionados = input<Contato[]>([])
}
