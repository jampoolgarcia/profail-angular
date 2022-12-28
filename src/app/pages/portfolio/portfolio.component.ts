import { Component, OnInit } from '@angular/core';
import { ProjectIdxI } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: ProjectIdxI[] = [];
  loadding = true;

  constructor(private _service: ProjectService) { 
    
  }

  ngOnInit(): void {
    this.loadding = true;
    this._service.cargarProject().subscribe(res => {
      this.projects = res;
      this.loadding = false;
    });
  }

}
