import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  users:any
  newSells:any
  reports:any
  items = ['Items', 'Selles', 'Inventory', 'Customer', 'Vendor','Report'];
  expandedIndex = 0;
  sellsItem=['NewItem',"EditItem",'ItermCategory']
  store=['NewStore','StoreList','EditStore']
  item=['newItems','ItemList','addItem']
  inventory=['store balance','Item','']
  customer=['NewCustomer',"CistomerList"]
  vendor=['NewVendor','VendorList']
  report=['SellesReport','Inventory-report']
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  getMenu(index:number){
    switch(index){
        case 0://Items
          return this.item
        case 1://sells
          return this.sellsItem
        case 2://inventory
          return this.inventory
        case 3://customer
          return this.customer
          case 4://Vendor
          return this.vendor
          case 5://Report
          return this.report
        default:
          return this.report
    }
  }

}
