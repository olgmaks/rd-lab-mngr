import {CourseModel} from '../model/course.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CoursesService
{

  private courses: CourseModel [] = [

    <CourseModel>{
      name: 'Java',
      description: 'Intensive course for future Java developers',
      startDate: new Date(2017, 12, 14),
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Duke.svg/611px-Duke.svg.png'
    },
    <CourseModel>{
      name: 'Nodejs',
      description: 'Build fast and scalable application with Node platform',
      startDate: new Date(2017, 12, 16),
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
    },
    <CourseModel>{
      name: 'Test Automation',
      description: 'Software automated testing course',
      startDate: new Date(2017, 12, 11),
      imgPath: 'https://thumbs.dreamstime.com/b/cute-robot-cyborg-13618420.jpg'
    }
  ];

  getCourses(): CourseModel []
  {
    return this.courses.slice();
  }

  addCourse()
  {
    // TODO
  }

  findCourse()
  {
    // TODO
  }

  deleteCourse()
  {
    // TODO
  }

  updateCourse()
  {
    // TODO
  }
}
