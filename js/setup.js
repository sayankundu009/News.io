//Category [business entertainment general health science sports technology]

getElementById('general').addEventListener('click', () => {
  fetchNews('general');
});
getElementById('technology').addEventListener('click', () => {
  fetchNews('technology');
});
getElementById('health').addEventListener('click', () => {
  fetchNews('health');
});

getElementById('sports').addEventListener('click', () => {
  fetchNews('sports');
});

getElementById('science').addEventListener('click', () => {
  fetchNews('science');
});

getElementById('entertainment').addEventListener('click', () => {
  fetchNews('entertainment');
});

getElementById('general').click();
