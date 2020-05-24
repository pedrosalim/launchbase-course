const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const course = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        image_url: "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
        name: "Rocketseat",
        description: "AS MELHORES TECNOLOGIAS EM PROGRAMAÇÃO, DIRETO AO PONTO E DO JEITO CERTO.",
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/?ref=br_rs" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
        ]
    }

    return res.render("about", {about} )
})

server.get("/conteudos", function(req, res) {
    return res.render("conteudos", {items: course})
})

server.get("/conteudos/:id", function (req, res){
    const id = req.params.id;
  
    const cours = course.find(function(cours){
      return cours.id == id
    })
    if(!cours){
      return res.render("not-found")
    }
     return res.render("course", {item: cours})
  })
  

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("server")
})