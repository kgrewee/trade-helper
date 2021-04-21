package com.tradehelper.api.exceptions;

public class AlpacaException extends Exception {
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