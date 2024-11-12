export interface characterInterface {
    name: string;
    image?: string;
}


export interface apiResults{
    count: number;
    next: string;
    previous?: string;
    results: characterInterface[]
}