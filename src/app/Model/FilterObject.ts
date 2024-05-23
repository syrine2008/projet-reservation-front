export class FilterObject {
    column: string;
    value: string | null | undefined;


    constructor(column: string, value: string) {
        this.column = column;
        this.value = value;
    }
}