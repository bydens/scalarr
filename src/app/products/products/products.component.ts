import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BookModel} from '../../shared/models/book.model';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  bookItems: Observable<[BookModel]>;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bookItems = this.dataService.getData();
  }

}
