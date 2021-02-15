export interface Course {
  
     id: number;
     name: string;
     featured: boolean;
     image: string;
     language: string;
     price:number;
     duration:number;
     lessons:number;
     deadline:string | Date;
     students:number;
     summary: string;
     instructor:number;
     category:number
   
    }