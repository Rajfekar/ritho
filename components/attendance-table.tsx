"use client"
import { FC, useEffect, useState } from "react"
import React from "react"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react"
import { GetEmployees } from "@/hooks/route"
import { EmployeeType } from "@/types/types"

interface AttendanceTableProps {}

const AttendanceTable: FC<AttendanceTableProps> = ({}) => {
  var users: EmployeeType[] = []
  const { data, isLoading, isError } = GetEmployees()
  // @ts-expect-error
  users = data
  isError ? "something went wrong..." : ""

  return (
    <>
      {isLoading ? (
        "Loding..."
      ) : (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {users.map((val, i) => (
              <TableRow key={i}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.type_id}</TableCell>
                <TableCell>
                  <div className="lg:flex lg:justify-evenly">
                    <Button size="sm" color={"success"}>
                      In
                    </Button>
                    <Button size="sm" color={"danger"}>
                      Out
                    </Button>
                    <Button size="sm" color={"warning"}>
                      Absent
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default AttendanceTable
