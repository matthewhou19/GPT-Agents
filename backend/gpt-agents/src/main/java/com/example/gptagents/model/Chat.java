package com.example.gptagents.model;

import com.example.gptagents.apis.openai.openAIMessage;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
public class Chat {
    @Id
    @GeneratedValue
    private Long id;
    private String roleName;
    private String description;

    @OneToMany (fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages = new ArrayList<>();

    @Override
    public String toString() {
        return "Chat{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", description='" + description + '\'' +
                ", messages=" + messages +
                '}';
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public Chat() {
    }

    public Chat(Long id, String roleName, String description) {
        this.id = id;
        this.roleName = roleName;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public openAIMessage generate() {
        return new openAIMessage("system", "this is the role you should play:" +this.roleName+"this is a description for the role:" + this.description +"I want you to generate the following message with this role, But remember: only response the last message");
    }
}
