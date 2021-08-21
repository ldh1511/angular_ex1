export class Note {
    constructor(
        id: number,
        name: string,
        mean: string,
        categoryId: number,
        type: string,
        idx: string,
    ) {
        this.categoryId = categoryId;
        this.id = id;
        this.name = name;
        this.mean = mean;
        this.type = type;
        this.idx = idx;
    }
    id: number;
    name: string;
    mean: string;
    categoryId: number;
    type: string;
    idx: string;
}