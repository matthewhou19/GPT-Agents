package com.example.gptagents.apis.openai;

import java.util.List;

public class ChatResponse {
    private List<Choice> choices;

    // constructors, getters and setters

    public static class Choice {

        private int index;
        private openAIMessage message;

        public Choice(int index, openAIMessage message) {
            this.index = index;
            this.message = message;
        }

        public Choice() {
        }

        public int getIndex() {
            return index;
        }

        public void setIndex(int index) {
            this.index = index;
        }

        public openAIMessage getMessage() {
            return message;
        }

        public void setMessage(openAIMessage message) {
            this.message = message;
        }

        // constructors, getters and setters
    }

    public ChatResponse(List<Choice> choices) {
        this.choices = choices;
    }

    public ChatResponse() {
    }

    public List<Choice> getChoices() {
        return choices;
    }

    public void setChoices(List<Choice> choices) {
        this.choices = choices;
    }
}
