import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Daredevil'];
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroesNames.pop();
  }
}
