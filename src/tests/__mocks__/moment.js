import moment from 'moment';
//const moment = require.requireActual('moment');

export default (timestamp = 0,from='unknown') => {
    console.log("Mocked momement called from ",from);
    return moment(timestamp);
}