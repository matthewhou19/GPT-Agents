package com.example.gptagents.controllers;


import com.example.gptagents.Services.ChatService;
import com.example.gptagents.model.Chat;
import com.example.gptagents.model.ChatDTO;
import com.example.gptagents.model.CreateChatRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.PortUnreachableException;
import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping("/api/chats")
public class ChatController {
    private ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping
    public ResponseEntity<List<ChatDTO>> getALLChats() {
        List<Chat> chatList = chatService.findAllChats();
        List<ChatDTO> DTOs = new ArrayList<>();
        for (Chat chat : chatList) {
            DTOs.add(chatService.entityToDTO(chat));
        }
        return new ResponseEntity<>(DTOs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChatDTO> getChatById(@PathVariable Long id) {
        return new ResponseEntity<>(chatService.entityToDTO(chatService.getChatById(id)), HttpStatus.OK) ;
    }

    @PostMapping("/create")
    public ResponseEntity<ChatDTO> createChat(@RequestBody CreateChatRequest request) {
        System.out.println(111);
        return new ResponseEntity<>(chatService.entityToDTO(chatService.createChat(request)), HttpStatus.OK);
    }

}
