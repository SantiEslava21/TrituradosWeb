package com.example.inventario.config;

import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;

@Configuration
public class TomcatUploadConfig {

    @Bean
    public ServletContextInitializer tomcatUploadCustomizer() {
        return new ServletContextInitializer() {
            @Override
            public void onStartup(ServletContext servletContext) throws ServletException {
                // Aumentar el número máximo de ficheros por petición multipart en Tomcat.
                // Usamos fileCountMax con un valor alto (por ejemplo 50) para evitar FileCountLimitExceededException.
                servletContext.setInitParameter("org.apache.tomcat.util.http.fileupload.fileCountMax", "50");
            }
        };
    }
}
