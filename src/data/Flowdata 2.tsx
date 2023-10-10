export interface FlowData {
    id: string;
    title: string;
    name: string;
    timestamp: string;
    Status: boolean;
    Addtask: number;
  }

  export const flowdata : FlowData[] = [
    {
        id: '1',
        title: 'จุดคัดกรอง',
        name: 'Phurin Prasit',
        timestamp: 'วว/ดด/ปป 12.00',
        Status: false,
        Addtask: 0
    },{
        id: '2',
        title: 'จุดครวจ',
        name: 'Phurin Prasit',
        timestamp: 'วว/ดด/ปป 12.00',
        Status: false,
        Addtask: 0
    }
  ]