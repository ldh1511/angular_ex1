import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from '../models/note';
@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    headers = { 'Authorization': '3fef9c7409b2f7a45b805096dd7517ae' };
    getCategory(): Observable<Category> {
        return this.http.get('https://api.mazii.net/api/get-category/0/100',
            { headers: { 'Authorization': '3fef9c7409b2f7a45b805096dd7517ae' } }
        )
            .pipe(
                map((response: any) => response),
            )
    }
    getNote(id: number): Observable<Note> {
        return this.http.get(`https://api.mazii.net/api/get-note/${id}/0/100`,
            { headers: { 'Authorization': '3fef9c7409b2f7a45b805096dd7517ae' } }
        )
            .pipe(
                map((response: any) => response),
            )
    }
}