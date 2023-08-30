package com.example.gptagents.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.lang.NonNull;

@Entity
@Table(name = "Agent")
public class Agent {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String role;
    @NonNull
    private String description;
    public Agent() {
    }
    public Agent(String role, String description) {
        this.role = role;
        this.description = description;
    }

    public Agent(String agent1) {
        this.role = agent1;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
