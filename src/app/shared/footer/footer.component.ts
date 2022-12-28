import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPagina } from 'src/app/interfaces/info-pagina';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  info$:  Observable<InfoPagina>;

  constructor(private _service: InfoPaginaService) {
    this.info$ = this._service.getInfoPagina$();
  }

  ngOnInit(): void {
  }

}
