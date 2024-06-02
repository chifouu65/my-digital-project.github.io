import {Component, effect, HostListener, inject, input, signal} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    MatButton,
    MatMenu,
    MatMenuItem,
    NgOptimizedImage,
    MatMenuTrigger,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatToolbarRow,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  type = input<boolean>(true) // if true its home header else it's other....

  router = inject(Router)

  modalIsOpen = signal(false)

  dialog = inject(MatDialog)

  navOutBanner = signal(false)

  windowHeight = signal(0)

  constructor() {
    effect(() => {
      console.log(this.navOutBanner(), ' change navOutBanner')
    })
  }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
     this.windowHeight.set(window.innerHeight)

    if (!this.navOutBanner() && window.scrollY >= this.windowHeight()) {
      this.navOutBanner.set(true)
    } else if (this.navOutBanner() && window.scrollY <= this.windowHeight()) {
      this.navOutBanner.set(false)
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: 'cvvfeve',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:', result);
    });
  }

  scroll(id: string) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }
}
