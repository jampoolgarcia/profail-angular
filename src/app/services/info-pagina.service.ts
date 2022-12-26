import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info!: InfoPagina;
  cargar = false;

  constructor(private _http: HttpClient) {

    // Leer el json
    this._http.get('assets/data/data-pagina.json')
      .subscribe( (res: InfoPagina) => {
        this.cargar = true;
        this.info = res;
    });

  }


   

  
}
