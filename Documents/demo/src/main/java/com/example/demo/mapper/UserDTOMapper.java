package com.example.demo.mapper;

import com.example.demo.entity.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
@Mapper

public interface UserDTOMapper {
    List<UserDTO> getUser();
}

