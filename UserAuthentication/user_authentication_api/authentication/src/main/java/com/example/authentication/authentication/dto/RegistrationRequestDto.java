package com.example.authentication.authentication.dto;

public record RegistrationRequestDto(
        String username,
        String email,
        String password
) {
}
