package com.example.authentication.authentication.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.authentication.authentication.dto.RegistrationRequestDto;
import com.example.authentication.authentication.entity.User;
import com.example.authentication.authentication.repository.UserRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserRegistrationService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  @Transactional
  public User registerUser(RegistrationRequestDto request) {
      if (userRepository.existsByUsername(request.username()) || 
          userRepository.existsByEmail(request.email())) {

          throw new ValidationException(
            "Username or Email already exists");
      }

      User user = new User();
      user.setUsername(request.username());
      user.setEmail(request.email());
      user.setPassword(passwordEncoder.encode(request.password()));

      return userRepository.save(user);
  }
}