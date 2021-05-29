import { ApiProperty } from "@nestjs/swagger";

export class ProfileDTO {

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    level: number;

    @ApiProperty()
    currentExperience: number;

    @ApiProperty()
    challengesCompleted: number;

    @ApiProperty()
    imageUrl: string;

    @ApiProperty()
    image64Base: string;
  
    constructor(json?: Partial<ProfileDTO>) {
      Object.assign(this, json);
    }
}