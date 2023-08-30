package com.example.gptagents.errors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class RestExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(RestExceptionHandler.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException rnfException, WebRequest request) {
        logger.error("Resource not found", rnfException);
        return buildErrorResponse(rnfException.getMessage(), HttpStatus.NOT_FOUND, request);
    }

    @ExceptionHandler(ResourceAlreadyExistsException.class)
    public ResponseEntity<?> handleResourceAlreadyExistsException(
            ResourceAlreadyExistsException raeeException, WebRequest request) {
        logger.error("Resource already exists", raeeException);
        return buildErrorResponse(raeeException.getMessage(), HttpStatus.CONFLICT, request);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationExceptions(
            MethodArgumentNotValidException ex, WebRequest request) {
        Map<String, Object> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return buildErrorResponse(errors, HttpStatus.BAD_REQUEST, request);
    }

    private ResponseEntity<Map<String, Object>> buildErrorResponse(String message, HttpStatus status, WebRequest request) {
        Map<String, Object> errorDetails = new HashMap<>();
        errorDetails.put("message", message);
        return buildErrorResponse(errorDetails, status, request);
    }

    private ResponseEntity<Map<String, Object>> buildErrorResponse(Map<String, Object> messages, HttpStatus status, WebRequest request) {

        messages.put("timestamp", LocalDateTime.now());
        messages.put("path", request.getDescription(false).substring(4));  // Remove "uri=" from the description
        return new ResponseEntity<>(messages, status);
    }

    @ExceptionHandler(CustomDatabaseException.class)
    public ResponseEntity<?> handleCustomDatabaseException(CustomDatabaseException cdeException, WebRequest request) {
        logger.error("Database error", cdeException);
        return buildErrorResponse(cdeException.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }




}
