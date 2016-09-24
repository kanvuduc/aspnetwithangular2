import {Component, Input, OnInit} from '@angular/core'

import {ActivatedRoute, Params} from '@angular/router'

import {HeroService} from './hero.service'

import {Hero} from './hero'

@Component({
    selector: 'hero-detail',
    template: `
<div *ngIf="hero" >
    <h2>{{hero.name}} details</h2>
    <div>
        <label>Id:</label> {{hero.id}}
    </div>
    <div>
        <label>Name:</label>
        <input type="text" [(ngModel)]="hero.name" placeholder="Name"/>
    </div>
    <button (click)="save()">Save</button>
</div>
<button (click)="goBack()">Back</button>
`,
    styleUrls: ['Scripts/app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];

            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        })
    }

    save() {
        this.heroService.updateHero(this.hero)
            .then(this.goBack);
    }

    goBack() {
        window.history.back();
    }
}