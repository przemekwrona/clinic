package pl.wrona.clinic.service.auth;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Profile;
import org.springframework.test.web.servlet.MockMvc;

@Profile("test")
@WebMvcTest
class AuthControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void shouldNotBlockLogin() throws Exception {
        this.mvc.perform(post("/api/login"))
                .andExpect(status().isOk());
    }

}