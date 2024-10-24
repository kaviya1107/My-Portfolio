import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModelComponent } from '../project-model/project-model.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project={} as Project
  bsModalRef?:BsModalRef;

  constructor(private modelservice:BsModalService){
    
  }
  
  openprojectmodel(){       
    const modeloptions:ModalOptions={
      class:"modal-lg",
      initialState:{ //pass the data and values in to an model ...initial state is a bootstrap class
        project:this.project 
      }
    };                                        
    this.bsModalRef=this.modelservice.show(ProjectModelComponent,modeloptions);
  }
}
