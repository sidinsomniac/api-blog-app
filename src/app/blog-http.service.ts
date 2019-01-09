import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RootObject } from './IBlog';

@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {

  public allBlogs = [];
  public currentBlog = [];
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken = 'Mjc4MjVlOTY5M2I3NTE5ZDY1ZWViYzYzMGVjZGMwZWUwMWFhNjkyMmE3M2ExZjZmMmY0MGIwYTg3ZmY0MGIwZTYzYzQ2YmFiZWNhZTI4ZWFjZDExN2E2MjM3MTlhY2MzZmUxMzg4YTgwYjNjMmMzN2Q5NzBhYmE0Y2NiOTJmZGM2ZQ==';

  constructor(private http: HttpClient) { }

  public getAllBlogs(): Observable<RootObject> {
    return this.http.get<RootObject>(this.baseUrl + 'all?authToken=' + this.authToken).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  getSingleBlog(blogId): any {

    let myResponse = this.http.get(this.baseUrl + 'view/' + blogId + '?authToken=' + this.authToken)
    return myResponse;

  }

  createBlog(blogData): any {

    let myResponse = this.http.post(this.baseUrl + 'create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }

  deleteBlog(blogId): any {

    let data = {}
    let myResponse = this.http.post(this.baseUrl + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;

  }

  editBlog(blogId,blogData): any {

    
    let myResponse = this.http.put(this.baseUrl  + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  }

}
