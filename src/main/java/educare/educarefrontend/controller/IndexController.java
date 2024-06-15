package educare.educarefrontend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping
    public String showLogin(){
        System.out.println("Aplicação iniciada");
        return "index";
    }

    @GetMapping("/retaguarda")
    public String acessarRetaguarda(){
        System.out.println("Abrindo a retaguarda");
        return "retaguarda";
    }


}
