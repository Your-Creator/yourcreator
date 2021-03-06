import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
      this.titleService.setTitle('HOME- YOUR CREATOR');
      this.meta.addTag({name: 'description', content: 'WEB/APP DESIGNING COMPANY | SEO | FIX Bugs | Cloud Servers'});
      this.meta.addTag({nme: 'keyword', Content:'Best Web designing company in Cuttack Bhubaneswar Odisha, Create Website, Cheap Website designing company in Cuttack Bhubaneswar Odisha, Android App Developer in Cuttack Bhubaneswar Odisha, Top Best SEO making Comapany, Fix Bugs in Wordpress website'});
    }

  ngOnInit(): void {
  }

}
