package com.example.authentication.authentication.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.authentication.authentication.dto.RegistrationRequestDto;
import com.example.authentication.authentication.dto.RegistrationResponseDto;
import com.example.authentication.authentication.mapper.UserRegistrationMapper;
import com.example.authentication.authentication.services.UserRegistrationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class RegistrationController {

    private final UserRegistrationService userRegistrationService;

    private final UserRegistrationMapper userRegistrationMapper;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponseDto> registerUser(
      @Valid @RequestBody final RegistrationRequestDto registrationDTO) {

        final var registeredUser = userRegistrationService
          .registerUser(registrationDTO);

        return ResponseEntity.ok(
          userRegistrationMapper.toRegistrationResponseDto(registeredUser)
        );
    }

}
