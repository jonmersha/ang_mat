import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/commons/error.validator';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
  categoryType = new FormControl('', [Validators.required]);
  catDescriptionformcontrols = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }
  saveItemCategory(){
    if((this.categoryType.invalid)||(this.categoryType.invalid)){
      alert('Please corect some filed')
    }else{
      alert('form sublitted') 
    }
  
          
         
  }

}
