"use client"; // กำหนดให้เป็น Client Component

import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material"; // นำเข้า TextField
import React from "react";

interface DateReserveProps {
  onDateChange: (value: Dayjs | null) => void;
}

export default function DateReserve({ onDateChange }: DateReserveProps) {
  const [reserveDate, setReserveDate] = React.useState<Dayjs | null>(null);

  const handleDateChange = (value: Dayjs | null) => {
    setReserveDate(value);
    onDateChange(value);
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Reserve Date"
          value={reserveDate}
          onChange={handleDateChange}
          // แก้ไข: เพิ่ม prop นี้เพื่อแก้ไขข้อผิดพลาดเรื่อง props ที่ไม่รู้จัก
          enableAccessibleFieldDOMStructure={false}
          // slots.textField กำหนดให้ใช้ TextField Component
          // slotProps.textField กำหนด props ต่างๆ ให้ TextField เช่น label
          slots={{ textField: TextField }}
          slotProps={{ textField: { variant: "outlined" } }}
        />
      </LocalizationProvider>
    </div>
  );
}
