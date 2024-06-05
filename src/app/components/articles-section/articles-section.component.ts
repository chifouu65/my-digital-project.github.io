import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [ButtonComponent, MatIcon, NgFor],
  templateUrl: './articles-section.component.html',
  styleUrl: './articles-section.component.css'
})
export class ArticlesSectionComponent {
  articles = input.required<any[]>()
}
