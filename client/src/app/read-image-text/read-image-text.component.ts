import { Component } from '@angular/core';
import { CoreService } from '../services/core.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-read-image-text',
  templateUrl: './read-image-text.component.html',
  styleUrls: ['./read-image-text.component.css']
})
export class ReadImageTextComponent {
  image: File | undefined;
  imageText: string = "";
  imageSrc: any;

  constructor(private coreService: CoreService) {}

  imageChanged(event: any) {
    this.image = event.target.files[0];
    if (this.image) {
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(this.image);
    }
  }

  async extractText() {
    if (!this.image) {
      return
    }
    let formData = new FormData();
    formData.append('image', this.image)
    const response = await lastValueFrom(
      this.coreService.read_image_text(formData)
    );
    if (response.status === 0) {
      console.log(response);
      this.imageText = response['data'];
    } else {
      console.error(response.message);
    }
  }
}
