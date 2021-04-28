export type Participant = {
  id?: number;
  first_name: string;
  last_name: string;
  participant_id: string;
  dob: string;
  email: string;
};

export type Course = {
  course_id: string;
  course_title: string;
  course_description?: string;
  date_started: string;
  date_ended: string;
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
