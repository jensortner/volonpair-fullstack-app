package com.ortner.volunpairbackend.volunteer;

import jakarta.persistence.Entity;

public class Volunteer {
    private String id;
    private String name;
    private int age;
    private String email;
    private String about;

    public Volunteer( String name, int age, String email, String about) {
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
