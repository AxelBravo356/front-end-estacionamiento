import { Moto } from "./Moto";

export class Usuario{
    idUsuario: number = 0;
    nombreUsuario: string = '';
    paternoUsuario: string = '';
    maternoUsuario: string = '';
    motos: Array<Moto> = [];
}