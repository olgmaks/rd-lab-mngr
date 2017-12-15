import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../common/model/course.model';
import {CoursesService} from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit
{

   courses: CourseModel [];


  constructor(private coursesService: CoursesService)
  {
  }

  ngOnInit()
  {
    this.courses = this.coursesService.getCourses();
  }

}
