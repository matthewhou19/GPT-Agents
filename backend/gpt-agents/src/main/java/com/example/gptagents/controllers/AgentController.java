package com.example.gptagents.controllers;


import com.example.gptagents.Services.AgentService;
import com.example.gptagents.model.Agent;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agents")
public class AgentController {
    private final AgentService agentService;
    public AgentController(AgentService agentService){
        this.agentService = agentService;
    }

    @GetMapping
    public ResponseEntity<List<Agent>> getAllAgent() {
        List<Agent> list = agentService.findAllAgents();
        ResponseEntity<List<Agent>> response = new ResponseEntity<>(list, HttpStatus.OK);

        return response;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Agent> getAgentById(@PathVariable Long id) {
        return new ResponseEntity<>(agentService.getAgent(id), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Agent> createAgent(@RequestBody Agent agent) {
        return new ResponseEntity<>(agentService.createAgent(agent), HttpStatus.OK);
    }

    @PutMapping("update")
    public ResponseEntity<String> updateAgent(@RequestBody Agent agent) {
        if (agentService.updateAgent(agent)) {
            return ResponseEntity.ok("Successfully updated.");
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update agent.");
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteAgent(@PathVariable Long id) {
        agentService.deleteAgent(id);
        return ResponseEntity.ok("Successfully deleted.");

    }
}
