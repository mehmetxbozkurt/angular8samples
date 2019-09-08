import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title: string;

  constructor(private testService: TestServiceService) { }

  ngOnInit() {
    this.title = this.testService.serviceTitle;
  }

}
