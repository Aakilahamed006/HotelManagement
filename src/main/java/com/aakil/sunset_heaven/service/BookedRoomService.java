package com.aakil.sunset_heaven.service;

import java.io.IOException;
import java.io.InputStream;
import java.security.SecureRandom;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aakil.sunset_heaven.DTO.DataTransferObject;
import com.aakil.sunset_heaven.model.BookedRooms;
import com.aakil.sunset_heaven.model.Rooms;
import com.aakil.sunset_heaven.repository.BookedRoomRepository;
import com.aakil.sunset_heaven.repository.RoomRepository;

@Service
public class BookedRoomService {
	@Autowired 
	private BookedRoomRepository bookedroomrepository;
	 private final RoomRepository roomrepository;
	  @Autowired
	    public BookedRoomService(RoomRepository roomrepository) {
	        this.roomrepository = roomrepository;
	    }
	
	public String AddBookings(BookedRooms bookedrooms) {
		String bookingcode=BookingCodeGenerator();
		bookedrooms.setBookingConfirmationCode(bookingcode);
		bookedroomrepository.save(bookedrooms);
		return bookingcode;
	} 
	
 
public static String BookingCodeGenerator() {
    final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    final int CODE_LENGTH = 8;
    
    SecureRandom random = new SecureRandom();
    StringBuilder code = new StringBuilder(CODE_LENGTH);

    for (int i = 0; i < CODE_LENGTH; i++) {
        int index = random.nextInt(CHARACTERS.length());
        code.append(CHARACTERS.charAt(index));
    }

    return code.toString();
}
	

	public List <DataTransferObject> findallavailablerooms(LocalDate checkIndate,LocalDate checkOutDate){
		return roomrepository.findAvailableRooms(checkIndate,checkOutDate).stream().map(t->{
		try {
			return DTO(t);
		}catch(IOException e) {
			e.printStackTrace();
		}catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		}).collect(Collectors.toList()); 
		}
	
	
	
	
	private DataTransferObject DTO(Rooms rooms) throws IOException, SQLException {
		if(rooms.getRoomPhoto()==null) {
			return null;
		}
		 try (InputStream inputStream = rooms.getRoomPhoto().getBinaryStream()) {
			 byte[] bytes = inputStream.readAllBytes();
				String base64= Base64.getEncoder().encodeToString(bytes);
				
				return new DataTransferObject(rooms.getRoomId(),rooms.getRoomType(),rooms.getRoomPrice(),rooms.isBooked(),base64);
		 }
		 catch (SQLException | IOException e) {
		        e.printStackTrace();
		        return null;

		 
	}
	}

	public List<BookedRooms> findAllRooms() {
		return bookedroomrepository.findAll();
		
	}

	public void DeleteById(Long bookingId) {
	    bookedroomrepository.deleteById(bookingId);
		
	}
	
	
	
	    






}


