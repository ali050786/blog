import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  

  constructor(private http: HttpClient) {

  }

  public getData(model){
    return  this.http.get(`http://localhost:3001/api/${model}`)
  }

  public getDataById(model, modelId) {
    return  this.http.get(`http://localhost:3001/api/${model}/${modelId}`)
  }


  public postData(model, data) {
    return  this.http.post(`http://localhost:3001/api/${model}`, data )
  }

  public putData(model,modelId, data) {
    return  this.http.put(`http://localhost:3001/api/${model}/${modelId}`, data )
  }

  public deleteData(model,modelId) {
    return  this.http.delete(`http://localhost:3001/api/${model}/${modelId}`)
  }



}
