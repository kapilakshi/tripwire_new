import { Component, OnInit, Renderer2,ElementRef ,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  public name:any;
  public titleof:any;
  public contentof:any;
  public result:any;
  public feedback:any;
  public url:string;
  public feedbackUrl :any;
  alertStyles;
  public colorofbutton:string;
  baseUrl = environment.baseUrl;
  path = environment.path;
  fUrl = environment.feedbackUrl;
  fileUrl = environment.fileUrl;
 
  constructor(private http : HttpClient) {
    
   }
  updateSearch(e:any) {
    this.url = this.baseUrl ;
    this.feedbackUrl= this.fUrl;
   this.name = e.target.value;
   this.http.get(this.url + this.name)
  .subscribe(res => {this.result  = res; });
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
      "doc_type": "_doc","query_string": this.name}) // need to send doc_type dynamically
      .subscribe(res => {this.feedback  = res['result']; 
      console.log('post request',this.feedback);
      if(this.feedback == true)
      {
       this.colorofbutton= "Feedback Incorporated Successfully !";
      }
      else{
        this.colorofbutton= "Sorry feedback cannot be Incorporated !";
      }
    });
      
 
    }
    else
    {
      console.log("nothing is checked");
     
    }
  
  
 }
 
  
ngOnInit() {
  
  }
  

}
