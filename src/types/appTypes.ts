export enum AppUrls {
  CHARACTERS = "/characters",
  COMICS = "/comics",
  CREATORS = "/creators",
  EVENTS = "/events",
  SERIES = "/series",
  STORIES = "/stories",
}

export enum LanguageEnum {
  IT = "it",
  EN = "en",
}

export type Label = {
  it: string;
  en: string;
};

export interface CharactersProps {
  id: number;
  name: string;
  description: string;
  thumbnail: ThumbnailProps;
}

export interface ThumbnailProps {
  path: string;
  extension: string;
  resourceURI: string;
}
