import { Component, OnInit } from '@angular/core';
import { ContenfullService } from '../services/contenfull.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private contenFull: ContenfullService) {}

  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.blogPost$ = this.contenFull.getAllEntry();
  }
}
