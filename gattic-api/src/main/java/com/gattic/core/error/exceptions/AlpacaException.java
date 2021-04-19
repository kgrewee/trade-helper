package com.gattic.core.error.exceptions;

public class AlpacaException extends Exception {
	/**
	 * Exception for there is an alpaca error
	 * 
	 * @param errorMessage Error message
	 * @param err          Error
	 */
	public AlpacaException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}
}