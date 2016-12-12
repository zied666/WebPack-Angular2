export class Room {
    public countAdult: number;
    public countChild: number;
    public age1: number;
    public age2: number;
    public age3: number;

    constructor(rooms: string) {
        if (rooms == null) {
            this.countAdult = 1;
            this.countChild = 0;
            this.age1 = 1;
            this.age2 = 1;
            this.age3 = 1;
        }
        else {
            var data: any[] = rooms.split(",");
            this.countAdult = data[0];
            this.countChild = data.length - 1;
            this.age1 = data[1]?data[1]:1;
            this.age2 = data[2]?data[2]:1;
            this.age3 = data[3]?data[3]:1;
        }
    }

    public getAge(age: number) {
        if (age == 1) return this.age1;
        if (age == 2) return this.age2;
        if (age == 3) return this.age3;
    }
}