package com.example.gptagents.model;

public enum MessageSource {
    USER("User"),
    AI("AI");

    private String value;

    MessageSource(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
