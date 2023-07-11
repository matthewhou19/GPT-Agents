package com.example.gptagents.Services;

import com.example.gptagents.model.Agent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AgentService {
    public List<Agent> findAllAgents() {
        List<Agent> result = new ArrayList<>();
        result.add(new Agent("q11", "dsdd"));
        return result;
    }

    public Agent getAgent(Long id) {
        return null;
    }

    public boolean updateAgent(Agent agent) {
        return true;
    }

    public Agent createAgent(Agent agent) {
        return null;
    }

    public boolean deleteAgent(Long id) {
        return true;
    }

}
