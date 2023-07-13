package com.example.gptagents.apis.openai;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class OpenAIService {
    @Value("${openai.model}")
    private String model;
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;
    @Value("${openai.api.url}")
    private String apiUrl;
    public String chat( openAIMessage message) {
        // create a request
        ChatRequest request = new ChatRequest(model, message);

        // call the API
        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

        // return the first response
        return response.getChoices().get(0).getMessage().getContent();
    }
}
