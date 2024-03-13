package com.ortner.volunpairbackend.volunteer;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "volunteer")
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "volunteer_id")
    private Long id;
    @Column(name = "volunteer_name")
    private String name;
    @Column(name = "volunteer_age")
    private int age;
    @Column(name = "volunteer_occupation")
    private String occupation;
    @Column(name = "volunteer_email")
    private String email;
    @Column(name = "volunteer_city")
    private String city;
    @Column(name = "volunteer_imgurl")
    private String imgUrl;
    public Volunteer() {
    }



    public Volunteer(String name, int age, String email, String city, String occupation, String imgUrl) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.occupation = occupation;
        this.imgUrl = imgUrl;
    }



    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public String getOccupation() {
        return occupation;
    }

    public String getEmail() {
        return email;
    }

    public String getCity() {
        return city;
    }
    public String getImgUrl() {
        return imgUrl;
    }

    public static Volunteer fromVolunteerDTO(VolunteerDTO volunteer) {
        String name = volunteer.name();
        int age = volunteer.age();
        String city = volunteer.city();
        String occupation = volunteer.occupation();
        String email = volunteer.email();
        String imgUrl = volunteer.imgUrl();
        return new Volunteer(name,age,email,city,occupation,imgUrl);
    }
}
