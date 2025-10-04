export interface propertyProps {
    _id:string
    name: string,
    value: number,
    img: string
  }
  
  
  export interface dataProperties {
    ok :boolean,
    data: propertyProps[]
  }
  