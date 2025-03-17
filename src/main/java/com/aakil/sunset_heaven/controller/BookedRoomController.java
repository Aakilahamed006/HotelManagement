package com.aakil.sunset_heaven.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aakil.sunset_heaven.DTO.DataTransferObject;
import com.aakil.sunset_heaven.model.BookedRooms;
import com.aakil.sunset_heaven.model.Rooms;
import com.aakil.sunset_heaven.service.BookedRoomService;

@RestController
@RequestMapping("/api/bookedrooms")
public class BookedRoomController {

	@Autowired
	private BookedRoomService bookroomservice;
	
	
	@PostMapping
	public void BookRoom(@RequestBody BookedRooms bookedrooms) {
		bookroomservice.AddBookings(bookedrooms);
		
	}
	@GetMapping("/getavailablerooms")
	public List <DataTransferObject> getAvailableRooms(@RequestParam("checkInDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkinDate,
            @RequestParam ("checkOutDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkoutDate){
				return bookroomservice.findallavailablerooms(checkinDate, checkoutDate);
	}
}
 