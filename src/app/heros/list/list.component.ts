import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public nameHeros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
public deleteHero?: string;

addHero(newHero: string) {
  if (newHero) {
    this.nameHeros.push(newHero);
  }
}

removeLastHero() {
 this.deleteHero =  this.nameHeros.pop();

}


}
