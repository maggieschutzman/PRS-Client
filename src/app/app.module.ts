import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { SortPipe } from './pipe/sort.pipe';
import { VendorService } from './service/vendor.service';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { FormsModule} from '@angular/forms';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { RequestService } from '@svc/request.service';
import { RequestLineComponent } from './feature/request-line/request-line/request-line.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    UserListComponent,
    VendorListComponent,
    MenuComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
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
    UserLoginComponent,
    RequestLineComponent
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
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
