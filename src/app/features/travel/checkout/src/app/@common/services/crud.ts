import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUtil } from './../utils/api.util';

const prefix = ApiUtil.prefixes.local;

export class CrudService<I, ID = string, F = any> {
  constructor(protected http: HttpClient, protected endpoint: string) {}

  public list(filters?: F): Observable<I[]> {
    let params = new HttpParams();

    if (filters) {
      Object.keys(filters).forEach((p) => (params = params.append(p, (filters as any)[p])));
    }

    return this.http.get<I[]>(`${prefix}/${this.endpoint}`, {
      params
    });
  }

  public getByid(id: ID): Observable<I> {
    const headers = new HttpHeaders();
    return this.http.get<I>(`${prefix}/${this.endpoint}/${id}`, { headers });
  }

  public create(data: Omit<I, 'id'>): Observable<any> {
    const headers = new HttpHeaders();

    return this.http.post<I>(`${prefix}/${this.endpoint}`, data, { headers });
  }

  public update(data: Omit<I, 'id'>, id: ID): Observable<any> {
    const headers = new HttpHeaders();

    return this.http.put<I>(`${prefix}/${this.endpoint}/${id}`, data, { headers });
  }

  public remove(id: ID): Observable<any> {
    const headers = new HttpHeaders();

    return this.http.delete<any>(`${prefix}/${this.endpoint}/${id}`, { headers });
  }
}
