"use client"
import {
  MemberType,
  AttendanceType,
  EmployeeType,
  LoginCredential,
} from "@/types/types"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Router, useRouter } from "next/router"
const LoginHandler = ({ email, password }: LoginCredential) => {
  const router = useRouter()
  if (email === "rit@gmail.com") {
    if (password === "rit123") {
      router.push("/dashboard")
    } else {
      console.log("wrong password")
    }
  } else {
    console.log("user credential not matched")
  }
}

const GetMemberTypes = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:8000/api/types")

      return data as MemberType[]
    },
  })
}

const GetEmployees = () => {
  return useQuery({
    queryKey: ["employees"],

    queryFn: async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:8000/api/employees")
      if (!data) {
        throw new Error("data not found")
      } else {
        return data as EmployeeType[]
      }
    },
  })
}
const GetAttendances = () => {
  return useQuery({
    queryKey: ["attendances"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:8000/api/attendances")
      return data as AttendanceType[]
    },
  })
}
export { GetAttendances, GetMemberTypes, GetEmployees, LoginHandler }
