package com.example.inventario.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.inventario.model.InventarioTecnologia;
import com.example.inventario.service.InventarioTecnologiaService;

@Controller
@RequestMapping("/inventario-tecnologia")
public class InventarioTecnologiaController {

    @Autowired
    private InventarioTecnologiaService inventarioTecnologiaService;

    @GetMapping
    public String listar(Model model) {
        model.addAttribute("listaInventario", inventarioTecnologiaService.findAll());
        model.addAttribute("inventarioForm", new InventarioTecnologia());
        return "inventarioTecnologia";
    }

    @PostMapping("/guardar")
    public String guardar(@ModelAttribute("inventarioForm") InventarioTecnologia inventarioTecnologia,
                          BindingResult result,
                          Model model,
                          @RequestParam(name = "fotoBase64", required = false) String fotoBase64) {
        if (result.hasErrors()) {
            model.addAttribute("listaInventario", inventarioTecnologiaService.findAll());
            return "inventarioTecnologia";
        }

        // Si viene una imagen en Base64, guardarla en disco y almacenar solo el nombre en FotoCedula
        if (fotoBase64 != null && !fotoBase64.trim().isEmpty()) {
            try {
                byte[] imageBytes = Base64.getDecoder().decode(fotoBase64);

                String fileName = UUID.randomUUID().toString() + ".png";
                Path uploadDir = Paths.get("uploads").toAbsolutePath().normalize();
                Files.createDirectories(uploadDir);
                Path filePath = uploadDir.resolve(fileName);
                Files.write(filePath, imageBytes);

                inventarioTecnologia.setFotoCedula(fileName);
            } catch (IllegalArgumentException | IOException e) {
                // Si hay error al procesar la imagen, se deja el valor anterior de FotoCedula
            }
        }

        inventarioTecnologiaService.save(inventarioTecnologia);
        return "redirect:/inventario-tecnologia";
    }

    @GetMapping("/editar/{id}")
    public String editar(@PathVariable("id") Integer id, Model model) {
        InventarioTecnologia inventario = inventarioTecnologiaService.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Id de inventario inválido: " + id));
        model.addAttribute("inventarioForm", inventario);
        model.addAttribute("listaInventario", inventarioTecnologiaService.findAll());
        return "inventarioTecnologia";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminar(@PathVariable("id") Integer id) {
        inventarioTecnologiaService.deleteById(id);
        return "redirect:/inventario-tecnologia";
    }
}
