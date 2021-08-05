package com.tradehelper.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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

	@RequestMapping("{id}")
	public Session get(@PathVariable String id) throws Exception {
		try {
			return sessionService.getSession(id);
		} catch (Exception e) {
			throw new SessionException("Can't get sessions", e);
		}
	}

	@RequestMapping("")
	public List<Session> getAll() throws Exception {
		try {
			return sessionService.getAllSessions();
		} catch (Exception e) {
			throw new SessionException("Can't get sessions", e);
		}
	}

	@PostMapping("alpaca/create")
	public Session createAlpaca(@RequestBody AlpacaSession session) throws Exception {
		try {
			sessionService.createSession(session);
		} catch (Exception e) {
			throw new SessionException("Can't create session", e);
		}
		return session;
	}

	@PostMapping("binance/create")
	public Session createBianance(@RequestBody BinanceSession session) throws Exception {
		try {
			sessionService.createSession(session);
		} catch (Exception e) {
			throw new SessionException("Can't create session", e);
		}
		return session;
	}

	@DeleteMapping("{id}")
	public Session delete(@PathVariable String id) throws Exception {
		try {
			sessionService.deleteSession(id);
			return new BinanceSession();
		} catch (Exception e) {
			throw new SessionException("Can't delete session", e);
		}
	}
}
