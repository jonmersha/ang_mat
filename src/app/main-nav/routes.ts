import { Routes } from "@angular/router";
import { ItemCategoryComponent } from "../forms/item-category/item-category.component";
import { ItemComponent } from "../forms/item/item.component";
import { LoginComponent } from "../user/login/login.component";
export const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'newItems',component:ItemComponent},
    {path:'addItem',component:ItemCategoryComponent}

    


]