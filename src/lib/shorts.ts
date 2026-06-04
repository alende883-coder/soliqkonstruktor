export type Short = {
  id: string;
  /** The part after /shorts/ in the URL: youtube.com/shorts/<youtubeId> */
  youtubeId: string;
  /** Used for the iframe title / accessibility label. */
  title: string;
};

/**
 * YouTube Shorts shown in the reviews section.
 *
 * ADMIN: to add a video, copy a line below and paste the id from its URL.
 *   https://www.youtube.com/shorts/bWxwERDT_Xs  ->  youtubeId: "bWxwERDT_Xs"
 * (Later this same shape can move into a CMS without changing the UI.)
 */
export const shorts: Short[] = [
  {
    id: "glavbux-1",
    youtubeId: "bWxwERDT_Xs",
    title: "Glavbux dasturi haqida o'quvchi fikri",
  },
  {
    id: "glavbux-2",
    youtubeId: "JDrcbX2oTt4",
    title: "Glavbux dasturi haqida o'quvchi fikri",
  },
  {
    id: "glavbux-3",
    youtubeId: "p15n_qryB8I",
    title: "Glavbux dasturi haqida o'quvchi fikri",
  },
  {
    id: "glavbux-4",
    youtubeId: "-ejPGTfUEGc",
    title: "Glavbux dasturi haqida o'quvchi fikri",
  },
  {
    id: "glavbux-5",
    youtubeId: "fWKJHymwQxM",
    title: "Glavbux dasturi haqida o'quvchi fikri",
  },
];
