package com.tradehelper.api.exceptions;

public class AlpacaException extends Exception {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1126756425570965426L;

	/**
	 * Exception for there is an alpaca error
	 * 
	 * @param errorMessage Error message
	 * @param err          Error
	 */
	public AlpacaException(String message, Throwable err) {
		super(message, err);
	}
}