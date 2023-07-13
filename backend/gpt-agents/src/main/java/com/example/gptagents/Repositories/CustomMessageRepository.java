package com.example.gptagents.Repositories;

import com.example.gptagents.model.Message;

import java.util.List;

public interface CustomMessageRepository {
    List<Message> findAllByChatId(Long id);
}
