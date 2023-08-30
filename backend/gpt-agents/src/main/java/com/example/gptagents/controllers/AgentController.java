package com.example.gptagents.controllers;

import jakarta.validation.Valid;
import com.example.gptagents.Services.AgentService;
import com.example.gptagents.model.Agent;
import com.example.gptagents.model.ResponseMassage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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
    public ResponseEntity<Agent> createAgent(@Valid @RequestBody Agent agent) {
        return new ResponseEntity<>(agentService.createAgent(agent), HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<ResponseMassage> updateAgent(@Valid @RequestBody Agent agent) {
     agentService.updateAgent(agent);
     return new ResponseEntity<>(new ResponseMassage("Agent", "update", "successfully"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseMassage> deleteAgent(@PathVariable Long id) {
        try {
            if (agentService.deleteAgent(id)) {
                return new ResponseEntity<>(new ResponseMassage("Agent", "delete", "successfully"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMassage("Agent", "delete", "not found"), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(new ResponseMassage("Agent", "delete", "failed"), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
