import moment from 'moment';

export default [
    { 
        id: '1', 
        description: 'Rent', 
        note: 'This is Rent', 
        amount: 200, 
        createAt: 0 
    },
    { 
        id: '2',
        description: 'Water', 
        note: 'This is some water', 
        amount: 350, 
        createAt: moment(0).subtract(4, 'days').valueOf() 
    },
    { 
        id: '3', 
        description: 'Dress', 
        note: 'This is nice dress', 
        amount: 800,
        createAt: moment(0).add(4, 'days').valueOf() 
    }
]