package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Order;
import com.example.service.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*") // 🔥 allow all (important)
public class OrderController {

    @Autowired
    private OrderService service;

    @GetMapping
    public List<Order> getOrders() {
        return service.getAllOrders();
    }

    @PostMapping
    public Order addOrder(@RequestBody Order order) {
        return service.saveOrder(order);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order order) {
        return service.saveOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        service.deleteOrder(id);
    }
}