package com.example.gptagents.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class CustomDatabaseException extends RuntimeException{
    private String entity;
    private String processing;
    private long id;

    public CustomDatabaseException(String entity, String processing, long id) {
        super(String.format("Database schema %s can not  %s with id : %s", entity, processing, id));
        this.entity = entity;
        this.processing = processing;
        this.id = id;
    }

    public String getEntity() {
        return entity;
    }

    public String getProcessing() {
        return processing;
    }

    public long getId() {
        return id;
    }
}
