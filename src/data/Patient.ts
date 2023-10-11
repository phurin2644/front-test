export interface InfoCardProps {
  createdAt: string;
  patient: {
    createdAt: string;
    lastName: string;
    firstName: string;
    hospitalNumber: string;
    visitNumber: string;
    admitNumber: string;
    id: string;
    title: string;
  };
  id: string;
  currentTasks: {
    status: string;
  }[];
}

export type Entry = "WALKIN" | "REFER";

export interface TaskGroup {
  hospitalNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  blueprintType: string;
  entry: string;
  destination: string;
}
