import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
