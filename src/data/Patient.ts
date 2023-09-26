export interface InfoCardProps {
  id: number;
  title: string;
  name: string;
  timestamp: Date;
  Status: boolean;
}

export const initialInfoCardsData: InfoCardProps[] = [
  {
    id: 1,
    title: "Card 1",
    name: "Phurin",
    timestamp: new Date("2023-09-10T10:20:00"),
    Status: false,
  },

  {
    id: 2,
    title: "Card 2",
    name: "Suwichada",
    timestamp: new Date("2023-09-10T10:25:00"),
    Status: true,
  },
  {
    id: 3,
    title: "Card 3",
    name: "Peera",
    timestamp: new Date("2023-09-10T10:30:00"),
    Status: true,
  },
  {
    id: 4,
    title: "Card 4",
    name: "Piyaphat",
    timestamp: new Date("2023-09-10T10:35:00"),
    Status: true,
  },
  {
    id: 5,
    title: "Card 4",
    name: "Chonlanan",
    timestamp: new Date("2023-09-10T10:40:00"),
    Status: true,
  },
];
