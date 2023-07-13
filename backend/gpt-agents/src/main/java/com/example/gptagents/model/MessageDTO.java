package com.example.gptagents.model;

public class MessageDTO {
    private  MessageSource messageSource;
    private String content;
    private Long chatId;

    public MessageDTO() {
    }

    public MessageDTO(MessageSource messageSource, String content, Long chatId) {
        this.messageSource = messageSource;
        this.content = content;
        this.chatId = chatId;
    }

    public MessageSource getMessageSource() {
        return messageSource;
    }

    public void setMessageSource(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getChatId() {
        return chatId;
    }

    public void setChatId(Long chatId) {
        this.chatId = chatId;
    }

}
