export interface InfoCardProps {
  id: number;
  hospitalNumber: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  Status: string;
}

export type Entry = "WALKIN" | "REFER";
export type TaskStatus = "PENDING" | "SUCCESS" | "CANCELLED";

export interface TaskGroup {
  hospitalNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  blueprintType: string;
  entry: string;
  destination: string;
  status: string;
}
