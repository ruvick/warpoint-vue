import { boot } from 'quasar/wrappers';
import 'v-calendar/style.css'
import VCalendar from 'v-calendar';
import '@popperjs/core';

export default boot(({ app }) => {
  app.use(VCalendar, {
    masks: {
      weekdays: 'WW',
    },
  });
});
