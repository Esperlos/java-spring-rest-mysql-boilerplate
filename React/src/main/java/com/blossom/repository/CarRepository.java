package com.blossom.repository;

import org.springframework.data.repository.CrudRepository;

import com.blossom.model.Car;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete



public interface CarRepository extends CrudRepository<Car, Integer> {

    List<Car> findByName(String name);

}