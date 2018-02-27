import * as moment from 'moment';

export const toAppDate = (timestamp: number) => moment(new Date(timestamp)).format("MMM Do YY, h:mm:ss a");