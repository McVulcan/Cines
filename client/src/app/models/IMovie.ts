import { IGenre } from './IGenre';

export interface IMovie {
    _id: string;
    image: string;
    title: string;
    yearOfProduction: number;
    rated: number;
    released: Date;
    runtime: string;
    genre: string;
    director: string;
    writer: string[];
    actors: string;
    plot: string;
    language: string[];
    country: string;
}
