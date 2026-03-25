package com.example.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entity.Order;
import com.example.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;

    public Order saveOrder(Order order) {
        return repo.save(order);
    }

    public List<Order> getAllOrders() {
        return repo.findAll();
    }

    public void deleteOrder(Long id) {
        repo.deleteById(id);
    }
}