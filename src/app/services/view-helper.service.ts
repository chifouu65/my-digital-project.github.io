import {inject, Injectable, WritableSignal} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {formGate} from "../../assets/config/form.gate";

@Injectable({
  providedIn: 'root'
})
export class ViewHelperService {

  router = inject(Router)
  http = inject(HttpClient)
  async navigateTo(url: string) {
    try {
      await this.router.navigateByUrl(url);
    } catch (e) {
      console.error(e)
    } finally {
      this.scrollTop();
    }
  }

  scrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  sendForm(data: any, submited: WritableSignal<boolean>) {
    const headers = new HttpHeaders(formGate.headers);
    this.http.post(formGate.url,
      data,
      { 'headers': headers }).subscribe(
      (response : any) => {
        console.log(response);
        if(response.ok) {
          submited.set(true)
        }
      }
    );
  }

}
