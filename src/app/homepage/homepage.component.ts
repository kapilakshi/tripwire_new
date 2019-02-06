import { Component, OnInit, Renderer2,ElementRef ,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [MessageService]
})
export class HomepageComponent implements OnInit {
  
  public name:any;
  public titleof:any;
  public contentof:any;
  public result:any;
  public feedback:any;
  public url:string;
  public feedbackUrl :any;
  public colorofbutton:string;
  baseUrl = environment.baseUrl;
  path = environment.path;
  fUrl = environment.feedbackUrl;
  fileUrl = environment.fileUrl;
  display: boolean = false;
  first;
  public kam: number=0;

 
 
  constructor(private http : HttpClient,private messageService: MessageService) {
    
   }

   lok(eventData)
   {
    this.kam=eventData.first;
    console.log(eventData.first);

   }
  updateSearch($event) {
  
 
    this.url = this.baseUrl ;
    this.feedbackUrl= this.fUrl;
   this.name = $event.target.value;
   this.http.get(this.url + this.name)
  .subscribe(res => {
    this.kam = 0;
    this.result = res
  });
  
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
     
      if(this.feedback == true)
      {  
          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Feedback submitted', life:2000});
      
          
      }
      else{
       
        this.messageService.add({severity:'info', summary: 'Unsuccess Message', detail:'Feedback not submitted',life:2000});
    
        
      }
    });
      
 
    }
    else
    {
      this.messageService.add({severity:'warn', summary: 'Information', detail:'Please select the radio button',life:2000});
     
    }
 
  
 }
 
  
ngOnInit() {
 
  }
  
 
}
