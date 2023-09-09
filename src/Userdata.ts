export interface Userdata {
    id: string;
    firstName: string;
    lastName: string;
    status: boolean;
    deparment: string;
    date: string;
}

const  userdata : Userdata[] = [
    {
        id: '1',
        firstName: 'Phurin',
        lastName: 'Prasit',
        status: true,
        deparment: 'xxxxx',
        date: '26/06/44'
    },{
        id: '2',
        firstName: 'Suwichada',
        lastName: 'Pongkanmoon',
        status: false,
        deparment: 'xxxxx',
        date: '13/12/44'
    },{
        id: '3',
        firstName: 'Peera',
        lastName: 'Arunrat',
        status: false,
        deparment: 'xxxxx',
        date: '24/07/44'
    },{
        id: '4',
        firstName: 'Thain',
        lastName: 'Suwannakul',
        status: true,
        deparment: 'xxxxx',
        date: '13/02/44'
    },
]
export default userdata