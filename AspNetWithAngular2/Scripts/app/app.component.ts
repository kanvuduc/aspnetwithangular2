import {Component, OnInit} from '@angular/core'

import {Hero} from './hero'

import {HeroService} from './hero.service'

@Component({
    selector: 'my-app',
    template: `
<h1>{{title}}</h1>
<nav>
    <a routerLink="/dashboard" routerLinkActive="active">DASHBOARD</a>
    <a routerLink="/heroes" routerLinkActive="active">HEROES</a>
</nav>
<router-outlet></router-outlet>
`,
    styleUrls: ['Scripts/app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes'
}