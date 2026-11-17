import { Component, inject, input } from '@angular/core';
import { Contato } from '../contato';
import { AgendaService } from '../agenda-service';


@Component({
  selector: 'app-exibe-contatos',
  imports: [],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss',
})
export class ExibeContatos {
   protected readonly agenda = inject(AgendaService)
}
