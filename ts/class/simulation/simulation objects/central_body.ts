
export class Central_body {

    id: string;
    private mass: number;       //Mass
    private radius: number;     //Radius
    private radius_s: number;   //Schwarzschild radius

    constructor(id: string, mass: number, radius: number) {
        this.id = id;
        this.mass = mass;
        this.radius = radius;
        this.radius_s = 2*G*mass / (c**2);
    }

    public get_mass() { return this.mass; }

    public get_radius() { return this.radius; }

    public get_radius_s() { return this.radius_s; }


}