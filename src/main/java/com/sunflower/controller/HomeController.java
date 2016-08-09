package com.sunflower.controller;

import com.sunflower.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class HomeController {
    @Autowired
    private UserServiceImpl userServiceImpl;


	@RequestMapping(method = RequestMethod.GET)
	public String show(ModelMap model) {
		// return "home";
		return "20150411_zhiwuyuan";
	}

	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String showHome(ModelMap model){
		return "home";
	}

	@RequestMapping(value="/20150411", method=RequestMethod.GET)
	public String show20150411(ModelMap model){
		return "20150411_zhiwuyuan";
	}

	@RequestMapping(value="/20150419", method=RequestMethod.GET)
	public String show20150419(ModelMap model){
		return "20150419_niwota";
	}
}