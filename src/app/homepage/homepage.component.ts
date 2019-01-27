import { Component, OnInit, Renderer2,ElementRef ,ViewChild } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  public searchText : string;
  nameinput:string;
  name:any;
  isChecked:boolean=false;
  titleof;
  contentof;
  public result:any;
  public feedback:any;
  url:string;
  feedbackUrl;
  baseUrl = environment.baseUrl;
  path = environment.path;
  fUrl = environment.feedbackUrl;
 
  constructor( private _getData : GetDataService, private http : HttpClient ,private elRef: ElementRef, private renderer: Renderer2) {
    
   }
  updateSearch(e:any) {
    this.url = this.baseUrl ;
    this.feedbackUrl= this.fUrl;
   this.name = e.target.value;
   this.http.get(this.url + this.name)
  .subscribe(res => {this.result  = res; console.log('get request',this.result)});
  }

 
 checkedData(i,title,content)
 {
  
   this.titleof=title;
   this.contentof=content;
  
 }
 
  displayData(title,content,i,id)
  {
    if(title==this.titleof)
    {
      this.http.post(this.feedbackUrl,{"_id": id,
      "doc_type": "_doc","query_string": this.name})
      .subscribe(res => {this.feedback  = res; console.log('post request',this.feedback)});
     console.log(id);
     console.log(this.name);
      
    }
    else
    {
      console.log("nothing is checked");
     
    }
  
  
 }
 
  
ngOnInit() {
  
  }
  

}
