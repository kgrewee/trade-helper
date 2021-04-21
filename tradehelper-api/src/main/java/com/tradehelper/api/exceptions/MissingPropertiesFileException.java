package com.tradehelper.api.exceptions;

public class MissingPropertiesFileException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 4248656174708367328L;

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