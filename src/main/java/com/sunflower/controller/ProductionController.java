package com.sunflower.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by yanggavin on 15/3/2.
 */
@Controller
@RequestMapping("/production")
public class ProductionController {
    @RequestMapping(method = RequestMethod.GET)
    public String show(ModelMap model, HttpServletRequest request){
        String productionCode = request.getParameter("code");
        model.addAttribute("code", productionCode);
        return "/productions/production_" + productionCode;
    }
}
