import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPagina } from 'src/app/interfaces/info-pagina';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  info$: Observable<InfoPagina>; 

  constructor(private _service: InfoPaginaService) {
    this.info$ = this._service.getInfoPagina$();
  }

  ngOnInit(): void {
   
  }

}
