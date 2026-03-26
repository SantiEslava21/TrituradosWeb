package com.example.inventario.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.inventario.model.InventarioTecnologia;

public interface InventarioTecnologiaRepository 
        extends JpaRepository<InventarioTecnologia, Integer> {

}
