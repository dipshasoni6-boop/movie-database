export interface Movies {
    id: number;
    name: string;
    image?: {
        medium?: string;
        original?: string;
    }
    summary?: string;
    genres: string[];
    rating:{
        average: number | null;
    };
    premired?: string;
    status: string;  
}
export interface searchResult {
    score: number;
    show: Movies;
}