import {Component, inject} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {ViewHelperService} from "../../services/view-helper.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ButtonComponent} from "../../components/button/button.component";

@Component({
  selector: 'app-view-error',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './view-error.component.html',
  styleUrl: './view-error.component.css'
})
export class ViewErrorComponent {
  headerService = inject(HeaderService);
  helperService = inject(ViewHelperService)

  constructor() {
    this.headerService.get().set('error')
  }

  async goHome() {
    await this.helperService.navigateTo("")
  }
}
