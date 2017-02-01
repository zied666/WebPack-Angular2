export class Search {
    checkIn: string;
    checkOut: string;
    limit: number;
    offset: number;
    nuitees: number;
    nom: string;
    order: string;
    orderBy: string;
    ville: string;
    etoiles: string;
    rooms: string;

    idArrangement: number;
    idHotel: number;
    activeRooms: Array<number>;

    constructor() {
        this.checkIn = new Date().toISOString().slice(0, 10).replace(/-/g, "-");
        this.checkOut = new Date((new Date()).setTime((new Date()).getTime() +  86400000)).toISOString().slice(0, 10).replace(/-/g, "-");
        this.limit = 10;
        this.offset = 0;
        this.nuitees = 1;
        this.rooms = "1";
        this.nom = "";
        this.order = "ASC";
        this.orderBy = "libelle";
        this.ville = "";
        this.etoiles = "";
    }
}