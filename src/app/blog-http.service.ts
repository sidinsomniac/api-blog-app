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

  constructor(private http:HttpClient) { }

  public getAllBlogs(): Observable<RootObject>{
    return this.http.get<RootObject>(this.baseUrl + 'all?authToken=' + this.authToken).pipe(
      catchError(this.errorHandler)
    );
  }

  public getSingleBlogInformation(currentBlogId):any{
    return this.http.get<RootObject>(this.baseUrl + 'view/'+ currentBlogId +'?authToken=' + this.authToken);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
