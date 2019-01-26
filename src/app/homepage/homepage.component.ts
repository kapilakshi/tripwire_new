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
  searchTerm: string;
  name:any;
  selectedValue:string;
  public queryJson:any;
  public fileJson:any;
  public comparedMatrix=[];
  isChecked:boolean=false;
  titleof;
  contentof;
  amountChecked=0;
  amountchecked=0;
  lastAction;
  public result:any;
  public feedback:any;
  found:boolean;
  url:string;
  textfilepath = environment.textfilepath;
  baseUrl = environment.baseUrl;
  path = environment.path;
 
  constructor( private _getData : GetDataService, private http : HttpClient ,private elRef: ElementRef, private renderer: Renderer2) {
    
   }
  updateSearch(e:any) {
    this.comparedMatrix=[];
    this.url = this.baseUrl ;
   this.name = e.target.value;
   this.searchTerm = e.target.value;
   this.http.get("http://10.11.198.208:5001/tripwire/query/?query="+ this.name)
  .subscribe(res => {this.result  = res; console.log('get request',this.result)});
   
  
  }

 
 checkedData(i,title,content)
 {
  
   this.titleof=title;
   this.contentof=content;
  
 }
 
  displayData(title,content,i,id)
  {
    console.log(this.name);
    if(title==this.titleof)
    {
      this.http.post("http://10.11.198.208:5001/tripwire/feedback/",{"_id": id,
      "doc_type": "_doc","query_string": this.name})
      .subscribe(res => {this.feedback  = res; console.log('post request',this.feedback)});
     console.log(title);
     console.log(content);
     console.log(id);
      
    }
    else
    {
      console.log("nothing is checked");
     
    }
  
  
 }
 
  
ngOnInit() {
   
 /*this.http.post("http://10.11.198.208:5001/tripwire/query/?query=support%20bundle",{})
  .subscribe(res => {this.result  = res; console.log('get request',this.result)});*/
  /*this.http.get("http://10.11.198.208:5001/tripwire/query/?query="+ this.name)
  .subscribe(res => {this.result  = res; console.log('get request',this.result)});*/
  }
  

}
