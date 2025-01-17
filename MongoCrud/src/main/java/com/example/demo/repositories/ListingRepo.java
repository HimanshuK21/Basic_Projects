package com.example.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.ListingModel;

public interface ListingRepo extends MongoRepository<ListingModel, Long> {

}
