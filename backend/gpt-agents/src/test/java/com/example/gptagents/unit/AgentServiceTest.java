package com.example.gptagents.unit;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.Services.AgentService;
import com.example.gptagents.errors.CustomDatabaseException;
import com.example.gptagents.errors.ResourceAlreadyExistsException;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class AgentServiceTest {
    @Mock
    private AgentRepository agentRepository;

    @InjectMocks
    private AgentService agentService;

    @Test
    public void getAgentTest() {
        when(agentRepository.findById(0L)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFoundException.class, () -> {
            agentService.getAgent(0L);
        });

        Agent a = initAgent();
        assertEquals(agentService.getAgent(1L).getRole(), "Agent1");
    }


    @Test
    public void updateAgent() {
        Agent a = initAgent();
        a.setId(1L);
        when(agentRepository.save(any(Agent.class))).thenReturn(new Agent("Agent1"));
        assertEquals(agentService.updateAgent(a).getRole(), "Agent1");
    }

    @Test
    public void createAgent() {
        when(agentRepository.findAgentByRole("Agent1")).thenReturn(null);
        when(agentRepository.save(any(Agent.class))).thenReturn(new Agent("Agent1"));
        assertEquals(agentService.createAgent(new Agent("Agent1")).getRole(), "Agent1");

        when(agentRepository.findAgentByRole("Agent1")).thenReturn(new Agent("Agent1"));
        assertThrows(ResourceAlreadyExistsException.class, () -> {
           agentService.createAgent(new Agent("Agent1"));
        });
    }

    @Test
    public void deleteAgentTest() {
        initAgent();
        agentService.deleteAgent(1L);
        verify(agentRepository, times(1)).delete(any(Agent.class));

        doThrow(new RuntimeException("Database error")).when(agentRepository).delete(any(Agent.class));
        assertThrows(CustomDatabaseException.class, () ->{
            agentService.deleteAgent(1L);
        });
    }
    @Test
    public void getAllAgentsTest() {
        List<Agent> agents = new ArrayList<>();
        agents.add(new Agent("agent1"));
        agents.add(new Agent("agent2"));
        when(agentRepository.findAll()).thenReturn(agents);
        List<Agent> result =  agentService.findAllAgents();
        assertEquals(agents.get(0).getRole(), result.get(0).getRole());
        assertEquals(agents.get(1).getRole(), result.get(1).getRole());
    }

    private Agent initAgent() {
        Agent a = new Agent("Agent1");
        when(agentRepository.findById(1L)).thenReturn( Optional.of(a));
        return a;
    }



}
