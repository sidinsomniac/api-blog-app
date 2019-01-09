import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog = [];
  public errorMsg;

  constructor( private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId)
      .subscribe( data => this.currentBlog = data['data'] , error => this.errorMsg = error );
  }  
}