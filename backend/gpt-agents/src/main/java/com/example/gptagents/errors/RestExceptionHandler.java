package com.example.gptagents.errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class RestExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException rnfException) {
        // create payload detailing the exception
        Map<String, Object> errorDetails = new HashMap<>();
        errorDetails.put("message", rnfException.getMessage());

        // return response entity
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
}
