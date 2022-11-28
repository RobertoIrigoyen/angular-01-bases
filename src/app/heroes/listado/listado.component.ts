import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string[] = ['Wolverine', 'Batman', 'Green Lantern', 'Spiderman'];
  heroesBorrados: string[] = [''];
  heroeBorrado : string = '';
  borrarHeroe() {
    console.log('borrando heroe...');

    this.heroeBorrado = this.heroes.shift() || '';
    return this.heroesBorrados.push(this.heroeBorrado);
    
  }

}
