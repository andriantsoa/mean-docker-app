import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CarouselAutoComponent } from './components/carousel-auto/carousel-auto.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { LoginService } from './components/user-login/login.service';
import { BandeauModule } from './components/bandeau/bandeau.module';
import { JobOffersModule } from './components/job-offers/job-offers.module';
import { JobOffersPublicModule } from './components/job-offers-public/job-offers-public.module';

const components = [
  UserRegistrationComponent,
  UserLoginComponent,
  MenuBarComponent,
  SearchFormComponent,
  CarouselAutoComponent,
  ImageSliderComponent,
  FooterBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgImageSliderModule,
    RouterModule,
    BandeauModule,
    JobOffersModule,
    JobOffersPublicModule,
  ],
  declarations: [
    ...components,
  ],
  providers: [
    LoginService
  ],
  exports: [
    ...components,
    NgImageSliderModule,
  ]
})
export class CommunModule { }
