export class Negociacao {
  // construtor reduzido
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) { }

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
    return this._data;
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
