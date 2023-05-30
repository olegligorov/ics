import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { Image } from "../../Image";

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss']
})
export class SubmitPageComponent {

  constructor(private imageService: ImageService, private router: Router) { }
  url: string = '';
  noCache: boolean = false;
  image!: Image;
  hasError: boolean = false;
  errorMessage: string = '';

  onSubmit(): void {
    console.log("sending!");
    const newImageUrl = {
      "url": this.url
    }


    this.imageService.addImage(newImageUrl, this.noCache).subscribe((image) => {
      console.log(image);
      this.image = image;
      this.router.navigateByUrl(`images/${this.image.id}`)
    }, error => {
      this.hasError = true;
      this.errorMessage = error.error.message;
      console.log(this.errorMessage);
    });



    this.url = '';
    this.noCache = false;

  }
}
