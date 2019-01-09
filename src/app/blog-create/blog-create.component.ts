import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: 'blog-create.component.html',
  styleUrls: ['blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  public blogTitle: string;
  public blogBodyHTML: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories: string[] = ["Comedy","Drama","Action","Technology"];

  constructor(private blogHttpService: BlogHttpService) { }

  ngOnInit() {
  }

  public createBlog() {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHTML,
      category: this.blogCategory
    };
    this.blogHttpService.createBlog(blogData);
  }

}
