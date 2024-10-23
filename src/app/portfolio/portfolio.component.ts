import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project';
import { Tag } from '../models/tags';
import { ProjectsService } from '../services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  proj={} as Project[];  //for displaying single value as proj:Project[]=[]; 

  constructor(public titleservice:Title, private projectservice:ProjectsService){
    this.titleservice.setTitle('Kavi-Portfolio');
  }
  ngOnInit(): void {
    this.proj=this.projectservice.GetProject();
    // const project=this.projectservice.Getprojectbyid(1);
    // this.proj=[project]   this for displaying singleid
  }
}