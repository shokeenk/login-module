package com.OAuth.kunal.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table ( name = "user")
public class user {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

   private Long Id;

   private String name;

   private String email;

   private String provider;

   private String providerId;

}
