import viaCepClient from '../../../server/httpClient/viaCepCLient';

interface ICepAddreas {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export class CepAddreasUseCase {
  async execute({ cep }: { cep: string }): Promise<{ resultCepAddreas: ICepAddreas }> {
    try {
      const { data: resultCepAddreas } = await viaCepClient.get<ICepAddreas>(`${cep}/json/`);

      return { resultCepAddreas };
    } catch {
      throw new Error('Erro ao buscar o endereço do CEP');
    }
  }
}
