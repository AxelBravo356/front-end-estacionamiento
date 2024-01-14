import { Moto } from "./Moto";
import { SistemaControl } from "./SistemaControl";

export class Entrada{
    idEntrada:number=0;
    fechahora:string ='';
    idSistemaControl:SistemaControl=new SistemaControl();
    idMoto:Moto=new Moto();
}