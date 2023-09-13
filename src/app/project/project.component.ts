import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  projects: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/api/projects') // Replace with your API URL
      .subscribe(data => {
        this.projects = data;
      });
  }
}
