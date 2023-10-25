import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/characterList.interface';

@Component({
  selector: 'app-people-item-component',
  templateUrl: './people-item-component.component.html',
  styleUrls: ['./people-item-component.component.css']
})
export class PeopleItemComponentComponent {
@Input() character!: Character;
@Output() characterClick = new EventEmitter<Character>();

setCharacter(){
  this.characterClick.emit(this.character);
}

getCharacterPhotoURL(){
  let characterId = this.character.url.split("/").reverse()[1];
  return 	`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
}
}
