export default function fetch(url) {
  const search = url.split('?')[1];
  const pairs = search.split('&');
  const { filter, term } = pairs.reduce((accum, p) => {
    const [k, v] = p.split('=');
    accum[k] = v;
    return accum;
  }, {});

  const results = [];
  for (let i = 1; i < 11; i++) {
    let resultFilter = filter;
    if (!resultFilter) {
      resultFilter = getRandomFilter(i);
    }
    results.push({ id: i, name: term, filter: resultFilter })
  }

  return Promise.resolve(results);
}

function getRandomFilter(seed) {
  return FILTERS[seed % FILTERS.length];
}

const FILTERS = [
  'dog',
  'cat',
  'fish'
];
