import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2018-12-06",
      "created":"2018-05-12",
      "tags": [],
      "author": "admin",
      "catagory": "comedy",
      "isPublished": "true",
      "views":0,
      "bodyHtml": "this is a blog body html",
      "description": "this is a blog body description",
      "title": "this is title 1"
    },
    {
      "blogId":"2",
      "lastModified":"2018-12-06",
      "created":"2018-06-12",
      "tags": [],
      "author": "admin",
      "catagory": "comedy",
      "isPublished": "true",
      "views":2,
      "bodyHtml": "this is a blog body html",
      "description": "this is a blog body description",
      "title": "this is title 2"
    },
    {
      "blogId":"3",
      "lastModified":"2018-12-06",
      "created":"2018-05-12",
      "tags": [],
      "author": "admin",
      "catagory": "comedy",
      "isPublished": "true",
      "views":4,
      "bodyHtml": "this is a blog body html",
      "description": "this is a blog body description",
      "title": "this is title 3"
    }
  ];

  public currentBlog;
  
  constructor() { }
  
  public getAllBlogs() {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }
}