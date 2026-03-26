package com.example.inventario.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.inventario.model.InventarioTecnologia;
import com.example.inventario.repository.InventarioTecnologiaRepository;

@Service
public class InventarioTecnologiaServiceImplement implements InventarioTecnologiaService {

    @Autowired
    private InventarioTecnologiaRepository inventarioTecnologiaRepository;

    @Override
    public List<InventarioTecnologia> findAll() {
        return inventarioTecnologiaRepository.findAll();
    }

    @Override
    public Optional<InventarioTecnologia> findById(Integer id) {
        return inventarioTecnologiaRepository.findById(id);
    }

    @Override
    public InventarioTecnologia save(InventarioTecnologia inventarioTecnologia) {
        return inventarioTecnologiaRepository.save(inventarioTecnologia);
    }

    @Override
    public void deleteById(Integer id) {
        inventarioTecnologiaRepository.deleteById(id);
    }
}
