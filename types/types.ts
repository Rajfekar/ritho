import { type } from "os"

interface MemberType {
  id: number
  name: string
  created_at: null | string
  updated_at: null | string
}

interface AttendanceType {
  id: number
  employee_id: number
  intime: string
  outtime: string
  created_at: null | string
  updated_at: null | string
}

interface EmployeeType {
  id: number
  name: string
  type_id: number
  mobile: string | null
  address: null | string
  image: null | string
  created_at: null | string
  updated_at: null | string
}
interface LoginCredential {
  email: string
  password: string
}
export type { EmployeeType, AttendanceType, MemberType, LoginCredential }
