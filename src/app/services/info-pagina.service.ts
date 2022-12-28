import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private info: InfoPagina = {};
  private info$: Subject<InfoPagina> = new Subject<InfoPagina>();
  cargar = false;

  constructor(private _http: HttpClient) {

    // Leer el json
    this._http.get('assets/data/data-pagina.json')
      .subscribe( (res: InfoPagina) => {
        this.cargar = true;
        this.info = res;
        this.info$.next(this.info);
        console.log(res);
    });

  }

  getInfoPagina$(): Observable<InfoPagina> {
    return this.info$.asObservable();
  }
  
}

