package com.example.gptagents.model;

public class ResponseMassage {
    private String fieldName;
    private String method;
    private String message;

    public ResponseMassage(String fieldName, String method, String message) {
        this.fieldName = fieldName;
        this.method = method;
        this.message = message;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
