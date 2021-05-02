export class ProfileDTO {

    id: number;
    name: string;
    email: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    imageUrl: string;
  
    constructor(json?: Partial<ProfileDTO>) {
      Object.assign(this, json);
    }
}