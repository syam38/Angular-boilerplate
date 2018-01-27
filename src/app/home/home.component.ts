import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any;
  searchTerm:any;
  category:any;
  searchCategory:any;
  constructor(service:AppService) {
    this.items = [{age:25},{age:28},{age:89},{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89},{age:25},{age:28},{age:89},{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}
      ,{age:25},{age:28},{age:89}]; 
   }

  ngOnInit() {
  }

  search(){
    this.items  = this.items.filter((a)=>{
      if((a[this.searchCategory])>this.searchTerm)
            return a;
    })  
  }

  searchByCatergory(){

  }

}
