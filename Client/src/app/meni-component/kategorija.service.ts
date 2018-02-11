
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Kategorija } from 'app/model/kategorija';



@Injectable()
export class KategorijaService {


  readonly path = '/api/categories';

  constructor(private httpClient: HttpClient) { }

  getKategorije(): Observable<Kategorija[]> {
    return this.httpClient.get(this.path) as Observable<Kategorija[]>;
  }

}
