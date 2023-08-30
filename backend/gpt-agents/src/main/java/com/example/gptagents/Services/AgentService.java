package com.example.gptagents.Services;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.errors.ResourceAlreadyExistsException;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class AgentService {
    AgentRepository agentRepository;
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
       if (a != null) {
           return  agentRepository.save(agent);
       }
       throw  new ResourceNotFoundException("Agent", "id", agent.getId());
    }

    public Agent createAgent(Agent agent) {
        Agent a = agentRepository.findAgentByRole(agent.getRole());
        if (a != null) {
            throw  new ResourceAlreadyExistsException("Agent", "role", agent.getRole());
        }
        return agentRepository.save(agent);
    }
    @Transactional
    public boolean deleteAgent(Long id) {

        try {
            Agent agent = getAgent(id);
            if (agent != null) {
                agentRepository.delete(agent);
                return true;
            } else {
                return false; // Agent not found
            }
        } catch (Exception e) {
            // Log the exception for debugging purposes
            // logger.error("Failed to delete agent", e);
            return false;
        }
    }

}
