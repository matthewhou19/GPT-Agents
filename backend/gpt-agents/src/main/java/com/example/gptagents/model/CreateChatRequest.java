package com.example.gptagents.model;

public class CreateChatRequest {
   private Long agentId;

    public CreateChatRequest() {
    }

    public CreateChatRequest(Long agentId) {
        this.agentId = agentId;
    }

    public Long getAgentId() {
        return agentId;
    }

    public void setAgentId(Long agentId) {
        this.agentId = agentId;
    }
}
