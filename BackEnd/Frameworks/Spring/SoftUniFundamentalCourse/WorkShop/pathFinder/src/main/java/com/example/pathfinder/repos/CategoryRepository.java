package com.example.pathfinder.repos;

import com.example.pathfinder.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Categorie , Long> {
}

