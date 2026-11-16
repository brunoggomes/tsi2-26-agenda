export type TipoContato = 
    'Amigo(a)' | 'IFRN' | 
    'Trabalho' | 'Família' | 'Outro'

export class Contato {
    nome: string
    telefone: number
    tipo: TipoContato
    constructor(nm: string, tel: number, 
               tipo: TipoContato = "Amigo(a)") {
        this.nome = nm
        this.telefone = tel
        this.tipo = tipo
    }
}