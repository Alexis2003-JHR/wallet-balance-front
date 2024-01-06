import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        const url = 'http://localhost:8080/check-saldos';
        return this.http.get(url);
    }
}