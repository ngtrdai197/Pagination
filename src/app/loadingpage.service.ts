import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class LoadingPageService {
    constructor(private http: HttpClient){}

    getDataPage(page:number){
        return this.http.get(`http://localhost:8088/product/api/products?page=${page}`);
    }
}