package com.example.inventario.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Exponer la carpeta "uploads" (relativa al directorio de ejecución) como recurso estático
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }
}
