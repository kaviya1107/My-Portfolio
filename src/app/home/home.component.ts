import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featured={} as Project
constructor(public titleservice:Title, private service:ProjectsService){
  this.titleservice.setTitle('Kavi-Home');
}
  ngOnInit(): void {
    this.featured=this.service.Getprojectbyid(1);
  }
}
