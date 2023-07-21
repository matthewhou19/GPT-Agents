package com.example.gptagents.Services;

import com.example.gptagents.Repositories.ChatRepository;
import com.example.gptagents.Repositories.MessageRepository;
import com.example.gptagents.apis.openai.OpenAIService;
import com.example.gptagents.apis.openai.openAIMessage;
import com.example.gptagents.model.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessageService {
    private MessageRepository messageRepository;
    private ChatService chatService;
    private OpenAIService openAIService;
    private ChatRepository chatRepository;


    public MessageService(MessageRepository messageRepository, ChatService chatService, OpenAIService openAIService, ChatRepository chatRepository) {
        this.messageRepository = messageRepository;
        this.chatService =chatService;
        this.openAIService = openAIService;
        this.chatRepository = chatRepository;
    }

    public List<Message> getAllMessageByChatId(Long id) {
        return chatService.getChatById(id).getMessages();
    }

    @Transactional
    public Message postMessage(Message message) {
        String aiRespond =  openAIService.chat(new openAIMessage("user", message.getContent()));
        Message resMessage = new Message();
        resMessage.setSource(MessageSource.AI);
        resMessage.setChat(message.getChat());
        resMessage.setContent(aiRespond);
        Chat c =message.getChat();
        c.getMessages().add(message);
        c.getMessages().add(resMessage);

        chatRepository.save(c);

        return resMessage;
    }

    public Message DTOToEntity(MessageDTO DTO) {
        Message entity =new Message();
        entity.setChat(chatService.getChatById(DTO.getChatId()));
        entity.setContent(DTO.getContent());
        entity.setSource(DTO.getMessageSource());
        return entity;
    }
    public MessageDTO entityToDTO(Message message){
        MessageDTO DTO = new MessageDTO();
        DTO.setMessageSource(message.getSource());
        DTO.setChatId(message.getChat().getId());
        DTO.setContent(message.getContent());

        return DTO;
    }



}
