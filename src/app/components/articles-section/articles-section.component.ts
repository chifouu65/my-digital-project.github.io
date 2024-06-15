import {Component, inject, input} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import {RouterLink} from "@angular/router";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [ButtonComponent, MatIcon, NgFor, RouterLink],
  templateUrl: './articles-section.component.html',
  styleUrl: './articles-section.component.css'
})
export class ArticlesSectionComponent {
  articles = input.required<any[]>()

  helperService = inject(ViewHelperService)
}
