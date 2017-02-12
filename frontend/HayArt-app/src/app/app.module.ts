import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutUsComponent,
    GalleryComponent,
    FeedbackComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
