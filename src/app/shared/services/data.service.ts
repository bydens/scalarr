import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookModel} from '../models/book.model';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<[BookModel]> {
    return this.http.get<[BookModel]>('https://fakerestapi.azurewebsites.net/api/books');
  }
}
