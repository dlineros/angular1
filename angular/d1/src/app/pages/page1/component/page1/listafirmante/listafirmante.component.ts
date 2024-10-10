import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
    selector: 'app-listafirmante',
    //standalone: false,
    //imports: [
    //    CommonModule,
    //],
    templateUrl: './listafirmante.component.html',
    styleUrl: './listafirmante.component.css',
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListafirmanteComponent {

@Input()
public characterList: Character[]=[
    {
      name:'hijo1',
      power:2000
    },
    {
      name:'hijo2',
      power:3000
    }
]


@Output()
public onDelete: EventEmitter<string>= new EventEmitter();


onDeleteCharacter(id?:string): void{
//TODO: Emitir el Id del personaje
if (!id) return;

this.onDelete.emit(id);
}


}
