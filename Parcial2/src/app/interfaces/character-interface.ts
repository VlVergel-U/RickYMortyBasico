export interface characterInterface {
    id: any;
    name: string;
    image?: string;
    hovered: boolean;
}

export interface apiResults{
    count: number;
    next: string;
    previous?: string;
    results: characterInterface[]
}