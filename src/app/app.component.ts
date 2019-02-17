import { Component, OnInit } from '@angular/core';
import { LoadingPageService } from './loadingpage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pagination';
  products: any = [];
  loadingPage: number = 1;
  activeClassNext: boolean = false;
  activeClassPre: boolean = false;
  pages: Array<number>;

  constructor(private loadingPageService: LoadingPageService) { }
  ngOnInit() {
    this.fetchProducts();
  }

  public pageLoadingData(indexPage) {
    if (parseInt(indexPage) + 1 <= this.pages.length) {
      this.loadingPage = parseInt(indexPage) + 1;
      this.fetchProducts();
    } else { this.activeClassNext = true };
  }

  public fetchProducts() {
    this.loadingPageService.getDataPage(this.loadingPage).subscribe(response => {
      this.products = response['data'];
      let page = response['pageCount'];
      this.pages = new Array(page); // chuyển số thành số lượng mảng. số 4 -> mảng có 4 phần tử
    });
  }

}
