export enum CatanResource {
  Wood = "Wood",
  Brick = "Brick",
  Stone = "Stone",
  Wheat = "Wheat",
  Sheep = "Sheep",
}

export interface Contract {
  maker: string;
  taker: string;
  perRoundResource: {
    amount: number;
    resource: CatanResource;
  };
  immediateReceive: {
    amount: number;
    resource: CatanResource;
  };
  finalResource: {
    amount: number;
    resource: CatanResource;
  };
}
