
  export class movie{
    title :string | undefined
    year : number | undefined 
    cast : object | undefined
    genres: Array<string> | undefined
    href? : string | undefined 
    extract? : string | undefined
    thumbnail?: string | undefined 
    thumbnail_width?: number | undefined
    thumbnail_height?: number | undefined
  }