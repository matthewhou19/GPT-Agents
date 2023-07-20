package com.example.gptagents.Services;

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


    public MessageService(MessageRepository messageRepository, ChatService chatService, OpenAIService openAIService) {
        this.messageRepository = messageRepository;
        this.chatService =chatService;
        this.openAIService = openAIService;
    }

    public List<Message> getAllMessageByChatId(Long id) {
        System.out.println(chatService.getChatById(id));
        return messageRepository.findAllByChatId(id);
    }

    @Transactional
    public Message postMessage(Message message) {
        String aiRespond =  openAIService.chat(new openAIMessage("user", message.getContent()));
        Message resMessage = new Message();
        resMessage.setSource(MessageSource.AI);
        resMessage.setChat(message.getChat());
        resMessage.setContent(aiRespond);
        messageRepository.save(message);
        return messageRepository.save(resMessage);
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
