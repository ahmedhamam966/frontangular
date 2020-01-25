import { Component, OnInit } from '@angular/core';
import{ TaskService}from 'src/app/services/task.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
listid:string;
  constructor(private TaskService:TaskService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.listid=params['listid'];
    
    })
  }
createtask(title:string)
{
this.TaskService.createtask(title,this.listid).subscribe((newtask:Task)=>{
 this.router.navigate(['../'],{relativeTo:this.route})
})
}
}
