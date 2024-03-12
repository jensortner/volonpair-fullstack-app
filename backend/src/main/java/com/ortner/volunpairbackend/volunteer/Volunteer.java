package com.ortner.volunpairbackend.volunteer;

import jakarta.persistence.*;

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
    @Column(name = "volunteer_about")
    private String about;

    public Volunteer() {
    }

    public Volunteer(String name, int age, String email, String about) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.about = about;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}
