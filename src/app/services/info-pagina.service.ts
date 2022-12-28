import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Equipo } from '../interfaces/equipo';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private info: InfoPagina = {};
  private info$: Subject<InfoPagina> = new Subject<InfoPagina>();
  cargar = false;

  constructor(private _http: HttpClient) {

    this.cargarInfo();

  }

  private cargarInfo(){
    // Leer el json
    this._http.get('assets/data/data-pagina.json')
    .subscribe( (res: InfoPagina) => {
      this.cargar = true;
      this.info = res;
      this.info$.next(this.info);
    });
  }

  cargarEquipo(): Observable<Equipo[]>{
    return this._http.get<Equipo[]>(`${environment.url}Equipo.json`);
  }

  getInfoPagina$(): Observable<InfoPagina> {
    return this.info$.asObservable();
  }
  
}

