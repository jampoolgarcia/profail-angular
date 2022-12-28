import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Equipo } from 'src/app/interfaces/equipo';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  equipo!:Equipo[];
  sub!: Subscription;

  constructor(private _service: InfoPaginaService) { }
 

  ngOnInit(): void {
     this.sub = this._service.cargarEquipo().subscribe(res => {
      this.equipo = res;
    });
  }


}
