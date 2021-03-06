import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
      this.titleService.setTitle('BLOGS- YOUR CREATOR');
      this.meta.addTag({name: 'description', content: 'WEB/APP DESIGNING COMPANY'});
      this.meta.addTag({nme: 'keyword', Content:'Best Web designing company in Cuttack Bhubaneswar Odisha, Create Website, Cheap Website designing company in Cuttack Bhubaneswar Odisha, Android App Developer in Cuttack Bhubaneswar Odisha, Top Best SEO making Comapany, Fix Bugs in Wordpress website'});
    }

  ngOnInit(): void {
  }

}
