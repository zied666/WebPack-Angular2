import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
    templateUrl: "./homepage.html"
})
export class HomepageComponent {
    a = 1;

    constructor(private titleService: Title) {
        this.titleService.setTitle("HomePage");
    }
}