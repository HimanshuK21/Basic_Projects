package com.example.authentication.authentication.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.example.authentication.authentication.dto.AuthenticationRequestDto;
import com.example.authentication.authentication.dto.AuthenticationResponseDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthenticationResponseDto authenticate(
        final AuthenticationRequestDto request) {
        
            System.out.println("request :::" + request.password() + request.username());
        final var authToken = UsernamePasswordAuthenticationToken
            .unauthenticated(request.username(), request.password());

            System.out.println(authToken);
        final var authentication = authenticationManager
          .authenticate(authToken);

          
          System.out.println(authentication);

        final var token = jwtService.generateToken(request.username());
        return new AuthenticationResponseDto(token);
    }
}
