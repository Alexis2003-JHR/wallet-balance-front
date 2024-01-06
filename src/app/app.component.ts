import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }
}
