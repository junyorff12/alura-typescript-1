export class NegociacoesView{
  template(): string {
    return `
      <table class"table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUATIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>     
      </table>
    `;
  }
}