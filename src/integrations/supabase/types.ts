export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      schools: {
        Row: {
          address: string
          administration_type: string
          affiliation_board: Database["public"]["Enums"]["affiliation_board"]
          affiliation_number: string
          created_at: string | null
          district: string
          email: string
          gram_panchayat: string | null
          has_pre_primary: boolean | null
          highest_class: number
          hos_email: string
          hos_mobile: string
          hos_name: string
          hos_type: Database["public"]["Enums"]["hos_type"]
          id: string
          landline_number: string | null
          location_type: Database["public"]["Enums"]["school_location_type"]
          lowest_class: number
          management_code: string
          management_group: Database["public"]["Enums"]["management_group"]
          mobile_number: string
          nodal_ministry: string | null
          pin_code: string
          pre_primary_classes: number | null
          respondent_email: string
          respondent_mobile: string
          respondent_name: string
          respondent_type: Database["public"]["Enums"]["respondent_type"]
          revenue_block: string | null
          school_category_code: string
          school_name: string
          school_type: Database["public"]["Enums"]["school_type"]
          state_board_name: string | null
          std_code: string | null
          streams_available: string[] | null
          udise_block: string
          udise_code: string
          updated_at: string | null
          urban_local_body: string | null
          user_id: string | null
          village_name: string | null
          ward_name: string | null
          website: string | null
        }
        Insert: {
          address: string
          administration_type: string
          affiliation_board: Database["public"]["Enums"]["affiliation_board"]
          affiliation_number: string
          created_at?: string | null
          district: string
          email: string
          gram_panchayat?: string | null
          has_pre_primary?: boolean | null
          highest_class: number
          hos_email: string
          hos_mobile: string
          hos_name: string
          hos_type: Database["public"]["Enums"]["hos_type"]
          id?: string
          landline_number?: string | null
          location_type: Database["public"]["Enums"]["school_location_type"]
          lowest_class: number
          management_code: string
          management_group: Database["public"]["Enums"]["management_group"]
          mobile_number: string
          nodal_ministry?: string | null
          pin_code: string
          pre_primary_classes?: number | null
          respondent_email: string
          respondent_mobile: string
          respondent_name: string
          respondent_type: Database["public"]["Enums"]["respondent_type"]
          revenue_block?: string | null
          school_category_code: string
          school_name: string
          school_type: Database["public"]["Enums"]["school_type"]
          state_board_name?: string | null
          std_code?: string | null
          streams_available?: string[] | null
          udise_block: string
          udise_code: string
          updated_at?: string | null
          urban_local_body?: string | null
          user_id?: string | null
          village_name?: string | null
          ward_name?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          administration_type?: string
          affiliation_board?: Database["public"]["Enums"]["affiliation_board"]
          affiliation_number?: string
          created_at?: string | null
          district?: string
          email?: string
          gram_panchayat?: string | null
          has_pre_primary?: boolean | null
          highest_class?: number
          hos_email?: string
          hos_mobile?: string
          hos_name?: string
          hos_type?: Database["public"]["Enums"]["hos_type"]
          id?: string
          landline_number?: string | null
          location_type?: Database["public"]["Enums"]["school_location_type"]
          lowest_class?: number
          management_code?: string
          management_group?: Database["public"]["Enums"]["management_group"]
          mobile_number?: string
          nodal_ministry?: string | null
          pin_code?: string
          pre_primary_classes?: number | null
          respondent_email?: string
          respondent_mobile?: string
          respondent_name?: string
          respondent_type?: Database["public"]["Enums"]["respondent_type"]
          revenue_block?: string | null
          school_category_code?: string
          school_name?: string
          school_type?: Database["public"]["Enums"]["school_type"]
          state_board_name?: string | null
          std_code?: string | null
          streams_available?: string[] | null
          udise_block?: string
          udise_code?: string
          updated_at?: string | null
          urban_local_body?: string | null
          user_id?: string | null
          village_name?: string | null
          ward_name?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      affiliation_board:
        | "CBSE"
        | "STATE_BOARD"
        | "ICSE"
        | "INTERNATIONAL_BOARD"
        | "BOTH_CBSE_STATE"
        | "MADARSA_BOARD"
        | "SANSKRIT_BOARD"
        | "MSRVSSB"
      hos_type:
        | "HEAD_MASTER"
        | "ASST_HEAD_MASTER"
        | "ACTING_HEAD_TEACHER"
        | "IN_CHARGE_OTHER_SCHOOL"
        | "IN_CHARGE_BLOCK_DISTRICT"
        | "OTHERS"
      management_group:
        | "STATE_GOVT"
        | "GOVT_AIDED"
        | "PRIVATE_UNAIDED"
        | "CENTRAL_GOVT"
        | "OTHERS"
      respondent_type:
        | "HEAD_OF_SCHOOL"
        | "TEACHER"
        | "ADMIN_STAFF"
        | "IN_CHARGE_BLOCK"
        | "IN_CHARGE_OTHER_SCHOOL"
      school_location_type: "RURAL" | "URBAN"
      school_type: "BOYS" | "GIRLS" | "CO_EDUCATIONAL"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
