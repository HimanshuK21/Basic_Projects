package com.example.authentication.authentication.dto;

public record AuthenticationRequestDto(
        String username,
        String password
) {
}