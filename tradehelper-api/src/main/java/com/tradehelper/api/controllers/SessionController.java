package com.tradehelper.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tradehelper.api.exceptions.SessionException;
import com.tradehelper.api.models.AlpacaSession;
import com.tradehelper.api.models.BinanceSession;
import com.tradehelper.api.models.Session;
import com.tradehelper.api.services.SessionService;

/**
 * Handles session crud operations
 * 
 * @author kgrewe
 *
 */
@RestController
@RequestMapping("session")
public class SessionController {

	@Autowired
	private SessionService sessionService;

	/**
	 * Base url
	 * 
	 * @return Welcome message
	 */
	@RequestMapping("")
	public String index() {
		return "Welcome to TradeHelper Session API";
	}

	@PostMapping("alpaca/create")
	public Session createAlpaca(@PathVariable AlpacaSession session) throws Exception {
		try {
			sessionService.createSession(session);
		} catch (Exception e) {
			throw new SessionException("Can't create session", e);
		}
		return session;
	}

	@PostMapping("binance/create")
	public Session createBianance(@PathVariable BinanceSession session) throws Exception {
		try {
			sessionService.createSession(session);
		} catch (Exception e) {
			throw new SessionException("Can't create session", e);
		}
		return session;
	}

	@DeleteMapping("delete/{id}")
	public void delete(@RequestParam String id) throws Exception {
		try {
			sessionService.deleteSession(id);
		} catch (Exception e) {
			throw new SessionException("Can't delete session", e);
		}
	}
}
