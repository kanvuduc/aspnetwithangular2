import {InMemoryDbService} from 'angular2-in-memory-web-api'

import {HEROES} from './heroes'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = HEROES;

        return {heroes}
    }
}