import {Component, inject, OnInit, signal} from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {ActivatedRoute, Router} from "@angular/router";
import {associations$, IAssociation, sponsors$} from "../../../assets/config/data";
import {JsonPipe, NgIf} from "@angular/common";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {ContactSectionComponent} from "../../components/contact-section/contact-section.component";
import {ButtonComponent} from "../../components/button/button.component";
import {ViewHelperService} from "../../services/view-helper.service";

@Component({
  selector: 'app-view-association',
  standalone: true,
  imports: [
    JsonPipe,
    MatGridList,
    MatGridTile,
    NgIf,
    ContactSectionComponent,
    ButtonComponent
  ],
  templateUrl: './view-association.component.html',
  styleUrl: './view-association.component.css'
})
export class ViewAssociationComponent implements OnInit {

  headerService = inject(HeaderService);
  route = inject(ActivatedRoute);

  id = '';

  associations = associations$;

  association = signal<any | undefined>(undefined)
  helperService = inject(ViewHelperService)

  ngOnInit(): void {
    this.route.params.subscribe((e) => {
      this.id = e['id']
    })

    const filtered = this.associations.filter((value) => {
      console.log(value.id, this.id)
      const res = value.id === Number(this.id);
      console.log(res)
      return res
    });

    this.association.set(filtered[0] as any);


    console.table(this.association())

    if(this.association()?.page_content) {
      this.headerService.get().set('Association : '.concat(this.association().name))
    } else {
      this.headerService.get().set('error')
    }
  }

}
