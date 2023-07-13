package com.example.gptagents.controllers;

import com.example.gptagents.Services.MessageService;
import com.example.gptagents.model.Message;
import com.example.gptagents.model.MessageDTO;
import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Message>> getAllMessageByChatId(@PathVariable Long id) {
        return new ResponseEntity<>(messageService.getAllMessageByChatId(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<MessageDTO> MessageRequest(@RequestBody MessageDTO message) {
        return new ResponseEntity<>(messageService.entityToDTO(messageService.postMessage(messageService.DTOToEntity(message))), HttpStatus.OK);
    }
}
