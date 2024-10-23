import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    { id: 0, name: 'Angular App', summary: 'Test description', description: 'aaaaaaaaaaaaa', tags: [Tag.angular, Tag.typescript], projectlink: 'asss' },
    { id: 1, name: 'Angular App', summary: 'description', description: 'fhj', tags: [Tag.angular, Tag.java], projectlink: 'rty' },
    { id: 2, name: 'Angular App', summary: 'Test description', description: 'fghj', tags: [Tag.angular, Tag.typescript], projectlink: 'xc' },
    { id: 3, name: 'Angular App', summary: 'Test description', description: 'vbn', tags: [Tag.angular, Tag.typescript], projectlink: 'jk' },
    {id: 4, name: 'Angular App', summary: 'Test description', description: 'asd', tags: [Tag.angular, Tag.typescript], projectlink: 'g' },
    { id: 4, name: 'Angular App', summary: 'Test description', description: 'asd', tags: [Tag.angular, Tag.typescript], projectlink: 'g' }
];

  constructor() { }

  GetProject(){
    return this.projects
  }
  Getprojectbyid(id:number):Project{
    let project=this.projects.find(project=>project.id===id);
    if(project===undefined){
      throw new TypeError("error")
    }
    return project;
  }
}