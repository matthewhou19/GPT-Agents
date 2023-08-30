package com.example.gptagents.unit;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.Services.AgentService;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.mock.mockito.MockBean;

@RunWith(MockitoJUnitRunner.class)
public class AgentServiceTest {
    @Mock
    private AgentRepository agentRepository;

    @InjectMocks
    private AgentService agentService;

}
