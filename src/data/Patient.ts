export interface InfoCardProps {
  id: string;
  hospitalNumber: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  Status: string;
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
  status: string;
}

export interface CaseInfo {
  id: string,
  title: string,
  firstName: string,
  lastName: string,
  hospitalNumber: string,
  visitNumber: string,
  admitNumber: string,
  updatedAt: string,
  createdAt: string
        
}
