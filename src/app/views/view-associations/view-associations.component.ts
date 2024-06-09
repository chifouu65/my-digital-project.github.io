import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-view-associations',
  standalone: true,
  imports: [ButtonComponent, MatGridListModule],
  templateUrl: './view-associations.component.html',
  styleUrl: './view-associations.component.css'
})
export class ViewAssociationsComponent {

  associations = [
    {
      id: 1,
      name: "Lolo",
      img: {
        url: 'assets/images/associations/image-5.png',
        alt: "",
        width: '300',
        height: '300'
      }
    },
    {
      id: 1,
      name: "ez one tap",
      img: {
        url: 'assets/images/associations/image-6.png',
        alt: "",
        width: '250',
        height: '250'
      },
    },
    {
      id: 1,
      name: "Lolo",
      img: {
        url: 'assets/images/associations/image-5.png',
        alt: "",
        width: '300',
        height: '300'
      }
    },
    {
      id: 1,
      name: "ez one tap",
      img: {
        url: 'assets/images/associations/image-6.png',
        alt: "",
        width: '250',
        height: '250'
      },
    },
    {
      id: 1,
      name: "Lolo",
      img: {
        url: 'assets/images/associations/image-5.png',
        alt: "",
        width: '300',
        height: '300'
      }
    },
    {
      id: 1,
      name: "ez one tap",
      img: {
        url: 'assets/images/associations/image-6.png',
        alt: "",
        width: '250',
        height: '250'
      },
    },
    
    
  ]
}
