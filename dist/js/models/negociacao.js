export class Negociacao {
    // construtor reduzido
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    //mesma coisa de ter um getter
    // constructor(onstructor(
    //   public readonly data: Date,
    //   public readonly quantidade: number,
    //   public readonly valor: number
    // ){ };
    //constructor padrao
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //   this._data = data;
    //   this._quantidade = quantidade;
    //   this._valor = valor;
    // }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
