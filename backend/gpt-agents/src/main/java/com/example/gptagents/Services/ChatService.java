package com.example.gptagents.Services;

import com.example.gptagents.Repositories.AgentRepository;
import com.example.gptagents.Repositories.ChatRepository;
import com.example.gptagents.errors.ResourceNotFoundException;
import com.example.gptagents.model.Agent;
import com.example.gptagents.model.Chat;
import com.example.gptagents.model.ChatDTO;
import com.example.gptagents.model.CreateChatRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {
    private ChatRepository chatRepository;
    private AgentService agentService;

    public ChatService(ChatRepository chatRepository, AgentService agentService) {
        this.chatRepository = chatRepository;
        this.agentService = agentService;
    }

     public List<Chat> findAllChats() {
         List<Chat> chatList = chatRepository.findAll();
        return chatList;
    }
    public Chat createChat(CreateChatRequest request) {
        Chat c = new Chat();
        Agent agent = agentService.getAgent(request.getAgentId());
        c.setRoleName(agent.getRole());
        c.setDescription(agent.getDescription());
        return chatRepository.save(c);
    }

    public Chat getChatById(Long id) {
        return chatRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Chat", "id", id));
    }

    public Chat DTOToEntity(ChatDTO DTO) {
        Chat chat =  new Chat();
        chat.setId(DTO.getId());
        chat.setDescription(DTO.getDescription());
        chat.setRoleName(DTO.getRoleName());
        return chat;
    }
    public ChatDTO entityToDTO(Chat chat) {
        ChatDTO DTO =new ChatDTO();
        DTO.setId(chat.getId());
        DTO.setDescription(chat.getDescription());
        DTO.setRoleName(chat.getRoleName());
        return  DTO;
    }
}
