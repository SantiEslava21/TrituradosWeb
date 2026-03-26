package com.example.inventario.service;

import java.util.List;
import java.util.Optional;

import com.example.inventario.model.InventarioTecnologia;

public interface InventarioTecnologiaService {

    List<InventarioTecnologia> findAll();

    Optional<InventarioTecnologia> findById(Integer id);

    InventarioTecnologia save(InventarioTecnologia inventarioTecnologia);

    void deleteById(Integer id);
}
