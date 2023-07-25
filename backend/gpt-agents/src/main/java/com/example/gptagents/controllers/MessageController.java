package com.example.gptagents.controllers;

import com.example.gptagents.Services.MessageService;
import com.example.gptagents.model.Message;
import com.example.gptagents.model.MessageDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<MessageDTO>> getAllMessageByChatId(@PathVariable Long id) {
    List<Message> list = messageService.getAllMessageByChatId(id);
    List<MessageDTO> result = new ArrayList<>();
    for (Message m: list) {
        result.add(messageService.entityToDTO(m));
    }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<MessageDTO> MessageRequest(@RequestBody MessageDTO message) {
        System.out.println(message.getContent());
        Message m = messageService.postMessage(messageService.DTOToEntity(message));
        if (m != null) {
            return new ResponseEntity<>(messageService.entityToDTO(m), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
       // System.out.println(m);
      //  for (Message m1 : m.getChat().getMessages()) {
    //        System.out.println(m1);
       // }

    }
}
