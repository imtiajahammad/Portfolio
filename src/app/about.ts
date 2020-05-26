
export  class About{

     id: number;
     firstName: string;
     lastName: string;
     address:AboutAddress;
     email:string;
     objective:string;
     links:AboutLinks;
}
/*
export  interface IAbout{

     id: number;
     firstName: string;
     lastName: string;
     address:AboutAddress;
     email:string;
     objective:string;
     links:AboutLinks;
}

*/
export class AboutAddress{
     city: string;
     country: string;
}
export class AboutLinks{
     linkedIn:string;
     gitHub:string;
     twitter:string;
     instagram:string;
     facebook:string;
}