import { Component } from '@angular/core';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: IPost[] = [
    {
      id: 1,
      title:
        'TechCrunch Minute: Robinhood’s credit card has arrived to take on Apple',
      body: 'But what gives with tech companies getting into the consumer credit game? You could argue that Robinhood’s choice to offer a card is just an extension of its already-expanding portfolio of financial products. But Apple also has a card, recall. And the tech giant is getting deeper into the realm of personal finance as time goes along.',
      imgUrl:
        'https://techcrunch.com/wp-content/uploads/2024/03/greysen-johnson-cZVzzFadTMc-unsplash.jpg?w=1390&crop=1',
    },
    {
      id: 2,
      title:
        'Google will let you swipe right or left on clothes to get better fashion recommendations',
      body: 'Google is rolling out a new update that makes it easier for users to find personalized shopping results, the company announced on Wednesday. The new feature lets users rate different products in order to get style recommendations when shopping for apparel, shoes and accessories. The update comes as Google continues to compete with companies like Amazon and Walmart',
      imgUrl:
        'https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=1390&crop=1',
    },
  ];
}
