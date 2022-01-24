import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-screenings-main',
  templateUrl: './screenings-main.component.html',
  styleUrls: ['./screenings-main.component.css']
})
export class ScreeningsMainComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getScreenings().subscribe(screenings => {
      console.log(screenings);
    })
  }

}
