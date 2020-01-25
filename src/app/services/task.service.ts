import { Injectable } from '@angular/core';
import {RequestsService}from'src/app/services/requests.service'
import { from } from 'rxjs';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private RequestsService:RequestsService) { }


  getlist()
{
  return this.RequestsService.gettask('lists')
}
createlist(title:string)
{
return  this.RequestsService.posttask('lists',{title});
}
 gettasks(listid:string)
 {
   return this.RequestsService.gettask(`lists/${listid}/tasks`);
 }

 createtask(title:string,listid:string)
 {
 return  this.RequestsService.posttask(`lists/${listid}/tasks`,{title});
 }
 taskcompleted(task:Task)
 {
return this.RequestsService.patchtask(`lists/${task ._listid}/tasks/${task._id}`,{completed:!task.complete})   
 }
}
