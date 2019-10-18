import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';

@Injectable({
    providedIn: 'root'
})
export class FakeMovieServiceService {
    movies: IMovie[] = [
        {
            _id: '1',
            title: 'Hobbs and Shaw',
            actors: ' Dwayne Johnson, Jason Statham, Idris Elba ',
            country: 'USA',
            director: 'David Leitch',
            genre: 'Action, Adventure',
            image:
                'http://t2.gstatic.com/images?q=tbn:ANd9GcQ-VY5cjeq-HcRzfG3ofhcEhXFE06-Ev2xohkP9pY3MKNrkgRxp',
            language: ['English', 'Samoan', ' Russian'],
            plot:
                // tslint:disable-next-line: max-line-length
                'Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.',
            rated: 6.6,
            released: new Date(2019, 8, 2),
            runtime: '2h 17min',
            writer: ['Chris Morgan', 'Drew Pearce', 'Chris Morgan'],
            yearOfProduction: 2019
        },
        {
            _id: '2',
            title: 'Joker',
            actors: ' Joaquin Phoenix, Robert De Niro, Zazie Beetz',
            country: 'USA, Canada',
            director: 'Todd Phillips',
            genre: 'Crime, Drama, Thriller',
            image:
                'http://t2.gstatic.com/images?q=tbn:ANd9GcQ-VY5cjeq-HcRzfG3ofhcEhXFE06-Ev2xohkP9pY3MKNrkgRxp',
            language: ['English'],
            plot:
                // tslint:disable-next-line: max-line-length
                'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".',
            rated: 8.9,
            released: new Date(2019, 10, 4),
            runtime: '2h 25min',
            writer: ['Todd Phillips', 'Scott Silver'],
            yearOfProduction: 2019
        },
        {
            _id: '3',
            title: 'The Lion King',
            actors: 'Donald Glover, Beyoncé, Seth Rogen',
            country: 'USA',
            director: 'Jon Favreau',
            genre: 'Animation, Adventure, Drama, Family, Musical',
            image:
                'http://t2.gstatic.com/images?q=tbn:ANd9GcQ-VY5cjeq-HcRzfG3ofhcEhXFE06-Ev2xohkP9pY3MKNrkgRxp',
            language: ['English'],
            plot:
                // tslint:disable-next-line: max-line-length
                'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
            rated: 7.1,
            released: new Date(2019, 7, 19),
            runtime: '1h 58min',
            writer: ['Jeff Nathanson', 'Drew Pearce', 'Chris Morgan'],
            yearOfProduction: 2019
        }
    ];
    constructor() {}

    getMovies() {
        return this.movies;
    }

    getMovie(id: string) {
        return this.movies.find(m => m._id === id);
    }
}
