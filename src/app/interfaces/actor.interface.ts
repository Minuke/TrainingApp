export interface Actor {
  id:              number;
  first_name:      string;
  last_name:       string;
  gender:          Gender;
  bornCity:        string;
  birthdate:       string;
  img:             null | string;
  rating:          number;
  movies:          number[];
  nombre_completo: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}
