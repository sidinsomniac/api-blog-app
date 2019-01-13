import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: 'blog-view.component.html',
  styleUrls: ['blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private location: Location) {


  }


  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    this.blogHttpService.getSingleBlog(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )
  }

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    )




  }// end delete this blog 

  goBackToPreviousPage(): any {

    this.location.back();

  }





}


