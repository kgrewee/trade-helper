package com.gattic.core.error;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ApiError {

    private int status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Timestamp timestamp;
    private String message;

    private ApiError() {
        timestamp = Timestamp.from(Instant.now());
    }

    public ApiError(HttpStatus status) {
        this();
        this.status = Integer.parseInt(status.toString());
    }

    public ApiError(HttpStatus status, Throwable ex) {
        this();
        this.status = Integer.parseInt(status.toString());
        this.message = ex.getMessage();
    }

    public ApiError(HttpStatus status, String message, Throwable ex) {
        this();
        this.status = Integer.parseInt(status.toString());
        this.message = message;
    }


	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}


	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
