import { Component, signal } from '@angular/core';
import { AdicionaContato } from './adiciona-contato-usando-service/adiciona-contato';

@Component({
  selector: 'app-root',
  imports: [ AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Agenda-tsi2');
}
