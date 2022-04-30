import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'hotel';
  obsRooms : Observable<Object> = undefined!
  data : Object = undefined!
  constructor(private http : HttpClient)
  {
    
  }
  ngOnInit(): void {
    this.obsRooms = this.http.get("https://my-json-server.typicode.com/malizia-g/hotel/booking ")
    this.obsRooms.subscribe(this.faiqualcosa)
    
  }
  faiqualcosa = (data: Object) =>{
    this.data = data;
  } 
}
