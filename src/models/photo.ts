interface PhotoAttributes{

    musique: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
    lien_photo: string,
    description: string

}

export class Photo {

    Id: number;
    Attributes: PhotoAttributes

    constructor(id: number, attributes: PhotoAttributes ){
        this.Id = id;
        this.Attributes = attributes;
    }

    get id(){
        return this.Id;
    }
    set id(value: number){
        this.Id = value;
    }

    get attributes(){
        return this.Attributes;
    }
    set attributes(value: PhotoAttributes){
        this.Attributes = value;
    }

}