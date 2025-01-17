package com.example.demo.model;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "listingsAndReviews")
public class ListingModel {
	Long id;
	String name;
	String summary;
	String space;
	String description;
	String houseRules;
	String propertyType;
	String roomType;
	List<String> amenities;
	BigDecimal price;
	BigDecimal securityDeposit;
	BigDecimal cleaningFee;
	
	
	
	

	public Long getId() {
		return id;
	}





	public void setId(Long id) {
		this.id = id;
	}





	public String getName() {
		return name;
	}





	public void setName(String name) {
		this.name = name;
	}





	public String getSummary() {
		return summary;
	}





	public void setSummary(String summary) {
		this.summary = summary;
	}





	public String getSpace() {
		return space;
	}





	public void setSpace(String space) {
		this.space = space;
	}





	public String getDescription() {
		return description;
	}





	public void setDescription(String description) {
		this.description = description;
	}





	public String getHouseRules() {
		return houseRules;
	}





	public void setHouseRules(String houseRules) {
		this.houseRules = houseRules;
	}





	public String getPropertyType() {
		return propertyType;
	}





	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}





	public String getRoomType() {
		return roomType;
	}





	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}





	public List<String> getAmenities() {
		return amenities;
	}





	public void setAmenities(List<String> amenities) {
		this.amenities = amenities;
	}





	public BigDecimal getPrice() {
		return price;
	}





	public void setPrice(BigDecimal price) {
		this.price = price;
	}





	public BigDecimal getSecurityDeposit() {
		return securityDeposit;
	}





	public void setSecurityDeposit(BigDecimal securityDeposit) {
		this.securityDeposit = securityDeposit;
	}





	public BigDecimal getCleaningFee() {
		return cleaningFee;
	}





	public void setCleaningFee(BigDecimal cleaningFee) {
		this.cleaningFee = cleaningFee;
	}





	@Override
	public String toString() {
		return "ListingModel [id=" + id + ", name=" + name + ", summary=" + summary + ", space=" + space
				+ ", discription=" + description + ", houseRules=" + houseRules + ", propertyType=" + propertyType
				+ ", roomType=" + roomType + ", amenities=" + amenities + ", price=" + price + ", securityDeposit="
				+ securityDeposit + ", cleaningFee=" + cleaningFee + "]";
	}	

}
