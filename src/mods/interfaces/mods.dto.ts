export class CreateModDto {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly gameID: string;
  readonly userID: string;
}

export class UpdateModDto {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly gameID: string;
  readonly userID: string;
}
