import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

    // courses = COURSES;
    courses;

    // coursesTotal = this.courses.length;

    // constructor(
    //     private coursesService: CoursesService,
    //     @Inject(CONFIG_TOKEN) private config: AppConfig,
    //     private injector: Injector) {

    // }
    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        // const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});
        // customElements.define('course-title', htmlElement);
        //
        const params = new HttpParams()
            .set('page', '1')
            .set('pageSize', '10');

        this.http.get('/api/courses', {params})
            .subscribe(
              courses => this.courses = courses
            );

    }

    onEditCourse() {

            this.courses[1].category = 'ADVANCED';

    }

    save(course: Course) {
        // this.coursesService.saveCourse(course)
        //     .subscribe(
        //         () => console.log('Course Saved!')
        //     );
    }


}
