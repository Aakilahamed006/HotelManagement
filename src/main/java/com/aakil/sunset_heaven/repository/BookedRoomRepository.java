package com.aakil.sunset_heaven.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aakil.sunset_heaven.model.BookedRooms;

@Repository
public interface BookedRoomRepository extends JpaRepository<BookedRooms, Long> {
    
    
}


