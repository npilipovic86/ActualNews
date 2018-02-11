import { Injectable } from '@angular/core';
import { Vest } from '../model/vest';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Page } from 'app/model/page';
import { Kategorija } from 'app/model/kategorija';


@Injectable()
export class VestService {


  readonly path = 'api/tiding';


  constructor(private httpClient: HttpClient) { }

  getVesti(): Observable<Vest> {
    return this.httpClient.get(this.path) as Observable<Vest>;
  }



  getVestiPage(page: number): Observable<Page<Vest>> {
    let params = new HttpParams();
    params = params.append('page', page.toString()).append('size', '5');
    return this.httpClient.get(this.path, { params: params }) as Observable<Page<Vest>>;
  }

  saveVest(meniItem: Vest): Observable<Vest> {
    let params = new HttpParams();
    params = params.append('Content-Type', 'application/json');
    if (meniItem.id === undefined) {
      return this.httpClient.post(this.path, meniItem, { params }) as Observable<Vest>;
    }
    else {
      return this.httpClient.put(this.path + '/' + meniItem.id, meniItem, { params }) as Observable<Vest>;
    }
  }

  deleteVest(meniItem: Vest) {
    return this.httpClient.delete(this.path + '/' + meniItem.id);
  }


  filterByNameAndKategorija(name: string, kategorija: Kategorija, page: number): Observable<Page<Vest>> {
    // var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let params = new HttpParams();
    params = params.append('page', page.toString()).append('size', '7');
    if (kategorija) {
      return this.httpClient.get(this.path + '/' + kategorija.id + '/?name=' + name, { params }) as Observable<Page<Vest>>;
    }
    else {
      return this.httpClient.get(this.path + '/' + '/?name=' + name, { params }) as Observable<Page<Vest>>;
    }
  }

}
