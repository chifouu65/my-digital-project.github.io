import {Component, inject} from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {HeaderService} from "../../services/header.service";
import {associations$} from "../../../assets/config/data";
import {NgForOf, TitleCasePipe} from "@angular/common";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-view-associations',
  standalone: true,
    imports: [ButtonComponent, MatGridListModule, TitleCasePipe, NgForOf],
  templateUrl: './view-associations.component.html',
  styleUrl: './view-associations.component.css'
})
export class ViewAssociationsComponent {

  constructor(headerService: HeaderService) {
    headerService.get().set('associations')
  }

  helperService= inject(ViewHelperService)

  associations = associations$
  protected readonly String = String;
}
