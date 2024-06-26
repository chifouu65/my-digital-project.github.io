import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  FooterComponent, HeaderComponent],
  template: `
    <app-header/>
    <main id="main" class="px-8 md:px-0 container mx-auto">
      <router-outlet/>
    </main>
    <app-footer/>
  `,

})
export class AppComponent {
  title = 'my-digital-project';
}
