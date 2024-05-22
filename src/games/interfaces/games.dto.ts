export class CreateGameDto {
  readonly name: string;
  readonly desc: string;
}

export class UpdateGameDto {
  readonly id: string;
  readonly name: string;
  readonly desc: string;
}

export class FindGameDto {
  readonly id: string;
}
