import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseItemComponent } from './course-item/course-item.component';
const routes: Routes = [{
  path : '',
  component : CourseComponent
}];
@NgModule({
  declarations: [CourseComponent, CourseListComponent, SearchCourseComponent, CourseItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
