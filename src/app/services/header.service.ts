import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  private title = signal<'home' | string>('home')

  get() {
    return this.title
  }

}
