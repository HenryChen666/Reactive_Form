import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route});
  }
}
