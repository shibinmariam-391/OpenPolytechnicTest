import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<any>("../assets/productList.json")
    .pipe(map((res)=>{
      return res;
    }))
  }
}

