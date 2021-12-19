import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';
import { appRoutes } from './main-nav/routes';
import { LoginComponent } from './user/login/login.component';
import { ItemComponent } from './forms/item/item.component';
import { StoreComponent } from './forms/store/store.component';
import { CustomerComponent } from './forms/customer/customer.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './user/signup/signup.component';
import { ItemCategoryComponent } from './forms/item-category/item-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    ItemComponent,
    StoreComponent,
    CustomerComponent,
    FooterComponent,
    SignupComponent,
    ItemCategoryComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    CdkAccordionModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
