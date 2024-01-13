import { Moto } from "./Moto";
import { SistemaControl } from "./SistemaControl";

export class Salida{
    idSalida:number=0;
    fechahora:String ="";
    idSistemaControl:SistemaControl=new SistemaControl();
    idMoto:Moto=new Moto();
}