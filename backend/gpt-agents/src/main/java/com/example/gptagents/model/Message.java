package com.example.gptagents.model;

import jakarta.persistence.*;

@Entity
public class Message {
    @Id
    @GeneratedValue
    private Long id;
    @Lob
    @Column(name = "content", nullable = false)
    private String Content;

    @Enumerated(EnumType.STRING)
    private MessageSource source;

    public Message(Long id, String content, MessageSource source) {
        this.id = id;
        Content = content;
        this.source = source;
    }

    public Message() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public MessageSource getSource() {
        return source;
    }

    public void setSource(MessageSource source) {
        this.source = source;
    }

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
}
