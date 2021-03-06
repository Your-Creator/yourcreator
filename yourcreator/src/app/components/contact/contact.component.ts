import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
      this.titleService.setTitle('CONTACT- YOUR CREATOR');
      this.meta.addTag({name: 'description', content: 'WEB/APP DESIGNING COMPANY'});
      this.meta.addTag({nme: 'keyword', Content:'Best Web designing company in Cuttack Bhubaneswar Odisha, Create Website, Cheap Website designing company in Cuttack Bhubaneswar Odisha, Android App Developer in Cuttack Bhubaneswar Odisha, Top Best SEO making Comapany, Fix Bugs in Wordpress website'});
    }

  ngOnInit(): void {
  }

}
