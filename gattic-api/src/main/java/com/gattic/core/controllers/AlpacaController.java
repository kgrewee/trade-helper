package com.gattic.core.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<Order> getOrders(){
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.ALL, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
		
		return null;
    }
    
    /**
     * Get open orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/open")
    public List<Order> getOpenOrders(){
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.OPEN, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
		
		return null;
    }
    
    /**
     * Get closed orders
     * @return List of alpaca orders
     */
    @RequestMapping("/orders/closed")
    public List<Order> getClosedOrders(){
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.CLOSED, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
		
		return null;
    }
}
