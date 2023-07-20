package com.example.gptagents.Repositories;

import com.example.gptagents.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long>, CustomMessageRepository {

}