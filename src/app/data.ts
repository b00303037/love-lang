import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faComment, faClock, faGift, faPeopleCarry, faHandshake } from '@fortawesome/free-solid-svg-icons';

export interface Profile {
  name: string;
  pictureUrl: string;
  scores: LoveLangScores;
}

export interface LoveLangScores {
  words: number;
  time: number;
  gifts: number;
  acts: number;
  touch: number;
}

export interface LoveLang {
  cName: string;
  eName: string;
  cDescription: string;
  faIcon: IconDefinition;
}

export const PROFILES: Profile[] = [
  {
    name: 'b00303037',
    pictureUrl: 'https://i.imgur.com/I5RIWSK.jpg',
    scores: {
      words: 3,
      time: 10,
      gifts: 9,
      acts: 2,
      touch: 6,
    }
  },
  {
    name: 'chloeee613',
    pictureUrl: 'https://i.imgur.com/528OC0g.jpg',
    scores:
    {
      words: 3,
      time: 9,
      gifts: 0,
      acts: 9,
      touch: 9,
    }
  },
  {
    name: 'jasmin',
    pictureUrl: 'https://i.imgur.com/pehXwb3.jpg',
    scores:
    {
      words: 7,
      time: 11,
      gifts: 6,
      acts: 2,
      touch: 4,
    }
  },
  {
    name: 'joywang811128',
    pictureUrl: 'https://i.imgur.com/MNuY1zj.jpg',
    scores:
    {
      words: 9,
      time: 6,
      gifts: 10,
      acts: 4,
      touch: 1,
    }

  },
  {
    name: 'neoweng165',
    pictureUrl: 'https://i.imgur.com/2xX1hGo.jpg',
    scores:
    {
      words: 6,
      time: 10,
      gifts: 0,
      acts: 8,
      touch: 6,
    }


  },
  {
    name: 'yuruapr26',
    pictureUrl: 'https://i.imgur.com/tsMEiGi.jpg',
    scores:
    {
      words: 6,
      time: 7,
      gifts: 4,
      acts: 6,
      touch: 7,
    }
  },
]

export const LOVE_LANGS: LoveLang[] = [
  {
    cName: '肯定的言詞',
    eName: 'Words of Affirmation',
    cDescription: '想要說肯定的言詞，就必須學會用正面的態度處理心中的傷痛及憤怒。',
    faIcon: faComment,
  },
  {
    cName: '精心的時刻',
    eName: 'Quality Time',
    cDescription: '精心時刻隱含的意義是：「我在乎你，你也在乎我。我們喜歡兩人在一起的感覺。」',
    faIcon: faClock,
  },
  {
    cName: '接受禮物',
    eName: 'Receiving Gifts',
    cDescription: '重要的不是禮物本身，而是籍禮物所傳達的愛。',
    faIcon: faGift,
  },
  {
    cName: '服務的行動',
    eName: 'Acts of Service',
    cDescription: '服務的行動是真心誠意的付出，不是出於害怕，而是自由意志的選擇。',
    faIcon: faPeopleCarry,
  },
  {
    cName: '身體的接觸',
    eName: 'Physical Touch',
    cDescription: '你必須了解你要觸摸的對象，到底何種形式的觸摸對他／她來說才代表愛。',
    faIcon: faHandshake,
  },
]
