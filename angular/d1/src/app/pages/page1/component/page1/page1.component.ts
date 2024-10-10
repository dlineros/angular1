import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Page1Service } from '../../services/page1.service';

@Component({
  selector: 'app-page1',
  //standalone: false,
  //imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

  constructor (private page1Service:Page1Service){}

  get characters(): Character[] {
    return [...this.page1Service.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.page1Service.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.page1Service.addCharacter( character );
  }
}
