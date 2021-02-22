import {AfterViewInit, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../../models/categories';
import {CategoriesService} from './categories.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy{
  // thus we ensure the data is fetched before rendering
  dtOptions: DataTables.Settings = {};
  categories: Categories[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private renderer: Renderer2, private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.categoriesService.getAll().subscribe(rs => {
      this.categories = rs;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
