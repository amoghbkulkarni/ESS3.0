import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CurrencyPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CurrencyPipe]
})
export class AppComponent implements OnInit {

  title:string='';
  dollars:string=""
  employeeData: any;
  constructor(private http: HttpClient,private service:DataServiceService) {

  }

  onservable=new Observable(resp=>{
    resp.next("Hi Amogh");
    resp.next("Hope ur doing Good");
    resp.next("you will be selected for the both the interviews"); 
  })   


  ngOnInit(): void {
    
   this.employeeData= this.service.get("https://dummy.restapiexample.com/api/v1/employees",new HttpParams);
   
   this.service.get("https://dummy.restapiexample.com/api/v1/employees",new HttpParams).subscribe({
    next:(response:any)=>{
      this.employeeData=response; 
    }
   }) 


    this.onservable.subscribe(resp=>{
      console.log(resp); 
    })  

    this.title = 'TestApp';
    this.dollars = 'USD6788';
    this.ascncProgram();

  }


  async ascncProgram(){
 
const response=await fetch('https://api.example.com/data');
const data=await response.json();
console.log(data); 
  }
   NonascncProgram(){
 
    const response= fetch('https://api.example.com/data');
    const data= response; 
    console.log(data); 
      }

      performLoop(){
       const number:number[]=[4,5,7,9,4,7];
       number.forEach((number)=>{

       })
      } 

      setInterval(){
        
      }
}   

  