package com.ortner.volunpairbackend.volunteer;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer,String> {
    List<Volunteer> findAllByOccupationIgnoreCase(String searchTerm);
}
