import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rooms-main',
  templateUrl: './rooms-main.component.html',
  styleUrls: ['./rooms-main.component.css']
})
export class RoomsMainComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRooms().subscribe(rooms => {
      console.log(rooms);
    })
  }

}
