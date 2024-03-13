package com.ortner.volunpairbackend.volunteer;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("api/volunteer")
public class VolunteerController {

    VolunteerRepository repository;
    @Autowired
    public VolunteerController(VolunteerRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @CrossOrigin
    public ResponseEntity<VolunteerResponseDTO> newVolunteer(@RequestBody VolunteerDTO incoming) {

        Volunteer volunteer = repository.save(Volunteer.fromVolunteerDTO(incoming));
        VolunteerResponseDTO resp = new VolunteerResponseDTO(volunteer.getId().toString(), volunteer.getName());
         return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }
    @GetMapping()
    @CrossOrigin
    public ResponseEntity<VolunteersDTO> getVolunteers(@RequestParam String input){

        if (input.isEmpty()) {
            List<Volunteer> volunteers = repository.findAll();
            return new ResponseEntity<>(new VolunteersDTO(volunteers), HttpStatus.ACCEPTED);
        }

        List<Volunteer> volunteers = repository.
                findAllByOccupationContainingIgnoreCaseOrCityContainingIgnoreCase(input,input);
        return new ResponseEntity<>(new VolunteersDTO(volunteers), HttpStatus.ACCEPTED);
    }

    @DeleteMapping
    @CrossOrigin
    public ResponseEntity<VolunteersDTO> deleteVolunteer(@RequestParam String id) {
        repository.deleteById(id);
        return new ResponseEntity<>(new VolunteersDTO(repository.findAll()),HttpStatus.ACCEPTED);
    }


}
