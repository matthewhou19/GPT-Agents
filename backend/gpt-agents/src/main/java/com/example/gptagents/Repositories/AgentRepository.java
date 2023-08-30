package com.example.gptagents.Repositories;

import com.example.gptagents.model.Agent;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AgentRepository extends JpaRepository<Agent, Long> {
    Agent findAgentByRole(String role);
}
