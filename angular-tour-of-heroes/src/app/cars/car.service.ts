import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class CarService {
    cars = ['Porche', 'Ferrari', 'Astin Martin', 'Lamborgini'];

    getCars(): string[] {
        return this.cars;
    }

    getCar(id: number) {
        return this.cars[id];
    }
}