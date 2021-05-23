export class ProfileDTO {

    id: number;
    name: string;
    email: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    imageUrl: string;
    image64Base: string;
  
    constructor(json?: Partial<ProfileDTO>) {
      Object.assign(this, json);
    }
}