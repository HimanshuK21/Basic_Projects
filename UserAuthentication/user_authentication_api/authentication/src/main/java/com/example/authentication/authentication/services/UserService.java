package com.example.authentication.authentication.services;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.authentication.authentication.entity.User;
import com.example.authentication.authentication.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserByUsername(final String username) {
        return userRepository.findByUsername(username)
          .orElseThrow( () -> new ResponseStatusException(HttpStatus.GONE, 
              "The user account has been deleted or inactivated"));
    }
}