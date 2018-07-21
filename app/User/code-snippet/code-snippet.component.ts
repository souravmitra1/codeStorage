import { Component, OnInit } from '@angular/core';
import {CodeSnippetModel} from '../../Model/code-snippet-model'

@Component({
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {
  public model:CodeSnippetModel = new CodeSnippetModel();
  constructor() { }
  ngOnInit() {
    this.model.Tags = [".Net","Java"];
  }
}