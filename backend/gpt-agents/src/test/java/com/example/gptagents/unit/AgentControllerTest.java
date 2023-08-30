package com.example.gptagents.unit;

import com.example.gptagents.Services.AgentService;
import com.example.gptagents.controllers.AgentController;
import com.example.gptagents.errors.ResourceAlreadyExistsException;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
@RunWith(SpringRunner.class)
@WebMvcTest(AgentController.class)
public class AgentControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AgentService agentService;

    private final String url = "/api/agents";
    @Test
    public void getAllAgentTest() throws Exception {
        // Arrange: Set up the behavior of the mock
        List<Agent> agents = Arrays.asList(new Agent("Agent1"), new Agent("Agent2"));
        when(agentService.findAllAgents()).thenReturn(agents);

        // Act: Perform the request
        mockMvc.perform(get(url))
                // Assert: Check the response
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].role", is("Agent1")))
                .andExpect(jsonPath("$[1].role", is("Agent2")));
    }

    @Test
    public void createAgentTest() throws Exception {
        when(agentService.createAgent(any(Agent.class))).thenReturn(new Agent("Agent1"));
        mockMvc.perform(post(url + "/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(new Agent("Agent1"))))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.role", is("Agent1")));

        when(agentService.createAgent((any(Agent.class)))).thenThrow(new ResourceAlreadyExistsException("Agent", "role", "duplicate role name"));
        mockMvc.perform(post(url + "/create").contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(new Agent("Agent1"))))
                .andExpect(status().isConflict()).andExpect(jsonPath("$.message", is("Agent already exist with role : 'duplicate role name'")));
    }

    @Test
    public void getAgentByIdTest() throws Exception{
        when(agentService.getAgent(1L)).thenReturn(new Agent("Agent1"));
        when(agentService.getAgent(0L)).thenThrow(new ResourceNotFoundException("Agent", "id", 0L));
        mockMvc.perform(get(url + "/1")).andExpect(status().isOk()).andExpect(jsonPath("$.role", is("Agent1")));
        mockMvc.perform(get(url + "/0")).andExpect(status().isNotFound());
    }
    @Test
    public void updateAgentTest() {

    }

    @Test
    public void deleteAgentTest() {

    }
}
