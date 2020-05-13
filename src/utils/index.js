import moment from 'moment'


 
export const beautyDate = (string) => {
    const date = moment(string)
    return date.format('LLLL')
}