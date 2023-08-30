package com.example.gptagents.Services;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.errors.CustomDatabaseException;
import com.example.gptagents.errors.ResourceAlreadyExistsException;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;

import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;


@Service
public class AgentService {
    AgentRepository agentRepository;
    Logger logger;
    public AgentService ( AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }
    public List<Agent> findAllAgents() {
        return (List<Agent>) agentRepository.findAll();
    }

    public Agent getAgent(Long id) {
        return agentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Agent", "id", id));
    }

    public Agent updateAgent(Agent agent) {
       Agent a = getAgent(agent.getId());
       return  agentRepository.save(agent);
    }

    public Agent createAgent(Agent agent) {
        Agent a = agentRepository.findAgentByRole(agent.getRole());
        if (a != null) {
            throw  new ResourceAlreadyExistsException("Agent", "role", agent.getRole());
        }
        return agentRepository.save(agent);
    }
    @Transactional
    public void deleteAgent(Long id) {
        Agent agent = getAgent(id);
        try {
            agentRepository.delete(agent);
        } catch (Exception e) {
            // Log the exception for debugging purposes
            // logger.error("Failed to delete agent", e);
            //logger.error("Error deleting agent", e);
            throw new CustomDatabaseException("Agent", "delete", id);
        }
    }
}
