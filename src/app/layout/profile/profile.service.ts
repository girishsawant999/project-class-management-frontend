import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}
  getStudentData(studentId): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/students/${studentId}/`)
      .pipe(map((res) => res));
  }
}
