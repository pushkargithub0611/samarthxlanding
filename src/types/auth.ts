
export type UserRole = 'super_admin' | 'school_admin' | 'teacher' | 'student';

export interface Profile {
  id: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface SchoolMember {
  id: string;
  school_id: string;
  user_id: string;
  role: UserRole;
  class_id?: string;
  section?: string;
  created_at: string;
  updated_at: string;
}

export interface StudentPerformance {
  id: string;
  student_id: string;
  school_id: string;
  subject: string;
  marks: number;
  max_marks: number;
  exam_date: string;
  exam_type: string;
  created_at: string;
  updated_at: string;
}
