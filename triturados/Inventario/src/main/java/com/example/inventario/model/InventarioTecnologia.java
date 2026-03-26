package com.example.inventario.model;

import jakarta.persistence.*;

@Entity
@Table(name = "inventario_tecnologia")
public class InventarioTecnologia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "NumeroSerie", nullable = false, unique = true)
    private String NumeroSerie;

    private String Nombre;
    private String Licencia1;
    private String Licencia2;
    private String Categoria;
    private String Tipo;
    private String Ubicacion;
    private String Condicion;
    private String Responsable;
    private String Encuestador;
    private String FotoCedula;

    @Column(length = 500)
    private String observacion;
	
	
	public InventarioTecnologia(Integer id, String numeroSerie, String nombre, String licencia1, String licencia2,
			String categoria, String tipo, String ubicacion, String condicion, String responsable, String encuestador,
			String fotoCedula, String observacion) {
		super();
		this.id = id;
		NumeroSerie = numeroSerie;
		Nombre = nombre;
		Licencia1 = licencia1;
		Licencia2 = licencia2;
		Categoria = categoria;
		Tipo = tipo;
		Ubicacion = ubicacion;
		Condicion = condicion;
		Responsable = responsable;
		Encuestador = encuestador;
		FotoCedula = fotoCedula;
		this.observacion = observacion;
	}


	public InventarioTecnologia() {
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getNumeroSerie() {
		return NumeroSerie;
	}


	public void setNumeroSerie(String numeroSerie) {
		NumeroSerie = numeroSerie;
	}


	public String getNombre() {
		return Nombre;
	}


	public void setNombre(String nombre) {
		Nombre = nombre;
	}


	public String getLicencia1() {
		return Licencia1;
	}


	public void setLicencia1(String licencia1) {
		Licencia1 = licencia1;
	}


	public String getLicencia2() {
		return Licencia2;
	}


	public void setLicencia2(String licencia2) {
		Licencia2 = licencia2;
	}


	public String getCategoria() {
		return Categoria;
	}


	public void setCategoria(String categoria) {
		Categoria = categoria;
	}


	public String getTipo() {
		return Tipo;
	}


	public void setTipo(String tipo) {
		Tipo = tipo;
	}


	public String getUbicacion() {
		return Ubicacion;
	}


	public void setUbicacion(String ubicacion) {
		Ubicacion = ubicacion;
	}


	public String getCondicion() {
		return Condicion;
	}


	public void setCondicion(String condicion) {
		Condicion = condicion;
	}


	public String getResponsable() {
		return Responsable;
	}


	public void setResponsable(String responsable) {
		Responsable = responsable;
	}


	public String getEncuestador() {
		return Encuestador;
	}


	public void setEncuestador(String encuestador) {
		Encuestador = encuestador;
	}


	public String getFotoCedula() {
		return FotoCedula;
	}


	public void setFotoCedula(String fotoCedula) {
		FotoCedula = fotoCedula;
	}


	public String getObservacion() {
		return observacion;
	}


	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}


	@Override
	public String toString() {
		return "InventarioTecnologia [id=" + id + ", NumeroSerie=" + NumeroSerie + ", Nombre=" + Nombre + ", Licencia1="
				+ Licencia1 + ", Licencia2=" + Licencia2 + ", Categoria=" + Categoria + ", Tipo=" + Tipo
				+ ", Ubicacion=" + Ubicacion + ", Condicion=" + Condicion + ", Responsable=" + Responsable
				+ ", Encuestador=" + Encuestador + ", FotoCedula=" + FotoCedula + ", observacion=" + observacion + "]";
	}
	
	
	
	

}
