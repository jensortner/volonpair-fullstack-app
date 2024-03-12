package com.ortner.volunpairbackend.volunteer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("api/volunteer")
public class VolunteerController {

    @PutMapping
    public ResponseEntity<VolunteerResponseDTO> getVolunteer(@RequestBody VolunteerDTO incoming) {
        VolunteerResponseDTO resp = new VolunteerResponseDTO("1", incoming.name());
         return new ResponseEntity<>(resp, HttpStatus.CREATED);
    }


}
