import {Component, inject, OnInit, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {actualites$} from "../../../assets/config/data";
import {HeaderService} from "../../services/header.service";
import {ActivatedRoute} from "@angular/router";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-view-new',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './view-new.component.html',
  styleUrl: './view-new.component.css'
})
export class ViewNewComponent implements OnInit{

  headerService = inject(HeaderService);
  route = inject(ActivatedRoute);

  id = '';


  actualites = actualites$

  actualite = signal<any | undefined>(undefined)

  ngOnInit(): void {
    this.route.params.subscribe((e) => {
      this.id = e['id']
    })

    const filtered = this.actualites.filter((value) => {
      console.log(value.id, this.id)
      const res = value.id === Number(this.id);
      console.log(res)
      return res
    });

    this.actualite.set(filtered[0] as any);

    this.headerService.get().set('Acutlité : '.concat(this.actualite().title))

  }

}
