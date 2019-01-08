import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { viewAttached } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public allBlogs=[
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
  constructor( private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("ngoninit called from blog-viewAttached.com.ts");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    // calling the getSingleBlogInformation function
    this.getSingleBlogInformation(myBlogId);
    console.log(this.getSingleBlogInformation(myBlogId));
  }
  public getSingleBlogInformation(currentBlogId):any{
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        return this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
  }
}
