package com.example.mobileleweb.domain.viewDtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class LoginUserDto {
    private String username;
    private String password;
}
