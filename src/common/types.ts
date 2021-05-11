export type Participant = {
  id: string;
  first_name: string;
  last_name: string;
  participant_id: string;
  dob: string;
  email: string;
};

export type Course = {
  id: string;
  course_title: string;
  date_started: string;
  date_ended: string;
  grade1_interval?: string;
  grade2_interval?: string;
  grade3_interval?: string;
  grade4_interval?: string;
  grade5_interval?: string;
};

export type Course_Participant = {
  course_id: string;
  participant_id: string;
  assignment1?: number;
  assignment2?: number;
  assignment3?: number;
  exam?: number;
  final_grades?: number;
};

// any custom components under RA <DataGrid> can receive these props
export type XDataGridProps<T> = {
  basePath?: string;
  id?: number;
  record?: T;
  resource?: string;
};
