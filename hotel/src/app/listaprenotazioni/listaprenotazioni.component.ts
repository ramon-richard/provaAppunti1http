import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../models/Booking.models';
import { Room } from '../models/room.models';

@Component({
  selector: 'app-listaprenotazioni',
  templateUrl: './listaprenotazioni.component.html',
  styleUrls: ['./listaprenotazioni.component.css']
})
export class ListaprenotazioniComponent implements OnInit {

  constructor() { }
  @Input() listaPreno : Booking[] = undefined!;
  room : Room = undefined!

  ngOnInit(): void {
  }
   mostraDett(room : Room)
   {
this.room =room;
   }
}
