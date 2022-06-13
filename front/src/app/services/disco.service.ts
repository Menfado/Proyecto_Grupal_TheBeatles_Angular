import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  constructor(private httpClient: HttpClient) { }

  public discoData = {
    id: "",
    author: "",
    title: "",
    year: "",
    cover: ""
  }

  public getDiscos() {
    return this.httpClient.get("http://localhost:3000/albums")
  }
}

