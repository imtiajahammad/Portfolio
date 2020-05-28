export class Experience{
    id: number;
    position: string;
    company: string;
    description:ExperienceDescription;
    startDate:string;
    endDate:string;
}

export class ExperienceDescription{
    about: string;
    points:string[]
}