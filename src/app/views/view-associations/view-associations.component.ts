import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {HeaderService} from "../../services/header.service";
import {associations$} from "../../../assets/config/data";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-view-associations',
  standalone: true,
  imports: [ButtonComponent, MatGridListModule, TitleCasePipe],
  templateUrl: './view-associations.component.html',
  styleUrl: './view-associations.component.css'
})
export class ViewAssociationsComponent {

  constructor(headerService: HeaderService) {
    headerService.get().set('associations')
  }

  associations = associations$
}
