// on va utiliser dayjs ici
// je déménage mes dépendances car c'est maintenant ici que j'en ai besoin
const dayjs = require('dayjs');

const utc = require('dayjs/plugin/utc'); // dependent on utc plugin
const timezone = require('dayjs/plugin/timezone');

require('dayjs/locale/fr');

dayjs.locale('fr');
dayjs.extend(utc);
dayjs.extend(timezone);

// on va devoir créer une fonction
const getLocalTime = (timezone) => {

    // partir de l'heure actuelle
    const now = dayjs();

    // pour arriver à l'heure locale actuelle
    const localTime = now.tz(timezone);

    return localTime.format('dddd DD/MM/YYYY HH:mm:ss');
}

// à la fin, on exporte
module.exports = {
    getLocalTime
};