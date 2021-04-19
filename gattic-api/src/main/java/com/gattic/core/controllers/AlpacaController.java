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
    @RequestMapping("/orders")
    public List<Order> getOrders(){
    	
		try {
			AlpacaAPI alpacaAPI = new AlpacaAPI();
			return alpacaAPI.getOrders(OrderStatus.ALL, null, null, null, null, null);
		} catch (AlpacaAPIRequestException e) {
			e.printStackTrace();
		}
		
		return null;
    }
}
