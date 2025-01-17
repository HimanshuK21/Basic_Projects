package com.example.authentication.authentication.mapper;

import org.springframework.stereotype.Component;

import com.example.authentication.authentication.dto.UserProfileDto;
import com.example.authentication.authentication.entity.User;

@Component
public class UserMapper {
    public UserProfileDto toUserProfileDto(final User user) {
        return new UserProfileDto(user.getEmail(), user.getUsername());
    }
}
