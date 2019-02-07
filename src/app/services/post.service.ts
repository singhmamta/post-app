import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Post Service specific to CRUD operations on posts
 */
@Injectable()
export class PostService extends DataService {
  constructor(http: HttpClient) {
    super('https://hn.algolia.com/api/v1/search_by_date?tags=story', http);
   }
}
