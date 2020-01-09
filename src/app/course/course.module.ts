import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
const routes: Routes = [{
  path : '',
  component : CourseComponent
}];

@NgModule({
  declarations: [CourseComponent, CourseListComponent, SearchCourseComponent, CourseItemComponent, AddCourseComponent, LoadMoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseModule { }
