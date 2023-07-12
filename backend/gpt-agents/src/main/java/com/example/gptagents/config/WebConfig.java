package com.example.gptagents.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200") // Allow this origin
                .allowedMethods("GET","POST","PUT","DELETE") // Allow these HTTP methods
                .allowCredentials(true)
                .maxAge(3600);
    }
}
