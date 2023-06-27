import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private baseUrl = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  read_image_text(payload: any) {
    return this.http.post(`${this.baseUrl}/ocr/read-image-text/`, payload).pipe(
      map((response) => response),
      catchError((err: any) => of(err.message))
    );
  }
}
