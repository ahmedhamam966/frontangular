import { Component, OnInit } from '@angular/core';
import{TaskService}from 'src/app/services/task.service';
import { Router } from '@angular/router';

import { List } from 'src/app/models/list.model';
@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {

  constructor(private TaskService:TaskService,private router:Router) { }

  ngOnInit() {
  }
createlist(title:string)
{
  this.TaskService.createlist(title).subscribe((list:List)=>{
    console.log(list);
    this.router.navigate(['/lists',list._id])

    })
}

}
