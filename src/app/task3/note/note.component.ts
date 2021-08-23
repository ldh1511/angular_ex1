import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/apiService';
import { Task3Service } from '../service/task3.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  id=null;
  data=[];
  content='test';
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private task3Service: Task3Service
    ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id= Number(params.get('id'));
      this.id=id;
      this.getNoteContent();
    });
  }
  getNoteContent(){
    this.apiService.getNote(this.id).subscribe(note => {
      this.data=[note];
      this.data=this.data[0];
    });
  }
  shareDataToFlashCard(){
    this.task3Service.notifyCategoryItems(this.data);
  }
}
