import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/services/data.service';
import {Observable} from 'rxjs';
import {BookModel} from '../shared/models/book.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bookItems: Observable<[BookModel]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.bookItems = this.dataService.getData();
  }

}
