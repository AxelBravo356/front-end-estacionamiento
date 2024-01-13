import { Moto } from "./Moto";
import { SistemaControl } from "./SistemaControl";

export class Entrada{
    idEntrada:number=0;
    fechahora:String ="";
    idSistemaControl:SistemaControl=new SistemaControl();
    idMoto:Moto=new Moto();
}