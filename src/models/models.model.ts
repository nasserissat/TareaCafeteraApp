export interface Vaso {
    cantidadDisponible: number;
    contendo: number;
}
export interface Cafetera{
    cantidadCafe: number;
}
export interface Azucarero{
    cantidadAzucar: number;
}
export interface MaquinaCafe{
    cafe: Cafetera;
    vasoPequenos: Vaso;
    vasoMediano: Vaso;
    vasoGrande: Vaso;
    azucar: Azucarero;
}