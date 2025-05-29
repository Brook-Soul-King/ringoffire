import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Alle müssen gleichzeitig mit dem Trinken beginnen. Sobald Spieler 1 aufhört zu trinken, darf auch Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört zu trinken, und so weiter.' },
    { title: 'YOU', description: 'Du entscheidest wer trinkt' },
    { title: 'ME', description: 'Glückwunsch! TRINK!' },
    { title: 'Quizmaster', description: 'Stelle eine Wissensfrage an einen der Mitspieler, wenn er sie richtig beantwortet, musst du trinken. Beantwortet er/sie die Frage falsch, so muss er/sie trinken.' },
    { title: 'Rollenwechsel', description: 'Der Spieler, der die Karte zieht, darf zwei Mitspieler bestimmen, die für 3 Runden ihre Namen tauschen müssen. Jeder, der den falschen Namen benutzt, trinkt.' },
    { title: 'Eiszeit', description: 'Die Person darf eine „Eiszeit“ ausrufen (z. B. 1 Minute lang). In dieser Zeit darf niemand lachen. Wer lacht, trinkt.' },
    { title: 'Unwort', description: 'Der Spieler bestimmt ein Wort. Wer es sagt, muss trinken – gilt bis zur nächsten Karte.' },
    { title: 'Teammate', description: 'Wähle einen Teammate, jedes mal wenn einer von euch trinken muss, trinkt ihr beide.' },
    { title: 'Silent Mode', description: 'Der Spieler darf für die nächsten 2 Runden nichts sagen. Wer ihn anspricht oder er selbst etwas sagt, trinkt.' },
    { title: 'Trinkt ihr Narren!', description: 'Alle Mitspieler, müssen etwas trinken.' },
    { title: 'Oberthema', description: 'Überlege dir eine Kategorie (z.B. Automarken). Jeder Spieler muss etwas aus der Kategorie aufzählen. Derjenige, der zuerst etwas doppelt sagt oder nichts mehr weiß, muss trinken.' },
    { title: 'Ich hab noch nie...', description: 'Sage etwas, was du noch nie gemacht hast. Jeder der das schon einmal gemacht hat, muss trinken.' },
    { title: 'Ma Lord', description: 'Wer auf die Fragen den Königs antwortet, muss trinken.' },
  ];

  title = '';
  description = '';
  // cardVisible: boolean = false;

  @Input() card: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
      console.log('Current Card is: ', this.card);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
      // this.cardVisible = true;
    }
  }
}
