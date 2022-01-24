import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/rooms-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rooms-main',
  templateUrl: './rooms-main.component.html',
  styleUrls: ['./rooms-main.component.css']
})
export class RoomsMainComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

}
