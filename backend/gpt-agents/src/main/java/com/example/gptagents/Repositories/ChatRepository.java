package com.example.gptagents.Repositories;

import com.example.gptagents.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}