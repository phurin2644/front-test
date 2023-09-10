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
        deparment: 'front-end',
        date: '26/06/44'
    },{
        id: '2',
        firstName: 'Suwichada',
        lastName: 'Pongkanmoon',
        status: false,
        deparment: 'front-end',
        date: '13/12/44'
    },{
        id: '3',
        firstName: 'Peera',
        lastName: 'Arunrat',
        status: false,
        deparment: 'front-end',
        date: '24/07/44'
    },{
        id: '4',
        firstName: 'Thain',
        lastName: 'Suwannakul',
        status: true,
        deparment: 'back-end',
        date: '13/02/44'
    },{
        id: '5',
        firstName: 'Piyaphat',
        lastName: 'Khaosaeng',
        status: false,
        deparment: 'back-end',
        date: '08/11/45'
    },{
        id: '6',
        firstName: 'Chonlanan',
        lastName: 'Thongthai',
        status: false,
        deparment: 'back-end',
        date: '05/12/45'
    },
]
export default userdata