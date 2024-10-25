import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    { id: 0, name: 'Angular App', summary: 'Test description', description: 'aaaaaaaaaaaaa', tags: [Tag.angular, Tag.typescript], projectlink: 'https://github.com/kaviya1107' ,pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"]},
    { id: 1, name: 'Flutter App', summary: `A Flutter app is a cross-platform mobile application built using Google's Flutter framework, allowing developers to create natively compiled apps for both iOS and Android from a single codebase. It uses the Dart programming language and provides fast development with a rich set of customizable widgets`, description: 'fhj', tags: [Tag.angular, Tag.java], projectlink: 'https://github.com/kaviya1107',pictures:["../../assets/Farmapp.png","../../assets/Sewage.png","../../assets/swiggy-1.png"] },
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

  GetprojectsByFilter(filterTags:Tag[])
  {
    let filteredProjects:Project[]=[];
    this.projects.forEach(function(project)
  {
    let foundAll=true;
    filterTags.forEach(function(filterTags)
  {
    if(project.tags.includes(filterTags)==false)
    {
      foundAll=false;
    }
  });
  if(foundAll)
  {
    filteredProjects.push(project)
  }
  });
  return filteredProjects;
  }
}
