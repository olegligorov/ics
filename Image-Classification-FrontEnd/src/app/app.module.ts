import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubmitPageComponent } from './components/submit-page/submit-page.component';
import { ImagePageComponent } from './components/image-page/image-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { GalleryImageComponent } from './components/gallery-image/gallery-image.component';
import { GalleryPageContainerComponent } from './components/gallery-page-container/gallery-page-container.component';

const appRoutes: Routes = [
  {path: '', component: SubmitPageComponent},
  {path: 'images/:imageId', component: ImagePageComponent},
  {path: 'images', component: GalleryPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubmitPageComponent,
    ImagePageComponent,
    GalleryPageComponent,
    GalleryImageComponent,
    GalleryPageContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
