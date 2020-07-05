import {of} from 'rxjs';

const RestaurantList = [
    {
        'Restaurant ID': 6317637,
        'Restaurant Name': 'Le Petit Souffle',
        Cuisines: 'French, Japanese, Desserts',
        'Average Cost for two': 1100,
        Currency: 'Botswana Pula(P)',
        'Has Table booking': 'Yes',
        'Has Online delivery': 'No',
        'Aggregate rating': 4.8,
        'Rating color': 'Dark Green',
        'Rating text': 'Excellent',
        Votes: 314
      },
      {
        'Restaurant ID': 6304287,
        'Restaurant Name': 'Izakaya Kikufuji',
        Cuisines: 'Japanese',
        'Average Cost for two': 1200,
        Currency: 'Botswana Pula(P)',
        'Has Table booking': 'Yes',
        'Has Online delivery': 'No',
        'Aggregate rating': 4.5,
        'Rating color': 'Dark Green',
        'Rating text': 'Excellent',
        Votes: 591
      },
];

class RestaurantStubService {
    getRestaurantList = () => {
        return of(RestaurantList);
    }
}

export {
    RestaurantStubService,
    RestaurantList,
};
