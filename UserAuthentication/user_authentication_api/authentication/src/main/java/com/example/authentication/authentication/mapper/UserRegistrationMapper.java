package com.example.authentication.authentication.mapper;

import org.springframework.stereotype.Component;

import com.example.authentication.authentication.dto.RegistrationRequestDto;
import com.example.authentication.authentication.dto.RegistrationResponseDto;
import com.example.authentication.authentication.entity.User;

@Component
public class UserRegistrationMapper {

    public User toEntity(RegistrationRequestDto registrationRequestDto) {
        final var user = new User();

        user.setEmail(registrationRequestDto.email());
        user.setUsername(registrationRequestDto.username());
        user.setPassword(registrationRequestDto.password());

        return user;
    }

    public RegistrationResponseDto toRegistrationResponseDto(
      final User user) {
        
        return new RegistrationResponseDto(
          user.getEmail(), user.getUsername());
    }

}
