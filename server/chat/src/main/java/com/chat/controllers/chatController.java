package com.chat.controllers;

import com.chat.models.message;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class chatController {
    @MessageMapping("/users")
    @SendTo("/chat/receive")
    public ResponseEntity<message> chat(@RequestBody message mes){
        try {
            return new ResponseEntity<message>(mes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<message>(HttpStatus.BAD_REQUEST);
        }
    }
}
