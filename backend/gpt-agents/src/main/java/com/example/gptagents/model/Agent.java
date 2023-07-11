package com.example.gptagents.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Agent")
public class Agent {
    @Id
    @GeneratedValue
    private Long id;
}
