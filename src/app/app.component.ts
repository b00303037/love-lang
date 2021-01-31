import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PROFILES, LOVE_LANGS, Profile, LoveLang, LoveLangScores } from './data';

@Component({
  selector: 'love-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profiles: Profile[] = PROFILES;
  langs: LoveLang[] = LOVE_LANGS;

  selected: Profile;
  scores: LoveLangScores;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.changeProfile(this.profiles[0]);
  }

  changeProfile(selected: Profile): void {
    this.selected = selected;
    this.scores = { ...this.selected.scores };
  }

  scrollTo(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
