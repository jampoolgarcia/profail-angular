import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectI, ProjectIdxI } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private entity: string = 'projects';

  constructor(private _http: HttpClient) {
  
  }

  cargarProject(): Observable<ProjectIdxI[]> {
    return this._http.get<ProjectIdxI[]>(`${environment.url}${this.entity}_idx.json`);
  }

  getProject(id:String): Observable<ProjectI> {
    return this._http.get<ProjectI>(`${environment.url}${this.entity}/${id}.json`);
  }

}
