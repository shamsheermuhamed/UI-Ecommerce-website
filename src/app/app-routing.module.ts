import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShoppingCartComponent } from './myprofile/shopping-cart/shopping-cart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ProfileInformationComponent } from './myprofile/profile-information/profile-information.component';
import { ManageAddressComponent } from './myprofile/manage-address/manage-address.component';
import { ReviewsRatingComponent } from './myprofile/reviews-rating/reviews-rating.component';
import { SavedCardsComponent } from './myprofile/saved-cards/saved-cards.component';
import { WishlistComponent } from './myprofile/wishlist/wishlist.component';
import { MyRewardsComponent } from './myprofile/my-rewards/my-rewards.component';
import { NotificationsComponent } from './myprofile/notifications/notifications.component';
import {AuthService } from './services/auth-service';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { MyordersComponent } from './myprofile/myorders/myorders.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'singleproduct',
    component: SingleProductComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'profile',
        component: ProfileInformationComponent
      },
      {
        path: 'address',
        component: ManageAddressComponent
      },
      {
        path: 'myorders',
        component: MyordersComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'reviews',
        component: ReviewsRatingComponent
      },
      {
        path: 'carddetails',
        component: SavedCardsComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'rewards',
        component: MyRewardsComponent
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  {
    path: 'updateproduct',
    component: UpdateproductComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
