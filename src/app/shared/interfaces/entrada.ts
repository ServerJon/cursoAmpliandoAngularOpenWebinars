export interface Entrada {
  id: number;
  titulo: string;
  resumen: string;
  autor: string;
  fecha: string;
}

export interface Entradas {
  data: Entrada[];
}
