package com.ouroom.web.cmm;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ouroom.web.post.Util;

@Controller
public class HomeCtrl {
	private static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@Autowired HomeMapper hmapper;
	
	@GetMapping("/intro")
	public String home(HttpServletRequest request,Model model) {
		Util.log.accept("인트로");
		model.addAttribute("context", Util.ctx.apply(request));
		return "intro";
	}
	
	@GetMapping("/")
	public String main(HttpServletRequest request,Model model) {
		model.addAttribute("context", Util.ctx.apply(request));
		return "main";
	}
	
	@GetMapping(value="/home/clist")
	public @ResponseBody Map<String, Object> clist(){
		Map<String, Object> m = new HashMap<>();
		m.put("list", hmapper.cList());
		return m;
	}
	@GetMapping(value="/home/slist/{category}")
	public @ResponseBody Map<String, Object> slist(@PathVariable String category){
		Map<String, Object> m = new HashMap<>();
		m.put("category", category);
		m.put("list", hmapper.sList(m));
		return m;
	}
}
