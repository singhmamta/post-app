import { NotFoundError } from '../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { map, catchError } from 'rxjs/operators';

/**
 * Generic service API
 */

@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map((res: any) => {
          if (!res.hits) {
            throw new Error('Value expected!');
          }
          return res.hits;
        }),
        catchError(this.handleError)
      );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      map((res: any) => {
        if (!res.hits) {
          throw new Error('Value expected!');
        }
        return res.hits;
      }),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(
      map((res: any) => {
        if (!res.hits) {
          throw new Error('Value expected!');
        }
        return res.hits;
      }),
      catchError(this.handleError)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      map((res: any) => {
        if (!res.hits) {
          throw new Error('Value expected!');
        }
        return res.hits;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}
