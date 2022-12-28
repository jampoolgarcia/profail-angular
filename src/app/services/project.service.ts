import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectI } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) {
  
  }

  cargarProject(): Observable<ProjectI[]> {
    return this._http.get<ProjectI[]>(`${environment.url}projects.json`);
  }
}
