import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';


@Component({
    selector: 'app-agregafirmante',
    //standalone: false,
    templateUrl: './agregafirmante.component.html',
    styleUrl: './agregafirmante.component.css',
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgregafirmanteComponent {

@Output()
public onNewCharacter: EventEmitter<Character>= new EventEmitter();



public character: Character={
name:'',
power:0
  };

emitCharacter():void {
//console.log(this.character);
if (this,this.character.name.length===0) return;

this.onNewCharacter.emit(this.character);
this.character = { name: '', power: 0 };
//this.character.name='';
//this.character.power=0;

}


 }
