import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    { id: 0, name: 'Angular App', summary: 'Test description', description: 'aaaaaaaaaaaaa', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107' ,pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"]},
    { id: 1, name: 'Flutter App', summary: 'description', description: 'fhj', tags: [Tag.angular, Tag.java], projectlink: 'https://github.com/kaviya1107',pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"] },
    { id: 2, name: 'Iot App', summary: 'Test description', description: 'fghj', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107' ,pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"]},
    { id: 3, name: 'Typescript App', summary: 'Test description', description: 'vbn', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107',pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"]},
    {id: 4, name: 'Web App', summary: 'Test description', description: 'asd', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107' ,pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"]},
    { id: 4, name: 'Cloud App', summary: 'Test description', description: 'asd', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107',pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"] }
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