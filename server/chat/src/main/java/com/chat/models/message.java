package com.chat.models;

public class message {
    private String name;
    private String message;

    public message() {}
    message(String name, String message) {
        this.name = name;
        this.message = message;
    }

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMessage() {
        return this.message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "message{" +
                "name='" + name + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
