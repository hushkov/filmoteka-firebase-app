import Router from '../../Router';

const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/mylibrary/, () => {
    console.log('welcome in mylibrary page');
  })
  .add(/watched/, () => {
    console.log('welcome in watched list');
  })
  .add(/queue/, () => {
    console.log('welcome in queue list');
  });
