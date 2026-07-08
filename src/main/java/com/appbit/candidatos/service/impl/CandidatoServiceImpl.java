package com.appbit.candidatos.service.impl;

import com.appbit.candidatos.dto.request.CandidatoRequestDTO;
import com.appbit.candidatos.dto.response.CandidatoResponseDTO;
import com.appbit.candidatos.entity.Candidato;
import com.appbit.candidatos.mapper.CandidatoMapper;
import com.appbit.candidatos.repository.CandidatoRepository;
import com.appbit.candidatos.service.CandidatoService;
import com.appbit.shared.exception.AppBitException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CandidatoServiceImpl implements CandidatoService {

    private final CandidatoRepository candidatoRepository;
    private final CandidatoMapper candidatoMapper;

    @Override
    @Transactional
    public CandidatoResponseDTO crearCandidato(CandidatoRequestDTO request) {
        String currentUserEmail = SecurityContextHolder.getContext().getAuthentication().getName();

        Candidato candidato = candidatoRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new AppBitException("No se encontró el perfil de candidato asociado al usuario actual: " + currentUserEmail));

        // Actualizamos los campos recibidos del candidato
        if (request.getNombre() != null) {
            candidato.setNombre(request.getNombre());
        }

        // Si el request tiene un email y es diferente al actual, validamos que no esté duplicado
        if (request.getEmail() != null && !request.getEmail().equalsIgnoreCase(currentUserEmail)) {
            boolean yaExiste = candidatoRepository.findAll().stream()
                    .anyMatch(c -> !c.getId().equals(candidato.getId()) && c.getEmail().equalsIgnoreCase(request.getEmail()));
            if (yaExiste) {
                throw new AppBitException("Ya existe un candidato registrado con el email: " + request.getEmail());
            }
            candidato.setEmail(request.getEmail());
        }

        candidato.setSkillsTecnicas(request.getSkillsTecnicas());
        candidato.setSkillsBlandas(request.getSkillsBlandas());
        candidato.setLat(request.getLat());
        candidato.setLng(request.getLng());
        candidato.setRegion(request.getRegion());
        candidato.setResidencia(request.getResidencia());
        candidato.setDocumento(request.getDocumento());
        candidato.setGrupo(request.getGrupo());
        candidato.setFoto(request.getFoto());
        candidato.setExperienciaAnios(request.getExperienciaAnios());
        candidato.setGenero(request.getGenero());
        candidato.setNivel(request.getNivel());
        candidato.setCertificaciones(request.getCertificaciones());

        Candidato saved = candidatoRepository.save(candidato);
        return candidatoMapper.toResponse(saved);
    }
    @Override
    @Transactional
    public List<CandidatoResponseDTO> crearCandidatosBatch(List<CandidatoRequestDTO> requests) {
        List<Candidato> candidatos = requests.stream()
                .map(candidatoMapper::toEntity)
                .toList();

        List<Candidato> saved = candidatoRepository.saveAll(candidatos);
        return candidatoMapper.toResponseList(saved);
    }
    @Override
    public List<CandidatoResponseDTO> obtenerTodos() {
        return candidatoMapper.toResponseList(candidatoRepository.findAll());
    }

    @Override
    public CandidatoResponseDTO obtenerPorId(Long id) {
        Candidato candidato = candidatoRepository.findById(id)
                .orElseThrow(() -> new AppBitException("Candidato no encontrado con ID: " + id));
        return candidatoMapper.toResponse(candidato);
    }
}