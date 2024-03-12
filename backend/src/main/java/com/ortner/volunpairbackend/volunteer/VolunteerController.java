package com.ortner.volunpairbackend.volunteer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("api/volunteer")
public class VolunteerController {

    VolunteerRepository repository;
    @Autowired
    public VolunteerController(VolunteerRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<VolunteerResponseDTO> newVolunteer(@RequestBody VolunteerDTO incoming) {
        VolunteerResponseDTO resp = new VolunteerResponseDTO("1", incoming.name());
         return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }


}
