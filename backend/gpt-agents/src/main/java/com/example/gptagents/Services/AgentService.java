package com.example.gptagents.Services;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

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

    public boolean updateAgent(Agent agent) {
        try {agentRepository.save(agent);}catch (Error e){
            return false;
        }
        return true;
    }

    public Agent createAgent(Agent agent) {
        return agentRepository.save(agent);
    }

    public boolean deleteAgent(Long id) {
       agentRepository.delete(getAgent(id));
        return true;
    }

}
