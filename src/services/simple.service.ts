import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SimpleService {

    constructor(private http: Http) {}

    echo(data: string) {
        return this.http
            .get(`/echo?data=${data}`)
            .map(resp => resp.text());
    }
}