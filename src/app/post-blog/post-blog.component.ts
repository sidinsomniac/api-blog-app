import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";


@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css'],
  providers: [Location]
})
export class PostBlogComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) { }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  ngOnInit() {
  }

  createBlog(): any {

    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory

    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData)
  }

}
