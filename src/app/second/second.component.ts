import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  heroes = ['Iron Man', 'Spiderman', 'Black Panther', 'Ant Man'];
  btnDisable = false;
  inputHero = null;
  adding = false;


  constructor() { }


  changeHero() {
    this.heroes[this.heroes.length] = this.inputHero;
    this.inputHero = null;
    this.adding = false;
  }

  deleteHero(hero) {
    // this.num = this.heroes.findIndex(hero);
    console.log(hero);

    var i;
    for (i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i] === hero) {
        this.heroes.splice(i, 1);
      }
    }
  }

  showTextInput() {
    this.adding = !this.adding;
  }

  ngOnInit() {
  }

}
