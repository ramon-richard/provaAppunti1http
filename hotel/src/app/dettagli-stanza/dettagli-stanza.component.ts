import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../models/room.models';

@Component({
  selector: 'app-dettagli-stanza',
  templateUrl: './dettagli-stanza.component.html',
  styleUrls: ['./dettagli-stanza.component.css']
})
export class DettagliStanzaComponent implements OnInit {
@Input() room : Room = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
