import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog = [];
  public errorMsg;

  newBlogId:string;

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService, private location: Location) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.newBlogId = myBlogId;
    this.blogHttpService.getSingleBlogInformation(myBlogId)
      .subscribe(data => this.currentBlog = data['data'], error => this.errorMsg = error);
  }

  deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.newBlogId).subscribe(

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