import {Patient} from "./Patient";

export class Queue<Patient> {
    container: Patient[] = [];

    constructor() {
    }
    dequeue(): Patient | undefined {
        return this.container.shift();
    }
    enqueue(item: Patient): void {
        this.container.push(item);
    }
    size(): number {
        return this.container.length
    }
}