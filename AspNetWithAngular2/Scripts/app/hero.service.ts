import {Injectable} from '@angular/core'

import {Hero} from './hero'

import {Http, Headers} from '@angular/http'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers: Headers = new Headers({
        'Content-Type': 'Application/JSON'
    })

    constructor(private http: Http) {

    }

    getHeroes(): Promise<Hero[]> {
        //return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }


    updateHero(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    createHero(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    deleteHero(id): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}