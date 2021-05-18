export class Movie{
    constructor(data: Movie){
        this.movieId = data.movieId;
        this.title = data.title;
        this.cover = data.cover;
        this.release = new Date(data.release);
        this.cast = data.cast;
        this.rating = data.rating;
        this.category = data.category;
    }

    movieId: string;
    title: string;
    description: string;
    cover: string;
    release: Date;
    cast: string;
    rating: number;
    category: string;
}
