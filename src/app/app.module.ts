import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortPipe } from './pipe/sort.pipe';
import { SystemService } from '@svc/system.service';


import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';


import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorService } from './service/vendor.service';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { MenuComponent } from './core/menu/menu.component';
import { FormsModule} from '@angular/forms';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductService } from '@svc/product.service';

import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestService } from '@svc/request.service';

import { RequestLineEditComponent } from './feature/request-line/request-line-edit/request-line-edit.component';
import { RequestLineCreateComponent } from './feature/request-line/request-line-create/request-line-create.component';
import { RequestLineService } from '@svc/request-line.service';

import { RequestLinesComponent } from './feature/request/request-lines/request-lines.component';

import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    MenuComponent,

    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserListComponent,
    UserLoginComponent,

    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,

    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,

    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
       
    RequestLineEditComponent,
    RequestLineCreateComponent,

    RequestLinesComponent,

    RequestReviewComponent,
    RequestApproveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    UserService,  
    VendorService,
    RequestService,
    RequestLineService,
    RequestLineEditComponent,
    SystemService,
    ProductService,
    HttpClientModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
