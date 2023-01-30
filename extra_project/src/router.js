import { Router } from '@vaadin/router';

const outlet = document.querySelector('#outlet');
export const router = new Router(outlet);

router.setRoutes([
    {path: '/', component:'home-comp'},
    {path: '/subjects', component:'subjects-comp'}
]);