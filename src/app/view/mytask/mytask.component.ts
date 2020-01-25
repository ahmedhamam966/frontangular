import { Component, OnInit } from '@angular/core';
import{TaskService}from 'src/app/services/task.service'
import { from } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css']
})
export class MytaskComponent implements OnInit {
lists:List[];
tasks:Task[];
  constructor(private TaskService:TaskService,private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.router.params.subscribe((params:Params)=>{
      if(params.listid)
      {


this.TaskService.gettasks(params.listid).subscribe((tasks:Task[])=>{
  this.tasks=tasks;

})
    }else{
      this.tasks=undefined;
    }
  
  })

    this.TaskService.getlist().subscribe((lists:List[])=>{

    this.lists=lists;

    })
  }

taskcomp(task:Task)
{
this.TaskService.taskcompleted(task).subscribe(()=>{
  console.log("completed suss");
  task.complete=true;
})
}
 
}
