package com.example.gptagents.controllers;


import com.example.gptagents.Services.ChatService;
import com.example.gptagents.model.Chat;
import com.example.gptagents.model.CreateChatRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.PortUnreachableException;
import java.util.List;

@RestController()
@RequestMapping("/api/chats")
public class ChatController {
    private ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping
    public ResponseEntity<List<Chat>> getALLChats() {
        return new ResponseEntity<>(chatService.findAllChats(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chat> getChatById(@PathVariable Long id) {
        return new ResponseEntity<>(chatService.getChatById(id), HttpStatus.OK) ;
    }

    @PostMapping("/create")
    public ResponseEntity<Chat> createChat(@RequestBody CreateChatRequest request) {
        System.out.println(111);
        return new ResponseEntity<>(chatService.createChat(request), HttpStatus.OK);
    }

}
