package com.aakil.sunset_heaven.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class BookedRooms {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long bookingId;
	@Column(name="Check_In")
	private LocalDate checkInDate;
	@Column(name="Check_Out")
	private LocalDate checkOutDate;
	@Column(name="Guest_FullName")
	private String guestFullName;
	@Column(name="Guest_Email")
	private String guestEmail;
	@Column(name="Adults")
	private int NumOfAdults;
	@Column(name="Children")
	private int NumOfChildren;
	@Column(name="TotalGuset")
	private int TotalNoGuest; 
	@Column(name="Confirmation_Code")
	private String bookingConfirmationCode;
	@ManyToOne(fetch=FetchType.EAGER)
	
    private Rooms room;
	


public void calculateTotalNumberOfGuest() {
	this.TotalNoGuest=this.NumOfAdults+this.NumOfChildren;
}





public void setRoom(Rooms room) {
	this.room = room;
}



public void setBookingConfirmationCode(String bookingConfirmationCode) {
	this.bookingConfirmationCode = bookingConfirmationCode;
}





public LocalDate getCheckInDate() {
	return checkInDate;
}





public void setCheckInDate(LocalDate checkInDate) {
	this.checkInDate = checkInDate;
}











public LocalDate getCheckOutDate() {
	return checkOutDate;
}





public Long getBookingId() {
	return bookingId;
}





public void setBookingId(Long bookingId) {
	this.bookingId = bookingId;
}





public int getTotalNoGuest() {
	return TotalNoGuest;
}





public void setTotalNoGuest(int totalNoGuest) {
	TotalNoGuest = totalNoGuest;
}





public int getNumOfAdults() {
	return NumOfAdults;
}





public int getNumOfChildren() {
	return NumOfChildren;
}





public String getBookingConfirmationCode() {
	return bookingConfirmationCode;
}





public void setCheckOutDate(LocalDate checkOutDate) {
	this.checkOutDate = checkOutDate;
}





public String getGuestFullName() {
	return guestFullName;
}





public void setGuestFullName(String guestFullName) {
	this.guestFullName = guestFullName;
}





public String getGuestEmail() {
	return guestEmail;
}





public void setGuestEmail(String guestEmail) {
	this.guestEmail = guestEmail;
}





public void setNumOfAdults(int numOfAdults) {
	NumOfAdults = numOfAdults;
	calculateTotalNumberOfGuest();
}





public void setNumOfChildren(int numOfChildren) {
	NumOfChildren = numOfChildren;
	calculateTotalNumberOfGuest();
} 
public Integer getRoomId() {
    return room != null ? room.getRoomId() : null;
}

}
