import {
  CHARACTERS_LABEL,
  CREATORS_LABEL,
  EVENTS_LABEL,
  SERIES_LABEL,
  STORIES_LABEL,
} from "../constants/dictionary";
import { AppUrls } from "../types/appTypes";

export const NavBarArray = [
  {
    navbar_element: CHARACTERS_LABEL,
    to: AppUrls.CHARACTERS,
  },

  {
    navbar_element: CREATORS_LABEL,
    to: AppUrls.CREATORS,
  },
  {
    navbar_element: EVENTS_LABEL,
    to: AppUrls.EVENTS,
  },
  {
    navbar_element: SERIES_LABEL,
    to: AppUrls.SERIES,
  },
  {
    navbar_element: STORIES_LABEL,
    to: AppUrls.STORIES,
  },
];
