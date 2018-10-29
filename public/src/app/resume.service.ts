import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private _http: HttpClient) { }

  sendEmail(data, cb){
    this._http.post('https://formcarry.com/s/-Q7MUHYjnlP', data, {responseType: 'text'})
      .subscribe(data => cb(data));
      console.log("Sent!");
  }
}
