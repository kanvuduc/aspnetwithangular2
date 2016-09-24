import {Component, OnInit} from '@angular/core'

import {Router} from '@angular/router'

import {HeroService} from './hero.service'
import {Hero} from './hero'

@Component({
    selector: 'dashboard',
    template: `
<h3>
Top Heroes
</h3>
<div class="grid grid-pad">
    <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
        <div class="module hero">
            <h4>{{hero.name}}</h4>
        </div>
    </div>
</div>
`,
    styleUrls: ['Scripts/app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[]

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id]

        this.router.navigate(link)
    }
}