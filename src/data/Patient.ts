export interface InfoCardProps {
  id: number;
  title: string;
  name: string;
  timestamp: string;
  Status: string;
}

export const initialInfoCardsData: InfoCardProps[] = [
  {
    id: 1,
    title: "Card 1",
    name: "Phurin",
    timestamp: "2023-09-10 10:00:00",
    Status: "Active",
  },

  {
    id: 2,
    title: "Card 2",
    name: "Suwichada",
    timestamp: "2023-09-10 11:00:00",
    Status: "Success",
  },
  {
    id: 3,
    title: "Card 3",
    name: "Peera",
    timestamp: "2023-09-10 11:00:00",
    Status: "Success",
  },
  {
    id: 4,
    title: "Card 4",
    name: "Piyaphat",
    timestamp: "2023-09-10 11:00:00",
    Status: "Success",
  },
  {
    id: 5,
    title: "Card 4",
    name: "Chonlanan",
    timestamp: "2023-09-10 11:00:00",
    Status: "Success",
  },
];
