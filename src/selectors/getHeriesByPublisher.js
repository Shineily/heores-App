import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPublisers = ['DC Comics', 'Marvel Comics'];

  if (!validPublisers.includes(publisher)) {
    throw new Error(`Publiser "${publisher}" no es correcto`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
