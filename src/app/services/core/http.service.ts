import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){}

  private getAuthorizationHeader(userToken?: any) {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'});

    if (userToken) {
      headers.set('Authorization', `Bearer ${userToken}`);
      headers.set('userToken', `${userToken}`);
    }
    headers.set('Accept', 'application/json');

    return headers;
  }

  private getHttpOptions(params?: any, userToken?: any) {
    const httpOptions = {
      headers: this.getAuthorizationHeader(userToken),
      params
    };
    return httpOptions;
  }

  private getAddress(endPoint: string) {
    return (`${environment.address}/${endPoint}`);
  }

  private async responsePromise(result: any) {
    return new Promise((resolve, reject) => {
      result.subscribe((data: any) => {
        resolve(data);
      },
      (err: any) => {
        reject(err);
      });
    });
  }

  async get(endPoint: string, params?: any, userToken?: any){
    const result = this.http.get(this.getAddress(endPoint), this.getHttpOptions(params, userToken));
    return this.responsePromise(result);
  }

  async getCustomUrl(url: string, params?: any, userToken?: any) {
    const result = this.http.get(url, this.getHttpOptions(params, userToken));
    return this.responsePromise(result);
  }

  async delete(endPoint: string, params?: any, userToken?: any) {
    const result = this.http.delete(this.getAddress(endPoint), this.getHttpOptions(params, userToken));
    return this.responsePromise(result);
  }

  async post(endPoint: string, body: any, params?: any, userToken?: any) {
    const result = this.http.post(this.getAddress(endPoint), body, this.getHttpOptions(params, userToken));
    return this.responsePromise(result);
  }

  async put(endPoint: string, body?: any, params?: any, userToken?: any) {
    const result = this.http.put(this.getAddress(endPoint), body, this.getHttpOptions(params, userToken));
    return this.responsePromise(result);
  }
}
