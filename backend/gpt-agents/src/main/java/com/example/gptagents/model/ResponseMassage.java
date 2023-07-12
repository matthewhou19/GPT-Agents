package com.example.gptagents.model;

public class ResponseMassage {
    private String fieldName;
    private String method;
    private String massage;

    public ResponseMassage(String fieldName, String method, String massage) {
        this.fieldName = fieldName;
        this.method = method;
        this.massage = massage;
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

    public String getMassage() {
        return massage;
    }

    public void setMassage(String massage) {
        this.massage = massage;
    }
}
