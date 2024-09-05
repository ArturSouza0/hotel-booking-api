export abstract class CargoRepository {
  abstract create(descricao: string): Promise<void>;
}
