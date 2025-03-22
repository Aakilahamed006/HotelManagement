package com.aakil.sunset_heaven.controller;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aakil.sunset_heaven.DTO.DataTransferObject;
import com.aakil.sunset_heaven.model.BookedRooms;
import com.aakil.sunset_heaven.model.Rooms;
import com.aakil.sunset_heaven.service.BookedRoomService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bookedrooms")
public class BookedRoomController {

	@Autowired
	private BookedRoomService bookroomservice;
	
	
	@PostMapping
	
	public ResponseEntity<Map<String, String>> BookRoom(@RequestBody BookedRooms bookedrooms) {
	    String confirmationCode = bookroomservice.AddBookings(bookedrooms);

	    // Create a JSON response
	    Map<String, String> response = new HashMap<>();
	    response.put("confirmationCode", confirmationCode);

	    return ResponseEntity.ok(response); 
	}

	@GetMapping("/getavailablerooms")
	public List <DataTransferObject> getAvailableRooms(@RequestParam("checkInDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkinDate,
            @RequestParam ("checkOutDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkoutDate){
				return bookroomservice.findallavailablerooms(checkinDate, checkoutDate);
	}
	@GetMapping("/getallbookings")
		public List <BookedRooms> getAllBookings(){
			return bookroomservice.findAllRooms();
		}
	
   @DeleteMapping("/deletebyid")
   public void DeleteById (@RequestParam("bookingId") Long bookingId) {
	   if(bookingId==null) {
		   System.out.print("FAILED");
	   }
	   bookroomservice.DeleteById(bookingId);
	   
   }
  
}