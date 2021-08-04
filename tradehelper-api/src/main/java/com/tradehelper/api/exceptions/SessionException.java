package com.tradehelper.api.exceptions;

public class SessionException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1126756425570965426L;

	/**
	 * Exception for there is an session error
	 * 
	 * @param errorMessage Error message
	 * @param err          Error
	 */
	public SessionException(String message, Throwable err) {
		super(message, err);
	}
}