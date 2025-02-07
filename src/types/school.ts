
export type SchoolLocationType = 'RURAL' | 'URBAN';
export type HosType = 'HEAD_MASTER' | 'ASST_HEAD_MASTER' | 'ACTING_HEAD_TEACHER' | 'IN_CHARGE_OTHER_SCHOOL' | 'IN_CHARGE_BLOCK_DISTRICT' | 'OTHERS';
export type ManagementGroup = 'STATE_GOVT' | 'GOVT_AIDED' | 'PRIVATE_UNAIDED' | 'CENTRAL_GOVT' | 'OTHERS';
export type SchoolType = 'BOYS' | 'GIRLS' | 'CO_EDUCATIONAL';
export type AffiliationBoard = 'CBSE' | 'STATE_BOARD' | 'ICSE' | 'INTERNATIONAL_BOARD' | 'BOTH_CBSE_STATE' | 'MADARSA_BOARD' | 'SANSKRIT_BOARD' | 'MSRVSSB';
export type RespondentType = 'HEAD_OF_SCHOOL' | 'TEACHER' | 'ADMIN_STAFF' | 'IN_CHARGE_BLOCK' | 'IN_CHARGE_OTHER_SCHOOL';

export interface SchoolFormData {
  udise_code: string;
  school_name: string;
  district: string;
  udise_block: string;
  location_type: SchoolLocationType;
  revenue_block?: string;
  village_name?: string;
  gram_panchayat?: string;
  urban_local_body?: string;
  ward_name?: string;
  address: string;
  pin_code: string;
  std_code?: string;
  landline_number?: string;
  mobile_number: string;
  email: string;
  website?: string;
  hos_type: HosType;
  hos_name: string;
  hos_mobile: string;
  hos_email: string;
  management_group: ManagementGroup;
  management_code: string;
  nodal_ministry?: string;
  administration_type: string;
  school_category_code: string;
  lowest_class: number;
  highest_class: number;
  has_pre_primary: boolean;
  pre_primary_classes?: number;
  streams_available?: string[];
  school_type: SchoolType;
  affiliation_board: AffiliationBoard;
  state_board_name?: string;
  affiliation_number: string;
  respondent_type: RespondentType;
  respondent_name: string;
  respondent_mobile: string;
  respondent_email: string;
}
