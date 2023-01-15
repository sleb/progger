import { Song } from "./song.model";

export interface ProgramData {
  title: string;
  date: Date;
  youthSpeakers: string[];
  adultSpeakers: string[];
  openingPrayer: string;
  closingPrayer: string;
  announcements: string[];
  business: string[];
  openingHymn: Song;
  sacramentHymn?: Song;
  restHymn?: Song;
  closingHymn: Song;
}

export interface Program extends ProgramData {
  id: string;
}
