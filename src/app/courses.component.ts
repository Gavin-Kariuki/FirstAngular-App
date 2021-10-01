import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>Hello</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }} 
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    // Logic for callling an HTTP service

}