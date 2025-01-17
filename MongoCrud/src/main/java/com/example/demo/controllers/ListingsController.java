package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.ListingModel;
import com.example.demo.repositories.ListingRepo;

@RestController
public class ListingsController {
	
	@Autowired
	ListingRepo repo;

	@GetMapping("/listings")
	public List<ListingModel> getListings (){
		return repo.findAll();	
	}

	@PostMapping("/listing")
	public Long saveListings (@RequestBody ListingModel model){
		repo.save(model);
		return model.getId();
	}

	@PutMapping("/listing")
	public Long updateListings (@RequestBody ListingModel model){
		repo.save(model);
		return model.getId();
	}

	@DeleteMapping("/listing")
	public Long updateListings (@RequestParam Long id){
		repo.deleteById(id);
		return id;
	}
	
}
