export interface InfoCardProps {
  id: number;
  title: string;
  name: string;
  timestamp: string;
  Status: boolean;
}

export const initialInfoCardsData: InfoCardProps[] = [
  {
    id: 1,
    title: "Card 1",
    name: "Phurin",
    timestamp: "2023-09-10 10:00:00",
    Status: false,
  },

  {
    id: 2,
    title: "Card 2",
    name: "Suwichada",
    timestamp: "2023-09-10 11:00:00",
    Status: true,
  },
  {
    id: 3,
    title: "Card 3",
    name: "Peera",
    timestamp: "2023-09-10 11:00:00",
    Status: true,
  },
  {
    id: 4,
    title: "Card 4",
    name: "Piyaphat",
    timestamp: "2023-09-10 11:00:00",
    Status: true,
  },
  {
    id: 5,
    title: "Card 4",
    name: "Chonlanan",
    timestamp: "2023-09-10 11:00:00",
    Status: true,
  },
];
