import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private _service: InfoPaginaService,
    private _router: Router
    ) {
    this.info$ = this._service.getInfoPagina$();
  }

  ngOnInit(): void {
   
  }

  searchProject(search: string){
    if(search.length < 2) return;

    this._router.navigate(['/search', search]);
  }

}
