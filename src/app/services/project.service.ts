import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectI, ProjectIdxI } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _http: HttpClient) {
  
  }

  cargarProject(): Observable<ProjectIdxI[]> {
    return this._http.get<ProjectIdxI[]>(`${environment.url}projects_idx.json`);
  }
}
