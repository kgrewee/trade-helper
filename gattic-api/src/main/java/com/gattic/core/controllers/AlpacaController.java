package com.gattic.core.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gattic.core.error.exceptions.AlpacaException;
import com.gattic.core.error.exceptions.MissingPropertiesFileException;

import io.github.mainstringargs.alpaca.AlpacaAPI;
import io.github.mainstringargs.alpaca.enums.OrderStatus;
import io.github.mainstringargs.alpaca.rest.exception.AlpacaAPIRequestException;
import io.github.mainstringargs.domain.alpaca.order.Order;

/**
 * Alpaca rest endpoints
 * 
 * @author kgrewe
 *
 */
@RestController
public class AlpacaController {
    /**
     * Base url
     * @return Welcome message
     */
    @RequestMapping("/")
    public String index(){
        return "Welcome to Gattic's Alpaca CLI";
    }
    
    /**
     * Get all orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/all")
    public List<Order> getOrders() throws Exception {
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.ALL, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
    
    /**
     * Get open orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/open")
    public List<Order> getOpenOrders() throws Exception {
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.OPEN, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		}catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
    
    /**
     * Get closed orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/closed")
    public List<Order> getClosedOrders() throws Exception {
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.CLOSED, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			throw new AlpacaException("Cannot reach alpaca.  Check credentials in alpaca.properties", e);
		} catch (Exception e) {
			throw new MissingPropertiesFileException("Cannot find alpaca.properties", e);
		}
    }
}
