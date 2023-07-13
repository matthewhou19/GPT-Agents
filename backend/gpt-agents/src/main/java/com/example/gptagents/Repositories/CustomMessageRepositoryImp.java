package com.example.gptagents.Repositories;

import com.example.gptagents.model.Message;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;

public class CustomMessageRepositoryImp implements CustomMessageRepository{


    private  static final String FindALLMessageFromChatId = "select Message from Message m " +
            "where m.chat.id = :id";
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Message> findAllByChatId(Long id) {
        return entityManager.createQuery(FindALLMessageFromChatId).setParameter("id", id).getResultList();
    }
}
