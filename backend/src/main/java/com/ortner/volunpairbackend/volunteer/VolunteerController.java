package com.ortner.volunpairbackend.volunteer;

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
    @GetMapping
    @CrossOrigin
    public ResponseEntity<VolunteersDTO> getVolunteers(){
        List<Volunteer> volunteers = repository.findAll();
        return new ResponseEntity<>(new VolunteersDTO(volunteers), HttpStatus.ACCEPTED);
    }

    @DeleteMapping
    @CrossOrigin
    public ResponseEntity<Void> deleteVolunteer(@RequestParam String id){
        repository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);   
    }


}
