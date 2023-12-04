package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AppareilRepository;
import com.example.demo.entities.Appareil;
import com.example.demo.entities.Categorie;

@Service
public class AppareilService{
	@Autowired
	AppareilRepository apprareilRepository;

	public <S extends Appareil> S save(S entity) {
		return apprareilRepository.save(entity);
	}

	public List<Appareil> findAll() {
		return apprareilRepository.findAll();
	}

	public Optional<Appareil> findById(Long id) {
		return apprareilRepository.findById(id);
	}

	public void deleteById(Long id) {
		apprareilRepository.deleteById(id);
	}

	public void deleteAll() {
		apprareilRepository.deleteAll();
	}
	
	public ResponseEntity<Appareil> updateAppareil(Long id, Appareil appareil) {
	    Optional<Appareil> optionalAppareil = apprareilRepository.findById(id);

	    if (optionalAppareil.isPresent()) {
	        Appareil existingAppareil = optionalAppareil.get();
	        existingAppareil.setLabelle(appareil.getLabelle());
	        existingAppareil.setDescription(appareil.getDescription());
	        existingAppareil.setState(appareil.getState());
	        existingAppareil.setCategorie(appareil.getCategorie());

	        Appareil updatedAppareil = apprareilRepository.save(existingAppareil);
	        return ResponseEntity.ok(updatedAppareil);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	
}
