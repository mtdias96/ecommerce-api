interface ICepDate {
  fromCep: string; //local partida
  toCep: string; //Local recebimento
  quantity: number;

}

export class CepCalculatorUseCase{
  async execute({fromCep, quantity, toCep}: ICepDate) {
    console.log(fromCep, quantity, toCep);
  }
}
