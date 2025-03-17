package com.aakil.sunset_heaven.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.aakil.sunset_heaven.model.Rooms;

@Repository
public interface RoomRepository extends JpaRepository<Rooms,Integer> {

	List<Rooms> findByRoomType(String roomType);
	
	 
	@Query("SELECT r FROM Rooms r WHERE r.id NOT IN (" + "SELECT b.room.id FROM BookedRooms b WHERE b.checkInDate < :checkOutDate " +"AND b.checkOutDate > :checkInDate)")           
	List<Rooms> findAvailableRooms(@Param("checkInDate") LocalDate checkInDate, @Param("checkOutDate") LocalDate checkOutDate);                                
	}



       