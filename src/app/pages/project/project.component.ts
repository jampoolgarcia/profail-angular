import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectI } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project!: ProjectI;
  id!: string;
  loadding = true;

  constructor(
    private _router: ActivatedRoute,
    private _service: ProjectService
    ) { }

  ngOnInit(): void {
    this.loadding = true;
    this._router.params
      .subscribe(res => {
        this.id = res['id']
        this._service.getProject(this.id)
          .subscribe((proj:ProjectI) => {
              this.project = proj;
              this.loadding = false;
          });
    });
  }

}
