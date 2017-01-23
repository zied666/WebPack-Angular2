export class Room {
    public countAdult: number;
    public countChild: number;
    public age1: number;
    public age2: number;
    public age3: number;
    public age4: number;
    public age5: number;

    constructor(rooms: string) {
        if (rooms == null) {
            this.countAdult = 1;
            this.countChild = 0;
            this.age1 = 1;
            this.age2 = 1;
            this.age3 = 1;
            this.age4 = 1;
            this.age5 = 1;
        }
        else {
            var data: any[] = rooms.split(",");
            this.countAdult = data[0];
            this.countChild = data.length - 1;
            this.age1 = data[1]?data[1]:1;
            this.age2 = data[2]?data[2]:1;
            this.age3 = data[3]?data[3]:1;
            this.age4 = data[4]?data[4]:1;
            this.age5 = data[5]?data[5]:1;
        }
    }

    public getAge(age: number) {
        if (age == 1) return this.age1;
        if (age == 2) return this.age2;
        if (age == 3) return this.age3;
        if (age == 4) return this.age4;
        if (age == 5) return this.age5;
    }
}