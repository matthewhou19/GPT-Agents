package com.example.gptagents.apis.openai;

import java.util.ArrayList;
import java.util.List;

public class ChatRequest {
    private String model;
    private List<openAIMessage> messages;
    private int n;
    private double temperature;

    public ChatRequest(String model, openAIMessage message) {
        this.model = model;
        this.n = 1;
        this.messages = new ArrayList<>();
        this.messages.add(message);
    }

    public ChatRequest(String model, List<openAIMessage> messages) {
        this.model = model;
        this.n = 1;
        this.messages = new ArrayList<>();
        for (openAIMessage m : messages) {
            this.messages.add(m);
        }

    }


    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public List<openAIMessage> getMessages() {
        return messages;
    }

    public void setMessages(List<openAIMessage> messages) {
        this.messages = messages;
    }

    public int getN() {
        return n;
    }

    public void setN(int n) {
        this.n = n;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }
}
