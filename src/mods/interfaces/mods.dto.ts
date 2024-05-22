export class CreateModDto {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly gameID: string;
  readonly userID: string;
}

export class UpdateModDto {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly gameID: string;
  readonly userID: string;
}

export class FindModDto {
  readonly id: string;
}
