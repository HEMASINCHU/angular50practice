import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expandingcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expandingcard.component.html',
  styleUrls: ['./expandingcard.component.css']
})
export class ExpandingcardComponent {
  activePanel: number = 0;
  panels = [
    {
      id:'Card 1',
      title: 'Wild Forest',
      imageUrl: './assets/img/img1.jpg'
    },
    {
      id: 'Card 2',
      title: 'Explore The World',
      imageUrl: './assets/img/img2.jpg'
    },
    {
      id:'Card3',
      title: 'Sunny Beach',
      imageUrl: './assets/img/img3.jpg'
    },
    {
      id:"Card 4",
      title: 'City on Winter',
      imageUrl: './assets/img/img4.jpg'
    },
    {
      id:"Card 5",
      title: 'Mountains - Clouds',
      imageUrl: './assets/img/img5.jpg'
    },
    
  ];
  setActivePanel(index: number) {
    this.activePanel = index;
  }

}
