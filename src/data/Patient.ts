export interface InfoCardProps {
  id: string;
  hospitalNumber: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  Status: boolean;
}

export type Entry = "WALKIN" | "REFER"; 

export interface InfoCard {
  hospitalNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  entry: string;
  destination: string;
}
