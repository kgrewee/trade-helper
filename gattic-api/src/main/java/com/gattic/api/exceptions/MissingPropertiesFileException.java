package com.gattic.api.exceptions;

public class MissingPropertiesFileException extends Exception {
	/**
	 * Exception for there is a missing properties file
	 * 
	 * @param errorMessage Error message
	 * @param err          Error
	 */
	public MissingPropertiesFileException(String message, Throwable err) {
		super(message, err);
	}
}