import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  filterBy = '';

  constructor(private _service: ProjectService, 
              private _route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.loadding = true;
    this._service.cargarProject().subscribe(res => {
      this.projects = res;
      this.loadding = false;
    });

    this._route.params
    .subscribe((params) =>{
      this.filterBy = params['search'];
    });
  }

}
