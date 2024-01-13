type Movie = {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": Array<number>,
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

type Genre = {
    "id": number,
    "name": string
}

type ProductionCompanies = {
    "id": number,
    "logo_path": string,
    "name": string,
    "origin_country": string
}

type ProductionCountries = {
    "iso_3166_1": string,
    "name": string
}

type SpokenLanguages = {
    "english_name": string,
    "iso_639_1": string,
    "name": string
}


type Singlemovie = {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection": string | null,
    "budget": number,
    "genres": Array<Genre>,
    "homepage": string,
    "id": number,
    "imdb_id": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "production_companies": Array<ProductionCompanies>,
    "production_countries": Array<ProductionCountries>,
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "spoken_languages": Array<SpokenLanguages>,
    "status": string,
    "tagline": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

type Castdetails = {
    "adult": boolean,
    "gender": number,
    "id": number,
    "known_for_department": string,
    "name": string,
    "original_name": string,
    "popularity": number,
    "profile_path": string,
    "cast_id": number,
    "character": string,
    "credit_id": string,
    "order": number
}

type Singlecast = {
    "id": number,
    "cast": Array<Castdetails>
}