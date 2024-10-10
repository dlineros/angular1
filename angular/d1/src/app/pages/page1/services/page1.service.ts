import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({
    providedIn: 'root'

  })
export class Page1Service {

  public characters: Character[]=[
    {
    id:uuid(),
    name:'padre1',
    power:1000
    },
    {
      id:uuid(),
      name:'padre2',
      power:2000
      }

   ];

   addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

//onDeleteCharacter(index:number){
//this.characters.splice(index,1);
//}


deleteCharacterById(id:string){
this.characters=this.characters.filter(character=>character.id!==id);



}

}
