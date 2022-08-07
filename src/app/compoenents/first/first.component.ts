import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}
    name: String = 'Data from First component';
    
    ngOnInit(): void {
        this.route.queryParams.subscribe((items) => {
            this.name = items['name'];
        });
    }
}
