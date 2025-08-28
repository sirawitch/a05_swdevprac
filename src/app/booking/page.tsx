"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { Dayjs } from "dayjs";

export default function BookingPage() {
  // State for form data
  const [formData, setFormData] = useState({
    nameLastname: "", // แก้ไข: เปลี่ยนชื่อ state เป็น Camel Case
    contactNumber: "", // แก้ไข: เปลี่ยนชื่อ state เป็น Camel Case
    reserveDate: null as Dayjs | null,
    venue: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    setFormData((prev) => ({
      ...prev,
      reserveDate: date,
    }));
  };

  return (
    <main className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg mt-12">
        <Typography
          variant="h4"
          component="h1"
          className="text-center font-bold mb-6"
        >
          Venue Booking
        </Typography>

        <Box component="form" className="space-y-6">
          {/* TextField สำหรับ ชื่อและนามสกุล */}
          <TextField
            fullWidth
            id="name-lastname"
            label="Name-Lastname"
            name="nameLastname" // แก้ไข: เปลี่ยนชื่อ name ให้สอดคล้องกับ state
            variant="standard"
            value={formData.nameLastname}
            onChange={handleInputChange}
          />

          {/* TextField สำหรับ หมายเลขติดต่อ */}
          <TextField
            fullWidth
            id="contact-number"
            label="Contact-Number"
            name="contactNumber" // แก้ไข: เปลี่ยนชื่อ name ให้สอดคล้องกับ state
            variant="standard"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />

          {/* TextField แบบ Select สำหรับเลือกสถานที่ */}
          <TextField
            fullWidth
            id="venue"
            name="venue"
            select
            label="Select Venue"
            variant="standard"
            value={formData.venue}
            onChange={handleInputChange}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </TextField>

          {/* Date Picker Component */}
          <DateReserve onDateChange={handleDateChange} />

          {/* Button สำหรับส่งฟอร์ม */}
          <Button
            type="submit"
            name="Book Venue"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Book Venue
          </Button>
        </Box>
      </div>
    </main>
  );
}
